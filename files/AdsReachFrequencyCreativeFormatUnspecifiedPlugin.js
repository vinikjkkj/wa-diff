__d(
  "AdsReachFrequencyCreativeFormatUnspecifiedPlugin",
  ["fbt", "intlList"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = {
        type: "reach_frequency_creative_format",
        key: "UNSPECIFIED",
        flag: "unspecified",
        value: 0,
        label: r("intlList")(
          [s._(/*BTDS*/ ""), s._(/*BTDS*/ ""), s._(/*BTDS*/ "")],
          r("intlList").CONJUNCTIONS.OR,
        ),
        getErrors: function () {
          return [];
        },
        getDefaultValue: function (t, n, r) {
          return r !== "PREMIUM_FACEBOOK_INSTREAM_VIDEO_TRP";
        },
        getIncompatiblePlacementPositions: function () {
          return [
            "whatsapp/status",
            "messenger/story",
            "instagram/shop_tab",
            "oculus/vr_apps",
            "oculus/rewarded_video",
            "threads/stream",
            "threads/permalink",
          ];
        },
        getNewCampaignState: function (t, n, r, o, a) {
          return n;
        },
        isIncompatibleWithPost: function (t) {
          return !1;
        },
        isRequired: function (t, n, r) {
          return !1;
        },
      },
      u = e;
    l.default = u;
  },
  226,
);
