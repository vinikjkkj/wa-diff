__d(
  "WAWebSchemaSession",
  [
    "WAWebSignalStorageUtils",
    "WAWebSignalStorageVersions",
    "WAWebStorageMutationBuilder",
  ],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebStorageMutationBuilder").columnBuilder(),
      s = e.addColumn,
      u = e.addUserDefinedPrimaryKey;
    function c() {
      o("WAWebSignalStorageUtils")
        .getStorage()
        .add("session-store")
        .version(o("WAWebSignalStorageVersions").sessionCreateTable(), [
          u("address"),
          s("session"),
        ])
        .view(function (e) {
          return { address: e.address, session: e.session };
        });
    }
    function d() {
      return o("WAWebSignalStorageUtils").getStorage().table("session-store");
    }
    ((l.addTable = c), (l.getTable = d));
  },
  98,
);
