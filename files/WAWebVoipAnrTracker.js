__d(
  "WAWebVoipAnrTracker",
  ["WALogger", "WAWebVoipActivityTracker"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c = 0,
      d = !1;
    function m() {
      d ||
        ((c = 0),
        (d = !0),
        o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "[voip:anrTracker] started",
            ])),
        ));
    }
    function p() {
      d &&
        (c++,
        o("WAWebVoipActivityTracker").recordFirstAnrTimestamp(),
        o("WALogger").LOG(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "[voip:anrTracker] ANR detected, count=",
              "",
            ])),
          c,
        ));
    }
    function _() {
      return d;
    }
    function f() {
      if (!d) return null;
      var e = c;
      return (
        (d = !1),
        (c = 0),
        o("WALogger").LOG(
          u ||
            (u = babelHelpers.taggedTemplateLiteralLoose([
              "[voip:anrTracker] consumed count=",
              "",
            ])),
          e,
        ),
        e
      );
    }
    ((l.startAnrTracking = m),
      (l.incrementAnrCount = p),
      (l.isAnrTrackingActive = _),
      (l.consumeAnrCount = f));
  },
  98,
);
