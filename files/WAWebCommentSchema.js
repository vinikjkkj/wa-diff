__d(
  "WAWebCommentSchema",
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
        a = t.addIndex,
        i = t.addUserDefinedPrimaryKey;
      e.add("comments")
        .version(o("WAWebModelStorageVersions").commentCreateTable(), [
          i("msgKey"),
          n("parentMsgKey"),
          a("parentMsgKey"),
          n("t"),
          n("ack"),
          n("sender"),
          n("read"),
          r(
            "msgRowOpaqueData",
            o("WAWebStorageSchema").EncryptedValueType.ARRAY_BUFFER,
          ),
          n("isOverwrittenByRevoke"),
          n("revokeTimestamp"),
          n("protocolMessageKey"),
          n("subtype"),
          n("isPlaceholder"),
        ])
        .view(function (e) {
          return e;
        });
    }
    function s() {
      return o("WAWebModelStorageUtils").getStorage().table("comments");
    }
    ((l.addTable = e), (l.getTable = s));
  },
  98,
);
