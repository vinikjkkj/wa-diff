__d(
  "WAWebEventResponsesSchema",
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
        r = t.addCompositePrimaryKey,
        a = t.addEncryptedColumn,
        i = t.addIndex;
      e.add("event-responses")
        .version(o("WAWebModelStorageVersions").eventsResponsesCreateTable(), [
          r(["parentMsgKey", "sender"]),
          n("msgKey"),
          i("parentMsgKey"),
          n("t"),
          n("ack"),
          n("read"),
          n("senderTimestampMs"),
          a(
            "eventResponse",
            o("WAWebStorageSchema").EncryptedValueType.ARRAY_BUFFER,
          ),
        ])
        .version(
          o("WAWebModelStorageVersions").eventResponsesAddMsgKeyIndex(),
          [i("msgKey")],
        )
        .view(function (e) {
          return e;
        });
    }
    function s() {
      return o("WAWebModelStorageUtils").getStorage().table("event-responses");
    }
    ((l.addTable = e), (l.getTable = s));
  },
  98,
);
