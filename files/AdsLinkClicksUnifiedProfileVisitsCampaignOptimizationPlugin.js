__d(
  "AdsLinkClicksUnifiedProfileVisitsCampaignOptimizationPlugin",
  [
    "AdsAPIObjectives",
    "AdsAPIOptimizationGoals",
    "AdsLinkClicksCampaignOptimizationPlugin",
    "AdsPromotedObjectTypes",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = babelHelpers.extends(
        {},
        r("AdsLinkClicksCampaignOptimizationPlugin"),
        {
          type: "campaign/optimization",
          key: "link_clicks/unified_profile_visits",
          pivots: {
            objective: r("AdsAPIObjectives").LINK_CLICKS,
            promotedObjectType: r("AdsPromotedObjectTypes")
              .IG_PROFILE_AND_FB_PAGE,
          },
          getDefaultOptimizationGoal: function () {
            return r("AdsAPIOptimizationGoals").PROFILE_VISIT;
          },
          getSupportedOptimizationGoals: function () {
            return [r("AdsAPIOptimizationGoals").PROFILE_VISIT];
          },
        },
      ),
      s = e;
    l.default = s;
  },
  98,
);
