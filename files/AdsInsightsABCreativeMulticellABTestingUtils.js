__d(
  "AdsInsightsABCreativeMulticellABTestingUtils",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      var t = ["CREATIVE_FATIGUE", "AD_CREATED", "AD_CREATIVE_CHANGED"];
      return t.some(function (t) {
        return t === e;
      });
    }
    i.isExplanationEligibleForCreativeMulticellABTesting = e;
  },
  66,
);
