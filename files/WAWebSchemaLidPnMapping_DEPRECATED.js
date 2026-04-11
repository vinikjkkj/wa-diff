__d(
  "WAWebSchemaLidPnMapping_DEPRECATED",
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
        r = t.addIndex,
        a = t.addUserDefinedPrimaryKey,
        i = t.removeColumn;
      e.add("lid-pn-mapping")
        .version(o("WAWebModelStorageVersions").lidPnMappingCreateTable(), [
          a("id"),
          n("phoneNumber"),
          r("phoneNumber"),
          n("createdAtTimestamp"),
          n("displayName"),
        ])
        .version(
          o("WAWebModelStorageVersions").lidPnMappingRemoveDisplayName(),
          [i("displayName")],
        )
        .view(function (e) {
          return e;
        });
    }
    l.addTable = e;
  },
  98,
);
