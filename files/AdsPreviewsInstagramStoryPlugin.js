__d(
  "AdsPreviewsInstagramStoryPlugin",
  [
    "fbt",
    "ix",
    "AdsAdPreviewInstagramClientSideUtils",
    "AdsInstagramPreviewCommonUtils",
    "AdsInstagramStoryClientSideAdPreview.react",
    "AdsPreviewsPluginCommon",
    "react",
  ],
  function (t, n, r, o, a, i, l, s, u) {
    "use strict";
    var e,
      c = e || (e = o("react")),
      d = babelHelpers.extends({}, r("AdsPreviewsPluginCommon"), {
        type: "previews",
        key: "previews/instagram_story",
        apiFormat: "INSTAGRAM_STORY",
        customizationGroup: "INSTAGRAM_STORY",
        loadingPlaceholderSize: { width: 320, height: 567 },
        name: o("AdsInstagramPreviewCommonUtils").getIGStoryPreviewNaming(),
        positionName: s._(/*BTDS*/ ""),
        positionDetails: null,
        icon: u("279341"),
        isClientSideSupported: function (t, n, r, a) {
          return o(
            "AdsAdPreviewInstagramClientSideUtils",
          ).isClientSupportedStory(t, n, a);
        },
        renderClientSidePreview: function (t) {
          return c.jsx(
            r("AdsInstagramStoryClientSideAdPreview.react"),
            babelHelpers.extends({}, t, { apiAdFormat: "INSTAGRAM_STORY" }),
          );
        },
      }),
      m = d;
    l.default = m;
  },
  226,
);
