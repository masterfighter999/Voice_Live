# Real-Time Voice Dubbing

> Live voice translation using Azure AI VoiceLive - Speak in one language, hear it in another!

## 🎯 What This Does

This Chrome extension captures your voice in real-time, translates it to another language using Azure AI, and plays the translated audio through your speakers. Perfect for:
- Language learning
- International meetings
- Content creation
- Accessibility

## ✨ Features

- **Real-time translation** - Sub-second latency
- **150+ languages** - Major world languages supported
- **Natural voices** - Azure Neural Text-to-Speech
- **Voice selection** - Choose from hundreds of voices
- **Easy to use** - Simple dropdown interface
- **Persistent settings** - Remembers your preferences

## 🚀 Quick Start

### 1. Prerequisites

- Python 3.9+
- Chrome Browser
- Azure OpenAI account
- Microphone & speakers

### 2. Install Backend

```bash
cd backend
pip install -r requirements.txt

# Create .env file with:
# AZURE_VOICELIVE_API_KEY=your_key
# AZURE_VOICELIVE_ENDPOINT=wss://region.api.cognitive.microsoft.com/openai/realtime
# MODEL=gpt-4o-realtime-preview

python app.py
```

### 3. Install Extension

1. Open Chrome → `chrome://extensions/`
2. Enable "Developer mode"
3. Click "Load unpacked"
4. Select `extension/` folder

### 4. Use It!

1. Click extension icon
2. Select languages and voice
3. Click "Start Dubbing"
4. Speak into microphone
5. Hear translation!

## 📚 Documentation

| Document | Purpose |
|----------|---------|
| **[SETUP_GUIDE.md](SETUP_GUIDE.md)** | Complete installation guide |
| **[QUICK_REFERENCE.md](QUICK_REFERENCE.md)** | Commands and quick tips |
| **[FILE_REFERENCE.md](FILE_REFERENCE.md)** | What each file does |

## 📁 Project Structure

```
project/
├── backend/
│   ├── app.py              # Flask server
│   ├── requirements.txt    # Dependencies
│   └── .env               # Your config
│
└── extension/
    ├── manifest.json       # Extension config
    ├── popup.html/js/css   # UI
    ├── background.js       # Service worker
    ├── offscreen.html/js   # Audio handler
    ├── languages.js        # Language selection
    └── icons/             # Extension icons
```

## 🛠️ Technology Stack

### Backend
- **Flask** - Web framework
- **Azure AI VoiceLive** - Real-time translation
- **Python asyncio** - Async operations

### Frontend
- **Chrome Extension API** - Browser integration
- **Web Audio API** - Audio capture/playback
- **AudioWorklet** - Real-time audio processing
- **Chrome Storage** - Settings persistence

## 🔄 How It Works

```
1. Microphone captures audio (16kHz PCM)
2. Extension sends to Flask backend
3. Backend streams to Azure VoiceLive
4. Azure translates speech
5. Azure synthesizes in target language
6. Backend receives dubbed audio
7. Extension plays translated audio
8. User hears translation in real-time
```

## 🌍 Supported Languages

**Major languages include:**
- English (US, UK, AU, IN, etc.)
- Spanish (Spain, Mexico, etc.)
- French, German, Italian
- Chinese (Mandarin, Cantonese)
- Japanese, Korean
- Arabic, Hindi, Portuguese
- And 140+ more...

**See `languages.js` for complete list**

## 🎙️ Voice Examples

| Language | Voice | Gender |
|----------|-------|--------|
| English (US) | AvaNeural | Female |
| English (US) | AndrewNeural | Male |
| Spanish (Spain) | AlvaroNeural | Male |
| French | DeniseNeural | Female |
| German | KatjaNeural | Female |
| Japanese | NanamiNeural | Female |

**400+ voices available across all languages**

## ⚙️ Configuration

### Backend Settings (app.py)

```python
# Translation behavior
temperature = 0.7  # Creativity (0.0-1.0)
max_response_output_tokens = 4096

# Voice Activity Detection
ServerVad(
    threshold=0.5,           # Sensitivity
    silence_duration_ms=500  # Pause detection
)
```

### Extension Settings (background.js)

```javascript
// Polling frequency
pollDubInterval = setInterval(pollDubbedAudio, 250);  // 250ms

// Backend URL
const API_BASE = "http://localhost:5000";
```

## 🐛 Troubleshooting

| Issue | Solution |
|-------|----------|
| Backend won't start | Check Python version, install dependencies |
| Can't connect to Azure | Verify API key and endpoint in `.env` |
| No microphone access | Grant permissions in Chrome |
| No audio playback | Check speaker volume and permissions |
| Poor quality | Speak clearly, reduce background noise |

**See [SETUP_GUIDE.md](SETUP_GUIDE.md) for detailed troubleshooting**

## 📊 Performance

- **Latency:** ~1-2 seconds
- **Sample Rate:** 16kHz
- **Audio Format:** PCM16 mono
- **Polling Interval:** 250ms
- **Chunk Size:** 4096 samples

## 🔒 Security

- API keys stored in `.env` (not in code)
- Google OAuth for authentication
- Local backend (no external server)
- CORS enabled only for localhost

## 📝 Requirements

### System Requirements
- **OS:** Windows, macOS, or Linux
- **RAM:** 2GB minimum
- **Network:** 5+ Mbps
- **Browser:** Chrome 90+

### Azure Requirements
- Azure subscription
- Azure OpenAI resource
- VoiceLive API access
- Active API key

## 🤝 Contributing

This is a personal project, but suggestions welcome! Feel free to:
- Report bugs
- Suggest features
- Share improvements

## 📜 License

This project uses:
- Azure AI VoiceLive SDK (MIT)
- Flask (BSD)
- Chrome Extension APIs (Apache 2.0)

## 🙏 Acknowledgments

- **