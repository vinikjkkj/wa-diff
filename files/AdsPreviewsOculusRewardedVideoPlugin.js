__d(
  "AdsPreviewsOculusRewardedVideoPlugin",
  ["fbt", "ix", "AdsPreviewsPluginCommon"],
  function (t, n, r, o, a, i, l, s, u) {
    "use strict";
    var e = babelHelpers.extends({}, r("AdsPreviewsPluginCommon"), {
        type: "previews",
        key: "previews/oculus_rewarded_video",
        apiFormat: "OCULUS_REWARDED_VIDEO",
        loadingPlaceholderSize: { width: 320, height: 569 },
        name: s._(/*BTDS*/ ""),
        positionName: s._(/*BTDS*/ ""),
        positionDetails: s._(/*BTDS*/ ""),
        icon: u("158128"),
      }),
      c = e;
    l.default = c;
  },
  226,
);
