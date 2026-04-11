__d(
  "WAWebSchemaFtsIndexingQueue",
  [
    "WAWebModelStorageUtils",
    "WAWebModelStorageVersions",
    "WAWebStorageMutationBuilder",
  ],
  function (t, n, r, o, a, i, l) {
    function e() {
      var e = o("WAWebModelStorageUtils").getStorage(),
        t = o("WAWebStorageMutationBuilder").columnBuilder(e.config),
        n = t.addUserDefinedPrimaryKey;
      e.add("fts-indexing-queue")
        .version(o("WAWebModelStorageVersions").ftsIndexingQueueCreateTable(), [
          n("id"),
        ])
        .view(function (e) {
          return e;
        });
    }
    function s() {
      return o("WAWebModelStorageUtils")
        .getStorage()
        .table("fts-indexing-queue");
    }
    ((l.addTable = e), (l.getFtsIndexingQueueTable = s));
  },
  98,
);
