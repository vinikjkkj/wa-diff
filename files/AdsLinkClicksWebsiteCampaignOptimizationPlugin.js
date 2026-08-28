__d(
  "AdsLinkClicksWebsiteCampaignOptimizationPlugin",
  [
    "AdsAPIObjectives",
    "AdsAPIOptimizationGoals",
    "AdsDefaultCampaignOptimizationPlugin",
    "AdsLinkClicksCampaignOptimizationPlugin",
    "AdsPromotedObjectTypes",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = babelHelpers.extends(
        {},
        r("AdsDefaultCampaignOptimizationPlugin"),
        {
          type: "campaign/optimization",
          key: "link_clicks/website",
          pivots: {
            objective: r("AdsAPIObjectives").LINK_CLICKS,
            promotedObjectType: r("AdsPromotedObjectTypes").WEBSITE,
          },
          getSupportedOptimizationGoals: r(
            "AdsLinkClicksCampaignOptimizationPlugin",
          ).getSupportedOptimizationGoals,
          getDefaultOptimizationGoal: function () {
            return r("AdsAPIOptimizationGoals").LANDING_PAGE_VIEWS;
          },
        },
      ),
      s = e;
    l.default = s;
  },
  98,
);
