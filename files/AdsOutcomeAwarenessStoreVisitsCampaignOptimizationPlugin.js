__d(
  "AdsOutcomeAwarenessStoreVisitsCampaignOptimizationPlugin",
  [
    "AdsAPIObjectives",
    "AdsDefaultCampaignOptimizationPlugin",
    "AdsPromotedObjectTypes",
    "AdsStoreVisitsPlacePageSetCampaignOptimizationPlugin",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = babelHelpers.extends(
        {},
        r("AdsDefaultCampaignOptimizationPlugin"),
        r("AdsStoreVisitsPlacePageSetCampaignOptimizationPlugin"),
        {
          type: "campaign/optimization",
          key: "outcome_awareness_store_visits",
          pivots: {
            objective: r("AdsAPIObjectives").OUTCOME_AWARENESS,
            promotedObjectType: r("AdsPromotedObjectTypes").PLACE_PAGE_SET_ID,
          },
        },
      ),
      s = e;
    l.default = s;
  },
  98,
);
