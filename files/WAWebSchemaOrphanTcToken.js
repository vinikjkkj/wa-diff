__d(
  "WAWebSchemaOrphanTcToken",
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
        a = t.addUserDefinedPrimaryKey;
      e.add("orphan-tc-token")
        .version(o("WAWebModelStorageVersions").orphanTcTokenCreateTable(), [
          a("chatId"),
          r("tcToken", o("WAWebStorageSchema").EncryptedValueType.ARRAY_BUFFER),
          n("tcTokenTimestamp"),
        ])
        .view(function (e) {
          return e;
        });
    }
    function s() {
      return o("WAWebModelStorageUtils").getStorage().table("orphan-tc-token");
    }
    ((l.addTable = e), (l.getOrphanTcTokenTable = s));
  },
  98,
);
