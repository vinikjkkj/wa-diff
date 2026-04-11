__d(
  "WAWebSchemaLidChatState",
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
        r = t.addUserDefinedPrimaryKey;
      e.add("lid-chat-state")
        .version(o("WAWebModelStorageVersions").lidChatStateCreateTable(), [
          r("id"),
          n("shareOwnPn"),
          n("requestedPnTimestamp"),
        ])
        .view(function (e) {
          return e;
        });
    }
    l.addTable = e;
  },
  98,
);
