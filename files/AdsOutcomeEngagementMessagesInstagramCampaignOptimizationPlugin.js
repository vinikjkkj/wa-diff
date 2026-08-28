__d(
  "AdsOutcomeEngagementMessagesInstagramCampaignOptimizationPlugin",
  [
    "AdsAPIObjectives",
    "AdsMessagesInstagramCampaignOptimizationPlugin",
    "AdsPromotedObjectTypes",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = babelHelpers.extends(
        {},
        r("AdsMessagesInstagramCampaignOptimizationPlugin"),
        {
          type: "campaign/optimization",
          key: "outcome_engagement_messages_instagram",
          pivots: {
            objective: r("AdsAPIObjectives").OUTCOME_ENGAGEMENT,
            promotedObjectType: r("AdsPromotedObjectTypes").INSTAGRAM,
          },
        },
      ),
      s = e;
    l.default = s;
  },
  98,
);
