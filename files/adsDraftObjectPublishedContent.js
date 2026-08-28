__d(
  "adsDraftObjectPublishedContent",
  ["fbt", "AdFLEXConfig"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    function e(e) {
      var t,
        n =
          r("AdFLEXConfig") == null ||
          (t = r("AdFLEXConfig").get()) == null ||
          t.getDraftObjectPublishedContent == null
            ? void 0
            : t.getDraftObjectPublishedContent(e);
      if (n != null) return n;
      switch (e) {
        case "campaign":
          return s._(/*BTDS*/ "Campaign published");
        case "ad_set":
          return s._(/*BTDS*/ "Ad set published");
        case "ad":
          return s._(/*BTDS*/ "Ad published");
        default:
          return null;
      }
    }
    l.default = e;
  },
  226,
);
