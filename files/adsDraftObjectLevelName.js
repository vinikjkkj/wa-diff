__d(
  "adsDraftObjectLevelName",
  ["fbt", "AdFLEXConfig"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    function e(e) {
      var t,
        n =
          r("AdFLEXConfig") == null ||
          (t = r("AdFLEXConfig").get()) == null ||
          t.getDraftObjectLevelName == null
            ? void 0
            : t.getDraftObjectLevelName(e);
      if (n != null) return n;
      switch (e) {
        case "campaign":
          return s._(/*BTDS*/ "Campaign");
        case "ad_set":
          return s._(/*BTDS*/ "Ad set");
        case "ad":
          return s._(/*BTDS*/ "Ad");
        default:
          return null;
      }
    }
    l.default = e;
  },
  226,
);
