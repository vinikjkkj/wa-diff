__d(
  "AdsPEAdgroupVisibleIDsSelectors",
  [
    "AdsMgmtAvailableIDsMigrationSelectors",
    "AdsPEAdgroupTablePagingSelectors",
    "adsCreateVisibleIDsSelectors",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateVisibleIDsSelectors")(
        o(
          "AdsMgmtAvailableIDsMigrationSelectors",
        ).getAdgroupAvailableIDsSelector(),
        r("AdsPEAdgroupTablePagingSelectors").getRowStartSelector,
        r("AdsPEAdgroupTablePagingSelectors").getRowEndSelector,
      ),
      s = e;
    l.default = s;
  },
  98,
);
