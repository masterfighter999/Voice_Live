"""
Real-Time Voice Dubbing Backend
Uses Azure AI VoiceLive SDK to create a translation agent
"""

import os
import uuid
import base64
import threading
import queue
import asyncio
from flask import Flask, request, jsonify
from flask_cors import CORS
from azure.core.credentials import AzureKeyCredential
from azure.ai.voicelive.aio import connect
from azure.ai.voicelive.models import (
    RequestSession,
    Modality,
    InputAudioFormat,
    OutputAudioFormat,
    ServerVad,
    AzureStandardVoice,
    ServerEventType
)

app = Flask(__name__)
CORS(app)  # Enable CORS for Chrome extension

# Azure Configuration
AZURE_VOICELIVE_API_KEY = os.getenv("AZURE_VOICELIVE_API_KEY", "YOUR_KEY")
AZURE_VOICELIVE_ENDPOINT = os.getenv("AZURE_VOICELIVE_ENDPOINT", "wss://YOUR_ENDPOINT/openai/realtime")
MODEL = os.getenv("MODEL", "gpt-4o-realtime-preview")

# Session management
sessions = {}
audio_queues = {}
dubbed_audio_streams = {}
event_loops = {}

@app.route("/start_session", methods=["POST"])
def start_session():
    """
    Start a new dubbing session.
    
    Request body:
    {
        "input_language": "en-US",
        "output_language": "es-ES",
        "voice_name": "es-ES-AlvaroNeural (Male)"
    }
    
    Returns:
    {
        "session_id": "uuid",
        "voice": "es-ES-AlvaroNeural"
    }
    """
    try:
        data = request.json
        input_language = data["input_language"]
        output_language = data["output_language"]
        voice_name = data.get("voice_name")
        
        # Validate required fields
        if not voice_name:
            return jsonify({"error": "voice_name is required"}), 400

        session_id = str(uuid.uuid4())
        
        # Extract voice code (remove gender info like "(Male)")
        voice_code = voice_name.split('(')[0].strip() if '(' in voice_name else voice_name.strip()
        
        session_config = {
            "input_language": input_language,
            "output_language": output_language,
            "voice_name": voice_code,
            "active": True
        }
        sessions[session_id] = session_config
        audio_queues[session_id] = queue.Queue()
        dubbed_audio_streams[session_id] = queue.Queue()
        
        print(f"[{session_id}] Session created: {input_language} -> {output_language} ({voice_code})")
        return jsonify({"session_id": session_id, "voice": voice_code})
    except Exception as e:
        print(f"Error starting session: {e}")
        return jsonify({"error": str(e)}), 500

@app.route("/stream_audio/<session_id>", methods=["POST"])
def stream_audio(session_id):
    """
    Receive audio chunks from client.
    
    Request body:
    {
        "audio_chunk": "base64_encoded_pcm16_audio"
    }
    """
    if session_id not in sessions:
        return jsonify({"error": "Invalid session_id"}), 404

    try:
        chunk_b64 = request.json["audio_chunk"]
        audio_queues[session_id].put(chunk_b64)  # Store base64 directly
        return jsonify({"ok": True})
    except Exception as e:
        print(f"[{session_id}] Error receiving audio: {e}")
        return jsonify({"error": str(e)}), 500

@app.route("/get_dubbed_audio/<session_id>", methods=["GET"])
def get_dubbed_audio(session_id):
    """
    Get dubbed audio chunks for playback.
    
    Returns:
    {
        "audio_chunks": ["base64_audio1", "base64_audio2", ...]
    }
    """
    if session_id not in dubbed_audio_streams:
        return jsonify({"error": "Invalid session_id"}), 404
    
    audio_list = []
    try:
        while not dubbed_audio_streams[session_id].empty():
            chunk = dubbed_audio_streams[session_id].get_nowait()
            audio_list.append(chunk)  # Already base64
    except queue.Empty:
        pass
    
    return jsonify({"audio_chunks": audio_list})

@app.route("/init_stream/<session_id>", methods=["POST"])
def init_stream(session_id):
    """Start Azure VoiceLive connection for this session"""
    if session_id not in sessions:
        return jsonify({"error": "Invalid session_id"}), 404
    
    threading.Thread(target=start_async_worker, args=(session_id,), daemon=True).start()
    return jsonify({"ok": True})

@app.route("/end_session/<session_id>", methods=["POST"])
def end_session(session_id):
    """End dubbing session and cleanup resources"""
    if session_id in sessions:
        sessions[session_id]["active"] = False
    if session_id in audio_queues:
        audio_queues[session_id].put("_STOP_")
    print(f"[{session_id}] Session end requested")
    return jsonify({"ok": True})

def start_async_worker(session_id):
    """Start async event loop in this thread"""
    loop = asyncio.new_event_loop()
    asyncio.set_event_loop(loop)
    event_loops[session_id] = loop
    
    try:
        loop.run_until_complete(azure_voicelive_worker(session_id))
    except Exception as e:
        print(f"[{session_id}] Worker error: {e}")
        import traceback
        traceback.print_exc()
    finally:
        loop.close()
        # Cleanup
        if session_id in sessions:
            del sessions[session_id]
        if session_id in audio_queues:
            del audio_queues[session_id]
        if session_id in event_loops:
            del event_loops[session_id]

async def azure_voicelive_worker(session_id):
    """
    Main worker using Azure VoiceLive SDK.
    Creates a real-time translation agent.
    """
    try:
        config = sessions[session_id]
        input_lang = config["input_language"]
        output_lang = config["output_language"]
        voice_name = config["voice_name"]
        
        out_queue = dubbed_audio_streams[session_id]
        
        print(f"[{session_id}] Connecting to Azure VoiceLive")
        print(f"[{session_id}] Input: {input_lang}, Output: {output_lang}, Voice: {voice_name}")
        
        # Create translator instructions
        translator_instructions = (
            f"You are a real-time voice translator. "
            f"Listen carefully to speech in {input_lang} and translate it naturally to {output_lang}. "
            f"Speak the translation immediately, preserving tone, emotion, and intent. "
            f"Keep translations concise and conversational. "
            f"Do not add explanations, commentary, or extra words - only translate what you hear. "
            f"Maintain natural rhythm and pacing in your speech."
        )
        
        # Connect to Azure VoiceLive
        async with connect(
            endpoint=AZURE_VOICELIVE_ENDPOINT,
            credential=AzureKeyCredential(AZURE_VOICELIVE_API_KEY),
            model=MODEL,
        ) as connection:
            
            print(f"[{session_id}] Connected to VoiceLive")
            
            # Configure session
            session_config = RequestSession(
                modalities=[Modality.AUDIO],
                instructions=translator_instructions,
                voice=AzureStandardVoice(
                    name=voice_name,
                    type="azure-standard"
                ),
                input_audio_format=InputAudioFormat.PCM16,
                output_audio_format=OutputAudioFormat.PCM16,
                turn_detection=ServerVad(
                    type="server_vad",
                    threshold=0.5,
                    prefix_padding_ms=300,
                    silence_duration_ms=500
                ),
                temperature=0.7,
                max_response_output_tokens=4096
            )
            
            await connection.session.update(session=session_config)
            print(f"[{session_id}] Session configured")
            
            # Create tasks for sending and receiving
            send_task = asyncio.create_task(send_audio_loop(connection, session_id))
            receive_task = asyncio.create_task(receive_events(connection, session_id, out_queue))
            
            # Wait for both tasks
            await asyncio.gather(send_task, receive_task)
            
    except Exception as e:
        print(f"[{session_id}] VoiceLive worker error: {e}")
        import traceback
        traceback.print_exc()
    finally:
        print(f"[{session_id}] VoiceLive worker finished")

async def send_audio_loop(connection, session_id):
    """Send audio chunks from queue to VoiceLive"""
    try:
        while sessions.get(session_id, {}).get("active", False):
            try:
                # Get audio from queue (non-blocking)
                audio_b64 = audio_queues[session_id].get_nowait()
                
                if audio_b64 == "_STOP_":
                    print(f"[{session_id}] Stop signal received")
                    break
                
                # Send audio to VoiceLive
                await connection.input_audio_buffer.append(audio=audio_b64)
                
            except queue.Empty:
                # No audio available, sleep briefly
                await asyncio.sleep(0.01)
            except Exception as e:
                print(f"[{session_id}] Error sending audio: {e}")
                break
                
    except Exception as e:
        print(f"[{session_id}] Send loop error: {e}")
    finally:
        print(f"[{session_id}] Send loop finished")

async def receive_events(connection, session_id, out_queue):
    """Receive and process events from VoiceLive"""
    try:
        async for event in connection:
            if not sessions.get(session_id, {}).get("active", False):
                break
                
            # Handle different event types
            if event.type == ServerEventType.SESSION_UPDATED:
                print(f"[{session_id}] Session ready: {event.session.id}")
                
            elif event.type == ServerEventType.INPUT_AUDIO_BUFFER_SPEECH_STARTED:
                print(f"[{session_id}] User started speaking")
                
            elif event.type == ServerEventType.INPUT_AUDIO_BUFFER_SPEECH_STOPPED:
                print(f"[{session_id}] User stopped speaking")
                
            elif event.type == ServerEventType.RESPONSE_AUDIO_DELTA:
                # Received dubbed audio chunk
                if hasattr(event, 'delta') and event.delta:
                    out_queue.put(event.delta)  # delta is base64
                    print(f"[{session_id}] Audio delta received")
                    
            elif event.type == ServerEventType.RESPONSE_AUDIO_DONE:
                print(f"[{session_id}] Audio response completed")
                
            elif event.type == ServerEventType.RESPONSE_DONE:
                print(f"[{session_id}] Response done")
                
            elif event.type == ServerEventType.ERROR:
                error_msg = event.error.message if hasattr(event, 'error') else 'Unknown error'
                print(f"[{session_id}] Error event: {error_msg}")
                
    except Exception as e:
        print(f"[{session_id}] Receive loop error: {e}")
        import traceback
        traceback.print_exc()
    finally:
        print(f"[{session_id}] Receive loop finished")
        sessions[session_id]["active"] = False

if __name__ == "__main__":
    print("Starting Real-Time Voice Dubbing Backend...")
    print(f"Endpoint: {AZURE_VOICELIVE_ENDPOINT}")
    print(f"Model: {MODEL}")
    app.run(host="0.0.0.0", port=5000, debug=True)