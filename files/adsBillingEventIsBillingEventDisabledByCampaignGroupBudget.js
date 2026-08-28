__d(
  "adsBillingEventIsBillingEventDisabledByCampaignGroupBudget",
  ["AdsAPIBidStrategies", "AdsCampaignGroupBudgetPluginResolver"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      var o;
      n == null
        ? (o = r("AdsAPIBidStrategies").LOWEST_COST_WITH_BID_CAP)
        : (o = n);
      var a = r("AdsCampaignGroupBudgetPluginResolver")
        .resolve({ objective: e })
        .getDisabledBillingEvents(o);
      return a.includes(t);
    }
    l.default = e;
  },
  98,
);
