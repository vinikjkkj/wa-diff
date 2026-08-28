__d(
  "AdsOutcomeAppCampaignOptimizationPlugin",
  [
    "AdsAPIObjectives",
    "AdsAPIOptimizationGoals",
    "AdsConversionsAppCampaignOptimizationPlugin",
    "AdsLandingPageViewsUtils",
    "AdsPromotedObjectTypes",
    "AppAndWebLPVUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = babelHelpers.extends(
        {},
        r("AdsConversionsAppCampaignOptimizationPlugin"),
        {
          type: "campaign/optimization",
          key: "outcome_app",
          pivots: {
            objective: r("AdsAPIObjectives").OUTCOME_LEADS,
            promotedObjectType: r("AdsPromotedObjectTypes").MOBILE_APP,
          },
          getSupportedOptimizationGoals: function () {
            return [r("AdsAPIOptimizationGoals").OFFSITE_CONVERSIONS].concat(
              o("AdsLandingPageViewsUtils").shouldUseLPVToVisitsRebranding()
                ? []
                : [r("AdsAPIOptimizationGoals").LINK_CLICKS],
              o("AppAndWebLPVUtils").shouldUseAppLpvGA()
                ? [r("AdsAPIOptimizationGoals").LANDING_PAGE_VIEWS]
                : [],
              [r("AdsAPIOptimizationGoals").REACH],
            );
          },
          getDefaultOptimizationGoal: function () {
            return r("AdsAPIOptimizationGoals").OFFSITE_CONVERSIONS;
          },
          getCanUseConversionWindow: function () {
            return !1;
          },
          getDefaultConversionWindowLength: function () {
            return 1;
          },
          getClickConversionWindowOptions: function () {
            return [1];
          },
        },
      ),
      s = e;
    l.default = s;
  },
  98,
);
