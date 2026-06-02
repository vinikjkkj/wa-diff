__d(
  "WAWebVoipAudioCaptureAndPlayback",
  [
    "WALogger",
    "WAPromiseDelays",
    "WAResolvable",
    "WAWebABProps",
    "WAWebAudioDeviceManager",
    "WAWebAudioUtility",
    "WAWebBoolFunc",
    "WAWebVoipAudioCaptureBase",
    "WAWebVoipAudioPlaybackBase",
    "WAWebVoipAudioPlaybackState",
    "WAWebVoipOperationQueue",
    "WAWebVoipPopoutWindowState",
    "WAWebVoipVirtualAudioCaptureDriver",
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
      R = null,
      L = null,
      E = null,
      k = !1,
      I = 0,
      T = new (o("WAResolvable").Resolvable)();
    function D() {
      return ((k = !1), I++, (T = new (o("WAResolvable").Resolvable)()), I);
    }
    function x(e, t) {
      (t === void 0 && (t = I), t === I && ((k = e), T.resolve(e)));
    }
    function $() {
      return (T.resolve(!1), D());
    }
    function P(e) {
      e === I && (T.resolve(!1), D());
    }
    function N() {
      var e, t;
      return (e =
        (t = E) == null ? void 0 : t.getEstimatedOutputLagSamples()) != null
        ? e
        : 0;
    }
    async function M(e) {
      return k
        ? !0
        : await o("WAPromiseDelays").withTimeout(
            T.promise,
            e,
            o("WAWebBoolFunc").returnFalse,
          );
    }
    var w = new (o("WAWebVoipOperationQueue").WAWebVoipOperationQueue)(
        "AudioCapture",
      ),
      A = new (o("WAWebVoipOperationQueue").WAWebVoipOperationQueue)(
        "AudioPlayback",
      ),
      F = !1;
    function O() {
      return (
        o("WAWebABProps").getABPropConfigValue(
          "enable_web_voip_virtual_audio_capture_driver",
        ) === !0
      );
    }
    async function B(t) {
      var n = t.deviceId,
        r = t.targetWindow;
      o("WALogger").LOG(
        e ||
          (e = babelHelpers.taggedTemplateLiteralLoose([
            "voip: [AV] requestAudioReacquisition: ",
            "",
          ])),
        n,
      );
      try {
        var a = await X(n, r, !0);
        a
          ? o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [AV] audio re-acquisition completed",
                ])),
            )
          : o("WALogger").WARN(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [AV] audio re-acquisition failed",
                ])),
            );
      } catch (e) {
        o("WALogger")
          .ERROR(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [AV] audio re-acquisition error: ",
                "",
              ])),
            e,
          )
          .sendLogs("voip: audio re-acquisition failed");
      }
    }
    function W() {
      F ||
        (o("WAWebVoipPopoutWindowState").WAWebVoipUiPopoutWindowEventEmitter.on(
          "requestAudioReacquisition",
          B,
        ),
        (F = !0));
    }
    function q() {
      var e,
        t,
        n,
        r = (e = R) == null ? void 0 : e.captureParams;
      return {
        sampleRate: (t = r == null ? void 0 : r.sampleRate) != null ? t : 16e3,
        framesPerChunk:
          (n = r == null ? void 0 : r.framesPerChunk) != null ? n : 320,
      };
    }
    async function U(e) {
      e.device_type !==
        o("WAWebAudioUtility").AudioCaptureDevType.kInternalAudio &&
        (W(),
        w.enqueue(async function () {
          if (O()) {
            (o("WALogger").LOG(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [VirtualAudioCapture] Creating virtual audio capture driver",
                ])),
            ),
              L != null && (await L.stopCapture()),
              (L = new (o(
                "WAWebVoipVirtualAudioCaptureDriver",
              ).WAWebVoipVirtualAudioCaptureDriver)()),
              await L.initCaptureDriver(e));
            return;
          }
          (R == null &&
            (R = new (o(
              "WAWebVoipAudioCaptureBase",
            ).WAWebVoipAudioCaptureBase)()),
            await R.initCaptureDriver(e));
        }, "initCaptureDriver"));
    }
    async function V(e) {
      (e == null ? void 0 : e.device_type) !==
        o("WAWebAudioUtility").AudioCaptureDevType.kInternalAudio &&
        w.enqueue(async function () {
          var e;
          if (L != null) {
            await L.startCapture();
            return;
          }
          if (R == null) {
            o("WALogger")
              .ERROR(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:startCaptureJS] capture instance is null. Call initCaptureDriverJS first.",
                  ])),
              )
              .sendLogs("voip: capture instance is null");
            return;
          }
          await R.startCapture();
          var t = (e = E) == null ? void 0 : e.playbackAudioContext;
          if (t != null && t.state === "suspended")
            try {
              (await t.resume(),
                o("WALogger").LOG(
                  p ||
                    (p = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV:startCaptureJS] Also resumed playback AudioContext",
                    ])),
                ));
            } catch (e) {
              o("WALogger").WARN(
                _ ||
                  (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:startCaptureJS] Failed to resume playback AudioContext: ",
                    "",
                  ])),
                e,
              );
            }
        }, "startCapture");
    }
    async function H(e) {
      (e == null ? void 0 : e.device_type) !==
        o("WAWebAudioUtility").AudioCaptureDevType.kInternalAudio &&
        w.enqueue(async function () {
          if (L != null) {
            (await L.stopCapture(), (L = null));
            return;
          }
          if (R == null) {
            o("WALogger").WARN(
              f ||
                (f = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [AV:stopCaptureJS] capture instance is null, nothing to stop.",
                ])),
            );
            return;
          }
          (await R.stopCapture(), (R = null));
        }, "stopCapture");
    }
    async function G(e) {
      var t = $();
      A.enqueue(async function () {
        t === I &&
          (E == null &&
            (E = new (o(
              "WAWebVoipAudioPlaybackBase",
            ).WAWebVoipAudioPlaybackBase)()),
          (j = null),
          await E.initPlaybackDriver(e),
          t === I &&
            o("WAWebVoipAudioPlaybackState").updatePlaybackSampleRate(
              e.sample_rate,
            ));
      }, "initPlaybackDriver");
    }
    async function z() {
      var e = I;
      A.enqueue(async function () {
        if (e === I) {
          if (E == null) {
            (x(!1, e),
              o("WALogger")
                .ERROR(
                  g ||
                    (g = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV:startPlaybackJS] playback instance is null. Call initPlaybackDriverJS first.",
                    ])),
                )
                .sendLogs("voip: playback instance is null"));
            return;
          }
          try {
            (await E.startPlayback(), x(!0, e));
          } catch (t) {
            throw (x(!1, e), t);
          }
        }
      }, "startPlayback");
    }
    var j = null;
    function K() {
      if (E != null) return E.consumeAudioPlaybackMetrics();
      var e = j;
      return ((j = null), e);
    }
    async function Q() {
      var e = I;
      A.enqueue(async function () {
        var t = E;
        if (t == null) {
          (P(e),
            o("WALogger").WARN(
              h ||
                (h = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [AV:stopPlaybackJS] playback instance is null, nothing to stop.",
                ])),
            ));
          return;
        }
        j = t.consumeAudioPlaybackMetrics();
        try {
          await t.stopPlayback();
        } finally {
          (P(e),
            (E = null),
            o("WAWebVoipAudioPlaybackState").updatePlaybackSampleRate(null));
        }
      }, "stopPlayback");
    }
    async function X(e, t, n) {
      var r = new (o("WAResolvable").Resolvable)();
      return (
        w.enqueue(async function () {
          try {
            if (L != null) {
              (o("WALogger").LOG(
                y ||
                  (y = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:switchAudioInputDevice] virtual capture active, ignoring device switch",
                  ])),
              ),
                r.resolve(!0));
              return;
            }
            if (R == null) {
              (o("WALogger").ERROR(
                C ||
                  (C = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:switchAudioDevice] capture instance is null.",
                  ])),
              ),
                r.resolve(!1));
              return;
            }
            var a = await R.switchDevice(e, t, n);
            r.resolve(a);
          } catch (e) {
            (o("WALogger")
              .ERROR(
                b ||
                  (b = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:switchAudioInputDevice] failed: ",
                    "",
                  ])),
                e,
              )
              .sendLogs("voip: switchAudioInputDevice failed"),
              r.resolve(!1));
          }
        }, "switchInputDevice"),
        r.promise
      );
    }
    async function Y(e) {
      var t = new (o("WAResolvable").Resolvable)();
      return (
        A.enqueue(async function () {
          try {
            if (E == null) {
              (o("WALogger").WARN(
                v ||
                  (v = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:switchAudioOutputDevice] playback instance is null, saving preference only",
                  ])),
              ),
                o("WAWebAudioDeviceManager").saveAudioOutputDevicePreference(
                  e,
                  "AV:switchAudioOutputDevice",
                ),
                t.resolve(!1));
              return;
            }
            var n = await E.switchOutputDevice(e);
            t.resolve(n);
          } catch (e) {
            (o("WALogger")
              .ERROR(
                S ||
                  (S = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:switchAudioOutputDevice] failed: ",
                    "",
                  ])),
                e,
              )
              .sendLogs("voip: switchAudioOutputDevice failed"),
              t.resolve(!1));
          }
        }, "switchOutputDevice"),
        t.promise
      );
    }
    ((l.getPlaybackSampleRate = o(
      "WAWebVoipAudioPlaybackState",
    ).getPlaybackSampleRate),
      (l.getEstimatedPlaybackOutputLagSamples = N),
      (l.waitForPlaybackStart = M),
      (l.getCaptureParams = q),
      (l.initCaptureDriverJS = U),
      (l.startCaptureJS = V),
      (l.stopCaptureJS = H),
      (l.initPlaybackDriverJS = G),
      (l.startPlaybackJS = z),
      (l.consumeAudioPlaybackMetrics = K),
      (l.stopPlaybackJS = Q),
      (l.switchAudioInputDevice = X),
      (l.switchAudioOutputDevice = Y));
  },
  98,
);
