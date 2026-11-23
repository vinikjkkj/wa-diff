__d(
  "AdsPreviewsInstreamVideoDesktopPlugin",
  ["fbt", "ix", "AdsPreviewsPluginCommon", "FacebookReelsOverlayStoreUtils"],
  function (t, n, r, o, a, i, l, s, u) {
    "use strict";
    var e = babelHelpers.extends({}, r("AdsPreviewsPluginCommon"), {
        type: "previews",
        key: "previews/instream_video_desktop",
        apiFormat: "INSTREAM_VIDEO_DESKTOP",
        customizationGroup: "FACEBOOK_INSTREAM",
        loadingPlaceholderSize: { width: 500, height: 577 },
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
