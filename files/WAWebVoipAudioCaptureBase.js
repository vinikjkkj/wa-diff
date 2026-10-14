__d(
  "WAWebVoipAudioCaptureBase",
  [
    "$InternalEnum",
    "Promise",
    "WALogger",
    "WAResolvable",
    "WAWebAudioDeviceManager",
    "WAWebAudioUtility",
    "WAWebBackendApi",
    "WAWebBoolFunc",
    "WAWebDebounce",
    "WAWebUA",
    "WAWebUserPrefsVoip",
    "WAWebVoipAudioCaptureImplementationFactory",
    "WAWebVoipAudioContextResume",
    "WAWebVoipDeviceAccessRecoveryGating",
    "WAWebVoipMicStreamBackstop",
    "WAWebVoipMicrophoneHealthPresence",
    "WAWebVoipMicrophoneInputState",
    "WAWebVoipMicrophoneTrackObserver",
    "WAWebVoipPerfOptimizations",
    "WAWebVoipSilentCapture",
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
      Je = 3,
      Ze = n("$InternalEnum").Mirrored([
        "Uninitialized",
        "Initializing",
        "Ready",
        "Error",
      ]);
    function et(t) {
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
    function tt(e) {
      var t = Reflect.get(e, "closed");
      return t === !0;
    }
    function nt(e) {
      return (
        (e == null
          ? void 0
          : e.getAudioTracks().some(function (e) {
              return e.readyState === "live";
            })) === !0
      );
    }
    function rt(e) {
      try {
        return nt(e);
      } catch (e) {
        return (
          o("WALogger")
            .WARN(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [AV:micReconciliation] failed to read microphone track state",
                ])),
            )
            .catching(r("getErrorSafe")(e))
            .sendLogs("voip-mic-cleanup-track-state-read-fail"),
          !0
        );
      }
    }
    function ot(e, t) {
      return e
        ? "capture-handoff"
        : t
          ? "automatic-device-switch"
          : "manual-device-switch";
    }
    var at = (function () {
      function e(e) {
        ((this.audioContext = null),
          (this.mediaStreamSource = null),
          (this.silentSource = null),
          (this.audioStream = null),
          (this.audioBuffer = null),
          (this.captureParams = null),
          (this.audioCaptureInitState = Ze.Uninitialized),
          (this.audioCaptureInitResolvable = null),
          (this.implementation = null),
          (this.deviceChangeHandler = null),
          (this.cancelDeviceChangeHandler = null),
          (this.automaticDeviceChangePromise = null),
          (this.pendingAutomaticDeviceChange = null),
          (this.micRecoveryAttempts = 0),
          (this.microphoneTrackObserver = null),
          (this.captureGeneration = 0),
          (this.hasUnrecoveredTrackEnd = !1),
          (this.unsubscribeFromHealthExperienceMount = null),
          (this.$1 = new (o("WAWebVoipSilentCapture").AudioAfterSilenceWatch)(
            e,
          )),
          (this.implementation = o(
            "WAWebVoipAudioCaptureImplementationFactory",
          ).createAudioCaptureImplementation()));
      }
      var t = e.prototype;
      return (
        (t.$2 = function () {
          !this.hasUnrecoveredTrackEnd ||
            !this.$3() ||
            this.deviceChangeHandler == null ||
            ((this.hasUnrecoveredTrackEnd = !1),
            o("WALogger").LOG(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [MicInput] recovering a track that ended before the health experience mounted",
                ])),
            ),
            this.$4());
        }),
        (t.$5 = function () {
          var e = this;
          return function (t) {
            (o("WAWebVoipMicrophoneInputState").dispatchMicrophoneInputEvent({
              type: "level",
              rmsDbfs: t,
            }),
              o(
                "WAWebVoipMicrophoneInputState",
              ).getMicrophoneInputHasCredibleSignal() &&
                (e.micRecoveryAttempts = 0),
              e.$1.countLevel(t));
          };
        }),
        (t.$3 = function () {
          return (
            this.audioCaptureInitState === Ze.Ready ||
            this.audioCaptureInitState === Ze.Initializing
          );
        }),
        (t.$6 = function () {
          var e = this.microphoneTrackObserver;
          this.microphoneTrackObserver = null;
          try {
            e == null || e.stop();
          } catch (e) {
            o("WALogger")
              .WARN(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [MicInput] stopping the track observer failed",
                  ])),
              )
              .catching(r("getErrorSafe")(e));
          }
        }),
        (t.$7 = function () {
          this.$3() &&
            (this.$6(),
            o("WAWebVoipMicrophoneInputState").dispatchMicrophoneInputEvent({
              type: "input-unavailable",
              reason: "capture-failed",
            }));
        }),
        (t.$8 = function (t, n, a) {
          var e,
            i = this;
          if (
            ((a === "initial" || a === "manual-device-switch") &&
              (this.micRecoveryAttempts = 0),
            !!this.$3())
          ) {
            (this.$6(),
              (this.hasUnrecoveredTrackEnd = !1),
              (e = this.unsubscribeFromHealthExperienceMount) != null ||
                (this.unsubscribeFromHealthExperienceMount = o(
                  "WAWebVoipMicrophoneHealthPresence",
                ).subscribeToMicrophoneHealthExperienceMount(function () {
                  i.$2();
                })),
              o("WAWebVoipMicrophoneInputState").dispatchMicrophoneInputEvent({
                type: "capture-started",
                reason: a,
              }));
            try {
              var l,
                s,
                u,
                c = (l = n.getAudioTracks()[0]) != null ? l : null,
                d = new (o(
                  "WAWebVoipMicrophoneTrackObserver",
                ).WAWebVoipMicrophoneTrackObserver)({
                  audioContext: t,
                  audioTrack: c,
                  onRecovered: function () {
                    o(
                      "WAWebVoipMicrophoneInputState",
                    ).dispatchMicrophoneInputEvent({ type: "input-recovered" });
                  },
                  onUnavailable: function (t) {
                    (o("WALogger").WARN(
                      m ||
                        (m = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [MicInput] microphone unavailable: ",
                          "",
                        ])),
                      t,
                    ),
                      o(
                        "WAWebVoipMicrophoneInputState",
                      ).dispatchMicrophoneInputEvent({
                        type: "input-unavailable",
                        reason: t,
                      }),
                      t === "track-ended" &&
                        i.deviceChangeHandler != null &&
                        (o(
                          "WAWebVoipMicrophoneHealthPresence",
                        ).isMicrophoneHealthExperienceMounted()
                          ? i.$4()
                          : (i.hasUnrecoveredTrackEnd = !0)));
                  },
                });
              ((this.microphoneTrackObserver = d),
                d.start(),
                o("WALogger").LOG(
                  p ||
                    (p = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [MicInput] monitoring started reason=",
                      " contextState=",
                      " trackState=",
                      " trackMuted=",
                      "",
                    ])),
                  a,
                  t.state,
                  (s = c == null ? void 0 : c.readyState) != null
                    ? s
                    : "missing",
                  String((u = c == null ? void 0 : c.muted) != null ? u : !1),
                ));
            } catch (e) {
              o("WALogger")
                .WARN(
                  _ ||
                    (_ = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [MicInput] could not observe the microphone track",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("voip-mic-input-monitoring-start-failed");
            }
          }
        }),
        (t.$9 = function (t) {
          if ((this.$6(), (this.hasUnrecoveredTrackEnd = !1), t)) {
            var e;
            ((this.micRecoveryAttempts = 0),
              (e = this.unsubscribeFromHealthExperienceMount) == null ||
                e.call(this),
              (this.unsubscribeFromHealthExperienceMount = null),
              o("WAWebVoipMicrophoneInputState").dispatchMicrophoneInputEvent({
                type: "capture-stopped",
              }));
          } else
            o("WAWebVoipMicrophoneInputState").dispatchMicrophoneInputEvent({
              type: "capture-switching",
            });
        }),
        (t.$10 = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var e = this.captureGeneration,
              t = yield o("WAWebAudioDeviceManager").selectAudioDevice(
                void 0,
                void 0,
                !0,
              );
            return e !== this.captureGeneration
              ? (o("WALogger").LOG(
                  f ||
                    (f = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV:AudioCaptureDeviceChangeHandler] capture restarted during device selection; dropping the change",
                    ])),
                ),
                !1)
              : t == null
                ? (o("WALogger").WARN(
                    g ||
                      (g = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:AudioCaptureDeviceChangeHandler] Device change detected, newDeviceId is null",
                      ])),
                  ),
                  !1)
                : o("WAWebVoipSilentCapture").isLiveOnGrantedMicrophone(this, t)
                  ? !0
                  : (o("WALogger").LOG(
                      h ||
                        (h = babelHelpers.taggedTemplateLiteralLoose([
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
        (t.$11 = function () {
          var e = this,
            t = this.automaticDeviceChangePromise;
          if (t != null)
            return ((this.pendingAutomaticDeviceChange = "event"), t);
          var n = this.$10();
          this.automaticDeviceChangePromise = n;
          var r = function () {
            if (e.automaticDeviceChangePromise === n) {
              e.automaticDeviceChangePromise = null;
              var t = e.pendingAutomaticDeviceChange;
              ((e.pendingAutomaticDeviceChange = null),
                !(
                  t == null ||
                  e.audioCaptureInitState !== Ze.Ready ||
                  (t === "recovery" && !e.$12())
                ) &&
                  (o("WALogger").LOG(
                    y ||
                      (y = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:AudioCaptureDeviceChangeHandler] re-running ",
                        " device change queued during switch",
                      ])),
                    t,
                  ),
                  e.$13("queued")));
            }
          };
          return (n.then(r, r), n);
        }),
        (t.$13 = function (t) {
          this.$11().catch(function (e) {
            o("WALogger")
              .ERROR(
                C ||
                  (C = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:AudioCaptureDeviceChangeHandler] ",
                    " device change failed",
                  ])),
                t,
              )
              .catching(r("getErrorSafe")(e))
              .sendLogs("voip-mic-device-change-failed");
          });
        }),
        (t.$12 = function () {
          return this.micRecoveryAttempts >= Je
            ? (this.micRecoveryAttempts === Je &&
                (this.micRecoveryAttempts++,
                o("WALogger")
                  .WARN(
                    b ||
                      (b = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [MicInput] recovery exhausted after ",
                        " automatic switches",
                      ])),
                    Je,
                  )
                  .sendLogs("voip-mic-input-recovery-exhausted")),
              !1)
            : (this.micRecoveryAttempts++, !0);
        }),
        (t.$4 = function () {
          if (this.automaticDeviceChangePromise != null) {
            var e;
            (e = this.pendingAutomaticDeviceChange) != null ||
              (this.pendingAutomaticDeviceChange = "recovery");
            return;
          }
          this.$12() &&
            this.$11().then(
              function (e) {
                e ||
                  o("WALogger").WARN(
                    v ||
                      (v = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [MicInput] device recovery did not switch devices",
                      ])),
                  );
              },
              function (e) {
                o("WALogger")
                  .ERROR(
                    S ||
                      (S = babelHelpers.taggedTemplateLiteralLoose([
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
            var t = e.auto_gain_control,
              n = e.bits_per_sample,
              a = e.channels,
              i = e.frames_per_chunk,
              l = e.sample_rate;
            if (
              (o("WALogger").LOG(
                R ||
                  (R = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:initCaptureDriver] params: sampleRate=",
                    ", channels=",
                    ", bitsPerSample=",
                    ", framesPerChunk=",
                    ", autoGainControl=",
                    "",
                  ])),
                l,
                a,
                n,
                i,
                String(t !== !1),
              ),
              this.audioCaptureInitState !== Ze.Uninitialized)
            ) {
              (o("WALogger")
                .ERROR(
                  L ||
                    (L = babelHelpers.taggedTemplateLiteralLoose([
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
            ((this.audioCaptureInitState = Ze.Initializing),
              (this.audioCaptureInitResolvable = new (o(
                "WAResolvable",
              ).Resolvable)()));
            var s = {
              sampleRate: l,
              channels: a,
              bitsPerSample: n,
              framesPerChunk: i,
              autoGainControl: t !== !1,
            };
            this.captureParams = s;
            var u = yield o("WAWebVoipSilentCapture").findMicrophone(),
              c = u.missingReason,
              d = u.selectedDeviceId;
            if (!(c != null && this.$14(s, c))) {
              if (d == null) {
                var m;
                ((this.audioCaptureInitState = Ze.Error),
                  (m = this.audioCaptureInitResolvable) == null ||
                    m.reject(r("err")("voip: [AV] No audio device selected.")));
                return;
              }
              o("WALogger").LOG(
                E ||
                  (E = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:initCaptureDriver] selected device: ",
                    "",
                  ])),
                d,
              );
              var p = s;
              try {
                if (
                  navigator.mediaDevices &&
                  navigator.mediaDevices.getUserMedia
                ) {
                  var _,
                    f,
                    g = yield o("WAWebBackendApi").frontendSendAndReceive(
                      "voipAcquireMediaStream",
                      { type: "microphone", selectedDeviceId: d, params: p },
                    );
                  if (g == null)
                    throw r("err")(
                      "Failed to get media stream from getUserMedia",
                    );
                  var h = g.getTracks(),
                    y = h.slice(0, 3);
                  (o("WALogger").LOG(
                    k ||
                      (k = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV] Initializing audio capture with ",
                        " devices. Kinds: ",
                        ", Labels: ",
                        ", IDs: ",
                        "",
                      ])),
                    h.length,
                    y.map(function (e) {
                      return e.kind;
                    }),
                    y.map(function (e) {
                      return e.label;
                    }),
                    y.map(function (e) {
                      return e.getSettings().deviceId;
                    }),
                  ),
                    o("WALogger").LOG(
                      I ||
                        (I = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [AV:initCaptureDriver] granted mic permission and got audio stream",
                        ])),
                    ),
                    (this.audioContext = o(
                      "WAWebVoipSilentCapture",
                    ).createCaptureAudioContext(p)),
                    this.audioContext.state === "suspended" &&
                      o("WALogger").LOG(
                        T ||
                          (T = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: [AV:initCaptureDriver] AudioContext suspended - will resume when needed",
                          ])),
                      ));
                  try {
                    this.mediaStreamSource =
                      this.audioContext.createMediaStreamSource(g);
                  } catch (e) {
                    throw (
                      o("WALogger").ERROR(
                        D ||
                          (D = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: [AV:initCaptureDriver] Failed to create MediaStreamSource:\n            ",
                            "",
                          ])),
                        e,
                      ),
                      e
                    );
                  }
                  (this.$15(g),
                    o("WAWebVoipPerfOptimizations").isPerfOptimizationEnabled(
                      o("WAWebVoipPerfOptimizations").PerfOptimizationFlag
                        .WORKLET_PRELOAD,
                    ) &&
                      ((_ = this.implementation) == null
                        ? void 0
                        : _.preloadWorkletModule) != null &&
                      this.audioContext != null &&
                      this.implementation.preloadWorkletModule(
                        this.audioContext,
                      ),
                    this.$16());
                  var C = this.audioContext;
                  (C != null && this.$8(C, g, "initial"),
                    (this.audioCaptureInitState = Ze.Ready),
                    (f = this.audioCaptureInitResolvable) == null ||
                      f.resolve());
                } else {
                  var b;
                  (o("WALogger")
                    .ERROR(
                      x ||
                        (x = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [AV:initCaptureDriver] getUserMedia not supported",
                        ])),
                    )
                    .sendLogs("voip: getUserMedia not supported"),
                    (this.audioCaptureInitState = Ze.Error),
                    (b = this.audioCaptureInitResolvable) == null ||
                      b.reject(r("err")("getUserMedia not supported")));
                }
              } catch (e) {
                var v;
                (o("WALogger")
                  .ERROR(
                    $ ||
                      ($ = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:initCaptureDriver] error: ",
                        "",
                      ])),
                    e,
                  )
                  .sendLogs("voip: error in initCaptureDriver"),
                  (this.audioCaptureInitState = Ze.Error),
                  (v = this.audioCaptureInitResolvable) == null || v.reject(e),
                  yield this.cleanup());
              }
              o("WALogger").LOG(
                P ||
                  (P = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:initCaptureDriver] completed successfully",
                  ])),
              );
            }
          });
          function t(t) {
            return e.apply(this, arguments);
          }
          return t;
        })()),
        (t.$14 = function (t, n) {
          var e = this,
            r;
          if (
            !o(
              "WAWebVoipDeviceAccessRecoveryGating",
            ).isDeviceAccessRecoveryEnabled()
          )
            return !1;
          try {
            var a = o("WAWebVoipSilentCapture").createSilentCaptureGraph(
                t,
                n === "no-device"
                  ? null
                  : function () {
                      e.$13("event");
                    },
              ),
              i = a.audioContext,
              l = a.silentSource;
            ((this.audioContext = i), (this.silentSource = l));
          } catch (e) {
            var s;
            return (
              o("WALogger")
                .ERROR(
                  N ||
                    (N = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV:initCaptureDriver] silent capture failed: ",
                      "",
                    ])),
                  e,
                )
                .sendLogs("voip: silent capture failed"),
              (this.audioCaptureInitState = Ze.Error),
              (s = this.audioCaptureInitResolvable) == null || s.reject(e),
              !0
            );
          }
          return (
            this.$16(),
            (this.audioCaptureInitState = Ze.Ready),
            (r = this.audioCaptureInitResolvable) == null || r.resolve(),
            o("WALogger").LOG(
              M ||
                (M = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [AV:initCaptureDriver] microphone unavailable (",
                  "), capturing silence",
                ])),
              n,
            ),
            !0
          );
        }),
        (t.$17 = function () {
          var e = this.silentSource;
          e != null &&
            ((this.silentSource = null),
            o("WAWebVoipSilentCapture").stopSilentSource(e));
        }),
        (t.$16 = function () {
          var e = this,
            t,
            n = r("WAWebDebounce")(function () {
              e.$13("event");
            }, 500);
          ((this.cancelDeviceChangeHandler = n.cancel),
            (this.deviceChangeHandler = function () {
              n();
            }),
            (t = navigator.mediaDevices) == null ||
              t.addEventListener("devicechange", this.deviceChangeHandler));
        }),
        (t.$15 = function (t) {
          var e = this.audioStream;
          (e != null &&
            e !== t &&
            !rt(e) &&
            o("WAWebVoipMicStreamBackstop").untrackMicStream(e),
            (this.audioStream = t),
            o("WAWebVoipMicStreamBackstop").trackMicStream(t));
        }),
        (t.hasLiveAudioTrack = function () {
          try {
            return nt(this.audioStream);
          } catch (e) {
            return (
              o("WALogger")
                .WARN(
                  w ||
                    (w = babelHelpers.taggedTemplateLiteralLoose([
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
            var t;
            o("WALogger").LOG(
              A ||
                (A = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [AV:startCapture] start audio capture",
                ])),
            );
            var n = e != null ? e : o("WAWebBoolFunc").returnFalse;
            if ((yield this.$18(n)) && !n()) {
              if (this.audioCaptureInitState !== Ze.Ready) {
                o("WALogger")
                  .ERROR(
                    F ||
                      (F = babelHelpers.taggedTemplateLiteralLoose([
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
              var r =
                (t = this.mediaStreamSource) != null ? t : this.silentSource;
              if (!this.audioContext || r == null) {
                o("WALogger")
                  .ERROR(
                    O ||
                      (O = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:startCapture] audio context or media stream source is null",
                      ])),
                  )
                  .sendLogs(
                    "voip: audio context or media stream source is null",
                  );
                return;
              }
              var a = this.captureParams;
              if (!a) {
                o("WALogger")
                  .ERROR(
                    B ||
                      (B = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:startCapture] capture parameters are null",
                      ])),
                  )
                  .sendLogs("voip: capture parameters are null");
                return;
              }
              var i = this.audioContext;
              yield this.$19(i, r, a, n);
            }
          });
          function t(t) {
            return e.apply(this, arguments);
          }
          return t;
        })()),
        (t.$18 = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            if (e()) return !1;
            if (this.audioCaptureInitState !== Ze.Initializing) return !0;
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
                    W ||
                      (W = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:startCapture] cancelled after init error: ",
                        "",
                      ])),
                    t,
                  ),
                  !1)
                : (o("WALogger")
                    .ERROR(
                      q ||
                        (q = babelHelpers.taggedTemplateLiteralLoose([
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
        (t.$19 = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* (e, t, n, r) {
              try {
                if (e.state === "suspended") {
                  try {
                    (yield o(
                      "WAWebVoipAudioContextResume",
                    ).resumeAudioContextLoggingDelays(e, "startCapture"),
                      o("WALogger").LOG(
                        U ||
                          (U = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: [AV:startCapture] AudioContext resumed successfully",
                          ])),
                      ));
                  } catch (e) {
                    if (r()) {
                      o("WALogger").LOG(
                        V ||
                          (V = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: [AV:startCapture] cancelled after AudioContext resume error: ",
                            "",
                          ])),
                        e,
                      );
                      return;
                    }
                    o("WALogger").LOG(
                      H ||
                        (H = babelHelpers.taggedTemplateLiteralLoose([
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
                  yield this.$20(i);
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
                    onInputLevel: this.$5(),
                  }),
                  r())
                )
                  return;
                o("WALogger").LOG(
                  G ||
                    (G = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV:startCapture] audio capture started successfully",
                    ])),
                );
              } catch (e) {
                if (r()) {
                  o("WALogger").LOG(
                    z ||
                      (z = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:startCapture] cancelled after start error: ",
                        "",
                      ])),
                    e,
                  );
                  return;
                }
                (o("WALogger")
                  .ERROR(
                    j ||
                      (j = babelHelpers.taggedTemplateLiteralLoose([
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
        (t.$20 = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            if (this.audioBuffer === e) {
              this.audioBuffer = null;
              try {
                (yield o("WAWebAudioUtility").freeWasmBuffer(e),
                  o("WALogger").LOG(
                    K ||
                      (K = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:stopCapture] freed WASM audio buffer",
                      ])),
                  ));
              } catch (e) {
                o("WALogger").WARN(
                  Q ||
                    (Q = babelHelpers.taggedTemplateLiteralLoose([
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
                X ||
                  (X = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: stopCapture",
                  ])),
              ),
              this.audioCaptureInitState !== Ze.Ready)
            ) {
              if (
                (o("WALogger").WARN(
                  Y ||
                    (Y = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV:stopCapture] invalid initialization.\n        State = ",
                      "",
                    ])),
                  this.audioCaptureInitState,
                ),
                this.audioCaptureInitState === Ze.Initializing)
              ) {
                o("WALogger").LOG(
                  J ||
                    (J = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV:stopCapture] waiting for init (up to 5s)",
                    ])),
                );
                try {
                  var e,
                    t,
                    a = 5e3,
                    i = null;
                  yield (Ye || (Ye = n("Promise")))
                    .race([
                      (e =
                        (t = this.audioCaptureInitResolvable) == null
                          ? void 0
                          : t.promise) != null
                        ? e
                        : (Ye || (Ye = n("Promise"))).resolve(),
                      new Ye(function (e, t) {
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
                    Z ||
                      (Z = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:stopCapture] init wait failed or timed out, proceeding with cleanup: ",
                        "",
                      ])),
                    e,
                  );
                }
              }
              o("WALogger").LOG(
                ee ||
                  (ee = babelHelpers.taggedTemplateLiteralLoose([
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
              te ||
                (te = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: cleanup audio capture",
                ])),
            ),
              this.captureGeneration++);
            try {
              var e;
              if (
                (this.$9(!0),
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
                this.$1.stop(),
                this.$17(),
                this.implementation != null &&
                  (yield this.implementation.stopAudioCapture()),
                this.mediaStreamSource &&
                  (this.mediaStreamSource.disconnect(),
                  (this.mediaStreamSource = null),
                  o("WALogger").LOG(
                    ne ||
                      (ne = babelHelpers.taggedTemplateLiteralLoose([
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
                    re ||
                      (re = babelHelpers.taggedTemplateLiteralLoose([
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
                    oe ||
                      (oe = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:stopCapture] stopped audio stream",
                      ])),
                  ));
              }
              if (this.audioContext) {
                if (this.audioContext.state !== "closed") {
                  var r = this.audioContext;
                  r.close().catch(function (e) {
                    o("WALogger").LOG(
                      ae ||
                        (ae = babelHelpers.taggedTemplateLiteralLoose([
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
                yield this.$20(a);
              }
              ((this.audioCaptureInitState = Ze.Uninitialized),
                o("WALogger").LOG(
                  ie ||
                    (ie = babelHelpers.taggedTemplateLiteralLoose([
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
            function* (e, t, n, r, a) {
              var i = this;
              o("WALogger").LOG(
                le ||
                  (le = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:switchDevice] deviceId: ",
                    ", forceContextRecreation: ",
                    "",
                  ])),
                e.slice(0, 8),
                String(n != null ? n : !1),
              );
              var l = ot(n === !0, r === !0);
              if (this.audioCaptureInitState === Ze.Initializing)
                return (
                  o("WALogger").ERROR(
                    se ||
                      (se = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:switchDevice] audio capture is initializing already",
                      ])),
                  ),
                  !1
                );
              if (
                this.silentSource != null &&
                !(yield o(
                  "WAWebVoipSilentCapture",
                ).isMicrophoneSwitchAllowedWhileSilent(a))
              )
                return !1;
              var s = this.captureParams;
              if (!s)
                return (
                  o("WALogger").ERROR(
                    ue ||
                      (ue = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:switchDevice] capture parameters are null",
                      ])),
                  ),
                  !1
                );
              var u = n === !0 || !document.hasFocus();
              if (o("WAWebUA").UA.isFirefox && t != null && u)
                return (
                  o("WALogger").LOG(
                    ce ||
                      (ce = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:switchDevice] Firefox context recreation needed, will recreate AudioContext in target window context",
                      ])),
                  ),
                  this.$21(e, t, t !== window, l, r)
                );
              var c = this.audioContext;
              if (c == null)
                return (
                  o("WALogger").ERROR(
                    de ||
                      (de = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:switchDevice] audio context is null",
                      ])),
                  ),
                  !1
                );
              var d = !1,
                m = !1,
                p = this.captureGeneration,
                _ = yield o(
                  "WAWebAudioDeviceManager",
                ).switchAudioInputDeviceInternal({
                  deviceId: e,
                  captureParams: s,
                  audioContext: c,
                  targetWindow: t,
                  isAutoSwitch: r,
                  grantedStream: a,
                  onStreamUpdate: function (t) {
                    if (
                      p !== i.captureGeneration ||
                      i.audioCaptureInitState !== Ze.Ready
                    ) {
                      (o("WALogger").WARN(
                        me ||
                          (me = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: [AV:switchDevice] capture stopped before the replacement stream arrived; releasing it",
                          ])),
                      ),
                        (m = !0),
                        i.$22(null, null, t));
                      return;
                    }
                    ((d = !0), i.$9(!1));
                    var e = i.silentSource != null;
                    try {
                      var n;
                      if (i.audioStream) {
                        var r = i.audioStream.getTracks();
                        (r.forEach(function (e) {
                          e.stop();
                        }),
                          o("WALogger").LOG(
                            pe ||
                              (pe = babelHelpers.taggedTemplateLiteralLoose([
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
                      (i.mediaStreamSource &&
                        (i.mediaStreamSource.disconnect(),
                        o("WALogger").LOG(
                          _e ||
                            (_e = babelHelpers.taggedTemplateLiteralLoose([
                              "voip: [AV:switchDevice] disconnected media stream source",
                            ])),
                        )),
                        (i.mediaStreamSource =
                          (n =
                            c == null
                              ? void 0
                              : c.createMediaStreamSource(t)) != null
                            ? n
                            : null),
                        i.$15(t),
                        i.implementation != null &&
                          i.mediaStreamSource != null &&
                          i.implementation.reconnect(i.mediaStreamSource),
                        i.$17());
                    } catch (e) {
                      throw (
                        i.$22(null, null, t),
                        (i.mediaStreamSource = null),
                        (i.audioStream = null),
                        e
                      );
                    }
                    (i.$8(c, t, l),
                      i.$1.watchStream(e),
                      o("WALogger").LOG(
                        fe ||
                          (fe = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: [AV:switchDevice] created new media stream source",
                          ])),
                      ));
                  },
                });
              return m ? !1 : this.$23(_, d, e);
            },
          );
          function t(t, n, r, o, a) {
            return e.apply(this, arguments);
          }
          return t;
        })()),
        (t.$23 = function (t, n, r) {
          return t
            ? (o("WALogger").LOG(
                ge ||
                  (ge = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:switchDevice] Successfully switched to device: ",
                    "",
                  ])),
                r.slice(0, 8),
              ),
              !0)
            : (o("WALogger").ERROR(
                he ||
                  (he = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:switchDevice] Failed to switch to device: ",
                    "",
                  ])),
                r.slice(0, 8),
              ),
              n && this.$7(),
              !1);
        }),
        (t.$24 = function (t) {
          var e = o("WAWebUA").UA.isFirefox ? t.AudioContext : AudioContext,
            n = new e({ latencyHint: "interactive" });
          return (
            o("WALogger").LOG(
              ye ||
                (ye = babelHelpers.taggedTemplateLiteralLoose([
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
        (t.$25 = (function () {
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
                      (yield new (Ye || (Ye = n("Promise")))(function (e) {
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
                  Ce ||
                    (Ce = babelHelpers.taggedTemplateLiteralLoose([
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
        (t.$26 = (function () {
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
                onInputLevel: this.$5(),
              });
            },
          );
          function t(t, n, r) {
            return e.apply(this, arguments);
          }
          return t;
        })()),
        (t.$27 = function (t) {
          if (t != null)
            try {
              (t.disconnect(),
                o("WALogger").LOG(
                  be ||
                    (be = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV:switchDevice] disconnected media stream source",
                    ])),
                ));
            } catch (e) {
              o("WALogger").WARN(
                ve ||
                  (ve = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:switchDevice] media stream source disconnect failed: ",
                    "",
                  ])),
                e,
              );
            }
        }),
        (t.$28 = function (t) {
          if (t != null) {
            var e;
            try {
              e = t.getTracks();
            } catch (e) {
              o("WALogger").WARN(
                Se ||
                  (Se = babelHelpers.taggedTemplateLiteralLoose([
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
                  Re ||
                    (Re = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV:switchDevice] audio track stop failed: ",
                      "",
                    ])),
                  e,
                );
              }
            }),
              o("WALogger").LOG(
                Le ||
                  (Le = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:switchDevice] attempted to stop ",
                    " audio tracks",
                  ])),
                e.length,
              ));
          }
        }),
        (t.$29 = function (t, n) {
          if (!(t == null || t.state === "closed"))
            try {
              (t.close().catch(function (e) {
                o("WALogger").LOG(
                  Ee ||
                    (Ee = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV:switchDevice] ",
                      " AudioContext close failed: ",
                      "",
                    ])),
                  n,
                  String(e),
                );
              }),
                o("WALogger").LOG(
                  ke ||
                    (ke = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV:switchDevice] initiated ",
                      " AudioContext close for context recreation",
                    ])),
                  n,
                ));
            } catch (e) {
              o("WALogger").WARN(
                Ie ||
                  (Ie = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:switchDevice] ",
                    " AudioContext close threw: ",
                    "",
                  ])),
                n,
                e,
              );
            }
        }),
        (t.$22 = function (t, n, r) {
          this.$30({
            audioContext: t,
            audioStream: r,
            logContext: "replacement",
            mediaStreamSource: n,
          });
        }),
        (t.$31 = function (t, n) {
          return (
            this.$22(t.audioContext, t.mediaStreamSource, t.audioStream),
            n && this.$7(),
            !1
          );
        }),
        (t.$30 = function (t) {
          var e = t.audioContext,
            n = t.audioStream,
            r = t.logContext,
            a = t.mediaStreamSource;
          (this.$27(a),
            this.$28(n),
            n != null &&
              (rt(n)
                ? o("WAWebVoipMicStreamBackstop").trackMicStream(n)
                : o("WAWebVoipMicStreamBackstop").untrackMicStream(n)),
            this.$29(e, r));
        }),
        (t.$32 = function () {
          return {
            audioContext: this.audioContext,
            mediaStreamSource: this.mediaStreamSource,
            audioStream: this.audioStream,
          };
        }),
        (t.$33 = function (t) {
          (this.audioContext === t.audioContext && (this.audioContext = null),
            this.mediaStreamSource === t.mediaStreamSource &&
              (this.mediaStreamSource = null),
            this.audioStream === t.audioStream && (this.audioStream = null));
        }),
        (t.$34 = function (t, n) {
          return this.audioCaptureInitState === Ze.Ready &&
            n === this.captureGeneration
            ? !0
            : (o("WALogger").WARN(
                Te ||
                  (Te = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:switchDevice] capture state changed during ",
                    ", aborting context recreation. State = ",
                    "",
                  ])),
                t,
                this.audioCaptureInitState,
              ),
              !1);
        }),
        (t.$35 = function () {
          return this.implementation != null && this.audioBuffer != null
            ? !0
            : (o("WALogger")
                .ERROR(
                  De ||
                    (De = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV:switchDevice] missing capture implementation or audio buffer",
                    ])),
                )
                .sendLogs(
                  "voip: switchDevice missing capture implementation or audio buffer",
                ),
              !1);
        }),
        (t.$36 = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var e = this.implementation;
            e != null &&
              (yield e.stopAudioCapture(),
              o("WALogger").LOG(
                xe ||
                  (xe = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:switchDevice] stopped audio capture implementation",
                  ])),
              ));
          });
          function t() {
            return e.apply(this, arguments);
          }
          return t;
        })()),
        (t.$37 = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            var t = this.$32();
            return (
              this.$9(!1),
              yield this.$36(),
              this.$17(),
              this.$30({
                audioContext: t.audioContext,
                audioStream: t.audioStream,
                logContext: "old",
                mediaStreamSource: t.mediaStreamSource,
              }),
              this.$33(t),
              yield new (Ye || (Ye = n("Promise")))(function (e) {
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
        (t.$38 = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var e = this.implementation;
            if (e != null)
              try {
                yield e.stopAudioCapture();
              } catch (e) {
                o("WALogger").WARN(
                  $e ||
                    ($e = babelHelpers.taggedTemplateLiteralLoose([
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
        (t.$39 = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* (e, t, n, r, a) {
              if (t == null || n == null) {
                (o("WALogger").WARN(
                  Pe ||
                    (Pe = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV:switchDevice] cannot rollback context recreation; previous capture graph is missing",
                    ])),
                ),
                  this.$7());
                return;
              }
              try {
                if (
                  (et(t), yield this.$26(t, n, e), a !== this.captureGeneration)
                ) {
                  (o("WALogger").LOG(
                    Ne ||
                      (Ne = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:switchDevice] capture torn down during rollback; leaving the restored graph to cleanup",
                      ])),
                  ),
                    yield this.$38());
                  return;
                }
                ((this.audioContext = t),
                  (this.mediaStreamSource = n),
                  r != null
                    ? (this.$15(r), this.$8(t, r, "rollback"))
                    : this.$3() &&
                      (o("WALogger").WARN(
                        Me ||
                          (Me = babelHelpers.taggedTemplateLiteralLoose([
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
                    we ||
                      (we = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:switchDevice] rolled back to previous capture graph after context recreation failure",
                      ])),
                  ));
              } catch (e) {
                (o("WALogger")
                  .ERROR(
                    Ae ||
                      (Ae = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:switchDevice] rollback to previous capture graph failed: ",
                        "",
                      ])),
                    e,
                  )
                  .sendLogs(
                    "voip: switchDevice context recreation rollback failed",
                  ),
                  this.$7());
              }
            },
          );
          function t(t, n, r, o, a) {
            return e.apply(this, arguments);
          }
          return t;
        })()),
        (t.$21 = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* (e, t, n, r, a) {
              var i = this;
              o("WALogger").LOG(
                Fe ||
                  (Fe = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:switchDevice] Starting context recreation for device: ",
                    "",
                  ])),
                e.slice(0, 8),
              );
              var l = this.captureParams;
              if (!l)
                return (
                  o("WALogger").ERROR(
                    Oe ||
                      (Oe = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:switchDevice] capture parameters are null",
                      ])),
                  ),
                  !1
                );
              if (tt(t))
                return (
                  o("WALogger").LOG(
                    Be ||
                      (Be = babelHelpers.taggedTemplateLiteralLoose([
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
                  return i.$34(t, h);
                },
                C = function () {
                  return i.$31(
                    { audioContext: s, mediaStreamSource: c, audioStream: u },
                    g,
                  );
                };
              try {
                if (
                  ((s = this.$24(t)),
                  !this.$35() || (!n && ((g = !0), !(yield this.$37(y)))))
                )
                  return C();
                if (
                  ((u = yield this.$25({
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
                            We ||
                              (We = babelHelpers.taggedTemplateLiteralLoose([
                                "voip: [AV:switchDevice] failed to acquire new audio stream",
                              ])),
                          )
                          .sendLogs(
                            "voip: switchDevice context recreation stream acquisition failed",
                          )
                      : o("WALogger")
                          .ERROR(
                            qe ||
                              (qe = babelHelpers.taggedTemplateLiteralLoose([
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
                    Ue ||
                      (Ue = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:switchDevice] acquired new audio stream before stopping current capture",
                      ])),
                  ),
                  !y("stream acquisition") ||
                    ((c = s.createMediaStreamSource(u)),
                    (d = this.audioContext),
                    (m = this.mediaStreamSource),
                    (p = this.audioStream),
                    n && (this.$9(!1), (g = !0), yield this.$36(), (_ = !0)),
                    !y("capture stop")))
                )
                  return C();
                if (
                  (et(s),
                  yield this.$26(s, c, l),
                  o("WALogger").LOG(
                    Ve ||
                      (Ve = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:switchDevice] restarted audio capture implementation",
                      ])),
                  ),
                  !y("replacement capture start"))
                )
                  return (yield this.$38(), C());
                if (
                  (this.$17(),
                  (this.audioContext = s),
                  (this.mediaStreamSource = c),
                  this.$15(u),
                  (f = !0),
                  this.$8(s, u, r),
                  o("WALogger").LOG(
                    He ||
                      (He = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:switchDevice] created new media stream source from new stream",
                      ])),
                  ),
                  n)
                )
                  try {
                    this.$30({
                      audioContext: d,
                      audioStream: p,
                      logContext: "old",
                      mediaStreamSource: m,
                    });
                  } catch (e) {
                    o("WALogger").WARN(
                      Ge ||
                        (Ge = babelHelpers.taggedTemplateLiteralLoose([
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
                      e,
                    ));
                } catch (e) {
                  o("WALogger").WARN(
                    ze ||
                      (ze = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:switchDevice] device selection update failed after context recreation: ",
                        "",
                      ])),
                    e,
                  );
                }
                return (
                  o("WALogger").LOG(
                    je ||
                      (je = babelHelpers.taggedTemplateLiteralLoose([
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
                      Ke ||
                        (Ke = babelHelpers.taggedTemplateLiteralLoose([
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
                        Qe ||
                          (Qe = babelHelpers.taggedTemplateLiteralLoose([
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
                  _ ? (this.$22(s, c, u), yield this.$39(l, d, m, p, h)) : C();
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
                Xe ||
                  (Xe = babelHelpers.taggedTemplateLiteralLoose([
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
    ((l.scheduleCallEndMicRelease = o(
      "WAWebVoipMicStreamBackstop",
    ).scheduleCallEndMicRelease),
      (l.WAWebVoipAudioCaptureBase = at));
  },
  98,
);
