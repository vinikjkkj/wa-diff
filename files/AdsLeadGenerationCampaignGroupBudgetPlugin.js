__d(
  "AdsLeadGenerationCampaignGroupBudgetPlugin",
  [
    "AdsAPIBidStrategies",
    "AdsAPIBillingEvents",
    "AdsAPIObjectives",
    "AdsBidControlType",
    "AdsDefaultCampaignGroupBudgetPlugin",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = babelHelpers.extends({}, r("AdsDefaultCampaignGroupBudgetPlugin"), {
        type: "campaign_group/budget",
        key: "lead_generation",
        pivots: { objective: r("AdsAPIObjectives").LEAD_GENERATION },
        getBidControlType: function () {
          return r("AdsBidControlType").ANY;
        },
        getDisabledBillingEvents: function (t) {
          return t === r("AdsAPIBidStrategies").TARGET_COST ||
            t === r("AdsAPIBidStrategies").COST_CAP
            ? Object.keys(r("AdsAPIBillingEvents")).filter(function (e) {
                return e !== r("AdsAPIBillingEvents").IMPRESSIONS;
              })
            : [];
        },
      }),
      s = e;
    l.default = s;
  },
  98,
);
