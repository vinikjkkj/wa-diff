__d(
  "WAWebSchemaKyberLastResortKey",
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
        .add("kyber-last-resort-key-store")
        .version(
          o("WAWebSignalStorageVersions").kyberLastResortKeyCreateTable(),
          [s("keyId"), u("keyPair"), u("signature"), u("timestamp")],
        )
        .view(function (e) {
          return {
            keyId: e.keyId,
            keyPair: e.keyPair,
            signature: e.signature,
            timestamp: e.timestamp,
          };
        });
    }
    function d() {
      return o("WAWebSignalStorageUtils")
        .getStorage()
        .table("kyber-last-resort-key-store");
    }
    ((l.addTable = c), (l.getTable = d));
  },
  98,
);
