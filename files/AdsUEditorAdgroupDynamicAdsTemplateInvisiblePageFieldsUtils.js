__d(
  "AdsUEditorAdgroupDynamicAdsTemplateInvisiblePageFieldsUtils",
  ["DynamicTemplateInvisiblePageFields"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return Object.keys(r("DynamicTemplateInvisiblePageFields"))
        .map(function (e) {
          return r("DynamicTemplateInvisiblePageFields")[e];
        })
        .reduce(function (e, t) {
          for (var n = e; n.includes(s(t)); ) n = n.replace(s(t), "");
          return n;
        }, e);
    }
    function s(e) {
      return "{{" + e + "}}";
    }
    l.removeAllInvisibleTokensFromText = e;
  },
  98,
);
