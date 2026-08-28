__d(
  "adsMgmtAdgroupSelectedIdsSelector",
  ["AdsMgmtAdgroupSelectionProvider", "AdsTypedID", "adsCreateSelector"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("AdsMgmtAdgroupSelectionProvider").toFluxSelector(),
      s = r("adsCreateSelector")(
        [e],
        function (t) {
          var e = t.cachedSelectedIDs;
          return e;
        },
        { name: i.id + ".adsMgmtAdgroupSelectedIdsSelector" },
      ),
      u = r("adsCreateSelector")(
        [e],
        function (t) {
          var e = t.cachedSelectedIDs;
          return o("AdsTypedID").fbidArrayToAdgroupTypedIDArray(e);
        },
        { name: i.id + ".adsMgmtAdgroupSelectedTypedIdsSelector" },
      );
    ((l.adsMgmtAdgroupSelectedIdsSelector = s),
      (l.adsMgmtAdgroupSelectedTypedIdsSelector = u));
  },
  98,
);
