__d(
  "AdsOutcomeSalesWebsiteAndInstantFormCampaignOptimziationPlugin",
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
          key: "outcome_sales_website_and_instant_forms",
          pivots: {
            objective: r("AdsAPIObjectives").OUTCOME_SALES,
            promotedObjectType: r("AdsPromotedObjectTypes")
              .WEBSITE_AND_INSTANT_FORM,
            destinationType: r("AdCampaignDestination").WEBSITE_AND_LEAD_FORM,
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
