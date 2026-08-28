__d(
  "AdsEventResponsesCampaignOptimizationPlugin",
  [
    "AdsAPIObjectives",
    "AdsAPIOptimizationGoals",
    "AdsDefaultCampaignOptimizationPlugin",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 500,
      s = babelHelpers.extends({}, r("AdsDefaultCampaignOptimizationPlugin"), {
        type: "campaign/optimization",
        key: "event_responses",
        pivots: { objective: r("AdsAPIObjectives").EVENT_RESPONSES },
        getDefaultBidAmount: function (n, o) {
          return n === r("AdsAPIOptimizationGoals").EVENT_RESPONSES
            ? e
            : r("AdsDefaultCampaignOptimizationPlugin").getDefaultBidAmount(
                n,
                o,
              );
        },
        getSupportedOptimizationGoals: function () {
          var e;
          return [
            (e = r("AdsAPIOptimizationGoals")).EVENT_RESPONSES,
            e.IMPRESSIONS,
            e.POST_ENGAGEMENT,
            e.REACH,
          ];
        },
      }),
      u = s;
    l.default = u;
  },
  98,
);
