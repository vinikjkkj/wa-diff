__d(
  "adsDraftObjectDeletedContent",
  ["fbt", "AdFLEXConfig"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    function e(e) {
      var t,
        n =
          r("AdFLEXConfig") == null ||
          (t = r("AdFLEXConfig").get()) == null ||
          t.getDraftObjectDeletedContent == null
            ? void 0
            : t.getDraftObjectDeletedContent(e);
      if (n != null) return n;
      switch (e) {
        case "campaign":
          return s._(/*BTDS*/ "Campaign deleted");
        case "ad_set":
          return s._(/*BTDS*/ "Ad set deleted");
        case "ad":
          return s._(/*BTDS*/ "Ad deleted");
        default:
          return null;
      }
    }
    l.default = e;
  },
  226,
);
