__d(
  "WAWebSchemaSyncdLogs",
  [
    "WAWebModelStorageUtils",
    "WAWebModelStorageVersions",
    "WAWebStorageMutationBuilder",
  ],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebStorageMutationBuilder").columnBuilder(),
      s = e.addAutoIncrementingPrimaryKey,
      u = e.addColumn,
      c = e.addIndex;
    function d() {
      var e = o("WAWebModelStorageUtils").getStorage();
      e.add("syncd-logs")
        .version(o("WAWebModelStorageVersions").syncdLogsCreateTable(), [
          s("id"),
          u("ts"),
          u("collection"),
          c("collection"),
          u("log"),
        ])
        .view(function (e) {
          return e;
        });
    }
    function m() {
      return o("WAWebModelStorageUtils").getStorage().table("syncd-logs");
    }
    ((l.addTable = d), (l.getSyncdLogsTable = m));
  },
  98,
);
