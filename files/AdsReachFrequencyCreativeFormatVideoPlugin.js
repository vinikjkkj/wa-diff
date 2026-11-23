__d(
  "AdsReachFrequencyCreativeFormatVideoPlugin",
  [
    "errorCode",
    "errorDesc",
    "fbt",
    "AdsAPIAdgroupPaths",
    "AdsAPIObjectives",
    "AdsError",
    "AdsMutators",
    "AdsPlacementAPISpecWriterUtils",
    "AdsReachFrequencyODAXHelper",
  ],
  function (t, n, r, o, a, i, l, s, u, c) {
    "use strict";
    var e = {
        type: "reach_frequency_creative_format",
        key: "VIDEO",
        flag: "videoFlag",
        value: 128,
        label: c._(/*BTDS*/ ""),
        getErrors: function () {
          return [
            new (r("AdsError"))(
              1487878,
              u._(function (e, t) {
                return e._(/*BTDS*/ "");
              }, {}),
              {
                level: r("AdsError").Level.WARN,
                path: r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_TYPE,
              },
            ),
          ];
        },
        getDefaultValue: function (t, n, a) {
          var e,
            i =
              (e = o(
                "AdsReachFrequencyODAXHelper",
              ).convertODAXToLegacyObjective(t, n)) != null
                ? e
                : t;
          return (
            a === "PREMIUM_FACEBOOK_INSTREAM_VIDEO_TRP" ||
            i === r("AdsAPIObjectives").VIDEO_VIEWS
          );
        },
        getNewCampaignState: function (t, n, r, a, i) {
          return o("AdsMutators").mutateEach(n, t, function (e) {
            return o("AdsPlacementAPISpecWriterUtils").resetDevicesIfIneligible(
              e,
              r,
              a,
            );
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
        isIncompatibleWithPost: function (t) {
          var e = t.type;
          return e === "video";
        },
        isRequired: function (t, n, a) {
          var e,
            i =
              (e = o(
                "AdsReachFrequencyODAXHelper",
              ).convertODAXToLegacyObjective(t, n)) != null
                ? e
                : t;
          return i !== r("AdsAPIObjectives").VIDEO_VIEWS;
        },
      },
      d = e;
    l.default = d;
  },
  226,
);
