__d(
  "WAWebSchemaBasekey",
  [
    "WAWebSignalStorageUtils",
    "WAWebSignalStorageVersions",
    "WAWebStorageMutationBuilder",
  ],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebStorageMutationBuilder").columnBuilder(),
      s = e.addAutoIncrementingPrimaryKey,
      u = e.addColumn,
      c = e.addCompositeIndex;
    function d() {
      o("WAWebSignalStorageUtils")
        .getStorage()
        .add("baseKey-store")
        .version(o("WAWebSignalStorageVersions").baseKeyCreateTable(), [
          s("id"),
          u("address"),
          u("originalMsgId"),
          u("baseKey"),
          c(["address", "originalMsgId"]),
        ])
        .view(function (e) {
          return {
            id: e.id,
            address: e.address,
            originalMsgId: e.originalMsgId,
            baseKey: e.baseKey,
          };
        });
    }
    function m() {
      return o("WAWebSignalStorageUtils").getStorage().table("baseKey-store");
    }
    ((l.addTable = d), (l.getTable = m));
  },
  98,
);
