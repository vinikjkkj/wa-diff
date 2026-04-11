__d(
  "WAWebSchemaOrphanReceipt",
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
      e.add("orphan-receipt")
        .version(o("WAWebModelStorageVersions").orphanReceiptCreateTable(), [
          r("msgKey"),
          n("delivery"),
          n("read"),
          n("played"),
        ])
        .view(function (e) {
          return e;
        });
    }
    function s() {
      return o("WAWebModelStorageUtils").getStorage().table("orphan-receipt");
    }
    ((l.addTable = e), (l.getOrphanReceiptTable = s));
  },
  98,
);
