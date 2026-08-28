__d(
  "AdsOutcomeEngagementInstagramProfileAndFacebookPageOptimizationPlugin",
  [
    "AdsAPIObjectives",
    "AdsAPIOptimizationGoals",
    "AdsDefaultCampaignOptimizationPlugin",
    "AdsPromotedObjectTypes",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 500,
      s = babelHelpers.extends({}, r("AdsDefaultCampaignOptimizationPlugin"), {
        type: "campaign/optimization",
        key: "outcome_engagement_instagram_profile_and_facebook_page",
        pivots: {
          objective: r("AdsAPIObjectives").OUTCOME_ENGAGEMENT,
          promotedObjectType: r("AdsPromotedObjectTypes")
            .IG_PROFILE_AND_FB_PAGE,
        },
        getSupportedOptimizationGoals: function () {
          return [
            r("AdsAPIOptimizationGoals").PROFILE_AND_PAGE_ENGAGEMENT,
            r("AdsAPIOptimizationGoals").PAGE_LIKES,
          ];
        },
        getDefaultOptimizationGoal: function (t) {
          return r("AdsAPIOptimizationGoals").PROFILE_AND_PAGE_ENGAGEMENT;
        },
        getDefaultBidAmount: function (n, o) {
          return n === r("AdsAPIOptimizationGoals").PAGE_LIKES
            ? e
            : r("AdsDefaultCampaignOptimizationPlugin").getDefaultBidAmount(
                n,
                o,
              );
        },
      }),
      u = s;
    l.default = u;
  },
  98,
);
