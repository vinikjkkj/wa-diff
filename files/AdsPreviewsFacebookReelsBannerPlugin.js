__d(
  "AdsPreviewsFacebookReelsBannerPlugin",
  ["fbt", "ix", "AdsPreviewsPluginCommon", "FacebookReelsOverlayStoreUtils"],
  function (t, n, r, o, a, i, l, s, u) {
    "use strict";
    function e() {
      return o(
        "FacebookReelsOverlayStoreUtils",
      ).incontentCreativeGuideExperiment()
        ? s._(/*BTDS*/ "")
        : s._(/*BTDS*/ "");
    }
    var c = babelHelpers.extends({}, r("AdsPreviewsPluginCommon"), {
        type: "previews",
        key: "previews/facebook_reels_banner",
        apiFormat: "FACEBOOK_REELS_BANNER",
        customizationGroup: "FACEBOOK_REELS_OVERLAY",
        loadingPlaceholderSize: { width: 320, height: 580 },
        name: e(),
        positionName: s._(/*BTDS*/ ""),
        positionDetails: s._(/*BTDS*/ ""),
        icon: u("2026161"),
      }),
      d = c;
    l.default = d;
  },
  226,
);
