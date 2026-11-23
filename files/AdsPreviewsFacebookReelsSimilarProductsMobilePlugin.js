__d(
  "AdsPreviewsFacebookReelsSimilarProductsMobilePlugin",
  ["fbt", "ix", "AdsPreviewsPluginCommon"],
  function (t, n, r, o, a, i, l, s, u) {
    "use strict";
    var e = babelHelpers.extends({}, r("AdsPreviewsPluginCommon"), {
        type: "previews",
        key: "previews/facebook_reels_similar_products_mobile",
        apiFormat: "FACEBOOK_REELS_SIMILAR_PRODUCTS_MOBILE",
        customizationGroup: "FACEBOOK_REELS",
        loadingPlaceholderSize: { width: 375, height: 650 },
        name: s._(/*BTDS*/ ""),
        positionName: s._(/*BTDS*/ ""),
        positionDetails: null,
        icon: u("279341"),
      }),
      c = e;
    l.default = c;
  },
  226,
);
