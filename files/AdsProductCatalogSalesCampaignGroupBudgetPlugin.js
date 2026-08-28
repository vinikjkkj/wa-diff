__d(
  "AdsProductCatalogSalesCampaignGroupBudgetPlugin",
  [
    "AdsAPIBidStrategies",
    "AdsAPIBillingEvents",
    "AdsAPIObjectives",
    "AdsBidControlType",
    "AdsDefaultCampaignGroupBudgetPlugin",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = babelHelpers.extends({}, r("AdsDefaultCampaignGroupBudgetPlugin"), {
        type: "campaign_group/budget",
        key: "product_catalog_sales",
        pivots: { objective: r("AdsAPIObjectives").PRODUCT_CATALOG_SALES },
        getBidControlType: function () {
          return r("AdsBidControlType").ANY;
        },
        getDisabledBillingEvents: function (t) {
          return t === r("AdsAPIBidStrategies").LOWEST_COST_WITH_MIN_ROAS
            ? Object.keys(r("AdsAPIBillingEvents")).filter(function (e) {
                return e !== r("AdsAPIBillingEvents").IMPRESSIONS;
              })
            : [];
        },
      }),
      s = e;
    l.default = s;
  },
  98,
);
