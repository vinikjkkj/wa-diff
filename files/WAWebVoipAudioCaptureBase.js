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
    "WAWebBoolFunc",
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
      Be,
      We,
      qe,
      Ue = new Set(),
      Ve = 2e3,
      He = null;
    function Ge() {
      He != null && (window.clearTimeout(He), (He = null));
      var t = Array.from(Ue);
      t.length !== 0 &&
        (He = window.setTimeout(function () {
          He = null;
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
            Ue.delete(i);
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
        }, Ve));
    }
    var ze = n("$InternalEnum").Mirrored([
        "Uninitialized",
        "Initializing",
        "Ready",
        "Error",
      ]),
      je = n("$InternalEnum")({
        DEFAULT: 0,
        SCRIPT_PROCESSOR: 1,
        AUDIO_WORKLET: 2,
        SHARED_BUFFER_WORKLET: 3,
      });
    function Ke(e) {
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
    function Qe(e) {
      var t = Reflect.get(e, "closed");
      return t === !0;
    }
    var Xe = (function () {
      function e() {
        var e;
        ((this.audioContext = null),
          (this.mediaStreamSource = null),
          (this.audioStream = null),
          (this.audioBuffer = null),
          (this.captureParams = null),
          (this.audioCaptureInitState = ze.Uninitialized),
          (this.audioCaptureInitResolvable = null),
          (this.implementation = null),
          (this.deviceChangeHandler = null));
        var t = o("WAWebABProps").getABPropConfigValue(
            "web_voip_audio_capture_impl",
          ),
          n = (e = je.cast(t)) != null ? e : je.DEFAULT;
        o("WAWebUA").UA.isFirefox && (n = je.SCRIPT_PROCESSOR);
        e: {
          if (n === je.SCRIPT_PROCESSOR) {
            this.implementation = new (o(
              "WAWebVoipAudioCaptureScriptProcessor",
            ).WAWebVoipAudioCaptureScriptProcessor)();
            break e;
          }
          if (n === je.AUDIO_WORKLET) {
            this.implementation = new (o(
              "WAWebVoipAudioCaptureWorklet",
            ).WAWebVoipAudioCaptureWorklet)();
            break e;
          }
          if (n === je.SHARED_BUFFER_WORKLET) {
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
              a = e.auto_gain_control,
              i = e.bits_per_sample,
              l = e.channels,
              s = e.frames_per_chunk,
              u = e.sample_rate;
            if (
              (o("WALogger").LOG(
                p ||
                  (p = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:initCaptureDriver] params:\n      sampleRate=",
                    ",\n      channels=",
                    ",\n      bitsPerSample=",
                    ",\n      framesPerChunk=",
                    ",\n      autoGainControl=",
                    "",
                  ])),
                u,
                l,
                i,
                s,
                String(a !== !1),
              ),
              this.audioCaptureInitState !== ze.Uninitialized)
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
            ((this.audioCaptureInitState = ze.Initializing),
              (this.audioCaptureInitResolvable = new (o(
                "WAResolvable",
              ).Resolvable)()),
              (this.captureParams = {
                sampleRate: u,
                channels: l,
                bitsPerSample: i,
                framesPerChunk: s,
                autoGainControl: a !== !1,
              }));
            var c = yield o("WAWebAudioDeviceManager").selectAudioDevice();
            if (c == null) {
              var d;
              ((this.audioCaptureInitState = ze.Error),
                (d = this.audioCaptureInitResolvable) == null ||
                  d.reject(r("err")("voip: [AV] No audio device selected.")));
              return;
            }
            o("WALogger").LOG(
              f ||
                (f = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [AV:initCaptureDriver] selected device: ",
                  "",
                ])),
              c,
            );
            var m = this.captureParams;
            if (!m) {
              var T;
              (o("WALogger")
                .ERROR(
                  g ||
                    (g = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV:initCaptureDriver] capture parameters are null",
                    ])),
                )
                .sendLogs("voip: capture parameters are null"),
                (this.audioCaptureInitState = ze.Error),
                (T = this.audioCaptureInitResolvable) == null ||
                  T.reject(r("err")("capture parameters are null")));
              return;
            }
            try {
              if (
                navigator.mediaDevices &&
                navigator.mediaDevices.getUserMedia
              ) {
                var D,
                  x,
                  $ = yield o("WAWebBackendApi").frontendSendAndReceive(
                    "voipAcquireMediaStream",
                    { type: "microphone", selectedDeviceId: c, params: m },
                  );
                if ($ == null)
                  throw r("err")(
                    "Failed to get media stream from getUserMedia",
                  );
                var P = $.getTracks();
                (o("WALogger").LOG(
                  h ||
                    (h = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV] Initializing audio capture with ",
                      " devices. Kinds: ",
                      ", Labels: ",
                      ", IDs: ",
                      "",
                    ])),
                  P.length,
                  P.slice(0, 3).map(function (e) {
                    return e.kind;
                  }),
                  P.slice(0, 3).map(function (e) {
                    return e.label;
                  }),
                  P.slice(0, 3).map(function (e) {
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
                        m.sampleRate,
                      ))
                    : (this.audioContext = new AudioContext({
                        sampleRate: m.sampleRate,
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
                    this.audioContext.createMediaStreamSource($);
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
                ((this.audioStream = $),
                  Ue.add($),
                  o("WAWebVoipPerfOptimizations").isPerfOptimizationEnabled(
                    o("WAWebVoipPerfOptimizations").PerfOptimizationFlag
                      .WORKLET_PRELOAD,
                  ) &&
                    ((D = this.implementation) == null
                      ? void 0
                      : D.preloadWorkletModule) != null &&
                    this.audioContext != null &&
                    this.implementation.preloadWorkletModule(
                      this.audioContext,
                    ));
                var N = (function () {
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
                ((this.deviceChangeHandler = r("WAWebDebounce")(N, 500)),
                  navigator.mediaDevices &&
                    navigator.mediaDevices.addEventListener(
                      "devicechange",
                      this.deviceChangeHandler,
                    ),
                  (this.audioCaptureInitState = ze.Ready),
                  (x = this.audioCaptureInitResolvable) == null || x.resolve());
              } else {
                var M;
                (o("WALogger")
                  .ERROR(
                    E ||
                      (E = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:initCaptureDriver] getUserMedia not supported",
                      ])),
                  )
                  .sendLogs("voip: getUserMedia not supported"),
                  (this.audioCaptureInitState = ze.Error),
                  (M = this.audioCaptureInitResolvable) == null ||
                    M.reject(r("err")("getUserMedia not supported")));
              }
            } catch (e) {
              var w;
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
                (this.audioCaptureInitState = ze.Error),
                (w = this.audioCaptureInitResolvable) == null || w.reject(e),
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
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            o("WALogger").LOG(
              T ||
                (T = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [AV:startCapture] start audio capture",
                ])),
            );
            var t = e != null ? e : o("WAWebBoolFunc").returnFalse;
            if ((yield this.$1(t)) && !t()) {
              if (this.audioCaptureInitState !== ze.Ready) {
                o("WALogger")
                  .ERROR(
                    D ||
                      (D = babelHelpers.taggedTemplateLiteralLoose([
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
                    x ||
                      (x = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:startCapture] audio context or media stream source is null",
                      ])),
                  )
                  .sendLogs(
                    "voip: audio context or media stream source is null",
                  );
                return;
              }
              var n = this.captureParams;
              if (!n) {
                o("WALogger")
                  .ERROR(
                    $ ||
                      ($ = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:startCapture] capture parameters are null",
                      ])),
                  )
                  .sendLogs("voip: capture parameters are null");
                return;
              }
              var r = this.audioContext,
                a = this.mediaStreamSource;
              yield this.$2(r, a, n, t);
            }
          });
          function t(t) {
            return e.apply(this, arguments);
          }
          return t;
        })()),
        (t.$1 = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            if (e()) return !1;
            if (this.audioCaptureInitState !== ze.Initializing) return !0;
            try {
              var t;
              return (
                yield (t = this.audioCaptureInitResolvable) == null
                  ? void 0
                  : t.promise,
                !e()
              );
            } catch (t) {
              return e()
                ? (o("WALogger").LOG(
                    P ||
                      (P = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:startCapture] cancelled after init error: ",
                        "",
                      ])),
                    t,
                  ),
                  !1)
                : (o("WALogger")
                    .ERROR(
                      N ||
                        (N = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [AV:startCapture] error: ",
                          "",
                        ])),
                      t,
                    )
                    .sendLogs("voip: error in startCapture: ${error}"),
                  !1);
            }
          });
          function t(t) {
            return e.apply(this, arguments);
          }
          return t;
        })()),
        (t.$2 = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* (e, t, n, r) {
              try {
                if (e.state === "suspended") {
                  try {
                    (yield e.resume(),
                      o("WALogger").LOG(
                        M ||
                          (M = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: [AV:startCapture] AudioContext resumed successfully",
                          ])),
                      ));
                  } catch (e) {
                    if (r()) {
                      o("WALogger").LOG(
                        w ||
                          (w = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: [AV:startCapture] cancelled after AudioContext resume error: ",
                            "",
                          ])),
                        e,
                      );
                      return;
                    }
                    o("WALogger").LOG(
                      A ||
                        (A = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [AV:startCapture] AudioContext resume failed: ",
                          "",
                        ])),
                      e,
                    );
                  }
                  if (r()) return;
                }
                var a =
                    n.framesPerChunk *
                    n.channels *
                    Float32Array.BYTES_PER_ELEMENT,
                  i = yield o("WAWebAudioUtility").mallocWasmBuffer(a);
                if (((this.audioBuffer = i), r())) {
                  yield this.$3(i);
                  return;
                }
                if (
                  this.implementation != null &&
                  (yield this.implementation.startAudioCapture({
                    audioContext: e,
                    mediaStreamSource: t,
                    sampleRate: n.sampleRate,
                    channels: n.channels,
                    framesPerChunk: n.framesPerChunk,
                    audioBuffer: i,
                    isStartCancelled: r,
                  }),
                  r())
                )
                  return;
                o("WALogger").LOG(
                  F ||
                    (F = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV:startCapture] audio capture started successfully",
                    ])),
                );
              } catch (e) {
                if (r()) {
                  o("WALogger").LOG(
                    O ||
                      (O = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:startCapture] cancelled after start error: ",
                        "",
                      ])),
                    e,
                  );
                  return;
                }
                (o("WALogger")
                  .ERROR(
                    B ||
                      (B = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:startCapture] error: ",
                        "",
                      ])),
                    e,
                  )
                  .sendLogs("voip: error in startCapture: ${error}"),
                  yield this.cleanup());
              }
            },
          );
          function t(t, n, r, o) {
            return e.apply(this, arguments);
          }
          return t;
        })()),
        (t.$3 = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            if (this.audioBuffer === e) {
              this.audioBuffer = null;
              try {
                (yield o("WAWebAudioUtility").freeWasmBuffer(e),
                  o("WALogger").LOG(
                    W ||
                      (W = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:stopCapture] freed WASM audio buffer",
                      ])),
                  ));
              } catch (e) {
                o("WALogger").WARN(
                  q ||
                    (q = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV:stopCapture] error freeing WASM audio buffer: ",
                      "",
                    ])),
                  e,
                );
              }
            }
          });
          function t(t) {
            return e.apply(this, arguments);
          }
          return t;
        })()),
        (t.stopCapture = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            if (
              (o("WALogger").LOG(
                U ||
                  (U = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: stopCapture",
                  ])),
              ),
              this.audioCaptureInitState !== ze.Ready)
            ) {
              if (
                (o("WALogger").WARN(
                  V ||
                    (V = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV:stopCapture] invalid initialization.\n        State = ",
                      "",
                    ])),
                  this.audioCaptureInitState,
                ),
                this.audioCaptureInitState === ze.Initializing)
              ) {
                o("WALogger").LOG(
                  H ||
                    (H = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV:stopCapture] waiting for init (up to 5s)",
                    ])),
                );
                try {
                  var e,
                    t,
                    a = 5e3,
                    i = null;
                  yield (qe || (qe = n("Promise")))
                    .race([
                      (e =
                        (t = this.audioCaptureInitResolvable) == null
                          ? void 0
                          : t.promise) != null
                        ? e
                        : (qe || (qe = n("Promise"))).resolve(),
                      new qe(function (e, t) {
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
                    G ||
                      (G = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:stopCapture] init wait failed or timed out, proceeding with cleanup: ",
                        "",
                      ])),
                    e,
                  );
                }
              }
              o("WALogger").LOG(
                z ||
                  (z = babelHelpers.taggedTemplateLiteralLoose([
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
              j ||
                (j = babelHelpers.taggedTemplateLiteralLoose([
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
                    K ||
                      (K = babelHelpers.taggedTemplateLiteralLoose([
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
                    Q ||
                      (Q = babelHelpers.taggedTemplateLiteralLoose([
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
                    X ||
                      (X = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:stopCapture] stopped audio stream",
                      ])),
                  ));
              }
              if (this.audioContext) {
                if (this.audioContext.state !== "closed") {
                  var n = this.audioContext;
                  n.close().catch(function (e) {
                    o("WALogger").LOG(
                      Y ||
                        (Y = babelHelpers.taggedTemplateLiteralLoose([
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
                yield this.$3(r);
              }
              ((this.audioCaptureInitState = ze.Uninitialized),
                o("WALogger").LOG(
                  J ||
                    (J = babelHelpers.taggedTemplateLiteralLoose([
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
                  Z ||
                    (Z = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV:switchDevice] switchDevice called with deviceId: ",
                      ", forceContextRecreation: ",
                      "",
                    ])),
                  e.slice(0, 8),
                  String(n != null ? n : !1),
                ),
                this.audioCaptureInitState === ze.Initializing)
              )
                return (
                  o("WALogger").ERROR(
                    ee ||
                      (ee = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:switchDevice] audio capture is initializing already",
                      ])),
                  ),
                  !1
                );
              var i = this.captureParams;
              if (!i)
                return (
                  o("WALogger").ERROR(
                    te ||
                      (te = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:switchDevice] capture parameters are null",
                      ])),
                  ),
                  !1
                );
              var l = n === !0 || !document.hasFocus();
              if (o("WAWebUA").UA.isFirefox && t != null && l)
                return (
                  o("WALogger").LOG(
                    ne ||
                      (ne = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:switchDevice] Firefox context recreation needed, will recreate AudioContext in target window context",
                      ])),
                  ),
                  this.$4(e, t, t !== window, r)
                );
              var s = this.audioContext;
              if (s == null)
                return (
                  o("WALogger").ERROR(
                    re ||
                      (re = babelHelpers.taggedTemplateLiteralLoose([
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
                        oe ||
                          (oe = babelHelpers.taggedTemplateLiteralLoose([
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
                      ae ||
                        (ae = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [AV:switchDevice] disconnected media stream source",
                        ])),
                    )),
                    (a.mediaStreamSource =
                      (e = s == null ? void 0 : s.createMediaStreamSource(t)) !=
                      null
                        ? e
                        : null),
                    a.audioStream != null && Ue.delete(a.audioStream),
                    (a.audioStream = t),
                    Ue.add(t),
                    a.implementation != null &&
                      a.mediaStreamSource != null &&
                      a.implementation.reconnect(a.mediaStreamSource),
                    o("WALogger").LOG(
                      ie ||
                        (ie = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [AV:switchDevice] created new media stream source",
                        ])),
                    ));
                },
              });
              return (
                u
                  ? o("WALogger").LOG(
                      le ||
                        (le = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [AV:switchDevice] Successfully switched to device: ",
                          "",
                        ])),
                      e.slice(0, 8),
                    )
                  : o("WALogger").ERROR(
                      se ||
                        (se = babelHelpers.taggedTemplateLiteralLoose([
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
        (t.$5 = function (t) {
          if (o("WAWebUA").UA.isFirefox) {
            var e = t.AudioContext,
              n = new e({ latencyHint: "interactive" });
            return (
              o("WALogger").LOG(
                ue ||
                  (ue = babelHelpers.taggedTemplateLiteralLoose([
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
              ce ||
                (ce = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [AV:switchDevice] created new AudioContext with sample rate: ",
                  "Hz",
                ])),
              r.sampleRate,
            ),
            r
          );
        }),
        (t.$6 = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            for (
              var t = e.audioContext,
                r = e.deviceId,
                a = e.params,
                i = e.targetWindow,
                l = 3,
                s = [0, 100, 200],
                u = 0,
                c = null,
                d = function* (l) {
                  if (
                    ((u = l),
                    l > 0 &&
                      (yield new (qe || (qe = n("Promise")))(function (e) {
                        return window.setTimeout(e, s[l]);
                      })),
                    (c = yield o("WAWebBackendApi").frontendSendAndReceive(
                      "voipAcquireMediaStream",
                      {
                        type: "microphone",
                        selectedDeviceId: r,
                        params: babelHelpers.extends({}, a, {
                          sampleRate: t.sampleRate,
                        }),
                        targetWindow: i,
                        suppressErrorPopup: !0,
                      },
                    )),
                    c != null)
                  )
                    return 1;
                },
                m = 0;
              m < l && !(yield* d(m));
              m++
            );
            return (
              u > 0 &&
                o("WALogger").LOG(
                  de ||
                    (de = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV:switchDevice] completed after ",
                      " retries with delays: ",
                      "ms",
                    ])),
                  u,
                  s.slice(1, u + 1),
                ),
              c
            );
          });
          function t(t) {
            return e.apply(this, arguments);
          }
          return t;
        })()),
        (t.$7 = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* (e, t, n) {
              var a = this.implementation,
                i = this.audioBuffer;
              if (a == null || i == null)
                throw r("err")(
                  "voip: [AV:switchDevice] missing capture implementation or audio buffer",
                );
              yield a.startAudioCapture({
                audioContext: e,
                mediaStreamSource: t,
                sampleRate: n.sampleRate,
                channels: n.channels,
                framesPerChunk: n.framesPerChunk,
                audioBuffer: i,
                isStartCancelled: o("WAWebBoolFunc").returnFalse,
              });
            },
          );
          function t(t, n, r) {
            return e.apply(this, arguments);
          }
          return t;
        })()),
        (t.$8 = function (t) {
          if (t != null)
            try {
              (t.disconnect(),
                o("WALogger").LOG(
                  me ||
                    (me = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV:switchDevice] disconnected media stream source",
                    ])),
                ));
            } catch (e) {
              o("WALogger").WARN(
                pe ||
                  (pe = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:switchDevice] media stream source disconnect failed: ",
                    "",
                  ])),
                e,
              );
            }
        }),
        (t.$9 = function (t) {
          if (t != null) {
            var e;
            try {
              e = t.getTracks();
            } catch (e) {
              o("WALogger").WARN(
                _e ||
                  (_e = babelHelpers.taggedTemplateLiteralLoose([
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
                  fe ||
                    (fe = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV:switchDevice] audio track stop failed: ",
                      "",
                    ])),
                  e,
                );
              }
            }),
              o("WALogger").LOG(
                ge ||
                  (ge = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:switchDevice] attempted to stop ",
                    " audio tracks",
                  ])),
                e.length,
              ));
          }
        }),
        (t.$10 = function (t, n) {
          if (!(t == null || t.state === "closed"))
            try {
              (t.close().catch(function (e) {
                o("WALogger").LOG(
                  he ||
                    (he = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV:switchDevice] ",
                      " AudioContext close failed: ",
                      "",
                    ])),
                  n,
                  String(e),
                );
              }),
                o("WALogger").LOG(
                  ye ||
                    (ye = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV:switchDevice] initiated ",
                      " AudioContext close for context recreation",
                    ])),
                  n,
                ));
            } catch (e) {
              o("WALogger").WARN(
                Ce ||
                  (Ce = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:switchDevice] ",
                    " AudioContext close threw: ",
                    "",
                  ])),
                n,
                e,
              );
            }
        }),
        (t.$11 = function (t, n, r, o) {
          (this.$8(n), this.$9(r), this.$10(t, o));
        }),
        (t.$12 = function () {
          return {
            audioContext: this.audioContext,
            mediaStreamSource: this.mediaStreamSource,
            audioStream: this.audioStream,
          };
        }),
        (t.$13 = function (t) {
          (this.audioContext === t.audioContext && (this.audioContext = null),
            this.mediaStreamSource === t.mediaStreamSource &&
              (this.mediaStreamSource = null),
            this.audioStream === t.audioStream && (this.audioStream = null));
        }),
        (t.$14 = function (t) {
          return this.audioCaptureInitState === ze.Ready
            ? !0
            : (o("WALogger").WARN(
                be ||
                  (be = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:switchDevice] capture state changed during ",
                    ", aborting context recreation. State = ",
                    "",
                  ])),
                t,
                this.audioCaptureInitState,
              ),
              !1);
        }),
        (t.$15 = function () {
          return this.implementation != null && this.audioBuffer != null
            ? !0
            : (o("WALogger")
                .ERROR(
                  ve ||
                    (ve = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV:switchDevice] missing capture implementation or audio buffer",
                    ])),
                )
                .sendLogs(
                  "voip: switchDevice missing capture implementation or audio buffer",
                ),
              !1);
        }),
        (t.$16 = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var e = this.implementation;
            e != null &&
              (yield e.stopAudioCapture(),
              o("WALogger").LOG(
                Se ||
                  (Se = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:switchDevice] stopped audio capture implementation",
                  ])),
              ));
          });
          function t() {
            return e.apply(this, arguments);
          }
          return t;
        })()),
        (t.$17 = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var e = this.$12();
            return (
              yield this.$16(),
              this.$11(
                e.audioContext,
                e.mediaStreamSource,
                e.audioStream,
                "old",
              ),
              this.$13(e),
              yield new (qe || (qe = n("Promise")))(function (e) {
                return window.setTimeout(e, 200);
              }),
              this.$14("current capture release")
            );
          });
          function t() {
            return e.apply(this, arguments);
          }
          return t;
        })()),
        (t.$18 = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var e = this.implementation;
            if (e != null)
              try {
                yield e.stopAudioCapture();
              } catch (e) {
                o("WALogger").WARN(
                  Re ||
                    (Re = babelHelpers.taggedTemplateLiteralLoose([
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
        (t.$19 = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* (e, t, n) {
              if (t == null || n == null) {
                o("WALogger").WARN(
                  Le ||
                    (Le = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV:switchDevice] cannot rollback context recreation; previous capture graph is missing",
                    ])),
                );
                return;
              }
              try {
                (Ke(t),
                  yield this.$7(t, n, e),
                  (this.audioContext = t),
                  (this.mediaStreamSource = n),
                  o("WALogger").LOG(
                    Ee ||
                      (Ee = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:switchDevice] rolled back to previous capture graph after context recreation failure",
                      ])),
                  ));
              } catch (e) {
                o("WALogger")
                  .ERROR(
                    ke ||
                      (ke = babelHelpers.taggedTemplateLiteralLoose([
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
        (t.$4 = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* (e, t, n, r) {
              o("WALogger").LOG(
                Ie ||
                  (Ie = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:switchDevice] Starting context recreation for device: ",
                    "",
                  ])),
                e.slice(0, 8),
              );
              var a = this.captureParams;
              if (!a)
                return (
                  o("WALogger").ERROR(
                    Te ||
                      (Te = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:switchDevice] capture parameters are null",
                      ])),
                  ),
                  !1
                );
              if (Qe(t))
                return (
                  o("WALogger").LOG(
                    De ||
                      (De = babelHelpers.taggedTemplateLiteralLoose([
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
                if (((i = this.$5(t)), !this.$15()))
                  return (this.$11(i, null, null, "replacement"), !1);
                if (!n && !(yield this.$17()))
                  return (this.$11(i, null, null, "replacement"), !1);
                if (
                  ((l = yield this.$6({
                    audioContext: i,
                    deviceId: e,
                    params: a,
                    targetWindow: t,
                  })),
                  !l)
                )
                  return (
                    n
                      ? o("WALogger")
                          .ERROR(
                            xe ||
                              (xe = babelHelpers.taggedTemplateLiteralLoose([
                                "voip: [AV:switchDevice] failed to acquire new audio stream",
                              ])),
                          )
                          .sendLogs(
                            "voip: switchDevice context recreation stream acquisition failed",
                          )
                      : o("WALogger")
                          .ERROR(
                            $e ||
                              ($e = babelHelpers.taggedTemplateLiteralLoose([
                                "voip: [AV:switchDevice] failed to reacquire main-window audio stream after releasing popout capture",
                              ])),
                          )
                          .sendLogs(
                            "voip: switchDevice main reacquisition failed after popout release",
                          ),
                    this.$11(i, null, null, "replacement"),
                    !1
                  );
                if (
                  (o("WALogger").LOG(
                    Pe ||
                      (Pe = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:switchDevice] acquired new audio stream before stopping current capture",
                      ])),
                  ),
                  !this.$14("stream acquisition"))
                )
                  return (this.$11(i, null, l, "replacement"), !1);
                if (
                  ((s = i.createMediaStreamSource(l)),
                  (u = this.audioContext),
                  (c = this.mediaStreamSource),
                  (d = this.audioStream),
                  n && (yield this.$16(), (m = !0)),
                  !this.$14("capture stop"))
                )
                  return (this.$11(i, s, l, "replacement"), !1);
                if (
                  (Ke(i),
                  yield this.$7(i, s, a),
                  o("WALogger").LOG(
                    Ne ||
                      (Ne = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:switchDevice] restarted audio capture implementation",
                      ])),
                  ),
                  !this.$14("replacement capture start"))
                )
                  return (
                    yield this.$18(),
                    this.$11(i, s, l, "replacement"),
                    !1
                  );
                if (
                  ((this.audioContext = i),
                  (this.mediaStreamSource = s),
                  this.audioStream != null && Ue.delete(this.audioStream),
                  (this.audioStream = l),
                  Ue.add(l),
                  (p = !0),
                  o("WALogger").LOG(
                    Me ||
                      (Me = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:switchDevice] created new media stream source from new stream",
                      ])),
                  ),
                  n)
                )
                  try {
                    this.$11(u, c, d, "old");
                  } catch (e) {
                    o("WALogger").WARN(
                      we ||
                        (we = babelHelpers.taggedTemplateLiteralLoose([
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
                    Ae ||
                      (Ae = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:switchDevice] device selection update failed after context recreation: ",
                        "",
                      ])),
                    e,
                  );
                }
                return (
                  o("WALogger").LOG(
                    Fe ||
                      (Fe = babelHelpers.taggedTemplateLiteralLoose([
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
                      Oe ||
                        (Oe = babelHelpers.taggedTemplateLiteralLoose([
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
                        Be ||
                          (Be = babelHelpers.taggedTemplateLiteralLoose([
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
                  (this.$11(i, s, l, "replacement"),
                    m && (yield this.$19(a, u, c)));
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
                We ||
                  (We = babelHelpers.taggedTemplateLiteralLoose([
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
    ((l.scheduleCallEndMicRelease = Ge), (l.WAWebVoipAudioCaptureBase = Xe));
  },
  98,
);
