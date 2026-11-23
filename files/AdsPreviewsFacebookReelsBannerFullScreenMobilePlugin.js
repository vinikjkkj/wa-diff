__d(
  "AdsPreviewsFacebookReelsBannerFullScreenMobilePlugin",
  ["fbt", "ix", "AdsPreviewsPluginCommon", "FacebookReelsOverlayStoreUtils"],
  function (t, n, r, o, a, i, l, s, u) {
    "use strict";
    var e = babelHelpers.extends({}, r("AdsPreviewsPluginCommon"), {
        type: "previews",
        key: "previews/facebook_reels_banner_fullscreen_mobile",
        apiFormat: "FACEBOOK_REELS_BANNER_FULLSCREEN_MOBILE",
        customizationGroup: "FACEBOOK_REELS_OVERLAY",
        loadingPlaceholderSize: { width: 320, height: 580 },
        name: s._(/*BTDS*/ "", [
          s._param(
            "platform position",
            o(
              "FacebookReelsOverlayStoreUtils",
            ).getReelOverlayPlatformPositionFbt(),
          ),
        ]),
        positionName: s._(/*BTDS*/ "", [
          s._param(
            "platform position",
            o("FacebookReelsOverlayStoreUtils").getReelOverlayPositionFbt(),
          ),
        ]),
        positionDetails: s._(/*BTDS*/ ""),
        icon: u("2026161"),
      }),
      c = e;
    l.default = c;
  },
  226,
);
