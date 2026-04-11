__d(
  "WAWebSchemaFtsV2TokenPrefixes",
  [
    "WAWebFtsStorageUtils",
    "WAWebFtsStorageVersions",
    "WAWebStorageMutationBuilder",
  ],
  function (t, n, r, o, a, i, l) {
    var e = "fts-v2-token-prefixes",
      s = o("WAWebStorageMutationBuilder").columnBuilder(),
      u = s.addArrayIndex,
      c = s.addColumn,
      d = s.addUserDefinedPrimaryKey;
    function m() {
      o("WAWebFtsStorageUtils")
        .getStorage()
        .add(e)
        .version(
          o("WAWebFtsStorageVersions").ftsV2TokenToPrefixesCreateTable(),
          [d("token"), c("prefixes"), u("prefixes")],
        )
        .delete(o("WAWebFtsStorageVersions").ftsV2DeleteTokenPrefixes());
    }
    l.addTable = m;
  },
  98,
);
