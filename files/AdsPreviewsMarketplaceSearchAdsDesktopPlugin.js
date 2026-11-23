__d(
  "AdsPreviewsMarketplaceSearchAdsDesktopPlugin",
  ["fbt", "ix", "AdsPreviewsPluginCommon"],
  function (t, n, r, o, a, i, l, s, u) {
    "use strict";
    var e = babelHelpers.extends({}, r("AdsPreviewsPluginCommon"), {
        type: "previews",
        key: "previews/marketplace_search_ads_desktop",
        customizationGroup: "FACEBOOK_SEARCH",
        apiFormat: "MARKETPLACE_SEARCH_ADS_DESKTOP",
        loadingPlaceholderSize: { width: 320, height: 387 },
        name: s._(/*BTDS*/ ""),
        positionName: s._(/*BTDS*/ ""),
        positionDetails: null,
        icon: u("709848"),
      }),
      c = e;
    l.default = c;
  },
  226,
);
