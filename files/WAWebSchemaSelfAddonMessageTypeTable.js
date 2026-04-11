__d(
  "WAWebSchemaSelfAddonMessageTypeTable",
  [
    "WAWebModelStorageUtils",
    "WAWebModelStorageVersions",
    "WAWebStorageMutationBuilder",
  ],
  function (t, n, r, o, a, i, l) {
    function e() {
      var e = o("WAWebModelStorageUtils").getStorage(),
        t = o("WAWebStorageMutationBuilder").columnBuilder(e.config),
        n = t.addAutoIncrementingPrimaryKey,
        r = t.addColumn,
        a = t.addIndex;
      e.add("self-addon-message-type")
        .version(o("WAWebModelStorageVersions").selfMessageTypeCreateTable(), [
          n("rowId"),
          r("msgId"),
          r("msgType"),
          a("msgId"),
        ])
        .view(function (e) {
          return e;
        });
    }
    function s() {
      return o("WAWebModelStorageUtils")
        .getStorage()
        .table("self-addon-message-type");
    }
    ((l.addTable = e), (l.getSelfAddonMessageTypeTable = s));
  },
  98,
);
