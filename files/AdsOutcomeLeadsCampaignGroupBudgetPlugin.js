__d(
  "AdsOutcomeLeadsCampaignGroupBudgetPlugin",
  [
    "AdsAPIObjectives",
    "AdsBidControlType",
    "AdsDefaultCampaignGroupBudgetPlugin",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = babelHelpers.extends({}, r("AdsDefaultCampaignGroupBudgetPlugin"), {
        type: "campaign_group/budget",
        key: "outcome_leads",
        pivots: { objective: r("AdsAPIObjectives").OUTCOME_LEADS },
        getBidControlType: function () {
          return r("AdsBidControlType").ANY;
        },
      }),
      s = e;
    l.default = s;
  },
  98,
);
