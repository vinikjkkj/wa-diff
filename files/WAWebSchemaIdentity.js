__d(
  "WAWebSchemaIdentity",
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
        .add("identity-store")
        .version(o("WAWebSignalStorageVersions").identityCreateTable(), [
          u("identifier"),
          s("identityKey"),
          s("rowId"),
          s("sentAddonRowId"),
        ])
        .view(function (e) {
          return {
            identifier: e.identifier,
            identityKey: e.identityKey,
            rowId: e.rowId,
            sentAddonRowId: e.sentAddonRowId,
          };
        });
    }
    function d() {
      return o("WAWebSignalStorageUtils").getStorage().table("identity-store");
    }
    ((l.addTable = c), (l.getTable = d));
  },
  98,
);
