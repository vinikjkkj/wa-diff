__d(
  "AdsReachFrequencyAdFormatsImagePlugin",
  [
    "fbt",
    "AdsAPIObjectives",
    "AdsAdFormatsComponent.react",
    "AdsPlannerPlanTypeUtils",
    "AdsThruPlayDurationUtils",
    "GeoTooltip.react",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = s._(/*BTDS*/ ""),
      d = {
        type: "reach_frequency_ad_formats",
        key: "IMAGE",
        adFormatType: "image",
        label: s._(/*BTDS*/ ""),
        description: s._(/*BTDS*/ ""),
        iconWhenSelected: "/images/ads/createflow/Single_Image_Blue.png",
        iconWhenUnselected: "/images/ads/createflow/Single_Image.png",
        getAdFormats: function (t, n, o, a) {
          var e = d.isRequired(n, o),
            i = u.jsx(r("AdsAdFormatsComponent.react"), {
              adFormatType: d.adFormatType,
              description: d.description,
              icon: d.isChecked(t) ? d.iconWhenSelected : d.iconWhenUnselected,
              isChecked: d.isChecked(t),
              isDisabled: e,
              label: d.label,
              onCheckboxChange: a,
            });
          return e
            ? u.jsx(r("GeoTooltip.react"), { content: c, children: i })
            : i;
        },
        isEligible: function (t, n, a) {
          return (
            t !== r("AdsAPIObjectives").VIDEO_VIEWS &&
            !o("AdsThruPlayDurationUtils").isThruPlayFamilyGoal(n) &&
            o("AdsPlannerPlanTypeUtils").getDoesPlanSupportNonVideoFormats(a)
          );
        },
        isRequired: function (t, n, a) {
          return (
            t !== r("AdsAPIObjectives").VIDEO_VIEWS &&
            !o("AdsThruPlayDurationUtils").isThruPlayFamilyGoal(n) &&
            o("AdsPlannerPlanTypeUtils").getDoesPlanSupportNonVideoFormats(a)
          );
        },
        isChecked: function (t) {
          return t.some(function (e) {
            return e.formatType === d.adFormatType;
          });
        },
        getIncompatiblePlacementPositions: function () {
          return [
            "whatsapp/status",
            "messenger/story",
            "instagram/shop_tab",
            "threads/stream",
            "threads/permalink",
          ];
        },
        getMutuallyExclusiveAdFormats: function () {
          return [];
        },
      },
      m = d;
    l.default = m;
  },
  226,
);
