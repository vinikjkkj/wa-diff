__d(
  "AdsOutcomeWebsiteCampaignOptimizationPlugin",
  [
    "AdsAPIObjectives",
    "AdsAPIOptimizationGoals",
    "AdsConversionsPixelCampaignOptimizationPlugin",
    "AdsLandingPageViewsUtils",
    "AdsPromotedObjectTypes",
    "AdvertiserSiloedValueOptimizationGoalGating",
    "isLeadGenNPVOEnabledForAccount",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = babelHelpers.extends(
        {},
        r("AdsConversionsPixelCampaignOptimizationPlugin"),
        {
          type: "campaign/optimization",
          key: "outcome_website",
          pivots: {
            objective: r("AdsAPIObjectives").OUTCOME_LEADS,
            promotedObjectType: r("AdsPromotedObjectTypes").PIXEL,
          },
          getSupportedOptimizationGoals: function (t) {
            var e = t.isASACampaign,
              n = t.isFullFunnelBeta,
              a = t.objective,
              i =
                a === r("AdsAPIObjectives").OUTCOME_SALES ||
                r("isLeadGenNPVOEnabledForAccount")(),
              l =
                a === r("AdsAPIObjectives").OUTCOME_SALES &&
                o(
                  "AdvertiserSiloedValueOptimizationGoalGating",
                ).isAdvertiserSiloedValueOptimizationGoalOnSalesEnabled();
            if (e === !0)
              return [r("AdsAPIOptimizationGoals").OFFSITE_CONVERSIONS].concat(
                i ? [r("AdsAPIOptimizationGoals").VALUE] : [],
                l ? [r("AdsAPIOptimizationGoals").ADVERTISER_SILOED_VALUE] : [],
              );
            if (n === !0)
              return [r("AdsAPIOptimizationGoals").OFFSITE_CONVERSIONS];
            var s = o(
              "AdsLandingPageViewsUtils",
            ).shouldUseUnifiedTrafficProduct();
            return [r("AdsAPIOptimizationGoals").OFFSITE_CONVERSIONS].concat(
              i ? [r("AdsAPIOptimizationGoals").VALUE] : [],
              l ? [r("AdsAPIOptimizationGoals").ADVERTISER_SILOED_VALUE] : [],
              [r("AdsAPIOptimizationGoals").LANDING_PAGE_VIEWS],
              s ||
                o("AdsLandingPageViewsUtils").shouldUseLPVToVisitsRebranding()
                ? []
                : [r("AdsAPIOptimizationGoals").LINK_CLICKS],
              [
                r("AdsAPIOptimizationGoals").IMPRESSIONS,
                r("AdsAPIOptimizationGoals").REACH,
              ],
            );
          },
          getDefaultOptimizationGoal: function (t) {
            return r("AdsAPIOptimizationGoals").OFFSITE_CONVERSIONS;
          },
          getViewConversionWindowOptions: function (t) {
            return r("isLeadGenNPVOEnabledForAccount")() &&
              t === r("AdsAPIOptimizationGoals").VALUE
              ? [1]
              : r(
                  "AdsConversionsPixelCampaignOptimizationPlugin",
                ).getViewConversionWindowOptions(t);
          },
        },
      ),
      s = e;
    l.default = s;
  },
  98,
);
