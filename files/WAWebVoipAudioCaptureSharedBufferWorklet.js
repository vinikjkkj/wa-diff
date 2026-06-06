__d(
  "WAWebVoipAudioCaptureSharedBufferWorklet",
  [
    "WALogger",
    "WAResolvable",
    "WAWebAudioUtility",
    "WAWebVoipWorkletPreload",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s, u, c, d, m, p, _, f, g;
    function h(t, n) {
      var r = t.type;
      if (r !== "sharedBufferReady")
        if (r === "resamplingConfigured")
          o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [AV:SharedBuffer:",
                "] resample ",
                "->",
                "Hz r=",
                "",
              ])),
            n,
            String(t.inputRate),
            String(t.targetRate),
            String(t.ratio),
          );
        else if (r === "overrunEnded")
          o("WALogger").WARN(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [AV:SharedBuffer:",
                "] overrun end ",
                " dropped ",
                "ms",
              ])),
            n,
            String(t.droppedFrames),
            String(t.durationMs),
          );
        else if (r === "diagnostics") {
          var a = t.overrunCount;
          typeof a == "number" &&
            a > 0 &&
            o("WALogger").WARN(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [AV:SharedBuffer:",
                  "] Overruns: ",
                  ", available: ",
                  "/",
                  "",
                ])),
              n,
              a,
              String(t.availableSpace),
              String(t.bufferSize),
            );
          var i = t.fillMs;
          if (typeof i == "number") {
            var l =
              typeof t.audioWorkletTime == "number"
                ? t.audioWorkletTime.toFixed(2)
                : "n/a";
            o("WALogger").LOG(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [AV:capture-skew] ",
                  " sab fill=",
                  "ms (",
                  "/",
                  " samples) totalFramesWritten=",
                  " workletTime=",
                  "s",
                ])),
              n,
              i.toFixed(1),
              String(t.bufferedSamples),
              String(t.bufferSize),
              String(t.totalFramesWritten),
              l,
            );
          }
        } else return !1;
      return !0;
    }
    var y = 8192,
      C = 8;
    function b() {
      return `
class WAWebVoipSharedBufferCaptureProcessor extends AudioWorkletProcessor {
  constructor(options) {
    super();
    this._isProcessing = false;
    this._isInitialized = false;
    this._overrunCount = 0;
    this._overrunStartTime = 0;
    this._totalFramesWritten = 0;
    this._lastDiagnosticTime = 0;

    // Shared buffer views (set after receiving SAB via postMessage)
    this._atomicIndices = null;  // Uint32Array view for writePos/readPos
    this._audioBuffer = null;    // Float32Array view for audio samples
    this._bufferSize = 0;

    // Resampling state: set when targetSampleRate differs from sampleRate
    // (e.g., Firefox where AudioContext runs at 48kHz but VoIP needs 16kHz)
    this._needsResampling = false;
    this._resampleRatio = 1;
    this._resampleBuffer = null;

    // Pre-allocate mono-mix buffer for multi-channel input.
    // AudioWorklet quantum is always 128 frames.
    this._monoMixBuffer = new Float32Array(128);

    this.port.onmessage = (event) => {
      const data = event.data;
      if (data.type === 'initSharedBuffer') {
        // Receive SharedArrayBuffer from main thread
        this._initSharedBuffer(
          data.heapBuffer,
          data.heapBufferOffset,
          data.bufferSize,
          data.targetSampleRate,
        );
      } else if (data.type === 'start') {
        this._isProcessing = true;
      } else if (data.type === 'stop') {
        this._isProcessing = false;
      }
    };

    this.port.postMessage({type: 'ready'});
  }

  _initSharedBuffer(heapBuffer, heapBufferOffset, bufferSize, targetSampleRate) {
    // Create views into the WASM heap SharedArrayBuffer
    // Header: [writePos uint32 at offset+0][readPos uint32 at offset+4]
    this._atomicIndices = new Uint32Array(heapBuffer, heapBufferOffset, 2);
    // Audio data starts after the 8-byte header
    this._audioBuffer = new Float32Array(
      heapBuffer,
      heapBufferOffset + 8,
      bufferSize,
    );
    this._bufferSize = bufferSize;
    this._isInitialized = true;
    this._overrunCount = 0;
    this._totalFramesWritten = 0;
    this._lastDiagnosticTime = currentTime;

    // Configure resampling if AudioContext sample rate differs from target
    // (sampleRate is a global in AudioWorkletGlobalScope)
    if (targetSampleRate > 0 && targetSampleRate !== sampleRate) {
      this._needsResampling = true;
      this._resampleRatio = sampleRate / targetSampleRate;
      // Pre-allocate the resampling output buffer. AudioWorklet quantum is
      // always 128 frames, and the ratio is constant, so the output length
      // is fixed for the entire capture session. Avoids allocating a new
      // Float32Array on every process() call (every ~2.67ms at 48kHz).
      const downsampledLength = Math.round(128 / this._resampleRatio);
      this._resampleBuffer = new Float32Array(downsampledLength);
      this.port.postMessage({
        type: 'resamplingConfigured',
        inputRate: sampleRate,
        targetRate: targetSampleRate,
        ratio: this._resampleRatio,
      });
    }

    this.port.postMessage({type: 'sharedBufferReady'});
  }

  /**
   * Downsample audio buffer using averaging algorithm.
   * Same algorithm as maybeDownsampleBuffer in WAWebAudioUtility.
   */
  _downsample(buffer, ratio) {
    const result = this._resampleBuffer;
    const newLength = result.length;
    let offsetResult = 0;
    let offsetBuffer = 0;
    while (offsetResult < newLength) {
      const nextOffsetBuffer = Math.round((offsetResult + 1) * ratio);
      let accum = 0;
      let count = 0;
      for (let i = offsetBuffer; i < nextOffsetBuffer && i < buffer.length; i++) {
        accum += buffer[i];
        count++;
      }
      result[offsetResult] = count > 0 ? accum / count : 0;
      offsetResult++;
      offsetBuffer = nextOffsetBuffer;
    }
    return result;
  }

  process(inputs, outputs, parameters) {
    if (!this._isProcessing || !this._isInitialized) {
      return true;
    }

    if (inputs.length === 0 || inputs[0].length === 0) {
      return true;
    }

    const input = inputs[0];
    const channelCount = input.length;
    const frameCount = input[0].length;

    // Mono-mix input channels into a single buffer
    // For mono input (most common), this is a simple copy
    let monoData;
    if (channelCount === 1) {
      monoData = input[0];
    } else {
      // Use pre-allocated buffer for multi-channel mono-mixing
      monoData = this._monoMixBuffer;
      for (let i = 0; i < frameCount; i++) {
        let sum = 0;
        for (let ch = 0; ch < channelCount; ch++) {
          sum += input[ch][i];
        }
        monoData[i] = sum / channelCount;
      }
    }

    // Downsample if needed (e.g., Firefox: 48kHz \u2192 16kHz)
    const outputData = this._needsResampling
      ? this._downsample(monoData, this._resampleRatio)
      : monoData;
    const outputFrameCount = outputData.length;

    // Read current positions atomically
    const writePos = Atomics.load(this._atomicIndices, 0);
    const readPos = Atomics.load(this._atomicIndices, 1);

    // Calculate available space in ring buffer
    const bufferSize = this._bufferSize;
    const availableSpace = (readPos - writePos - 1 + bufferSize) % bufferSize;

    if (availableSpace < outputFrameCount) {
      // Buffer full \u2014 drop this chunk (overrun)
      if (this._overrunCount === 0) {
        this._overrunStartTime = currentTime;
      }
      this._overrunCount++;
      this._maybeSendDiagnostics();
      return true;
    }

    // Write audio data to ring buffer using bulk copy with wrap-around
    const audioBuffer = this._audioBuffer;
    const endPos = writePos + outputFrameCount;

    if (endPos <= bufferSize) {
      // No wrap-around: single bulk write
      audioBuffer.set(outputData, writePos);
    } else {
      // Wrap-around: two bulk writes
      const firstLen = bufferSize - writePos;
      audioBuffer.set(outputData.subarray(0, firstLen), writePos);
      audioBuffer.set(outputData.subarray(firstLen), 0);
    }

    // Update write position atomically (release written data to consumer)
    const newWritePos = endPos % bufferSize;
    Atomics.store(this._atomicIndices, 0, newWritePos);

    this._totalFramesWritten += outputFrameCount;

    // Detect end of overrun: first successful write after dropped frames
    if (this._overrunCount > 0) {
      const durationMs = (currentTime - this._overrunStartTime) * 1000;
      this.port.postMessage({
        type: 'overrunEnded',
        droppedFrames: this._overrunCount,
        durationMs: durationMs,
      });
      this._overrunCount = 0;
    }

    this._maybeSendDiagnostics();

    return true;
  }

  _maybeSendDiagnostics() {
    // Send diagnostics approximately every 5 seconds.
    // AudioWorklet's currentTime is in seconds.
    const now = currentTime;
    if (now - this._lastDiagnosticTime >= 5.0) {
      this._lastDiagnosticTime = now;
      // Re-read atomic indices for the most current SAB state. Using a value
      // captured earlier in process() would be stale by one just-written
      // quantum (~2.7ms at 48k AudioContext, ~8ms at 16k native).
      const writePos = Atomics.load(this._atomicIndices, 0);
      const readPos = Atomics.load(this._atomicIndices, 1);
      const bufferSize = this._bufferSize;
      const bufferedSamples = (writePos - readPos + bufferSize) % bufferSize;
      const availableSpace = bufferSize - 1 - bufferedSamples;
      // Samples in the ring are at the post-resample (target) rate.
      const effectiveRate = this._needsResampling
        ? sampleRate / this._resampleRatio
        : sampleRate;
      const fillMs = (bufferedSamples * 1000) / effectiveRate;
      this.port.postMessage({
        type: 'diagnostics',
        overrunCount: this._overrunCount,
        totalFramesWritten: this._totalFramesWritten,
        availableSpace: availableSpace,
        bufferSize: this._bufferSize,
        bufferedSamples: bufferedSamples,
        fillMs: fillMs,
        audioWorkletTime: now,
      });
    }
  }
}

registerProcessor(
  'voip-shared-buffer-capture-processor',
  WAWebVoipSharedBufferCaptureProcessor,
);
`;
    }
    var v = (function () {
      function e() {
        var e = this;
        ((this.audioWorkletNode = null),
          (this.ringBufferPtr = null),
          (this.isProcessorReady = !1),
          (this.processorReadyResolvable = null),
          (this.mediaStreamSource = null),
          (this.workletPreloadPromise = null),
          (this.isWorkletPreloaded = !1),
          (this.preloadWorkletModule = function (t) {
            var n = o("WAWebVoipWorkletPreload")
              .preloadWorkletProcessorModule(t, b, "[AV:SharedBuffer:Capture]")
              .then(function (t) {
                ((e.isWorkletPreloaded = t), (e.workletPreloadPromise = null));
              });
            e.workletPreloadPromise = n;
          }));
      }
      var t = e.prototype;
      return (
        (t.startAudioCapture = async function (t) {
          var e = this,
            n = t.audioContext,
            a = t.framesPerChunk,
            i = t.mediaStreamSource;
          try {
            var l = o("WAWebAudioUtility").getCachedWasmModule();
            if (l == null)
              throw r("err")(
                "voip: [AV:SharedBuffer:Capture] WASM module not initialized",
              );
            var s = y,
              u = s * Float32Array.BYTES_PER_ELEMENT + C;
            this.ringBufferPtr =
              await o("WAWebAudioUtility").mallocWasmBuffer(u);
            var c = this.ringBufferPtr;
            if (c == null)
              throw r("err")(
                "voip: [AV:SharedBuffer:Capture] Failed to allocate ring buffer",
              );
            var p = l.GROWABLE_HEAP_U8();
            if (
              (p.fill(0, c, c + u),
              this.workletPreloadPromise != null &&
                (await this.workletPreloadPromise),
              !this.isWorkletPreloaded)
            ) {
              var _ = b(),
                f = new Blob([_], { type: "application/javascript" }),
                g = URL.createObjectURL(f);
              try {
                await n.audioWorklet.addModule(g);
              } finally {
                URL.revokeObjectURL(g);
              }
            }
            this.audioWorkletNode = new AudioWorkletNode(
              n,
              "voip-shared-buffer-capture-processor",
              { numberOfInputs: 1, numberOfOutputs: 0 },
            );
            var v = this.audioWorkletNode;
            (v != null &&
              (v.port.onmessage = function (t) {
                var n = t.data;
                if (!(typeof n != "object" || n == null))
                  if (n.type === "ready") {
                    var r;
                    ((e.isProcessorReady = !0),
                      (r = e.processorReadyResolvable) == null || r.resolve(),
                      (e.processorReadyResolvable = null));
                  } else h(n, "Capture");
              }),
              await this.waitForProcessorReady());
            var S = l.GROWABLE_HEAP_F32(),
              R = S.buffer;
            (v != null &&
              v.port.postMessage({
                type: "initSharedBuffer",
                heapBuffer: R,
                heapBufferOffset: c,
                bufferSize: s,
                targetSampleRate: t.sampleRate,
              }),
              (this.mediaStreamSource = i),
              v != null && i.connect(v));
            var L = window.performance.now(),
              E = l.startAudioReaderThread(c, s, a),
              k = window.performance.now() - L;
            if (!E)
              throw r("err")(
                "voip: [AV:SharedBuffer:Capture] Failed to start audio reader thread",
              );
            (v != null && v.port.postMessage({ type: "start" }),
              o("WALogger").LOG(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:SharedBuffer:Capture] capture started, [AV:capture-skew] startAudioReaderThread took ",
                    "ms",
                  ])),
                k.toFixed(1),
              ));
          } catch (e) {
            throw (
              o("WALogger").ERROR(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:SharedBuffer:Capture] Failed to start capture: ",
                    "",
                  ])),
                e,
              ),
              await this.stopAudioCapture(),
              r("err")(
                "voip: [AV:SharedBuffer:Capture] Failed to start capture",
              )
            );
          }
        }),
        (t.waitForProcessorReady = async function () {
          var e = this,
            t = 5e3;
          if (!this.isProcessorReady) {
            this.processorReadyResolvable = new (o(
              "WAResolvable",
            ).Resolvable)();
            var n = window.setTimeout(function () {
              e.processorReadyResolvable != null &&
                (e.processorReadyResolvable.reject(
                  r("err")(
                    "voip: [AV:SharedBuffer:Capture] Processor failed to become ready within 5s",
                  ),
                ),
                (e.processorReadyResolvable = null));
            }, t);
            try {
              var a;
              await ((a = this.processorReadyResolvable) == null
                ? void 0
                : a.promise);
            } finally {
              window.clearTimeout(n);
            }
          }
        }),
        (t.stopAudioCapture = async function () {
          try {
            var e = o("WAWebAudioUtility").getCachedWasmModule();
            if (e != null)
              try {
                e.isAudioReaderThreadRunning() && e.stopAudioReaderThread();
              } catch (e) {
                o("WALogger").WARN(
                  p ||
                    (p = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV:SharedBuffer:Capture] reader stop err: ",
                      "",
                    ])),
                  e,
                );
              }
            if (
              (this.audioWorkletNode != null &&
                this.audioWorkletNode.port.postMessage({ type: "stop" }),
              this.mediaStreamSource != null)
            ) {
              try {
                this.mediaStreamSource.disconnect();
              } catch (e) {}
              this.mediaStreamSource = null;
            }
            this.audioWorkletNode != null &&
              (this.audioWorkletNode.disconnect(),
              (this.audioWorkletNode = null));
            var t = this.ringBufferPtr;
            if (t != null) {
              try {
                await o("WAWebAudioUtility").freeWasmBuffer(t);
              } catch (e) {
                o("WALogger").WARN(
                  _ ||
                    (_ = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV:SharedBuffer:Capture] Error freeing ring buffer: ",
                      "",
                    ])),
                  e,
                );
              }
              this.ringBufferPtr = null;
            }
            ((this.isProcessorReady = !1),
              (this.processorReadyResolvable = null),
              (this.isWorkletPreloaded = !1),
              (this.workletPreloadPromise = null));
          } catch (e) {
            o("WALogger").ERROR(
              f ||
                (f = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [AV:SharedBuffer:Capture] Cleanup error: ",
                  "",
                ])),
              e,
            );
          }
        }),
        (t.reconnect = function (t) {
          if (this.mediaStreamSource != null)
            try {
              this.mediaStreamSource.disconnect();
            } catch (e) {}
          ((this.mediaStreamSource = t),
            this.audioWorkletNode != null &&
              (t.connect(this.audioWorkletNode),
              o("WALogger").LOG(
                g ||
                  (g = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:SharedBuffer:Capture] Reconnected to new stream",
                  ])),
              )));
        }),
        e
      );
    })();
    ((l.handleSharedBufferWorkletDiagnostics = h),
      (l.getSharedBufferCaptureProcessorCode = b),
      (l.WAWebVoipAudioCaptureSharedBufferWorklet = v));
  },
  98,
);
