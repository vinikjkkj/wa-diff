__d(
  "isConsiderationPlacementLocked",
  ["AdsAPIOptimizationGoals", "isConsiderationEnabledForAccount"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return (
        e === r("AdsAPIOptimizationGoals").CONSIDERATION &&
        r("isConsiderationEnabledForAccount")()
      );
    }
    l.default = e;
  },
  98,
);
