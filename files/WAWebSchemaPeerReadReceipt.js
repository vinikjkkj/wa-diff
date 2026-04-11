__d(
  "WAWebSchemaPeerReadReceipt",
  ["WAWebOffdStorageUtils", "WAWebStorageMutationBuilder"],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebStorageMutationBuilder").columnBuilder(),
      s = e.addAutoIncrementingPrimaryKey,
      u = e.addColumn;
    function c() {
      o("WAWebOffdStorageUtils")
        .getStorage()
        .add("peer-read-receipt")
        .version(o("WAWebOffdStorageUtils").getStorage().versions.version(2), [
          s("id"),
          u("msgKeys"),
          u("ts"),
          u("ack"),
        ])
        .view(function (e) {
          return e;
        });
    }
    function d() {
      return o("WAWebOffdStorageUtils").getStorage().table("peer-read-receipt");
    }
    ((l.addTable = c), (l.getTable = d));
  },
  98,
);
