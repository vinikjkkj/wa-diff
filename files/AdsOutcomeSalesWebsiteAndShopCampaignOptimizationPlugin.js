__d(
  "AdsOutcomeSalesWebsiteAndShopCampaignOptimizationPlugin",
  [
    "AdsAPIObjectives",
    "AdsConversionsWebsiteAndShopCampaignOptimizationPlugin",
    "AdsPromotedObjectTypes",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = babelHelpers.extends(
        {},
        r("AdsConversionsWebsiteAndShopCampaignOptimizationPlugin"),
        {
          type: "campaign/optimization",
          key: "outcome_sales_website_and_shop",
          pivots: {
            objective: r("AdsAPIObjectives").OUTCOME_SALES,
            promotedObjectType: r("AdsPromotedObjectTypes").WEB_AND_SHOP,
          },
        },
      ),
      s = e;
    l.default = s;
  },
  98,
);
