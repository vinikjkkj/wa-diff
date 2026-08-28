__d(
  "AdsAuctionAppInstallsInstreamVideosSupportPlugin",
  [
    "AdsAPIObjectives",
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
          key: "auction/app_installs",
          pivots: {
            objective: r("AdsAPIObjectives").APP_INSTALLS,
            buyingType: r("AdsBuyingTypes").AUCTION,
          },
          isEligibleForExclusiveBuying: function () {
            return !1;
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
      ),
      s = e;
    l.default = s;
  },
  98,
);
