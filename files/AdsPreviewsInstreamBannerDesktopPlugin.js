__d(
  "AdsPreviewsInstreamBannerDesktopPlugin",
  ["fbt", "ix", "AdsPreviewsPluginCommon"],
  function (t, n, r, o, a, i, l, s, u) {
    "use strict";
    var e = babelHelpers.extends({}, r("AdsPreviewsPluginCommon"), {
        type: "previews",
        key: "previews/instream_banner_desktop",
        apiFormat: "INSTREAM_BANNER_DESKTOP",
        customizationGroup: "FACEBOOK_INSTREAM",
        loadingPlaceholderSize: { width: 500, height: 617 },
        name: s._(/*BTDS*/ ""),
        positionName: s._(/*BTDS*/ ""),
        positionDetails: s._(/*BTDS*/ ""),
        icon: u("2026160"),
      }),
      c = e;
    l.default = c;
  },
  226,
);
