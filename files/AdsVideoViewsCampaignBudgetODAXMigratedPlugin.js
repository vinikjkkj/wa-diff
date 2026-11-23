__d(
  "AdsVideoViewsCampaignBudgetODAXMigratedPlugin",
  [
    "AdCampaignDestination",
    "AdsAPIObjectives",
    "AdsAPIOptimizationGoals",
    "AdsVideoViewsCampaignBudgetPlugin",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = babelHelpers.extends({}, r("AdsVideoViewsCampaignBudgetPlugin"), {
        type: "campaign/budget/ODAX_MIGRATED",
        key: "video-views/ODAX_MIGRATED",
        multiPivots: [
          {
            objective: (e = r("AdsAPIObjectives")).OUTCOME_ENGAGEMENT,
            destinationType: r("AdCampaignDestination").ON_VIDEO,
            optimizationGoal: (s = r("AdsAPIOptimizationGoals")).THRUPLAY,
          },
          {
            objective: e.OUTCOME_ENGAGEMENT,
            destinationType: r("AdCampaignDestination").ON_VIDEO,
            optimizationGoal: s.TWO_SECOND_CONTINUOUS_VIDEO_VIEWS,
          },
          { objective: e.OUTCOME_AWARENESS, optimizationGoal: s.THRUPLAY },
          {
            objective: e.OUTCOME_AWARENESS,
            optimizationGoal: s.TWO_SECOND_CONTINUOUS_VIDEO_VIEWS,
          },
        ],
        originalKey: "video-views",
      }),
      c = u;
    l.default = c;
  },
  98,
);
