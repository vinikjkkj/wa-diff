__d(
  "WAWebSchemaFtsLoadgenMetadata",
  [
    "WAWebLoadgenStorageUtils",
    "WAWebLoadgenStorageVersions",
    "WAWebStorageMutationBuilder",
  ],
  function (t, n, r, o, a, i, l) {
    var e = "fts-loadgen-metadata",
      s = o("WAWebStorageMutationBuilder").columnBuilder(),
      u = s.addColumn,
      c = s.addUserDefinedPrimaryKey;
    function d() {
      o("WAWebLoadgenStorageUtils")
        .getStorage()
        .add(e)
        .version(o("WAWebLoadgenStorageVersions").ftsMetaDataCreateTable(), [
          c("key"),
          u("value"),
        ])
        .view(function (e) {
          return e ? { key: e.key, value: e.value } : null;
        });
    }
    l.addTable = d;
  },
  98,
);
