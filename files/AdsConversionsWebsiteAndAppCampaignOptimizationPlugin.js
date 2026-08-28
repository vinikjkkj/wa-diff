__d(
  "AdsConversionsWebsiteAndAppCampaignOptimizationPlugin",
  [
    "AdsAPIObjectives",
    "AdsAPIOptimizationGoals",
    "AdsConversionsCampaignOptimizationPlugin",
    "AdsPromotedObjectTypes",
    "AdsValueOptimizationUtils",
    "AdvertiserSiloedValueOptimizationGoalGating",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = babelHelpers.extends(
        {},
        r("AdsConversionsCampaignOptimizationPlugin"),
        {
          type: "campaign/optimization",
          key: "conversions/website-and-app",
          pivots: {
            objective: r("AdsAPIObjectives").CONVERSIONS,
            promotedObjectType: r("AdsPromotedObjectTypes").WEB_AND_APP,
          },
          getCanUseAveragePricePacing: function () {
            return !1;
          },
          getSupportedOptimizationGoals: function (t) {
            var e = t.isFullFunnelBeta,
              n = t.objective;
            return e === !0
              ? [r("AdsAPIOptimizationGoals").OFFSITE_CONVERSIONS]
              : [
                  r("AdsAPIOptimizationGoals").OFFSITE_CONVERSIONS,
                  r("AdsAPIOptimizationGoals").VALUE,
                ].concat(
                  n === r("AdsAPIObjectives").OUTCOME_SALES &&
                    o(
                      "AdvertiserSiloedValueOptimizationGoalGating",
                    ).isAdvertiserSiloedValueOptimizationGoalOnSalesEnabled()
                    ? [r("AdsAPIOptimizationGoals").ADVERTISER_SILOED_VALUE]
                    : [],
                );
          },
          getDefaultEngagedVideoViewWindowLength: function (t, n) {
            return 1;
          },
          getDefaultOptimizationGoal: function () {
            return r("AdsAPIOptimizationGoals").OFFSITE_CONVERSIONS;
          },
          getViewConversionWindowOptions: function (t) {
            return t === r("AdsAPIOptimizationGoals").VALUE
              ? [1]
              : r(
                  "AdsConversionsCampaignOptimizationPlugin",
                ).getViewConversionWindowOptions(t);
          },
          getDefaultViewConversionWindowLength: function (t, n, a) {
            return a === r("AdsAPIObjectives").OUTCOME_SALES &&
              t === r("AdsAPIOptimizationGoals").VALUE &&
              o(
                "AdsValueOptimizationUtils",
              ).isViewThroughDefaultEnabledForVOQE()
              ? 1
              : r(
                  "AdsConversionsCampaignOptimizationPlugin",
                ).getDefaultViewConversionWindowLength(t, n);
          },
        },
      ),
      s = e;
    l.default = s;
  },
  98,
);
