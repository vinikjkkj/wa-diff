__d(
  "WAWebSchemaFtsV2Index",
  [
    "WAWebFtsStorageUtils",
    "WAWebFtsStorageVersions",
    "WAWebStorageMutationBuilder",
  ],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebStorageMutationBuilder").columnBuilder(),
      s = e.addColumn,
      u = e.addCompositeIndex,
      c = e.addCompositePrimaryKey,
      d = e.addIndex,
      m = "fts-v2-index";
    function p() {
      o("WAWebFtsStorageUtils")
        .getStorage()
        .add(m)
        .version(o("WAWebFtsStorageVersions").ftsV2IndexCreateTable(), [
          c(["id", "chatId", "token"]),
          d("id"),
          d("chatId"),
          d("token"),
          u(["chatId", "token"]),
          s("timestamp"),
          u(["id", "token"]),
        ])
        .delete(o("WAWebFtsStorageVersions").ftsV2Delete());
    }
    l.addTable = p;
  },
  98,
);
