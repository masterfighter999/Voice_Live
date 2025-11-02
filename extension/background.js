/**
 * background.js - Service Worker for Chrome Extension
 * Handles communication between popup, offscreen document, and backend API
 */

let sessionId = null;
let pollDubInterval = null;
let offscreenDocumentCreated = false;
let isCapturing = false;

// Backend API URL
const API_BASE = "http://localhost:5000";

/**
 * Create offscreen document for audio capture and playback
 */
async function createOffscreenDocument() {
    if (offscreenDocumentCreated) return;
    
    try {
        await chrome.offscreen.createDocument({
            url: 'offscreen.html',
            reasons: ['USER_MEDIA'],
            justification: 'Capture microphone audio for real-time dubbing'
        });
        offscreenDocumentCreated = true;
        console.log('Offscreen document created');
    } catch (error) {
        console.error('Error creating offscreen document:', error);
        throw error;
    }
}

/**
 * Close offscreen document
 */
async function closeOffscreenDocument() {
    if (!offscreenDocumentCreated) return;
    
    try {
        await chrome.offscreen.closeDocument();
        offscreenDocumentCreated = false;
        console.log('Offscreen document closed');
    } catch (error) {
        console.error('Error closing offscreen document:', error);
    }
}

/**
 * Start audio capture from microphone
 */
async function startAudioCapture() {
    try {
        await createOffscreenDocument();
        
        chrome.runtime.sendMessage({
            type: 'START_CAPTURE',
            target: 'offscreen'
        });
        
        isCapturing = true;
        console.log('Audio capture started');
    } catch (error) {
        console.error('Failed to start audio capture:', error);
        notifyPopup('Failed to start audio capture', true, 'stopped');
    }
}

/**
 * Stop audio capture
 */
async function stopAudioCapture() {
    if (!isCapturing) return;
    
    try {
        chrome.runtime.sendMessage({
            type: 'STOP_CAPTURE',
            target: 'offscreen'
        });
        
        await closeOffscreenDocument();
        isCapturing = false;
        console.log('Audio capture stopped');
    } catch (error) {
        console.error('Error stopping audio capture:', error);
    }
}

/**
 * Start voice dubbing session
 */
async function startVoiceLive(config) {
    try {
        notifyPopup('Connecting to server...', false, null);
        
        // Start session with backend
        const res = await fetch(`${API_BASE}/start_session`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                input_language: config.inputLanguages,
                output_language: config.outputLanguage,
                voice_name: config.voiceName
            })
        });
        
        if (!res.ok) {
            throw new Error(`Server error: ${res.status}`);
        }
        
        const data = await res.json();
        sessionId = data.session_id;
        
        console.log('Session started:', sessionId, 'Voice:', data.voice);
        
        // Initialize streaming
        await fetch(`${API_BASE}/init_stream/${sessionId}`, { method: "POST" });
        
        // Start polling for dubbed audio
        pollDubInterval = setInterval(pollDubbedAudio, 250);
        
        // Start capturing audio
        await startAudioCapture();
        
        notifyPopup('Dubbing active', false, 'started');
    } catch (error) {
        console.error('Failed to start dubbing:', error);
        notifyPopup('Failed to start: ' + error.message, true, 'stopped');
        sessionId = null;
    }
}

/**
 * Poll for dubbed audio from backend
 */
async function pollDubbedAudio() {
    if (!sessionId) return;
    
    try {
        const res = await fetch(`${API_BASE}/get_dubbed_audio/${sessionId}`);
        
        if (!res.ok) {
            console.error('Failed to get dubbed audio:', res.status);
            return;
        }
        
        const data = await res.json();
        
        if (data.audio_chunks && data.audio_chunks.length > 0) {
            console.log(`Received ${data.audio_chunks.length} audio chunks`);
            
            // Send to offscreen document for playback
            data.audio_chunks.forEach(chunk => {
                chrome.runtime.sendMessage({
                    type: 'PLAY_AUDIO',
                    target: 'offscreen',
                    payload: chunk
                });
            });
        }
    } catch (error) {
        console.error('Error polling dubbed audio:', error);
    }
}

/**
 * Stop voice dubbing session
 */
async function stopVoiceLive() {
    try {
        await stopAudioCapture();
        
        if (sessionId) {
            await fetch(`${API_BASE}/end_session/${sessionId}`, { method: "POST" });
            console.log('Session ended:', sessionId);
            sessionId = null;
        }
        
        if (pollDubInterval) {
            clearInterval(pollDubInterval);
            pollDubInterval = null;
        }
        
        notifyPopup('Dubbing stopped', false, 'stopped');
    } catch (error) {
        console.error('Error stopping dubbing:', error);
        notifyPopup('Error stopping dubbing', true, 'stopped');
    }
}

/**
 * Send audio chunk to backend
 */
async function sendAudioChunk(base64Audio) {
    if (!sessionId) return;
    
    try {
        await fetch(`${API_BASE}/stream_audio/${sessionId}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ audio_chunk: base64Audio })
        });
    } catch (error) {
        console.error('Error sending audio chunk:', error);
    }
}

/**
 * Notify popup of status changes
 */
function notifyPopup(message, isError = false, status = null) {
    chrome.runtime.sendMessage({
        type: 'UPDATE_UI_STATUS',
        message: message,
        isError: isError,
        status: status
    }).catch(() => {
        // Popup might not be open, ignore error
    });
}

/**
 * Message handler
 */
chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
    // Check if message is for this context
    if (msg.target && msg.target !== 'background') {
        return;
    }
    
    switch (msg.type) {
        case 'START_DUBBING':
            startVoiceLive(msg.config);
            break;
            
        case 'STOP_DUBBING':
            stopVoiceLive();
            break;
            
        case 'AUDIO_CHUNK':
            sendAudioChunk(msg.payload);
            break;
            
        case 'OFFSCREEN_ERROR':
            console.error('Offscreen error:', msg.error);
            stopVoiceLive();
            notifyPopup('Audio error: ' + msg.error, true, 'stopped');
            break;
            
        case 'CAPTURE_STARTED':
            console.log('Capture confirmed from offscreen');
            break;
            
        case 'CAPTURE_STOPPED':
            console.log('Capture stopped confirmed from offscreen');
            break;
    }
});

// Cleanup on extension unload
chrome.runtime.onSuspend.addListener(() => {
    if (sessionId) {
        stopVoiceLive();
    }
});

console.log('Background service worker loaded');