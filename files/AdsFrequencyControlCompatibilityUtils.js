__d(
  "AdsFrequencyControlCompatibilityUtils",
  ["AdsAPIObjectives", "AdsAPIOptimizationGoals", "AdsODAXUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      var a = !0,
        i = o("AdsODAXUtils").maybeTranslateObjective(
          e != null ? e : r("AdsAPIObjectives").NONE,
          n,
          t,
        );
      switch (i) {
        case r("AdsAPIObjectives").REACH:
          return t === r("AdsAPIOptimizationGoals").REACH;
        case r("AdsAPIObjectives").BRAND_AWARENESS:
          return t === r("AdsAPIOptimizationGoals").REACH || a;
        case r("AdsAPIObjectives").POST_ENGAGEMENT:
          return t === r("AdsAPIOptimizationGoals").POST_ENGAGEMENT && a;
        case r("AdsAPIObjectives").VIDEO_VIEWS:
          return (
            (t === r("AdsAPIOptimizationGoals").THRUPLAY ||
              t === r("AdsAPIOptimizationGoals").VIDEO_VIEWS ||
              t ===
                r("AdsAPIOptimizationGoals")
                  .TWO_SECOND_CONTINUOUS_VIDEO_VIEWS ||
              t === r("AdsAPIOptimizationGoals").SIX_SECOND_VIDEO_VIEWS) &&
            a
          );
      }
      return !1;
    }
    l.isCompatibleWithFrequencyControl = e;
  },
  98,
);
