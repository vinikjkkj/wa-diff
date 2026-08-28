__d(
  "AdsCampaignConversionsPixelConversionWindowPlugin",
  [
    "AdsAPIOptimizationGoals",
    "AdsDefaultConversionWindowPlugin",
    "AdsDeliveryAttributionUtils",
    "AdsPromotedObjectTypes",
    "adsEVCDefaultingExperimentUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = babelHelpers.extends({}, r("AdsDefaultConversionWindowPlugin"), {
        type: "campaign/conversion_window",
        key: "conversions/pixel",
        pivots: {
          optimizationGoal: r("AdsAPIOptimizationGoals").OFFSITE_CONVERSIONS,
          promotedObjectType: r("AdsPromotedObjectTypes").PIXEL,
        },
        getDefaultClickConversionWindowForRBA: function (t) {
          return o(
            "AdsDeliveryAttributionUtils",
          ).getAccountClickAttributionSpec(t);
        },
        getDefaultViewConversionWindowForRBA: function (t) {
          return o("AdsDeliveryAttributionUtils").getAccountHasViewAttribution(
            t,
          )
            ? 1
            : 0;
        },
        getDefaultEngagedVideoViewWindowForRBA: function () {
          return o("adsEVCDefaultingExperimentUtils").isEVCDefaultingEnabled()
            ? 1
            : r(
                "AdsDefaultConversionWindowPlugin",
              ).getDefaultEngagedVideoViewWindowForRBA();
        },
      }),
      s = e;
    l.default = s;
  },
  98,
);
