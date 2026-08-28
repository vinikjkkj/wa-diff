__d(
  "AdsOutcomeLeadsProductSetCampaignOptimizationPlugin",
  [
    "AdsAPIObjectives",
    "AdsOutcomeLeadsInstantFormsCampaignOptimizationPlugin",
    "AdsPromotedObjectTypes",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = babelHelpers.extends(
        {},
        r("AdsOutcomeLeadsInstantFormsCampaignOptimizationPlugin"),
        {
          type: "campaign/optimization",
          key: "outcome_leads_product_set",
          pivots: {
            objective: r("AdsAPIObjectives").OUTCOME_LEADS,
            promotedObjectType: r("AdsPromotedObjectTypes").PRODUCT_SET,
          },
        },
      ),
      s = e;
    l.default = s;
  },
  98,
);
