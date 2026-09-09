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
    "WAWebVoipGatingUtils",
    "WAWebVoipMicrophoneInputState",
    "WAWebVoipMicrophoneTrackObserver",
    "WAWebVoipPerfOptimizations",
    "asyncToGeneratorRuntime",
    "err",
    "getErrorSafe",
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
      Ue,
      Ve,
      He,
      Ge,
      ze,
      je,
      Ke,
      Qe,
      Xe,
      Ye,
      Je,
      Ze,
      et,
      tt,
      nt = new Set(),
      rt = 2e3,
      ot = null,
      at = 3;
    function it() {
      ot != null && (window.clearTimeout(ot), (ot = null));
      var t = Array.from(nt);
      t.length !== 0 &&
        (ot = window.setTimeout(function () {
          ot = null;
          var n = 0,
            r = 0,
            a = 0;
          for (var i of t) {
            var l = lt(i);
            ((n += l.recoveredTrackCount),
              (r += l.failedTrackCount),
              (a += l.recoveredStreamCount));
          }
          (n > 0 &&
            o("WALogger")
              .WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:micReconciliation] callEndBackstop: stopped ",
                    " leaked mic track(s) in ",
                    " stream(s)",
                  ])),
                n,
                a,
              )
              .sendLogs("voip-mic-callend-backstop"),
            r > 0 &&
              o("WALogger")
                .WARN(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV:micReconciliation] callEndBackstop: ",
                      " track(s) still live after stop",
                    ])),
                  r,
                )
                .sendLogs("voip-mic-callend-backstop-stuck"));
        }, rt));
    }
    function lt(e) {
      var t = 0,
        n = 0,
        a = 0;
      try {
        var i = e.getTracks().filter(function (e) {
          return e.readyState === "live";
        });
        for (var l of i) {
          try {
            l.stop();
          } catch (e) {
            o("WALogger")
              .WARN(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:micReconciliation] track.stop failed",
                  ])),
              )
              .catching(r("getErrorSafe")(e))
              .sendLogs("voip-mic-callend-backstop-error");
          }
          l.readyState !== "live" ? t++ : n++;
        }
        a = t > 0 ? 1 : 0;
      } catch (e) {
        o("WALogger")
          .WARN(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [AV:micReconciliation] failed to read tracked microphone stream",
              ])),
          )
          .catching(r("getErrorSafe")(e))
          .sendLogs("voip-mic-callend-backstop-error");
      } finally {
        nt.delete(e);
      }
      return {
        recoveredTrackCount: t,
        failedTrackCount: n,
        recoveredStreamCount: a,
      };
    }
    var st = n("$InternalEnum").Mirrored([
        "Uninitialized",
        "Initializing",
        "Ready",
        "Error",
      ]),
      ut = n("$InternalEnum")({
        DEFAULT: 0,
        SCRIPT_PROCESSOR: 1,
        AUDIO_WORKLET: 2,
        SHARED_BUFFER_WORKLET: 3,
      });
    function ct(e) {
      e.state === "suspended" &&
        e
          .resume()
          .then(function () {
            o("WALogger").LOG(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [AV:switchDevice] resumed new AudioContext",
                ])),
            );
          })
          .catch(function (e) {
            o("WALogger").LOG(
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [AV:switchDevice] AudioContext resume failed: ",
                  "",
                ])),
              e,
            );
          });
    }
    function dt(e) {
      var t = Reflect.get(e, "closed");
      return t === !0;
    }
    function mt(e) {
      return (
        (e == null
          ? void 0
          : e.getAudioTracks().some(function (e) {
              return e.readyState === "live";
            })) === !0
      );
    }
    function pt(e) {
      try {
        return mt(e);
      } catch (e) {
        return (
          o("WALogger")
            .WARN(
              p ||
                (p = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [AV:micReconciliation] failed to read microphone track state",
                ])),
            )
            .catching(r("getErrorSafe")(e))
            .sendLogs("voip-mic-cleanup-track-state-read-fail"),
          !0
        );
      }
    }
    function _t(e, t) {
      return e
        ? "capture-handoff"
        : t
          ? "automatic-device-switch"
          : "manual-device-switch";
    }
    var ft = (function () {
      function e() {
        var e;
        ((this.audioContext = null),
          (this.mediaStreamSource = null),
          (this.audioStream = null),
          (this.audioBuffer = null),
          (this.captureParams = null),
          (this.audioCaptureInitState = st.Uninitialized),
          (this.audioCaptureInitResolvable = null),
          (this.implementation = null),
          (this.deviceChangeHandler = null),
          (this.cancelDeviceChangeHandler = null),
          (this.automaticDeviceChangePromise = null),
          (this.pendingAutomaticDeviceChange = null),
          (this.micRecoveryAttempts = 0),
          (this.microphoneTrackObserver = null),
          (this.captureGeneration = 0),
          (this.inputMonitoringEnabled = o(
            "WAWebVoipGatingUtils",
          ).isMicrophoneSignalMonitoringEnabled()));
        var t = o("WAWebABProps").getABPropConfigValue(
            "web_voip_audio_capture_impl",
          ),
          n = (e = ut.cast(t)) != null ? e : ut.DEFAULT;
        o("WAWebUA").UA.isFirefox && (n = ut.SCRIPT_PROCESSOR);
        e: {
          if (n === ut.SCRIPT_PROCESSOR) {
            this.implementation = new (o(
              "WAWebVoipAudioCaptureScriptProcessor",
            ).WAWebVoipAudioCaptureScriptProcessor)();
            break e;
          }
          if (n === ut.AUDIO_WORKLET) {
            this.implementation = new (o(
              "WAWebVoipAudioCaptureWorklet",
            ).WAWebVoipAudioCaptureWorklet)();
            break e;
          }
          if (n === ut.SHARED_BUFFER_WORKLET) {
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
          _ ||
            (_ = babelHelpers.taggedTemplateLiteralLoose([
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
        (t.$1 = function () {
          var e = this;
          return this.inputMonitoringEnabled
            ? function (t) {
                (o(
                  "WAWebVoipMicrophoneInputState",
                ).dispatchMicrophoneInputEvent({ type: "level", rmsDbfs: t }),
                  o(
                    "WAWebVoipMicrophoneInputState",
                  ).getMicrophoneInputHasCredibleSignal() &&
                    (e.micRecoveryAttempts = 0));
              }
            : null;
        }),
        (t.$2 = function () {
          return (
            this.audioCaptureInitState === st.Ready ||
            this.audioCaptureInitState === st.Initializing
          );
        }),
        (t.$3 = function () {
          var e = this.microphoneTrackObserver;
          this.microphoneTrackObserver = null;
          try {
            e == null || e.stop();
          } catch (e) {
            o("WALogger")
              .WARN(
                f ||
                  (f = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [MicInput] stopping the track observer failed",
                  ])),
              )
              .catching(r("getErrorSafe")(e));
          }
        }),
        (t.$4 = function () {
          !this.inputMonitoringEnabled ||
            !this.$2() ||
            (this.$3(),
            o("WAWebVoipMicrophoneInputState").dispatchMicrophoneInputEvent({
              type: "input-unavailable",
              reason: "capture-failed",
            }));
        }),
        (t.$5 = function (t, n, a) {
          var e = this;
          if (
            ((a === "initial" || a === "manual-device-switch") &&
              (this.micRecoveryAttempts = 0),
            !(!this.inputMonitoringEnabled || !this.$2()))
          ) {
            (this.$3(),
              o("WAWebVoipMicrophoneInputState").dispatchMicrophoneInputEvent({
                type: "capture-started",
                reason: a,
              }));
            try {
              var i,
                l,
                s,
                u = (i = n.getAudioTracks()[0]) != null ? i : null,
                c = new (o(
                  "WAWebVoipMicrophoneTrackObserver",
                ).WAWebVoipMicrophoneTrackObserver)({
                  audioContext: t,
                  audioTrack: u,
                  onRecovered: function () {
                    o(
                      "WAWebVoipMicrophoneInputState",
                    ).dispatchMicrophoneInputEvent({ type: "input-recovered" });
                  },
                  onUnavailable: function (n) {
                    (o("WALogger").WARN(
                      g ||
                        (g = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [MicInput] microphone unavailable: ",
                          "",
                        ])),
                      n,
                    ),
                      o(
                        "WAWebVoipMicrophoneInputState",
                      ).dispatchMicrophoneInputEvent({
                        type: "input-unavailable",
                        reason: n,
                      }),
                      n === "track-ended" &&
                        e.deviceChangeHandler != null &&
                        e.$6());
                  },
                });
              ((this.microphoneTrackObserver = c),
                c.start(),
                o("WALogger").LOG(
                  h ||
                    (h = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [MicInput] monitoring started reason=",
                      " contextState=",
                      " trackState=",
                      " trackMuted=",
                      "",
                    ])),
                  a,
                  t.state,
                  (l = u == null ? void 0 : u.readyState) != null
                    ? l
                    : "missing",
                  String((s = u == null ? void 0 : u.muted) != null ? s : !1),
                ));
            } catch (e) {
              o("WALogger")
                .WARN(
                  y ||
                    (y = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [MicInput] could not observe the microphone track",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("voip-mic-input-monitoring-start-failed");
            }
          }
        }),
        (t.$7 = function (t) {
          (this.$3(),
            t && (this.micRecoveryAttempts = 0),
            this.inputMonitoringEnabled &&
              (t
                ? o(
                    "WAWebVoipMicrophoneInputState",
                  ).dispatchMicrophoneInputEvent({ type: "capture-stopped" })
                : o(
                    "WAWebVoipMicrophoneInputState",
                  ).dispatchMicrophoneInputEvent({
                    type: "capture-switching",
                  })));
        }),
        (t.$8 = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var e = this.captureGeneration,
              t = yield o("WAWebAudioDeviceManager").selectAudioDevice(
                void 0,
                void 0,
                !0,
              );
            return e !== this.captureGeneration
              ? (o("WALogger").LOG(
                  C ||
                    (C = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV:AudioCaptureDeviceChangeHandler] capture restarted during device selection; dropping the change",
                    ])),
                ),
                !1)
              : t == null
                ? (o("WALogger").WARN(
                    b ||
                      (b = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:AudioCaptureDeviceChangeHandler] Device change detected, newDeviceId is null",
                      ])),
                  ),
                  !1)
                : (o("WALogger").LOG(
                    v ||
                      (v = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:AudioCaptureDeviceChangeHandler] Auto-switching to device: ",
                        "",
                      ])),
                    t,
                  ),
                  this.switchDevice(t, void 0, void 0, !0));
          });
          function t() {
            return e.apply(this, arguments);
          }
          return t;
        })()),
        (t.$9 = function () {
          var e = this,
            t = this.automaticDeviceChangePromise;
          if (t != null)
            return ((this.pendingAutomaticDeviceChange = "event"), t);
          var n = this.$8();
          this.automaticDeviceChangePromise = n;
          var r = function () {
            if (e.automaticDeviceChangePromise === n) {
              e.automaticDeviceChangePromise = null;
              var t = e.pendingAutomaticDeviceChange;
              ((e.pendingAutomaticDeviceChange = null),
                !(
                  t == null ||
                  e.audioCaptureInitState !== st.Ready ||
                  (t === "recovery" && !e.$10())
                ) &&
                  (o("WALogger").LOG(
                    S ||
                      (S = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:AudioCaptureDeviceChangeHandler] re-running ",
                        " device change queued during switch",
                      ])),
                    t,
                  ),
                  e.$11("queued")));
            }
          };
          return (n.then(r, r), n);
        }),
        (t.$11 = function (t) {
          this.$9().catch(function (e) {
            o("WALogger")
              .ERROR(
                R ||
                  (R = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:AudioCaptureDeviceChangeHandler] ",
                    " device change failed",
                  ])),
                t,
              )
              .catching(r("getErrorSafe")(e))
              .sendLogs("voip-mic-device-change-failed");
          });
        }),
        (t.$10 = function () {
          return this.micRecoveryAttempts >= at
            ? (this.micRecoveryAttempts === at &&
                (this.micRecoveryAttempts++,
                o("WALogger")
                  .WARN(
                    L ||
                      (L = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [MicInput] recovery exhausted after ",
                        " automatic switches",
                      ])),
                    at,
                  )
                  .sendLogs("voip-mic-input-recovery-exhausted")),
              !1)
            : (this.micRecoveryAttempts++, !0);
        }),
        (t.$6 = function () {
          if (this.automaticDeviceChangePromise != null) {
            var e;
            (e = this.pendingAutomaticDeviceChange) != null ||
              (this.pendingAutomaticDeviceChange = "recovery");
            return;
          }
          this.$10() &&
            this.$9().then(
              function (e) {
                e ||
                  o("WALogger").WARN(
                    E ||
                      (E = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [MicInput] device recovery did not switch devices",
                      ])),
                  );
              },
              function (e) {
                o("WALogger")
                  .ERROR(
                    k ||
                      (k = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [MicInput] device recovery failed",
                      ])),
                  )
                  .catching(r("getErrorSafe")(e))
                  .sendLogs("voip-mic-input-device-recovery-failed");
              },
            );
        }),
        (t.initCaptureDriver = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            var t = this,
              n = e.auto_gain_control,
              a = e.bits_per_sample,
              i = e.channels,
              l = e.frames_per_chunk,
              s = e.sample_rate;
            if (
              (o("WALogger").LOG(
                I ||
                  (I = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:initCaptureDriver] params: sampleRate=",
                    ", channels=",
                    ", bitsPerSample=",
                    ", framesPerChunk=",
                    ", autoGainControl=",
                    "",
                  ])),
                s,
                i,
                a,
                l,
                String(n !== !1),
              ),
              this.audioCaptureInitState !== st.Uninitialized)
            ) {
              (o("WALogger")
                .ERROR(
                  T ||
                    (T = babelHelpers.taggedTemplateLiteralLoose([
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
            ((this.audioCaptureInitState = st.Initializing),
              (this.audioCaptureInitResolvable = new (o(
                "WAResolvable",
              ).Resolvable)()),
              (this.captureParams = {
                sampleRate: s,
                channels: i,
                bitsPerSample: a,
                framesPerChunk: l,
                autoGainControl: n !== !1,
              }));
            var u = yield o("WAWebAudioDeviceManager").selectAudioDevice();
            if (u == null) {
              var c;
              ((this.audioCaptureInitState = st.Error),
                (c = this.audioCaptureInitResolvable) == null ||
                  c.reject(r("err")("voip: [AV] No audio device selected.")));
              return;
            }
            o("WALogger").LOG(
              D ||
                (D = babelHelpers.taggedTemplateLiteralLoose([
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
                  x ||
                    (x = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV:initCaptureDriver] capture parameters are null",
                    ])),
                )
                .sendLogs("voip: capture parameters are null"),
                (this.audioCaptureInitState = st.Error),
                (m = this.audioCaptureInitResolvable) == null ||
                  m.reject(r("err")("capture parameters are null")));
              return;
            }
            try {
              if (
                navigator.mediaDevices &&
                navigator.mediaDevices.getUserMedia
              ) {
                var p,
                  _,
                  f = yield o("WAWebBackendApi").frontendSendAndReceive(
                    "voipAcquireMediaStream",
                    { type: "microphone", selectedDeviceId: u, params: d },
                  );
                if (f == null)
                  throw r("err")(
                    "Failed to get media stream from getUserMedia",
                  );
                var g = f.getTracks(),
                  h = g.slice(0, 3);
                (o("WALogger").LOG(
                  $ ||
                    ($ = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV] Initializing audio capture with ",
                      " devices. Kinds: ",
                      ", Labels: ",
                      ", IDs: ",
                      "",
                    ])),
                  g.length,
                  h.map(function (e) {
                    return e.kind;
                  }),
                  h.map(function (e) {
                    return e.label;
                  }),
                  h.map(function (e) {
                    return e.getSettings().deviceId;
                  }),
                ),
                  o("WALogger").LOG(
                    P ||
                      (P = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:initCaptureDriver] granted mic permission and got audio stream",
                      ])),
                  ),
                  o("WAWebUA").UA.isFirefox
                    ? ((this.audioContext = new AudioContext({
                        latencyHint: "interactive",
                      })),
                      o("WALogger").LOG(
                        N ||
                          (N = babelHelpers.taggedTemplateLiteralLoose([
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
                      M ||
                        (M = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [AV:initCaptureDriver] AudioContext suspended - will resume when needed",
                        ])),
                    ));
                try {
                  this.mediaStreamSource =
                    this.audioContext.createMediaStreamSource(f);
                } catch (e) {
                  throw (
                    o("WALogger").ERROR(
                      w ||
                        (w = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [AV:initCaptureDriver] Failed to create MediaStreamSource:\n            ",
                          "",
                        ])),
                      e,
                    ),
                    e
                  );
                }
                (this.$12(f),
                  o("WAWebVoipPerfOptimizations").isPerfOptimizationEnabled(
                    o("WAWebVoipPerfOptimizations").PerfOptimizationFlag
                      .WORKLET_PRELOAD,
                  ) &&
                    ((p = this.implementation) == null
                      ? void 0
                      : p.preloadWorkletModule) != null &&
                    this.audioContext != null &&
                    this.implementation.preloadWorkletModule(
                      this.audioContext,
                    ));
                var y = r("WAWebDebounce")(function () {
                  t.$11("event");
                }, 500);
                ((this.cancelDeviceChangeHandler = y.cancel),
                  (this.deviceChangeHandler = function () {
                    y();
                  }),
                  navigator.mediaDevices &&
                    navigator.mediaDevices.addEventListener(
                      "devicechange",
                      this.deviceChangeHandler,
                    ));
                var C = this.audioContext;
                (C != null && this.$5(C, f, "initial"),
                  (this.audioCaptureInitState = st.Ready),
                  (_ = this.audioCaptureInitResolvable) == null || _.resolve());
              } else {
                var b;
                (o("WALogger")
                  .ERROR(
                    A ||
                      (A = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:initCaptureDriver] getUserMedia not supported",
                      ])),
                  )
                  .sendLogs("voip: getUserMedia not supported"),
                  (this.audioCaptureInitState = st.Error),
                  (b = this.audioCaptureInitResolvable) == null ||
                    b.reject(r("err")("getUserMedia not supported")));
              }
            } catch (e) {
              var v;
              (o("WALogger")
                .ERROR(
                  F ||
                    (F = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV:initCaptureDriver] error: ",
                      "",
                    ])),
                  e,
                )
                .sendLogs("voip: error in initCaptureDriver"),
                (this.audioCaptureInitState = st.Error),
                (v = this.audioCaptureInitResolvable) == null || v.reject(e),
                yield this.cleanup());
            }
            o("WALogger").LOG(
              O ||
                (O = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [AV:initCaptureDriver] completed successfully",
                ])),
            );
          });
          function t(t) {
            return e.apply(this, arguments);
          }
          return t;
        })()),
        (t.$12 = function (t) {
          var e = this.audioStream;
          (e != null && e !== t && !pt(e) && nt.delete(e),
            (this.audioStream = t),
            nt.add(t));
        }),
        (t.hasLiveAudioTrack = function () {
          try {
            return mt(this.audioStream);
          } catch (e) {
            return (
              o("WALogger")
                .WARN(
                  B ||
                    (B = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV:hasLiveAudioTrack] failed to read microphone track state",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("voip-mic-readiness-track-state-read-fail"),
              !1
            );
          }
        }),
        (t.startCapture = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            o("WALogger").LOG(
              W ||
                (W = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [AV:startCapture] start audio capture",
                ])),
            );
            var t = e != null ? e : o("WAWebBoolFunc").returnFalse;
            if ((yield this.$13(t)) && !t()) {
              if (this.audioCaptureInitState !== st.Ready) {
                o("WALogger")
                  .ERROR(
                    q ||
                      (q = babelHelpers.taggedTemplateLiteralLoose([
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
                    U ||
                      (U = babelHelpers.taggedTemplateLiteralLoose([
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
                    V ||
                      (V = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:startCapture] capture parameters are null",
                      ])),
                  )
                  .sendLogs("voip: capture parameters are null");
                return;
              }
              var r = this.audioContext,
                a = this.mediaStreamSource;
              yield this.$14(r, a, n, t);
            }
          });
          function t(t) {
            return e.apply(this, arguments);
          }
          return t;
        })()),
        (t.$13 = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            if (e()) return !1;
            if (this.audioCaptureInitState !== st.Initializing) return !0;
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
                    H ||
                      (H = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:startCapture] cancelled after init error: ",
                        "",
                      ])),
                    t,
                  ),
                  !1)
                : (o("WALogger")
                    .ERROR(
                      G ||
                        (G = babelHelpers.taggedTemplateLiteralLoose([
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
        (t.$14 = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* (e, t, n, r) {
              try {
                if (e.state === "suspended") {
                  try {
                    (yield e.resume(),
                      o("WALogger").LOG(
                        z ||
                          (z = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: [AV:startCapture] AudioContext resumed successfully",
                          ])),
                      ));
                  } catch (e) {
                    if (r()) {
                      o("WALogger").LOG(
                        j ||
                          (j = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: [AV:startCapture] cancelled after AudioContext resume error: ",
                            "",
                          ])),
                        e,
                      );
                      return;
                    }
                    o("WALogger").LOG(
                      K ||
                        (K = babelHelpers.taggedTemplateLiteralLoose([
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
                  yield this.$15(i);
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
                    onInputLevel: this.$1(),
                  }),
                  r())
                )
                  return;
                o("WALogger").LOG(
                  Q ||
                    (Q = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV:startCapture] audio capture started successfully",
                    ])),
                );
              } catch (e) {
                if (r()) {
                  o("WALogger").LOG(
                    X ||
                      (X = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:startCapture] cancelled after start error: ",
                        "",
                      ])),
                    e,
                  );
                  return;
                }
                (o("WALogger")
                  .ERROR(
                    Y ||
                      (Y = babelHelpers.taggedTemplateLiteralLoose([
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
        (t.$15 = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            if (this.audioBuffer === e) {
              this.audioBuffer = null;
              try {
                (yield o("WAWebAudioUtility").freeWasmBuffer(e),
                  o("WALogger").LOG(
                    J ||
                      (J = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:stopCapture] freed WASM audio buffer",
                      ])),
                  ));
              } catch (e) {
                o("WALogger").WARN(
                  Z ||
                    (Z = babelHelpers.taggedTemplateLiteralLoose([
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
                ee ||
                  (ee = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: stopCapture",
                  ])),
              ),
              this.audioCaptureInitState !== st.Ready)
            ) {
              if (
                (o("WALogger").WARN(
                  te ||
                    (te = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV:stopCapture] invalid initialization.\n        State = ",
                      "",
                    ])),
                  this.audioCaptureInitState,
                ),
                this.audioCaptureInitState === st.Initializing)
              ) {
                o("WALogger").LOG(
                  ne ||
                    (ne = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV:stopCapture] waiting for init (up to 5s)",
                    ])),
                );
                try {
                  var e,
                    t,
                    a = 5e3,
                    i = null;
                  yield (tt || (tt = n("Promise")))
                    .race([
                      (e =
                        (t = this.audioCaptureInitResolvable) == null
                          ? void 0
                          : t.promise) != null
                        ? e
                        : (tt || (tt = n("Promise"))).resolve(),
                      new tt(function (e, t) {
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
                    re ||
                      (re = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:stopCapture] init wait failed or timed out, proceeding with cleanup: ",
                        "",
                      ])),
                    e,
                  );
                }
              }
              o("WALogger").LOG(
                oe ||
                  (oe = babelHelpers.taggedTemplateLiteralLoose([
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
            (o("WALogger").LOG(
              ae ||
                (ae = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: cleanup audio capture",
                ])),
            ),
              this.captureGeneration++);
            try {
              var e;
              if (
                (this.$7(!0),
                (e = this.cancelDeviceChangeHandler) == null || e.call(this),
                (this.cancelDeviceChangeHandler = null),
                this.deviceChangeHandler != null)
              ) {
                var t;
                ((t = navigator.mediaDevices) == null ||
                  t.removeEventListener(
                    "devicechange",
                    this.deviceChangeHandler,
                  ),
                  (this.deviceChangeHandler = null));
              }
              if (
                ((this.automaticDeviceChangePromise = null),
                (this.pendingAutomaticDeviceChange = null),
                this.implementation != null &&
                  (yield this.implementation.stopAudioCapture()),
                this.mediaStreamSource &&
                  (this.mediaStreamSource.disconnect(),
                  (this.mediaStreamSource = null),
                  o("WALogger").LOG(
                    ie ||
                      (ie = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: cleanup disconnected media stream source",
                      ])),
                  )),
                this.audioStream)
              ) {
                var n = this.audioStream.getTracks();
                (n.forEach(function (e) {
                  e.stop();
                }),
                  o("WALogger").LOG(
                    le ||
                      (le = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:stopCapture] stopped ",
                        " tracks. Kinds: ",
                        "",
                      ])),
                    n.length,
                    n.slice(0, 3).map(function (e) {
                      return e.kind;
                    }),
                  ),
                  (this.audioStream = null),
                  o("WALogger").LOG(
                    se ||
                      (se = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:stopCapture] stopped audio stream",
                      ])),
                  ));
              }
              if (this.audioContext) {
                if (this.audioContext.state !== "closed") {
                  var r = this.audioContext;
                  r.close().catch(function (e) {
                    o("WALogger").LOG(
                      ue ||
                        (ue = babelHelpers.taggedTemplateLiteralLoose([
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
                var a = this.audioBuffer;
                yield this.$15(a);
              }
              ((this.audioCaptureInitState = st.Uninitialized),
                o("WALogger").LOG(
                  ce ||
                    (ce = babelHelpers.taggedTemplateLiteralLoose([
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
              o("WALogger").LOG(
                de ||
                  (de = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:switchDevice] deviceId: ",
                    ", forceContextRecreation: ",
                    "",
                  ])),
                e.slice(0, 8),
                String(n != null ? n : !1),
              );
              var i = _t(n === !0, r === !0);
              if (this.audioCaptureInitState === st.Initializing)
                return (
                  o("WALogger").ERROR(
                    me ||
                      (me = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:switchDevice] audio capture is initializing already",
                      ])),
                  ),
                  !1
                );
              var l = this.captureParams;
              if (!l)
                return (
                  o("WALogger").ERROR(
                    pe ||
                      (pe = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:switchDevice] capture parameters are null",
                      ])),
                  ),
                  !1
                );
              var s = n === !0 || !document.hasFocus();
              if (o("WAWebUA").UA.isFirefox && t != null && s)
                return (
                  o("WALogger").LOG(
                    _e ||
                      (_e = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:switchDevice] Firefox context recreation needed, will recreate AudioContext in target window context",
                      ])),
                  ),
                  this.$16(e, t, t !== window, i, r)
                );
              var u = this.audioContext;
              if (u == null)
                return (
                  o("WALogger").ERROR(
                    fe ||
                      (fe = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:switchDevice] audio context is null",
                      ])),
                  ),
                  !1
                );
              var c = !1,
                d = !1,
                m = this.captureGeneration,
                p = yield o(
                  "WAWebAudioDeviceManager",
                ).switchAudioInputDeviceInternal({
                  deviceId: e,
                  captureParams: l,
                  audioContext: u,
                  targetWindow: t,
                  isAutoSwitch: r,
                  onStreamUpdate: function (t) {
                    if (
                      m !== a.captureGeneration ||
                      a.audioCaptureInitState !== st.Ready
                    ) {
                      (o("WALogger").WARN(
                        ge ||
                          (ge = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: [AV:switchDevice] capture stopped before the replacement stream arrived; releasing it",
                          ])),
                      ),
                        (d = !0),
                        a.$17(null, null, t));
                      return;
                    }
                    ((c = !0), a.$7(!1));
                    try {
                      var e;
                      if (a.audioStream) {
                        var n = a.audioStream.getTracks();
                        (n.forEach(function (e) {
                          e.stop();
                        }),
                          o("WALogger").LOG(
                            he ||
                              (he = babelHelpers.taggedTemplateLiteralLoose([
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
                          ye ||
                            (ye = babelHelpers.taggedTemplateLiteralLoose([
                              "voip: [AV:switchDevice] disconnected media stream source",
                            ])),
                        )),
                        (a.mediaStreamSource =
                          (e =
                            u == null
                              ? void 0
                              : u.createMediaStreamSource(t)) != null
                            ? e
                            : null),
                        a.$12(t),
                        a.implementation != null &&
                          a.mediaStreamSource != null &&
                          a.implementation.reconnect(a.mediaStreamSource));
                    } catch (e) {
                      throw (
                        a.$17(null, null, t),
                        (a.mediaStreamSource = null),
                        (a.audioStream = null),
                        e
                      );
                    }
                    (a.$5(u, t, i),
                      o("WALogger").LOG(
                        Ce ||
                          (Ce = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: [AV:switchDevice] created new media stream source",
                          ])),
                      ));
                  },
                });
              return d
                ? !1
                : (p
                    ? o("WALogger").LOG(
                        be ||
                          (be = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: [AV:switchDevice] Successfully switched to device: ",
                            "",
                          ])),
                        e.slice(0, 8),
                      )
                    : (o("WALogger").ERROR(
                        ve ||
                          (ve = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: [AV:switchDevice] Failed to switch to device: ",
                            "",
                          ])),
                        e.slice(0, 8),
                      ),
                      c && this.$4()),
                  p);
            },
          );
          function t(t, n, r, o) {
            return e.apply(this, arguments);
          }
          return t;
        })()),
        (t.$18 = function (t) {
          var e = o("WAWebUA").UA.isFirefox ? t.AudioContext : AudioContext,
            n = new e({ latencyHint: "interactive" });
          return (
            o("WALogger").LOG(
              Se ||
                (Se = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [AV:switchDevice] created AudioContext, sample rate: ",
                  "Hz, usedTargetWindowCtor=",
                  "",
                ])),
              n.sampleRate,
              String(o("WAWebUA").UA.isFirefox),
            ),
            n
          );
        }),
        (t.$19 = (function () {
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
                      (yield new (tt || (tt = n("Promise")))(function (e) {
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
                  Re ||
                    (Re = babelHelpers.taggedTemplateLiteralLoose([
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
        (t.$20 = (function () {
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
                onInputLevel: this.$1(),
              });
            },
          );
          function t(t, n, r) {
            return e.apply(this, arguments);
          }
          return t;
        })()),
        (t.$21 = function (t) {
          if (t != null)
            try {
              (t.disconnect(),
                o("WALogger").LOG(
                  Le ||
                    (Le = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV:switchDevice] disconnected media stream source",
                    ])),
                ));
            } catch (e) {
              o("WALogger").WARN(
                Ee ||
                  (Ee = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:switchDevice] media stream source disconnect failed: ",
                    "",
                  ])),
                e,
              );
            }
        }),
        (t.$22 = function (t) {
          if (t != null) {
            var e;
            try {
              e = t.getTracks();
            } catch (e) {
              o("WALogger").WARN(
                ke ||
                  (ke = babelHelpers.taggedTemplateLiteralLoose([
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
                  Ie ||
                    (Ie = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV:switchDevice] audio track stop failed: ",
                      "",
                    ])),
                  e,
                );
              }
            }),
              o("WALogger").LOG(
                Te ||
                  (Te = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:switchDevice] attempted to stop ",
                    " audio tracks",
                  ])),
                e.length,
              ));
          }
        }),
        (t.$23 = function (t, n) {
          if (!(t == null || t.state === "closed"))
            try {
              (t.close().catch(function (e) {
                o("WALogger").LOG(
                  De ||
                    (De = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV:switchDevice] ",
                      " AudioContext close failed: ",
                      "",
                    ])),
                  n,
                  String(e),
                );
              }),
                o("WALogger").LOG(
                  xe ||
                    (xe = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV:switchDevice] initiated ",
                      " AudioContext close for context recreation",
                    ])),
                  n,
                ));
            } catch (e) {
              o("WALogger").WARN(
                $e ||
                  ($e = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:switchDevice] ",
                    " AudioContext close threw: ",
                    "",
                  ])),
                n,
                e,
              );
            }
        }),
        (t.$17 = function (t, n, r) {
          this.$24(t, n, r, "replacement");
        }),
        (t.$25 = function (t, n) {
          return (
            this.$17(t.audioContext, t.mediaStreamSource, t.audioStream),
            n && this.$4(),
            !1
          );
        }),
        (t.$24 = function (t, n, r, o) {
          (this.$21(n),
            this.$22(r),
            r != null && (pt(r) ? nt.add(r) : nt.delete(r)),
            this.$23(t, o));
        }),
        (t.$26 = function () {
          return {
            audioContext: this.audioContext,
            mediaStreamSource: this.mediaStreamSource,
            audioStream: this.audioStream,
          };
        }),
        (t.$27 = function (t) {
          (this.audioContext === t.audioContext && (this.audioContext = null),
            this.mediaStreamSource === t.mediaStreamSource &&
              (this.mediaStreamSource = null),
            this.audioStream === t.audioStream && (this.audioStream = null));
        }),
        (t.$28 = function (t, n) {
          return this.audioCaptureInitState === st.Ready &&
            n === this.captureGeneration
            ? !0
            : (o("WALogger").WARN(
                Pe ||
                  (Pe = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:switchDevice] capture state changed during ",
                    ", aborting context recreation. State = ",
                    "",
                  ])),
                t,
                this.audioCaptureInitState,
              ),
              !1);
        }),
        (t.$29 = function () {
          return this.implementation != null && this.audioBuffer != null
            ? !0
            : (o("WALogger")
                .ERROR(
                  Ne ||
                    (Ne = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV:switchDevice] missing capture implementation or audio buffer",
                    ])),
                )
                .sendLogs(
                  "voip: switchDevice missing capture implementation or audio buffer",
                ),
              !1);
        }),
        (t.$30 = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var e = this.implementation;
            e != null &&
              (yield e.stopAudioCapture(),
              o("WALogger").LOG(
                Me ||
                  (Me = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:switchDevice] stopped audio capture implementation",
                  ])),
              ));
          });
          function t() {
            return e.apply(this, arguments);
          }
          return t;
        })()),
        (t.$31 = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            var t = this.$26();
            return (
              this.$7(!1),
              yield this.$30(),
              this.$24(
                t.audioContext,
                t.mediaStreamSource,
                t.audioStream,
                "old",
              ),
              this.$27(t),
              yield new (tt || (tt = n("Promise")))(function (e) {
                return window.setTimeout(e, 200);
              }),
              e("current capture release")
            );
          });
          function t(t) {
            return e.apply(this, arguments);
          }
          return t;
        })()),
        (t.$32 = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var e = this.implementation;
            if (e != null)
              try {
                yield e.stopAudioCapture();
              } catch (e) {
                o("WALogger").WARN(
                  we ||
                    (we = babelHelpers.taggedTemplateLiteralLoose([
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
        (t.$33 = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* (e, t, n, r, a) {
              if (t == null || n == null) {
                (o("WALogger").WARN(
                  Ae ||
                    (Ae = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV:switchDevice] cannot rollback context recreation; previous capture graph is missing",
                    ])),
                ),
                  this.$4());
                return;
              }
              try {
                if (
                  (ct(t), yield this.$20(t, n, e), a !== this.captureGeneration)
                ) {
                  (o("WALogger").LOG(
                    Fe ||
                      (Fe = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:switchDevice] capture torn down during rollback; leaving the restored graph to cleanup",
                      ])),
                  ),
                    yield this.$32());
                  return;
                }
                ((this.audioContext = t),
                  (this.mediaStreamSource = n),
                  r != null
                    ? (this.$12(r), this.$5(t, r, "rollback"))
                    : this.inputMonitoringEnabled &&
                      this.$2() &&
                      (o("WALogger").WARN(
                        Oe ||
                          (Oe = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: [AV:switchDevice] rolled back without a stream to observe",
                          ])),
                      ),
                      o(
                        "WAWebVoipMicrophoneInputState",
                      ).dispatchMicrophoneInputEvent({
                        type: "capture-started",
                        reason: "rollback",
                      })),
                  o("WALogger").LOG(
                    Be ||
                      (Be = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:switchDevice] rolled back to previous capture graph after context recreation failure",
                      ])),
                  ));
              } catch (e) {
                (o("WALogger")
                  .ERROR(
                    We ||
                      (We = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:switchDevice] rollback to previous capture graph failed: ",
                        "",
                      ])),
                    e,
                  )
                  .sendLogs(
                    "voip: switchDevice context recreation rollback failed",
                  ),
                  this.$4());
              }
            },
          );
          function t(t, n, r, o, a) {
            return e.apply(this, arguments);
          }
          return t;
        })()),
        (t.$16 = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* (e, t, n, r, a) {
              var i = this;
              o("WALogger").LOG(
                qe ||
                  (qe = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:switchDevice] Starting context recreation for device: ",
                    "",
                  ])),
                e.slice(0, 8),
              );
              var l = this.captureParams;
              if (!l)
                return (
                  o("WALogger").ERROR(
                    Ue ||
                      (Ue = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:switchDevice] capture parameters are null",
                      ])),
                  ),
                  !1
                );
              if (dt(t))
                return (
                  o("WALogger").LOG(
                    Ve ||
                      (Ve = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:switchDevice] target window already closed, skipping switch",
                      ])),
                  ),
                  !1
                );
              var s = null,
                u = null,
                c = null,
                d = null,
                m = null,
                p = null,
                _ = !1,
                f = !1,
                g = !1,
                h = this.captureGeneration,
                y = function (t) {
                  return i.$28(t, h);
                },
                C = function () {
                  return i.$25(
                    { audioContext: s, mediaStreamSource: c, audioStream: u },
                    g,
                  );
                };
              try {
                if (
                  ((s = this.$18(t)),
                  !this.$29() || (!n && ((g = !0), !(yield this.$31(y)))))
                )
                  return C();
                if (
                  ((u = yield this.$19({
                    audioContext: s,
                    deviceId: e,
                    params: l,
                    targetWindow: t,
                  })),
                  !u)
                )
                  return (
                    n
                      ? o("WALogger")
                          .ERROR(
                            He ||
                              (He = babelHelpers.taggedTemplateLiteralLoose([
                                "voip: [AV:switchDevice] failed to acquire new audio stream",
                              ])),
                          )
                          .sendLogs(
                            "voip: switchDevice context recreation stream acquisition failed",
                          )
                      : o("WALogger")
                          .ERROR(
                            Ge ||
                              (Ge = babelHelpers.taggedTemplateLiteralLoose([
                                "voip: [AV:switchDevice] failed to reacquire main-window audio stream after releasing popout capture",
                              ])),
                          )
                          .sendLogs(
                            "voip: switchDevice main reacquisition failed after popout release",
                          ),
                    C()
                  );
                if (
                  (o("WALogger").LOG(
                    ze ||
                      (ze = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:switchDevice] acquired new audio stream before stopping current capture",
                      ])),
                  ),
                  !y("stream acquisition") ||
                    ((c = s.createMediaStreamSource(u)),
                    (d = this.audioContext),
                    (m = this.mediaStreamSource),
                    (p = this.audioStream),
                    n && (this.$7(!1), (g = !0), yield this.$30(), (_ = !0)),
                    !y("capture stop")))
                )
                  return C();
                if (
                  (ct(s),
                  yield this.$20(s, c, l),
                  o("WALogger").LOG(
                    je ||
                      (je = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:switchDevice] restarted audio capture implementation",
                      ])),
                  ),
                  !y("replacement capture start"))
                )
                  return (yield this.$32(), C());
                if (
                  ((this.audioContext = s),
                  (this.mediaStreamSource = c),
                  this.$12(u),
                  (f = !0),
                  this.$5(s, u, r),
                  o("WALogger").LOG(
                    Ke ||
                      (Ke = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:switchDevice] created new media stream source from new stream",
                      ])),
                  ),
                  n)
                )
                  try {
                    this.$24(d, m, p, "old");
                  } catch (e) {
                    o("WALogger").WARN(
                      Qe ||
                        (Qe = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [AV:switchDevice] old capture graph cleanup failed after replacement commit: ",
                          "",
                        ])),
                      e,
                    );
                  }
                try {
                  (a !== !0 &&
                    o("WAWebUserPrefsVoip").setSelectedAudioInputDevice(e),
                    o("WAWebAudioDeviceManager").AudioDeviceEvents.trigger(
                      "deviceSelectionChanged",
                      [e],
                    ));
                } catch (e) {
                  o("WALogger").WARN(
                    Xe ||
                      (Xe = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:switchDevice] device selection update failed after context recreation: ",
                        "",
                      ])),
                    e,
                  );
                }
                return (
                  o("WALogger").LOG(
                    Ye ||
                      (Ye = babelHelpers.taggedTemplateLiteralLoose([
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
                      Je ||
                        (Je = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [AV:switchDevice] Context recreation failed: ",
                          "",
                        ])),
                      e,
                    )
                    .sendLogs("voip: switchDevice context recreation failed"),
                  f)
                )
                  try {
                    yield this.cleanup();
                  } catch (e) {
                    o("WALogger")
                      .ERROR(
                        Ze ||
                          (Ze = babelHelpers.taggedTemplateLiteralLoose([
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
                  _ ? (this.$17(s, c, u), yield this.$33(l, d, m, p, h)) : C();
                return !1;
              }
            },
          );
          function t(t, n, r, o, a) {
            return e.apply(this, arguments);
          }
          return t;
        })()),
        (t.consumeAudioCaptureMetrics = function () {
          var e, t;
          return (e =
            (t = this.implementation) == null || t.consumeCaptureMetrics == null
              ? void 0
              : t.consumeCaptureMetrics()) != null
            ? e
            : null;
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
                et ||
                  (et = babelHelpers.taggedTemplateLiteralLoose([
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
    ((l.scheduleCallEndMicRelease = it), (l.WAWebVoipAudioCaptureBase = ft));
  },
  98,
);
