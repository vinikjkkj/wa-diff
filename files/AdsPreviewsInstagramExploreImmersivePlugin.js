__d(
  "AdsPreviewsInstagramExploreImmersivePlugin",
  [
    "fbt",
    "ix",
    "AdsAdPreviewInstagramClientSideUtils",
    "AdsInstagramFeedClientSideAdPreview.react",
    "AdsPreviewsPluginCommon",
    "react",
  ],
  function (t, n, r, o, a, i, l, s, u) {
    "use strict";
    var e,
      c = e || (e = o("react")),
      d = babelHelpers.extends({}, r("AdsPreviewsPluginCommon"), {
        type: "previews",
        key: "previews/instagram_explore_immersive",
        apiFormat: "INSTAGRAM_EXPLORE_IMMERSIVE",
        loadingPlaceholderSize: { width: 320, height: 528 },
        name: s._(/*BTDS*/ ""),
        positionName: s._(/*BTDS*/ ""),
        positionDetails: null,
        icon: u("279340"),
        isClientSideSupported: function (t, n, r, a) {
          return o(
            "AdsAdPreviewInstagramClientSideUtils",
          ).isClientSupportedFeed(t, n, "INSTAGRAM_EXPLORE_IMMERSIVE");
        },
        renderClientSidePreview: function (t) {
          return c.jsx(
            r("AdsInstagramFeedClientSideAdPreview.react"),
            babelHelpers.extends({}, t, {
              apiAdFormat: "INSTAGRAM_EXPLORE_IMMERSIVE",
            }),
          );
        },
      }),
      m = d;
    l.default = m;
  },
  226,
);
