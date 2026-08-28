__d(
  "AdsCampaignValueMinROASConversionWindowPlugin",
  [
    "AdsAPIBidStrategies",
    "AdsAPIOptimizationGoals",
    "AdsDefaultConversionWindowPlugin",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = babelHelpers.extends({}, r("AdsDefaultConversionWindowPlugin"), {
        type: "campaign/conversion_window",
        key: "value/min_roas",
        pivots: {
          optimizationGoal: r("AdsAPIOptimizationGoals").VALUE,
          bidStrategy: r("AdsAPIBidStrategies").LOWEST_COST_WITH_MIN_ROAS,
        },
      }),
      s = e;
    l.default = s;
  },
  98,
);
