__d(
  "WAWebVoipSilentCapture",
  [
    "Promise",
    "WALogger",
    "WAWebAudioDeviceManager",
    "WAWebMediaPermissionsUtils",
    "WAWebNoop",
    "WAWebUA",
    "WAWebVoipCallAudioUnlock",
    "WAWebVoipMicrophoneLevelAccumulator",
    "asyncToGeneratorRuntime",
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
      h = 7629627368999298e-20,
      y = new Set(["default", "communications"]),
      C = 2,
      b = new WeakMap(),
      v = new WeakMap(),
      S = null,
      R = new WeakMap();
    function L() {
      return E.apply(this, arguments);
    }
    function E() {
      return (
        (E = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield (g || (g = n("Promise"))).all([
              o("WAWebMediaPermissionsUtils").queryMediaPermissionStateStrict(
                "microphone",
              ),
              o("WAWebAudioDeviceManager").selectAudioDevice(),
            ]),
            t = e[0],
            r = e[1];
          return {
            missingReason: O() ? "hand-off" : k(t, r),
            selectedDeviceId: r,
          };
        })),
        E.apply(this, arguments)
      );
    }
    function k(e, t) {
      return e === "denied" || e === "prompt"
        ? e
        : t == null
          ? "no-device"
          : null;
    }
    function I(t) {
      var n;
      if (o("WAWebUA").UA.isFirefox) {
        var r = new AudioContext({ latencyHint: "interactive" });
        return (
          o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [AV:initCaptureDriver] Firefox detected; system sample rate:\n      ",
                "Hz, VoIP expects ",
                "Hz",
              ])),
            r.sampleRate,
            t.sampleRate,
          ),
          r
        );
      }
      return (n = o("WAWebVoipCallAudioUnlock").takeUnlockedAudioContext(
        "capture",
        t.sampleRate,
      )) != null
        ? n
        : new AudioContext({
            sampleRate: t.sampleRate,
            latencyHint: "interactive",
          });
    }
    function T(e, t) {
      var n = I(e);
      try {
        var a = n.createConstantSource();
        return (
          (a.offset.value = h),
          a.start(),
          t != null &&
            (v.set(a, t),
            b.set(
              a,
              o("WAWebMediaPermissionsUtils").watchMediaPermissionState(
                "microphone",
                function (e) {
                  e === "granted" &&
                    (o("WALogger").LOG(
                      s ||
                        (s = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [AV] microphone allowed while capturing silence",
                        ])),
                    ),
                    t());
                },
              ),
            )),
          { audioContext: n, silentSource: a }
        );
      } catch (e) {
        throw (n.close().catch(r("WAWebNoop")), e);
      }
    }
    function D(e) {
      var t;
      ((t = b.get(e)) == null || t(), b.delete(e));
      try {
        (e.disconnect(),
          e.stop(),
          o("WALogger").LOG(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [AV] stopped capturing silence",
              ])),
          ));
      } catch (e) {
        o("WALogger")
          .WARN(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [AV] stopping the silent capture source failed",
              ])),
          )
          .catching(r("getErrorSafe")(e));
      }
    }
    function x(e) {
      if (e != null) {
        var t;
        (t = v.get(e)) == null || t();
      }
    }
    function $(e, t) {
      R.set(e, t);
    }
    function P(e, t) {
      var n = e.audioStream,
        r = n != null && !y.has(t) && R.get(n) === t && e.hasLiveAudioTrack();
      return (
        r &&
          o("WALogger").LOG(
            d ||
              (d = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [AV] already live on the granted microphone ",
                ", not switching",
              ])),
            t.slice(0, 8),
          ),
        r
      );
    }
    function N(e, t) {
      var n = { handOff: e, isCallCurrent: t };
      S = n;
      var r = function () {
        S === n && (S = null);
      };
      e.then(r, r);
    }
    function M() {
      S = null;
    }
    function w(e) {
      return A.apply(this, arguments);
    }
    function A() {
      return (
        (A = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (e != null) return !0;
          if (O())
            return (
              o("WALogger").LOG(
                _ ||
                  (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:switchDevice] skipped while capturing silence, a granted microphone is being handed over",
                  ])),
              ),
              !1
            );
          var t = yield o(
            "WAWebMediaPermissionsUtils",
          ).queryMediaPermissionStateStrict("microphone");
          return t === "denied" || t === "prompt"
            ? (o("WALogger").LOG(
                f ||
                  (f = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:switchDevice] skipped while capturing silence, microphone permission ",
                    "",
                  ])),
                t,
              ),
              !1)
            : !0;
        })),
        A.apply(this, arguments)
      );
    }
    var F = (function () {
      function e(e) {
        ((this.$2 = null), (this.$1 = e));
      }
      var t = e.prototype;
      return (
        (t.watchStream = function (t) {
          (t || this.$2 != null) && (this.$2 = 0);
        }),
        (t.stop = function () {
          this.$2 = null;
        }),
        (t.countLevel = function (t) {
          var e = this.$2;
          if (e != null) {
            var n =
              t > o("WAWebVoipMicrophoneLevelAccumulator").SILENCE_RMS_DBFS
                ? e + 1
                : 0;
            if (n < C) {
              this.$2 = n;
              return;
            }
            ((this.$2 = null),
              o("WALogger").LOG(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV] microphone delivering audio after silence",
                  ])),
              ));
            try {
              var a;
              (a = this.$1) == null || a.call(this);
            } catch (e) {
              o("WALogger")
                .ERROR(
                  p ||
                    (p = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV] handling microphone audio after silence failed",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("voip-mic-audio-after-silence-failed");
            }
          }
        }),
        e
      );
    })();
    function O() {
      var e;
      return ((e = S) == null ? void 0 : e.isCallCurrent()) === !0;
    }
    ((l.findMicrophone = L),
      (l.getMissingMicrophoneReason = k),
      (l.createCaptureAudioContext = I),
      (l.createSilentCaptureGraph = T),
      (l.stopSilentSource = D),
      (l.retrySwitchFromSilence = x),
      (l.markGrantedMicrophoneStream = $),
      (l.isLiveOnGrantedMicrophone = P),
      (l.holdSilenceSwitchesUntil = N),
      (l.releaseSilenceSwitchHoldForTesting = M),
      (l.isMicrophoneSwitchAllowedWhileSilent = w),
      (l.AudioAfterSilenceWatch = F));
  },
  98,
);
