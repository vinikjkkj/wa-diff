__d(
  "AdsOutcomeLeadsAppCampaignOptimizationPlugin",
  [
    "AdsAPIObjectives",
    "AdsOutcomeAppCampaignOptimizationPlugin",
    "AdsPromotedObjectTypes",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = babelHelpers.extends(
        {},
        r("AdsOutcomeAppCampaignOptimizationPlugin"),
        {
          type: "campaign/optimization",
          key: "outcome_leads_app",
          pivots: {
            objective: r("AdsAPIObjectives").OUTCOME_LEADS,
            promotedObjectType: r("AdsPromotedObjectTypes").MOBILE_APP,
          },
        },
      ),
      s = e;
    l.default = s;
  },
  98,
);
