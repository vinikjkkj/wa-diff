__d(
  "AdsPreviewsInstantArticleStandardPlugin",
  ["fbt", "ix", "AdsPreviewsPluginCommon"],
  function (t, n, r, o, a, i, l, s, u) {
    "use strict";
    var e = babelHelpers.extends({}, r("AdsPreviewsPluginCommon"), {
        type: "previews",
        key: "previews/instant_article_standard",
        apiFormat: "INSTANT_ARTICLE_STANDARD",
        customizationGroup: "FACEBOOK_INSTANT_ARTICLE",
        loadingPlaceholderSize: { width: 320, height: 385 },
        name: s._(/*BTDS*/ ""),
        positionName: s._(/*BTDS*/ ""),
        positionDetails: null,
        icon: u("22171"),
      }),
      c = e;
    l.default = c;
  },
  226,
);
