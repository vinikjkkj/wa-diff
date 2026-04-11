__d(
  "WAWebSchemaReactions",
  [
    "$InternalEnum",
    "WAWebModelStorageUtils",
    "WAWebModelStorageVersions",
    "WAWebStorageMutationBuilder",
  ],
  function (t, n, r, o, a, i, l) {
    var e = n("$InternalEnum").Mirrored([
      "ParentMsgPlaceholder",
      "ParentMsgMissing",
      "ParentMsgFutureproof",
    ]);
    function s() {
      var e = o("WAWebModelStorageUtils").getStorage(),
        t = o("WAWebStorageMutationBuilder").columnBuilder(e.config),
        n = t.addColumn,
        r = t.addCompositeIndex,
        a = t.addCompositePrimaryKey,
        i = t.addIndex;
      e.add("reactions")
        .version(o("WAWebModelStorageVersions").reactionsCreateTable(), [
          a(["parentMsgKey", "senderUserJid"]),
          n("msgKey"),
          n("reactionText"),
          n("timestamp"),
          n("orphan"),
          n("orphanReason"),
          n("read"),
          n("ack"),
          i("parentMsgKey"),
          i("orphan"),
          n("t"),
        ])
        .version(o("WAWebModelStorageVersions").addReactionTableOrphanIndex(), [
          r(["parentMsgKey", "orphan"]),
        ])
        .version(o("WAWebModelStorageVersions").addReactionTableMsgKeyIndex(), [
          i("msgKey"),
        ])
        .view(function (e) {
          return e;
        });
    }
    function u() {
      return o("WAWebModelStorageUtils").getStorage().table("reactions");
    }
    ((l.addTable = s), (l.getReactionsTable = u));
  },
  98,
);
