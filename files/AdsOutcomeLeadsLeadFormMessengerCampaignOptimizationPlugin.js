__d(
  "AdsOutcomeLeadsLeadFormMessengerCampaignOptimizationPlugin",
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
          key: "outcome_leads_lead_form_messenger",
          pivots: {
            objective: r("AdsAPIObjectives").OUTCOME_LEADS,
            promotedObjectType: r("AdsPromotedObjectTypes").LEAD_FORM_MESSENGER,
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
