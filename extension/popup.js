/**
 * popup.js - Chrome Extension Popup Interface
 * Handles UI interactions and communication with background script
 */

document.addEventListener('DOMContentLoaded', () => {
    // --- DOM Elements ---
    const signInButton = document.getElementById('signInButton');
    const authSection = document.getElementById('auth-section');
    const configSection = document.getElementById('config-section');
    const userProfile = document.getElementById('user-profile');
    const userEmail = document.getElementById('user-email');
    const signOutButton = document.getElementById('signOutButton');
    const statusMessage = document.getElementById('status-message');
    const startButton = document.getElementById('startButton');
    const stopButton = document.getElementById('stopButton');
    const selectedLanguagesDisplay = document.getElementById('selectedLanguagesDisplay');
    const selectedOutputLanguageDisplay = document.getElementById('selectedOutputLanguageDisplay');
    const selectedVoiceDisplay = document.getElementById('selectedVoiceDisplay');

    // --- UI Management ---
    function updateUI() {
        chrome.storage.local.get(['user', 'isDubbingActive'], (result) => {
            if (result.user) {
                authSection.classList.add('hidden');
                configSection.classList.remove('hidden');
                userProfile.classList.remove('hidden');
                userEmail.textContent = result.user.email;
            } else {
                authSection.classList.remove('hidden');
                configSection.classList.add('hidden');
                userProfile.classList.add('hidden');
            }
            if (result.isDubbingActive) {
                startButton.classList.add('hidden');
                stopButton.classList.remove('hidden');
            } else {
                startButton.classList.remove('hidden');
                stopButton.classList.add('hidden');
            }
        });
    }

    function showStatus(message, isError = false) {
        if (statusMessage) {
            statusMessage.textContent = isError ? `Error: ${message}` : message;
            statusMessage.className = isError ? 'text-sm text-red-400' : 'text-sm text-yellow-400';
            if (!isError) {
                setTimeout(() => {
                    statusMessage.textContent = '';
                    statusMessage.className = 'text-sm';
                }, 5000);
            }
        }
    }

    // --- Authentication ---
    function signIn() {
        const redirectUri = chrome.identity.getRedirectURL();
        const clientId = "1048344002670-276epud3qpv32n3vb11m7cp8s5if7erd.apps.googleusercontent.com";
        const scopes = ["openid", "email", "profile"];
        const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${clientId}&response_type=token%20id_token&redirect_uri=${encodeURIComponent(redirectUri)}&scope=${encodeURIComponent(scopes.join(" "))}&nonce=${crypto.randomUUID()}`;

        chrome.identity.launchWebAuthFlow({ url: authUrl, interactive: true },
            (redirectResponse) => {
                if (chrome.runtime.lastError || !redirectResponse) {
                    showStatus("Authentication failed: " + (chrome.runtime.lastError?.message || "No response."), true);
                    return;
                }
                const params = new URLSearchParams(redirectResponse.substring(redirectResponse.indexOf('#') + 1));
                const accessToken = params.get('access_token');
                const idToken = params.get('id_token');

                if (!accessToken || !idToken) {
                    showStatus("Authentication failed: Tokens not found in response.", true);
                    return;
                }
                fetch("https://www.googleapis.com/oauth2/v2/userinfo", {
                        headers: { "Authorization": `Bearer ${accessToken}` }
                    })
                    .then(res => {
                        if (!res.ok) throw new Error("Failed to fetch user info");
                        return res.json();
                    })
                    .then(userInfo => {
                        chrome.storage.local.set({ user: userInfo, token: idToken }, updateUI);
                    })
                    .catch(err => showStatus(err.message, true));
            }
        );
    }

    function signOut() {
        chrome.storage.local.clear(() => {
            selectedLanguagesDisplay.textContent = 'None';
            selectedOutputLanguageDisplay.textContent = 'Select a language';
            selectedVoiceDisplay.textContent = 'Select a voice';
            updateUI();
        });
    }

    // --- Dubbing Actions ---
    function startDubbing() {
        // Get selected values
        const inputLanguage = selectedLanguagesDisplay.dataset.value;
        const outputLanguage = selectedOutputLanguageDisplay.dataset.value;
        const voiceName = selectedVoiceDisplay.dataset.value;

        // Validation
        if (!inputLanguage || !outputLanguage) {
            showStatus("Please select both input and output languages before starting.", true);
            return;
        }

        if (!voiceName) {
            showStatus("Please select a voice before starting.", true);
            return;
        }

        showStatus('Starting session...');
        startButton.disabled = true;
        stopButton.disabled = true;

        // Send configuration to background script
        chrome.runtime.sendMessage({
            type: 'START_DUBBING',
            config: {
                inputLanguages: inputLanguage,
                outputLanguage: outputLanguage,
                voiceName: voiceName
            }
        });
    }

    function stopDubbing() {
        showStatus('Stopping session...');
        startButton.disabled = true;
        stopButton.disabled = true;
        chrome.runtime.sendMessage({ type: 'STOP_DUBBING' });
    }

    // --- Event Listeners ---
    if (signInButton) signInButton.addEventListener('click', signIn);
    if (signOutButton) signOutButton.addEventListener('click', signOut);
    if (startButton) startButton.addEventListener('click', startDubbing);
    if (stopButton) stopButton.addEventListener('click', stopDubbing);

    // --- Message Handler ---
    chrome.runtime.onMessage.addListener((request) => {
        if (request.type === 'UPDATE_UI_STATUS') {
            showStatus(request.message, request.isError);
            if (request.status === 'started') {
                chrome.storage.local.set({ isDubbingActive: true }, updateUI);
                startButton.disabled = false;
                stopButton.disabled = false;
            } else if (request.status === 'stopped') {
                chrome.storage.local.set({ isDubbingActive: false }, updateUI);
                startButton.disabled = false;
                stopButton.disabled = false;
            }
        }
    });

    updateUI();
    console.log('Popup loaded');
});