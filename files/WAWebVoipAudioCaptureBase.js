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
      Ae = n("$InternalEnum").Mirrored([
        "Uninitialized",
        "Initializing",
        "Ready",
        "Error",
      ]),
      Fe = n("$InternalEnum")({
        DEFAULT: 0,
        SCRIPT_PROCESSOR: 1,
        AUDIO_WORKLET: 2,
        SHARED_BUFFER_WORKLET: 3,
      });
    function Oe(t) {
      t.state === "suspended" &&
        t
          .resume()
          .then(function () {
            o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [AV:switchDevice] resumed new AudioContext",
                ])),
            );
          })
          .catch(function (e) {
            o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [AV:switchDevice] AudioContext resume failed: ",
                  "",
                ])),
              e,
            );
          });
    }
    function Be(e) {
      var t = Reflect.get(e, "closed");
      return t === !0;
    }
    var We = (function () {
      function e() {
        var e;
        ((this.audioContext = null),
          (this.mediaStreamSource = null),
          (this.audioStream = null),
          (this.audioBuffer = null),
          (this.captureParams = null),
          (this.audioCaptureInitState = Ae.Uninitialized),
          (this.audioCaptureInitResolvable = null),
          (this.implementation = null),
          (this.deviceChangeHandler = null));
        var t = o("WAWebABProps").getABPropConfigValue(
            "web_voip_audio_capture_impl",
          ),
          n = (e = Fe.cast(t)) != null ? e : Fe.DEFAULT;
        o("WAWebUA").UA.isFirefox && (n = Fe.SCRIPT_PROCESSOR);
        e: {
          if (n === Fe.SCRIPT_PROCESSOR) {
            this.implementation = new (o(
              "WAWebVoipAudioCaptureScriptProcessor",
            ).WAWebVoipAudioCaptureScriptProcessor)();
            break e;
          }
          if (n === Fe.AUDIO_WORKLET) {
            this.implementation = new (o(
              "WAWebVoipAudioCaptureWorklet",
            ).WAWebVoipAudioCaptureWorklet)();
            break e;
          }
          if (n === Fe.SHARED_BUFFER_WORKLET) {
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
          u ||
            (u = babelHelpers.taggedTemplateLiteralLoose([
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
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
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
              this.audioCaptureInitState !== Ae.Uninitialized)
            ) {
              (o("WALogger")
                .ERROR(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
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
            ((this.audioCaptureInitState = Ae.Initializing),
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
              var E;
              ((this.audioCaptureInitState = Ae.Error),
                (E = this.audioCaptureInitResolvable) == null ||
                  E.reject(r("err")("voip: [AV] No audio device selected.")));
              return;
            }
            o("WALogger").LOG(
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [AV:initCaptureDriver] selected device: ",
                  "",
                ])),
              u,
            );
            var k = this.captureParams;
            if (!k) {
              var I;
              (o("WALogger")
                .ERROR(
                  p ||
                    (p = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV:initCaptureDriver] capture parameters are null",
                    ])),
                )
                .sendLogs("voip: capture parameters are null"),
                (this.audioCaptureInitState = Ae.Error),
                (I = this.audioCaptureInitResolvable) == null ||
                  I.reject(r("err")("capture parameters are null")));
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
                    { type: "microphone", selectedDeviceId: u, params: k },
                  );
                if (x == null)
                  throw r("err")(
                    "Failed to get media stream from getUserMedia",
                  );
                var $ = x.getTracks();
                (o("WALogger").LOG(
                  _ ||
                    (_ = babelHelpers.taggedTemplateLiteralLoose([
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
                    f ||
                      (f = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:initCaptureDriver] granted mic permission and got audio stream",
                      ])),
                  ),
                  o("WAWebUA").UA.isFirefox
                    ? ((this.audioContext = new AudioContext({
                        latencyHint: "interactive",
                      })),
                      o("WALogger").LOG(
                        g ||
                          (g = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: [AV:initCaptureDriver] Firefox detected; system sample rate:\n            ",
                            "Hz, VoIP expects ",
                            "Hz",
                          ])),
                        this.audioContext.sampleRate,
                        k.sampleRate,
                      ))
                    : (this.audioContext = new AudioContext({
                        sampleRate: k.sampleRate,
                        latencyHint: "interactive",
                      })),
                  this.audioContext.state === "suspended" &&
                    o("WALogger").LOG(
                      h ||
                        (h = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [AV:initCaptureDriver] AudioContext suspended - will resume when needed",
                        ])),
                    ));
                try {
                  this.mediaStreamSource =
                    this.audioContext.createMediaStreamSource(x);
                } catch (e) {
                  throw (
                    o("WALogger").ERROR(
                      y ||
                        (y = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [AV:initCaptureDriver] Failed to create MediaStreamSource:\n            ",
                          "",
                        ])),
                      e,
                    ),
                    e
                  );
                }
                ((this.audioStream = x),
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
                              C ||
                                (C = babelHelpers.taggedTemplateLiteralLoose([
                                  "voip: [AV:AudioCaptureDeviceChangeHandler] Auto-switching to device: ",
                                  "",
                                ])),
                              e,
                            ),
                            yield t.switchDevice(e))
                          : o("WALogger").WARN(
                              b ||
                                (b = babelHelpers.taggedTemplateLiteralLoose([
                                  "voip: [AV:AudioCaptureDeviceChangeHandler] Device change detected, newDeviceId is null",
                                ])),
                            );
                      } catch (e) {
                        o("WALogger").ERROR(
                          v ||
                            (v = babelHelpers.taggedTemplateLiteralLoose([
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
                  (this.audioCaptureInitState = Ae.Ready),
                  (D = this.audioCaptureInitResolvable) == null || D.resolve());
              } else {
                var N;
                (o("WALogger")
                  .ERROR(
                    S ||
                      (S = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:initCaptureDriver] getUserMedia not supported",
                      ])),
                  )
                  .sendLogs("voip: getUserMedia not supported"),
                  (this.audioCaptureInitState = Ae.Error),
                  (N = this.audioCaptureInitResolvable) == null ||
                    N.reject(r("err")("getUserMedia not supported")));
              }
            } catch (e) {
              var M;
              (o("WALogger")
                .ERROR(
                  R ||
                    (R = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV:initCaptureDriver] error: ",
                      "",
                    ])),
                  e,
                )
                .sendLogs("voip: error in initCaptureDriver"),
                (this.audioCaptureInitState = Ae.Error),
                (M = this.audioCaptureInitResolvable) == null || M.reject(e),
                yield this.cleanup());
            }
            o("WALogger").LOG(
              L ||
                (L = babelHelpers.taggedTemplateLiteralLoose([
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
                E ||
                  (E = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:startCapture] start audio capture",
                  ])),
              ),
              this.audioCaptureInitState === Ae.Initializing)
            )
              try {
                var e;
                yield (e = this.audioCaptureInitResolvable) == null
                  ? void 0
                  : e.promise;
              } catch (e) {
                o("WALogger")
                  .ERROR(
                    k ||
                      (k = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:startCapture] error: ",
                        "",
                      ])),
                    e,
                  )
                  .sendLogs("voip: error in startCapture: ${error}");
                return;
              }
            if (this.audioCaptureInitState !== Ae.Ready) {
              o("WALogger")
                .ERROR(
                  I ||
                    (I = babelHelpers.taggedTemplateLiteralLoose([
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
                  T ||
                    (T = babelHelpers.taggedTemplateLiteralLoose([
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
                  D ||
                    (D = babelHelpers.taggedTemplateLiteralLoose([
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
                      x ||
                        (x = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [AV:startCapture] AudioContext resumed successfully",
                        ])),
                    ));
                } catch (e) {
                  o("WALogger").LOG(
                    $ ||
                      ($ = babelHelpers.taggedTemplateLiteralLoose([
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
                  P ||
                    (P = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV:startCapture] audio capture started successfully",
                    ])),
                ));
            } catch (e) {
              (o("WALogger")
                .ERROR(
                  N ||
                    (N = babelHelpers.taggedTemplateLiteralLoose([
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
                M ||
                  (M = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: stopCapture",
                  ])),
              ),
              this.audioCaptureInitState !== Ae.Ready)
            ) {
              if (
                (o("WALogger").WARN(
                  w ||
                    (w = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV:stopCapture] invalid initialization.\n        State = ",
                      "",
                    ])),
                  this.audioCaptureInitState,
                ),
                this.audioCaptureInitState === Ae.Initializing)
              ) {
                o("WALogger").LOG(
                  A ||
                    (A = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV:stopCapture] waiting for init (up to 5s)",
                    ])),
                );
                try {
                  var e,
                    t,
                    a = 5e3,
                    i = null;
                  yield (we || (we = n("Promise")))
                    .race([
                      (e =
                        (t = this.audioCaptureInitResolvable) == null
                          ? void 0
                          : t.promise) != null
                        ? e
                        : (we || (we = n("Promise"))).resolve(),
                      new we(function (e, t) {
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
                    F ||
                      (F = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:stopCapture] init wait failed or timed out, proceeding with cleanup: ",
                        "",
                      ])),
                    e,
                  );
                }
              }
              o("WALogger").LOG(
                O ||
                  (O = babelHelpers.taggedTemplateLiteralLoose([
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
              B ||
                (B = babelHelpers.taggedTemplateLiteralLoose([
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
                    W ||
                      (W = babelHelpers.taggedTemplateLiteralLoose([
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
                    q ||
                      (q = babelHelpers.taggedTemplateLiteralLoose([
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
                    U ||
                      (U = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:stopCapture] stopped audio stream",
                      ])),
                  ));
              }
              if (this.audioContext) {
                if (this.audioContext.state !== "closed") {
                  var n = this.audioContext;
                  n.close().catch(function (e) {
                    o("WALogger").LOG(
                      V ||
                        (V = babelHelpers.taggedTemplateLiteralLoose([
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
                      H ||
                        (H = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [AV:stopCapture] freed WASM audio buffer",
                        ])),
                    ));
                } catch (e) {
                  o("WALogger").WARN(
                    G ||
                      (G = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:stopCapture] error freeing WASM audio buffer: ",
                        "",
                      ])),
                    e,
                  );
                }
                this.audioBuffer = null;
              }
              ((this.audioCaptureInitState = Ae.Uninitialized),
                o("WALogger").LOG(
                  z ||
                    (z = babelHelpers.taggedTemplateLiteralLoose([
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
            function* (e, t, n) {
              var r = this;
              if (
                (o("WALogger").LOG(
                  j ||
                    (j = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV:switchDevice] switchDevice called with deviceId: ",
                      ", forceContextRecreation: ",
                      "",
                    ])),
                  e.slice(0, 8),
                  String(n != null ? n : !1),
                ),
                this.audioCaptureInitState === Ae.Initializing)
              )
                return (
                  o("WALogger").ERROR(
                    K ||
                      (K = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:switchDevice] audio capture is initializing already",
                      ])),
                  ),
                  !1
                );
              var a = this.captureParams;
              if (!a)
                return (
                  o("WALogger").ERROR(
                    Q ||
                      (Q = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:switchDevice] capture parameters are null",
                      ])),
                  ),
                  !1
                );
              var i = n === !0 || !document.hasFocus();
              if (o("WAWebUA").UA.isFirefox && t != null && i)
                return (
                  o("WALogger").LOG(
                    X ||
                      (X = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:switchDevice] Firefox context recreation needed, will recreate AudioContext in target window context",
                      ])),
                  ),
                  this.$1(e, t, t !== window)
                );
              var l = this.audioContext;
              if (l == null)
                return (
                  o("WALogger").ERROR(
                    Y ||
                      (Y = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:switchDevice] audio context is null",
                      ])),
                  ),
                  !1
                );
              var s = yield o(
                "WAWebAudioDeviceManager",
              ).switchAudioInputDeviceInternal({
                deviceId: e,
                captureParams: a,
                audioContext: l,
                targetWindow: t,
                onStreamUpdate: function (t) {
                  var e;
                  if (r.audioStream) {
                    var n = r.audioStream.getTracks();
                    (n.forEach(function (e) {
                      e.stop();
                    }),
                      o("WALogger").LOG(
                        J ||
                          (J = babelHelpers.taggedTemplateLiteralLoose([
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
                  (r.mediaStreamSource &&
                    (r.mediaStreamSource.disconnect(),
                    o("WALogger").LOG(
                      Z ||
                        (Z = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [AV:switchDevice] disconnected media stream source",
                        ])),
                    )),
                    (r.mediaStreamSource =
                      (e = l == null ? void 0 : l.createMediaStreamSource(t)) !=
                      null
                        ? e
                        : null),
                    (r.audioStream = t),
                    r.implementation != null &&
                      r.mediaStreamSource != null &&
                      r.implementation.reconnect(r.mediaStreamSource),
                    o("WALogger").LOG(
                      ee ||
                        (ee = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [AV:switchDevice] created new media stream source",
                        ])),
                    ));
                },
              });
              return (
                s
                  ? o("WALogger").LOG(
                      te ||
                        (te = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [AV:switchDevice] Successfully switched to device: ",
                          "",
                        ])),
                      e.slice(0, 8),
                    )
                  : o("WALogger").ERROR(
                      ne ||
                        (ne = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [AV:switchDevice] Failed to switch to device: ",
                          "",
                        ])),
                      e.slice(0, 8),
                    ),
                s
              );
            },
          );
          function t(t, n, r) {
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
                re ||
                  (re = babelHelpers.taggedTemplateLiteralLoose([
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
              oe ||
                (oe = babelHelpers.taggedTemplateLiteralLoose([
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
                        (yield new (we || (we = n("Promise")))(function (e) {
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
                    ae ||
                      (ae = babelHelpers.taggedTemplateLiteralLoose([
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
                  ie ||
                    (ie = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV:switchDevice] disconnected media stream source",
                    ])),
                ));
            } catch (e) {
              o("WALogger").WARN(
                le ||
                  (le = babelHelpers.taggedTemplateLiteralLoose([
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
                se ||
                  (se = babelHelpers.taggedTemplateLiteralLoose([
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
                  ue ||
                    (ue = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV:switchDevice] audio track stop failed: ",
                      "",
                    ])),
                  e,
                );
              }
            }),
              o("WALogger").LOG(
                ce ||
                  (ce = babelHelpers.taggedTemplateLiteralLoose([
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
                  de ||
                    (de = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV:switchDevice] ",
                      " AudioContext close failed: ",
                      "",
                    ])),
                  n,
                  String(e),
                );
              }),
                o("WALogger").LOG(
                  me ||
                    (me = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV:switchDevice] initiated ",
                      " AudioContext close for context recreation",
                    ])),
                  n,
                ));
            } catch (e) {
              o("WALogger").WARN(
                pe ||
                  (pe = babelHelpers.taggedTemplateLiteralLoose([
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
          return this.audioCaptureInitState === Ae.Ready
            ? !0
            : (o("WALogger").WARN(
                _e ||
                  (_e = babelHelpers.taggedTemplateLiteralLoose([
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
                  fe ||
                    (fe = babelHelpers.taggedTemplateLiteralLoose([
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
                ge ||
                  (ge = babelHelpers.taggedTemplateLiteralLoose([
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
              yield new (we || (we = n("Promise")))(function (e) {
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
                  he ||
                    (he = babelHelpers.taggedTemplateLiteralLoose([
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
                  ye ||
                    (ye = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV:switchDevice] cannot rollback context recreation; previous capture graph is missing",
                    ])),
                );
                return;
              }
              try {
                (Oe(t),
                  yield this.$4(t, n, e),
                  (this.audioContext = t),
                  (this.mediaStreamSource = n),
                  o("WALogger").LOG(
                    Ce ||
                      (Ce = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:switchDevice] rolled back to previous capture graph after context recreation failure",
                      ])),
                  ));
              } catch (e) {
                o("WALogger")
                  .ERROR(
                    be ||
                      (be = babelHelpers.taggedTemplateLiteralLoose([
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
            function* (e, t, n) {
              o("WALogger").LOG(
                ve ||
                  (ve = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:switchDevice] Starting context recreation for device: ",
                    "",
                  ])),
                e.slice(0, 8),
              );
              var r = this.captureParams;
              if (!r)
                return (
                  o("WALogger").ERROR(
                    Se ||
                      (Se = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:switchDevice] capture parameters are null",
                      ])),
                  ),
                  !1
                );
              if (Be(t))
                return (
                  o("WALogger").LOG(
                    Re ||
                      (Re = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:switchDevice] target window already closed, skipping switch",
                      ])),
                  ),
                  !1
                );
              var a = null,
                i = null,
                l = null,
                s = null,
                u = null,
                c = null,
                d = !1,
                m = !1;
              try {
                if (((a = this.$2(t)), !this.$12()))
                  return (this.$8(a, null, null, "replacement"), !1);
                if (!n && !(yield this.$14()))
                  return (this.$8(a, null, null, "replacement"), !1);
                if (((i = yield this.$3(e, t, r, a)), !i))
                  return (
                    n
                      ? o("WALogger")
                          .ERROR(
                            Le ||
                              (Le = babelHelpers.taggedTemplateLiteralLoose([
                                "voip: [AV:switchDevice] failed to acquire new audio stream",
                              ])),
                          )
                          .sendLogs(
                            "voip: switchDevice context recreation stream acquisition failed",
                          )
                      : o("WALogger")
                          .ERROR(
                            Ee ||
                              (Ee = babelHelpers.taggedTemplateLiteralLoose([
                                "voip: [AV:switchDevice] failed to reacquire main-window audio stream after releasing popout capture",
                              ])),
                          )
                          .sendLogs(
                            "voip: switchDevice main reacquisition failed after popout release",
                          ),
                    this.$8(a, null, null, "replacement"),
                    !1
                  );
                if (
                  (o("WALogger").LOG(
                    ke ||
                      (ke = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:switchDevice] acquired new audio stream before stopping current capture",
                      ])),
                  ),
                  !this.$11("stream acquisition"))
                )
                  return (this.$8(a, null, i, "replacement"), !1);
                if (
                  ((l = a.createMediaStreamSource(i)),
                  (s = this.audioContext),
                  (u = this.mediaStreamSource),
                  (c = this.audioStream),
                  n && (yield this.$13(), (d = !0)),
                  !this.$11("capture stop"))
                )
                  return (this.$8(a, l, i, "replacement"), !1);
                if (
                  (Oe(a),
                  yield this.$4(a, l, r),
                  o("WALogger").LOG(
                    Ie ||
                      (Ie = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:switchDevice] restarted audio capture implementation",
                      ])),
                  ),
                  !this.$11("replacement capture start"))
                )
                  return (
                    yield this.$15(),
                    this.$8(a, l, i, "replacement"),
                    !1
                  );
                if (
                  ((this.audioContext = a),
                  (this.mediaStreamSource = l),
                  (this.audioStream = i),
                  (m = !0),
                  o("WALogger").LOG(
                    Te ||
                      (Te = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:switchDevice] created new media stream source from new stream",
                      ])),
                  ),
                  n)
                )
                  try {
                    this.$8(s, u, c, "old");
                  } catch (e) {
                    o("WALogger").WARN(
                      De ||
                        (De = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [AV:switchDevice] old capture graph cleanup failed after replacement commit: ",
                          "",
                        ])),
                      e,
                    );
                  }
                try {
                  (o("WAWebUserPrefsVoip").setSelectedAudioInputDevice(e),
                    o("WAWebAudioDeviceManager").AudioDeviceEvents.trigger(
                      "deviceSelectionChanged",
                      [e],
                    ));
                } catch (e) {
                  o("WALogger").WARN(
                    xe ||
                      (xe = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:switchDevice] device selection update failed after context recreation: ",
                        "",
                      ])),
                    e,
                  );
                }
                return (
                  o("WALogger").LOG(
                    $e ||
                      ($e = babelHelpers.taggedTemplateLiteralLoose([
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
                      Pe ||
                        (Pe = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [AV:switchDevice] Context recreation failed: ",
                          "",
                        ])),
                      e,
                    )
                    .sendLogs("voip: switchDevice context recreation failed"),
                  m)
                )
                  try {
                    yield this.cleanup();
                  } catch (e) {
                    o("WALogger")
                      .ERROR(
                        Ne ||
                          (Ne = babelHelpers.taggedTemplateLiteralLoose([
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
                  (this.$8(a, l, i, "replacement"),
                    d && (yield this.$16(r, s, u)));
                return !1;
              }
            },
          );
          function t(t, n, r) {
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
                Me ||
                  (Me = babelHelpers.taggedTemplateLiteralLoose([
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
    l.WAWebVoipAudioCaptureBase = We;
  },
  98,
);
