__d(
  "AdsPreviewsConnectedTVPlugin",
  ["fbt", "ix", "AdsPreviewsPluginCommon"],
  function (t, n, r, o, a, i, l, s, u) {
    "use strict";
    var e = babelHelpers.extends({}, r("AdsPreviewsPluginCommon"), {
        type: "previews",
        key: "previews/connected_tv",
        apiFormat: "AUDIENCE_NETWORK_INSTREAM_VIDEO_TV",
        loadingPlaceholderSize: { width: 320, height: 387 },
        name: s._(/*BTDS*/ ""),
        positionName: s._(/*BTDS*/ ""),
        positionDetails: null,
        icon: u("443196"),
        isCustomOverlaysSupported: function () {
          return !0;
        },
      }),
      c = e;
    l.default = c;
  },
  226,
);
