__d(
  "WAWebSchemaFtsV1Index",
  [
    "WAWebFtsStorageUtils",
    "WAWebFtsStorageVersions",
    "WAWebStorageMutationBuilder",
  ],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebStorageMutationBuilder").columnBuilder(),
      s = e.addArrayIndex,
      u = e.addColumn,
      c = e.addUserDefinedPrimaryKey,
      d = "fts-v1-index";
    function m() {
      o("WAWebFtsStorageUtils")
        .getStorage()
        .add(d)
        .version(o("WAWebFtsStorageVersions").ftsV1IndexCreateTable(), [
          c("token"),
          u("ids"),
          s("ids"),
          u("prefixes"),
          s("prefixes"),
        ])
        .delete(o("WAWebFtsStorageVersions").ftsV1DeleteAndDeprecate());
    }
    l.deprecateTable = m;
  },
  98,
);
