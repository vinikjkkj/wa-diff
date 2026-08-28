__d(
  "AdsOutcomeSalesWebsiteAndMessagesCampaignOptimizationPlugin",
  [
    "AdCampaignDestination",
    "AdsAPIObjectives",
    "AdsAPIOptimizationGoals",
    "AdsConversionsCampaignOptimizationPlugin",
    "AdsPromotedObjectTypes",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = babelHelpers.extends(
        {},
        r("AdsConversionsCampaignOptimizationPlugin"),
        {
          type: "campaign/optimization",
          key: "outcome_sales_website_and_messages",
          pivots: {
            objective: r("AdsAPIObjectives").OUTCOME_SALES,
            promotedObjectType: r("AdsPromotedObjectTypes")
              .WEBSITE_AND_MESSAGES,
            destinationType: r("AdCampaignDestination").WEBSITE_AND_MESSAGES,
          },
          getDefaultOptimizationGoal: function (t) {
            return r("AdsAPIOptimizationGoals").OFFSITE_CONVERSIONS;
          },
          getSupportedOptimizationGoals: function () {
            return [r("AdsAPIOptimizationGoals").OFFSITE_CONVERSIONS];
          },
        },
      ),
      s = e;
    l.default = s;
  },
  98,
);
