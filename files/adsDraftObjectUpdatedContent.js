__d(
  "adsDraftObjectUpdatedContent",
  ["fbt", "AdFLEXConfig"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    function e(e) {
      var t,
        n =
          r("AdFLEXConfig") == null ||
          (t = r("AdFLEXConfig").get()) == null ||
          t.getDraftObjectUpdatedContent == null
            ? void 0
            : t.getDraftObjectUpdatedContent(e);
      if (n != null) return n;
      switch (e) {
        case "campaign":
          return s._(/*BTDS*/ "Campaign updated");
        case "ad_set":
          return s._(/*BTDS*/ "Ad set updated");
        case "ad":
          return s._(/*BTDS*/ "Ad updated");
        default:
          return null;
      }
    }
    l.default = e;
  },
  226,
);
