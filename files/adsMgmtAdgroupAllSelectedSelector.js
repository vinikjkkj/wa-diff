__d(
  "adsMgmtAdgroupAllSelectedSelector",
  [
    "AdsMgmtAdgroupSelectionProvider",
    "AdsPEAdgroupVisibleIDsSelectors",
    "adsCreateSelector",
    "adsMgmtAdgroupAllSelectedSelectorUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("AdsMgmtAdgroupSelectionProvider").toFluxSelector(),
      s = r("adsCreateSelector")(
        [e, r("AdsPEAdgroupVisibleIDsSelectors").visibleIDsSelector],
        function (t, n) {
          var e = t.selection;
          return o(
            "adsMgmtAdgroupAllSelectedSelectorUtils",
          ).adsMgmtAdgroupAllSelected(e, n);
        },
        { name: i.id + ".adsMgmtAdgroupAllSelectedSelector" },
      ),
      u = s;
    l.default = u;
  },
  98,
);
