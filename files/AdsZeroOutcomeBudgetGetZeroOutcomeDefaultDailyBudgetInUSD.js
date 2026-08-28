__d(
  "AdsZeroOutcomeBudgetGetZeroOutcomeDefaultDailyBudgetInUSD",
  [
    "AdsSABRBudgetDefaultUtils",
    "AdsZeroOutcomeBudgetDefaultAllObjectivesPreloadingData",
    "AdsZeroOutcomeBudgetDefaultAllObjectivesPreloadingDataV2",
    "AdsZeroOutcomeBudgetGetZeroOutcomeProcessBudgetDefaultData",
    "AdsZeroOutcomeisObjectiveEligibleForAllObjectivesBudgetDefaulting",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      if (
        n === !0 &&
        o("AdsSABRBudgetDefaultUtils").isObjectiveEligibleForSABRV2(e)
      ) {
        var r = o(
            "AdsZeroOutcomeBudgetDefaultAllObjectivesPreloadingDataV2",
          ).getBudgetDefaultDataV2(),
          a = o(
            "AdsZeroOutcomeBudgetGetZeroOutcomeProcessBudgetDefaultData",
          ).processBudgetDefaultData(e, null, t, !0, r);
        if (a != null) return a;
      }
      var i = o(
        "AdsZeroOutcomeBudgetDefaultAllObjectivesPreloadingData",
      ).getBudgetDefaultData();
      return o(
        "AdsZeroOutcomeisObjectiveEligibleForAllObjectivesBudgetDefaulting",
      ).isObjectiveEligibleForAllObjectivesBudgetDefaulting(e)
        ? o(
            "AdsZeroOutcomeBudgetGetZeroOutcomeProcessBudgetDefaultData",
          ).processBudgetDefaultData(e, i, t)
        : null;
    }
    l.getZeroOutcomeDefaultDailyBudgetInUSD = e;
  },
  98,
);
