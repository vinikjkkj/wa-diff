__d(
  "AdsOutcomeLeadsLeadFromIGDirectCampaignOptimizationPlugin",
  [
    "AdsAPIObjectives",
    "AdsAPIOptimizationGoals",
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
          key: "outcome_leads_lead_from_ig_direct",
          pivots: {
            objective: r("AdsAPIObjectives").OUTCOME_LEADS,
            promotedObjectType: r("AdsPromotedObjectTypes").LEAD_FROM_IG_DIRECT,
          },
          getSupportedOptimizationGoals: function () {
            return [r("AdsAPIOptimizationGoals").LEAD_GENERATION];
          },
          getDefaultOptimizationGoal: function () {
            return r("AdsAPIOptimizationGoals").LEAD_GENERATION;
          },
        },
      ),
      s = e;
    l.default = s;
  },
  98,
);
