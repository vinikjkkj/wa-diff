__d(
  "isCampaignBidStrategyEligibleForVAR",
  ["AdsAPIBidStrategies", "AdsValueGkUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      if (e) return !0;
      var a =
          t === r("AdsAPIBidStrategies").COST_CAP ||
          n === r("AdsAPIBidStrategies").COST_CAP,
        i =
          (t === r("AdsAPIBidStrategies").LOWEST_COST_WITH_MIN_ROAS ||
            n === r("AdsAPIBidStrategies").LOWEST_COST_WITH_MIN_ROAS) &&
          o("AdsValueGkUtils").isAdsValueRulesWithMinRoasEnabled();
      return a || i;
    }
    l.isCampaignBidStrategyEligibleForVAR = e;
  },
  98,
);
