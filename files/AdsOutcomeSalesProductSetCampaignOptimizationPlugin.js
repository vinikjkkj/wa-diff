__d(
  "AdsOutcomeSalesProductSetCampaignOptimizationPlugin",
  ["AdsAPIObjectives", "AdsProductCatalogSalesCampaignOptimizationPlugin"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = babelHelpers.extends(
        {},
        r("AdsProductCatalogSalesCampaignOptimizationPlugin"),
        {
          type: "campaign/optimization",
          key: "outcome_sales_product_set",
          pivots: { objective: r("AdsAPIObjectives").OUTCOME_SALES },
        },
      ),
      s = e;
    l.default = s;
  },
  98,
);
