__d(
  "AdsReachFrequencyCreativeFormatSphericalPhotoPlugin",
  [
    "errorCode",
    "errorDesc",
    "fbt",
    "AdsAPIDevicePlatform",
    "AdsAPIPromotablePostPaths",
    "AdsAPITargetFields",
    "AdsError",
    "AdsMutators",
    "AdsPlacementAPISpecReaderUtils",
    "AdsPlacementAPISpecWriterUtils",
    "AdsPlannerPlanTypeUtils",
    "adsPlacementAPISpecReaderIsActiveFacebookPosition",
    "getByPath",
  ],
  function (t, n, r, o, a, i, l, s, u, c) {
    "use strict";
    var e = {
        type: "reach_frequency_creative_format",
        key: "PHOTO_360",
        flag: "photo360Flag",
        value: 1024,
        label: c._(/*BTDS*/ "360 photo"),
        getErrors: function () {
          return [
            new (r("AdsError"))(
              1885530,
              u._(function (e, t) {
                return e._(
                  /*BTDS*/ "360 Photo isn't available with the reservation buying type.",
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
        getIncompatiblePlacementPositions: function (t) {
          var e = [
            "audience_network/classic",
            "audience_network/instream_video",
            "audience_network/rewarded_video",
            "facebook/fb_reels",
            "facebook/instant_article",
            "facebook/instream_video",
            "facebook/right_column",
            "facebook/stories",
            "facebook/video_feeds",
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
          return (
            o("AdsPlacementAPISpecReaderUtils").isOnlyActiveDevicePlatform(
              t.spec,
              r("AdsAPIDevicePlatform").DESKTOP,
            ) && e.push("facebook/feed"),
            e
          );
        },
        getNewCampaignState: function (t, n, a, i, l) {
          return a &&
            a.spec &&
            r("adsPlacementAPISpecReaderIsActiveFacebookPosition")(
              a.spec,
              "feed",
            )
            ? n
            : o("AdsMutators").mutateEach(n, t, function (e) {
                return o("AdsPlacementAPISpecWriterUtils").addGroup(
                  e,
                  "facebook/feed",
                  a,
                  r("AdsAPITargetFields").FACEBOOK_POSITIONS,
                  "facebook",
                );
              });
        },
        isIncompatibleWithPost: function (t) {
          var e = r("getByPath")(t, r("AdsAPIPromotablePostPaths").TYPE);
          return e !== "photo"
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
