__d(
  "WAWebSchemaDataSharing3pdLidV2",
  [
    "WAWebModelStorageUtils",
    "WAWebModelStorageVersions",
    "WAWebStorageMutationBuilder",
  ],
  function (t, n, r, o, a, i, l) {
    function e() {
      var e = o("WAWebModelStorageUtils").getStorage(),
        t = o("WAWebStorageMutationBuilder").columnBuilder(e.config),
        n = t.addColumn,
        r = t.addUserDefinedPrimaryKey;
      e.add("data-sharing-3pd-lid-v2")
        .version(
          o("WAWebModelStorageVersions").dataSharing3pdLidV2CreateTable(),
          [r("lidRawString"), n("dataSharing3pdEnabled")],
        )
        .view(function (e) {
          return e;
        });
    }
    function s() {
      return o("WAWebModelStorageUtils")
        .getStorage()
        .table("data-sharing-3pd-lid-v2");
    }
    ((l.addTable = e), (l.getDataSharing3pdLidTable = s));
  },
  98,
);
