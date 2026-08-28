__d(
  "AdsFullFunnelAwarenessCampaignOptimizationPlugin",
  [
    "AdsAPIObjectives",
    "AdsOutcomeAwarenessCampaignOptimizationPlugin",
    "AdsPromotedObjectTypes",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = babelHelpers.extends(
        {},
        r("AdsOutcomeAwarenessCampaignOptimizationPlugin"),
        {
          type: "campaign/optimization",
          key: "full_funnel_awareness",
          pivots: {
            objective: r("AdsAPIObjectives").OUTCOME_SALES,
            promotedObjectType: r("AdsPromotedObjectTypes").NONE,
          },
        },
      ),
      s = e;
    l.default = s;
  },
  98,
);
