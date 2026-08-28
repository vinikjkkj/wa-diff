__d(
  "AdsOutcomeSalesWebsiteAndInStoreCampaignOptimizationPlugin",
  [
    "AdsAPIObjectives",
    "AdsAPIOptimizationGoals",
    "AdsProductCatalogSalesCampaignOptimizationPlugin",
    "AdsPromotedObjectTypes",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = babelHelpers.extends(
        {},
        r("AdsProductCatalogSalesCampaignOptimizationPlugin"),
        {
          type: "campaign/optimization",
          key: "outcome_sales/website-and-in-store",
          pivots: {
            objective: r("AdsAPIObjectives").OUTCOME_SALES,
            promotedObjectType: r("AdsPromotedObjectTypes")
              .WEBSITE_AND_IN_STORE,
          },
          getSupportedOptimizationGoals: function (t) {
            var e = [r("AdsAPIOptimizationGoals").OFFSITE_CONVERSIONS];
            return (
              r("gkx")("6471") && e.push(r("AdsAPIOptimizationGoals").VALUE),
              e
            );
          },
          getDefaultOptimizationGoal: function (t) {
            return r("AdsAPIOptimizationGoals").OFFSITE_CONVERSIONS;
          },
          supportsCustomEventTypeField: function (t) {
            return (
              r("gkx")("20768") &&
              (t === r("AdsAPIOptimizationGoals").OFFSITE_CONVERSIONS ||
                t === r("AdsAPIOptimizationGoals").VALUE)
            );
          },
        },
      ),
      s = e;
    l.default = s;
  },
  98,
);
