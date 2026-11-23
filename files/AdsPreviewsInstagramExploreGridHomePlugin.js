__d(
  "AdsPreviewsInstagramExploreGridHomePlugin",
  [
    "fbt",
    "ix",
    "AdsAdPreviewInstagramClientSideUtils",
    "AdsInstagramExploreHomeClientSideAdPreview.react",
    "AdsPreviewsPluginCommon",
    "react",
  ],
  function (t, n, r, o, a, i, l, s, u) {
    "use strict";
    var e,
      c = e || (e = o("react")),
      d = babelHelpers.extends({}, r("AdsPreviewsPluginCommon"), {
        type: "previews",
        key: "previews/instagram_explore_grid_home",
        apiFormat: "INSTAGRAM_EXPLORE_GRID_HOME",
        customizationGroup: "INSTAGRAM_EXPLORE_HOME",
        loadingPlaceholderSize: { width: 320, height: 528 },
        name: s._(/*BTDS*/ ""),
        positionName: s._(/*BTDS*/ ""),
        positionDetails: null,
        icon: u("272941"),
        isClientSideSupported: function (t, n, r, a) {
          return o(
            "AdsAdPreviewInstagramClientSideUtils",
          ).isClientSupportedExploreGridHome(t, n);
        },
        renderClientSidePreview: function (t) {
          return c.jsx(
            o("AdsInstagramExploreHomeClientSideAdPreview.react")
              .AdsInstagramExploreHomeClientSideAdPreview,
            babelHelpers.extends({}, t),
          );
        },
      }),
      m = d;
    l.default = m;
  },
  226,
);
