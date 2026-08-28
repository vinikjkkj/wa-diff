__d(
  "AdsPageLikesCampaignOptimizationPlugin",
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
        key: "page_likes",
        pivots: { objective: r("AdsAPIObjectives").PAGE_LIKES },
        getSupportedOptimizationGoals: function () {
          return [r("AdsAPIOptimizationGoals").PAGE_LIKES];
        },
        getDefaultBidAmount: function (n, o) {
          return n === r("AdsAPIOptimizationGoals").PAGE_LIKES
            ? e
            : r("AdsDefaultCampaignOptimizationPlugin").getDefaultBidAmount(
                n,
                o,
              );
        },
      }),
      u = s;
    l.default = u;
  },
  98,
);
