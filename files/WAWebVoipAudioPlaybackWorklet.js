__d(
  "WAWebVoipAudioPlaybackWorklet",
  [
    "WALogger",
    "WAResolvable",
    "WAWebAudioDeviceManager",
    "WAWebAudioUtility",
    "WAWebVoipAudioPlaybackWorkletProcessorConfig",
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
      _ = (function () {
        function t() {
          var t = this;
          ((this.audioWorkletNode = null),
            (this.playbackBuffer = null),
            (this.playbackAudioElement = null),
            (this.playbackMediaStreamDestination = null),
            (this.playbackParams = null),
            (this.isProcessorReady = !1),
            (this.processorReadyResolvable = null),
            (this.workletPreloadPromise = null),
            (this.isWorkletPreloaded = !1),
            (this.preloadWorkletModule = function (n) {
              var a = r(
                "WAWebVoipAudioPlaybackWorkletProcessorConfig",
              ).module_url;
              if (a === "") {
                o("WALogger").ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV:Worklet:Playback] Missing worklet module url, skipping preload",
                    ])),
                );
                return;
              }
              var i = n.audioWorklet
                .addModule(a)
                .then(function () {
                  ((t.isWorkletPreloaded = !0),
                    (t.workletPreloadPromise = null));
                })
                .catch(function (e) {
                  (o("WALogger").ERROR(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:Worklet:Playback] worklet preload failed, will load during start: ",
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
        var a = t.prototype;
        return (
          (a.startAudioPlayback = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = this,
                  n = e.audioContext,
                  a = e.channels,
                  i = e.framesPerChunk,
                  l = e.playbackBuffer,
                  s = e.sampleRate;
                ((this.playbackBuffer = l),
                  (this.playbackParams = {
                    sampleRate: s,
                    channels: a,
                    framesPerChunk: i,
                  }));
                try {
                  if (
                    (this.workletPreloadPromise != null &&
                      (yield this.workletPreloadPromise),
                    !this.isWorkletPreloaded)
                  ) {
                    var m = r(
                      "WAWebVoipAudioPlaybackWorkletProcessorConfig",
                    ).module_url;
                    if (m === "")
                      throw r("err")(
                        "voip: [AV:Worklet:Playback] Missing worklet module url",
                      );
                    yield n.audioWorklet.addModule(m);
                  }
                  this.audioWorkletNode = new AudioWorkletNode(
                    n,
                    "voip-playback-worklet-processor",
                    {
                      numberOfInputs: 0,
                      numberOfOutputs: 1,
                      outputChannelCount: [a],
                      processorOptions: { bufferSize: 8192 },
                    },
                  );
                  var p = this.audioWorkletNode;
                  p != null &&
                    (p.port.onmessage = function (e) {
                      var n = e.data;
                      if (!(typeof n != "object" || n == null)) {
                        var r = n,
                          a = r.type;
                        if (a === "ready") {
                          var i;
                          ((t.isProcessorReady = !0),
                            (i = t.processorReadyResolvable) == null ||
                              i.resolve(),
                            (t.processorReadyResolvable = null));
                        } else if (a === "requestPlaybackData")
                          t.sendAudioChunk();
                        else if (a === "underrun") {
                          var l = r.count;
                          o("WALogger").WARN(
                            u ||
                              (u = babelHelpers.taggedTemplateLiteralLoose([
                                "voip: [AV:Worklet:Playback] audio underrun detected, count=",
                                "",
                              ])),
                            l,
                          );
                        }
                      }
                    });
                  var _ = Date.now();
                  yield this.waitForProcessorReady();
                  var f = Date.now() - _;
                  ((this.playbackMediaStreamDestination =
                    n.createMediaStreamDestination()),
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
                        c ||
                          (c = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: [AV:Worklet:Playback] audio element play failed: ",
                            "",
                          ])),
                        e,
                      );
                    }),
                    this.playbackAudioElement != null &&
                      (yield o(
                        "WAWebAudioDeviceManager",
                      ).applyPreferredAudioOutputSink(
                        this.playbackAudioElement,
                        "AV:Worklet:Playback",
                      )),
                    this.audioWorkletNode != null &&
                      this.audioWorkletNode.port.postMessage({
                        type: "start",
                      }));
                } catch (e) {
                  throw (
                    o("WALogger").ERROR(
                      d ||
                        (d = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [AV:Worklet:Playback] failed to start playback: ",
                          "",
                        ])),
                      e,
                    ),
                    r("err")(
                      "voip: [AV:Worklet:Playback] failed to start playback",
                    )
                  );
                }
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
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
                  m ||
                    (m = babelHelpers.taggedTemplateLiteralLoose([
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
                  p ||
                    (p = babelHelpers.taggedTemplateLiteralLoose([
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
          (a.getEstimatedOutputLagSamples = function () {
            return 0;
          }),
          t
        );
      })();
    l.WAWebVoipAudioPlaybackWorklet = _;
  },
  98,
);
