__d(
  "adsBillingEventGetDefaultDEPRECATED",
  [
    "AdsAPIBidStrategies",
    "AdsAPIBillingEvents",
    "AdsCostStrategyUtils",
    "AdsOptimizationUtils",
    "adsBillingEventGetDefaultForBuyingType",
    "adsBillingEventGetDefaultForOptimizationGoal",
    "adsBillingEventIsBillingEventDisabledByCampaignGroupBudget",
    "adsBillingEventIsBillingEventValid",
    "adsBillingEventIsValidForBuyingType",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, a, i, l, s, u, c) {
      if (!o("AdsOptimizationUtils").supportsOptimizationFields(e)) return null;
      var d = r("adsBillingEventGetDefaultForOptimizationGoal")(t, n, a, i);
      (l === r("AdsAPIBidStrategies").LOWEST_COST_WITH_MIN_ROAS ||
        l === r("AdsAPIBidStrategies").COST_CAP) &&
        (d = r("AdsAPIBillingEvents").IMPRESSIONS);
      var m = o("AdsCostStrategyUtils").getBidStrategyByLegacyFields(u, c);
      return (d != null &&
        r("adsBillingEventIsValidForBuyingType")(d, e) &&
        (s !== !0 ||
          !r("adsBillingEventIsBillingEventDisabledByCampaignGroupBudget")(
            t,
            d,
            m,
          ))) ||
        ((d = r("adsBillingEventGetDefaultForBuyingType")(e)),
        d && r("adsBillingEventIsBillingEventValid")(t, d, n, s, a, m))
        ? d
        : null;
    }
    l.default = e;
  },
  98,
);
