__d(
  "WAWebVoipAudioCaptureBase",
  [
    "$InternalEnum",
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
    "WAWebVoipSharedCallAudioContext",
    "WAWebVoipSilentCapture",
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
      Ye = 3,
      Je = { event: "queued", recovery: "recovery" },
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
      if (e === "recovery") {
        o("WALogger")
          .ERROR(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [MicInput] queued device recovery failed",
              ])),
          )
          .catching(r("getErrorSafe")(t))
          .tags("non-sad")
          .sendLogs("voip-mic-input-device-recovery-failed");
        return;
      }
      o("WALogger")
        .ERROR(
          d ||
            (d = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [AV:AudioCaptureDeviceChangeHandler] ",
              " device change failed",
            ])),
          e,
        )
        .catching(r("getErrorSafe")(t))
        .sendLogs("voip-mic-device-change-failed");
    }
    function at(e, t) {
      return e
        ? "capture-handoff"
        : t
          ? "automatic-device-switch"
          : "manual-device-switch";
    }
    var it = (function () {
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
            !o("WAWebVoipMicrophoneHealthPresence").canRecoverMicrophone() ||
            ((this.hasUnrecoveredTrackEnd = !1),
            o("WALogger").LOG(
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
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
                p ||
                  (p = babelHelpers.taggedTemplateLiteralLoose([
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
                      _ ||
                        (_ = babelHelpers.taggedTemplateLiteralLoose([
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
                        ).canRecoverMicrophone()
                          ? i.$4()
                          : (i.hasUnrecoveredTrackEnd = !0)));
                  },
                });
              ((this.microphoneTrackObserver = d),
                d.start(),
                o("WALogger").LOG(
                  f ||
                    (f = babelHelpers.taggedTemplateLiteralLoose([
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
                  g ||
                    (g = babelHelpers.taggedTemplateLiteralLoose([
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
        (t.$10 = async function () {
          var e = this.captureGeneration,
            t = await o("WAWebAudioDeviceManager").selectAudioDevice(
              void 0,
              void 0,
              !0,
            );
          return e !== this.captureGeneration
            ? (o("WALogger").LOG(
                h ||
                  (h = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:AudioCaptureDeviceChangeHandler] capture restarted during device selection; dropping the change",
                  ])),
              ),
              !1)
            : t == null
              ? (o("WALogger").WARN(
                  y ||
                    (y = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV:AudioCaptureDeviceChangeHandler] Device change detected, newDeviceId is null",
                    ])),
                ),
                !1)
              : o("WAWebVoipSilentCapture").isLiveOnGrantedMicrophone(this, t)
                ? !0
                : (o("WALogger").LOG(
                    C ||
                      (C = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:AudioCaptureDeviceChangeHandler] Auto-switching to device: ",
                        "",
                      ])),
                    t,
                  ),
                  this.switchDevice(t, void 0, void 0, !0));
        }),
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
                    b ||
                      (b = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:AudioCaptureDeviceChangeHandler] re-running ",
                        " device change queued during switch",
                      ])),
                    t,
                  ),
                  e.$13(Je[t])));
            }
          };
          return (n.then(r, r), n);
        }),
        (t.$13 = function (t) {
          this.$11().catch(function (e) {
            ot(t, e);
          });
        }),
        (t.$12 = function () {
          return this.micRecoveryAttempts >= Ye
            ? (this.micRecoveryAttempts === Ye &&
                (this.micRecoveryAttempts++,
                o("WALogger")
                  .WARN(
                    v ||
                      (v = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [MicInput] recovery exhausted after ",
                        " automatic switches",
                      ])),
                    Ye,
                  )
                  .tags("non-sad")
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
                    S ||
                      (S = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [MicInput] device recovery did not switch devices",
                      ])),
                  );
              },
              function (e) {
                o("WALogger")
                  .ERROR(
                    R ||
                      (R = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [MicInput] device recovery failed",
                      ])),
                  )
                  .catching(r("getErrorSafe")(e))
                  .tags("non-sad")
                  .sendLogs("voip-mic-input-device-recovery-failed");
              },
            );
        }),
        (t.initCaptureDriver = async function (t) {
          var e = t.auto_gain_control,
            n = t.bits_per_sample,
            a = t.channels,
            i = t.frames_per_chunk,
            l = t.sample_rate;
          if (
            (o("WALogger").LOG(
              L ||
                (L = babelHelpers.taggedTemplateLiteralLoose([
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
              String(e !== !1),
            ),
            this.audioCaptureInitState !== Ze.Uninitialized)
          ) {
            (o("WALogger")
              .ERROR(
                E ||
                  (E = babelHelpers.taggedTemplateLiteralLoose([
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
          ((this.audioCaptureInitState = Ze.Initializing),
            (this.audioCaptureInitResolvable = new (o(
              "WAResolvable",
            ).Resolvable)()));
          var s = {
            sampleRate: l,
            channels: a,
            bitsPerSample: n,
            framesPerChunk: i,
            autoGainControl: e !== !1,
          };
          this.captureParams = s;
          try {
            await o("WAWebAudioUtility").initWasmModule();
            var u = await o("WAWebVoipSilentCapture").findMicrophone(),
              c = u.missingReason,
              d = u.selectedDeviceId;
            if (c != null && this.$14(s, c)) return;
            if (d == null) {
              var m;
              ((this.audioCaptureInitState = Ze.Error),
                (m = this.audioCaptureInitResolvable) == null ||
                  m.reject(r("err")("voip: [AV] No audio device selected.")));
              return;
            }
            o("WALogger").LOG(
              k ||
                (k = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [AV:initCaptureDriver] selected device: ",
                  "",
                ])),
              d,
            );
            var p = s;
            if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
              var _,
                f,
                g = await o("WAWebBackendApi").frontendSendAndReceive(
                  "voipAcquireMediaStream",
                  { type: "microphone", selectedDeviceId: d, params: p },
                );
              if (g == null)
                throw r("err")("Failed to get media stream from getUserMedia");
              var h = g.getTracks(),
                y = h.slice(0, 3);
              (o("WALogger").LOG(
                I ||
                  (I = babelHelpers.taggedTemplateLiteralLoose([
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
                  T ||
                    (T = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV:initCaptureDriver] granted mic permission and got audio stream",
                    ])),
                ),
                (this.audioContext = o(
                  "WAWebVoipSilentCapture",
                ).createCaptureAudioContext(p)),
                this.audioContext.state === "suspended" &&
                  o("WALogger").LOG(
                    D ||
                      (D = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:initCaptureDriver] AudioContext suspended - will resume when needed",
                      ])),
                  ));
              try {
                this.mediaStreamSource =
                  this.audioContext.createMediaStreamSource(g);
              } catch (e) {
                throw (
                  o("WALogger").ERROR(
                    x ||
                      (x = babelHelpers.taggedTemplateLiteralLoose([
                        `voip: [AV:initCaptureDriver] Failed to create MediaStreamSource:
            `,
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
                  this.implementation.preloadWorkletModule(this.audioContext),
                this.$16());
              var C = this.audioContext;
              (C != null && this.$8(C, g, "initial"),
                (this.audioCaptureInitState = Ze.Ready),
                (f = this.audioCaptureInitResolvable) == null || f.resolve());
            } else {
              var b;
              (o("WALogger")
                .ERROR(
                  $ ||
                    ($ = babelHelpers.taggedTemplateLiteralLoose([
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
                P ||
                  (P = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:initCaptureDriver] error: ",
                    "",
                  ])),
                e,
              )
              .sendLogs("voip: error in initCaptureDriver"),
              (this.audioCaptureInitState = Ze.Error),
              (v = this.audioCaptureInitResolvable) == null || v.reject(e),
              await this.cleanup());
          }
          o("WALogger").LOG(
            N ||
              (N = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [AV:initCaptureDriver] completed successfully",
              ])),
          );
        }),
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
                  M ||
                    (M = babelHelpers.taggedTemplateLiteralLoose([
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
              w ||
                (w = babelHelpers.taggedTemplateLiteralLoose([
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
                  A ||
                    (A = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV:hasLiveAudioTrack] failed to read microphone track state",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("voip-mic-readiness-track-state-read-fail"),
              !1
            );
          }
        }),
        (t.startCapture = async function (t) {
          var e;
          o("WALogger").LOG(
            F ||
              (F = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [AV:startCapture] start audio capture",
              ])),
          );
          var n = t != null ? t : o("WAWebBoolFunc").returnFalse;
          if ((await this.$18(n)) && !n()) {
            if (this.audioCaptureInitState !== Ze.Ready) {
              o("WALogger")
                .ERROR(
                  O ||
                    (O = babelHelpers.taggedTemplateLiteralLoose([
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
            var r =
              (e = this.mediaStreamSource) != null ? e : this.silentSource;
            if (!this.audioContext || r == null) {
              o("WALogger")
                .ERROR(
                  B ||
                    (B = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV:startCapture] audio context or media stream source is null",
                    ])),
                )
                .sendLogs("voip: audio context or media stream source is null");
              return;
            }
            var a = this.captureParams;
            if (!a) {
              o("WALogger")
                .ERROR(
                  W ||
                    (W = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV:startCapture] capture parameters are null",
                    ])),
                )
                .sendLogs("voip: capture parameters are null");
              return;
            }
            var i = this.audioContext;
            await this.$19(i, r, a, n);
          }
        }),
        (t.$18 = async function (t) {
          if (t()) return !1;
          if (this.audioCaptureInitState !== Ze.Initializing) return !0;
          try {
            var e;
            return (
              await ((e = this.audioCaptureInitResolvable) == null
                ? void 0
                : e.promise),
              !t()
            );
          } catch (e) {
            return t()
              ? (o("WALogger").LOG(
                  q ||
                    (q = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV:startCapture] cancelled after init error: ",
                      "",
                    ])),
                  e,
                ),
                !1)
              : (o("WALogger")
                  .ERROR(
                    U ||
                      (U = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:startCapture] error: ",
                        "",
                      ])),
                    e,
                  )
                  .sendLogs("voip: error in startCapture: ${error}"),
                !1);
          }
        }),
        (t.$19 = async function (t, n, r, a) {
          try {
            if (t.state === "suspended") {
              try {
                await o(
                  "WAWebVoipAudioContextResume",
                ).resumeCaptureAudioContext(t);
              } catch (e) {
                if (a()) {
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
              if (a()) return;
            }
            var e =
                r.framesPerChunk * r.channels * Float32Array.BYTES_PER_ELEMENT,
              i = await o("WAWebAudioUtility").mallocWasmBuffer(e);
            if (((this.audioBuffer = i), a())) {
              await this.$20(i);
              return;
            }
            if (
              this.implementation != null &&
              (await this.implementation.startAudioCapture({
                audioContext: t,
                mediaStreamSource: n,
                sampleRate: r.sampleRate,
                channels: r.channels,
                framesPerChunk: r.framesPerChunk,
                audioBuffer: i,
                isStartCancelled: a,
                onInputLevel: this.$5(),
              }),
              a())
            )
              return;
            o("WALogger").LOG(
              G ||
                (G = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [AV:startCapture] audio capture started successfully",
                ])),
            );
          } catch (e) {
            if (a()) {
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
              await this.cleanup());
          }
        }),
        (t.$20 = async function (t) {
          if (this.audioBuffer === t) {
            this.audioBuffer = null;
            try {
              (await o("WAWebAudioUtility").freeWasmBuffer(t),
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
        }),
        (t.stopCapture = async function (t) {
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
                    `voip: [AV:stopCapture] invalid initialization.
        State = `,
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
                  n,
                  a = 5e3,
                  i = null;
                await Promise.race([
                  (e =
                    (n = this.audioCaptureInitResolvable) == null
                      ? void 0
                      : n.promise) != null
                    ? e
                    : Promise.resolve(),
                  new Promise(function (e, t) {
                    i = window.setTimeout(function () {
                      t(
                        r("err")(
                          "voip: [AV:stopCapture] timed out waiting for init",
                        ),
                      );
                    }, a);
                  }),
                ]).finally(function () {
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
          return this.cleanup(t);
        }),
        (t.cleanup = async function (t) {
          (o("WALogger").LOG(
            te ||
              (te = babelHelpers.taggedTemplateLiteralLoose([
                "voip: cleanup audio capture",
              ])),
          ),
            this.captureGeneration++);
          try {
            var e, n;
            if (
              (this.$9(!0),
              (e = this.cancelDeviceChangeHandler) == null || e.call(this),
              (this.cancelDeviceChangeHandler = null),
              this.deviceChangeHandler != null)
            ) {
              var r;
              ((r = navigator.mediaDevices) == null ||
                r.removeEventListener("devicechange", this.deviceChangeHandler),
                (this.deviceChangeHandler = null));
            }
            if (
              ((this.automaticDeviceChangePromise = null),
              (this.pendingAutomaticDeviceChange = null),
              this.$1.stop(),
              this.$17(),
              await ((n = this.implementation) == null
                ? void 0
                : n.stopAudioCapture(void 0, { nativeStopped: t })),
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
              var a = this.audioStream.getTracks();
              (a.forEach(function (e) {
                e.stop();
              }),
                o("WALogger").LOG(
                  re ||
                    (re = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV:stopCapture] stopped ",
                      " tracks. Kinds: ",
                      "",
                    ])),
                  a.length,
                  a.slice(0, 3).map(function (e) {
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
              var i = this.audioContext;
              (!o(
                "WAWebVoipSharedCallAudioContext",
              ).releaseSharedCallAudioContext("capture", i) &&
                i.state !== "closed" &&
                i.close().catch(function (e) {
                  o("WALogger").LOG(
                    ae ||
                      (ae = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:cleanup] AudioContext close error (non-fatal): ",
                        "",
                      ])),
                    String(e),
                  );
                }),
                (this.audioContext = null));
            }
          } finally {
            if (this.audioBuffer != null) {
              var l = this.audioBuffer;
              await this.$20(l);
            }
            ((this.audioCaptureInitState = Ze.Uninitialized),
              o("WALogger").LOG(
                ie ||
                  (ie = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: cleanup finalized",
                  ])),
              ));
          }
        }),
        (t.switchDevice = async function (t, n, r, a, i) {
          var e = this;
          o("WALogger").LOG(
            le ||
              (le = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [AV:switchDevice] deviceId: ",
                ", forceContextRecreation: ",
                "",
              ])),
            t.slice(0, 8),
            String(r != null ? r : !1),
          );
          var l = at(r === !0, a === !0);
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
            !(await o(
              "WAWebVoipSilentCapture",
            ).isMicrophoneSwitchAllowedWhileSilent(i))
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
          var u = r === !0 || !document.hasFocus();
          if (o("WAWebUA").UA.isFirefox && n != null && u)
            return (
              o("WALogger").LOG(
                ce ||
                  (ce = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:switchDevice] Firefox context recreation needed, will recreate AudioContext in target window context",
                  ])),
              ),
              this.$21(t, n, n !== window, l, a)
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
            _ = await o(
              "WAWebAudioDeviceManager",
            ).switchAudioInputDeviceInternal({
              deviceId: t,
              captureParams: s,
              audioContext: c,
              targetWindow: n,
              isAutoSwitch: a,
              grantedStream: i,
              onStreamUpdate: function (n) {
                if (
                  p !== e.captureGeneration ||
                  e.audioCaptureInitState !== Ze.Ready
                ) {
                  (o("WALogger").WARN(
                    me ||
                      (me = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:switchDevice] capture stopped before the replacement stream arrived; releasing it",
                      ])),
                  ),
                    (m = !0),
                    e.$22(null, null, n));
                  return;
                }
                ((d = !0), e.$9(!1));
                var t = e.silentSource != null;
                try {
                  var r;
                  if (e.audioStream) {
                    var a = e.audioStream.getTracks();
                    (a.forEach(function (e) {
                      e.stop();
                    }),
                      o("WALogger").LOG(
                        pe ||
                          (pe = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: [AV:switchDevice] stopped ",
                            " tracks. Kinds: ",
                            "",
                          ])),
                        a.length,
                        a.slice(0, 3).map(function (e) {
                          return e.kind;
                        }),
                      ));
                  }
                  (e.mediaStreamSource &&
                    (e.mediaStreamSource.disconnect(),
                    o("WALogger").LOG(
                      _e ||
                        (_e = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [AV:switchDevice] disconnected media stream source",
                        ])),
                    )),
                    (e.mediaStreamSource =
                      (r = c == null ? void 0 : c.createMediaStreamSource(n)) !=
                      null
                        ? r
                        : null),
                    e.$15(n),
                    e.implementation != null &&
                      e.mediaStreamSource != null &&
                      e.implementation.reconnect(e.mediaStreamSource),
                    e.$17());
                } catch (t) {
                  throw (
                    e.$22(null, null, n),
                    (e.mediaStreamSource = null),
                    (e.audioStream = null),
                    t
                  );
                }
                (e.$8(c, n, l),
                  e.$1.watchStream(t),
                  o("WALogger").LOG(
                    fe ||
                      (fe = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:switchDevice] created new media stream source",
                      ])),
                  ));
              },
            });
          return m ? !1 : this.$23(_, d, t);
        }),
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
        (t.$25 = async function (t) {
          for (
            var e = t.audioContext,
              n = t.deviceId,
              r = t.params,
              a = t.targetWindow,
              i = 3,
              l = [0, 100, 200],
              s = 0,
              u = null,
              c = async function (i) {
                if (
                  ((s = i),
                  i > 0 &&
                    (await new Promise(function (e) {
                      return window.setTimeout(e, l[i]);
                    })),
                  (u = await o("WAWebBackendApi").frontendSendAndReceive(
                    "voipAcquireMediaStream",
                    {
                      type: "microphone",
                      selectedDeviceId: n,
                      params: babelHelpers.extends({}, r, {
                        sampleRate: e.sampleRate,
                      }),
                      targetWindow: a,
                      suppressErrorPopup: !0,
                    },
                  )),
                  u != null)
                )
                  return 1;
              },
              d = 0;
            d < i && !(await c(d));
            d++
          );
          return (
            s > 0 &&
              o("WALogger").LOG(
                Ce ||
                  (Ce = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:switchDevice] completed after ",
                    " retries with delays: ",
                    "ms",
                  ])),
                s,
                l.slice(1, s + 1),
              ),
            u
          );
        }),
        (t.$26 = async function (t, n, a) {
          var e = this.implementation,
            i = this.audioBuffer;
          if (e == null || i == null)
            throw r("err")(
              "voip: [AV:switchDevice] missing capture implementation or audio buffer",
            );
          await e.startAudioCapture({
            audioContext: t,
            mediaStreamSource: n,
            sampleRate: a.sampleRate,
            channels: a.channels,
            framesPerChunk: a.framesPerChunk,
            audioBuffer: i,
            isStartCancelled: o("WAWebBoolFunc").returnFalse,
            onInputLevel: this.$5(),
          });
        }),
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
        (t.$36 = async function () {
          var e = this.implementation;
          e != null &&
            (await e.stopAudioCapture(),
            o("WALogger").LOG(
              xe ||
                (xe = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [AV:switchDevice] stopped audio capture implementation",
                ])),
            ));
        }),
        (t.$37 = async function (t) {
          var e = this.$32();
          return (
            this.$9(!1),
            await this.$36(),
            this.$17(),
            this.$30({
              audioContext: e.audioContext,
              audioStream: e.audioStream,
              logContext: "old",
              mediaStreamSource: e.mediaStreamSource,
            }),
            this.$33(e),
            await new Promise(function (e) {
              return window.setTimeout(e, 200);
            }),
            t("current capture release")
          );
        }),
        (t.$38 = async function () {
          var e = this.implementation;
          if (e != null)
            try {
              await e.stopAudioCapture();
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
        }),
        (t.$39 = async function (t, n, r, a, i) {
          if (n == null || r == null) {
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
              (et(n), await this.$26(n, r, t), i !== this.captureGeneration)
            ) {
              (o("WALogger").LOG(
                Ne ||
                  (Ne = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:switchDevice] capture torn down during rollback; leaving the restored graph to cleanup",
                  ])),
              ),
                await this.$38());
              return;
            }
            ((this.audioContext = n),
              (this.mediaStreamSource = r),
              a != null
                ? (this.$15(a), this.$8(n, a, "rollback"))
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
        }),
        (t.$21 = async function (t, n, r, a, i) {
          var e = this;
          o("WALogger").LOG(
            Fe ||
              (Fe = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [AV:switchDevice] Starting context recreation for device: ",
                "",
              ])),
            t.slice(0, 8),
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
          if (tt(n))
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
            y = function (n) {
              return e.$34(n, h);
            },
            C = function () {
              return e.$31(
                { audioContext: s, mediaStreamSource: c, audioStream: u },
                g,
              );
            };
          try {
            if (
              ((s = this.$24(n)),
              !this.$35() || (!r && ((g = !0), !(await this.$37(y)))))
            )
              return C();
            if (
              ((u = await this.$25({
                audioContext: s,
                deviceId: t,
                params: l,
                targetWindow: n,
              })),
              !u)
            )
              return (
                r
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
                r && (this.$9(!1), (g = !0), await this.$36(), (_ = !0)),
                !y("capture stop")))
            )
              return C();
            if (
              (et(s),
              await this.$26(s, c, l),
              o("WALogger").LOG(
                Ve ||
                  (Ve = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:switchDevice] restarted audio capture implementation",
                  ])),
              ),
              !y("replacement capture start"))
            )
              return (await this.$38(), C());
            if (
              (this.$17(),
              (this.audioContext = s),
              (this.mediaStreamSource = c),
              this.$15(u),
              (f = !0),
              this.$8(s, u, a),
              o("WALogger").LOG(
                He ||
                  (He = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:switchDevice] created new media stream source from new stream",
                  ])),
              ),
              r)
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
              (i !== !0 &&
                o("WAWebUserPrefsVoip").setSelectedAudioInputDevice(t),
                o("WAWebAudioDeviceManager").AudioDeviceEvents.trigger(
                  "deviceSelectionChanged",
                  t,
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
                t.slice(0, 8),
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
                await this.cleanup();
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
            else _ ? (this.$22(s, c, u), await this.$39(l, d, m, p, h)) : C();
            return !1;
          }
        }),
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
      (l.WAWebVoipAudioCaptureBase = it));
  },
  98,
);
