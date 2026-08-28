__d(
  "AdsOutcomeEngagementCampaignOptimizationPlugin",
  [
    "AdsAPIObjectives",
    "AdsAPIOptimizationGoals",
    "AdsVideoViewsCampaignOptimizationPlugin",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = babelHelpers.extends(
        {},
        r("AdsVideoViewsCampaignOptimizationPlugin"),
        {
          type: "campaign/optimization",
          key: "outcome_engagement",
          pivots: { objective: r("AdsAPIObjectives").OUTCOME_ENGAGEMENT },
          getDefaultOptimizationGoal: function (t) {
            return r("AdsAPIOptimizationGoals").THRUPLAY;
          },
        },
      ),
      s = e;
    l.default = s;
  },
  98,
);
