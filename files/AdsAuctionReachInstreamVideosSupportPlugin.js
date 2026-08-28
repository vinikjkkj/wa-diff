__d(
  "AdsAuctionReachInstreamVideosSupportPlugin",
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
          key: "auction/reach",
          pivots: {
            objective: r("AdsAPIObjectives").REACH,
            buyingType: r("AdsBuyingTypes").AUCTION,
          },
          isEligibleForExclusiveBuying: function (t) {
            return r("AdsAccountUtils").hasCapabilityFromList(
              t.capabilities,
              "ALLOW_INSTREAM_VIDEOS_PLACEMENT_ONLY",
            );
          },
          isEligibleForNonInterruptiveTip: function () {
            return !1;
          },
        },
      ),
      s = e;
    l.default = s;
  },
  98,
);
