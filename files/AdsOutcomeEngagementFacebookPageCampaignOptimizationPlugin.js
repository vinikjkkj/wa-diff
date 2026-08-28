__d(
  "AdsOutcomeEngagementFacebookPageCampaignOptimizationPlugin",
  [
    "AdsAPIObjectives",
    "AdsAPIOptimizationGoals",
    "AdsPageLikesCampaignOptimizationPlugin",
    "AdsPromotedObjectTypes",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = babelHelpers.extends(
        {},
        r("AdsPageLikesCampaignOptimizationPlugin"),
        {
          type: "campaign/optimization",
          key: "outcome_engagement_facebook_page",
          pivots: {
            objective: r("AdsAPIObjectives").OUTCOME_ENGAGEMENT,
            promotedObjectType: r("AdsPromotedObjectTypes").PAGE,
          },
          getSupportedOptimizationGoals: function () {
            return [r("AdsAPIOptimizationGoals").PAGE_LIKES];
          },
          getDefaultOptimizationGoal: function (t) {
            return r("AdsAPIOptimizationGoals").PAGE_LIKES;
          },
        },
      ),
      s = e;
    l.default = s;
  },
  98,
);
