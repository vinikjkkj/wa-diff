__d(
  "evaluateVideoAutoplayPauseOnAdInvisibleRule",
  ["VideoPlayerViewabilityConstants"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = e.adClientToken,
        n = e.videoPlayerPassiveViewabilityInfo,
        o = n && n.getCurrent(),
        a = o ? o.visiblePercentage : null,
        i =
          a === null ||
          a >=
            r("VideoPlayerViewabilityConstants")
              .DEFAULT_VIEWABILITY_PERCENTAGE_FOR_PAUSE;
      return t != null && !i ? "PAUSE" : "SKIP";
    }
    ((e.displayName = "evaluateVideoAutoplayPauseOnAdInvisibleRule"),
      (l.default = e));
  },
  98,
);
