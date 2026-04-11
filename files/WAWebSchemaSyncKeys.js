__d(
  "WAWebSchemaSyncKeys",
  [
    "WASyncdKeyTypes",
    "WAWebModelStorageUtils",
    "WAWebModelStorageVersions",
    "WAWebStorageMutationBuilder",
    "WAWebStorageSchema",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.keyData,
        n = e.keyId;
      return babelHelpers.extends({}, e, {
        keyId: o("WASyncdKeyTypes").toSyncKeyId(n.buffer),
        keyData: o("WASyncdKeyTypes").toSyncKeyData(t),
      });
    }
    function s(e) {
      var t = e.keyData,
        n = e.keyId;
      return babelHelpers.extends({}, e, {
        keyId: new Uint8Array(o("WASyncdKeyTypes").fromSyncKeyId(n)),
        keyData: o("WASyncdKeyTypes").fromSyncKeyData(t),
      });
    }
    function u() {
      var e = o("WAWebModelStorageUtils").getStorage(),
        t = o("WAWebStorageMutationBuilder").columnBuilder(e.config),
        n = t.addColumn,
        r = t.addEncryptedColumn,
        a = t.addIndex,
        i = t.addUserDefinedPrimaryKey;
      e.add("sync-keys")
        .version(o("WAWebModelStorageVersions").syncKeysCreateTable(), [
          i("keyId"),
          n("timestamp"),
          n("fingerprint"),
          r("keyData", o("WAWebStorageSchema").EncryptedValueType.ARRAY_BUFFER),
          n("keyEpoch"),
          a("keyEpoch"),
        ])
        .view(function (e) {
          return e;
        });
    }
    function c() {
      return o("WAWebModelStorageUtils").getStorage().table("sync-keys");
    }
    ((l.convertToSyncKeyFromRow = e),
      (l.convertFromSyncKeyToRow = s),
      (l.addTable = u),
      (l.getSyncKeysTable = c));
  },
  98,
);
