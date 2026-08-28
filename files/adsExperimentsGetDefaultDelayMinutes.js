__d(
  "adsExperimentsGetDefaultDelayMinutes",
  [
    "AdsExperimentsCreateTestConstants",
    "DateConsts",
    "adsExperimentsStudyHasHoldout",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = function (t, n) {
      var e =
        o("AdsExperimentsCreateTestConstants").DEFAULT_TEST_DELAY_HRS *
        o("DateConsts").MIN_PER_HOUR;
      if (t == null) return e;
      switch (t) {
        case "CAMPAIGN_COMPARISON":
          return r("adsExperimentsStudyHasHoldout")(n)
            ? e
            : o("AdsExperimentsCreateTestConstants").MINIMUM_TEST_DELAY_MIN;
        case "OPTIMAL_STRATEGY_CBO":
        case "CROSS_CHANNEL_CONVERSION_OPTIMIZATION_TEST":
        case "SPLIT_TEST":
          return o("AdsExperimentsCreateTestConstants").MINIMUM_TEST_DELAY_MIN;
        case "ACCOUNT_PERFORMANCE":
        case "ATTRIBUTION_TEST":
        case "BRAND_IMPACT":
        case "CONVERSION_LIFT":
        case "LIFT_STUDY":
          return e;
        default:
          return e;
      }
    };
    l.getDefaultDelayMinutes = e;
  },
  98,
);
