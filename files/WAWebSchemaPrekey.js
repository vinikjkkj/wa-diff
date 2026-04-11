__d(
  "WAWebSchemaPrekey",
  [
    "WAWebSignalStorageUtils",
    "WAWebSignalStorageVersions",
    "WAWebStorageMutationBuilder",
  ],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebStorageMutationBuilder").columnBuilder(),
      s = e.addAutoIncrementingPrimaryKey,
      u = e.addColumn;
    function c() {
      o("WAWebSignalStorageUtils")
        .getStorage()
        .add("prekey-store")
        .version(o("WAWebSignalStorageVersions").preKeyCreateTable(), [
          s("keyId"),
          u("keyPair"),
          u("isDirectDistribution"),
        ])
        .view(function (e) {
          return {
            keyId: e.keyId,
            keyPair: e.keyPair,
            isDirectDistribution: e.isDirectDistribution,
          };
        });
    }
    function d() {
      return o("WAWebSignalStorageUtils").getStorage().table("prekey-store");
    }
    ((l.addTable = c), (l.getTable = d));
  },
  98,
);
