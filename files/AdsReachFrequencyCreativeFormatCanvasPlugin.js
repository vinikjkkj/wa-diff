__d(
  "AdsReachFrequencyCreativeFormatCanvasPlugin",
  [
    "errorCode",
    "errorDesc",
    "fbt",
    "AdsAPIDevicePlatform",
    "AdsAPIPromotablePostPaths",
    "AdsError",
    "AdsMutators",
    "AdsPlacementAPISpecReaderUtils",
    "AdsPlacementAPISpecWriterUtils",
    "AdsPlannerPlanTypeUtils",
    "getByPath",
    "isAdsCanvasLink",
  ],
  function (t, n, r, o, a, i, l, s, u, c) {
    "use strict";
    var e = {
        type: "reach_frequency_creative_format",
        key: "CANVAS",
        flag: "canvasFlag",
        value: 256,
        label: c._(/*BTDS*/ "Instant Experience"),
        getErrors: function () {
          return [
            new (r("AdsError"))(
              1885473,
              u._(function (e, t) {
                return e._(
                  /*BTDS*/ "You didn't select canvas when you created this ad set for reservation. If you want to use canvas, then create a new ad set or edit the existing ad set if it hasn't started yet.",
                );
              }, {}),
              {
                level: r("AdsError").Level.WARN,
                path: r("AdsAPIPromotablePostPaths").LINK,
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
            "instagram/reels",
            "instagram/shop_tab",
            "messenger/inbox",
            "messenger/story",
            "whatsapp/status",
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
        getNewCampaignState: function (t, n, r, a, i) {
          return o("AdsMutators").mutateEach(n, t, function (e) {
            var t = e;
            return (
              a &&
                (t = o(
                  "AdsPlacementAPISpecWriterUtils",
                ).removePublisherPlatform(t, "audience_network", r)),
              t
            );
          });
        },
        isIncompatibleWithPost: function (t) {
          var e = r("getByPath")(t, r("AdsAPIPromotablePostPaths").LINK);
          return r("isAdsCanvasLink")(e);
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
