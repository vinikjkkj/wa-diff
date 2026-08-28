__d(
  "AdsReachFrequencyAdFormatsImagePlugin",
  [
    "fbt",
    "AdsAPIObjectives",
    "AdsAdFormatsComponent.react",
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
        key: "IMAGE",
        adFormatType: "image",
        label: s._(/*BTDS*/ "Image or carousel"),
        description: s._(
          /*BTDS*/ "This option is selected for all eligible placements since it doesn't affect your ad set's prediction.",
        ),
        iconWhenSelected: "/images/ads/createflow/Single_Image_Blue.png",
        iconWhenUnselected: "/images/ads/createflow/Single_Image.png",
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
        isRequired: function (t, n, a) {
          return (
            t !== r("AdsAPIObjectives").VIDEO_VIEWS &&
            !o("AdsThruPlayDurationUtils").isThruPlayFamilyGoal(n) &&
            o("AdsPlannerPlanTypeUtils").getDoesPlanSupportNonVideoFormats(a)
          );
        },
        isChecked: function (t) {
          return t.some(function (e) {
            return e.formatType === c.adFormatType;
          });
        },
        getIncompatiblePlacementPositions: function () {
          return [
            "whatsapp/status",
            "messenger/story",
            "instagram/shop_tab",
            "threads/stream",
          ];
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
