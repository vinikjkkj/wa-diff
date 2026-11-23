__d(
  "AdsPreviewsFacebookStoryPlugin",
  [
    "fbt",
    "ix",
    "AdsMiniPreviewFBStories.react",
    "AdsPreviewsPluginCommon",
    "react",
  ],
  function (t, n, r, o, a, i, l, s, u) {
    "use strict";
    var e,
      c = e || (e = o("react")),
      d = babelHelpers.extends({}, r("AdsPreviewsPluginCommon"), {
        type: "previews",
        key: "previews/facebook_story",
        apiFormat: "FACEBOOK_STORY_MOBILE",
        customizationGroup: "FACEBOOK_STORY",
        loadingPlaceholderSize: { width: 320, height: 567 },
        name: s._(/*BTDS*/ ""),
        positionName: s._(/*BTDS*/ ""),
        positionDetails: null,
        icon: u("279341"),
        renderClientSideMiniPreview_DEPRECATED: function (t) {
          return c.jsx(
            r("AdsMiniPreviewFBStories.react"),
            babelHelpers.extends({}, t),
          );
        },
      }),
      m = d;
    l.default = m;
  },
  226,
);
