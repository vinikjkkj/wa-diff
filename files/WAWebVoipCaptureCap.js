__d(
  "WAWebVoipCaptureCap",
  ["WALogger", "WAWebVoipMobileDevice", "justknobx"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = [
        { minParticipants: 3, cap: { width: 640, height: 480 } },
        { minParticipants: 9, cap: { width: 480, height: 360 } },
      ];
    function u(e) {
      if (!m() || !o("WAWebVoipMobileDevice").isVoipMobileDevice()) return null;
      var t = null;
      for (var n of s) e >= n.minParticipants && (t = n.cap);
      return t;
    }
    function c(e, t) {
      return t == null
        ? e
        : {
            width: Math.min(e.width, t.width),
            height: Math.min(e.height, t.height),
            maxFps: e.maxFps,
          };
    }
    var d = !1;
    function m() {
      try {
        return r("justknobx")._("6514");
      } catch (t) {
        return (
          d ||
            ((d = !0),
            o("WALogger").WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [CaptureCap] capture cap JK unavailable, using fallback=true: ",
                  "",
                ])),
              String(t),
            )),
          !0
        );
      }
    }
    ((l.getGroupCallCaptureCap = u), (l.applyCaptureCap = c));
  },
  98,
);
