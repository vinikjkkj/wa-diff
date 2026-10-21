__d(
  "WAWebVoipCallAudioUnlock",
  ["Promise", "WALogger", "WAWebUA", "asyncToGeneratorRuntime", "getErrorSafe"],
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
      g = 16e3,
      h = 6e4,
      y = null,
      C = null;
    function b() {
      y = o("WAWebUA").UA.isWebkit ? new Audio() : null;
    }
    function v() {
      var t = y != null ? y : new Audio();
      S();
      var n = D(t);
      n != null &&
        ((C = n),
        M(n).catch(function (t) {
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
    function S() {
      ((y = null), N());
    }
    function R(e, t) {
      var n = C,
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
            A(n),
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
    function L() {
      var e = C,
        t = e == null ? void 0 : e.playbackElement;
      return e == null || t == null
        ? null
        : ((e.playbackElement = null),
          A(e),
          o("WALogger").LOG(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [AV] playing through the audio element created at the click",
              ])),
          ),
          t);
    }
    function E() {
      var e;
      return (e = L()) != null ? e : new Audio();
    }
    function k() {
      var e, t, n;
      if (((e = C) == null ? void 0 : e.isStarted) === !0) return !0;
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
    function I() {
      o("WAWebUA").UA.isWebkit && (b(), v());
    }
    function T() {
      var e = C;
      e != null &&
        (self.clearTimeout(e.releaseTimeoutId), (e.releaseTimeoutId = P()));
    }
    function D(e) {
      var t = null;
      try {
        return (
          (t = x()),
          {
            capture: t,
            isStarted: !1,
            playback: x(),
            playbackElement: e,
            releaseTimeoutId: P(),
          }
        );
      } catch (e) {
        return (
          $(t),
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
    function x() {
      return new AudioContext({ sampleRate: g, latencyHint: "interactive" });
    }
    function $(e) {
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
    function P() {
      return self.setTimeout(N, h);
    }
    function N() {
      var e = C;
      e != null &&
        ((C = null),
        self.clearTimeout(e.releaseTimeoutId),
        $(e.capture),
        $(e.playback));
    }
    function M(e) {
      return w.apply(this, arguments);
    }
    function w() {
      return (
        (w = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.capture,
            r = e.playback;
          (yield (f || (f = n("Promise"))).all([
            t == null ? void 0 : t.resume(),
            r == null ? void 0 : r.resume(),
          ]),
            (e.isStarted = !0),
            o("WALogger").LOG(
              _ ||
                (_ = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [AV] started call audio at the click",
                ])),
            ));
        })),
        w.apply(this, arguments)
      );
    }
    function A(e) {
      e.capture == null &&
        e.playback == null &&
        e.playbackElement == null &&
        (self.clearTimeout(e.releaseTimeoutId), (C = null));
    }
    ((l.prepareCallAudioElement = b),
      (l.unlockCallAudio = v),
      (l.releaseCallAudioUnlock = S),
      (l.takeUnlockedAudioContext = R),
      (l.takeUnlockedPlaybackElement = L),
      (l.createCallPlaybackElement = E),
      (l.canStartCallAudio = k),
      (l.startCallAudioInClick = I),
      (l.holdUnlockedCallAudio = T));
  },
  98,
);
