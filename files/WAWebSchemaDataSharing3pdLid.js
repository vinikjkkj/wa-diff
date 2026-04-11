__d(
  "WAWebSchemaDataSharing3pdLid",
  [
    "WAWebModelStorageUtils",
    "WAWebModelStorageVersions",
    "WAWebStorageMutationBuilder",
  ],
  function (t, n, r, o, a, i, l) {
    function e() {
      var e = o("WAWebModelStorageUtils").getStorage(),
        t = o("WAWebStorageMutationBuilder").columnBuilder(e.config),
        n = t.addAutoIncrementingPrimaryKey,
        r = t.addColumn,
        a = t.addIndex;
      e.add("data-sharing-3pd-lid")
        .version(
          o("WAWebModelStorageVersions").dataSharing3pdLidCreateTable(),
          [
            n("id"),
            r("lidRawString"),
            a("lidRawString"),
            r("dataSharing3pdEnabled"),
          ],
        )
        .view(function (e) {
          return e;
        });
    }
    l.addTable = e;
  },
  98,
);
