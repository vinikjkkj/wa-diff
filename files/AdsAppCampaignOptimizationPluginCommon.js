__d(
  "AdsAppCampaignOptimizationPluginCommon",
  ["AdsAPIBillingEvents", "AdsDefaultCampaignOptimizationPlugin"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 378;
    function s(t, n) {
      return n === r("AdsAPIBillingEvents").LINK_CLICKS
        ? e
        : r("AdsDefaultCampaignOptimizationPlugin").getDefaultBidAmount(t, n);
    }
    var u = { getDefaultBidAmount: s };
    l.default = u;
  },
  98,
);
