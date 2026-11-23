__d(
  "AdsPreviewsInstagramWebFeedPlugin",
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
        key: "previews/instagram_web_feed",
        apiFormat: "INSTAGRAM_FEED_WEB",
        customizationGroup: "INSTAGRAM_STREAM",
        loadingPlaceholderSize: { width: 500, height: 400 },
        name: s._(/*BTDS*/ ""),
        positionName: s._(/*BTDS*/ ""),
        positionDetails: s._(/*BTDS*/ ""),
        icon: u("279340"),
        isClientSideSupported: function (t, n, r, a) {
          return o(
            "AdsAdPreviewInstagramClientSideUtils",
          ).isClientSupportedFeed(t, n, "INSTAGRAM_FEED_WEB");
        },
        renderClientSidePreview: function (t) {
          return c.jsx(
            r("AdsInstagramFeedClientSideAdPreview.react"),
            babelHelpers.extends({}, t, { apiAdFormat: "INSTAGRAM_FEED_WEB" }),
          );
        },
      }),
      m = d;
    l.default = m;
  },
  226,
);
