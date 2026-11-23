__d(
  "AdsPreviewsInstagramReelsPlugin",
  [
    "fbt",
    "ix",
    "AdsAdPreviewInstagramClientSideUtils",
    "AdsInstagramReelsClientSideAdPreview.react",
    "AdsPreviewsPluginCommon",
    "gkx",
    "react",
  ],
  function (t, n, r, o, a, i, l, s, u) {
    "use strict";
    var e,
      c = e || (e = o("react")),
      d = babelHelpers.extends({}, r("AdsPreviewsPluginCommon"), {
        type: "previews",
        key: "previews/instagram_reels",
        apiFormat: "INSTAGRAM_REELS",
        customizationGroup: "INSTAGRAM_REELS",
        loadingPlaceholderSize: {
          width: 320,
          height: r("gkx")("17218") ? 622 : 567,
        },
        name: s._(/*BTDS*/ ""),
        positionName: s._(/*BTDS*/ ""),
        positionDetails: null,
        icon: u("279341"),
        isClientSideSupported: function (t, n, r, a) {
          return o(
            "AdsAdPreviewInstagramClientSideUtils",
          ).isClientSupportedReels(t, n, a, "INSTAGRAM_REELS");
        },
        renderClientSidePreview: function (t) {
          return c.jsx(
            r("AdsInstagramReelsClientSideAdPreview.react"),
            babelHelpers.extends({}, t),
          );
        },
      }),
      m = d;
    l.default = m;
  },
  226,
);
