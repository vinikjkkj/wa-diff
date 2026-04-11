__d(
  "WAWebSchemaPendingMutations",
  [
    "WAWebModelStorageUtils",
    "WAWebModelStorageVersions",
    "WAWebStorageMutationBuilder",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.action,
        n = e.binarySyncAction,
        r = e.collection,
        o = e.id,
        a = e.index,
        i = e.operation,
        l = e.timestamp,
        s = e.version;
      return {
        id: o,
        collection: r,
        index: a,
        binarySyncAction: n,
        version: s,
        operation: i,
        timestamp: l,
        action: t,
      };
    }
    function s() {
      var e = o("WAWebModelStorageUtils").getStorage(),
        t = o("WAWebStorageMutationBuilder").columnBuilder(e.config),
        n = t.addAutoIncrementingPrimaryKey,
        r = t.addColumn,
        a = t.addIndex;
      e.add("pending-mutations")
        .version(o("WAWebModelStorageVersions").pendingMutationsCreateTable(), [
          n("id"),
          r("collection"),
          r("index"),
          a("index"),
          r("timestamp"),
          a("collection"),
          r("version"),
          r("operation"),
          r("binarySyncAction"),
        ])
        .version(o("WAWebModelStorageVersions").addActionToPendingMutations(), [
          r("action"),
          a("action"),
        ])
        .view(function (e) {
          return e;
        });
    }
    function u() {
      return o("WAWebModelStorageUtils")
        .getStorage()
        .table("pending-mutations");
    }
    ((l.convertToPendingMutationFromRow = e),
      (l.addTable = s),
      (l.getPendingMutationsTable = u));
  },
  98,
);
