__d(
  "AdsScalingPGDBundle1AwarenessExperimentUtils",
  ["AdsAPIObjectives", "gkx"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return e.logExposure ? r("gkx")("6069") : r("gkx")("6553");
    }
    function s(e) {
      return e === r("AdsAPIObjectives").OUTCOME_AWARENESS;
    }
    function u(t, n) {
      return s(t) && e(n);
    }
    ((l.isTest = e), (l.isAwarenessObjective = s), (l.isEligibleAndTest = u));
  },
  98,
);
