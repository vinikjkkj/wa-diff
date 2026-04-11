__d(
  "WAWebSchemaUnifiedAddons",
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
      e.add("addons-unified")
        .version(o("WAWebModelStorageVersions").createUnifiedAddonsTable(), [
          a("msgKey"),
          n("targetMsgKey"),
          r("targetMsgKey"),
          n("arbitraryIndex"),
          r("arbitraryIndex"),
          n("rowType"),
          r("rowType"),
          n("ack"),
          n("t"),
          n("read"),
          n("addonProps"),
        ])
        .view(function (e) {
          return e;
        });
    }
    function s() {
      return o("WAWebModelStorageUtils").getStorage().table("addons-unified");
    }
    ((l.addTable = e), (l.getTable = s));
  },
  98,
);
