__d(
  "AdsPostEngagementCampaignOptimizationPlugin",
  [
    "AdsAPIObjectives",
    "AdsAPIOptimizationGoals",
    "AdsDefaultCampaignOptimizationPlugin",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 218,
      s = babelHelpers.extends({}, r("AdsDefaultCampaignOptimizationPlugin"), {
        type: "campaign/optimization",
        key: "post_engagement",
        pivots: { objective: r("AdsAPIObjectives").POST_ENGAGEMENT },
        getDefaultBidAmount: function (n, o) {
          return n === r("AdsAPIOptimizationGoals").IMPRESSIONS ||
            n === r("AdsAPIOptimizationGoals").REACH
            ? e
            : r("AdsDefaultCampaignOptimizationPlugin").getDefaultBidAmount(
                n,
                o,
              );
        },
        getSupportedOptimizationGoals: function () {
          return [
            r("AdsAPIOptimizationGoals").IMPRESSIONS,
            r("AdsAPIOptimizationGoals").POST_ENGAGEMENT,
            r("AdsAPIOptimizationGoals").REACH,
          ];
        },
        getDefaultOptimizationGoal: function (t) {
          return r("AdsAPIOptimizationGoals").POST_ENGAGEMENT;
        },
      }),
      u = s;
    l.default = u;
  },
  98,
);
