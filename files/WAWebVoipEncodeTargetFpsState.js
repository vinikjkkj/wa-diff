__d(
  "WAWebVoipEncodeTargetFpsState",
  ["WALogger", "WAThrottle"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = 0,
      u = 1e3;
    function c(t) {
      (o("WALogger").LOG(
        e ||
          (e = babelHelpers.taggedTemplateLiteralLoose([
            "voip: [AV:EncodeTargetFps] updating from ",
            " to ",
            "",
          ])),
        s,
        t,
      ),
        (s = t));
    }
    var d = o("WAThrottle").throttle(c, u);
    function m(e) {
      d(e);
    }
    function p() {
      return s;
    }
    function _() {
      s = 0;
    }
    ((l.updateEncodeTargetFps = m),
      (l.getEncodeTargetFps = p),
      (l.resetEncodeTargetFps = _));
  },
  98,
);
