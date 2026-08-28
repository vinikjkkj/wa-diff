__d(
  "AdsPEAdgroupTablePagingSelectors",
  ["AdsMgmtAvailableIDsMigrationSelectors", "adsCreateTablePagingSelectors"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateTablePagingSelectors")(
        "ad_page_id",
        o(
          "AdsMgmtAvailableIDsMigrationSelectors",
        ).getAdgroupAvailableCountSelector(),
      ),
      s = e;
    l.default = s;
  },
  98,
);
