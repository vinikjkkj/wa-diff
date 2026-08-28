__d(
  "AdsReachFrequencyCreativeFormatSphericalVideoPlugin",
  [
    "errorCode",
    "errorDesc",
    "fbt",
    "AdsAPIPromotablePostPaths",
    "AdsError",
    "AdsPlannerPlanTypeUtils",
    "getByPath",
  ],
  function (t, n, r, o, a, i, l, s, u, c) {
    "use strict";
    var e = {
        type: "reach_frequency_creative_format",
        key: "VIDEO_360",
        flag: "video360Flag",
        value: 512,
        label: c._(/*BTDS*/ "360 video"),
        getErrors: function () {
          return [
            new (r("AdsError"))(
              1885468,
              u._(function (e, t) {
                return e._(
                  /*BTDS*/ "360 Video isn't available with the reservation buying type.",
                );
              }, {}),
              {
                level: r("AdsError").Level.WARN,
                path: r("AdsAPIPromotablePostPaths").IS_SPHERICAL,
              },
            ),
          ];
        },
        getDefaultValue: function (t, n, r) {
          return !1;
        },
        getIncompatiblePlacementPositions: function () {
          return [
            "audience_network/classic",
            "audience_network/instream_video",
            "audience_network/rewarded_video",
            "facebook/fb_reels",
            "facebook/instant_article",
            "facebook/instream_video",
            "facebook/right_column",
            "facebook/stories",
            "facebook/video_feeds",
            "facebook/marketplace",
            "instagram/explore",
            "instagram/story",
            "instagram/stream",
            "instagram/reels",
            "instagram/shop_tab",
            "whatsapp/status",
            "messenger/story",
            "messenger/inbox",
            "oculus/vr_apps",
            "oculus/rewarded_video",
            "threads/stream",
          ];
        },
        getNewCampaignState: function (t, n, r, o, a) {
          return n;
        },
        isIncompatibleWithPost: function (t) {
          var e = r("getByPath")(t, r("AdsAPIPromotablePostPaths").TYPE);
          return e !== "video"
            ? !1
            : !!r("getByPath")(t, r("AdsAPIPromotablePostPaths").IS_SPHERICAL);
        },
        isRequired: function (t, n, r) {
          return o("AdsPlannerPlanTypeUtils").getDoesPlanSupportNonVideoFormats(
            r,
          );
        },
      },
      d = e;
    l.default = d;
  },
  226,
);
