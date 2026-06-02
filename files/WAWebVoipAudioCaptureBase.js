__d(
  "WAWebVoipAudioCaptureBase",
  [
    "$InternalEnum",
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
      we = n("$InternalEnum").Mirrored([
        "Uninitialized",
        "Initializing",
        "Ready",
        "Error",
      ]),
      Ae = n("$InternalEnum")({
        DEFAULT: 0,
        SCRIPT_PROCESSOR: 1,
        AUDIO_WORKLET: 2,
        SHARED_BUFFER_WORKLET: 3,
      });
    function Fe(t) {
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
    function Oe(e) {
      var t = Reflect.get(e, "closed");
      return t === !0;
    }
    var Be = (function () {
      function e() {
        var e;
        ((this.audioContext = null),
          (this.mediaStreamSource = null),
          (this.audioStream = null),
          (this.audioBuffer = null),
          (this.captureParams = null),
          (this.audioCaptureInitState = we.Uninitialized),
          (this.audioCaptureInitResolvable = null),
          (this.implementation = null),
          (this.deviceChangeHandler = null));
        var t = o("WAWebABProps").getABPropConfigValue(
            "web_voip_audio_capture_impl",
          ),
          n = (e = Ae.cast(t)) != null ? e : Ae.DEFAULT;
        o("WAWebUA").UA.isFirefox && (n = Ae.SCRIPT_PROCESSOR);
        e: {
          if (n === Ae.SCRIPT_PROCESSOR) {
            this.implementation = new (o(
              "WAWebVoipAudioCaptureScriptProcessor",
            ).WAWebVoipAudioCaptureScriptProcessor)();
            break e;
          }
          if (n === Ae.AUDIO_WORKLET) {
            this.implementation = new (o(
              "WAWebVoipAudioCaptureWorklet",
            ).WAWebVoipAudioCaptureWorklet)();
            break e;
          }
          if (n === Ae.SHARED_BUFFER_WORKLET) {
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
        (t.initCaptureDriver = async function (t) {
          var e = this,
            n = t.bits_per_sample,
            a = t.channels,
            i = t.frames_per_chunk,
            l = t.sample_rate;
          if (
            (o("WALogger").LOG(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  `voip: [AV:initCaptureDriver] params:
      sampleRate=`,
                  `,
      channels=`,
                  `,
      bitsPerSample=`,
                  `,
      framesPerChunk=`,
                  "",
                ])),
              l,
              a,
              n,
              i,
            ),
            this.audioCaptureInitState !== we.Uninitialized)
          ) {
            (o("WALogger")
              .ERROR(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    `voip: [AV:initCaptureDriver] invalid initialization.
        State = `,
                    "",
                  ])),
                this.audioCaptureInitState,
              )
              .sendLogs(
                "voip: invalid initialization state = ${this.audioCaptureInitState}",
              ),
              await this.cleanup());
            return;
          }
          ((this.audioCaptureInitState = we.Initializing),
            (this.audioCaptureInitResolvable = new (o(
              "WAResolvable",
            ).Resolvable)()),
            (this.captureParams = {
              sampleRate: l,
              channels: a,
              bitsPerSample: n,
              framesPerChunk: i,
            }));
          var s = await o("WAWebAudioDeviceManager").selectAudioDevice();
          if (s == null) {
            var u;
            ((this.audioCaptureInitState = we.Error),
              (u = this.audioCaptureInitResolvable) == null ||
                u.reject(r("err")("voip: [AV] No audio device selected.")));
            return;
          }
          o("WALogger").LOG(
            m ||
              (m = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [AV:initCaptureDriver] selected device: ",
                "",
              ])),
            s,
          );
          var E = this.captureParams;
          if (!E) {
            var k;
            (o("WALogger")
              .ERROR(
                p ||
                  (p = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:initCaptureDriver] capture parameters are null",
                  ])),
              )
              .sendLogs("voip: capture parameters are null"),
              (this.audioCaptureInitState = we.Error),
              (k = this.audioCaptureInitResolvable) == null ||
                k.reject(r("err")("capture parameters are null")));
            return;
          }
          try {
            if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
              var I,
                T,
                D = await o("WAWebBackendApi").frontendSendAndReceive(
                  "voipAcquireMediaStream",
                  { type: "microphone", selectedDeviceId: s, params: E },
                );
              if (D == null)
                throw r("err")("Failed to get media stream from getUserMedia");
              var x = D.getTracks();
              (o("WALogger").LOG(
                _ ||
                  (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV] Initializing audio capture with ",
                    " devices. Kinds: ",
                    ", Labels: ",
                    ", IDs: ",
                    "",
                  ])),
                x.length,
                x.slice(0, 3).map(function (e) {
                  return e.kind;
                }),
                x.slice(0, 3).map(function (e) {
                  return e.label;
                }),
                x.slice(0, 3).map(function (e) {
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
                          `voip: [AV:initCaptureDriver] Firefox detected; system sample rate:
            `,
                          "Hz, VoIP expects ",
                          "Hz",
                        ])),
                      this.audioContext.sampleRate,
                      E.sampleRate,
                    ))
                  : (this.audioContext = new AudioContext({
                      sampleRate: E.sampleRate,
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
                  this.audioContext.createMediaStreamSource(D);
              } catch (e) {
                throw (
                  o("WALogger").ERROR(
                    y ||
                      (y = babelHelpers.taggedTemplateLiteralLoose([
                        `voip: [AV:initCaptureDriver] Failed to create MediaStreamSource:
            `,
                        "",
                      ])),
                    e,
                  ),
                  e
                );
              }
              ((this.audioStream = D),
                o("WAWebVoipPerfOptimizations").isPerfOptimizationEnabled(
                  o("WAWebVoipPerfOptimizations").PerfOptimizationFlag
                    .WORKLET_PRELOAD,
                ) &&
                  ((I = this.implementation) == null
                    ? void 0
                    : I.preloadWorkletModule) != null &&
                  this.audioContext != null &&
                  this.implementation.preloadWorkletModule(this.audioContext));
              var $ = async function () {
                try {
                  var t = await o("WAWebAudioDeviceManager").selectAudioDevice(
                    void 0,
                    void 0,
                    !0,
                  );
                  t != null
                    ? (o("WALogger").LOG(
                        C ||
                          (C = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: [AV:AudioCaptureDeviceChangeHandler] Auto-switching to device: ",
                            "",
                          ])),
                        t,
                      ),
                      await e.switchDevice(t, void 0, void 0, !0))
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
              };
              ((this.deviceChangeHandler = r("WAWebDebounce")($, 500)),
                navigator.mediaDevices &&
                  navigator.mediaDevices.addEventListener(
                    "devicechange",
                    this.deviceChangeHandler,
                  ),
                (this.audioCaptureInitState = we.Ready),
                (T = this.audioCaptureInitResolvable) == null || T.resolve());
            } else {
              var P;
              (o("WALogger")
                .ERROR(
                  S ||
                    (S = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV:initCaptureDriver] getUserMedia not supported",
                    ])),
                )
                .sendLogs("voip: getUserMedia not supported"),
                (this.audioCaptureInitState = we.Error),
                (P = this.audioCaptureInitResolvable) == null ||
                  P.reject(r("err")("getUserMedia not supported")));
            }
          } catch (e) {
            var N;
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
              (this.audioCaptureInitState = we.Error),
              (N = this.audioCaptureInitResolvable) == null || N.reject(e),
              await this.cleanup());
          }
          o("WALogger").LOG(
            L ||
              (L = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [AV:initCaptureDriver] completed successfully",
              ])),
          );
        }),
        (t.startCapture = async function () {
          if (
            (o("WALogger").LOG(
              E ||
                (E = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [AV:startCapture] start audio capture",
                ])),
            ),
            this.audioCaptureInitState === we.Initializing)
          )
            try {
              var e;
              await ((e = this.audioCaptureInitResolvable) == null
                ? void 0
                : e.promise);
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
          if (this.audioCaptureInitState !== we.Ready) {
            o("WALogger")
              .ERROR(
                I ||
                  (I = babelHelpers.taggedTemplateLiteralLoose([
                    `voip: [AV:startCapture] invalid initialization.
        State = `,
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
                (await n.resume(),
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
              await o("WAWebAudioUtility").mallocWasmBuffer(a)),
              this.implementation != null &&
                (await this.implementation.startAudioCapture({
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
              await this.cleanup());
          }
        }),
        (t.stopCapture = async function () {
          if (
            (o("WALogger").LOG(
              M ||
                (M = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: stopCapture",
                ])),
            ),
            this.audioCaptureInitState !== we.Ready)
          ) {
            if (
              (o("WALogger").WARN(
                w ||
                  (w = babelHelpers.taggedTemplateLiteralLoose([
                    `voip: [AV:stopCapture] invalid initialization.
        State = `,
                    "",
                  ])),
                this.audioCaptureInitState,
              ),
              this.audioCaptureInitState === we.Initializing)
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
                  n = 5e3,
                  a = null;
                await Promise.race([
                  (e =
                    (t = this.audioCaptureInitResolvable) == null
                      ? void 0
                      : t.promise) != null
                    ? e
                    : Promise.resolve(),
                  new Promise(function (e, t) {
                    a = window.setTimeout(function () {
                      t(
                        r("err")(
                          "voip: [AV:stopCapture] timed out waiting for init",
                        ),
                      );
                    }, n);
                  }),
                ]).finally(function () {
                  a != null && window.clearTimeout(a);
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
        }),
        (t.cleanup = async function () {
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
                e.removeEventListener("devicechange", this.deviceChangeHandler),
                (this.deviceChangeHandler = null));
            }
            if (
              (this.implementation != null &&
                (await this.implementation.stopAudioCapture()),
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
                (await o("WAWebAudioUtility").freeWasmBuffer(r),
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
            ((this.audioCaptureInitState = we.Uninitialized),
              o("WALogger").LOG(
                z ||
                  (z = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: cleanup finalized",
                  ])),
              ));
          }
        }),
        (t.switchDevice = async function (t, n, r, a) {
          var e = this;
          if (
            (o("WALogger").LOG(
              j ||
                (j = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [AV:switchDevice] switchDevice called with deviceId: ",
                  ", forceContextRecreation: ",
                  "",
                ])),
              t.slice(0, 8),
              String(r != null ? r : !1),
            ),
            this.audioCaptureInitState === we.Initializing)
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
          var i = this.captureParams;
          if (!i)
            return (
              o("WALogger").ERROR(
                Q ||
                  (Q = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:switchDevice] capture parameters are null",
                  ])),
              ),
              !1
            );
          var l = r === !0 || !document.hasFocus();
          if (o("WAWebUA").UA.isFirefox && n != null && l)
            return (
              o("WALogger").LOG(
                X ||
                  (X = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:switchDevice] Firefox context recreation needed, will recreate AudioContext in target window context",
                  ])),
              ),
              this.$1(t, n, n !== window, a)
            );
          var s = this.audioContext;
          if (s == null)
            return (
              o("WALogger").ERROR(
                Y ||
                  (Y = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:switchDevice] audio context is null",
                  ])),
              ),
              !1
            );
          var u = await o(
            "WAWebAudioDeviceManager",
          ).switchAudioInputDeviceInternal({
            deviceId: t,
            captureParams: i,
            audioContext: s,
            targetWindow: n,
            isAutoSwitch: a,
            onStreamUpdate: function (n) {
              var t;
              if (e.audioStream) {
                var r = e.audioStream.getTracks();
                (r.forEach(function (e) {
                  e.stop();
                }),
                  o("WALogger").LOG(
                    J ||
                      (J = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:switchDevice] stopped ",
                        " tracks. Kinds: ",
                        "",
                      ])),
                    r.length,
                    r.slice(0, 3).map(function (e) {
                      return e.kind;
                    }),
                  ));
              }
              (e.mediaStreamSource &&
                (e.mediaStreamSource.disconnect(),
                o("WALogger").LOG(
                  Z ||
                    (Z = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV:switchDevice] disconnected media stream source",
                    ])),
                )),
                (e.mediaStreamSource =
                  (t = s == null ? void 0 : s.createMediaStreamSource(n)) !=
                  null
                    ? t
                    : null),
                (e.audioStream = n),
                e.implementation != null &&
                  e.mediaStreamSource != null &&
                  e.implementation.reconnect(e.mediaStreamSource),
                o("WALogger").LOG(
                  ee ||
                    (ee = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV:switchDevice] created new media stream source",
                    ])),
                ));
            },
          });
          return (
            u
              ? o("WALogger").LOG(
                  te ||
                    (te = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV:switchDevice] Successfully switched to device: ",
                      "",
                    ])),
                  t.slice(0, 8),
                )
              : o("WALogger").ERROR(
                  ne ||
                    (ne = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV:switchDevice] Failed to switch to device: ",
                      "",
                    ])),
                  t.slice(0, 8),
                ),
            u
          );
        }),
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
        (t.$3 = async function (t, n, r, a) {
          for (
            var e = 3,
              i = [0, 100, 200],
              l = 0,
              s = null,
              u = async function (u) {
                if (
                  ((l = u),
                  u > 0 &&
                    (await new Promise(function (e) {
                      return window.setTimeout(e, i[u]);
                    })),
                  (s = await o("WAWebBackendApi").frontendSendAndReceive(
                    "voipAcquireMediaStream",
                    {
                      type: "microphone",
                      selectedDeviceId: t,
                      params: babelHelpers.extends({}, r, {
                        sampleRate: a.sampleRate,
                      }),
                      targetWindow: n,
                      suppressErrorPopup: !0,
                    },
                  )),
                  s != null)
                )
                  return 1;
              },
              c = 0;
            c < e && !(await u(c));
            c++
          );
          return (
            l > 0 &&
              o("WALogger").LOG(
                ae ||
                  (ae = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:switchDevice] completed after ",
                    " retries with delays: ",
                    "ms",
                  ])),
                l,
                i.slice(1, l + 1),
              ),
            s
          );
        }),
        (t.$4 = async function (t, n, o) {
          var e = this.implementation,
            a = this.audioBuffer;
          if (e == null || a == null)
            throw r("err")(
              "voip: [AV:switchDevice] missing capture implementation or audio buffer",
            );
          await e.startAudioCapture({
            audioContext: t,
            mediaStreamSource: n,
            sampleRate: o.sampleRate,
            channels: o.channels,
            framesPerChunk: o.framesPerChunk,
            audioBuffer: a,
          });
        }),
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
          return this.audioCaptureInitState === we.Ready
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
        (t.$13 = async function () {
          var e = this.implementation;
          e != null &&
            (await e.stopAudioCapture(),
            o("WALogger").LOG(
              ge ||
                (ge = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [AV:switchDevice] stopped audio capture implementation",
                ])),
            ));
        }),
        (t.$14 = async function () {
          var e = this.$9();
          return (
            await this.$13(),
            this.$8(e.audioContext, e.mediaStreamSource, e.audioStream, "old"),
            this.$10(e),
            await new Promise(function (e) {
              return window.setTimeout(e, 200);
            }),
            this.$11("current capture release")
          );
        }),
        (t.$15 = async function () {
          var e = this.implementation;
          if (e != null)
            try {
              await e.stopAudioCapture();
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
        }),
        (t.$16 = async function (t, n, r) {
          if (n == null || r == null) {
            o("WALogger").WARN(
              ye ||
                (ye = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [AV:switchDevice] cannot rollback context recreation; previous capture graph is missing",
                ])),
            );
            return;
          }
          try {
            (Fe(n),
              await this.$4(n, r, t),
              (this.audioContext = n),
              (this.mediaStreamSource = r),
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
        }),
        (t.$1 = async function (t, n, r, a) {
          o("WALogger").LOG(
            ve ||
              (ve = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [AV:switchDevice] Starting context recreation for device: ",
                "",
              ])),
            t.slice(0, 8),
          );
          var e = this.captureParams;
          if (!e)
            return (
              o("WALogger").ERROR(
                Se ||
                  (Se = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:switchDevice] capture parameters are null",
                  ])),
              ),
              !1
            );
          if (Oe(n))
            return (
              o("WALogger").LOG(
                Re ||
                  (Re = babelHelpers.taggedTemplateLiteralLoose([
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
            if (((i = this.$2(n)), !this.$12()))
              return (this.$8(i, null, null, "replacement"), !1);
            if (!r && !(await this.$14()))
              return (this.$8(i, null, null, "replacement"), !1);
            if (((l = await this.$3(t, n, e, i)), !l))
              return (
                r
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
                this.$8(i, null, null, "replacement"),
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
              return (this.$8(i, null, l, "replacement"), !1);
            if (
              ((s = i.createMediaStreamSource(l)),
              (u = this.audioContext),
              (c = this.mediaStreamSource),
              (d = this.audioStream),
              r && (await this.$13(), (m = !0)),
              !this.$11("capture stop"))
            )
              return (this.$8(i, s, l, "replacement"), !1);
            if (
              (Fe(i),
              await this.$4(i, s, e),
              o("WALogger").LOG(
                Ie ||
                  (Ie = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:switchDevice] restarted audio capture implementation",
                  ])),
              ),
              !this.$11("replacement capture start"))
            )
              return (await this.$15(), this.$8(i, s, l, "replacement"), !1);
            if (
              ((this.audioContext = i),
              (this.mediaStreamSource = s),
              (this.audioStream = l),
              (p = !0),
              o("WALogger").LOG(
                Te ||
                  (Te = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:switchDevice] created new media stream source from new stream",
                  ])),
              ),
              r)
            )
              try {
                this.$8(u, c, d, "old");
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
              (a !== !0 &&
                o("WAWebUserPrefsVoip").setSelectedAudioInputDevice(t),
                o("WAWebAudioDeviceManager").AudioDeviceEvents.trigger(
                  "deviceSelectionChanged",
                  [t],
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
                t.slice(0, 8),
              ),
              !0
            );
          } catch (t) {
            if (
              (o("WALogger")
                .ERROR(
                  Pe ||
                    (Pe = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV:switchDevice] Context recreation failed: ",
                      "",
                    ])),
                  t,
                )
                .sendLogs("voip: switchDevice context recreation failed"),
              p)
            )
              try {
                await this.cleanup();
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
              (this.$8(i, s, l, "replacement"), m && (await this.$16(e, u, c)));
            return !1;
          }
        }),
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
    l.WAWebVoipAudioCaptureBase = Be;
  },
  98,
);
