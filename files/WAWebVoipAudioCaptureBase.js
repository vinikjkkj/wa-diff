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
    "WAWebNoop",
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
      Ce = n("$InternalEnum").Mirrored([
        "Uninitialized",
        "Initializing",
        "Ready",
        "Error",
      ]),
      be = n("$InternalEnum")({
        DEFAULT: 0,
        SCRIPT_PROCESSOR: 1,
        AUDIO_WORKLET: 2,
        SHARED_BUFFER_WORKLET: 3,
      });
    function ve(t) {
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
    var Se = (function () {
      function e() {
        var e;
        ((this.audioContext = null),
          (this.mediaStreamSource = null),
          (this.audioStream = null),
          (this.audioBuffer = null),
          (this.captureParams = null),
          (this.audioCaptureInitState = Ce.Uninitialized),
          (this.audioCaptureInitResolvable = null),
          (this.implementation = null),
          (this.deviceChangeHandler = null));
        var t = o("WAWebABProps").getABPropConfigValue(
            "web_voip_audio_capture_impl",
          ),
          n = (e = be.cast(t)) != null ? e : be.DEFAULT;
        e: {
          if (n === be.SCRIPT_PROCESSOR) {
            this.implementation = new (o(
              "WAWebVoipAudioCaptureScriptProcessor",
            ).WAWebVoipAudioCaptureScriptProcessor)();
            break e;
          }
          if (n === be.AUDIO_WORKLET) {
            this.implementation = new (o(
              "WAWebVoipAudioCaptureWorklet",
            ).WAWebVoipAudioCaptureWorklet)();
            break e;
          }
          if (n === be.SHARED_BUFFER_WORKLET) {
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
          t != null ? t : "default",
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
              this.audioCaptureInitState !== Ce.Uninitialized)
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
            ((this.audioCaptureInitState = Ce.Initializing),
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
              ((this.audioCaptureInitState = Ce.Error),
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
                (this.audioCaptureInitState = Ce.Error),
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
                  (this.audioCaptureInitState = Ce.Ready),
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
                  (this.audioCaptureInitState = Ce.Error),
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
                (this.audioCaptureInitState = Ce.Error),
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
              this.audioCaptureInitState === Ce.Initializing)
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
            if (this.audioCaptureInitState !== Ce.Ready) {
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
              this.audioCaptureInitState !== Ce.Ready)
            ) {
              o("WALogger").WARN(
                w ||
                  (w = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:stopCapture] invalid initialization.\n        State = ",
                    ". Waiting for init...",
                  ])),
                this.audioCaptureInitState,
              );
              try {
                var e;
                yield (e = this.audioCaptureInitResolvable) == null
                  ? void 0
                  : e.promise;
              } catch (e) {
                o("WALogger").WARN(
                  A ||
                    (A = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV:stopCapture] init failed, proceeding with cleanup: ",
                      "",
                    ])),
                  e,
                );
              }
              o("WALogger").LOG(
                F ||
                  (F = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:stopCapture] audio capture initialized, going to clean up now",
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
              O ||
                (O = babelHelpers.taggedTemplateLiteralLoose([
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
                    B ||
                      (B = babelHelpers.taggedTemplateLiteralLoose([
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
                    W ||
                      (W = babelHelpers.taggedTemplateLiteralLoose([
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
                    q ||
                      (q = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:stopCapture] stopped audio stream",
                      ])),
                  ));
              }
              this.audioContext &&
                (this.audioContext.state !== "closed" &&
                  (yield this.audioContext.close(),
                  o("WALogger").LOG(
                    U ||
                      (U = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: cleanup closed audio context",
                      ])),
                  )),
                (this.audioContext = null));
            } finally {
              if (this.audioBuffer != null) {
                var n = this.audioBuffer;
                try {
                  (yield o("WAWebAudioUtility").freeWasmBuffer(n),
                    o("WALogger").LOG(
                      V ||
                        (V = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [AV:stopCapture] freed WASM audio buffer",
                        ])),
                    ));
                } catch (e) {
                  o("WALogger").WARN(
                    H ||
                      (H = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:stopCapture] error freeing WASM audio buffer: ",
                        "",
                      ])),
                    e,
                  );
                }
                this.audioBuffer = null;
              }
              ((this.audioCaptureInitState = Ce.Uninitialized),
                o("WALogger").LOG(
                  G ||
                    (G = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: cleanup completed successfully",
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
                  z ||
                    (z = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV:switchDevice] switchDevice called with deviceId: ",
                      ", forceContextRecreation: ",
                      "",
                    ])),
                  e.slice(0, 8),
                  String(n != null ? n : !1),
                ),
                this.audioCaptureInitState === Ce.Initializing)
              )
                return (
                  o("WALogger").ERROR(
                    j ||
                      (j = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:switchDevice] audio capture is initializing already",
                      ])),
                  ),
                  !1
                );
              var a = this.captureParams,
                i = this.audioContext;
              if (!a || !i)
                return (
                  o("WALogger").ERROR(
                    K ||
                      (K = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:switchDevice] capture parameters or audio context is null",
                      ])),
                  ),
                  !1
                );
              var l = n === !0 || !document.hasFocus();
              if (o("WAWebUA").UA.isFirefox && t != null && l)
                return (
                  o("WALogger").LOG(
                    Q ||
                      (Q = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:switchDevice] Firefox context recreation needed, will recreate AudioContext in target window context",
                      ])),
                  ),
                  this.$1(e, t)
                );
              var s = yield o(
                "WAWebAudioDeviceManager",
              ).switchAudioInputDeviceInternal({
                deviceId: e,
                captureParams: a,
                audioContext: i,
                onStreamUpdate: function (t) {
                  var e;
                  if (r.audioStream) {
                    var n = r.audioStream.getTracks();
                    (n.forEach(function (e) {
                      e.stop();
                    }),
                      o("WALogger").LOG(
                        X ||
                          (X = babelHelpers.taggedTemplateLiteralLoose([
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
                      Y ||
                        (Y = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [AV:switchDevice] disconnected media stream source",
                        ])),
                    )),
                    (r.mediaStreamSource =
                      (e = i == null ? void 0 : i.createMediaStreamSource(t)) !=
                      null
                        ? e
                        : null),
                    (r.audioStream = t),
                    r.implementation != null &&
                      r.mediaStreamSource != null &&
                      r.implementation.reconnect(r.mediaStreamSource),
                    o("WALogger").LOG(
                      J ||
                        (J = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [AV:switchDevice] created new media stream source",
                        ])),
                    ));
                },
              });
              return (
                s
                  ? o("WALogger").LOG(
                      Z ||
                        (Z = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [AV:switchDevice] Successfully switched to device: ",
                          "",
                        ])),
                      e.slice(0, 8),
                    )
                  : o("WALogger").ERROR(
                      ee ||
                        (ee = babelHelpers.taggedTemplateLiteralLoose([
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
        (t.$1 = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* (e, t) {
              o("WALogger").LOG(
                te ||
                  (te = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:switchDevice] Starting context recreation for device: ",
                    "",
                  ])),
                e,
              );
              var a = this.captureParams;
              if (!a)
                return (
                  o("WALogger").ERROR(
                    ne ||
                      (ne = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:switchDevice] capture parameters are null",
                      ])),
                  ),
                  !1
                );
              if (t.closed)
                return (
                  o("WALogger").LOG(
                    re ||
                      (re = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:switchDevice] target window already closed, skipping switch",
                      ])),
                  ),
                  !1
                );
              try {
                if (
                  (this.implementation != null &&
                    (yield this.implementation.stopAudioCapture(),
                    o("WALogger").LOG(
                      oe ||
                        (oe = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [AV:switchDevice] stopped audio capture implementation",
                        ])),
                    )),
                  this.mediaStreamSource &&
                    (this.mediaStreamSource.disconnect(),
                    (this.mediaStreamSource = null),
                    o("WALogger").LOG(
                      ae ||
                        (ae = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [AV:switchDevice] disconnected media stream source",
                        ])),
                    )),
                  this.audioStream)
                ) {
                  var i = this.audioStream.getTracks();
                  (i.forEach(function (e) {
                    return e.stop();
                  }),
                    (this.audioStream = null),
                    o("WALogger").LOG(
                      ie ||
                        (ie = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [AV:switchDevice] stopped ",
                          " audio tracks",
                        ])),
                      i.length,
                    ));
                }
                if (
                  (yield new (ye || (ye = n("Promise")))(function (e) {
                    return window.setTimeout(e, 200);
                  }),
                  this.audioContext && this.audioContext.state !== "closed")
                ) {
                  var l = this.audioContext;
                  (l.close().catch(function (e) {
                    o("WALogger").LOG(
                      le ||
                        (le = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [AV:switchDevice] old AudioContext close failed (expected if popout closing): ",
                          "",
                        ])),
                      String(e),
                    );
                  }),
                    o("WALogger").LOG(
                      se ||
                        (se = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [AV:switchDevice] initiated old AudioContext close for context recreation",
                        ])),
                    ));
                }
                var s;
                if (o("WAWebUA").UA.isFirefox) {
                  var u = t.AudioContext;
                  ((s = new u({ latencyHint: "interactive" })),
                    o("WALogger").LOG(
                      ue ||
                        (ue = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [AV:switchDevice] created AudioContext in target window context, sample rate: ",
                          "Hz",
                        ])),
                      s.sampleRate,
                    ));
                } else
                  ((s = new AudioContext({ latencyHint: "interactive" })),
                    o("WALogger").LOG(
                      ce ||
                        (ce = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [AV:switchDevice] created new AudioContext with sample rate: ",
                          "Hz",
                        ])),
                      s.sampleRate,
                    ));
                for (
                  var c = null,
                    d = 3,
                    m = [0, 100, 200],
                    p = 0,
                    _ = function* (i) {
                      if (
                        ((p = i),
                        i > 0 &&
                          (yield new (ye || (ye = n("Promise")))(function (e) {
                            return window.setTimeout(e, m[i]);
                          })),
                        (c = yield o("WAWebBackendApi").frontendSendAndReceive(
                          "voipAcquireMediaStream",
                          {
                            type: "microphone",
                            selectedDeviceId: e,
                            params: babelHelpers.extends({}, a, {
                              sampleRate: s.sampleRate,
                            }),
                            targetWindow: t,
                            suppressErrorPopup: !0,
                          },
                        )),
                        c != null)
                      )
                        return 1;
                    },
                    f = 0;
                  f < d && !(yield* _(f));
                  f++
                );
                if (
                  (p > 0 &&
                    o("WALogger").LOG(
                      de ||
                        (de = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [AV:switchDevice] completed after ",
                          " retries with delays: ",
                          "ms",
                        ])),
                      p,
                      m.slice(1, p + 1),
                    ),
                  !c)
                )
                  return (
                    o("WALogger").ERROR(
                      me ||
                        (me = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [AV:switchDevice] failed to acquire new audio stream after ",
                          " attempts",
                        ])),
                      d,
                    ),
                    s.state !== "closed" && s.close().catch(r("WAWebNoop")),
                    !1
                  );
                this.audioContext = s;
                var g = s.createMediaStreamSource(c);
                return (
                  (this.mediaStreamSource = g),
                  (this.audioStream = c),
                  o("WALogger").LOG(
                    pe ||
                      (pe = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:switchDevice] created new media stream source from new stream",
                      ])),
                  ),
                  ve(s),
                  this.implementation != null &&
                    this.audioBuffer != null &&
                    (yield this.implementation.startAudioCapture({
                      audioContext: s,
                      mediaStreamSource: g,
                      sampleRate: a.sampleRate,
                      channels: a.channels,
                      framesPerChunk: a.framesPerChunk,
                      audioBuffer: this.audioBuffer,
                    }),
                    o("WALogger").LOG(
                      _e ||
                        (_e = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [AV:switchDevice] restarted audio capture implementation",
                        ])),
                    )),
                  o("WAWebUserPrefsVoip").setSelectedAudioInputDevice(e),
                  o("WAWebAudioDeviceManager").AudioDeviceEvents.trigger(
                    "deviceSelectionChanged",
                    [e],
                  ),
                  o("WALogger").LOG(
                    fe ||
                      (fe = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:switchDevice] Successfully switched device with context recreation: ",
                        "",
                      ])),
                    e,
                  ),
                  !0
                );
              } catch (e) {
                return (
                  o("WALogger")
                    .ERROR(
                      ge ||
                        (ge = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [AV:switchDevice] Context recreation failed: ",
                          "",
                        ])),
                      e,
                    )
                    .sendLogs("voip: switchDevice context recreation failed"),
                  this.audioContext &&
                    this.audioContext.state !== "closed" &&
                    (this.audioContext.close().catch(r("WAWebNoop")),
                    (this.audioContext = null)),
                  !1
                );
              }
            },
          );
          function t(t, n) {
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
                he ||
                  (he = babelHelpers.taggedTemplateLiteralLoose([
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
    l.WAWebVoipAudioCaptureBase = Se;
  },
  98,
);
