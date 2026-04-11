__d(
  "WAWebVoipAudioCaptureSharedBufferWorklet",
  [
    "WALogger",
    "WAResolvable",
    "WAWebAudioUtility",
    "WAWebVoipWorkletPreload",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _,
      f,
      g = 8192,
      h = 8;
    function y() {
      return "\nclass WAWebVoipSharedBufferCaptureProcessor extends AudioWorkletProcessor {\n  constructor(options) {\n    super();\n    this._isProcessing = false;\n    this._isInitialized = false;\n    this._overrunCount = 0;\n    this._overrunStartTime = 0;\n    this._totalFramesWritten = 0;\n    this._lastDiagnosticTime = 0;\n\n    // Shared buffer views (set after receiving SAB via postMessage)\n    this._atomicIndices = null;  // Uint32Array view for writePos/readPos\n    this._audioBuffer = null;    // Float32Array view for audio samples\n    this._bufferSize = 0;\n\n    // Resampling state: set when targetSampleRate differs from sampleRate\n    // (e.g., Firefox where AudioContext runs at 48kHz but VoIP needs 16kHz)\n    this._needsResampling = false;\n    this._resampleRatio = 1;\n    this._resampleBuffer = null;\n\n    // Pre-allocate mono-mix buffer for multi-channel input.\n    // AudioWorklet quantum is always 128 frames.\n    this._monoMixBuffer = new Float32Array(128);\n\n    this.port.onmessage = (event) => {\n      const data = event.data;\n      if (data.type === 'initSharedBuffer') {\n        // Receive SharedArrayBuffer from main thread\n        this._initSharedBuffer(\n          data.heapBuffer,\n          data.heapBufferOffset,\n          data.bufferSize,\n          data.targetSampleRate,\n        );\n      } else if (data.type === 'start') {\n        this._isProcessing = true;\n      } else if (data.type === 'stop') {\n        this._isProcessing = false;\n      }\n    };\n\n    this.port.postMessage({type: 'ready'});\n  }\n\n  _initSharedBuffer(heapBuffer, heapBufferOffset, bufferSize, targetSampleRate) {\n    // Create views into the WASM heap SharedArrayBuffer\n    // Header: [writePos uint32 at offset+0][readPos uint32 at offset+4]\n    this._atomicIndices = new Uint32Array(heapBuffer, heapBufferOffset, 2);\n    // Audio data starts after the 8-byte header\n    this._audioBuffer = new Float32Array(\n      heapBuffer,\n      heapBufferOffset + 8,\n      bufferSize,\n    );\n    this._bufferSize = bufferSize;\n    this._isInitialized = true;\n    this._overrunCount = 0;\n    this._totalFramesWritten = 0;\n    this._lastDiagnosticTime = currentTime;\n\n    // Configure resampling if AudioContext sample rate differs from target\n    // (sampleRate is a global in AudioWorkletGlobalScope)\n    if (targetSampleRate > 0 && targetSampleRate !== sampleRate) {\n      this._needsResampling = true;\n      this._resampleRatio = sampleRate / targetSampleRate;\n      // Pre-allocate the resampling output buffer. AudioWorklet quantum is\n      // always 128 frames, and the ratio is constant, so the output length\n      // is fixed for the entire capture session. Avoids allocating a new\n      // Float32Array on every process() call (every ~2.67ms at 48kHz).\n      const downsampledLength = Math.round(128 / this._resampleRatio);\n      this._resampleBuffer = new Float32Array(downsampledLength);\n      this.port.postMessage({\n        type: 'resamplingConfigured',\n        inputRate: sampleRate,\n        targetRate: targetSampleRate,\n        ratio: this._resampleRatio,\n      });\n    }\n\n    this.port.postMessage({type: 'sharedBufferReady'});\n  }\n\n  /**\n   * Downsample audio buffer using averaging algorithm.\n   * Same algorithm as maybeDownsampleBuffer in WAWebAudioUtility.\n   */\n  _downsample(buffer, ratio) {\n    const result = this._resampleBuffer;\n    const newLength = result.length;\n    let offsetResult = 0;\n    let offsetBuffer = 0;\n    while (offsetResult < newLength) {\n      const nextOffsetBuffer = Math.round((offsetResult + 1) * ratio);\n      let accum = 0;\n      let count = 0;\n      for (let i = offsetBuffer; i < nextOffsetBuffer && i < buffer.length; i++) {\n        accum += buffer[i];\n        count++;\n      }\n      result[offsetResult] = count > 0 ? accum / count : 0;\n      offsetResult++;\n      offsetBuffer = nextOffsetBuffer;\n    }\n    return result;\n  }\n\n  process(inputs, outputs, parameters) {\n    if (!this._isProcessing || !this._isInitialized) {\n      return true;\n    }\n\n    if (inputs.length === 0 || inputs[0].length === 0) {\n      return true;\n    }\n\n    const input = inputs[0];\n    const channelCount = input.length;\n    const frameCount = input[0].length;\n\n    // Mono-mix input channels into a single buffer\n    // For mono input (most common), this is a simple copy\n    let monoData;\n    if (channelCount === 1) {\n      monoData = input[0];\n    } else {\n      // Use pre-allocated buffer for multi-channel mono-mixing\n      monoData = this._monoMixBuffer;\n      for (let i = 0; i < frameCount; i++) {\n        let sum = 0;\n        for (let ch = 0; ch < channelCount; ch++) {\n          sum += input[ch][i];\n        }\n        monoData[i] = sum / channelCount;\n      }\n    }\n\n    // Downsample if needed (e.g., Firefox: 48kHz \u2192 16kHz)\n    const outputData = this._needsResampling\n      ? this._downsample(monoData, this._resampleRatio)\n      : monoData;\n    const outputFrameCount = outputData.length;\n\n    // Read current positions atomically\n    const writePos = Atomics.load(this._atomicIndices, 0);\n    const readPos = Atomics.load(this._atomicIndices, 1);\n\n    // Calculate available space in ring buffer\n    const bufferSize = this._bufferSize;\n    const availableSpace = (readPos - writePos - 1 + bufferSize) % bufferSize;\n\n    if (availableSpace < outputFrameCount) {\n      // Buffer full \u2014 drop this chunk (overrun)\n      if (this._overrunCount === 0) {\n        this._overrunStartTime = currentTime;\n      }\n      this._overrunCount++;\n      this._maybeSendDiagnostics(availableSpace);\n      return true;\n    }\n\n    // Write audio data to ring buffer using bulk copy with wrap-around\n    const audioBuffer = this._audioBuffer;\n    const endPos = writePos + outputFrameCount;\n\n    if (endPos <= bufferSize) {\n      // No wrap-around: single bulk write\n      audioBuffer.set(outputData, writePos);\n    } else {\n      // Wrap-around: two bulk writes\n      const firstLen = bufferSize - writePos;\n      audioBuffer.set(outputData.subarray(0, firstLen), writePos);\n      audioBuffer.set(outputData.subarray(firstLen), 0);\n    }\n\n    // Update write position atomically (release written data to consumer)\n    const newWritePos = endPos % bufferSize;\n    Atomics.store(this._atomicIndices, 0, newWritePos);\n\n    this._totalFramesWritten += outputFrameCount;\n\n    // Detect end of overrun: first successful write after dropped frames\n    if (this._overrunCount > 0) {\n      const durationMs = (currentTime - this._overrunStartTime) * 1000;\n      this.port.postMessage({\n        type: 'overrunEnded',\n        droppedFrames: this._overrunCount,\n        durationMs: durationMs,\n      });\n      this._overrunCount = 0;\n    }\n\n    this._maybeSendDiagnostics(availableSpace);\n\n    return true;\n  }\n\n  _maybeSendDiagnostics(availableSpace) {\n    // Send diagnostics approximately every 1 second\n    // AudioWorklet's currentTime is in seconds\n    const now = currentTime;\n    if (now - this._lastDiagnosticTime >= 1.0) {\n      this._lastDiagnosticTime = now;\n      this.port.postMessage({\n        type: 'diagnostics',\n        overrunCount: this._overrunCount,\n        totalFramesWritten: this._totalFramesWritten,\n        availableSpace: availableSpace,\n        bufferSize: this._bufferSize,\n      });\n    }\n  }\n}\n\nregisterProcessor(\n  'voip-shared-buffer-capture-processor',\n  WAWebVoipSharedBufferCaptureProcessor,\n);\n";
    }
    var C = (function () {
      function t() {
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
              .preloadWorkletProcessorModule(t, y, "[AV:SharedBuffer:Capture]")
              .then(function (t) {
                ((e.isWorkletPreloaded = t), (e.workletPreloadPromise = null));
              });
            e.workletPreloadPromise = n;
          }));
      }
      var a = t.prototype;
      return (
        (a.startAudioCapture = (function () {
          var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
            var n = this,
              a = t.audioContext,
              i = t.framesPerChunk,
              l = t.mediaStreamSource;
            try {
              var m = o("WAWebAudioUtility").getCachedWasmModule();
              if (m == null)
                throw r("err")(
                  "voip: [AV:SharedBuffer:Capture] WASM module not initialized",
                );
              var p = g,
                _ = p * Float32Array.BYTES_PER_ELEMENT + h;
              this.ringBufferPtr =
                yield o("WAWebAudioUtility").mallocWasmBuffer(_);
              var f = this.ringBufferPtr;
              if (f == null)
                throw r("err")(
                  "voip: [AV:SharedBuffer:Capture] Failed to allocate ring buffer",
                );
              var C = m.GROWABLE_HEAP_U8();
              if (
                (C.fill(0, f, f + _),
                this.workletPreloadPromise != null &&
                  (yield this.workletPreloadPromise),
                !this.isWorkletPreloaded)
              ) {
                var b = y(),
                  v = new Blob([b], { type: "application/javascript" }),
                  S = URL.createObjectURL(v);
                try {
                  yield a.audioWorklet.addModule(S);
                } finally {
                  URL.revokeObjectURL(S);
                }
              }
              this.audioWorkletNode = new AudioWorkletNode(
                a,
                "voip-shared-buffer-capture-processor",
                { numberOfInputs: 1, numberOfOutputs: 0 },
              );
              var R = this.audioWorkletNode;
              (R != null &&
                (R.port.onmessage = function (t) {
                  var r = t.data;
                  if (!(typeof r != "object" || r == null)) {
                    var a = r.type;
                    if (a === "ready") {
                      var i;
                      ((n.isProcessorReady = !0),
                        (i = n.processorReadyResolvable) == null || i.resolve(),
                        (n.processorReadyResolvable = null));
                    } else if (a !== "sharedBufferReady") {
                      if (a === "resamplingConfigured") {
                        var l = r.inputRate,
                          c = r.targetRate,
                          d = r.ratio;
                        o("WALogger").LOG(
                          e ||
                            (e = babelHelpers.taggedTemplateLiteralLoose([
                              "voip: [AV:SharedBuffer:Capture] resample ",
                              "->",
                              "Hz r=",
                              "",
                            ])),
                          String(l),
                          String(c),
                          String(d),
                        );
                      } else if (a === "overrunEnded") {
                        var m = r.droppedFrames,
                          p = r.durationMs;
                        o("WALogger").WARN(
                          s ||
                            (s = babelHelpers.taggedTemplateLiteralLoose([
                              "voip: [AV:SharedBuffer:Capture] overrun end ",
                              " dropped ",
                              "ms",
                            ])),
                          String(m),
                          String(p),
                        );
                      } else if (a === "diagnostics") {
                        var _ = r.overrunCount,
                          f = r.availableSpace,
                          g = r.bufferSize;
                        typeof _ == "number" &&
                          _ > 0 &&
                          o("WALogger").WARN(
                            u ||
                              (u = babelHelpers.taggedTemplateLiteralLoose([
                                "voip: [AV:SharedBuffer:Capture] Overruns: ",
                                ", available: ",
                                "/",
                                "",
                              ])),
                            _,
                            String(f),
                            String(g),
                          );
                      }
                    }
                  }
                }),
                yield this.waitForProcessorReady());
              var L = m.GROWABLE_HEAP_F32(),
                E = L.buffer;
              (R != null &&
                R.port.postMessage({
                  type: "initSharedBuffer",
                  heapBuffer: E,
                  heapBufferOffset: f,
                  bufferSize: p,
                  targetSampleRate: t.sampleRate,
                }),
                (this.mediaStreamSource = l),
                R != null &&
                  (l.connect(R), R.port.postMessage({ type: "start" })));
              var k = m.startAudioReaderThread(f, p, i);
              if (!k)
                throw r("err")(
                  "voip: [AV:SharedBuffer:Capture] Failed to start audio reader thread",
                );
              o("WALogger").LOG(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:SharedBuffer:Capture] capture started",
                  ])),
              );
            } catch (e) {
              throw (
                o("WALogger").ERROR(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV:SharedBuffer:Capture] Failed to start capture: ",
                      "",
                    ])),
                  e,
                ),
                yield this.stopAudioCapture(),
                r("err")(
                  "voip: [AV:SharedBuffer:Capture] Failed to start capture",
                )
              );
            }
          });
          function a(e) {
            return t.apply(this, arguments);
          }
          return a;
        })()),
        (a.waitForProcessorReady = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
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
                yield (a = this.processorReadyResolvable) == null
                  ? void 0
                  : a.promise;
              } finally {
                window.clearTimeout(n);
              }
            }
          });
          function t() {
            return e.apply(this, arguments);
          }
          return t;
        })()),
        (a.stopAudioCapture = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            try {
              var e = o("WAWebAudioUtility").getCachedWasmModule();
              if (e != null)
                try {
                  e.isAudioReaderThreadRunning() && e.stopAudioReaderThread();
                } catch (e) {
                  o("WALogger").WARN(
                    m ||
                      (m = babelHelpers.taggedTemplateLiteralLoose([
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
                  yield o("WAWebAudioUtility").freeWasmBuffer(t);
                } catch (e) {
                  o("WALogger").WARN(
                    p ||
                      (p = babelHelpers.taggedTemplateLiteralLoose([
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
                _ ||
                  (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:SharedBuffer:Capture] Cleanup error: ",
                    "",
                  ])),
                e,
              );
            }
          });
          function t() {
            return e.apply(this, arguments);
          }
          return t;
        })()),
        (a.reconnect = function (t) {
          if (this.mediaStreamSource != null)
            try {
              this.mediaStreamSource.disconnect();
            } catch (e) {}
          ((this.mediaStreamSource = t),
            this.audioWorkletNode != null &&
              (t.connect(this.audioWorkletNode),
              o("WALogger").LOG(
                f ||
                  (f = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:SharedBuffer:Capture] Reconnected to new stream",
                  ])),
              )));
        }),
        t
      );
    })();
    l.WAWebVoipAudioCaptureSharedBufferWorklet = C;
  },
  98,
);
