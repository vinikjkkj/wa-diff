__d(
  "AdsOutcomeLeadsWebsiteCampaignOptimizationPlugin",
  [
    "AdsAPIObjectives",
    "AdsOutcomeWebsiteCampaignOptimizationPlugin",
    "AdsPromotedObjectTypes",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = babelHelpers.extends(
        {},
        r("AdsOutcomeWebsiteCampaignOptimizationPlugin"),
        {
          type: "campaign/optimization",
          key: "outcome_leads_website",
          pivots: {
            objective: r("AdsAPIObjectives").OUTCOME_LEADS,
            promotedObjectType: r("AdsPromotedObjectTypes").PIXEL,
          },
        },
      ),
      s = e;
    l.default = s;
  },
  98,
);
