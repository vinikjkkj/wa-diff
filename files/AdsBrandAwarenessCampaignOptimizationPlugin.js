__d(
  "AdsBrandAwarenessCampaignOptimizationPlugin",
  [
    "AdsAPIObjectives",
    "AdsAPIOptimizationGoals",
    "AdsBidControlType",
    "AdsDefaultCampaignOptimizationPlugin",
    "AdsFrequencyControlEditorUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = babelHelpers.extends(
        {},
        r("AdsDefaultCampaignOptimizationPlugin"),
        {
          type: "campaign/optimization",
          key: "brand_awareness",
          pivots: { objective: r("AdsAPIObjectives").BRAND_AWARENESS },
          getBidControlType: function (t, n) {
            return t === r("AdsAPIOptimizationGoals").REACH
              ? r("AdsBidControlType").MANUAL_BID_ONLY
              : r("AdsBidControlType").AUTO_BID_ONLY;
          },
          getSupportedOptimizationGoals: function () {
            return [r("AdsAPIOptimizationGoals").AD_RECALL_LIFT];
          },
          getDefaultOptimizationGoal: function (t) {
            return r("AdsAPIOptimizationGoals").AD_RECALL_LIFT;
          },
          getDefaultFrequencyControlSpecs: function (t, n, a) {
            return t
              ? o(
                  "AdsFrequencyControlEditorUtils",
                ).computeDefaultFrequencyControlSpecs(
                  r("AdsAPIObjectives").BRAND_AWARENESS,
                  t,
                  n,
                  a,
                )
              : null;
          },
        },
      ),
      s = e;
    l.default = s;
  },
  98,
);
