__d(
  "WAWebSchemaLidDisplayNameMapping",
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
      e.add("lid-display-name-mapping")
        .version(
          o("WAWebModelStorageVersions").lidDisplayNameMappingCreateTable(),
          [r("id"), n("displayName")],
        )
        .view(function (e) {
          return e;
        });
    }
    l.addTable = e;
  },
  98,
);
