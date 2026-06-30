__d(
  "WAWebVoipAudioCaptureBase",
  [
    "$InternalEnum",
    "Promise",
    "WALogger",
    "WAResolvable",
    "WAWebABProps",
    "WAWebAudioDeviceManager",
    "WAWebAudioUtility",
    "WAWebBackendApi",
    "WAWebDebounce",
    "WAWebUA",
    "WAWebUserPrefsVoip",
    "WAWebVoipAudioCaptureScriptProcessor",
    "WAWebVoipAudioCaptureSharedBufferWorklet",
    "WAWebVoipAudioCaptureWorklet",
    "WAWebVoipPerfOptimizations",
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
      g,
      h,
      y,
      C,
      b,
      v,
      S,
      R,
      L,
      E,
      k,
      I,
      T,
      D,
      x,
      $,
      P,
      N,
      M,
      w,
      A,
      F,
      O,
      B,
      W,
      q,
      U,
      V,
      H,
      G,
      z,
      j,
      K,
      Q,
      X,
      Y,
      J,
      Z,
      ee,
      te,
      ne,
      re,
      oe,
      ae,
      ie,
      le,
      se,
      ue,
      ce,
      de,
      me,
      pe,
      _e,
      fe,
      ge,
      he,
      ye,
      Ce,
      be,
      ve,
      Se,
      Re,
      Le,
      Ee,
      ke,
      Ie,
      Te,
      De,
      xe,
      $e,
      Pe,
      Ne,
      Me,
      we,
      Ae,
      Fe,
      Oe,
      Be = new Set(),
      We = 2e3,
      qe = null;
    function Ue() {
      qe != null && (window.clearTimeout(qe), (qe = null));
      var t = Array.from(Be);
      t.length !== 0 &&
        (qe = window.setTimeout(function () {
          qe = null;
          var n = 0,
            r = 0,
            a = 0;
          for (var i of t) {
            var l = i.getTracks().filter(function (e) {
              return e.readyState === "live";
            });
            if (l.length > 0) {
              var c = !1;
              for (var d of l) {
                try {
                  d.stop();
                } catch (t) {
                  o("WALogger")
                    .WARN(
                      e ||
                        (e = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [AV:micReconciliation] track.stop failed: ",
                          "",
                        ])),
                      t,
                    )
                    .sendLogs("voip-mic-callend-backstop-error");
                }
                d.readyState !== "live" ? (n++, (c = !0)) : r++;
              }
              c && a++;
            }
            Be.delete(i);
          }
          (n > 0 &&
            o("WALogger")
              .WARN(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:micReconciliation] callEndBackstop: stopped ",
                    " leaked live mic track(s) across ",
                    " stream(s) the WASM teardown never released",
                  ])),
                n,
                a,
              )
              .sendLogs("voip-mic-callend-backstop"),
            r > 0 &&
              o("WALogger")
                .WARN(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV:micReconciliation] callEndBackstop: ",
                      " track(s) still live after stop \u2014 mic may remain leaked",
                    ])),
                  r,
                )
                .sendLogs("voip-mic-callend-backstop-stuck"));
        }, We));
    }
    var Ve = n("$InternalEnum").Mirrored([
        "Uninitialized",
        "Initializing",
        "Ready",
        "Error",
      ]),
      He = n("$InternalEnum")({
        DEFAULT: 0,
        SCRIPT_PROCESSOR: 1,
        AUDIO_WORKLET: 2,
        SHARED_BUFFER_WORKLET: 3,
      });
    function Ge(e) {
      e.state === "suspended" &&
        e
          .resume()
          .then(function () {
            o("WALogger").LOG(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [AV:switchDevice] resumed new AudioContext",
                ])),
            );
          })
          .catch(function (e) {
            o("WALogger").LOG(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [AV:switchDevice] AudioContext resume failed: ",
                  "",
                ])),
              e,
            );
          });
    }
    function ze(e) {
      var t = Reflect.get(e, "closed");
      return t === !0;
    }
    var je = (function () {
      function e() {
        var e;
        ((this.audioContext = null),
          (this.mediaStreamSource = null),
          (this.audioStream = null),
          (this.audioBuffer = null),
          (this.captureParams = null),
          (this.audioCaptureInitState = Ve.Uninitialized),
          (this.audioCaptureInitResolvable = null),
          (this.implementation = null),
          (this.deviceChangeHandler = null));
        var t = o("WAWebABProps").getABPropConfigValue(
            "web_voip_audio_capture_impl",
          ),
          n = (e = He.cast(t)) != null ? e : He.DEFAULT;
        o("WAWebUA").UA.isFirefox && (n = He.SCRIPT_PROCESSOR);
        e: {
          if (n === He.SCRIPT_PROCESSOR) {
            this.implementation = new (o(
              "WAWebVoipAudioCaptureScriptProcessor",
            ).WAWebVoipAudioCaptureScriptProcessor)();
            break e;
          }
          if (n === He.AUDIO_WORKLET) {
            this.implementation = new (o(
              "WAWebVoipAudioCaptureWorklet",
            ).WAWebVoipAudioCaptureWorklet)();
            break e;
          }
          if (n === He.SHARED_BUFFER_WORKLET) {
            this.implementation = new (o(
              "WAWebVoipAudioCaptureSharedBufferWorklet",
            ).WAWebVoipAudioCaptureSharedBufferWorklet)();
            break e;
          }
          {
            this.implementation = new (o(
              "WAWebVoipAudioCaptureSharedBufferWorklet",
            ).WAWebVoipAudioCaptureSharedBufferWorklet)();
            break e;
          }
        }
        o("WALogger").LOG(
          m ||
            (m = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [AV:AudioCapture] using implementation: ",
              "",
            ])),
          o("WAWebUA").UA.isFirefox
            ? "script-processor (Firefox override)"
            : t != null
              ? t
              : "default",
        );
      }
      var t = e.prototype;
      return (
        (t.initCaptureDriver = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            var t = this,
              a = e.bits_per_sample,
              i = e.channels,
              l = e.frames_per_chunk,
              s = e.sample_rate;
            if (
              (o("WALogger").LOG(
                p ||
                  (p = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:initCaptureDriver] params:\n      sampleRate=",
                    ",\n      channels=",
                    ",\n      bitsPerSample=",
                    ",\n      framesPerChunk=",
                    "",
                  ])),
                s,
                i,
                a,
                l,
              ),
              this.audioCaptureInitState !== Ve.Uninitialized)
            ) {
              (o("WALogger")
                .ERROR(
                  _ ||
                    (_ = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV:initCaptureDriver] invalid initialization.\n        State = ",
                      "",
                    ])),
                  this.audioCaptureInitState,
                )
                .sendLogs(
                  "voip: invalid initialization state = ${this.audioCaptureInitState}",
                ),
                yield this.cleanup());
              return;
            }
            ((this.audioCaptureInitState = Ve.Initializing),
              (this.audioCaptureInitResolvable = new (o(
                "WAResolvable",
              ).Resolvable)()),
              (this.captureParams = {
                sampleRate: s,
                channels: i,
                bitsPerSample: a,
                framesPerChunk: l,
              }));
            var u = yield o("WAWebAudioDeviceManager").selectAudioDevice();
            if (u == null) {
              var c;
              ((this.audioCaptureInitState = Ve.Error),
                (c = this.audioCaptureInitResolvable) == null ||
                  c.reject(r("err")("voip: [AV] No audio device selected.")));
              return;
            }
            o("WALogger").LOG(
              f ||
                (f = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [AV:initCaptureDriver] selected device: ",
                  "",
                ])),
              u,
            );
            var d = this.captureParams;
            if (!d) {
              var m;
              (o("WALogger")
                .ERROR(
                  g ||
                    (g = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV:initCaptureDriver] capture parameters are null",
                    ])),
                )
                .sendLogs("voip: capture parameters are null"),
                (this.audioCaptureInitState = Ve.Error),
                (m = this.audioCaptureInitResolvable) == null ||
                  m.reject(r("err")("capture parameters are null")));
              return;
            }
            try {
              if (
                navigator.mediaDevices &&
                navigator.mediaDevices.getUserMedia
              ) {
                var T,
                  D,
                  x = yield o("WAWebBackendApi").frontendSendAndReceive(
                    "voipAcquireMediaStream",
                    { type: "microphone", selectedDeviceId: u, params: d },
                  );
                if (x == null)
                  throw r("err")(
                    "Failed to get media stream from getUserMedia",
                  );
                var $ = x.getTracks();
                (o("WALogger").LOG(
                  h ||
                    (h = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV] Initializing audio capture with ",
                      " devices. Kinds: ",
                      ", Labels: ",
                      ", IDs: ",
                      "",
                    ])),
                  $.length,
                  $.slice(0, 3).map(function (e) {
                    return e.kind;
                  }),
                  $.slice(0, 3).map(function (e) {
                    return e.label;
                  }),
                  $.slice(0, 3).map(function (e) {
                    return e.getSettings().deviceId;
                  }),
                ),
                  o("WALogger").LOG(
                    y ||
                      (y = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:initCaptureDriver] granted mic permission and got audio stream",
                      ])),
                  ),
                  o("WAWebUA").UA.isFirefox
                    ? ((this.audioContext = new AudioContext({
                        latencyHint: "interactive",
                      })),
                      o("WALogger").LOG(
                        C ||
                          (C = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: [AV:initCaptureDriver] Firefox detected; system sample rate:\n            ",
                            "Hz, VoIP expects ",
                            "Hz",
                          ])),
                        this.audioContext.sampleRate,
                        d.sampleRate,
                      ))
                    : (this.audioContext = new AudioContext({
                        sampleRate: d.sampleRate,
                        latencyHint: "interactive",
                      })),
                  this.audioContext.state === "suspended" &&
                    o("WALogger").LOG(
                      b ||
                        (b = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [AV:initCaptureDriver] AudioContext suspended - will resume when needed",
                        ])),
                    ));
                try {
                  this.mediaStreamSource =
                    this.audioContext.createMediaStreamSource(x);
                } catch (e) {
                  throw (
                    o("WALogger").ERROR(
                      v ||
                        (v = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [AV:initCaptureDriver] Failed to create MediaStreamSource:\n            ",
                          "",
                        ])),
                      e,
                    ),
                    e
                  );
                }
                ((this.audioStream = x),
                  Be.add(x),
                  o("WAWebVoipPerfOptimizations").isPerfOptimizationEnabled(
                    o("WAWebVoipPerfOptimizations").PerfOptimizationFlag
                      .WORKLET_PRELOAD,
                  ) &&
                    ((T = this.implementation) == null
                      ? void 0
                      : T.preloadWorkletModule) != null &&
                    this.audioContext != null &&
                    this.implementation.preloadWorkletModule(
                      this.audioContext,
                    ));
                var P = (function () {
                  var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* () {
                      try {
                        var e = yield o(
                          "WAWebAudioDeviceManager",
                        ).selectAudioDevice(void 0, void 0, !0);
                        e != null
                          ? (o("WALogger").LOG(
                              S ||
                                (S = babelHelpers.taggedTemplateLiteralLoose([
                                  "voip: [AV:AudioCaptureDeviceChangeHandler] Auto-switching to device: ",
                                  "",
                                ])),
                              e,
                            ),
                            yield t.switchDevice(e, void 0, void 0, !0))
                          : o("WALogger").WARN(
                              R ||
                                (R = babelHelpers.taggedTemplateLiteralLoose([
                                  "voip: [AV:AudioCaptureDeviceChangeHandler] Device change detected, newDeviceId is null",
                                ])),
                            );
                      } catch (e) {
                        o("WALogger").ERROR(
                          L ||
                            (L = babelHelpers.taggedTemplateLiteralLoose([
                              "voip: [AV:AudioCaptureDeviceChangeHandler] Device change handler error: ",
                              "",
                            ])),
                          e,
                        );
                      }
                    },
                  );
                  return function () {
                    return e.apply(this, arguments);
                  };
                })();
                ((this.deviceChangeHandler = r("WAWebDebounce")(P, 500)),
                  navigator.mediaDevices &&
                    navigator.mediaDevices.addEventListener(
                      "devicechange",
                      this.deviceChangeHandler,
                    ),
                  (this.audioCaptureInitState = Ve.Ready),
                  (D = this.audioCaptureInitResolvable) == null || D.resolve());
              } else {
                var N;
                (o("WALogger")
                  .ERROR(
                    E ||
                      (E = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:initCaptureDriver] getUserMedia not supported",
                      ])),
                  )
                  .sendLogs("voip: getUserMedia not supported"),
                  (this.audioCaptureInitState = Ve.Error),
                  (N = this.audioCaptureInitResolvable) == null ||
                    N.reject(r("err")("getUserMedia not supported")));
              }
            } catch (e) {
              var M;
              (o("WALogger")
                .ERROR(
                  k ||
                    (k = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV:initCaptureDriver] error: ",
                      "",
                    ])),
                  e,
                )
                .sendLogs("voip: error in initCaptureDriver"),
                (this.audioCaptureInitState = Ve.Error),
                (M = this.audioCaptureInitResolvable) == null || M.reject(e),
                yield this.cleanup());
            }
            o("WALogger").LOG(
              I ||
                (I = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [AV:initCaptureDriver] completed successfully",
                ])),
            );
          });
          function t(t) {
            return e.apply(this, arguments);
          }
          return t;
        })()),
        (t.startCapture = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            if (
              (o("WALogger").LOG(
                T ||
                  (T = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:startCapture] start audio capture",
                  ])),
              ),
              this.audioCaptureInitState === Ve.Initializing)
            )
              try {
                var e;
                yield (e = this.audioCaptureInitResolvable) == null
                  ? void 0
                  : e.promise;
              } catch (e) {
                o("WALogger")
                  .ERROR(
                    D ||
                      (D = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:startCapture] error: ",
                        "",
                      ])),
                    e,
                  )
                  .sendLogs("voip: error in startCapture: ${error}");
                return;
              }
            if (this.audioCaptureInitState !== Ve.Ready) {
              o("WALogger")
                .ERROR(
                  x ||
                    (x = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV:startCapture] invalid initialization.\n        State = ",
                      "",
                    ])),
                  this.audioCaptureInitState,
                )
                .sendLogs(
                  "voip: invalid initialization. state = ${this.audioCaptureInitState}",
                );
              return;
            }
            if (!this.audioContext || !this.mediaStreamSource) {
              o("WALogger")
                .ERROR(
                  $ ||
                    ($ = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV:startCapture] audio context or media stream source is null",
                    ])),
                )
                .sendLogs("voip: audio context or media stream source is null");
              return;
            }
            var t = this.captureParams;
            if (!t) {
              o("WALogger")
                .ERROR(
                  P ||
                    (P = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV:startCapture] capture parameters are null",
                    ])),
                )
                .sendLogs("voip: capture parameters are null");
              return;
            }
            var n = this.audioContext,
              r = this.mediaStreamSource;
            try {
              if (n && n.state === "suspended")
                try {
                  (yield n.resume(),
                    o("WALogger").LOG(
                      N ||
                        (N = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [AV:startCapture] AudioContext resumed successfully",
                        ])),
                    ));
                } catch (e) {
                  o("WALogger").LOG(
                    M ||
                      (M = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:startCapture] AudioContext resume failed: ",
                        "",
                      ])),
                    e,
                  );
                }
              var a =
                t.framesPerChunk * t.channels * Float32Array.BYTES_PER_ELEMENT;
              ((this.audioBuffer =
                yield o("WAWebAudioUtility").mallocWasmBuffer(a)),
                this.implementation != null &&
                  (yield this.implementation.startAudioCapture({
                    audioContext: n,
                    mediaStreamSource: r,
                    sampleRate: t.sampleRate,
                    channels: t.channels,
                    framesPerChunk: t.framesPerChunk,
                    audioBuffer: this.audioBuffer,
                  })),
                o("WALogger").LOG(
                  w ||
                    (w = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV:startCapture] audio capture started successfully",
                    ])),
                ));
            } catch (e) {
              (o("WALogger")
                .ERROR(
                  A ||
                    (A = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV:startCapture] error: ",
                      "",
                    ])),
                  e,
                )
                .sendLogs("voip: error in startCapture: ${error}"),
                yield this.cleanup());
            }
          });
          function t() {
            return e.apply(this, arguments);
          }
          return t;
        })()),
        (t.stopCapture = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            if (
              (o("WALogger").LOG(
                F ||
                  (F = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: stopCapture",
                  ])),
              ),
              this.audioCaptureInitState !== Ve.Ready)
            ) {
              if (
                (o("WALogger").WARN(
                  O ||
                    (O = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV:stopCapture] invalid initialization.\n        State = ",
                      "",
                    ])),
                  this.audioCaptureInitState,
                ),
                this.audioCaptureInitState === Ve.Initializing)
              ) {
                o("WALogger").LOG(
                  B ||
                    (B = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV:stopCapture] waiting for init (up to 5s)",
                    ])),
                );
                try {
                  var e,
                    t,
                    a = 5e3,
                    i = null;
                  yield (Oe || (Oe = n("Promise")))
                    .race([
                      (e =
                        (t = this.audioCaptureInitResolvable) == null
                          ? void 0
                          : t.promise) != null
                        ? e
                        : (Oe || (Oe = n("Promise"))).resolve(),
                      new Oe(function (e, t) {
                        i = window.setTimeout(function () {
                          t(
                            r("err")(
                              "voip: [AV:stopCapture] timed out waiting for init",
                            ),
                          );
                        }, a);
                      }),
                    ])
                    .finally(function () {
                      i != null && window.clearTimeout(i);
                    });
                } catch (e) {
                  o("WALogger").WARN(
                    W ||
                      (W = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:stopCapture] init wait failed or timed out, proceeding with cleanup: ",
                        "",
                      ])),
                    e,
                  );
                }
              }
              o("WALogger").LOG(
                q ||
                  (q = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:stopCapture] proceeding with cleanup",
                  ])),
              );
            }
            return this.cleanup();
          });
          function t() {
            return e.apply(this, arguments);
          }
          return t;
        })()),
        (t.cleanup = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            o("WALogger").LOG(
              U ||
                (U = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: cleanup audio capture",
                ])),
            );
            try {
              if (this.deviceChangeHandler != null) {
                var e;
                ((e = navigator.mediaDevices) == null ||
                  e.removeEventListener(
                    "devicechange",
                    this.deviceChangeHandler,
                  ),
                  (this.deviceChangeHandler = null));
              }
              if (
                (this.implementation != null &&
                  (yield this.implementation.stopAudioCapture()),
                this.mediaStreamSource &&
                  (this.mediaStreamSource.disconnect(),
                  (this.mediaStreamSource = null),
                  o("WALogger").LOG(
                    V ||
                      (V = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: cleanup disconnected media stream source",
                      ])),
                  )),
                this.audioStream)
              ) {
                var t = this.audioStream.getTracks();
                (t.forEach(function (e) {
                  e.stop();
                }),
                  o("WALogger").LOG(
                    H ||
                      (H = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:stopCapture] stopped ",
                        " tracks. Kinds: ",
                        "",
                      ])),
                    t.length,
                    t.slice(0, 3).map(function (e) {
                      return e.kind;
                    }),
                  ),
                  (this.audioStream = null),
                  o("WALogger").LOG(
                    G ||
                      (G = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:stopCapture] stopped audio stream",
                      ])),
                  ));
              }
              if (this.audioContext) {
                if (this.audioContext.state !== "closed") {
                  var n = this.audioContext;
                  n.close().catch(function (e) {
                    o("WALogger").LOG(
                      z ||
                        (z = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [AV:cleanup] AudioContext close error (non-fatal): ",
                          "",
                        ])),
                      String(e),
                    );
                  });
                }
                this.audioContext = null;
              }
            } finally {
              if (this.audioBuffer != null) {
                var r = this.audioBuffer;
                try {
                  (yield o("WAWebAudioUtility").freeWasmBuffer(r),
                    o("WALogger").LOG(
                      j ||
                        (j = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [AV:stopCapture] freed WASM audio buffer",
                        ])),
                    ));
                } catch (e) {
                  o("WALogger").WARN(
                    K ||
                      (K = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:stopCapture] error freeing WASM audio buffer: ",
                        "",
                      ])),
                    e,
                  );
                }
                this.audioBuffer = null;
              }
              ((this.audioCaptureInitState = Ve.Uninitialized),
                o("WALogger").LOG(
                  Q ||
                    (Q = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: cleanup finalized",
                    ])),
                ));
            }
          });
          function t() {
            return e.apply(this, arguments);
          }
          return t;
        })()),
        (t.switchDevice = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* (e, t, n, r) {
              var a = this;
              if (
                (o("WALogger").LOG(
                  X ||
                    (X = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV:switchDevice] switchDevice called with deviceId: ",
                      ", forceContextRecreation: ",
                      "",
                    ])),
                  e.slice(0, 8),
                  String(n != null ? n : !1),
                ),
                this.audioCaptureInitState === Ve.Initializing)
              )
                return (
                  o("WALogger").ERROR(
                    Y ||
                      (Y = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:switchDevice] audio capture is initializing already",
                      ])),
                  ),
                  !1
                );
              var i = this.captureParams;
              if (!i)
                return (
                  o("WALogger").ERROR(
                    J ||
                      (J = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:switchDevice] capture parameters are null",
                      ])),
                  ),
                  !1
                );
              var l = n === !0 || !document.hasFocus();
              if (o("WAWebUA").UA.isFirefox && t != null && l)
                return (
                  o("WALogger").LOG(
                    Z ||
                      (Z = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:switchDevice] Firefox context recreation needed, will recreate AudioContext in target window context",
                      ])),
                  ),
                  this.$1(e, t, t !== window, r)
                );
              var s = this.audioContext;
              if (s == null)
                return (
                  o("WALogger").ERROR(
                    ee ||
                      (ee = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:switchDevice] audio context is null",
                      ])),
                  ),
                  !1
                );
              var u = yield o(
                "WAWebAudioDeviceManager",
              ).switchAudioInputDeviceInternal({
                deviceId: e,
                captureParams: i,
                audioContext: s,
                targetWindow: t,
                isAutoSwitch: r,
                onStreamUpdate: function (t) {
                  var e;
                  if (a.audioStream) {
                    var n = a.audioStream.getTracks();
                    (n.forEach(function (e) {
                      e.stop();
                    }),
                      o("WALogger").LOG(
                        te ||
                          (te = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: [AV:switchDevice] stopped ",
                            " tracks. Kinds: ",
                            "",
                          ])),
                        n.length,
                        n.slice(0, 3).map(function (e) {
                          return e.kind;
                        }),
                      ));
                  }
                  (a.mediaStreamSource &&
                    (a.mediaStreamSource.disconnect(),
                    o("WALogger").LOG(
                      ne ||
                        (ne = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [AV:switchDevice] disconnected media stream source",
                        ])),
                    )),
                    (a.mediaStreamSource =
                      (e = s == null ? void 0 : s.createMediaStreamSource(t)) !=
                      null
                        ? e
                        : null),
                    a.audioStream != null && Be.delete(a.audioStream),
                    (a.audioStream = t),
                    Be.add(t),
                    a.implementation != null &&
                      a.mediaStreamSource != null &&
                      a.implementation.reconnect(a.mediaStreamSource),
                    o("WALogger").LOG(
                      re ||
                        (re = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [AV:switchDevice] created new media stream source",
                        ])),
                    ));
                },
              });
              return (
                u
                  ? o("WALogger").LOG(
                      oe ||
                        (oe = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [AV:switchDevice] Successfully switched to device: ",
                          "",
                        ])),
                      e.slice(0, 8),
                    )
                  : o("WALogger").ERROR(
                      ae ||
                        (ae = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [AV:switchDevice] Failed to switch to device: ",
                          "",
                        ])),
                      e.slice(0, 8),
                    ),
                u
              );
            },
          );
          function t(t, n, r, o) {
            return e.apply(this, arguments);
          }
          return t;
        })()),
        (t.$2 = function (t) {
          if (o("WAWebUA").UA.isFirefox) {
            var e = t.AudioContext,
              n = new e({ latencyHint: "interactive" });
            return (
              o("WALogger").LOG(
                ie ||
                  (ie = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:switchDevice] created AudioContext in target window context, sample rate: ",
                    "Hz",
                  ])),
                n.sampleRate,
              ),
              n
            );
          }
          var r = new AudioContext({ latencyHint: "interactive" });
          return (
            o("WALogger").LOG(
              le ||
                (le = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [AV:switchDevice] created new AudioContext with sample rate: ",
                  "Hz",
                ])),
              r.sampleRate,
            ),
            r
          );
        }),
        (t.$3 = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* (e, t, r, a) {
              for (
                var i = 3,
                  l = [0, 100, 200],
                  s = 0,
                  u = null,
                  c = function* (c) {
                    if (
                      ((s = c),
                      c > 0 &&
                        (yield new (Oe || (Oe = n("Promise")))(function (e) {
                          return window.setTimeout(e, l[c]);
                        })),
                      (u = yield o("WAWebBackendApi").frontendSendAndReceive(
                        "voipAcquireMediaStream",
                        {
                          type: "microphone",
                          selectedDeviceId: e,
                          params: babelHelpers.extends({}, r, {
                            sampleRate: a.sampleRate,
                          }),
                          targetWindow: t,
                          suppressErrorPopup: !0,
                        },
                      )),
                      u != null)
                    )
                      return 1;
                  },
                  d = 0;
                d < i && !(yield* c(d));
                d++
              );
              return (
                s > 0 &&
                  o("WALogger").LOG(
                    se ||
                      (se = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:switchDevice] completed after ",
                        " retries with delays: ",
                        "ms",
                      ])),
                    s,
                    l.slice(1, s + 1),
                  ),
                u
              );
            },
          );
          function t(t, n, r, o) {
            return e.apply(this, arguments);
          }
          return t;
        })()),
        (t.$4 = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* (e, t, n) {
              var o = this.implementation,
                a = this.audioBuffer;
              if (o == null || a == null)
                throw r("err")(
                  "voip: [AV:switchDevice] missing capture implementation or audio buffer",
                );
              yield o.startAudioCapture({
                audioContext: e,
                mediaStreamSource: t,
                sampleRate: n.sampleRate,
                channels: n.channels,
                framesPerChunk: n.framesPerChunk,
                audioBuffer: a,
              });
            },
          );
          function t(t, n, r) {
            return e.apply(this, arguments);
          }
          return t;
        })()),
        (t.$5 = function (t) {
          if (t != null)
            try {
              (t.disconnect(),
                o("WALogger").LOG(
                  ue ||
                    (ue = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV:switchDevice] disconnected media stream source",
                    ])),
                ));
            } catch (e) {
              o("WALogger").WARN(
                ce ||
                  (ce = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:switchDevice] media stream source disconnect failed: ",
                    "",
                  ])),
                e,
              );
            }
        }),
        (t.$6 = function (t) {
          if (t != null) {
            var e;
            try {
              e = t.getTracks();
            } catch (e) {
              o("WALogger").WARN(
                de ||
                  (de = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:switchDevice] audio stream getTracks failed: ",
                    "",
                  ])),
                e,
              );
              return;
            }
            (e.forEach(function (e) {
              try {
                e.stop();
              } catch (e) {
                o("WALogger").WARN(
                  me ||
                    (me = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV:switchDevice] audio track stop failed: ",
                      "",
                    ])),
                  e,
                );
              }
            }),
              o("WALogger").LOG(
                pe ||
                  (pe = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:switchDevice] attempted to stop ",
                    " audio tracks",
                  ])),
                e.length,
              ));
          }
        }),
        (t.$7 = function (t, n) {
          if (!(t == null || t.state === "closed"))
            try {
              (t.close().catch(function (e) {
                o("WALogger").LOG(
                  _e ||
                    (_e = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV:switchDevice] ",
                      " AudioContext close failed: ",
                      "",
                    ])),
                  n,
                  String(e),
                );
              }),
                o("WALogger").LOG(
                  fe ||
                    (fe = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV:switchDevice] initiated ",
                      " AudioContext close for context recreation",
                    ])),
                  n,
                ));
            } catch (e) {
              o("WALogger").WARN(
                ge ||
                  (ge = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:switchDevice] ",
                    " AudioContext close threw: ",
                    "",
                  ])),
                n,
                e,
              );
            }
        }),
        (t.$8 = function (t, n, r, o) {
          (this.$5(n), this.$6(r), this.$7(t, o));
        }),
        (t.$9 = function () {
          return {
            audioContext: this.audioContext,
            mediaStreamSource: this.mediaStreamSource,
            audioStream: this.audioStream,
          };
        }),
        (t.$10 = function (t) {
          (this.audioContext === t.audioContext && (this.audioContext = null),
            this.mediaStreamSource === t.mediaStreamSource &&
              (this.mediaStreamSource = null),
            this.audioStream === t.audioStream && (this.audioStream = null));
        }),
        (t.$11 = function (t) {
          return this.audioCaptureInitState === Ve.Ready
            ? !0
            : (o("WALogger").WARN(
                he ||
                  (he = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:switchDevice] capture state changed during ",
                    ", aborting context recreation. State = ",
                    "",
                  ])),
                t,
                this.audioCaptureInitState,
              ),
              !1);
        }),
        (t.$12 = function () {
          return this.implementation != null && this.audioBuffer != null
            ? !0
            : (o("WALogger")
                .ERROR(
                  ye ||
                    (ye = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV:switchDevice] missing capture implementation or audio buffer",
                    ])),
                )
                .sendLogs(
                  "voip: switchDevice missing capture implementation or audio buffer",
                ),
              !1);
        }),
        (t.$13 = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var e = this.implementation;
            e != null &&
              (yield e.stopAudioCapture(),
              o("WALogger").LOG(
                Ce ||
                  (Ce = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:switchDevice] stopped audio capture implementation",
                  ])),
              ));
          });
          function t() {
            return e.apply(this, arguments);
          }
          return t;
        })()),
        (t.$14 = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var e = this.$9();
            return (
              yield this.$13(),
              this.$8(
                e.audioContext,
                e.mediaStreamSource,
                e.audioStream,
                "old",
              ),
              this.$10(e),
              yield new (Oe || (Oe = n("Promise")))(function (e) {
                return window.setTimeout(e, 200);
              }),
              this.$11("current capture release")
            );
          });
          function t() {
            return e.apply(this, arguments);
          }
          return t;
        })()),
        (t.$15 = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var e = this.implementation;
            if (e != null)
              try {
                yield e.stopAudioCapture();
              } catch (e) {
                o("WALogger").WARN(
                  be ||
                    (be = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV:switchDevice] stop capture after context recreation abort failed: ",
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
        (t.$16 = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* (e, t, n) {
              if (t == null || n == null) {
                o("WALogger").WARN(
                  ve ||
                    (ve = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV:switchDevice] cannot rollback context recreation; previous capture graph is missing",
                    ])),
                );
                return;
              }
              try {
                (Ge(t),
                  yield this.$4(t, n, e),
                  (this.audioContext = t),
                  (this.mediaStreamSource = n),
                  o("WALogger").LOG(
                    Se ||
                      (Se = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:switchDevice] rolled back to previous capture graph after context recreation failure",
                      ])),
                  ));
              } catch (e) {
                o("WALogger")
                  .ERROR(
                    Re ||
                      (Re = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:switchDevice] rollback to previous capture graph failed: ",
                        "",
                      ])),
                    e,
                  )
                  .sendLogs(
                    "voip: switchDevice context recreation rollback failed",
                  );
              }
            },
          );
          function t(t, n, r) {
            return e.apply(this, arguments);
          }
          return t;
        })()),
        (t.$1 = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* (e, t, n, r) {
              o("WALogger").LOG(
                Le ||
                  (Le = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:switchDevice] Starting context recreation for device: ",
                    "",
                  ])),
                e.slice(0, 8),
              );
              var a = this.captureParams;
              if (!a)
                return (
                  o("WALogger").ERROR(
                    Ee ||
                      (Ee = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:switchDevice] capture parameters are null",
                      ])),
                  ),
                  !1
                );
              if (ze(t))
                return (
                  o("WALogger").LOG(
                    ke ||
                      (ke = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:switchDevice] target window already closed, skipping switch",
                      ])),
                  ),
                  !1
                );
              var i = null,
                l = null,
                s = null,
                u = null,
                c = null,
                d = null,
                m = !1,
                p = !1;
              try {
                if (((i = this.$2(t)), !this.$12()))
                  return (this.$8(i, null, null, "replacement"), !1);
                if (!n && !(yield this.$14()))
                  return (this.$8(i, null, null, "replacement"), !1);
                if (((l = yield this.$3(e, t, a, i)), !l))
                  return (
                    n
                      ? o("WALogger")
                          .ERROR(
                            Ie ||
                              (Ie = babelHelpers.taggedTemplateLiteralLoose([
                                "voip: [AV:switchDevice] failed to acquire new audio stream",
                              ])),
                          )
                          .sendLogs(
                            "voip: switchDevice context recreation stream acquisition failed",
                          )
                      : o("WALogger")
                          .ERROR(
                            Te ||
                              (Te = babelHelpers.taggedTemplateLiteralLoose([
                                "voip: [AV:switchDevice] failed to reacquire main-window audio stream after releasing popout capture",
                              ])),
                          )
                          .sendLogs(
                            "voip: switchDevice main reacquisition failed after popout release",
                          ),
                    this.$8(i, null, null, "replacement"),
                    !1
                  );
                if (
                  (o("WALogger").LOG(
                    De ||
                      (De = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:switchDevice] acquired new audio stream before stopping current capture",
                      ])),
                  ),
                  !this.$11("stream acquisition"))
                )
                  return (this.$8(i, null, l, "replacement"), !1);
                if (
                  ((s = i.createMediaStreamSource(l)),
                  (u = this.audioContext),
                  (c = this.mediaStreamSource),
                  (d = this.audioStream),
                  n && (yield this.$13(), (m = !0)),
                  !this.$11("capture stop"))
                )
                  return (this.$8(i, s, l, "replacement"), !1);
                if (
                  (Ge(i),
                  yield this.$4(i, s, a),
                  o("WALogger").LOG(
                    xe ||
                      (xe = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:switchDevice] restarted audio capture implementation",
                      ])),
                  ),
                  !this.$11("replacement capture start"))
                )
                  return (
                    yield this.$15(),
                    this.$8(i, s, l, "replacement"),
                    !1
                  );
                if (
                  ((this.audioContext = i),
                  (this.mediaStreamSource = s),
                  this.audioStream != null && Be.delete(this.audioStream),
                  (this.audioStream = l),
                  Be.add(l),
                  (p = !0),
                  o("WALogger").LOG(
                    $e ||
                      ($e = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:switchDevice] created new media stream source from new stream",
                      ])),
                  ),
                  n)
                )
                  try {
                    this.$8(u, c, d, "old");
                  } catch (e) {
                    o("WALogger").WARN(
                      Pe ||
                        (Pe = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [AV:switchDevice] old capture graph cleanup failed after replacement commit: ",
                          "",
                        ])),
                      e,
                    );
                  }
                try {
                  (r !== !0 &&
                    o("WAWebUserPrefsVoip").setSelectedAudioInputDevice(e),
                    o("WAWebAudioDeviceManager").AudioDeviceEvents.trigger(
                      "deviceSelectionChanged",
                      [e],
                    ));
                } catch (e) {
                  o("WALogger").WARN(
                    Ne ||
                      (Ne = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:switchDevice] device selection update failed after context recreation: ",
                        "",
                      ])),
                    e,
                  );
                }
                return (
                  o("WALogger").LOG(
                    Me ||
                      (Me = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:switchDevice] Successfully switched device with context recreation: ",
                        "",
                      ])),
                    e.slice(0, 8),
                  ),
                  !0
                );
              } catch (e) {
                if (
                  (o("WALogger")
                    .ERROR(
                      we ||
                        (we = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [AV:switchDevice] Context recreation failed: ",
                          "",
                        ])),
                      e,
                    )
                    .sendLogs("voip: switchDevice context recreation failed"),
                  p)
                )
                  try {
                    yield this.cleanup();
                  } catch (e) {
                    o("WALogger")
                      .ERROR(
                        Ae ||
                          (Ae = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: [AV:switchDevice] cleanup after context recreation failure also failed: ",
                            "",
                          ])),
                        e,
                      )
                      .sendLogs(
                        "voip: switchDevice context recreation cleanup failed",
                      );
                  }
                else
                  (this.$8(i, s, l, "replacement"),
                    m && (yield this.$16(a, u, c)));
                return !1;
              }
            },
          );
          function t(t, n, r, o) {
            return e.apply(this, arguments);
          }
          return t;
        })()),
        (e.processCapturedAudioChunks = function (t, n, a, i, l, s) {
          var e = a * i;
          if (e === 0)
            throw r("err")(
              "voip: [AV:" +
                s +
                "] Invalid audio configuration: " +
                ("wasmExpectedSamples cannot be 0 (framesPerChunk=" +
                  a +
                  ", channels=" +
                  i +
                  ")"),
            );
          for (
            var u = t.getDataLength(), c = 0, d = Math.ceil(l / e) + 1;
            u >= e && c < d;
          ) {
            var m = t.read(e);
            if (m.length === e)
              (o("WAWebAudioUtility").sendAudioToWasm(n, m),
                c++,
                (u = t.getDataLength()));
            else break;
          }
          return (
            c > 2 &&
              o("WALogger").WARN(
                Fe ||
                  (Fe = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:",
                    "] processed ",
                    " chunks, remaining buffer: ",
                    "",
                  ])),
                s,
                c,
                u,
              ),
            c
          );
        }),
        e
      );
    })();
    ((l.scheduleCallEndMicRelease = Ue), (l.WAWebVoipAudioCaptureBase = je));
  },
  98,
);
