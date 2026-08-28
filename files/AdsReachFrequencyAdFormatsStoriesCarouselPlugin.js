__d(
  "AdsReachFrequencyAdFormatsStoriesCarouselPlugin",
  [
    "fbt",
    "AdsAdFormatsComponent.react",
    "AdsInstagramStoryConfig",
    "AdsPlannerPlanTypeUtils",
    "AdsReachFrequencyODAXHelper",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = {
        type: "reach_frequency_ad_formats",
        key: "STORIES_CAROUSEL",
        adFormatType: "stories_carousel",
        label: s._(/*BTDS*/ "Stories carousel"),
        description: s._(
          /*BTDS*/ "Vertical images or videos for Instagram Stories only",
        ),
        iconWhenSelected: "/images/ads/createflow/Carousel_Fullscreen_Blue.png",
        iconWhenUnselected: "/images/ads/createflow/Carousel_Fullscreen.png",
        getAdFormatsCards: function (t, n) {
          return null;
        },
        getAdFormats: function (t, n, o, a) {
          return u.jsx(r("AdsAdFormatsComponent.react"), {
            adFormatType: c.adFormatType,
            description: c.description,
            icon: c.isChecked(t) ? c.iconWhenSelected : c.iconWhenUnselected,
            isChecked: c.isChecked(t),
            isDisabled: c.isRequired(n, o),
            label: c.label,
            onCheckboxChange: a,
          });
        },
        isEligible: function (t, n, r) {
          var e,
            a =
              (e = o(
                "AdsReachFrequencyODAXHelper",
              ).convertODAXToLegacyObjective(t, n)) != null
                ? e
                : t;
          return (
            o("AdsInstagramStoryConfig").ELIGIBLE_OBJECTIVES.has(a) &&
            o("AdsPlannerPlanTypeUtils").getDoesPlanSupportNonVideoFormats(r)
          );
        },
        isRequired: function (t, n) {
          return !1;
        },
        isChecked: function (t) {
          return t.some(function (e) {
            return e.formatType === c.adFormatType;
          });
        },
        getIncompatiblePlacementPositions: function () {
          return [
            "audience_network/classic",
            "audience_network/instream_video",
            "facebook/fb_reels",
            "facebook/feed",
            "facebook/instant_article",
            "facebook/instream_video",
            "facebook/right_column",
            "facebook/stories",
            "facebook/marketplace",
            "facebook/video_feeds",
            "instagram/explore",
            "instagram/explore_home",
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
        getMutuallyExclusiveAdFormats: function () {
          return ["spherical_image", "spherical_video"];
        },
      },
      d = c;
    l.default = d;
  },
  226,
);
