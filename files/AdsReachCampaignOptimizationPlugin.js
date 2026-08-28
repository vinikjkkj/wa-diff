__d(
  "AdsReachCampaignOptimizationPlugin",
  [
    "AdsAPIObjectives",
    "AdsAPIOptimizationGoals",
    "AdsBidControlType",
    "AdsDefaultCampaignOptimizationPlugin",
    "AdsFrequencyControlEditorUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 218,
      s = babelHelpers.extends({}, r("AdsDefaultCampaignOptimizationPlugin"), {
        type: "campaign/optimization",
        key: "reach",
        pivots: { objective: r("AdsAPIObjectives").REACH },
        getDefaultBidAmount: function (n, o) {
          return n === r("AdsAPIOptimizationGoals").IMPRESSIONS ||
            n === r("AdsAPIOptimizationGoals").REACH
            ? e
            : r("AdsDefaultCampaignOptimizationPlugin").getDefaultBidAmount(
                n,
                o,
              );
        },
        getBidControlType: function (t, n) {
          return r("AdsBidControlType").ANY;
        },
        getSupportedOptimizationGoals: function () {
          return [
            r("AdsAPIOptimizationGoals").IMPRESSIONS,
            r("AdsAPIOptimizationGoals").REACH,
          ];
        },
        getDefaultFrequencyControlSpecs: function (t, n, a) {
          return t !== r("AdsAPIOptimizationGoals").REACH
            ? null
            : o(
                "AdsFrequencyControlEditorUtils",
              ).computeDefaultFrequencyControlSpecs(
                r("AdsAPIObjectives").REACH,
                r("AdsAPIOptimizationGoals").REACH,
                n,
                a,
              );
        },
      }),
      u = s;
    l.default = u;
  },
  98,
);
