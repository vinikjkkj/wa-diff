__d(
  "WAWebSchemaFtsPurgeRangeQueue",
  [
    "WAWebFtsStorageUtils",
    "WAWebFtsStorageVersions",
    "WAWebStorageMutationBuilder",
  ],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebStorageMutationBuilder").columnBuilder(),
      s = e.addColumn,
      u = e.addCompositePrimaryKey,
      c = "fts-purge-range-queue";
    function d() {
      o("WAWebFtsStorageUtils")
        .getStorage()
        .add(c)
        .version(o("WAWebFtsStorageVersions").purgeRangeQueueCreateTable(), [
          u(["chatId", "tsOfLastMessage", "startRowId", "endRowId"]),
          s("offset"),
        ])
        .view(function (e) {
          return e;
        });
    }
    function m() {
      return o("WAWebFtsStorageUtils").getStorage().table(c);
    }
    ((l.addTable = d), (l.getTable = m));
  },
  98,
);
