__d(
  "AdsPreviewsInstreamVideoFullscreenMobilePlugin",
  ["fbt", "ix", "AdsPreviewsPluginCommon", "FacebookReelsOverlayStoreUtils"],
  function (t, n, r, o, a, i, l, s, u) {
    "use strict";
    var e = babelHelpers.extends({}, r("AdsPreviewsPluginCommon"), {
        type: "previews",
        key: "previews/instream_video_fullscreen_mobile",
        apiFormat: "INSTREAM_VIDEO_FULLSCREEN_MOBILE",
        customizationGroup: "FACEBOOK_INSTREAM",
        loadingPlaceholderSize: { width: 320, height: 580 },
        name: s._(/*BTDS*/ "", [
          s._param(
            "platform position",
            o(
              "FacebookReelsOverlayStoreUtils",
            ).getReelInstreamPlatformPositionFbt(),
          ),
        ]),
        positionName: s._(/*BTDS*/ "", [
          s._param(
            "platform position",
            o("FacebookReelsOverlayStoreUtils").getReelInstreamPositionFbt(),
          ),
        ]),
        positionDetails: s._(/*BTDS*/ ""),
        icon: u("22168"),
      }),
      c = e;
    l.default = c;
  },
  226,
);
