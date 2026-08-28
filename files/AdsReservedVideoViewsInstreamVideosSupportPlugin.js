__d(
  "AdsReservedVideoViewsInstreamVideosSupportPlugin",
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
          key: "reserved/video_views",
          pivots: {
            objective: r("AdsAPIObjectives").VIDEO_VIEWS,
            buyingType: r("AdsBuyingTypes").RESERVED,
          },
          isEligibleForExclusiveBuying: function (t) {
            return r("AdsAccountUtils").hasCapabilityFromList(
              t.capabilities,
              "ALLOW_INSTREAM_VIDEOS_PLACEMENT_ONLY_IN_VV_REACH_AND_FREQUENCY",
            );
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
