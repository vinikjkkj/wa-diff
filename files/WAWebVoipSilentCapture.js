__d(
  "WAWebVoipSilentCapture",
  [
    "WALogger",
    "WAWebAudioDeviceManager",
    "WAWebMediaPermissionsUtils",
    "WAWebNoop",
    "WAWebUA",
    "WAWebVoipCallAudioUnlock",
    "WAWebVoipMicrophoneLevelAccumulator",
    "WAWebVoipSharedCallAudioContext",
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
      g = 7629627368999298e-20,
      h = new Set(["default", "communications"]),
      y = 2,
      C = new WeakMap(),
      b = new WeakMap(),
      v = null,
      S = new WeakMap();
    async function R() {
      var e = await Promise.all([
          o("WAWebMediaPermissionsUtils").queryMediaPermissionStateStrict(
            "microphone",
          ),
          o("WAWebAudioDeviceManager").selectAudioDevice(),
        ]),
        t = e[0],
        n = e[1];
      return { missingReason: M() ? "hand-off" : L(t, n), selectedDeviceId: n };
    }
    function L(e, t) {
      return e === "denied" || e === "prompt"
        ? e
        : t == null
          ? "no-device"
          : null;
    }
    function E(t) {
      var n, r;
      if (o("WAWebUA").UA.isFirefox) {
        var a = new AudioContext({ latencyHint: "interactive" });
        return (
          o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                `voip: [AV:initCaptureDriver] Firefox detected; system sample rate:
      `,
                "Hz, VoIP expects ",
                "Hz",
              ])),
            a.sampleRate,
            t.sampleRate,
          ),
          a
        );
      }
      return (n =
        (r = o("WAWebVoipSharedCallAudioContext").acquireSharedCallAudioContext(
          "capture",
          t.sampleRate,
        )) != null
          ? r
          : o("WAWebVoipCallAudioUnlock").takeUnlockedAudioContext(
              "capture",
              t.sampleRate,
            )) != null
        ? n
        : new AudioContext({
            sampleRate: t.sampleRate,
            latencyHint: "interactive",
          });
    }
    function k(e, t) {
      var n = E(e);
      try {
        var a = n.createConstantSource();
        return (
          (a.offset.value = g),
          a.start(),
          t != null &&
            (b.set(a, t),
            C.set(
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
        throw (
          o("WAWebVoipSharedCallAudioContext").releaseSharedCallAudioContext(
            "capture",
            n,
          ) || n.close().catch(r("WAWebNoop")),
          e
        );
      }
    }
    function I(e) {
      var t;
      ((t = C.get(e)) == null || t(), C.delete(e));
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
    function T(e) {
      if (e != null) {
        var t;
        (t = b.get(e)) == null || t();
      }
    }
    function D(e, t) {
      S.set(e, t);
    }
    function x(e, t) {
      var n = e.audioStream,
        r = n != null && !h.has(t) && S.get(n) === t && e.hasLiveAudioTrack();
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
    function $(e, t) {
      var n = { handOff: e, isCallCurrent: t };
      v = n;
      var r = function () {
        v === n && (v = null);
      };
      e.then(r, r);
    }
    async function P(e) {
      if (e != null) return !0;
      if (M())
        return (
          o("WALogger").LOG(
            m ||
              (m = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [AV:switchDevice] skipped while capturing silence, a granted microphone is being handed over",
              ])),
          ),
          !1
        );
      var t = await o(
        "WAWebMediaPermissionsUtils",
      ).queryMediaPermissionStateStrict("microphone");
      return t === "denied" || t === "prompt"
        ? (o("WALogger").LOG(
            p ||
              (p = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [AV:switchDevice] skipped while capturing silence, microphone permission ",
                "",
              ])),
            t,
          ),
          !1)
        : !0;
    }
    var N = (function () {
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
            if (n < y) {
              this.$2 = n;
              return;
            }
            ((this.$2 = null),
              o("WALogger").LOG(
                _ ||
                  (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV] microphone delivering audio after silence",
                  ])),
              ));
            try {
              var a;
              (a = this.$1) == null || a.call(this);
            } catch (e) {
              o("WALogger")
                .ERROR(
                  f ||
                    (f = babelHelpers.taggedTemplateLiteralLoose([
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
    function M() {
      var e;
      return ((e = v) == null ? void 0 : e.isCallCurrent()) === !0;
    }
    ((l.findMicrophone = R),
      (l.getMissingMicrophoneReason = L),
      (l.createCaptureAudioContext = E),
      (l.createSilentCaptureGraph = k),
      (l.stopSilentSource = I),
      (l.retrySwitchFromSilence = T),
      (l.markGrantedMicrophoneStream = D),
      (l.isLiveOnGrantedMicrophone = x),
      (l.holdSilenceSwitchesUntil = $),
      (l.isMicrophoneSwitchAllowedWhileSilent = P),
      (l.AudioAfterSilenceWatch = N));
  },
  98,
);
