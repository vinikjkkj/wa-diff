__d(
  "AdsReachFrequencyAdFormatsCanvasPlugin",
  [
    "fbt",
    "AdsAPIDevicePlatform",
    "AdsAdFormatsComponent.react",
    "AdsPlacementAPISpecReaderUtils",
    "AdsPlannerPlanTypeUtils",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = {
        type: "reach_frequency_ad_formats",
        key: "CANVAS",
        adFormatType: "canvas",
        label: s._(/*BTDS*/ "Instant Experience"),
        description: s._(
          /*BTDS*/ "Images or videos for mobile feeds and Instagram Stories only",
        ),
        iconWhenSelected: "/images/ads/createflow/Canvas_Image_Blue.png",
        iconWhenUnselected: "/images/ads/createflow/Canvas_Image.png",
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
          return r != null
            ? o("AdsPlannerPlanTypeUtils").getDoesPlanSupportNonVideoFormats(r)
            : !0;
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
            "instagram/reels",
            "instagram/shop_tab",
            "instagram/explore_home",
            "instagram/search",
            "messenger/inbox",
            "messenger/story",
            "whatsapp/status",
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
          return [];
        },
      },
      d = c;
    l.default = d;
  },
  226,
);
