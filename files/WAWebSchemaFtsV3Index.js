__d(
  "WAWebSchemaFtsV3Index",
  [
    "WAFtsV3IndexEntry",
    "WAWebFtsStorageUtils",
    "WAWebFtsStorageVersions",
    "WAWebStorageMutationBuilder",
  ],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebStorageMutationBuilder").columnBuilder(),
      s = e.addArrayIndex,
      u = e.addAutoIncrementingPrimaryKey,
      c = e.addColumn,
      d = e.addIndex,
      m = "fts-v3-index";
    function p() {
      o("WAWebFtsStorageUtils")
        .getStorage()
        .add(m)
        .version(o("WAWebFtsStorageVersions").ftsV3IndexCreateTable(), [
          u("ftsRowId"),
          c("id"),
          d("id"),
          c("chatId"),
          d("chatId"),
          c("timestamp"),
          c("prefixes"),
          s("prefixes"),
        ])
        .view(function (e) {
          return e
            ? o("WAFtsV3IndexEntry").buildDBEntry(
                e.ftsRowId,
                e.id,
                e.chatId,
                e.timestamp,
                e.prefixes,
              )
            : null;
        });
    }
    function _() {
      return o("WAWebFtsStorageUtils").getStorage().table(m);
    }
    ((l.addTable = p), (l.getTable = _));
  },
  98,
);
