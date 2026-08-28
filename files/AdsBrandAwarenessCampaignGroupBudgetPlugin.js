__d(
  "AdsBrandAwarenessCampaignGroupBudgetPlugin",
  [
    "AdsAPIObjectives",
    "AdsBidControlType",
    "AdsDefaultCampaignGroupBudgetPlugin",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = babelHelpers.extends({}, r("AdsDefaultCampaignGroupBudgetPlugin"), {
        type: "campaign_group/budget",
        key: "brand_awareness",
        pivots: { objective: r("AdsAPIObjectives").BRAND_AWARENESS },
        getBidControlType: function () {
          return r("AdsBidControlType").AUTO_BID_ONLY;
        },
      }),
      s = e;
    l.default = s;
  },
  98,
);
