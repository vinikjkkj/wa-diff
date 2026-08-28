__d(
  "AdsCampaignProductCatalogSalesConversionsProductSetConversionWindowPlugin",
  [
    "AdsAPIObjectives",
    "AdsAPIOptimizationGoals",
    "AdsDefaultConversionWindowPlugin",
    "AdsPromotedObjectTypes",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = babelHelpers.extends({}, r("AdsDefaultConversionWindowPlugin"), {
        type: "campaign/conversion_window",
        key: "product_catalog_sales/conversions/product_set",
        pivots: {
          objective: r("AdsAPIObjectives").PRODUCT_CATALOG_SALES,
          optimizationGoal: r("AdsAPIOptimizationGoals").OFFSITE_CONVERSIONS,
          promotedObjectType: r("AdsPromotedObjectTypes").PRODUCT_SET,
        },
        getDefaultEngagedVideoViewWindowForRBA: function () {
          return 1;
        },
      }),
      s = e;
    l.default = s;
  },
  98,
);
