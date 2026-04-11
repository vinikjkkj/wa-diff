__d(
  "WAWebSchemaSignedPrekey",
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
        .add("signed-prekey-store")
        .version(o("WAWebSignalStorageVersions").signedPreKeyCreateTable(), [
          s("keyId"),
          u("keyPair"),
          u("signature"),
        ])
        .view(function (e) {
          return { keyId: e.keyId, keyPair: e.keyPair, signature: e.signature };
        });
    }
    function d() {
      return o("WAWebSignalStorageUtils")
        .getStorage()
        .table("signed-prekey-store");
    }
    ((l.addTable = c), (l.getTable = d));
  },
  98,
);
