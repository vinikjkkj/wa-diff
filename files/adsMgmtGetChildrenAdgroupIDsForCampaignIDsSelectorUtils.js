__d(
  "adsMgmtGetChildrenAdgroupIDsForCampaignIDsSelectorUtils",
  ["AdsLoadStateUtils_LEGACY", "adsStoreFlattenLists"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return function (n) {
        if (t == null) return new Map();
        var r = n.filter(Boolean);
        if (r != null && r.length) {
          var a = e([t, r]),
            i = Array.from(a.values()).every(function (e) {
              return o("AdsLoadStateUtils_LEGACY").isLoaded(e);
            });
          if (i) return a;
        }
        return new Map();
      };
    }
    function s(e) {
      return function (t) {
        var n = e(t);
        return r("adsStoreFlattenLists")(n);
      };
    }
    ((l.adsMgmtGetChildrenAdgroupIDsForCampaignIDsMap = e),
      (l.adsMgmtGetChildrenAdgroupIDsForCampaignIDs = s));
  },
  98,
);
