__d(
  "AdsProductCatalogSalesCampaignBudgetODAXMigratedPlugin",
  ["AdsAPIObjectives", "AdsProductCatalogSalesCampaignBudgetPlugin"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = babelHelpers.extends(
        {},
        r("AdsProductCatalogSalesCampaignBudgetPlugin"),
        {
          type: "campaign/budget/ODAX_MIGRATED",
          key: "product-catalog-sales/ODAX_MIGRATED",
          multiPivots: [
            {
              objective: r("AdsAPIObjectives").OUTCOME_SALES,
              hasCatalogId: !0,
            },
          ],
          originalKey: "product-catalog-sales",
        },
      ),
      s = e;
    l.default = s;
  },
  98,
);
