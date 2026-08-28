__d(
  "AdsReachFrequencyAdFormatsSphericalImagePlugin",
  [
    "fbt",
    "AdsAPIDevicePlatform",
    "AdsAPIObjectives",
    "AdsAdFormatsComponent.react",
    "AdsPlacementAPISpecReaderUtils",
    "AdsPlannerPlanTypeUtils",
    "AdsThruPlayDurationUtils",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = {
        type: "reach_frequency_ad_formats",
        key: "SPHERICAL_IMAGE",
        adFormatType: "spherical_image",
        label: s._(/*BTDS*/ "360 photo"),
        description: s._(/*BTDS*/ "For Facebook mobile feeds only"),
        iconWhenSelected: "/images/ads/createflow/360_Photo_Video_Blue.png",
        iconWhenUnselected: "/images/ads/createflow/360_Photo_Video.png",
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
        isEligible: function (t, n, a) {
          return (
            t !== r("AdsAPIObjectives").VIDEO_VIEWS &&
            !o("AdsThruPlayDurationUtils").isThruPlayFamilyGoal(n) &&
            o("AdsPlannerPlanTypeUtils").getDoesPlanSupportNonVideoFormats(a)
          );
        },
        isRequired: function (t, n, r) {
          return !1;
        },
        isChecked: function (t) {
          return t.some(function (e) {
            return e.formatType === c.adFormatType;
          });
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
            "instagram/explore_home",
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
            t != null &&
              o("AdsPlacementAPISpecReaderUtils").isOnlyActiveDevicePlatform(
                t.spec,
                r("AdsAPIDevicePlatform").DESKTOP,
              ) &&
              e.push("facebook/feed"),
            e
          );
        },
        getMutuallyExclusiveAdFormats: function () {
          return ["stories_carousel"];
        },
      },
      d = c;
    l.default = d;
  },
  226,
);
