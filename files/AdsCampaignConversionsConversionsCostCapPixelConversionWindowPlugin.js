__d(
  "AdsCampaignConversionsConversionsCostCapPixelConversionWindowPlugin",
  [
    "AdsAPIBidStrategies",
    "AdsAPIObjectives",
    "AdsAPIOptimizationGoals",
    "AdsDefaultConversionWindowPlugin",
    "AdsDeliveryAttributionUtils",
    "AdsPromotedObjectTypes",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = babelHelpers.extends({}, r("AdsDefaultConversionWindowPlugin"), {
        type: "campaign/conversion_window",
        key: "conversions/conversions/cost_cap/pixel",
        pivots: {
          objective: r("AdsAPIObjectives").CONVERSIONS,
          optimizationGoal: r("AdsAPIOptimizationGoals").OFFSITE_CONVERSIONS,
          bidStrategy: r("AdsAPIBidStrategies").COST_CAP,
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
        getDefaultEngagedVideoViewWindowForRBA: function (t) {
          return t != null ? 1 : null;
        },
      }),
      s = e;
    l.default = s;
  },
  98,
);
