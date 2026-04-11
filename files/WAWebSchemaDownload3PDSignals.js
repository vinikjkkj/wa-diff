__d(
  "WAWebSchemaDownload3PDSignals",
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
      e.add("download-3pd-signals")
        .version(
          o("WAWebModelStorageVersions").download3PDSignalsCreateTable(),
          [
            n("id"),
            r("clickId"),
            r("ctwa3pdConversionType"),
            r("ctwa3pdConversionSubtype"),
            r("ctwa3pdConversionMetadata"),
            r("timestamp"),
            a("timestamp"),
          ],
        )
        .view(function (e) {
          return e;
        });
    }
    function s() {
      return o("WAWebModelStorageUtils")
        .getStorage()
        .table("download-3pd-signals");
    }
    ((l.addTable = e), (l.getDownload3PDSignalsTable = s));
  },
  98,
);
