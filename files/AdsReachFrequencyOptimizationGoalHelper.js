__d(
  "AdsReachFrequencyOptimizationGoalHelper",
  [
    "AdCampaignDestination",
    "AdsAPIObjectives",
    "AdsAPIOptimizationGoals",
    "AdsReachFrequencyOptimizationEvents",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        getDefaultOptimizationGoal: function (t) {
          switch (t) {
            case r("AdsAPIObjectives").OUTCOME_AWARENESS:
              return r("AdsAPIOptimizationGoals").REACH;
            case r("AdsAPIObjectives").OUTCOME_ENGAGEMENT:
              return r("AdsAPIOptimizationGoals").THRUPLAY;
            default:
              return null;
          }
        },
        getDestinationForOptimizationGoal: function (t, n) {
          if (t !== r("AdsAPIObjectives").OUTCOME_ENGAGEMENT) return null;
          switch (n) {
            case r("AdsAPIOptimizationGoals").POST_ENGAGEMENT:
              return r("AdCampaignDestination").ON_POST;
            case r("AdsAPIOptimizationGoals").SIX_SECOND_VIDEO_VIEWS:
            case r("AdsAPIOptimizationGoals").THRUPLAY:
              return r("AdCampaignDestination").ON_VIDEO;
            default:
              return null;
          }
        },
        getOptimizationGoalByEvent: function (t) {
          return t ===
            r("AdsReachFrequencyOptimizationEvents").VIDEO_VIEW_2_SECONDS
            ? r("AdsAPIOptimizationGoals").TWO_SECOND_CONTINUOUS_VIDEO_VIEWS
            : t != null &&
                [
                  r("AdsReachFrequencyOptimizationEvents")
                    .IMPRESSION_15_SECONDS,
                  r("AdsReachFrequencyOptimizationEvents")
                    .VIDEO_VIEW_15_SECONDS,
                ].includes(t)
              ? r("AdsAPIOptimizationGoals").THRUPLAY
              : null;
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
