__d(
  "AdsAuctionConversionsInstreamVideosSupportPlugin",
  ["AdsAPIObjectives", "AdsAccountUtils", "AdsBuyingTypes"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        type: "ads_instream_videos_support",
        key: "auction/conversions",
        pivots: {
          objective: r("AdsAPIObjectives").CONVERSIONS,
          buyingType: r("AdsBuyingTypes").AUCTION,
        },
        isEligibleForExclusiveBuying: function (t) {
          var e = r("AdsAccountUtils").hasCapabilityFromList(
              t.capabilities,
              "ALLOW_INSTREAM_VIDEOS_PLACEMENT_ONLY",
            ),
            n = r("AdsAccountUtils").hasCapabilityFromList(
              t.capabilities,
              "ALLOW_INSTREAM_ONLY_FOR_CONVERSIONS_OBJECTIVE",
            );
          return e && n;
        },
        isEligibleForCPVUpsell: function () {
          return !1;
        },
        isInstreamVideosDefaultOptInSupport: function () {
          return !1;
        },
        isEligibleForNonInterruptiveTip: function () {
          return !1;
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
