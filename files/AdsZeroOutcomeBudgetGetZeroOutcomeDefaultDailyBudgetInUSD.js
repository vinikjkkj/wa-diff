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
          ).getBudgetDefaultTiersV2(),
          a = o(
            "AdsZeroOutcomeBudgetGetZeroOutcomeProcessBudgetDefaultData",
          ).processBudgetDefaultData(
            e,
            null,
            t,
            !0,
            r == null ? void 0 : r.highCas,
          );
        if (a != null) {
          o("AdsSABRBudgetDefaultUtils").logUnifiedSabrModelExposure(e);
          var i = o("AdsSABRBudgetDefaultUtils").selectSabrBudgetTier(
              r == null ? void 0 : r.highCas,
              r == null ? void 0 : r.tier2026H2,
              !0,
            ),
            l = o(
              "AdsZeroOutcomeBudgetGetZeroOutcomeProcessBudgetDefaultData",
            ).processBudgetDefaultData(e, null, t, !0, i);
          return l != null ? l : a;
        }
        var s = o(
          "AdsZeroOutcomeBudgetGetZeroOutcomeProcessBudgetDefaultData",
        ).processBudgetDefaultData(
          e,
          null,
          t,
          !0,
          r == null ? void 0 : r.tier2026H2,
        );
        if (
          s != null &&
          (o("AdsSABRBudgetDefaultUtils").logUnifiedSabrModelExposure(e),
          o("AdsSABRBudgetDefaultUtils").isSeasonalityArmEnabled(!1, e) ||
            o("AdsSABRBudgetDefaultUtils").isUnifiedSabrModelEnabled(!1, e))
        )
          return s;
      }
      var u = o(
        "AdsZeroOutcomeBudgetDefaultAllObjectivesPreloadingData",
      ).getBudgetDefaultData();
      return o(
        "AdsZeroOutcomeisObjectiveEligibleForAllObjectivesBudgetDefaulting",
      ).isObjectiveEligibleForAllObjectivesBudgetDefaulting(e)
        ? o(
            "AdsZeroOutcomeBudgetGetZeroOutcomeProcessBudgetDefaultData",
          ).processBudgetDefaultData(e, u, t)
        : null;
    }
    l.getZeroOutcomeDefaultDailyBudgetInUSD = e;
  },
  98,
);
