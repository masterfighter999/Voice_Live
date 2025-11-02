// 🌍 Make languages global for reuse
window.languages = [
    {code: "af-ZA", name: "Afrikaans (South Africa)"},
    {code: "am-ET", name: "Amharic (Ethiopia)"},
    {code: "ar-AE", name: "Arabic (United Arab Emirates)"},
    {code: "ar-BH", name: "Arabic (Bahrain)"},
    {code: "ar-DZ", name: "Arabic (Algeria)"},
    {code: "ar-EG", name: "Arabic (Egypt)"},
    {code: "ar-IQ", name: "Arabic (Iraq)"},
    {code: "ar-JO", name: "Arabic (Jordan)"},
    {code: "ar-KW", name: "Arabic (Kuwait)"},
    {code: "ar-LB", name: "Arabic (Lebanon)"},
    {code: "ar-LY", name: "Arabic (Libya)"},
    {code: "ar-MA", name: "Arabic (Morocco)"},
    {code: "ar-OM", name: "Arabic (Oman)"},
    {code: "ar-QA", name: "Arabic (Qatar)"},
    {code: "ar-SA", name: "Arabic (Saudi Arabia)"},
    {code: "ar-SY", name: "Arabic (Syria)"},
    {code: "ar-TN", name: "Arabic (Tunisia)"},
    {code: "ar-YE", name: "Arabic (Yemen)"},
    {code: "as-IN", name: "Assamese (India)"},
    {code: "az-AZ", name: "Azerbaijani (Azerbaijan)"},
    {code: "bg-BG", name: "Bulgarian (Bulgaria)"},
    {code: "bn-BD", name: "Bangla (Bangladesh)"},
    {code: "bn-IN", name: "Bengali (India)"},
    {code: "bs-BA", name: "Bosnian (Bosnia and Herzegovina)"},
    {code: "ca-ES", name: "Catalan (Spain)"},
    {code: "cs-CZ", name: "Czech (Czechia)"},
    {code: "cy-GB", name: "Welsh (United Kingdom)"},
    {code: "da-DK", name: "Danish (Denmark)"},
    {code: "de-AT", name: "German (Austria)"},
    {code: "de-CH", name: "German (Switzerland)"},
    {code: "de-DE", name: "German (Germany)"},
    {code: "el-GR", name: "Greek (Greece)"},
    {code: "en-AU", name: "English (Australia)"},
    {code: "en-CA", name: "English (Canada)"},
    {code: "en-GB", name: "English (United Kingdom)"},
    {code: "en-HK", name: "English (Hong Kong)"},
    {code: "en-IE", name: "English (Ireland)"},
    {code: "en-IN", name: "English (India)"},
    {code: "en-KE", name: "English (Kenya)"},
    {code: "en-NG", name: "English (Nigeria)"},
    {code: "en-NZ", name: "English (New Zealand)"},
    {code: "en-PH", name: "English (Philippines)"},
    {code: "en-SG", name: "English (Singapore)"},
    {code: "en-TZ", name: "English (Tanzania)"},
    {code: "en-US", name: "English (United States)"},
    {code: "en-ZA", name: "English (South Africa)"},
    {code: "es-AR", name: "Spanish (Argentina)"},
    {code: "es-BO", name: "Spanish (Bolivia)"},
    {code: "es-CL", name: "Spanish (Chile)"},
    {code: "es-CO", name: "Spanish (Colombia)"},
    {code: "es-CR", name: "Spanish (Costa Rica)"},
    {code: "es-CU", name: "Spanish (Cuba)"},
    {code: "es-DO", name: "Spanish (Dominican Republic)"},
    {code: "es-EC", name: "Spanish (Ecuador)"},
    {code: "es-ES", name: "Spanish (Spain)"},
    {code: "es-GQ", name: "Spanish (Equatorial Guinea)"},
    {code: "es-GT", name: "Spanish (Guatemala)"},
    {code: "es-HN", name: "Spanish (Honduras)"},
    {code: "es-MX", name: "Spanish (Mexico)"},
    {code: "es-NI", name: "Spanish (Nicaragua)"},
    {code: "es-PA", name: "Spanish (Panama)"},
    {code: "es-PE", name: "Spanish (Peru)"},
    {code: "es-PR", name: "Spanish (Puerto Rico)"},
    {code: "es-PY", name: "Spanish (Paraguay)"},
    {code: "es-SV", name: "Spanish (El Salvador)"},
    {code: "es-US", name: "Spanish (United States)"},
    {code: "es-UY", name: "Spanish (Uruguay)"},
    {code: "es-VE", name: "Spanish (Venezuela)"},
    {code: "et-EE", name: "Estonian (Estonia)"},
    {code: "eu-ES", name: "Basque (Spain)"},
    {code: "fa-IR", name: "Persian (Iran)"},
    {code: "fi-FI", name: "Finnish (Finland)"},
    {code: "fil-PH", name: "Filipino (Philippines)"},
    {code: "fr-BE", name: "French (Belgium)"},
    {code: "fr-CA", name: "French (Canada)"},
    {code: "fr-CH", name: "French (Switzerland)"},
    {code: "fr-FR", name: "French (France)"},
    {code: "ga-IE", name: "Irish (Ireland)"},
    {code: "gl-ES", name: "Galician (Spain)"},
    {code: "gu-IN", name: "Gujarati (India)"},
    {code: "he-IL", name: "Hebrew (Israel)"},
    {code: "hi-IN", name: "Hindi (India)"},
    {code: "hr-HR", name: "Croatian (Croatia)"},
    {code: "hu-HU", name: "Hungarian (Hungary)"},
    {code: "hy-AM", name: "Armenian (Armenia)"},
    {code: "id-ID", name: "Indonesian (Indonesia)"},
    {code: "is-IS", name: "Icelandic (Iceland)"},
    {code: "it-IT", name: "Italian (Italy)"},
    {code: "iu-CANS-CA", name: "Inuktitut (Canada)"},
    {code: "iu-LATN-CA", name: "Inuktitut (Latin, Canada)"},
    {code: "ja-JP", name: "Japanese (Japan)"},
    {code: "jv-ID", name: "Javanese (Indonesia)"},
    {code: "ka-GE", name: "Georgian (Georgia)"},
    {code: "kk-KZ", name: "Kazakh (Kazakhstan)"},
    {code: "km-KH", name: "Khmer (Cambodia)"},
    {code: "kn-IN", name: "Kannada (India)"},
    {code: "ko-KR", name: "Korean (Korea)"},
    {code: "lo-LA", name: "Lao (Laos)"},
    {code: "lt-LT", name: "Lithuanian (Lithuania)"},
    {code: "lv-LV", name: "Latvian (Latvia)"},
    {code: "mk-MK", name: "Macedonian (North Macedonia)"},
    {code: "ml-IN", name: "Malayalam (India)"},
    {code: "mn-MN", name: "Mongolian (Mongolia)"},
    {code: "mr-IN", name: "Marathi (India)"},
    {code: "ms-MY", name: "Malay (Malaysia)"},
    {code: "mt-MT", name: "Maltese (Malta)"},
    {code: "my-MM", name: "Burmese (Myanmar)"},
    {code: "nb-NO", name: "Norwegian Bokmål (Norway)"},
    {code: "ne-NP", name: "Nepali (Nepal)"},
    {code: "nl-BE", name: "Dutch (Belgium)"},
    {code: "nl-NL", name: "Dutch (Netherlands)"},
    {code: "or-IN", name: "Odia (India)"},
    {code: "pa-IN", name: "Punjabi (India)"},
    {code: "pl-PL", name: "Polish (Poland)"},
    {code: "ps-AF", name: "Pashto (Afghanistan)"},
    {code: "pt-BR", name: "Portuguese (Brazil)"},
    {code: "pt-PT", name: "Portuguese (Portugal)"},
    {code: "ro-RO", name: "Romanian (Romania)"},
    {code: "ru-RU", name: "Russian (Russia)"},
    {code: "si-LK", name: "Sinhala (Sri Lanka)"},
    {code: "sk-SK", name: "Slovak (Slovakia)"},
    {code: "sl-SI", name: "Slovenian (Slovenia)"},
    {code: "so-SO", name: "Somali (Somalia)"},
    {code: "sq-AL", name: "Albanian (Albania)"},
    {code: "sr-LATN-RS", name: "Serbian (Latin, Serbia)"},
    {code: "sr-RS", name: "Serbian (Cyrillic, Serbia)"},
    {code: "su-ID", name: "Sundanese (Indonesia)"},
    {code: "sv-SE", name: "Swedish (Sweden)"},
    {code: "sw-KE", name: "Swahili (Kenya)"},
    {code: "sw-TZ", name: "Swahili (Tanzania)"},
    {code: "ta-IN", name: "Tamil (India)"},
    {code: "ta-LK", name: "Tamil (Sri Lanka)"},
    {code: "ta-MY", name: "Tamil (Malaysia)"},
    {code: "ta-SG", name: "Tamil (Singapore)"},
    {code: "te-IN", name: "Telugu (India)"},
    {code: "th-TH", name: "Thai (Thailand)"},
    {code: "tr-TR", name: "Turkish (Türkiye)"},
    {code: "uk-UA", name: "Ukrainian (Ukraine)"},
    {code: "ur-IN", name: "Urdu (India)"},
    {code: "ur-PK", name: "Urdu (Pakistan)"},
    {code: "uz-UZ", name: "Uzbek (Uzbekistan)"},
    {code: "vi-VN", name: "Vietnamese (Vietnam)"},
    {code: "wuu-CN", name: "Chinese (Wu, Simplified)"},
    {code: "yue-CN", name: "Chinese (Cantonese, Simplified)"},
    {code: "zh-CN", name: "Chinese (Mandarin, Simplified)"},
    {code: "zh-CN-guangxi", name: "Chinese (Guangxi Accent Mandarin)"},
    {code: "zh-CN-henan", name: "Chinese (Zhongyuan Mandarin Henan)"},
    {code: "zh-CN-liaoning", name: "Chinese (Northeastern Mandarin)"},
    {code: "zh-CN-shaanxi", name: "Chinese (Zhongyuan Mandarin Shaanxi)"},
    {code: "zh-CN-shandong", name: "Chinese (Jilu Mandarin)"},
    {code: "zh-CN-sichuan", name: "Chinese (Southwestern Mandarin)"},
    {code: "zh-HK", name: "Chinese (Cantonese, Traditional)"},
    {code: "zh-TW", name: "Chinese (Taiwanese Mandarin)"},
    {code: "zu-ZA", name: "Zulu (South Africa)"}
];

// Hardcoded voice data from azure voices.xlsx - Sheet1.csv
// Each object contains languageCode, languageName, and an array of availableVoices.
window.voices = [
    {
        "languageCode": "af-ZA",
        "languageName": "Afrikaans (South Africa)",
        "availableVoices": [
            "af-ZA-AdriNeural3 (Female)",
            "af-ZA-WillemNeural3 (Male)"
        ]
    },
    {
        "languageCode": "am-ET",
        "languageName": "Amharic (Ethiopia)",
        "availableVoices": [
            "am-ET-MekdesNeural3 (Female)",
            "am-ET-AmehaNeural3 (Male)"
        ]
    },
    {
        "languageCode": "ar-AE",
        "languageName": "Arabic (United Arab Emirates)",
        "availableVoices": [
            "ar-AE-FatimaNeural (Female)",
            "ar-AE-HamdanNeural (Male)"
        ]
    },
    {
        "languageCode": "ar-BH",
        "languageName": "Arabic (Bahrain)",
        "availableVoices": [
            "ar-BH-LailaNeural (Female)",
            "ar-BH-AliNeural (Male)"
        ]
    },
    {
        "languageCode": "ar-DZ",
        "languageName": "Arabic (Algeria)",
        "availableVoices": [
            "ar-DZ-AminaNeural (Female)",
            "ar-DZ-IsmaelNeural (Male)"
        ]
    },
    {
        "languageCode": "ar-EG",
        "languageName": "Arabic (Egypt)",
        "availableVoices": [
            "ar-EG-SalmaNeural (Female)",
            "ar-EG-ShakirNeural (Male)"
        ]
    },
    {
        "languageCode": "ar-IQ",
        "languageName": "Arabic (Iraq)",
        "availableVoices": [
            "ar-IQ-RanaNeural (Female)",
            "ar-IQ-BasselNeural (Male)"
        ]
    },
    {
        "languageCode": "ar-JO",
        "languageName": "Arabic (Jordan)",
        "availableVoices": [
            "ar-JO-SanaNeural (Female)",
            "ar-JO-TaimNeural (Male)"
        ]
    },
    {
        "languageCode": "ar-KW",
        "languageName": "Arabic (Kuwait)",
        "availableVoices": [
            "ar-KW-NouraNeural (Female)",
            "ar-KW-FahedNeural (Male)"
        ]
    },
    {
        "languageCode": "ar-LB",
        "languageName": "Arabic (Lebanon)",
        "availableVoices": [
            "ar-LB-LaylaNeural (Female)",
            "ar-LB-RamiNeural (Male)"
        ]
    },
    {
        "languageCode": "ar-LY",
        "languageName": "Arabic (Libya)",
        "availableVoices": [
            "ar-LY-ImanNeural (Female)",
            "ar-LY-OmarNeural (Male)"
        ]
    },
    {
        "languageCode": "ar-MA",
        "languageName": "Arabic (Morocco)",
        "availableVoices": [
            "ar-MA-MounaNeural (Female)",
            "ar-MA-JamalNeural (Male)"
        ]
    },
    {
        "languageCode": "ar-OM",
        "languageName": "Arabic (Oman)",
        "availableVoices": [
            "ar-OM-AyshaNeural (Female)",
            "ar-OM-AbdullahNeural (Male)"
        ]
    },
    {
        "languageCode": "ar-QA",
        "languageName": "Arabic (Qatar)",
        "availableVoices": [
            "ar-QA-AmalNeural (Female)",
            "ar-QA-MoazNeural (Male)"
        ]
    },
    {
        "languageCode": "ar-SA",
        "languageName": "Arabic (Saudi Arabia)",
        "availableVoices": [
            "ar-SA-ZariyahNeural (Female)",
            "ar-SA-HamedNeural (Male)"
        ]
    },
    {
        "languageCode": "ar-SY",
        "languageName": "Arabic (Syria)",
        "availableVoices": [
            "ar-SY-AmanyNeural (Female)",
            "ar-SY-LaithNeural (Male)"
        ]
    },
    {
        "languageCode": "ar-TN",
        "languageName": "Arabic (Tunisia)",
        "availableVoices": [
            "ar-TN-ReemNeural (Female)",
            "ar-TN-HediNeural (Male)"
        ]
    },
    {
        "languageCode": "ar-YE",
        "languageName": "Arabic (Yemen)",
        "availableVoices": [
            "ar-YE-MaryamNeural (Female)",
            "ar-YE-SalehNeural (Male)"
        ]
    },
    {
        "languageCode": "as-IN",
        "languageName": "Assamese (India)",
        "availableVoices": [
            "as-IN-YashicaNeural3 (Female)",
            "as-IN-PriyomNeural3 (Male)"
        ]
    },
    {
        "languageCode": "az-AZ",
        "languageName": "Azerbaijani (Latin, Azerbaijan)",
        "availableVoices": [
            "az-AZ-BanuNeural3 (Female)",
            "az-AZ-BabekNeural3 (Male)"
        ]
    },
    {
        "languageCode": "bg-BG",
        "languageName": "Bulgarian (Bulgaria)",
        "availableVoices": [
            "bg-BG-KalinaNeural (Female)",
            "bg-BG-BorislavNeural (Male)"
        ]
    },
    {
        "languageCode": "bn-BD",
        "languageName": "Bangla (Bangladesh)",
        "availableVoices": [
            "bn-BD-NabanitaNeural3 (Female)",
            "bn-BD-PradeepNeural3 (Male)"
        ]
    },
    {
        "languageCode": "bn-IN",
        "languageName": "Bengali (India)",
        "availableVoices": [
            "bn-IN-TanishaaNeural3 (Female)",
            "bn-IN-BashkarNeural3 (Male)"
        ]
    },
    {
        "languageCode": "bs-BA",
        "languageName": "Bosnian (Bosnia and Herzegovina)",
        "availableVoices": [
            "bs-BA-VesnaNeural3 (Female)",
            "bs-BA-GoranNeural3 (Male)"
        ]
    },
    {
        "languageCode": "ca-ES",
        "languageName": "Catalan",
        "availableVoices": [
            "ca-ES-JoanaNeural (Female)",
            "ca-ES-EnricNeural (Male)",
            "ca-ES-AlbaNeural (Female)"
        ]
    },
    {
        "languageCode": "cs-CZ",
        "languageName": "Czech (Czechia)",
        "availableVoices": [
            "cs-CZ-VlastaNeural (Female)",
            "cs-CZ-AntoninNeural (Male)"
        ]
    },
    {
        "languageCode": "cy-GB",
        "languageName": "Welsh (United Kingdom)",
        "availableVoices": [
            "cy-GB-NiaNeural3 (Female)",
            "cy-GB-AledNeural3 (Male)"
        ]
    },
    {
        "languageCode": "da-DK",
        "languageName": "Danish (Denmark)",
        "availableVoices": [
            "da-DK-ChristelNeural (Female)",
            "da-DK-JeppeNeural (Male)"
        ]
    },
    {
        "languageCode": "de-AT",
        "languageName": "German (Austria)",
        "availableVoices": [
            "de-AT-IngridNeural (Female)",
            "de-AT-JonasNeural (Male)"
        ]
    },
    {
        "languageCode": "de-CH",
        "languageName": "German (Switzerland)",
        "availableVoices": [
            "de-CH-LeniNeural (Female)",
            "de-CH-JanNeural (Male)"
        ]
    },
    {
        "languageCode": "de-DE",
        "languageName": "German (Germany)",
        "availableVoices": [
            "de-DE-KatjaNeural (Female)",
            "de-DE-ConradNeural (Male)",
            "de-DE-SeraphinaMultilingualNeural4 (Female)",
            "de-DE-FlorianMultilingualNeural4 (Male)",
            "de-DE-AmalaNeural (Female)",
            "de-DE-BerndNeural (Male)",
            "de-DE-ChristophNeural (Male)",
            "de-DE-ElkeNeural (Female)",
            "de-DE-GiselaNeural (Female, Child)",
            "de-DE-KasperNeural (Male)",
            "de-DE-KillianNeural (Male)",
            "de-DE-KlarissaNeural (Female)",
            "de-DE-KlausNeural (Male)",
            "de-DE-LouisaNeural (Female)",
            "de-DE-MajaNeural (Female)",
            "de-DE-RalfNeural (Male)",
            "de-DE-TanjaNeural (Female)",
            "de-DE-Florian:DragonHDLatestNeural (Male)",
            "de-DE-Seraphina:DragonHDLatestNeural (Female)"
        ]
    },
    {
        "languageCode": "el-GR",
        "languageName": "Greek (Greece)",
        "availableVoices": [
            "el-GR-AthinaNeural (Female)",
            "el-GR-NestorasNeural (Male)"
        ]
    },
    {
        "languageCode": "en-AU",
        "languageName": "English (Australia)",
        "availableVoices": [
            "en-AU-NatashaNeural (Female)",
            "en-AU-WilliamNeural (Male)",
            "en-AU-AnnetteNeural (Female)",
            "en-AU-CarlyNeural (Female)",
            "en-AU-DarrenNeural (Male)",
            "en-AU-DuncanNeural (Male)",
            "en-AU-ElsieNeural (Female)",
            "en-AU-FreyaNeural (Female)",
            "en-AU-JoanneNeural (Female)",
            "en-AU-KenNeural (Male)",
            "en-AU-KimNeural (Female)",
            "en-AU-NeilNeural (Male)",
            "en-AU-TimNeural (Male)",
            "en-AU-TinaNeural (Female)",
            "en-AU-WilliamMultilingualNeural1,4 (Male)"
        ]
    },
    {
        "languageCode": "en-CA",
        "languageName": "English (Canada)",
        "availableVoices": [
            "en-CA-ClaraNeural (Female)",
            "en-CA-LiamNeural (Male)"
        ]
    },
    {
        "languageCode": "en-GB",
        "languageName": "English (United Kingdom)",
        "availableVoices": [
            "en-GB-SoniaNeural (Female)",
            "en-GB-RyanNeural (Male)",
            "en-GB-LibbyNeural (Female)",
            "en-GB-AdaMultilingualNeural4 (Female)",
            "en-GB-OllieMultilingualNeural4 (Male)",
            "en-GB-AbbiNeural (Female)",
            "en-GB-AlfieNeural (Male)",
            "en-GB-BellaNeural (Female)",
            "en-GB-ElliotNeural (Male)",
            "en-GB-EthanNeural (Male)",
            "en-GB-HollieNeural (Female)",
            "en-GB-MaisieNeural (Female, Child)",
            "en-GB-NoahNeural (Male)",
            "en-GB-OliverNeural (Male)",
            "en-GB-OliviaNeural (Female)",
            "en-GB-ThomasNeural (Male)"
        ]
    },
    {
        "languageCode": "en-HK",
        "languageName": "English (Hong Kong SAR)",
        "availableVoices": [
            "en-HK-YanNeural (Female)",
            "en-HK-SamNeural (Male)"
        ]
    },
    {
        "languageCode": "en-IE",
        "languageName": "English (Ireland)",
        "availableVoices": [
            "en-IE-EmilyNeural (Female)",
            "en-IE-ConnorNeural (Male)"
        ]
    },
    {
        "languageCode": "en-IN",
        "languageName": "English (India)",
        "availableVoices": [
            "en-IN-AaravNeural (Male)",
            "en-IN-AashiNeural (Female)",
            "en-IN-AartiNeural (Female)",
            "en-IN-ArjunNeural (Male)",
            "en-IN-AnanyaNeural (Female)",
            "en-IN-KavyaNeural (Female)",
            "en-IN-KunalNeural (Male)",
            "en-IN-NeerjaNeural (Female)",
            "en-IN-PrabhatNeural (Male)",
            "en-IN-RehaanNeural (Male)",
            "en-IN-AartiIndicNeural1 (Female)",
            "en-IN-ArjunIndicNeural1 (Male)",
            "en-IN-NeerjaIndicNeural1 (Female)",
            "en-IN-PrabhatIndicNeural1 (Male)"
        ]
    },
    {
        "languageCode": "en-KE",
        "languageName": "English (Kenya)",
        "availableVoices": [
            "en-KE-AsiliaNeural (Female)",
            "en-KE-ChilembaNeural (Male)"
        ]
    },
    {
        "languageCode": "en-NG",
        "languageName": "English (Nigeria)",
        "availableVoices": [
            "en-NG-EzinneNeural (Female)",
            "en-NG-AbeoNeural (Male)"
        ]
    },
    {
        "languageCode": "en-NZ",
        "languageName": "English (New Zealand)",
        "availableVoices": [
            "en-NZ-MollyNeural (Female)",
            "en-NZ-MitchellNeural (Male)"
        ]
    },
    {
        "languageCode": "en-PH",
        "languageName": "English (Philippines)",
        "availableVoices": [
            "en-PH-RosaNeural (Female)",
            "en-PH-JamesNeural (Male)"
        ]
    },
    {
        "languageCode": "en-SG",
        "languageName": "English (Singapore)",
        "availableVoices": [
            "en-SG-LunaNeural (Female)",
            "en-SG-WayneNeural (Male)"
        ]
    },
    {
        "languageCode": "en-TZ",
        "languageName": "English (Tanzania)",
        "availableVoices": [
            "en-TZ-ImaniNeural (Female)",
            "en-TZ-ElimuNeural (Male)"
        ]
    },
    {
        "languageCode": "en-US",
        "languageName": "English (United States)",
        "availableVoices": [
            "en-US-AvaMultilingualNeural4 (Female)",
            "en-US-AndrewMultilingualNeural4 (Male)",
            "en-US-EmmaMultilingualNeural4 (Female)",
            "en-US-AlloyTurboMultilingualNeural4 (Male)",
            "en-US-EchoTurboMultilingualNeural4 (Male)",
            "en-US-FableTurboMultilingualNeural4 (Neutral)",
            "en-US-OnyxTurboMultilingualNeural4 (Male)",
            "en-US-NovaTurboMultilingualNeural4 (Female)",
            "en-US-ShimmerTurboMultilingualNeural4 (Female)",
            "en-US-BrianMultilingualNeural4 (Male)",
            "en-US-AvaNeural (Female)",
            "en-US-AndrewNeural (Male)",
            "en-US-EmmaNeural (Female)",
            "en-US-BrianNeural (Male)",
            "en-US-JennyNeural (Female)",
            "en-US-GuyNeural (Male)",
            "en-US-AriaNeural (Female)",
            "en-US-DavisNeural (Male)",
            "en-US-JaneNeural (Female)",
            "en-US-JasonNeural (Male)",
            "en-US-KaiNeural (Male)",
            "en-US-LunaNeural (Female)",
            "en-US-SaraNeural (Female)",
            "en-US-TonyNeural (Male)",
            "en-US-NancyNeural (Female)",
            "en-US-CoraMultilingualNeural4 (Female)",
            "en-US-ChristopherMultilingualNeural4 (Male)",
            "en-US-BrandonMultilingualNeural4 (Male)",
            "en-US-AmberNeural (Female)",
            "en-US-AnaNeural (Female, Child)",
            "en-US-AshleyNeural (Female)",
            "en-US-BrandonNeural (Male)",
            "en-US-ChristopherNeural (Male)",
            "en-US-CoraNeural (Female)",
            "en-US-ElizabethNeural (Female)",
            "en-US-EricNeural (Male)",
            "en-US-JacobNeural (Male)",
            "en-US-JennyMultilingualNeural4 (Female)",
            "en-US-MichelleNeural (Female)",
            "en-US-MonicaNeural (Female)",
            "en-US-RogerNeural (Male)",
            "en-US-RyanMultilingualNeural4 (Male)",
            "en-US-SteffanNeural (Male)",
            "en-US-AdamMultilingualNeural1,4 (Male)",
            "en-US-AIGenerate1Neural1 (Male)",
            "en-US-AIGenerate2Neural1 (Female)",
            "en-US-AmandaMultilingualNeural1,4 (Female)",
            "en-US-AshTurboMultilingualNeural1,4 (Male)",
            "en-US-BlueNeural1 (Neutral)",
            "en-US-DavisMultilingualNeural1,4 (Male)",
            "en-US-DerekMultilingualNeural1,4 (Male)",
            "en-US-DustinMultilingualNeural1,4 (Male)",
            "en-US-EvelynMultilingualNeural1,4 (Female)",
            "en-US-LewisMultilingualNeural1,4 (Male)",
            "en-US-LolaMultilingualNeural1,4 (Female)",
            "en-US-NancyMultilingualNeural1,4 (Female)",
            "en-US-PhoebeMultilingualNeural1,4 (Female)",
            "en-US-SamuelMultilingualNeural1,4 (Male)",
            "en-US-SerenaMultilingualNeural1,4 (Female)",
            "en-US-SteffanMultilingualNeural1,4 (Male)",
            "en-US-Adam:DragonHDLatestNeural (Male)",
            "en-US-Andrew:DragonHDLatestNeural (Male)",
            "en-US-Andrew2:DragonHDLatestNeural (Male)",
            "en-US-Ava:DragonHDLatestNeural (Female)",
            "en-US-Brian:DragonHDLatestNeural (Male)",
            "en-US-Davis:DragonHDLatestNeural (Male)",
            "en-US-Emma:DragonHDLatestNeural (Female)",
            "en-US-Emma2:DragonHDLatestNeural (Female)",
            "en-US-Steffan:DragonHDLatestNeural (Male)",
            "en-US-Alloy:DragonHDLatestNeural1 (Male)",
            "en-US-Andrew3:DragonHDLatestNeural1 (Male)",
            "en-US-Aria:DragonHDLatestNeural1 (Female)",
            "en-US-Ava3:DragonHDLatestNeural1 (Female)",
            "en-US-Bree:DragonHDLatestNeural1 (Female)",
            "en-US-Jenny:DragonHDLatestNeural1 (Female)",
            "en-US-MultiTalker-Ava-Andrew:DragonHDLatestNeural1 (Neutral)",
            "en-US-MultiTalker-Ava-Steffan:DragonHDLatestNeural1 (Neutral)",
            "en-US-Nova:DragonHDLatestNeural1 (Female)",
            "en-US-Phoebe:DragonHDLatestNeural1 (Female)",
            "en-US-Serena:DragonHDLatestNeural1 (Female)"
        ]
    },
    {
        "languageCode": "en-ZA",
        "languageName": "English (South Africa)",
        "availableVoices": [
            "en-ZA-LeahNeural (Female)",
            "en-ZA-LukeNeural (Male)"
        ]
    },
    {
        "languageCode": "es-AR",
        "languageName": "Spanish (Argentina)",
        "availableVoices": [
            "es-AR-ElenaNeural (Female)",
            "es-AR-TomasNeural (Male)"
        ]
    },
    {
        "languageCode": "es-BO",
        "languageName": "Spanish (Bolivia)",
        "availableVoices": [
            "es-BO-SofiaNeural (Female)",
            "es-BO-MarceloNeural (Male)"
        ]
    },
    {
        "languageCode": "es-CL",
        "languageName": "Spanish (Chile)",
        "availableVoices": [
            "es-CL-CatalinaNeural (Female)",
            "es-CL-LorenzoNeural (Male)"
        ]
    },
    {
        "languageCode": "es-CO",
        "languageName": "Spanish (Colombia)",
        "availableVoices": [
            "es-CO-SalomeNeural (Female)",
            "es-CO-GonzaloNeural (Male)"
        ]
    },
    {
        "languageCode": "es-CR",
        "languageName": "Spanish (Costa Rica)",
        "availableVoices": [
            "es-CR-MariaNeural (Female)",
            "es-CR-JuanNeural (Male)"
        ]
    },
    {
        "languageCode": "es-CU",
        "languageName": "Spanish (Cuba)",
        "availableVoices": [
            "es-CU-BelkysNeural (Female)",
            "es-CU-ManuelNeural (Male)"
        ]
    },
    {
        "languageCode": "es-DO",
        "languageName": "Spanish (Dominican Republic)",
        "availableVoices": [
            "es-DO-RamonaNeural (Female)",
            "es-DO-EmilioNeural (Male)"
        ]
    },
    {
        "languageCode": "es-EC",
        "languageName": "Spanish (Ecuador)",
        "availableVoices": [
            "es-EC-AndreaNeural (Female)",
            "es-EC-LuisNeural (Male)"
        ]
    },
    {
        "languageCode": "es-ES",
        "languageName": "Spanish (Spain)",
        "availableVoices": [
            "es-ES-ElviraNeural (Female)",
            "es-ES-AlvaroNeural (Male)",
            "es-ES-ArabellaMultilingualNeural4 (Female)",
            "es-ES-IsidoraMultilingualNeural4 (Female)",
            "es-ES-TristanMultilingualNeural4 (Male)",
            "es-ES-XimenaMultilingualNeural4 (Female)",
            "es-ES-AbrilNeural (Female)",
            "es-ES-ArnauNeural (Male)",
            "es-ES-DarioNeural (Male)",
            "es-ES-EliasNeural (Male)",
            "es-ES-EstrellaNeural (Female)",
            "es-ES-IreneNeural (Female)",
            "es-ES-LaiaNeural (Female)",
            "es-ES-LiaNeural (Female)",
            "es-ES-NilNeural (Male)",
            "es-ES-SaulNeural (Male)",
            "es-ES-TeoNeural (Male)",
            "es-ES-TrianaNeural (Female)",
            "es-ES-VeraNeural (Female)",
            "es-ES-XimenaNeural (Female)",
            "es-ES-Tristan:DragonHDLatestNeural (Male)",
            "es-ES-Ximena:DragonHDLatestNeural (Female)"
        ]
    },
    {
        "languageCode": "es-GQ",
        "languageName": "Spanish (Equatorial Guinea)",
        "availableVoices": [
            "es-GQ-TeresaNeural (Female)",
            "es-GQ-JavierNeural (Male)"
        ]
    },
    {
        "languageCode": "es-GT",
        "languageName": "Spanish (Guatemala)",
        "availableVoices": [
            "es-GT-MartaNeural (Female)",
            "es-GT-AndresNeural (Male)"
        ]
    },
    {
        "languageCode": "es-HN",
        "languageName": "Spanish (Honduras)",
        "availableVoices": [
            "es-HN-KarlaNeural (Female)",
            "es-HN-CarlosNeural (Male)"
        ]
    },
    {
        "languageCode": "es-MX",
        "languageName": "Spanish (Mexico)",
        "availableVoices": [
            "es-MX-DaliaNeural (Female)",
            "es-MX-JorgeNeural (Male)",
            "es-MX-BeatrizNeural (Female)",
            "es-MX-CandelaNeural (Female)",
            "es-MX-CarlotaNeural (Female)",
            "es-MX-CecilioNeural (Male)",
            "es-MX-GerardoNeural (Male)",
            "es-MX-LarissaNeural (Female)",
            "es-MX-LibertoNeural (Male)",
            "es-MX-LucianoNeural (Male)",
            "es-MX-MarinaNeural (Female, Child)",
            "es-MX-NuriaNeural (Female)",
            "es-MX-PelayoNeural (Male)",
            "es-MX-RenataNeural (Female)",
            "es-MX-YagoNeural (Male)",
            "es-MX-DaliaMultilingualNeural1,4 (Female)",
            "es-MX-JorgeMultilingualNeural1,4 (Male)"
        ]
    },
    {
        "languageCode": "es-NI",
        "languageName": "Spanish (Nicaragua)",
        "availableVoices": [
            "es-NI-YolandaNeural (Female)",
            "es-NI-FedericoNeural (Male)"
        ]
    },
    {
        "languageCode": "es-PA",
        "languageName": "Spanish (Panama)",
        "availableVoices": [
            "es-PA-MargaritaNeural (Female)",
            "es-PA-RobertoNeural (Male)"
        ]
    },
    {
        "languageCode": "es-PE",
        "languageName": "Spanish (Peru)",
        "availableVoices": [
            "es-PE-CamilaNeural (Female)",
            "es-PE-AlexNeural (Male)"
        ]
    },
    {
        "languageCode": "es-PR",
        "languageName": "Spanish (Puerto Rico)",
        "availableVoices": [
            "es-PR-KarinaNeural (Female)",
            "es-PR-VictorNeural (Male)"
        ]
    },
    {
        "languageCode": "es-PY",
        "languageName": "Spanish (Paraguay)",
        "availableVoices": [
            "es-PY-TaniaNeural (Female)",
            "es-PY-MarioNeural (Male)"
        ]
    },
    {
        "languageCode": "es-SV",
        "languageName": "Spanish (El Salvador)",
        "availableVoices": [
            "es-SV-LorenaNeural (Female)",
            "es-SV-RodrigoNeural (Male)"
        ]
    },
    {
        "languageCode": "es-US",
        "languageName": "Spanish (United States)",
        "availableVoices": [
            "es-US-PalomaNeural (Female)",
            "es-US-AlonsoNeural (Male)"
        ]
    },
    {
        "languageCode": "es-UY",
        "languageName": "Spanish (Uruguay)",
        "availableVoices": [
            "es-UY-ValentinaNeural (Female)",
            "es-UY-MateoNeural (Male)"
        ]
    },
    {
        "languageCode": "es-VE",
        "languageName": "Spanish (Venezuela)",
        "availableVoices": [
            "es-VE-PaolaNeural (Female)",
            "es-VE-SebastianNeural (Male)"
        ]
    },
    {
        "languageCode": "et-EE",
        "languageName": "Estonian (Estonia)",
        "availableVoices": [
            "et-EE-AnuNeural3 (Female)",
            "et-EE-KertNeural3 (Male)"
        ]
    },
    {
        "languageCode": "eu-ES",
        "languageName": "Basque",
        "availableVoices": [
            "eu-ES-AinhoaNeural3 (Female)",
            "eu-ES-AnderNeural3 (Male)"
        ]
    },
    {
        "languageCode": "fa-IR",
        "languageName": "Persian (Iran)",
        "availableVoices": [
            "fa-IR-DilaraNeural3 (Female)",
            "fa-IR-FaridNeural3 (Male)"
        ]
    },
    {
        "languageCode": "fi-FI",
        "languageName": "Finnish (Finland)",
        "availableVoices": [
            "fi-FI-SelmaNeural (Female)",
            "fi-FI-HarriNeural (Male)",
            "fi-FI-NooraNeural (Female)"
        ]
    },
    {
        "languageCode": "fil-PH",
        "languageName": "Filipino (Philippines)",
        "availableVoices": [
            "fil-PH-BlessicaNeural3 (Female)",
            "fil-PH-AngeloNeural3 (Male)"
        ]
    },
    {
        "languageCode": "fr-BE",
        "languageName": "French (Belgium)",
        "availableVoices": [
            "fr-BE-CharlineNeural (Female)",
            "fr-BE-GerardNeural (Male)"
        ]
    },
    {
        "languageCode": "fr-CA",
        "languageName": "French (Canada)",
        "availableVoices": [
            "fr-CA-SylvieNeural (Female)",
            "fr-CA-JeanNeural (Male)",
            "fr-CA-AntoineNeural (Male)",
            "fr-CA-ThierryNeural (Male)"
        ]
    },
    {
        "languageCode": "fr-CH",
        "languageName": "French (Switzerland)",
        "availableVoices": [
            "fr-CH-ArianeNeural (Female)",
            "fr-CH-FabriceNeural (Male)"
        ]
    },
    {
        "languageCode": "fr-FR",
        "languageName": "French (France)",
        "availableVoices": [
            "fr-FR-DeniseNeural (Female)",
            "fr-FR-HenriNeural (Male)",
            "fr-FR-VivienneMultilingualNeural4 (Female)",
            "fr-FR-RemyMultilingualNeural4 (Male)",
            "fr-FR-LucienMultilingualNeural4 (Male)",
            "fr-FR-AlainNeural (Male)",
            "fr-FR-BrigitteNeural (Female)",
            "fr-FR-CelesteNeural (Female)",
            "fr-FR-ClaudeNeural (Male)",
            "fr-FR-CoralieNeural (Female)",
            "fr-FR-EloiseNeural (Female, Child)",
            "fr-FR-JacquelineNeural (Female)",
            "fr-FR-JeromeNeural (Male)",
            "fr-FR-JosephineNeural (Female)",
            "fr-FR-MauriceNeural (Male)",
            "fr-FR-YvesNeural (Male)",
            "fr-FR-YvetteNeural (Female)",
            "fr-FR-Remy:DragonHDLatestNeural (Male)",
            "fr-FR-Vivienne:DragonHDLatestNeural (Female)"
        ]
    },
    {
        "languageCode": "ga-IE",
        "languageName": "Irish (Ireland)",
        "availableVoices": [
            "ga-IE-OrlaNeural3 (Female)",
            "ga-IE-ColmNeural3 (Male)"
        ]
    },
    {
        "languageCode": "gl-ES",
        "languageName": "Galician",
        "availableVoices": [
            "gl-ES-SabelaNeural3 (Female)",
            "gl-ES-RoiNeural3 (Male)"
        ]
    },
    {
        "languageCode": "gu-IN",
        "languageName": "Gujarati (India)",
        "availableVoices": [
            "gu-IN-DhwaniNeural (Female)",
            "gu-IN-NiranjanNeural (Male)"
        ]
    },
    {
        "languageCode": "he-IL",
        "languageName": "Hebrew (Israel)",
        "availableVoices": [
            "he-IL-HilaNeural (Female)",
            "he-IL-AvriNeural (Male)"
        ]
    },
    {
        "languageCode": "hi-IN",
        "languageName": "Hindi (India)",
        "availableVoices": [
            "hi-IN-AaravNeural (Male)",
            "hi-IN-AnanyaNeural (Female)",
            "hi-IN-AartiNeural (Female)",
            "hi-IN-ArjunNeural (Male)",
            "hi-IN-KavyaNeural (Female)",
            "hi-IN-KunalNeural (Male)",
            "hi-IN-RehaanNeural (Male)",
            "hi-IN-SwaraNeural (Female)",
            "hi-IN-MadhurNeural (Male)"
        ]
    },
    {
        "languageCode": "hr-HR",
        "languageName": "Croatian (Croatia)",
        "availableVoices": [
            "hr-HR-GabrijelaNeural (Female)",
            "hr-HR-SreckoNeural (Male)"
        ]
    },
    {
        "languageCode": "hu-HU",
        "languageName": "Hungarian (Hungary)",
        "availableVoices": [
            "hu-HU-NoemiNeural (Female)",
            "hu-HU-TamasNeural (Male)"
        ]
    },
    {
        "languageCode": "hy-AM",
        "languageName": "Armenian (Armenia)",
        "availableVoices": [
            "hy-AM-AnahitNeural3 (Female)",
            "hy-AM-HaykNeural3 (Male)"
        ]
    },
    {
        "languageCode": "id-ID",
        "languageName": "Indonesian (Indonesia)",
        "availableVoices": [
            "id-ID-GadisNeural (Female)",
            "id-ID-ArdiNeural (Male)"
        ]
    },
    {
        "languageCode": "is-IS",
        "languageName": "Icelandic (Iceland)",
        "availableVoices": [
            "is-IS-GudrunNeural3 (Female)",
            "is-IS-GunnarNeural3 (Male)"
        ]
    },
    {
        "languageCode": "it-IT",
        "languageName": "Italian (Italy)",
        "availableVoices": [
            "it-IT-ElsaNeural (Female)",
            "it-IT-IsabellaNeural (Female)",
            "it-IT-DiegoNeural (Male)",
            "it-IT-AlessioMultilingualNeural4 (Male)",
            "it-IT-IsabellaMultilingualNeural4 (Female)",
            "it-IT-GiuseppeMultilingualNeural4 (Male)",
            "it-IT-MarcelloMultilingualNeural4 (Male)",
            "it-IT-BenignoNeural (Male)",
            "it-IT-CalimeroNeural (Male)",
            "it-IT-CataldoNeural (Male)",
            "it-IT-FabiolaNeural (Female)",
            "it-IT-FiammaNeural (Female)",
            "it-IT-GianniNeural (Male)",
            "it-IT-GiuseppeNeural (Male)",
            "it-IT-ImeldaNeural (Female)",
            "it-IT-IrmaNeural (Female)",
            "it-IT-LisandroNeural (Male)",
            "it-IT-PalmiraNeural (Female)",
            "it-IT-PierinaNeural (Female, Child)",
            "it-IT-RinaldoNeural (Male)"
        ]
    },
    {
        "languageCode": "iu-CANS-CA",
        "languageName": "Inuktitut (Syllabics, Canada)",
        "availableVoices": [
            "iu-Cans-CA-SiqiniqNeural3 (Female)",
            "iu-Cans-CA-TaqqiqNeural3 (Male)"
        ]
    },
    {
        "languageCode": "iu-LATN-CA",
        "languageName": "Inuktitut (Latin, Canada)",
        "availableVoices": [
            "iu-Latn-CA-SiqiniqNeural3 (Female)",
            "iu-Latn-CA-TaqqiqNeural3 (Male)"
        ]
    },
    {
        "languageCode": "ja-JP",
        "languageName": "Japanese (Japan)",
        "availableVoices": [
            "ja-JP-NanamiNeural (Female)",
            "ja-JP-KeitaNeural (Male)",
            "ja-JP-AoiNeural (Female)",
            "ja-JP-DaichiNeural (Male)",
            "ja-JP-MayuNeural (Female)",
            "ja-JP-NaokiNeural (Male)",
            "ja-JP-ShioriNeural (Female)",
            "ja-JP-MasaruMultilingualNeural1,4 (Male)",
            "ja-JP-Masaru:DragonHDLatestNeural (Male)",
            "ja-JP-Nanami:DragonHDLatestNeural (Female)"
        ]
    },
    {
        "languageCode": "jv-ID",
        "languageName": "Javanese (Latin, Indonesia)",
        "availableVoices": [
            "jv-ID-SitiNeural3 (Female)",
            "jv-ID-DimasNeural3 (Male)"
        ]
    },
    {
        "languageCode": "ka-GE",
        "languageName": "Georgian (Georgia)",
        "availableVoices": [
            "ka-GE-EkaNeural3 (Female)",
            "ka-GE-GiorgiNeural3 (Male)"
        ]
    },
    {
        "languageCode": "kk-KZ",
        "languageName": "Kazakh (Kazakhstan)",
        "availableVoices": [
            "kk-KZ-AigulNeural3 (Female)",
            "kk-KZ-DauletNeural3 (Male)"
        ]
    },
    {
        "languageCode": "km-KH",
        "languageName": "Khmer (Cambodia)",
        "availableVoices": [
            "km-KH-SreymomNeural3 (Female)",
            "km-KH-PisethNeural3 (Male)"
        ]
    },
    {
        "languageCode": "kn-IN",
        "languageName": "Kannada (India)",
        "availableVoices": [
            "kn-IN-SapnaNeural3 (Female)",
            "kn-IN-GaganNeural3 (Male)"
        ]
    },
    {
        "languageCode": "ko-KR",
        "languageName": "Korean (Korea)",
        "availableVoices": [
            "ko-KR-SunHiNeural (Female)",
            "ko-KR-InJoonNeural (Male)",
            "ko-KR-HyunsuMultilingualNeural4 (Male)",
            "ko-KR-BongJinNeural (Male)",
            "ko-KR-GookMinNeural (Male)",
            "ko-KR-HyunsuNeural (Male)",
            "ko-KR-JiMinNeural (Female)",
            "ko-KR-SeoHyeonNeural (Female)",
            "ko-KR-SoonBokNeural (Female)",
            "ko-KR-YuJinNeural (Female)"
        ]
    },
    {
        "languageCode": "lo-LA",
        "languageName": "Lao (Laos)",
        "availableVoices": [
            "lo-LA-KeomanyNeural3 (Female)",
            "lo-LA-ChanthavongNeural3 (Male)"
        ]
    },
    {
        "languageCode": "lt-LT",
        "languageName": "Lithuanian (Lithuania)",
        "availableVoices": [
            "lt-LT-OnaNeural3 (Female)",
            "lt-LT-LeonasNeural3 (Male)"
        ]
    },
    {
        "languageCode": "lv-LV",
        "languageName": "Latvian (Latvia)",
        "availableVoices": [
            "lv-LV-EveritaNeural3 (Female)",
            "lv-LV-NilsNeural3 (Male)"
        ]
    },
    {
        "languageCode": "mk-MK",
        "languageName": "Macedonian (North Macedonia)",
        "availableVoices": [
            "mk-MK-MarijaNeural3 (Female)",
            "mk-MK-AleksandarNeural3 (Male)"
        ]
    },
    {
        "languageCode": "ml-IN",
        "languageName": "Malayalam (India)",
        "availableVoices": [
            "ml-IN-SobhanaNeural3 (Female)",
            "ml-IN-MidhunNeural3 (Male)"
        ]
    },
    {
        "languageCode": "mn-MN",
        "languageName": "Mongolian (Mongolia)",
        "availableVoices": [
            "mn-MN-YesuiNeural3 (Female)",
            "mn-MN-BataaNeural3 (Male)"
        ]
    },
    {
        "languageCode": "mr-IN",
        "languageName": "Marathi (India)",
        "availableVoices": [
            "mr-IN-AarohiNeural (Female)",
            "mr-IN-ManoharNeural (Male)"
        ]
    },
    {
        "languageCode": "ms-MY",
        "languageName": "Malay (Malaysia)",
        "availableVoices": [
            "ms-MY-YasminNeural (Female)",
            "ms-MY-OsmanNeural (Male)"
        ]
    },
    {
        "languageCode": "mt-MT",
        "languageName": "Maltese (Malta)",
        "availableVoices": [
            "mt-MT-GraceNeural3 (Female)",
            "mt-MT-JosephNeural3 (Male)"
        ]
    },
    {
        "languageCode": "my-MM",
        "languageName": "Burmese (Myanmar)",
        "availableVoices": [
            "my-MM-NilarNeural3 (Female)",
            "my-MM-ThihaNeural3 (Male)"
        ]
    },
    {
        "languageCode": "nb-NO",
        "languageName": "Norwegian Bokmål (Norway)",
        "availableVoices": [
            "nb-NO-PernilleNeural (Female)",
            "nb-NO-FinnNeural (Male)",
            "nb-NO-IselinNeural (Female)"
        ]
    },
    {
        "languageCode": "ne-NP",
        "languageName": "Nepali (Nepal)",
        "availableVoices": [
            "ne-NP-HemkalaNeural3 (Female)",
            "ne-NP-SagarNeural3 (Male)"
        ]
    },
    {
        "languageCode": "nl-BE",
        "languageName": "Dutch (Belgium)",
        "availableVoices": [
            "nl-BE-DenaNeural (Female)",
            "nl-BE-ArnaudNeural (Male)"
        ]
    },
    {
        "languageCode": "nl-NL",
        "languageName": "Dutch (Netherlands)",
        "availableVoices": [
            "nl-NL-FennaNeural (Female)",
            "nl-NL-MaartenNeural (Male)",
            "nl-NL-ColetteNeural (Female)"
        ]
    },
    {
        "languageCode": "or-IN",
        "languageName": "Odia (India)",
        "availableVoices": [
            "or-IN-SubhasiniNeural3 (Female)",
            "or-IN-SukantNeural3 (Male)"
        ]
    },
    {
        "languageCode": "pa-IN",
        "languageName": "Punjabi (India)",
        "availableVoices": [
            "pa-IN-OjasNeural3 (Male)",
            "pa-IN-VaaniNeural3 (Female)"
        ]
    },
    {
        "languageCode": "pl-PL",
        "languageName": "Polish (Poland)",
        "availableVoices": [
            "pl-PL-AgnieszkaNeural (Female)",
            "pl-PL-MarekNeural (Male)",
            "pl-PL-ZofiaNeural (Female)"
        ]
    },
    {
        "languageCode": "ps-AF",
        "languageName": "Pashto (Afghanistan)",
        "availableVoices": [
            "ps-AF-LatifaNeural3 (Female)",
            "ps-AF-GulNawazNeural3 (Male)"
        ]
    },
    {
        "languageCode": "pt-BR",
        "languageName": "Portuguese (Brazil)",
        "availableVoices": [
            "pt-BR-FranciscaNeural (Female)",
            "pt-BR-AntonioNeural (Male)",
            "pt-BR-MacerioMultilingualNeural4 (Male)",
            "pt-BR-ThalitaMultilingualNeural4 (Female)",
            "pt-BR-BrendaNeural (Female)",
            "pt-BR-DonatoNeural (Male)",
            "pt-BR-ElzaNeural (Female)",
            "pt-BR-FabioNeural (Male)",
            "pt-BR-GiovannaNeural (Female)",
            "pt-BR-HumbertoNeural (Male)",
            "pt-BR-JulioNeural (Male)",
            "pt-BR-LeilaNeural (Female)",
            "pt-BR-LeticiaNeural (Female, Child)",
            "pt-BR-ManuelaNeural (Female)",
            "pt-BR-NicolauNeural (Male)",
            "pt-BR-ThalitaNeural (Female)",
            "pt-BR-ValerioNeural (Male)",
            "pt-BR-YaraNeural (Female)"
        ]
    },
    {
        "languageCode": "pt-PT",
        "languageName": "Portuguese (Portugal)",
        "availableVoices": [
            "pt-PT-RaquelNeural (Female)",
            "pt-PT-DuarteNeural (Male)",
            "pt-PT-FernandaNeural (Female)"
        ]
    },
    {
        "languageCode": "ro-RO",
        "languageName": "Romanian (Romania)",
        "availableVoices": [
            "ro-RO-AlinaNeural (Female)",
            "ro-RO-EmilNeural (Male)"
        ]
    },
    {
        "languageCode": "ru-RU",
        "languageName": "Russian (Russia)",
        "availableVoices": [
            "ru-RU-SvetlanaNeural (Female)",
            "ru-RU-DmitryNeural (Male)",
            "ru-RU-DariyaNeural (Female)"
        ]
    },
    {
        "languageCode": "si-LK",
        "languageName": "Sinhala (Sri Lanka)",
        "availableVoices": [
            "si-LK-ThiliniNeural3 (Female)",
            "si-LK-SameeraNeural3 (Male)"
        ]
    },
    {
        "languageCode": "sk-SK",
        "languageName": "Slovak (Slovakia)",
        "availableVoices": [
            "sk-SK-ViktoriaNeural (Female)",
            "sk-SK-LukasNeural (Male)"
        ]
    },
    {
        "languageCode": "sl-SI",
        "languageName": "Slovenian (Slovenia)",
        "availableVoices": [
            "sl-SI-PetraNeural (Female)",
            "sl-SI-RokNeural (Male)"
        ]
    },
    {
        "languageCode": "so-SO",
        "languageName": "Somali (Somalia)",
        "availableVoices": [
            "so-SO-UbaxNeural3 (Female)",
            "so-SO-MuuseNeural3 (Male)"
        ]
    },
    {
        "languageCode": "sq-AL",
        "languageName": "Albanian (Albania)",
        "availableVoices": [
            "sq-AL-AnilaNeural3 (Female)",
            "sq-AL-IlirNeural3 (Male)"
        ]
    },
    {
        "languageCode": "sr-LATN-RS",
        "languageName": "Serbian (Latin, Serbia)",
        "availableVoices": [
            "sr-Latn-RS-NicholasNeural3 (Male)",
            "sr-Latn-RS-SophieNeural3 (Female)"
        ]
    },
    {
        "languageCode": "sr-RS",
        "languageName": "Serbian (Cyrillic, Serbia)",
        "availableVoices": [
            "sr-RS-SophieNeural3 (Female)",
            "sr-RS-NicholasNeural3 (Male)"
        ]
    },
    {
        "languageCode": "su-ID",
        "languageName": "Sundanese (Indonesia)",
        "availableVoices": [
            "su-ID-TutiNeural3 (Female)",
            "su-ID-JajangNeural3 (Male)"
        ]
    },
    {
        "languageCode": "sv-SE",
        "languageName": "Swedish (Sweden)",
        "availableVoices": [
            "sv-SE-SofieNeural (Female)",
            "sv-SE-MattiasNeural (Male)",
            "sv-SE-HilleviNeural (Female)"
        ]
    },
    {
        "languageCode": "sw-KE",
        "languageName": "Kiswahili (Kenya)",
        "availableVoices": [
            "sw-KE-ZuriNeural3 (Female)",
            "sw-KE-RafikiNeural3 (Male)"
        ]
    },
    {
        "languageCode": "sw-TZ",
        "languageName": "Kiswahili (Tanzania)",
        "availableVoices": [
            "sw-TZ-RehemaNeural (Female)",
            "sw-TZ-DaudiNeural (Male)"
        ]
    },
    {
        "languageCode": "ta-IN",
        "languageName": "Tamil (India)",
        "availableVoices": [
            "ta-IN-PallaviNeural (Female)",
            "ta-IN-ValluvarNeural (Male)"
        ]
    },
    {
        "languageCode": "ta-LK",
        "languageName": "Tamil (Sri Lanka)",
        "availableVoices": [
            "ta-LK-SaranyaNeural (Female)",
            "ta-LK-KumarNeural (Male)"
        ]
    },
    {
        "languageCode": "ta-MY",
        "languageName": "Tamil (Malaysia)",
        "availableVoices": [
            "ta-MY-KaniNeural (Female)",
            "ta-MY-SuryaNeural (Male)"
        ]
    },
    {
        "languageCode": "ta-SG",
        "languageName": "Tamil (Singapore)",
        "availableVoices": [
            "ta-SG-VenbaNeural (Female)",
            "ta-SG-AnbuNeural (Male)"
        ]
    },
    {
        "languageCode": "te-IN",
        "languageName": "Telugu (India)",
        "availableVoices": [
            "te-IN-ShrutiNeural (Female)",
            "te-IN-MohanNeural (Male)"
        ]
    },
    {
        "languageCode": "th-TH",
        "languageName": "Thai (Thailand)",
        "availableVoices": [
            "th-TH-PremwadeeNeural (Female)",
            "th-TH-NiwatNeural (Male)",
            "th-TH-AcharaNeural (Female)"
        ]
    },
    {
        "languageCode": "tr-TR",
        "languageName": "Turkish (Türkiye)",
        "availableVoices": [
            "tr-TR-EmelNeural (Female)",
            "tr-TR-AhmetNeural (Male)"
        ]
    },
    {
        "languageCode": "uk-UA",
        "languageName": "Ukrainian (Ukraine)",
        "availableVoices": [
            "uk-UA-PolinaNeural (Female)",
            "uk-UA-OstapNeural (Male)"
        ]
    },
    {
        "languageCode": "ur-IN",
        "languageName": "Urdu (India)",
        "availableVoices": [
            "ur-IN-GulNeural (Female)",
            "ur-IN-SalmanNeural (Male)"
        ]
    },
    {
        "languageCode": "ur-PK",
        "languageName": "Urdu (Pakistan)",
        "availableVoices": [
            "ur-PK-UzmaNeural (Female)",
            "ur-PK-AsadNeural (Male)"
        ]
    },
    {
        "languageCode": "uz-UZ",
        "languageName": "Uzbek (Latin, Uzbekistan)",
        "availableVoices": [
            "uz-UZ-MadinaNeural3 (Female)",
            "uz-UZ-SardorNeural3 (Male)"
        ]
    },
    {
        "languageCode": "vi-VN",
        "languageName": "Vietnamese (Vietnam)",
        "availableVoices": [
            "vi-VN-HoaiMyNeural (Female)",
            "vi-VN-NamMinhNeural (Male)"
        ]
    },
    {
        "languageCode": "wuu-CN",
        "languageName": "Chinese (Wu, Simplified)",
        "availableVoices": [
            "wuu-CN-XiaotongNeural3 (Female)",
            "wuu-CN-YunzheNeural3 (Male)"
        ]
    },
    {
        "languageCode": "yue-CN",
        "languageName": "Chinese (Cantonese, Simplified)",
        "availableVoices": [
            "yue-CN-XiaoMinNeural3 (Female)",
            "yue-CN-YunSongNeural3 (Male)"
        ]
    },
    {
        "languageCode": "zh-CN",
        "languageName": "Chinese (Mandarin, Simplified)",
        "availableVoices": [
            "zh-CN-XiaoxiaoNeural (Female)",
            "zh-CN-YunxiNeural (Male)",
            "zh-CN-YunjianNeural (Male)",
            "zh-CN-XiaoyiNeural (Female)",
            "zh-CN-YunyangNeural (Male)",
            "zh-CN-XiaochenNeural (Female)",
            "zh-CN-XiaochenMultilingualNeural4 (Female)",
            "zh-CN-XiaohanNeural (Female)",
            "zh-CN-XiaomengNeural (Female)",
            "zh-CN-XiaomoNeural (Female)",
            "zh-CN-XiaoqiuNeural (Female)",
            "zh-CN-XiaorouNeural (Female)",
            "zh-CN-XiaoruiNeural (Female)",
            "zh-CN-XiaoshuangNeural (Female, Child)",
            "zh-CN-XiaoxiaoDialectsNeural (Female)",
            "zh-CN-XiaoxiaoMultilingualNeural4 (Female)",
            "zh-CN-XiaoyanNeural (Female)",
            "zh-CN-XiaoyouNeural (Female, Child)",
            "zh-CN-XiaoyuMultilingualNeural4 (Female)",
            "zh-CN-XiaozhenNeural (Female)",
            "zh-CN-YunfengNeural (Male)",
            "zh-CN-YunhaoNeural (Male)",
            "zh-CN-YunjieNeural (Male)",
            "zh-CN-YunxiaNeural (Male)",
            "zh-CN-YunyeNeural (Male)",
            "zh-CN-YunyiMultilingualNeural4 (Male)",
            "zh-CN-YunzeNeural (Male)",
            "zh-CN-Xiaochen:DragonHDFlashLatestNeural1 (Female)",
            "zh-CN-Xiaoxiao:DragonHDFlashLatestNeural1 (Female)",
            "zh-CN-Xiaoxiao2:DragonHDFlashLatestNeural1 (Female)",
            "zh-CN-YunfanMultilingualNeural1,4 (Male)",
            "zh-CN-Yunxiao:DragonHDFlashLatestNeural1 (Male)",
            "zh-CN-YunxiaoMultilingualNeural1,4 (Male)",
            "zh-CN-Yunyi:DragonHDFlashLatestNeural1 (Male)",
            "zh-CN-Xiaochen:DragonHDLatestNeural (Female)",
            "zh-CN-Yunfan:DragonHDLatestNeural (Male)"
        ]
    },
    {
        "languageCode": "zh-CN-guangxi",
        "languageName": "Chinese (Guangxi Accent Mandarin, Simplified)",
        "availableVoices": [
            "zh-CN-guangxi-YunqiNeural1,3 (Male)"
        ]
    },
    {
        "languageCode": "zh-CN-henan",
        "languageName": "Chinese (Zhongyuan Mandarin Henan, Simplified)",
        "availableVoices": [
            "zh-CN-henan-YundengNeural3 (Male)"
        ]
    },
    {
        "languageCode": "zh-CN-liaoning",
        "languageName": "Chinese (Northeastern Mandarin, Simplified)",
        "availableVoices": [
            "zh-CN-liaoning-XiaobeiNeural1,3 (Female)",
            "zh-CN-liaoning-YunbiaoNeural1,3 (Male)"
        ]
    },
    {
        "languageCode": "zh-CN-shaanxi",
        "languageName": "Chinese (Zhongyuan Mandarin Shaanxi, Simplified)",
        "availableVoices": [
            "zh-CN-shaanxi-XiaoniNeural1,3 (Female)"
        ]
    },
    {
        "languageCode": "zh-CN-shandong",
        "languageName": "Chinese (Jilu Mandarin, Simplified)",
        "availableVoices": [
            "zh-CN-shandong-YunxiangNeural3 (Male)"
        ]
    },
    {
        "languageCode": "zh-CN-sichuan",
        "languageName": "Chinese (Southwestern Mandarin, Simplified)",
        "availableVoices": [
            "zh-CN-sichuan-YunxiNeural1,3 (Male)"
        ]
    },
    {
        "languageCode": "zh-HK",
        "languageName": "Chinese (Cantonese, Traditional)",
        "availableVoices": [
            "zh-HK-HiuMaanNeural (Female)",
            "zh-HK-WanLungNeural (Male)",
            "zh-HK-HiuGaaiNeural (Female)"
        ]
    },
    {
        "languageCode": "zh-TW",
        "languageName": "Chinese (Taiwanese Mandarin, Traditional)",
        "availableVoices": [
            "zh-TW-HsiaoChenNeural (Female)",
            "zh-TW-YunJheNeural (Male)",
            "zh-TW-HsiaoYuNeural (Female)"
        ]
    },
    {
        "languageCode": "zu-ZA",
        "languageName": "isiZulu (South Africa)",
        "availableVoices": [
            "zu-ZA-ThandoNeural3 (Female)",
            "zu-ZA-ThembaNeural3 (Male)"
        ]
    }
];


// languages.js (Updated with saveSelection calls)

document.addEventListener('DOMContentLoaded', function () {
    console.log('[languages.js] DOMContentLoaded fired');

    // ===== DOM ELEMENTS (IDs from your popup.html) =====
    const checkboxList = document.getElementById('checkboxList');
    const selectedInputDisplay = document.getElementById('selectedLanguagesDisplay');
    const dropdownInputButton = document.getElementById('dropdownInputSearchButton');
    const dropdownInputPanel = document.getElementById('dropdownInputSearch');
    const inputSearch = document.getElementById('inputLanguageSearch');

    const radioList = document.getElementById('radioList');
    const selectedOutputDisplay = document.getElementById('selectedOutputLanguageDisplay');
    const dropdownOutputButton = document.getElementById('dropdownSearchButton');
    const dropdownOutputPanel = document.getElementById('dropdownSearch');
    const outputSearch = document.getElementById('outputLanguageSearch');

    const voiceList = document.getElementById('voiceList');
    const selectedVoiceDisplay = document.getElementById('selectedVoiceDisplay');
    const dropdownVoiceButton = document.getElementById('dropdownVoiceSearchButton');
    const dropdownVoicePanel = document.getElementById('dropdownVoiceSearch');
    const inputVoiceSearch = document.getElementById('inputVoiceSearch');

    // 🔍 Validate all required DOM elements
    if (!checkboxList || !selectedInputDisplay || !dropdownInputButton || !dropdownInputPanel || !inputSearch ||
        !radioList || !selectedOutputDisplay || !dropdownOutputButton || !dropdownOutputPanel || !outputSearch ||
        !voiceList || !selectedVoiceDisplay || !dropdownVoiceButton || !dropdownVoicePanel || !inputVoiceSearch) {
        console.error('[languages.js] Missing required DOM elements');
        return;
    }

    // ✅ Render checkboxes (input languages)
    function renderCheckboxes(filter = '') {
        checkboxList.innerHTML = '';
        const filtered = window.languages.filter(lang => lang.name.toLowerCase().includes(filter.toLowerCase()));

        filtered.forEach((lang, idx) => {
            const li = document.createElement('li');
            const div = document.createElement('div');
            div.className = 'flex items-center ps-2 py-2 rounded-sm hover:bg-gray-100 dark:hover:bg-gray-600';
            const input = document.createElement('input');
            input.type = 'checkbox';
            input.id = `input-checkbox-${idx}`;
            input.value = lang.code;
            input.dataset.name = lang.name;
            input.className = 'w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500';
            const label = document.createElement('label');
            label.htmlFor = input.id;
            label.className = 'w-full py-2 ms-2 text-sm font-medium text-gray-900 rounded-sm dark:text-gray-300';
            label.textContent = lang.name;
            div.appendChild(input);
            div.appendChild(label);
            li.appendChild(div);
            checkboxList.appendChild(li);
        });

        checkboxList.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
            checkbox.addEventListener('change', updateSelectedCheckboxes);
        });
    }

    function updateSelectedCheckboxes() {
        const checked = Array.from(checkboxList.querySelectorAll('input[type="checkbox"]:checked'));
        const selectedNames = checked.map(cb => cb.dataset.name);
        const selectedCodes = checked.map(cb => cb.value);

        const displayText = selectedNames.length ? selectedNames.join(', ') : 'None';
        selectedInputDisplay.textContent = displayText;
        selectedInputDisplay.dataset.value = selectedCodes.join(',');

        // 🚀 --- SAVE ACTION --- 🚀
        // This is where we save the input languages selection.
        saveSelection('selectedInput', { value: selectedCodes.join(','), text: displayText });
        console.log('[languages.js] Saved input languages:', selectedCodes);
    }

    // ✅ Render radio buttons (output languages)
    function renderRadioButtons(filter = '') {
        radioList.innerHTML = '';
        const filtered = window.languages.filter(lang => lang.name.toLowerCase().includes(filter.toLowerCase()));

        filtered.forEach((lang, idx) => {
            const li = document.createElement('li');
            const div = document.createElement('div');
            div.className = 'flex items-center ps-2 py-2 rounded-sm hover:bg-gray-100 dark:hover:bg-gray-600';
            const input = document.createElement('input');
            input.type = 'radio';
            input.name = 'outputLanguageRadio';
            input.id = `output-radio-${idx}`;
            input.value = lang.code;
            input.dataset.name = lang.name;
            input.className = 'w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500';
            const label = document.createElement('label');
            label.htmlFor = input.id;
            label.className = 'w-full py-2 ms-2 text-sm font-medium text-gray-900 rounded-sm dark:text-gray-300';
            label.textContent = lang.name;
            div.appendChild(input);
            div.appendChild(label);
            li.appendChild(div);
            radioList.appendChild(li);
        });

        radioList.querySelectorAll('input[type="radio"]').forEach(radio => {
            radio.addEventListener('change', function() {
                selectedOutputDisplay.textContent = this.dataset.name;
                selectedOutputDisplay.dataset.value = this.value;

                // 🚀 --- SAVE ACTION --- 🚀
                // This is where we save the output language selection.
                saveSelection('selectedOutput', { value: this.value, text: this.dataset.name });
                console.log('[languages.js] Saved output language:', this.dataset.name);

                renderVoices(this.value); // Render voices for the selected language
            });
        });
    }

    // ✅ Render voices based on selected output language
    function renderVoices(languageCode, filter = '') {
        voiceList.innerHTML = '';
        selectedVoiceDisplay.textContent = 'Select a voice';
        selectedVoiceDisplay.dataset.value = ''; // Clear previous value
        
        // 🚀 --- SAVE ACTION --- 🚀
        // Clear any previously saved voice when the language changes.
        saveSelection('selectedVoice', null);

        const languageVoicesData = window.voices.find(v => v.languageCode === languageCode);

        if (!languageVoicesData) {
            voiceList.innerHTML = '<li class="px-4 py-2 text-sm text-gray-500 dark:text-gray-400">No voices available.</li>';
            return;
        }

        const filteredVoices = languageVoicesData.availableVoices.filter(voice => voice.toLowerCase().includes(filter.toLowerCase()));

        filteredVoices.forEach((voice, idx) => {
            const li = document.createElement('li');
            const div = document.createElement('div');
            div.className = 'flex items-center ps-2 py-2 rounded-sm hover:bg-gray-100 dark:hover:bg-gray-600';
            const input = document.createElement('input');
            input.type = 'radio';
            input.name = 'selectedVoiceRadio';
            input.id = `voice-radio-${languageCode}-${idx}`;
            input.value = voice;
            input.dataset.name = voice;
            input.className = 'w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500';
            const label = document.createElement('label');
            label.htmlFor = input.id;
            label.className = 'w-full py-2 ms-2 text-sm font-medium text-gray-900 rounded-sm dark:text-gray-300';
            label.textContent = voice;
            div.appendChild(input);
            div.appendChild(label);
            li.appendChild(div);
            voiceList.appendChild(li);
        });

        voiceList.querySelectorAll('input[type="radio"]').forEach(radio => {
            radio.addEventListener('change', function() {
                selectedVoiceDisplay.textContent = this.dataset.name;
                selectedVoiceDisplay.dataset.value = this.value;

                // 🚀 --- SAVE ACTION --- 🚀
                // This is where we save the voice selection.
                saveSelection('selectedVoice', { value: this.value, text: this.dataset.name });
                console.log('[languages.js] Saved voice:', this.dataset.name);
            });
        });
    }

    // --- SEARCH AND TOGGLE LOGIC (Unchanged) ---
    inputSearch.addEventListener('input', () => renderCheckboxes(inputSearch.value));
    outputSearch.addEventListener('input', () => renderRadioButtons(outputSearch.value));
    inputVoiceSearch.addEventListener('input', () => {
        const selectedOutputRadio = document.querySelector('input[name="outputLanguageRadio"]:checked');
        if (selectedOutputRadio) {
            renderVoices(selectedOutputRadio.value, inputVoiceSearch.value);
        } else {
            voiceList.innerHTML = '<li class="px-4 py-2 text-sm text-gray-500 dark:text-gray-400">Select an output language first.</li>';
        }
    });

    dropdownInputButton.addEventListener('click', (e) => {
        e.stopPropagation();
        dropdownInputPanel.classList.toggle('hidden');
        dropdownOutputPanel.classList.add('hidden');
        dropdownVoicePanel.classList.add('hidden');
    });
    dropdownOutputButton.addEventListener('click', (e) => {
        e.stopPropagation();
        dropdownOutputPanel.classList.toggle('hidden');
        dropdownInputPanel.classList.add('hidden');
        dropdownVoicePanel.classList.add('hidden');
    });
    dropdownVoiceButton.addEventListener('click', (e) => {
        e.stopPropagation();
        dropdownVoicePanel.classList.toggle('hidden');
        dropdownInputPanel.classList.add('hidden');
        dropdownOutputPanel.classList.add('hidden');
    });

    document.addEventListener('click', (event) => {
        if (!dropdownInputPanel.contains(event.target) && !dropdownInputButton.contains(event.target)) dropdownInputPanel.classList.add('hidden');
        if (!dropdownOutputPanel.contains(event.target) && !dropdownOutputButton.contains(event.target)) dropdownOutputPanel.classList.add('hidden');
        if (!dropdownVoicePanel.contains(event.target) && !dropdownVoiceButton.contains(event.target)) dropdownVoicePanel.classList.add('hidden');
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            dropdownInputPanel.classList.add('hidden');
            dropdownOutputPanel.classList.add('hidden');
            dropdownVoicePanel.classList.add('hidden');
        }
    });

    // --- INITIAL RENDER ---
    renderCheckboxes();
    renderRadioButtons();
    voiceList.innerHTML = '<li class="px-4 py-2 text-sm text-gray-500 dark:text-gray-400">Select an output language first.</li>';
    console.log('[languages.js] All dropdowns initialized');
});