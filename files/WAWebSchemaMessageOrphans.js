__d(
  "WAWebSchemaMessageOrphans",
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
        a = t.addUserDefinedPrimaryKey,
        i = t.removeIndex;
      e.add("message-orphans")
        .version(o("WAWebModelStorageVersions").messageOrphansCreateTable(), [
          a("msgKey"),
          n("parentMsgKey"),
          r("parentMsgKey"),
          n("sender"),
          n("parsedMsgPayload"),
          n("senderTimestampMs"),
          r("senderTimestampMs"),
        ])
        .version(o("WAWebModelStorageVersions").messageOrphansAddColumns(), [
          n("t"),
          r("t"),
          n("type"),
          i("senderTimestampMs"),
          n("read"),
          n("reportingTokenInfo"),
        ])
        .view(function (e) {
          return e;
        });
    }
    function s() {
      return o("WAWebModelStorageUtils").getStorage().table("message-orphans");
    }
    ((l.addTable = e), (l.getMessageOrphanTable = s));
  },
  98,
);
