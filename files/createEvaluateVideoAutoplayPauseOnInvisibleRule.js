__d(
  "createEvaluateVideoAutoplayPauseOnInvisibleRule",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      function t(t) {
        var n = t.videoPlayerPassiveViewabilityInfo,
          r = n && n.getCurrent(),
          o = r ? r.visiblePercentage : null,
          a = o === null || o >= e;
        return a ? "SKIP" : "PAUSE";
      }
      return (
        (t.displayName =
          "evaluateVideoAutoplayPauseOnInvisibleRule:" + 100 * e + "%"),
        t
      );
    }
    i.default = e;
  },
  66,
);
