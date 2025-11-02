// worklet-processor.js — emits 20ms chunks @ 16k mono PCM (as Float32)
class PCMCaptureProcessor extends AudioWorkletProcessor {
  constructor() {
    super();
    this.sampleRateTarget = 24000;
    this.samplesPerChunk = Math.floor((this.sampleRateTarget * 20) / 1000); // 20ms = 320 samples
    this.buffer = [];
  }

  process(inputs) {
    const input = inputs[0];
    if (!input || input.length === 0) return true;
    const channelData = input[0]; // mono
    if (!channelData || channelData.length === 0) return true;

    for (let i = 0; i < channelData.length; i++) {
      this.buffer.push(channelData[i]);
      if (this.buffer.length === this.samplesPerChunk) {
        this.port.postMessage(new Float32Array(this.buffer));
        this.buffer.length = 0;
      }
    }
    return true;
  }
}
registerProcessor('pcm-capture-processor', PCMCaptureProcessor);
