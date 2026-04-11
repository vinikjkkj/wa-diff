__d(
  "WAWebSchemaLocalStorage",
  [
    "WAWebStorageMutationBuilder",
    "WAWebWorkerStorageUtils",
    "WAWebWorkerStorageVersions",
  ],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebStorageMutationBuilder").columnBuilder(),
      s = e.addColumn,
      u = e.addUserDefinedPrimaryKey;
    function c() {
      o("WAWebWorkerStorageUtils")
        .getStorage()
        .add("local_storage")
        .version(o("WAWebWorkerStorageVersions").localStorageCreateTable(), [
          u("key"),
          s("value"),
        ])
        .view(function (e) {
          return { key: e.key, value: e.value };
        });
    }
    function d() {
      return o("WAWebWorkerStorageUtils").getStorage().table("local_storage");
    }
    ((l.addTable = c), (l.getTable = d));
  },
  98,
);
