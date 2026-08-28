__d(
  "AdsConversionsWebsiteAndShopCampaignOptimizationPlugin",
  [
    "AdsAPIObjectives",
    "AdsAPIOptimizationGoals",
    "AdsConversionsCampaignOptimizationPlugin",
    "AdsPromotedObjectTypes",
    "adsEVCDefaultingExperimentUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = babelHelpers.extends(
        {},
        r("AdsConversionsCampaignOptimizationPlugin"),
        {
          type: "campaign/optimization",
          key: "conversions/website-and-shop",
          pivots: {
            objective: r("AdsAPIObjectives").CONVERSIONS,
            promotedObjectType: r("AdsPromotedObjectTypes").WEB_AND_SHOP,
          },
          getCanUseAveragePricePacing: function () {
            return !1;
          },
          getSupportedOptimizationGoals: function () {
            return [
              r("AdsAPIOptimizationGoals").OFFSITE_CONVERSIONS,
              r("AdsAPIOptimizationGoals").VALUE,
            ];
          },
          getDefaultOptimizationGoal: function () {
            return r("AdsAPIOptimizationGoals").OFFSITE_CONVERSIONS;
          },
          getDefaultEngagedVideoViewWindowLength: function (t, n) {
            return t === r("AdsAPIOptimizationGoals").OFFSITE_CONVERSIONS &&
              o(
                "adsEVCDefaultingExperimentUtils",
              ).isEVCDefaultingEnabledForShopsAds()
              ? 1
              : r(
                  "AdsConversionsCampaignOptimizationPlugin",
                ).getDefaultEngagedVideoViewWindowLength(t, n);
          },
        },
      ),
      s = e;
    l.default = s;
  },
  98,
);
