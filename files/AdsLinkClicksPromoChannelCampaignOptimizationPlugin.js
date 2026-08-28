__d(
  "AdsLinkClicksPromoChannelCampaignOptimizationPlugin",
  [
    "AdsAPIObjectives",
    "AdsAPIOptimizationGoals",
    "AdsLinkClicksCampaignOptimizationPlugin",
    "AdsPromotedObjectTypes",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = babelHelpers.extends(
        {},
        r("AdsLinkClicksCampaignOptimizationPlugin"),
        {
          type: "campaign/optimization",
          key: "link_clicks/promo_channel",
          pivots: {
            objective: r("AdsAPIObjectives").LINK_CLICKS,
            promotedObjectType: r("AdsPromotedObjectTypes").WHATSAPP_CHANNEL,
          },
          getDefaultOptimizationGoal: function (t) {
            return r("AdsAPIOptimizationGoals").IMPRESSIONS;
          },
          getSupportedOptimizationGoals: function () {
            return [r("AdsAPIOptimizationGoals").IMPRESSIONS];
          },
          getCanUseAveragePricePacing: function (t, n) {
            return !0;
          },
        },
      ),
      s = e;
    l.default = s;
  },
  98,
);
