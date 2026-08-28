__d(
  "AdsAuctionCatalogSalesInstreamVideosSupportPlugin",
  ["AdsAPIObjectives", "AdsBuyingTypes"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        type: "ads_instream_videos_support",
        key: "auction/catalog_sales",
        pivots: {
          objective: r("AdsAPIObjectives").PRODUCT_CATALOG_SALES,
          buyingType: r("AdsBuyingTypes").AUCTION,
        },
        isEligibleForExclusiveBuying: function (t) {
          return !1;
        },
        isEligibleForCPVUpsell: function () {
          return !1;
        },
        isInstreamVideosDefaultOptInSupport: function () {
          return !1;
        },
        isEligibleForNonInterruptiveTip: function (t, n) {
          return !1;
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
