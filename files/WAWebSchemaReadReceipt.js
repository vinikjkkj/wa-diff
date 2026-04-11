__d(
  "WAWebSchemaReadReceipt",
  ["WAWebOffdStorageUtils", "WAWebStorageMutationBuilder"],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebStorageMutationBuilder").columnBuilder(),
      s = e.addColumn,
      u = e.addUserDefinedPrimaryKey;
    function c() {
      o("WAWebOffdStorageUtils")
        .getStorage()
        .add("read-receipt")
        .version(o("WAWebOffdStorageUtils").getStorage().versions.version(0), [
          u("id"),
          s("externalIds"),
        ])
        .delete(o("WAWebOffdStorageUtils").getStorage().versions.version(3))
        .view(function (e) {
          return e;
        });
    }
    l.addTable = c;
  },
  98,
);
