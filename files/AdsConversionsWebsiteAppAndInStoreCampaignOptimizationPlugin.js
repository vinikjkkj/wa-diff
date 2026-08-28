__d(
  "AdsConversionsWebsiteAppAndInStoreCampaignOptimizationPlugin",
  [
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
          key: "conversions/website-app-and-in-store",
          pivots: {
            objective: r("AdsAPIObjectives").CONVERSIONS,
            promotedObjectType: r("AdsPromotedObjectTypes")
              .WEBSITE_APP_AND_IN_STORE,
          },
          getCanUseAveragePricePacing: function () {
            return !1;
          },
          getSupportedOptimizationGoals: function () {
            return [r("AdsAPIOptimizationGoals").OFFSITE_CONVERSIONS];
          },
          getDefaultOptimizationGoal: function () {
            return r("AdsAPIOptimizationGoals").OFFSITE_CONVERSIONS;
          },
          getClickConversionWindowOptions: function () {
            return [7];
          },
          getViewConversionWindowOptions: function () {
            return [1];
          },
          getEngagedVideoViewWindowOptions: function () {
            return [0];
          },
        },
      ),
      s = e;
    l.default = s;
  },
  98,
);
