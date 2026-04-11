__d(
  "WAWebSchemaDanglingReceipt",
  ["WAWebOffdStorageUtils", "WAWebStorageMutationBuilder"],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebStorageMutationBuilder").columnBuilder(),
      s = e.addAutoIncrementingPrimaryKey,
      u = e.addColumn;
    function c() {
      o("WAWebOffdStorageUtils")
        .getStorage()
        .add("dangling-receipt")
        .version(o("WAWebOffdStorageUtils").getStorage().versions.version(1), [
          s("id"),
          u("receipts"),
          u("acks"),
        ])
        .view(function (e) {
          return e;
        });
    }
    function d() {
      return o("WAWebOffdStorageUtils").getStorage().table("dangling-receipt");
    }
    ((l.addTable = c), (l.getTable = d));
  },
  98,
);
