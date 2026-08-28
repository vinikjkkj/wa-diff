__d(
  "AdsOutcomeSalesAppCampaignOptimizationPlugin",
  [
    "AdsAPIObjectives",
    "AdsAPIOptimizationGoals",
    "AdsLandingPageViewsUtils",
    "AdsOutcomeAppCampaignOptimizationPlugin",
    "AdsPromotedObjectTypes",
    "AppAndWebLPVUtils",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = babelHelpers.extends(
        {},
        r("AdsOutcomeAppCampaignOptimizationPlugin"),
        {
          type: "campaign/optimization",
          key: "outcome_sales_app",
          pivots: {
            objective: r("AdsAPIObjectives").OUTCOME_SALES,
            promotedObjectType: r("AdsPromotedObjectTypes").MOBILE_APP,
          },
          getSupportedOptimizationGoals: function () {
            var e = [r("AdsAPIOptimizationGoals").OFFSITE_CONVERSIONS].concat(
              o("AdsLandingPageViewsUtils").shouldUseLPVToVisitsRebranding()
                ? []
                : [r("AdsAPIOptimizationGoals").LINK_CLICKS],
              o("AppAndWebLPVUtils").shouldUseAppLpvGA()
                ? [r("AdsAPIOptimizationGoals").LANDING_PAGE_VIEWS]
                : [],
              [r("AdsAPIOptimizationGoals").REACH],
            );
            return r("gkx")("25015")
              ? [].concat(e, [r("AdsAPIOptimizationGoals").VALUE])
              : e;
          },
          getCanUseConversionWindow: function (t, n, o) {
            return n == null || t === r("AdsAPIOptimizationGoals").VALUE
              ? !1
              : !!(
                  t === r("AdsAPIOptimizationGoals").OFFSITE_CONVERSIONS &&
                  r("gkx")("19786")
                );
          },
          getDefaultConversionWindowLength: function (t) {
            return t === r("AdsAPIOptimizationGoals").VALUE
              ? 1
              : r("gkx")("19786")
                ? 7
                : 1;
          },
          getClickConversionWindowOptions: function (t) {
            return t === r("AdsAPIOptimizationGoals").VALUE
              ? [1]
              : r("gkx")("19786")
                ? [1, 7]
                : [1];
          },
          getDefaultViewConversionWindowLength: function (t) {
            return t === r("AdsAPIOptimizationGoals").VALUE
              ? 0
              : r("gkx")("19786")
                ? 1
                : 0;
          },
          getViewConversionWindowOptions: function (t) {
            return t === r("AdsAPIOptimizationGoals").VALUE
              ? []
              : r("gkx")("19786")
                ? [1]
                : [];
          },
        },
      ),
      s = e;
    l.default = s;
  },
  98,
);
