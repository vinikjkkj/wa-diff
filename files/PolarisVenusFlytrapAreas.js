__d(
  "PolarisVenusFlytrapAreas",
  [
    "fbt",
    "IGDSAppSnapStoriesPanoOutline24Svg.react",
    "IGDSCompassPanoOutline24Svg.react",
    "IGDSDirectPrismOutline24Svg.react",
    "IGDSFamilyCenterPanoOutline24Svg.react",
    "IGDSHeartPanoOutline24Svg.react",
    "IGDSHomePanoOutline24Svg.react",
    "IGDSMoreCirclePanoOutline24Svg.react",
    "IGDSNewPostPanoOutline24Svg.react",
    "IGDSReelsPanoOutline24Svg.react",
    "IGDSSearchPanoOutline24Svg.react",
    "IGDSSettingsPanoOutline24Svg.react",
    "IGDSUserPanoOutline24Svg.react",
    "VenusFlytrapOtherArea",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = babelHelpers.extends({}, r("VenusFlytrapOtherArea"), {
        icon: r("IGDSMoreCirclePanoOutline24Svg.react"),
      }),
      u = [
        {
          description: s._(
            /*BTDS*/ "Report an issue related to the family center for Instagram.",
          ),
          icon: r("IGDSFamilyCenterPanoOutline24Svg.react"),
          label: s._(/*BTDS*/ "Family Center"),
          value: "instagram_family_center",
        },
        {
          description: s._(
            /*BTDS*/ "Report an issue related to your Instagram home feed.",
          ),
          icon: r("IGDSHomePanoOutline24Svg.react"),
          label: s._(/*BTDS*/ "Home"),
          value: "instagram_home",
        },
        {
          description: s._(
            /*BTDS*/ "Report an issue related to Instagram stories that you've encountered.",
          ),
          icon: r("IGDSAppSnapStoriesPanoOutline24Svg.react"),
          label: s._(/*BTDS*/ "Stories"),
          value: "instagram_stories",
        },
        {
          description: s._(
            /*BTDS*/ "Report an issue related to Instagram search functionality.",
          ),
          icon: r("IGDSSearchPanoOutline24Svg.react"),
          label: s._(/*BTDS*/ "Search"),
          value: "instagram_search",
        },
        {
          description: s._(
            /*BTDS*/ "Report an issue related to Instagram explore page.",
          ),
          icon: r("IGDSCompassPanoOutline24Svg.react"),
          label: s._(/*BTDS*/ "Explore"),
          value: "instagram_explore",
        },
        {
          description: s._(
            /*BTDS*/ "Report an issue related to Instagram reels.",
          ),
          icon: r("IGDSReelsPanoOutline24Svg.react"),
          label: s._(/*BTDS*/ "Reels"),
          value: "instagram_reels",
        },
        {
          description: s._(
            /*BTDS*/ "Report an issue related to Instagram messages.",
          ),
          icon: r("IGDSDirectPrismOutline24Svg.react"),
          label: s._(/*BTDS*/ "Messages"),
          value: "instagram_messages",
        },
        {
          description: s._(
            /*BTDS*/ "Report an issue related to Instagram notifications.",
          ),
          icon: r("IGDSHeartPanoOutline24Svg.react"),
          label: s._(/*BTDS*/ "Notifications"),
          value: "instagram_notifications",
        },
        {
          description: s._(
            /*BTDS*/ "Report an issue related to Instagram create functionality.",
          ),
          icon: r("IGDSNewPostPanoOutline24Svg.react"),
          label: s._(/*BTDS*/ "Create"),
          value: "instagram_create",
        },
        {
          description: s._(
            /*BTDS*/ "Report an issue related to Instagram profile.",
          ),
          icon: r("IGDSUserPanoOutline24Svg.react"),
          label: s._(/*BTDS*/ "Profile"),
          value: "instagram_profile",
        },
        {
          description: s._(
            /*BTDS*/ "Report an issue related to Instagram settings.",
          ),
          icon: r("IGDSSettingsPanoOutline24Svg.react"),
          label: s._(/*BTDS*/ "Settings"),
          value: "instagram_settings",
        },
      ]
        .filter(Boolean)
        .sort(function (e, t) {
          return String(e.label).localeCompare(String(t.label));
        })
        .concat(e);
    l.default = u;
  },
  226,
);
