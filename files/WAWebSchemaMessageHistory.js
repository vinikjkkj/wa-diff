__d(
  "WAWebSchemaMessageHistory",
  [
    "WAWebModelStorageUtils",
    "WAWebModelStorageVersions",
    "WAWebStorageMutationBuilder",
  ],
  function (t, n, r, o, a, i, l) {
    function e() {
      var e = o("WAWebModelStorageUtils").getStorage(),
        t = o("WAWebStorageMutationBuilder").columnBuilder(e.config),
        n = t.addColumn,
        r = t.addIndex,
        a = t.addUserDefinedPrimaryKey;
      e.add("message-history")
        .version(o("WAWebModelStorageVersions").messageHistoryCreateTable(), [
          a("msgKey"),
          n("parentMsgKey"),
          r("parentMsgKey"),
        ])
        .view(function (e) {
          return e;
        });
    }
    l.addTable = e;
  },
  98,
);
