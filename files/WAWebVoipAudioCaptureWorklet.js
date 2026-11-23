__d(
  "WAWebVoipAudioCaptureWorklet",
  [
    "WALogger",
    "WAWebAudioRingBuffer",
    "WAWebAudioUtility",
    "WAWebVoipAudioCaptureBase",
    "WAWebVoipAudioCaptureWorkletProcessorConfig",
    "WAWebVoipMicrophoneLevelReporter",
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
      g,
      h,
      y,
      C,
      b = (function () {
        function t() {
          var t = this;
          ((this.audioWorkletNode = null),
            (this.audioBuffer = null),
            (this.captureRingBuffer = null),
            (this.captureParams = null),
            (this.isProcessorReady = !1),
            (this.mediaStreamSource = null),
            (this.workletPreloadPromise = null),
            (this.isWorkletPreloaded = !1),
            (this.inputLevelReporter = null),
            (this.preloadWorkletModule = function (n) {
              var a = r(
                "WAWebVoipAudioCaptureWorkletProcessorConfig",
              ).module_url;
              if (a === "") {
                o("WALogger").ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV:Worklet:Capture] Missing worklet module url, skipping preload",
                    ])),
                );
                return;
              }
              var i = n.audioWorklet
                .addModule(a)
                .then(function () {
                  (o("WALogger").LOG(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:Worklet:Capture] worklet processor module preloaded",
                      ])),
                  ),
                    (t.isWorkletPreloaded = !0),
                    (t.workletPreloadPromise = null));
                })
                .catch(function (e) {
                  (o("WALogger").ERROR(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:Worklet:Capture] worklet preload failed, will load during start: ",
                        "",
                      ])),
                    e,
                  ),
                    (t.isWorkletPreloaded = !1),
                    (t.workletPreloadPromise = null));
                });
              t.workletPreloadPromise = i;
            }));
        }
        var n = t.prototype;
        return (
          (n.startAudioCapture = async function (t) {
            var e = this,
              n = t.audioBuffer,
              a = t.audioContext,
              i = t.channels,
              l = t.framesPerChunk,
              s = t.mediaStreamSource,
              u = t.onInputLevel,
              _ = t.sampleRate;
            ((this.audioBuffer = n),
              (this.mediaStreamSource = s),
              (this.captureParams = {
                sampleRate: _,
                channels: i,
                framesPerChunk: l,
              }),
              (this.inputLevelReporter =
                u != null
                  ? new (o(
                      "WAWebVoipMicrophoneLevelReporter",
                    ).WAWebVoipMicrophoneLevelReporter)(u, "Worklet:Capture")
                  : null));
            var f = 128;
            this.captureRingBuffer = new (o(
              "WAWebAudioRingBuffer",
            ).WAWebAudioRingBuffer)(f, l, "CaptureWorklet");
            try {
              if (
                (this.workletPreloadPromise != null &&
                  (await this.workletPreloadPromise),
                !this.isWorkletPreloaded)
              ) {
                var g = r(
                  "WAWebVoipAudioCaptureWorkletProcessorConfig",
                ).module_url;
                if (g === "")
                  throw r("err")(
                    "voip: [AV:Worklet:Capture] Missing worklet module url",
                  );
                (await a.audioWorklet.addModule(g),
                  o("WALogger").LOG(
                    c ||
                      (c = babelHelpers.taggedTemplateLiteralLoose([
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
                (h.port.onmessage = function (t) {
                  var n = t.data;
                  if (!(typeof n != "object" || n == null)) {
                    var r = n,
                      a = r.type;
                    if (a === "ready")
                      ((e.isProcessorReady = !0),
                        o("WALogger").LOG(
                          d ||
                            (d = babelHelpers.taggedTemplateLiteralLoose([
                              "voip: [AV:Worklet:Capture] processor ready",
                            ])),
                        ));
                    else if (a === "audioData") {
                      var i = r,
                        l = i.audioData,
                        s = i.sampleRate,
                        u = i.channelCount;
                      l instanceof Float32Array &&
                        typeof s == "number" &&
                        e.handleAudioData(
                          l,
                          s,
                          typeof u == "number" && u >= 1 ? u : null,
                        );
                    }
                  }
                }),
                await this.waitForProcessorReady(),
                this.audioWorkletNode != null &&
                  s.connect(this.audioWorkletNode),
                this.audioWorkletNode != null &&
                  this.audioWorkletNode.port.postMessage({ type: "start" }),
                o("WALogger").LOG(
                  m ||
                    (m = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV:Worklet:Capture] capture started +",
                    ])),
                ));
            } catch (e) {
              throw (
                o("WALogger").ERROR(
                  p ||
                    (p = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV:Worklet:Capture] failed to start capture: ",
                      "",
                    ])),
                  e,
                ),
                e
              );
            }
          }),
          (n.waitForProcessorReady = async function () {
            var e = this,
              t = 50;
            return new Promise(function (n) {
              var r = function () {
                e.isProcessorReady ? n() : window.setTimeout(r, t);
              };
              r();
            });
          }),
          (n.handleAudioData = function (t, n, r) {
            var e,
              a = this.captureParams,
              i = this.audioBuffer,
              l = this.captureRingBuffer;
            if (!(a == null || i == null || l == null)) {
              try {
                var s = o("WAWebAudioUtility").maybeDownsampleBuffer(
                  t,
                  n,
                  a.sampleRate,
                );
                (l.write(s),
                  o(
                    "WAWebVoipAudioCaptureBase",
                  ).WAWebVoipAudioCaptureBase.processCapturedAudioChunks(
                    l,
                    i,
                    a.framesPerChunk,
                    a.channels,
                    t.length,
                    "Worklet:Capture",
                  ));
              } catch (e) {
                o("WALogger").ERROR(
                  _ ||
                    (_ = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV:Worklet:Capture] error handling audio data: ",
                      "",
                    ])),
                  e,
                );
              }
              (e = this.inputLevelReporter) == null ||
                e.report(t, r != null ? r : a.channels);
            }
          }),
          (n.stopAudioCapture = async function () {
            o("WALogger").LOG(
              f ||
                (f = babelHelpers.taggedTemplateLiteralLoose([
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
                    g ||
                      (g = babelHelpers.taggedTemplateLiteralLoose([
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
                (this.inputLevelReporter = null),
                o("WALogger").LOG(
                  h ||
                    (h = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV:Worklet:Capture] cleanup completed",
                    ])),
                ));
            } catch (e) {
              o("WALogger").ERROR(
                y ||
                  (y = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:Worklet:Capture] cleanup error: ",
                    "",
                  ])),
                e,
              );
            }
          }),
          (n.reconnect = function (t) {
            this.audioWorkletNode &&
              t &&
              (t.connect(this.audioWorkletNode),
              o("WALogger").LOG(
                C ||
                  (C = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:Worklet:Capture] reconnected to new stream",
                  ])),
              ));
          }),
          t
        );
      })();
    l.WAWebVoipAudioCaptureWorklet = b;
  },
  98,
);
