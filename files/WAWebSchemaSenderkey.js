__d(
  "WAWebSchemaSenderkey",
  [
    "WAWebSignalStorageUtils",
    "WAWebSignalStorageVersions",
    "WAWebStorageMutationBuilder",
  ],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebStorageMutationBuilder").columnBuilder(),
      s = e.addColumn,
      u = e.addIndex,
      c = e.addUserDefinedPrimaryKey;
    function d() {
      o("WAWebSignalStorageUtils")
        .getStorage()
        .add("senderkey-store")
        .version(o("WAWebSignalStorageVersions").senderKeyCreateTable(), [
          c("senderKeyName"),
          s("senderKey"),
          s("senderId"),
          u("senderId"),
        ])
        .view(function (e) {
          return {
            senderKeyName: e.senderKeyName,
            senderKey: e.senderKey,
            senderId: e.senderId,
          };
        });
    }
    function m() {
      return o("WAWebSignalStorageUtils").getStorage().table("senderkey-store");
    }
    ((l.addTable = d), (l.getTable = m));
  },
  98,
);
