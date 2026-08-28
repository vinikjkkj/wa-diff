__d(
  "AdsOutcomeLeadsMessagesCampaignOptimizationPlugin",
  [
    "AdsAPICampaignRecordUtils",
    "AdsAPIObjectives",
    "AdsAPIOptimizationGoals",
    "AdsMessagesCampaignOptimizationPlugin",
    "AdsPromotedObjectTypes",
    "CTXMDAdsOptimizationStoreUtils",
    "ClickToMessageCTXMDFeatureGating",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = babelHelpers.extends(
        {},
        r("AdsMessagesCampaignOptimizationPlugin"),
        {
          type: "campaign/optimization",
          key: "outcome_leads_messages",
          pivots: {
            objective: r("AdsAPIObjectives").OUTCOME_LEADS,
            promotedObjectType: r("AdsPromotedObjectTypes").MESSENGER,
          },
          getSupportedOptimizationGoals: function (t) {
            var e = t.destinationType,
              n = o(
                "ClickToMessageCTXMDFeatureGating",
              ).isCtxmdLeadsObjectiveEnabled(!1)
                ? o(
                    "CTXMDAdsOptimizationStoreUtils",
                  ).getDefaultOptimizationGoalForCTXMDLeadsDestination(e)
                : null;
            return [
              n != null ? n : r("AdsAPIOptimizationGoals").LEAD_GENERATION,
            ];
          },
          getDefaultOptimizationGoal: function (t) {
            var e = t.campaign,
              n =
                e != null
                  ? o("AdsAPICampaignRecordUtils").getDestinationType(e)
                  : null,
              a = o(
                "ClickToMessageCTXMDFeatureGating",
              ).isCtxmdLeadsObjectiveEnabled(!1)
                ? o(
                    "CTXMDAdsOptimizationStoreUtils",
                  ).getDefaultOptimizationGoalForCTXMDLeadsDestination(n)
                : null;
            return a != null ? a : r("AdsAPIOptimizationGoals").LEAD_GENERATION;
          },
        },
      ),
      s = e;
    l.default = s;
  },
  98,
);
