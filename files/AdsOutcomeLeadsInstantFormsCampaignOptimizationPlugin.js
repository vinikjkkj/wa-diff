__d(
  "AdsOutcomeLeadsInstantFormsCampaignOptimizationPlugin",
  [
    "AdsAPIObjectives",
    "AdsAPIOptimizationGoals",
    "AdsLeadGenerationCampaignOptimizationPlugin",
    "AdsOptimizationGoalUtils",
    "AdsPromotedObjectTypes",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = babelHelpers.extends(
        {},
        r("AdsLeadGenerationCampaignOptimizationPlugin"),
        {
          type: "campaign/optimization",
          key: "outcome_leads_instant_forms",
          pivots: {
            objective: r("AdsAPIObjectives").OUTCOME_LEADS,
            promotedObjectType: r("AdsPromotedObjectTypes").ON_AD,
          },
          getSupportedOptimizationGoals: function (t) {
            return [
              r("AdsAPIOptimizationGoals").LEAD_GENERATION,
              r("AdsAPIOptimizationGoals").QUALITY_LEAD,
            ];
          },
          getDefaultOptimizationGoal: function (t) {
            var e = t.account;
            return o(
              "AdsOptimizationGoalUtils",
            ).shouldDefaultToQualityLeadOptimizationGoal()
              ? r("AdsAPIOptimizationGoals").QUALITY_LEAD
              : r("AdsAPIOptimizationGoals").LEAD_GENERATION;
          },
          getCanUseAveragePricePacing: function (t, n, o) {
            return t !== r("AdsAPIOptimizationGoals").QUALITY_LEAD;
          },
        },
      ),
      s = e;
    l.default = s;
  },
  98,
);
