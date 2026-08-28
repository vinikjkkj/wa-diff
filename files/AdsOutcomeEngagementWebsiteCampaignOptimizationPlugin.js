__d(
  "AdsOutcomeEngagementWebsiteCampaignOptimizationPlugin",
  [
    "AdsAPIObjectives",
    "AdsOutcomeWebsiteCampaignOptimizationPlugin",
    "AdsPromotedObjectTypes",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = babelHelpers.extends(
        {},
        r("AdsOutcomeWebsiteCampaignOptimizationPlugin"),
        {
          type: "campaign/optimization",
          key: "outcome_engagement_website",
          pivots: {
            objective: r("AdsAPIObjectives").OUTCOME_ENGAGEMENT,
            promotedObjectType: r("AdsPromotedObjectTypes").PIXEL,
          },
        },
      ),
      s = e;
    l.default = s;
  },
  98,
);
