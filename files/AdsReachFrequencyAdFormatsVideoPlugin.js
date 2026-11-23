__d(
  "AdsReachFrequencyAdFormatsVideoPlugin",
  [
    "fbt",
    "AdsAPIObjectives",
    "AdsAPIOptimizationGoals",
    "AdsAdFormatsComponent.react",
    "AdsThruPlayDurationUtils",
    "GeoTooltip.react",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react"));
    function c(e, t) {
      return e === r("AdsAPIObjectives").VIDEO_VIEWS
        ? s._(/*BTDS*/ "")
        : t === r("AdsAPIOptimizationGoals").SIX_SECOND_VIDEO_VIEWS
          ? s._(/*BTDS*/ "")
          : s._(/*BTDS*/ "");
    }
    c.displayName = c.name + " [from " + i.id + "]";
    var d = {
        type: "reach_frequency_ad_formats",
        key: "VIDEO",
        adFormatType: "video",
        label: s._(/*BTDS*/ ""),
        description: s._(/*BTDS*/ ""),
        iconWhenSelected: "/images/ads/createflow/Single_Video_Blue.png",
        iconWhenUnselected: "/images/ads/createflow/Single_Video.png",
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
          if (e) {
            var l = c(n, o);
            return u.jsx(r("GeoTooltip.react"), { content: l, children: i });
          } else return i;
        },
        isEligible: function (t, n, r) {
          return !0;
        },
        isRequired: function (t, n) {
          return (
            t === r("AdsAPIObjectives").VIDEO_VIEWS ||
            o("AdsThruPlayDurationUtils").isThruPlayFamilyGoal(n)
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
