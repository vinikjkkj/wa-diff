__d(
  "AdsOutcomeLeadsCampaignOptimizationPlugin",
  [
    "AdsAPIObjectives",
    "AdsAPIOptimizationGoals",
    "AdsConversionsCampaignOptimizationPlugin",
    "AdsPromotedObjectTypes",
    "isLeadGenNPVOEnabledForAccount",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = babelHelpers.extends(
        {},
        r("AdsConversionsCampaignOptimizationPlugin"),
        {
          type: "campaign/optimization",
          key: "outcome_leads",
          pivots: { objective: r("AdsAPIObjectives").OUTCOME_LEADS },
          getSupportedOptimizationGoals: function (t) {
            var e = t.promotedObjectType;
            return [r("AdsAPIOptimizationGoals").OFFSITE_CONVERSIONS].concat(
              e === r("AdsPromotedObjectTypes").PIXEL &&
                r("isLeadGenNPVOEnabledForAccount")()
                ? [r("AdsAPIOptimizationGoals").VALUE]
                : [],
            );
          },
          getDefaultOptimizationGoal: function (t) {
            return r("AdsAPIOptimizationGoals").OFFSITE_CONVERSIONS;
          },
        },
      ),
      s = e;
    l.default = s;
  },
  98,
);
