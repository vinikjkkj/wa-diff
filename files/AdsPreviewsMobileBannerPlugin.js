__d(
  "AdsPreviewsMobileBannerPlugin",
  ["fbt", "ix", "AdsPreviewsPluginCommon"],
  function (t, n, r, o, a, i, l, s, u) {
    "use strict";
    var e = babelHelpers.extends({}, r("AdsPreviewsPluginCommon"), {
        type: "previews",
        key: "previews/mobile_banner",
        apiFormat: "MOBILE_BANNER",
        loadingPlaceholderSize: { width: 324, height: 148 },
        name: s._(/*BTDS*/ ""),
        positionName: s._(/*BTDS*/ ""),
        positionDetails: null,
        icon: u("22167"),
      }),
      c = e;
    l.default = c;
  },
  226,
);
