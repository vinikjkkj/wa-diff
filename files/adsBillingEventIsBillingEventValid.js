__d(
  "adsBillingEventIsBillingEventValid",
  [
    "AdsAPIObjectives",
    "AdsAPIOptimizationGoals",
    "AdsPromotedObjectTypes",
    "adsBillingEventIsBillingEventDisabledByAccountEligibity",
    "adsBillingEventIsBillingEventDisabledByCampaignGroupBudget",
    "adsBillingEventIsBillingEventValidForObjectiveAndOptimizationGoalDEPRECATED",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, o, a, i) {
      if (
        n === r("AdsAPIOptimizationGoals").VALUE &&
        e === r("AdsAPIObjectives").OUTCOME_ENGAGEMENT &&
        a === r("AdsPromotedObjectTypes").MESSENGER
      )
        return !0;
      var l = r("adsBillingEventIsBillingEventDisabledByAccountEligibity")(
        e,
        t,
        n,
      );
      if (l) return !1;
      var s = r(
        "adsBillingEventIsBillingEventValidForObjectiveAndOptimizationGoalDEPRECATED",
      )(e, t, n);
      return s
        ? o !== !0 ||
            !r("adsBillingEventIsBillingEventDisabledByCampaignGroupBudget")(
              e,
              t,
              i,
            )
        : !1;
    }
    l.default = e;
  },
  98,
);
