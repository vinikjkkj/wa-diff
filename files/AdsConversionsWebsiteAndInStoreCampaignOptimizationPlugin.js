__d(
  "AdsConversionsWebsiteAndInStoreCampaignOptimizationPlugin",
  [
    "AdsAPIObjectives",
    "AdsAPIOptimizationGoals",
    "AdsConversionsCampaignOptimizationPlugin",
    "AdsOutcomeSalesWebsiteAndInStoreCampaignOptimizationPlugin",
    "AdsPromotedObjectTypes",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = babelHelpers.extends(
        {},
        r("AdsConversionsCampaignOptimizationPlugin"),
        {
          type: "campaign/optimization",
          key: "conversions/website-and-in-store",
          pivots: {
            objective: r("AdsAPIObjectives").CONVERSIONS,
            promotedObjectType: r("AdsPromotedObjectTypes")
              .WEBSITE_AND_IN_STORE,
          },
          getCanUseAveragePricePacing: function () {
            return !1;
          },
          supportsCustomEventTypeField: function (t) {
            return (
              r("gkx")("20768") &&
              (t === r("AdsAPIOptimizationGoals").OFFSITE_CONVERSIONS ||
                t === r("AdsAPIOptimizationGoals").VALUE)
            );
          },
          getSupportedOptimizationGoals: r(
            "AdsOutcomeSalesWebsiteAndInStoreCampaignOptimizationPlugin",
          ).getSupportedOptimizationGoals,
          getDefaultOptimizationGoal: r(
            "AdsOutcomeSalesWebsiteAndInStoreCampaignOptimizationPlugin",
          ).getDefaultOptimizationGoal,
        },
      ),
      s = e;
    l.default = s;
  },
  98,
);
