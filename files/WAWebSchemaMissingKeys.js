__d(
  "WAWebSchemaMissingKeys",
  [
    "WASyncdKeyTypes",
    "WAWebModelStorageUtils",
    "WAWebModelStorageVersions",
    "WAWebStorageMutationBuilder",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.deviceResponses,
        n = e.keyHex,
        r = e.keyId,
        a = e.timestamp;
      return {
        keyHex: n,
        keyId: o("WASyncdKeyTypes").toSyncKeyId(r),
        timestamp: a,
        deviceResponses: t,
      };
    }
    function s(e) {
      var t = e.deviceResponses,
        n = e.keyHex,
        r = e.keyId,
        a = e.timestamp;
      return {
        keyHex: n,
        keyId: o("WASyncdKeyTypes").fromSyncKeyId(r),
        timestamp: a,
        deviceResponses: t,
      };
    }
    function u() {
      var e = o("WAWebModelStorageUtils").getStorage(),
        t = o("WAWebStorageMutationBuilder").columnBuilder(e.config),
        n = t.addColumn,
        r = t.addUserDefinedPrimaryKey;
      e.add("missing-keys")
        .version(o("WAWebModelStorageVersions").missingKeysCreateTable(), [
          r("keyHex"),
          n("keyId"),
          n("timestamp"),
          n("deviceResponses"),
        ])
        .view(function (e) {
          return e;
        });
    }
    function c() {
      return o("WAWebModelStorageUtils").getStorage().table("missing-keys");
    }
    ((l.convertToMissingKeyFromRow = e),
      (l.convertFromMissingKeyToRow = s),
      (l.addTable = u),
      (l.getMissingKeysTable = c));
  },
  98,
);
