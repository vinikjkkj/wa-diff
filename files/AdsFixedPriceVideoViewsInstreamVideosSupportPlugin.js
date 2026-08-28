__d(
  "AdsFixedPriceVideoViewsInstreamVideosSupportPlugin",
  [
    "AdsAPIObjectives",
    "AdsAccountUtils",
    "AdsAudienceDirectConfig",
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
          key: "fixed_price/video_views",
          pivots: {
            objective: r("AdsAPIObjectives").VIDEO_VIEWS,
            buyingType: r("AdsBuyingTypes").FIXED_PRICE,
          },
          isEligibleForExclusiveBuying: function (t) {
            var e = r("AdsAccountUtils").hasCapabilityFromList(
              t.capabilities,
              "ALLOW_INSTREAM_VIDEOS_PLACEMENT_ONLY",
            );
            return e && !!r("AdsAudienceDirectConfig").isDirectDealsUser;
          },
          isEligibleForCPVUpsell: function () {
            return !1;
          },
          isInstreamVideosDefaultOptInSupport: function () {
            return !1;
          },
        },
      ),
      s = e;
    l.default = s;
  },
  98,
);
