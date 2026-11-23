__d(
  "AdsPreviewsInstreamVideoImagePlugin",
  ["fbt", "ix", "AdsPreviewsPluginCommon", "FacebookReelsOverlayStoreUtils"],
  function (t, n, r, o, a, i, l, s, u) {
    "use strict";
    var e = babelHelpers.extends({}, r("AdsPreviewsPluginCommon"), {
        type: "previews",
        key: "previews/instream_video_image",
        apiFormat: "INSTREAM_VIDEO_IMAGE",
        customizationGroup: "FACEBOOK_INSTREAM",
        loadingPlaceholderSize: { width: 320, height: 387 },
        name: s._(/*BTDS*/ "", [
          s._param(
            "platform position",
            o(
              "FacebookReelsOverlayStoreUtils",
            ).getReelInstreamPlatformPositionFbt(),
          ),
        ]),
        positionName: s._(/*BTDS*/ ""),
        positionDetails: s._(/*BTDS*/ ""),
        icon: u("22168"),
      }),
      c = e;
    l.default = c;
  },
  226,
);
