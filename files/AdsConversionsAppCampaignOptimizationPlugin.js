__d(
  "AdsConversionsAppCampaignOptimizationPlugin",
  [
    "AdsAPIObjectives",
    "AdsAPIOptimizationGoals",
    "AdsAppCampaignOptimizationPluginCommon",
    "AdsConversionsAppCampaignOptimizationPluginCommon",
    "AdsDefaultCampaignOptimizationPlugin",
    "AdsPromotedObjectTypes",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = babelHelpers.extends(
        {},
        r("AdsDefaultCampaignOptimizationPlugin"),
        r("AdsAppCampaignOptimizationPluginCommon"),
        r("AdsConversionsAppCampaignOptimizationPluginCommon"),
        {
          type: "campaign/optimization",
          key: "conversions/app",
          pivots: {
            objective: r("AdsAPIObjectives").CONVERSIONS,
            promotedObjectType: r("AdsPromotedObjectTypes").MOBILE_APP,
          },
          getCanUseAveragePricePacing: function (t, n, o) {
            return (
              o != null &&
              t === r("AdsAPIOptimizationGoals").OFFSITE_CONVERSIONS &&
              o.capabilities != null &&
              o.capabilities.includes("CAN_USE_APP_EVENT_AVERAGE_COST_BIDDING")
            );
          },
          getDefaultOptimizationGoal: function (t) {
            return r("AdsAPIOptimizationGoals").OFFSITE_CONVERSIONS;
          },
        },
      ),
      s = e;
    l.default = s;
  },
  98,
);
