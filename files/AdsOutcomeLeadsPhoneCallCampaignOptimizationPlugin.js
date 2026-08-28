__d(
  "AdsOutcomeLeadsPhoneCallCampaignOptimizationPlugin",
  [
    "AdsAPIObjectives",
    "AdsLeadGenerationCampaignOptimizationPlugin",
    "AdsPromotedObjectTypes",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = babelHelpers.extends(
        {},
        r("AdsLeadGenerationCampaignOptimizationPlugin"),
        {
          type: "campaign/optimization",
          key: "outcome_leads_phone_call",
          pivots: {
            objective: r("AdsAPIObjectives").OUTCOME_LEADS,
            promotedObjectType: r("AdsPromotedObjectTypes").PHONE_CALL,
          },
        },
      ),
      s = e;
    l.default = s;
  },
  98,
);
