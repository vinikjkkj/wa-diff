__d(
  "WAWebVoipAudioCaptureWorklet",
  [
    "Promise",
    "WALogger",
    "WAWebAudioRingBuffer",
    "WAWebAudioUtility",
    "WAWebVoipAudioCaptureBase",
    "WAWebVoipWorkletPreload",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s, u, c, d, m, p, _, f, g, h;
    function y() {
      return "\n/**\n * AudioWorklet Processor for Capture (runs in AudioWorkletGlobalScope)\n */\nclass WAWebVoipAudioCaptureWorkletProcessor extends AudioWorkletProcessor {\n  constructor(options) {\n    super();\n\n    const {channels} = options.processorOptions;\n    this._channels = channels;\n    this._isProcessing = false;\n\n    this.port.onmessage = (event) => {\n      if (event.data.type === 'start') {\n        this._isProcessing = true;\n      } else if (event.data.type === 'stop') {\n        this._isProcessing = false;\n      }\n    };\n\n    this.port.postMessage({type: 'ready'});\n  }\n\n  /**\n   * Process input audio (called by browser at regular intervals)\n   */\n  process(inputs, outputs) {\n    if (!this._isProcessing || inputs.length === 0 || inputs[0].length === 0) {\n      return true;\n    }\n\n    const input = inputs[0];\n    const channelCount = Math.min(input.length, this._channels);\n    const frameCount = input[0].length; // Typically 128 frames\n\n    // Interleave channels into single buffer\n    const interleavedData = new Float32Array(frameCount * channelCount);\n    for (let frame = 0; frame < frameCount; frame++) {\n      for (let channel = 0; channel < channelCount; channel++) {\n        interleavedData[frame * channelCount + channel] = input[channel][frame];\n      }\n    }\n    // Send to main thread with sample rate.\n    // (Sample rate is needed to detect Firefox sample rate mismatches)\n    this.port.postMessage(\n      {\n        type: 'audioData',\n        audioData: interleavedData,\n        sampleRate: sampleRate, // Available from AudioWorkletGlobalScope\n      },\n      [interleavedData.buffer],\n    );\n\n    return true;\n  }\n}\n\nregisterProcessor('voip-capture-worklet-processor', WAWebVoipAudioCaptureWorkletProcessor);\n  ";
    }
    var C = (function () {
      function t() {
        var e = this;
        ((this.audioWorkletNode = null),
          (this.audioBuffer = null),
          (this.captureRingBuffer = null),
          (this.captureParams = null),
          (this.isProcessorReady = !1),
          (this.mediaStreamSource = null),
          (this.workletPreloadPromise = null),
          (this.isWorkletPreloaded = !1),
          (this.preloadWorkletModule = function (t) {
            var n = o("WAWebVoipWorkletPreload")
              .preloadWorkletProcessorModule(t, y, "[AV:Worklet:Capture]")
              .then(function (t) {
                ((e.isWorkletPreloaded = t), (e.workletPreloadPromise = null));
              });
            e.workletPreloadPromise = n;
          }));
      }
      var r = t.prototype;
      return (
        (r.startAudioCapture = (function () {
          var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
            var n = this,
              r = t.audioBuffer,
              a = t.audioContext,
              i = t.channels,
              l = t.framesPerChunk,
              d = t.mediaStreamSource,
              m = t.sampleRate;
            ((this.audioBuffer = r),
              (this.mediaStreamSource = d),
              (this.captureParams = {
                sampleRate: m,
                channels: i,
                framesPerChunk: l,
              }));
            var p = 128;
            this.captureRingBuffer = new (o(
              "WAWebAudioRingBuffer",
            ).WAWebAudioRingBuffer)(p, l, "CaptureWorklet");
            try {
              if (
                (this.workletPreloadPromise != null &&
                  (yield this.workletPreloadPromise),
                !this.isWorkletPreloaded)
              ) {
                var _ = y(),
                  f = new Blob([_], { type: "application/javascript" }),
                  g = URL.createObjectURL(f);
                (yield a.audioWorklet.addModule(g),
                  URL.revokeObjectURL(g),
                  o("WALogger").LOG(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:Worklet:Capture] worklet processor module loaded",
                      ])),
                  ));
              }
              this.audioWorkletNode = new AudioWorkletNode(
                a,
                "voip-capture-worklet-processor",
                {
                  numberOfInputs: 1,
                  numberOfOutputs: 0,
                  processorOptions: { channels: i },
                },
              );
              var h = this.audioWorkletNode;
              (h != null &&
                (h.port.onmessage = function (e) {
                  var t = e.data;
                  if (!(typeof t != "object" || t == null)) {
                    var r = t,
                      a = r.type;
                    if (a === "ready")
                      ((n.isProcessorReady = !0),
                        o("WALogger").LOG(
                          s ||
                            (s = babelHelpers.taggedTemplateLiteralLoose([
                              "voip: [AV:Worklet:Capture] processor ready",
                            ])),
                        ));
                    else if (a === "audioData") {
                      var i = r.audioData,
                        l = r.sampleRate;
                      i instanceof Float32Array &&
                        typeof l == "number" &&
                        n.handleAudioData(i, l);
                    }
                  }
                }),
                yield this.waitForProcessorReady(),
                this.audioWorkletNode != null &&
                  d.connect(this.audioWorkletNode),
                this.audioWorkletNode != null &&
                  this.audioWorkletNode.port.postMessage({ type: "start" }),
                o("WALogger").LOG(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV:Worklet:Capture] capture started +",
                    ])),
                ));
            } catch (e) {
              throw (
                o("WALogger").ERROR(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV:Worklet:Capture] failed to start capture: ",
                      "",
                    ])),
                  e,
                ),
                e
              );
            }
          });
          function r(e) {
            return t.apply(this, arguments);
          }
          return r;
        })()),
        (r.waitForProcessorReady = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var e = this,
              t = 50;
            return new (h || (h = n("Promise")))(function (n) {
              var r = function () {
                e.isProcessorReady ? n() : window.setTimeout(r, t);
              };
              r();
            });
          });
          function t() {
            return e.apply(this, arguments);
          }
          return t;
        })()),
        (r.handleAudioData = function (t, n) {
          var e = this.captureParams,
            r = this.audioBuffer,
            a = this.captureRingBuffer;
          if (!(e == null || r == null || a == null))
            try {
              var i = o("WAWebAudioUtility").maybeDownsampleBuffer(
                t,
                n,
                e.sampleRate,
              );
              (a.write(i),
                o(
                  "WAWebVoipAudioCaptureBase",
                ).WAWebVoipAudioCaptureBase.processCapturedAudioChunks(
                  a,
                  r,
                  e.framesPerChunk,
                  e.channels,
                  t.length,
                  "Worklet:Capture",
                ));
            } catch (e) {
              o("WALogger").ERROR(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:Worklet:Capture] error handling audio data: ",
                    "",
                  ])),
                e,
              );
            }
        }),
        (r.stopAudioCapture = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            o("WALogger").LOG(
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [AV:Worklet:Capture] stopping audio capture",
                ])),
            );
            try {
              var e;
              (this.audioWorkletNode != null &&
                this.audioWorkletNode.port.postMessage({ type: "stop" }),
                this.audioWorkletNode &&
                  (this.audioWorkletNode.disconnect(),
                  (this.audioWorkletNode = null),
                  o("WALogger").LOG(
                    p ||
                      (p = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:Worklet:Capture] disconnected worklet node",
                      ])),
                  )),
                (e = this.captureRingBuffer) == null || e.reset(),
                (this.captureRingBuffer = null),
                (this.audioBuffer = null),
                (this.captureParams = null),
                (this.mediaStreamSource = null),
                (this.isProcessorReady = !1),
                (this.isWorkletPreloaded = !1),
                (this.workletPreloadPromise = null),
                o("WALogger").LOG(
                  _ ||
                    (_ = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV:Worklet:Capture] cleanup completed",
                    ])),
                ));
            } catch (e) {
              o("WALogger").ERROR(
                f ||
                  (f = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:Worklet:Capture] cleanup error: ",
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
        (r.reconnect = function (t) {
          this.audioWorkletNode &&
            t &&
            (t.connect(this.audioWorkletNode),
            o("WALogger").LOG(
              g ||
                (g = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [AV:Worklet:Capture] reconnected to new stream",
                ])),
            ));
        }),
        t
      );
    })();
    l.WAWebVoipAudioCaptureWorklet = C;
  },
  98,
);
