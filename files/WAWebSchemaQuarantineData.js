__d(
  "WAWebSchemaQuarantineData",
  [
    "WAWebModelStorageUtils",
    "WAWebModelStorageVersions",
    "WAWebStorageMutationBuilder",
    "WAWebStorageSchema",
  ],
  function (t, n, r, o, a, i, l) {
    function e() {
      var e = o("WAWebModelStorageUtils").getStorage(),
        t = o("WAWebStorageMutationBuilder").columnBuilder(e.config),
        n = t.addColumn,
        r = t.addEncryptedColumn,
        a = t.addIndex,
        i = t.addUserDefinedPrimaryKey;
      e.add("quarantine-data")
        .version(o("WAWebModelStorageVersions").quarantineDataCreateTable(), [
          i("msgId"),
          r(
            "originalProtobuf",
            o("WAWebStorageSchema").EncryptedValueType.ARRAY_BUFFER,
          ),
          n("createdAt"),
          a("createdAt"),
        ])
        .view(function (e) {
          return e;
        })
        .useDbMsgEncKeyForEncryptedCol(!0);
    }
    function s() {
      return o("WAWebModelStorageUtils").getStorage().table("quarantine-data");
    }
    ((l.addTable = e), (l.getTable = s));
  },
  98,
);
