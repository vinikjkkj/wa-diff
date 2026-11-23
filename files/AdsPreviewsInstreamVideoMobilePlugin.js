__d(
  "AdsPreviewsInstreamVideoMobilePlugin",
  ["fbt", "ix", "AdsPreviewsPluginCommon", "FacebookReelsOverlayStoreUtils"],
  function (t, n, r, o, a, i, l, s, u) {
    "use strict";
    function e() {
      return o(
        "FacebookReelsOverlayStoreUtils",
      ).incontentCreativeGuideExperiment()
        ? s._(/*BTDS*/ "", [
            s._param(
              "platform position",
              o(
                "FacebookReelsOverlayStoreUtils",
              ).getReelInstreamPlatformPositionFbt(),
            ),
          ])
        : s._(/*BTDS*/ "", [
            s._param(
              "platform position",
              o(
                "FacebookReelsOverlayStoreUtils",
              ).getReelInstreamPlatformPositionFbt(),
            ),
          ]);
    }
    var c = babelHelpers.extends({}, r("AdsPreviewsPluginCommon"), {
        type: "previews",
        key: "previews/instream_video_mobile",
        apiFormat: "INSTREAM_VIDEO_MOBILE",
        customizationGroup: "FACEBOOK_INSTREAM",
        loadingPlaceholderSize: { width: 320, height: 498 },
        name: e(),
        positionName: s._(/*BTDS*/ "", [
          s._param(
            "platform position",
            o("FacebookReelsOverlayStoreUtils").getReelInstreamPositionFbt(),
          ),
        ]),
        positionDetails: s._(/*BTDS*/ ""),
        icon: u("22168"),
      }),
      d = c;
    l.default = d;
  },
  226,
);
