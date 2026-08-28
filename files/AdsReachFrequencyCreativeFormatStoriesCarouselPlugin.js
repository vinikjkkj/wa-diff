__d(
  "AdsReachFrequencyCreativeFormatStoriesCarouselPlugin",
  [
    "errorCode",
    "errorDesc",
    "fbt",
    "AdsAPIPromotablePostPaths",
    "AdsAPITargetFields",
    "AdsError",
    "AdsInstagramApplicabilityUtils",
    "AdsInstagramStoryConfig",
    "AdsMutators",
    "AdsPlacementAPISpecWriterUtils",
    "AdsPlannerPlanTypeUtils",
    "AdsReachFrequencyODAXHelper",
  ],
  function (t, n, r, o, a, i, l, s, u, c) {
    "use strict";
    var e = {
        type: "reach_frequency_creative_format",
        key: "STORIES_CAROUSEL",
        flag: "storiesCarouselFlag",
        value: 2048,
        label: c._(/*BTDS*/ "Stories carousel"),
        getErrors: function () {
          return [
            new (r("AdsError"))(
              2238012,
              u._(function (e, t) {
                return e._(
                  /*BTDS*/ "If you select the Stories Carousel ad format, you can only upload Instagram Stories Carousel creative to your ad set.",
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
          return [
            "audience_network/classic",
            "audience_network/instream_video",
            "facebook/feed",
            "facebook/instant_article",
            "facebook/instream_video",
            "facebook/fb_reels",
            "facebook/right_column",
            "facebook/stories",
            "facebook/video_feeds",
            "facebook/marketplace",
            "instagram/explore",
            "instagram/stream",
            "instagram/reels",
            "instagram/shop_tab",
            "whatsapp/status",
            "messenger/story",
            "oculus/vr_apps",
            "oculus/rewarded_video",
            "threads/stream",
          ];
        },
        getNewCampaignState: function (t, n, a, i, l) {
          return a &&
            a.spec &&
            r("AdsInstagramApplicabilityUtils").placementSpecHasStoryPlacement(
              a.spec,
            )
            ? n
            : o("AdsMutators").mutateEach(n, t, function (e) {
                return o("AdsPlacementAPISpecWriterUtils").addGroup(
                  e,
                  "instagram/story",
                  a,
                  r("AdsAPITargetFields").INSTAGRAM_POSITIONS,
                  "instagram",
                );
              });
        },
        isIncompatibleWithPost: function (t) {
          return !1;
        },
        isRequired: function (t, n, r) {
          var e,
            a =
              (e = o(
                "AdsReachFrequencyODAXHelper",
              ).convertODAXToLegacyObjective(t, n)) != null
                ? e
                : t;
          return (
            o("AdsPlannerPlanTypeUtils").getDoesPlanSupportNonVideoFormats(r) &&
            o("AdsInstagramStoryConfig").ELIGIBLE_OBJECTIVES.has(a)
          );
        },
      },
      d = e;
    l.default = d;
  },
  226,
);
