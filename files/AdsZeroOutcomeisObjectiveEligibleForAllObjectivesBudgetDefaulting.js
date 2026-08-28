__d(
  "AdsZeroOutcomeisObjectiveEligibleForAllObjectivesBudgetDefaulting",
  ["AdsAPIObjectives", "isFalsey"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = new Set([
      o("AdsAPIObjectives").OUTCOME_SALES,
      o("AdsAPIObjectives").LINK_CLICKS,
    ]);
    function s(t) {
      return !r("isFalsey")(t) && e.has(t);
    }
    l.isObjectiveEligibleForAllObjectivesBudgetDefaulting = s;
  },
  98,
);
