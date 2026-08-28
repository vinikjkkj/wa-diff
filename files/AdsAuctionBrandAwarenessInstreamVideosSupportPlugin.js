__d(
  "AdsAuctionBrandAwarenessInstreamVideosSupportPlugin",
  [
    "AdsAPIObjectives",
    "AdsAccountUtils",
    "AdsBuyingTypes",
    "AdsDefaultInstreamVideosSupportPlugin",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = babelHelpers.extends(
        {},
        r("AdsDefaultInstreamVideosSupportPlugin"),
        {
          type: "ads_instream_videos_support",
          key: "auction/brand_awareness",
          pivots: {
            objective: r("AdsAPIObjectives").BRAND_AWARENESS,
            buyingType: r("AdsBuyingTypes").AUCTION,
          },
          isEligibleForExclusiveBuying: function (t) {
            return r("AdsAccountUtils").hasCapabilityFromList(
              t.capabilities,
              "ALLOW_INSTREAM_VIDEOS_PLACEMENT_ONLY",
            );
          },
          isEligibleForCPVUpsell: function () {
            return !1;
          },
          isInstreamVideosDefaultOptInSupport: function (t) {
            return !0;
          },
        },
      ),
      s = e;
    l.default = s;
  },
  98,
);
