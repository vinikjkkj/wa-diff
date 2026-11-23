__d(
  "AdsPreviewsMobileMediumRectanglePlugin",
  ["fbt", "ix", "AdsPreviewsPluginCommon"],
  function (t, n, r, o, a, i, l, s, u) {
    "use strict";
    var e = babelHelpers.extends({}, r("AdsPreviewsPluginCommon"), {
        type: "previews",
        key: "previews/mobile_medium_rectangle",
        apiFormat: "MOBILE_MEDIUM_RECTANGLE",
        customizationGroup: "AUDIENCE_NETWORK_CLASSIC",
        loadingPlaceholderSize: { width: 255, height: 511 },
        name: s._(/*BTDS*/ ""),
        positionName: s._(/*BTDS*/ ""),
        positionDetails: s._(/*BTDS*/ ""),
        icon: u("22170"),
      }),
      c = e;
    l.default = c;
  },
  226,
);
