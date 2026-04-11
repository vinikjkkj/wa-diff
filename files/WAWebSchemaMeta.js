__d(
  "WAWebSchemaMeta",
  [
    "WAWebSignalStorageUtils",
    "WAWebSignalStorageVersions",
    "WAWebStorageMutationBuilder",
  ],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebStorageMutationBuilder").columnBuilder(),
      s = e.addColumn,
      u = e.addUserDefinedPrimaryKey;
    function c() {
      o("WAWebSignalStorageUtils")
        .getStorage()
        .add("signal-meta-store")
        .version(o("WAWebSignalStorageVersions").metaCreateTable(), [
          u("key"),
          s("value"),
        ])
        .view(function (e) {
          return { key: e.key, value: e.value };
        });
    }
    function d() {
      return o("WAWebSignalStorageUtils")
        .getStorage()
        .table("signal-meta-store");
    }
    ((l.addTable = c), (l.getTable = d));
  },
  98,
);
