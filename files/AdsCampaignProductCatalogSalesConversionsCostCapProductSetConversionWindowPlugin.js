__d(
  "AdsCampaignProductCatalogSalesConversionsCostCapProductSetConversionWindowPlugin",
  [
    "AdsAPIBidStrategies",
    "AdsAPIObjectives",
    "AdsAPIOptimizationGoals",
    "AdsDefaultConversionWindowPlugin",
    "AdsDeliveryAttributionUtils",
    "AdsPromotedObjectTypes",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = babelHelpers.extends({}, r("AdsDefaultConversionWindowPlugin"), {
        type: "campaign/conversion_window",
        key: "product_catalog_sales/conversions/cost_cap/product_set",
        pivots: {
          objective: r("AdsAPIObjectives").PRODUCT_CATALOG_SALES,
          optimizationGoal: r("AdsAPIOptimizationGoals").OFFSITE_CONVERSIONS,
          bidStrategy: r("AdsAPIBidStrategies").COST_CAP,
          promotedObjectType: r("AdsPromotedObjectTypes").PRODUCT_SET,
        },
        getDefaultClickConversionWindowForRBA: function (t) {
          return o(
            "AdsDeliveryAttributionUtils",
          ).getAccountClickAttributionSpec(t);
        },
        getDefaultViewConversionWindowForRBA: function (t) {
          return o("AdsDeliveryAttributionUtils").getAccountHasViewAttribution(
            t,
          )
            ? 1
            : 0;
        },
      }),
      s = e;
    l.default = s;
  },
  98,
);
