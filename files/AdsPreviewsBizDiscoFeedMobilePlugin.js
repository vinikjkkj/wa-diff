__d(
  "AdsPreviewsBizDiscoFeedMobilePlugin",
  ["fbt", "ix", "AdsPreviewsPluginCommon"],
  function (t, n, r, o, a, i, l, s, u) {
    "use strict";
    var e = babelHelpers.extends({}, r("AdsPreviewsPluginCommon"), {
        type: "previews",
        key: "previews/biz_disco_feed_mobile",
        apiFormat: "BIZ_DISCO_FEED_MOBILE",
        customizationGroup: "FACEBOOK_BIZ_DISCO_FEED",
        loadingPlaceholderSize: { width: 320, height: 387 },
        name: s._(/*BTDS*/ "Facebook Business Explore (mobile)"),
        positionName: s._(/*BTDS*/ "Facebook Business Explore"),
        positionDetails: s._(/*BTDS*/ "Mobile"),
        icon: u("22175"),
      }),
      c = e;
    l.default = c;
  },
  226,
);
