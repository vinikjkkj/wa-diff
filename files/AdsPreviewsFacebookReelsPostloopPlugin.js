__d(
  "AdsPreviewsFacebookReelsPostloopPlugin",
  ["fbt", "ix", "AdsPreviewsPluginCommon"],
  function (t, n, r, o, a, i, l, s, u) {
    "use strict";
    var e = babelHelpers.extends({}, r("AdsPreviewsPluginCommon"), {
        type: "previews",
        key: "previews/facebook_reels_postloop",
        apiFormat: "FACEBOOK_REELS_POSTLOOP",
        customizationGroup: "FACEBOOK_REELS_OVERLAY",
        loadingPlaceholderSize: { width: 320, height: 580 },
        name: s._(/*BTDS*/ ""),
        positionName: s._(/*BTDS*/ ""),
        positionDetails: s._(/*BTDS*/ ""),
        icon: u("232407"),
      }),
      c = e;
    l.default = c;
  },
  226,
);
