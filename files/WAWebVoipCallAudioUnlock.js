__d(
  "WAWebVoipCallAudioUnlock",
  ["WALogger", "WAWebUA", "getErrorSafe"],
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
      f = 16e3,
      g = 6e4,
      h = null,
      y = null;
    function C() {
      h = o("WAWebUA").UA.isWebkit ? new Audio() : null;
    }
    function b() {
      var t = h != null ? h : new Audio();
      v();
      var n = T(t);
      n != null &&
        ((y = n),
        N(n).catch(function (t) {
          o("WALogger")
            .WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [AV] starting call audio at the click failed",
                ])),
            )
            .catching(r("getErrorSafe")(t));
        }));
    }
    function v() {
      ((h = null), P());
    }
    function S(e, t) {
      var n = y,
        r = n == null ? void 0 : n[e];
      return n == null || r == null
        ? null
        : r.sampleRate !== t
          ? (o("WALogger").WARN(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [AV] not using the ",
                  " audio started at the click, it runs at ",
                  "Hz and the call at ",
                  "Hz",
                ])),
              e,
              r.sampleRate,
              t,
            ),
            null)
          : ((n[e] = null),
            M(n),
            o("WALogger").LOG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [AV] using the ",
                  " audio started at the click",
                ])),
              e,
            ),
            r);
    }
    function R() {
      var e = y,
        t = e == null ? void 0 : e.playbackElement;
      return e == null || t == null
        ? null
        : ((e.playbackElement = null),
          M(e),
          o("WALogger").LOG(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [AV] playing through the audio element created at the click",
              ])),
          ),
          t);
    }
    function L() {
      var e;
      return (e = R()) != null ? e : new Audio();
    }
    function E() {
      var e, t, n;
      if (((e = y) == null ? void 0 : e.isStarted) === !0) return !0;
      var r =
          ((t = navigator.userActivation) == null ? void 0 : t.isActive) === !0,
        a =
          ((n = navigator.userActivation) == null
            ? void 0
            : n.hasBeenActive) === !0;
      return (o("WAWebUA").UA.isBlink ? a : r)
        ? !0
        : (o("WALogger").LOG(
            d ||
              (d = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [AV] the page can't start call audio without a microphone, recent click=",
                ", clicked since load=",
                "",
              ])),
            String(r),
            String(a),
          ),
          !1);
    }
    function k() {
      o("WAWebUA").UA.isWebkit && (C(), b());
    }
    function I() {
      var e = y;
      e != null &&
        (self.clearTimeout(e.releaseTimeoutId), (e.releaseTimeoutId = $()));
    }
    function T(e) {
      var t = null;
      try {
        return (
          (t = D()),
          {
            capture: t,
            isStarted: !1,
            playback: D(),
            playbackElement: e,
            releaseTimeoutId: $(),
          }
        );
      } catch (e) {
        return (
          x(t),
          o("WALogger")
            .WARN(
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [AV] creating call audio at the click failed",
                ])),
            )
            .catching(r("getErrorSafe")(e)),
          null
        );
      }
    }
    function D() {
      return new AudioContext({ sampleRate: f, latencyHint: "interactive" });
    }
    function x(e) {
      e == null ||
        e.close().catch(function (e) {
          o("WALogger")
            .WARN(
              p ||
                (p = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [AV] closing call audio started at the click failed",
                ])),
            )
            .catching(r("getErrorSafe")(e));
        });
    }
    function $() {
      return self.setTimeout(P, g);
    }
    function P() {
      var e = y;
      e != null &&
        ((y = null),
        self.clearTimeout(e.releaseTimeoutId),
        x(e.capture),
        x(e.playback));
    }
    async function N(e) {
      var t = e.capture,
        n = e.playback;
      (await Promise.all([
        t == null ? void 0 : t.resume(),
        n == null ? void 0 : n.resume(),
      ]),
        (e.isStarted = !0),
        o("WALogger").LOG(
          _ ||
            (_ = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [AV] started call audio at the click",
            ])),
        ));
    }
    function M(e) {
      e.capture == null &&
        e.playback == null &&
        e.playbackElement == null &&
        (self.clearTimeout(e.releaseTimeoutId), (y = null));
    }
    ((l.prepareCallAudioElement = C),
      (l.unlockCallAudio = b),
      (l.releaseCallAudioUnlock = v),
      (l.takeUnlockedAudioContext = S),
      (l.takeUnlockedPlaybackElement = R),
      (l.createCallPlaybackElement = L),
      (l.canStartCallAudio = E),
      (l.startCallAudioInClick = k),
      (l.holdUnlockedCallAudio = I));
  },
  98,
);
