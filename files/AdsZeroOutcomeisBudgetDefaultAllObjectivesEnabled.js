__d(
  "AdsZeroOutcomeisBudgetDefaultAllObjectivesEnabled",
  [
    "AdsSABRBudgetDefaultUtils",
    "AdsZeroOutcomeisObjectiveEligibleForAllObjectivesBudgetDefaulting",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      return (
        o("AdsSABRBudgetDefaultUtils").isSABRBudgetDefaultingEnabled(!1, e) &&
        s(e, t, n)
      );
    }
    function s(e, t, n) {
      return (
        o(
          "AdsZeroOutcomeisObjectiveEligibleForAllObjectivesBudgetDefaulting",
        ).isObjectiveEligibleForAllObjectivesBudgetDefaulting(e) &&
        t === !0 &&
        n === !0
      );
    }
    l.AdsZeroOutcomeisBudgetDefaultAllobjectivesEnabled = e;
  },
  98,
);
