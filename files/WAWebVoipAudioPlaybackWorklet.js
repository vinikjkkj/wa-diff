__d(
  "WAWebVoipAudioPlaybackWorklet",
  [
    "WALogger",
    "WAResolvable",
    "WAWebAudioDeviceManager",
    "WAWebAudioUtility",
    "WAWebVoipWorkletPreload",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s, u, c, d, m, p, _, f;
    function g() {
      return "\nclass WAWebVoipAudioPlaybackWorkletProcessor extends AudioWorkletProcessor {\n  constructor(options) {\n    super();\n    this._isProcessing = false;\n    this._underrunCount = 0;\n\n    // Internal ring buffer in worklet scope\n    const bufferSize = options.processorOptions.bufferSize || 8192;\n    this._buffer = new Float32Array(bufferSize);\n    this._writePos = 0;\n    this._readPos = 0;\n    this._bufferSize = bufferSize;\n\n    this.port.onmessage = (event) => {\n      if (event.data.type === 'start') {\n        this.port.postMessage({type: 'requestPlaybackData'});\n      } else if (event.data.type === 'stop') {\n        this._isProcessing = false;\n      } else if (event.data.type === 'audioData') {\n        // Write received audio data to internal buffer\n        this._writeAudioData(event.data.audioData);\n        if (!this._isProcessing) {\n          this._isProcessing = true;\n        }\n      }\n    };\n\n    this.port.postMessage({type: 'ready'});\n  }\n\n  _getAvailableSpace() {\n    return (\n      (this._readPos - this._writePos - 1 + this._bufferSize) %\n      this._bufferSize\n    );\n  }\n\n  _getDataLength() {\n    return (this._writePos - this._readPos + this._bufferSize) % this._bufferSize;\n  }\n\n  _writeAudioData(audioData) {\n    if (audioData.length === 0) {\n      return;\n    }\n    const availableSpace = this._getAvailableSpace();\n    if (availableSpace < audioData.length) {\n      const samplesToAdvance = Math.max(audioData.length - availableSpace + 4, 4);\n      const alignedAdvance = Math.ceil(samplesToAdvance / 4) * 4;\n      this._readPos = (this._readPos + alignedAdvance) % this._bufferSize;\n    }\n    if (this._writePos + audioData.length <= this._bufferSize) {\n      this._buffer.set(audioData, this._writePos);\n      this._writePos += audioData.length;\n    } else {\n      // Wrap-around: use subarray() to avoid allocating Float32Array views\n      const partitionSizeFormer = this._bufferSize - this._writePos;\n      const partitionSizeLatter = audioData.length - partitionSizeFormer;\n      this._buffer.set(audioData.subarray(0, partitionSizeFormer), this._writePos);\n      this._buffer.set(audioData.subarray(partitionSizeFormer), 0);\n      this._writePos = partitionSizeLatter;\n    }\n  }\n\n  _readAudioDataInto(outputBuffer, length) {\n    const availableData = this._getDataLength();\n    const samplesToRead = Math.min(length, availableData);\n    if (samplesToRead === 0) {\n      return 0;\n    }\n    if (this._readPos + samplesToRead <= this._bufferSize) {\n      // Non-wrap-around case: copy directly from ring buffer to output\n      outputBuffer.set(\n        this._buffer.subarray(this._readPos, this._readPos + samplesToRead),\n      );\n      this._readPos += samplesToRead;\n      return samplesToRead;\n    }\n    // Wrap-around case: copy in two parts directly to output buffer\n    const partitionSizeFormer = this._bufferSize - this._readPos;\n    const partitionSizeLatter = samplesToRead - partitionSizeFormer;\n    outputBuffer.set(this._buffer.subarray(this._readPos, this._bufferSize), 0);\n    outputBuffer.set(\n      this._buffer.subarray(0, partitionSizeLatter),\n      partitionSizeFormer,\n    );\n    this._readPos = partitionSizeLatter;\n    return samplesToRead;\n  }\n\n  process(inputs, outputs, parameters) {\n    if (!this._isProcessing || outputs.length === 0 || outputs[0].length === 0) {\n      return true;\n    }\n\n    const output = outputs[0];\n    const channelCount = output.length;\n    const outputChannel = output[0];\n    const frameCount = outputChannel.length;\n\n    const availableData = this._getDataLength();\n\n    if (availableData < frameCount * 2) {\n      this.port.postMessage({type: 'requestPlaybackData'});\n      if (availableData < frameCount) {\n        this._underrunCount++;\n        return true;\n      }\n    }\n\n    // Write audio data directly into first output channel\n    const samplesRead = this._readAudioDataInto(outputChannel, frameCount);\n    if (samplesRead === frameCount) {\n      // Copy to other channels if present\n      for (let channel = 1; channel < channelCount; channel++) {\n        output[channel].set(outputChannel);\n      }\n      this._underrunCount = 0;\n    }\n\n    return true;\n  }\n}\n\nregisterProcessor('voip-playback-worklet-processor', WAWebVoipAudioPlaybackWorkletProcessor);\n";
    }
    var h = (function () {
      function t() {
        var e = this;
        ((this.audioWorkletNode = null),
          (this.playbackBuffer = null),
          (this.playbackAudioElement = null),
          (this.playbackMediaStreamDestination = null),
          (this.playbackParams = null),
          (this.isProcessorReady = !1),
          (this.processorReadyResolvable = null),
          (this.workletPreloadPromise = null),
          (this.isWorkletPreloaded = !1),
          (this.preloadWorkletModule = function (t) {
            var n = o("WAWebVoipWorkletPreload")
              .preloadWorkletProcessorModule(t, g, "[AV:Worklet:Playback]")
              .then(function (t) {
                ((e.isWorkletPreloaded = t), (e.workletPreloadPromise = null));
              });
            e.workletPreloadPromise = n;
          }));
      }
      var a = t.prototype;
      return (
        (a.startAudioPlayback = (function () {
          var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
            var n = this,
              a = t.audioContext,
              i = t.channels,
              l = t.framesPerChunk,
              _ = t.playbackBuffer,
              f = t.sampleRate;
            ((this.playbackBuffer = _),
              (this.playbackParams = {
                sampleRate: f,
                channels: i,
                framesPerChunk: l,
              }));
            try {
              if (
                (this.workletPreloadPromise != null &&
                  (yield this.workletPreloadPromise),
                !this.isWorkletPreloaded)
              ) {
                var h = g(),
                  y = new Blob([h], { type: "application/javascript" }),
                  C = URL.createObjectURL(y);
                (yield a.audioWorklet.addModule(C), URL.revokeObjectURL(C));
              }
              this.audioWorkletNode = new AudioWorkletNode(
                a,
                "voip-playback-worklet-processor",
                {
                  numberOfInputs: 0,
                  numberOfOutputs: 1,
                  outputChannelCount: [i],
                  processorOptions: { bufferSize: 8192 },
                },
              );
              var b = this.audioWorkletNode;
              b != null &&
                (b.port.onmessage = function (t) {
                  var r = t.data;
                  if (!(typeof r != "object" || r == null)) {
                    var a = r,
                      i = a.type;
                    if (i === "ready") {
                      var l;
                      ((n.isProcessorReady = !0),
                        (l = n.processorReadyResolvable) == null || l.resolve(),
                        (n.processorReadyResolvable = null));
                    } else if (i === "requestPlaybackData") n.sendAudioChunk();
                    else if (i === "underrun") {
                      var s = a.count;
                      o("WALogger").WARN(
                        e ||
                          (e = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: [AV:Worklet:Playback] audio underrun detected, count=",
                            "",
                          ])),
                        s,
                      );
                    }
                  }
                });
              var v = Date.now();
              yield this.waitForProcessorReady();
              var S = Date.now() - v;
              ((this.playbackMediaStreamDestination =
                a.createMediaStreamDestination()),
                this.audioWorkletNode != null &&
                  this.audioWorkletNode.connect(
                    this.playbackMediaStreamDestination,
                  ),
                (this.playbackAudioElement = new Audio()),
                this.playbackMediaStreamDestination != null &&
                  (this.playbackAudioElement.srcObject =
                    this.playbackMediaStreamDestination.stream),
                this.playbackAudioElement.play().catch(function (e) {
                  o("WALogger").WARN(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:Worklet:Playback] audio element play failed: ",
                        "",
                      ])),
                    e,
                  );
                }));
              var R = o(
                "WAWebAudioDeviceManager",
              ).getCurrentSelectedAudioOutputDevice();
              if (
                (o("WALogger").LOG(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV:Worklet:Playback] applying saved output device preference: ",
                      "",
                    ])),
                  R != null ? R : "(none)",
                ),
                R != null && this.playbackAudioElement != null)
              ) {
                var L = this.playbackAudioElement;
                if (typeof L.setSinkId == "function")
                  try {
                    (yield L.setSinkId(R),
                      o("WALogger").LOG(
                        c ||
                          (c = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: [AV:Worklet:Playback] output device set successfully to ",
                            "",
                          ])),
                        R.slice(0, 8),
                      ));
                  } catch (e) {
                    var E = e instanceof Error ? e.name : String(e);
                    o("WALogger").WARN(
                      d ||
                        (d = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [AV:Worklet:Playback] setSinkId failed for saved device ",
                          ": ",
                          "",
                        ])),
                      R.slice(0, 8),
                      E,
                    );
                  }
                else
                  o("WALogger").WARN(
                    m ||
                      (m = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:Worklet:Playback] setSinkId not available, output will use browser default",
                      ])),
                  );
              }
              this.audioWorkletNode != null &&
                this.audioWorkletNode.port.postMessage({ type: "start" });
            } catch (e) {
              throw (
                o("WALogger").ERROR(
                  p ||
                    (p = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV:Worklet:Playback] failed to start playback: ",
                      "",
                    ])),
                  e,
                ),
                r("err")("voip: [AV:Worklet:Playback] failed to start playback")
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
                      "voip: [AV:Worklet:Playback] processor failed to become ready within 5 second timeout",
                    ),
                  ),
                  (e.processorReadyResolvable = null));
              }, t);
              try {
                var a;
                yield (a = this.processorReadyResolvable) == null
                  ? void 0
                  : a.promise;
              } catch (e) {
                throw e;
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
        (a.sendAudioChunk = function () {
          var e = this.playbackParams,
            t = this.playbackBuffer,
            n = this.audioWorkletNode;
          if (!(e == null || t == null || n == null))
            try {
              var r = e.framesPerChunk * 4,
                a = o("WAWebAudioUtility").requestAudioFromWasm(t, r),
                i = new Float32Array(a);
              n.port.postMessage({ type: "audioData", audioData: i }, [
                i.buffer,
              ]);
            } catch (e) {
              o("WALogger").ERROR(
                _ ||
                  (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:Worklet:Playback] error sending audio chunk: ",
                    "",
                  ])),
                e,
              );
            }
        }),
        (a.stopAudioPlayback = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            try {
              if (
                (this.audioWorkletNode != null &&
                  this.audioWorkletNode.port.postMessage({ type: "stop" }),
                this.playbackAudioElement != null)
              ) {
                var e = this.playbackAudioElement;
                (e.pause(),
                  (e.srcObject = null),
                  (this.playbackAudioElement = null));
              }
              (this.audioWorkletNode &&
                (this.audioWorkletNode.disconnect(),
                (this.audioWorkletNode = null)),
                this.playbackMediaStreamDestination &&
                  (this.playbackMediaStreamDestination.disconnect(),
                  (this.playbackMediaStreamDestination = null)),
                (this.playbackBuffer = null),
                (this.playbackParams = null),
                (this.isProcessorReady = !1),
                (this.processorReadyResolvable = null),
                (this.isWorkletPreloaded = !1),
                (this.workletPreloadPromise = null));
            } catch (e) {
              o("WALogger").ERROR(
                f ||
                  (f = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:Worklet:Playback] cleanup error: ",
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
        (a.getAudioElement = function () {
          return this.playbackAudioElement;
        }),
        t
      );
    })();
    l.WAWebVoipAudioPlaybackWorklet = h;
  },
  98,
);
