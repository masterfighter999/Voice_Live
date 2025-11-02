/**
 * offscreen.js - Handles audio capture and playback
 * Runs in offscreen document with access to getUserMedia
 */

let mediaStream = null;
let audioContext = null;
let workletNode = null;
let isCapturing = false;

// Audio playback context
let playbackContext = null;
let playbackGain = null;

/**
 * Initialize audio capture from microphone
 */
async function startCapture() {
    try {
        if (isCapturing) {
            console.log('Already capturing');
            return;
        }

        // Get microphone access
        mediaStream = await navigator.mediaDevices.getUserMedia({
            audio: {
                channelCount: 1,
                sampleRate: 16000,
                echoCancellation: true,
                noiseSuppression: true,
                autoGainControl: true
            }
        });

        // Create audio context
        audioContext = new AudioContext({ sampleRate: 16000 });
        const source = audioContext.createMediaStreamSource(mediaStream);

        // Load audio worklet for processing
        await audioContext.audioWorklet.addModule(createWorkletBlob());

        // Create worklet node
        workletNode = new AudioWorkletNode(audioContext, 'audio-processor');
        
        // Handle processed audio chunks
        workletNode.port.onmessage = (event) => {
            const audioData = event.data;
            
            // Convert Float32Array to Int16Array (PCM16LE)
            const pcm16 = float32ToPCM16(audioData);
            
            // Convert to base64
            const base64Audio = arrayBufferToBase64(pcm16.buffer);
            
            // Send to background script
            chrome.runtime.sendMessage({
                type: 'AUDIO_CHUNK',
                target: 'background',
                payload: base64Audio
            });
        };

        // Connect nodes
        source.connect(workletNode);
        workletNode.connect(audioContext.destination);

        isCapturing = true;
        console.log('Audio capture started');
        
        chrome.runtime.sendMessage({
            type: 'CAPTURE_STARTED',
            target: 'background'
        });

    } catch (error) {
        console.error('Error starting capture:', error);
        chrome.runtime.sendMessage({
            type: 'OFFSCREEN_ERROR',
            target: 'background',
            error: error.message
        });
    }
}

/**
 * Stop audio capture
 */
function stopCapture() {
    try {
        if (workletNode) {
            workletNode.disconnect();
            workletNode = null;
        }

        if (audioContext) {
            audioContext.close();
            audioContext = null;
        }

        if (mediaStream) {
            mediaStream.getTracks().forEach(track => track.stop());
            mediaStream = null;
        }

        isCapturing = false;
        console.log('Audio capture stopped');
        
        chrome.runtime.sendMessage({
            type: 'CAPTURE_STOPPED',
            target: 'background'
        });

    } catch (error) {
        console.error('Error stopping capture:', error);
    }
}

/**
 * Play dubbed audio from base64
 */
async function playAudio(base64Audio) {
    try {
        // Initialize playback context if needed
        if (!playbackContext) {
            playbackContext = new AudioContext({ sampleRate: 16000 });
            playbackGain = playbackContext.createGain();
            playbackGain.gain.value = 1.0;
            playbackGain.connect(playbackContext.destination);
        }

        // Decode base64 to array buffer
        const audioData = base64ToArrayBuffer(base64Audio);
        
        // Decode audio data (Azure returns WAV format)
        const audioBuffer = await playbackContext.decodeAudioData(audioData);
        
        // Create buffer source
        const source = playbackContext.createBufferSource();
        source.buffer = audioBuffer;
        source.connect(playbackGain);
        
        // Play audio
        source.start(0);
        console.log('Playing dubbed audio');

    } catch (error) {
        console.error('Error playing audio:', error);
    }
}

/**
 * Convert Float32Array to PCM16LE
 */
function float32ToPCM16(float32Array) {
    const pcm16 = new Int16Array(float32Array.length);
    for (let i = 0; i < float32Array.length; i++) {
        const s = Math.max(-1, Math.min(1, float32Array[i]));
        pcm16[i] = s < 0 ? s * 0x8000 : s * 0x7FFF;
    }
    return pcm16;
}

/**
 * Convert ArrayBuffer to base64
 */
function arrayBufferToBase64(buffer) {
    const bytes = new Uint8Array(buffer);
    let binary = '';
    for (let i = 0; i < bytes.length; i++) {
        binary += String.fromCharCode(bytes[i]);
    }
    return btoa(binary);
}

/**
 * Convert base64 to ArrayBuffer
 */
function base64ToArrayBuffer(base64) {
    const binaryString = atob(base64);
    const bytes = new Uint8Array(binaryString.length);
    for (let i = 0; i < binaryString.length; i++) {
        bytes[i] = binaryString.charCodeAt(i);
    }
    return bytes.buffer;
}

/**
 * Create AudioWorklet processor as a Blob URL
 */
function createWorkletBlob() {
    const workletCode = `
        class AudioProcessor extends AudioWorkletProcessor {
            constructor() {
                super();
                this.bufferSize = 4096;
                this.buffer = new Float32Array(this.bufferSize);
                this.bufferIndex = 0;
            }

            process(inputs, outputs, parameters) {
                const input = inputs[0];
                if (input.length > 0) {
                    const channelData = input[0];
                    
                    for (let i = 0; i < channelData.length; i++) {
                        this.buffer[this.bufferIndex++] = channelData[i];
                        
                        if (this.bufferIndex >= this.bufferSize) {
                            // Send buffer to main thread
                            this.port.postMessage(this.buffer.slice(0));
                            this.bufferIndex = 0;
                        }
                    }
                }
                return true;
            }
        }

        registerProcessor('audio-processor', AudioProcessor);
    `;

    const blob = new Blob([workletCode], { type: 'application/javascript' });
    return URL.createObjectURL(blob);
}

/**
 * Message handler
 */
chrome.runtime.onMessage.addListener((msg) => {
    // Only handle messages for offscreen context
    if (msg.target !== 'offscreen') {
        return;
    }

    switch (msg.type) {
        case 'START_CAPTURE':
            startCapture();
            break;

        case 'STOP_CAPTURE':
            stopCapture();
            break;

        case 'PLAY_AUDIO':
            playAudio(msg.payload);
            break;
    }
});

console.log('Offscreen document loaded');