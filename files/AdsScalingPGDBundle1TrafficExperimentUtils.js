__d(
  "AdsScalingPGDBundle1TrafficExperimentUtils",
  ["AdsAPIObjectives", "gkx"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return e.logExposure ? r("gkx")("6069") : r("gkx")("6553");
    }
    function s(e) {
      return e === r("AdsAPIObjectives").LINK_CLICKS;
    }
    function u(t, n) {
      return s(t) && e(n);
    }
    ((l.isTest = e), (l.isTrafficObjective = s), (l.isEligibleAndTest = u));
  },
  98,
);
