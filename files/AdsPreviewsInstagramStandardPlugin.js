__d(
  "AdsPreviewsInstagramStandardPlugin",
  [
    "fbt",
    "ix",
    "AdsAdPreviewInstagramClientSideUtils",
    "AdsInstagramFeedClientSideAdPreview.react",
    "AdsInstagramPreviewCommonUtils",
    "AdsMiniPreviewIGFeed.react",
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
        key: "previews/instagram_stream",
        apiFormat: "INSTAGRAM_STANDARD",
        customizationGroup: "INSTAGRAM_STREAM",
        loadingPlaceholderSize: { width: 320, height: 528 },
        name: o("AdsInstagramPreviewCommonUtils").getIGFeedPreviewNaming(),
        positionName: s._(/*BTDS*/ ""),
        positionDetails: null,
        icon: u("279340"),
        isClientSideSupported: function (t, n, r, a) {
          return o(
            "AdsAdPreviewInstagramClientSideUtils",
          ).isClientSupportedFeed(t, n, "INSTAGRAM_STANDARD");
        },
        isSafezoneRenderingSupported: function () {
          return r("gkx")("7994");
        },
        renderClientSidePreview: function (t) {
          return c.jsx(
            r("AdsInstagramFeedClientSideAdPreview.react"),
            babelHelpers.extends({}, t, { apiAdFormat: "INSTAGRAM_STANDARD" }),
          );
        },
        renderClientSideMiniPreview_DEPRECATED: function (t) {
          return c.jsx(
            r("AdsMiniPreviewIGFeed.react"),
            babelHelpers.extends({}, t),
          );
        },
      }),
      m = d;
    l.default = m;
  },
  226,
);
