__d(
  "AdsPreviewsSearchSerpAdsMobilePlugin",
  ["fbt", "ix", "AdsPreviewsPluginCommon"],
  function (t, n, r, o, a, i, l, s, u) {
    "use strict";
    var e = babelHelpers.extends({}, r("AdsPreviewsPluginCommon"), {
        type: "previews",
        key: "previews/search_serp_ads_mobile",
        customizationGroup: "FACEBOOK_SEARCH",
        apiFormat: "SEARCH_SERP_ADS_MOBILE",
        loadingPlaceholderSize: { width: 320, height: 387 },
        name: s._(/*BTDS*/ ""),
        positionName: s._(/*BTDS*/ ""),
        positionDetails: null,
        icon: u("709847"),
      }),
      c = e;
    l.default = c;
  },
  226,
);
