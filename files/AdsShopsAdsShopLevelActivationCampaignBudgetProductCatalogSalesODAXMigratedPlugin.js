__d(
  "AdsShopsAdsShopLevelActivationCampaignBudgetProductCatalogSalesODAXMigratedPlugin",
  [
    "AdsAPIObjectives",
    "AdsPromotedObjectTypes",
    "AdsShopsAdsShopLevelActivationCampaignBudgetProductCatalogSalesPlugin",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = babelHelpers.extends(
        {},
        r(
          "AdsShopsAdsShopLevelActivationCampaignBudgetProductCatalogSalesPlugin",
        ),
        {
          type: "campaign/budget/ODAX_MIGRATED",
          key: "shops-ads-product-catalog-sales/ODAX_MIGRATED",
          multiPivots: [
            {
              objective: r("AdsAPIObjectives").OUTCOME_SALES,
              promotedObjectType: r("AdsPromotedObjectTypes").PRODUCT_SET,
            },
          ],
          originalKey: "shops-ads-product-catalog-sales",
        },
      ),
      s = e;
    l.default = s;
  },
  98,
);
