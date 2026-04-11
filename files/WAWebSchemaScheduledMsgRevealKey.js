__d(
  "WAWebSchemaScheduledMsgRevealKey",
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
        a = t.addUniqueIndex,
        i = t.addUserDefinedPrimaryKey;
      e.add("scheduled-msg-reveal-key")
        .version(
          o("WAWebModelStorageVersions").scheduledMsgRevealKeyCreateTable(),
          [
            i("msgId"),
            n("chatId"),
            r("chatId"),
            n("revealKeyId"),
            a("revealKeyId"),
            n("revealKey"),
            n("encPayload"),
            n("encIv"),
            n("scheduledTimestampS"),
            n("status"),
            r("status"),
            n("createdAt"),
            n("isOrphan"),
            r("isOrphan"),
          ],
        )
        .view(function (e) {
          return e;
        });
    }
    function s() {
      return o("WAWebModelStorageUtils")
        .getStorage()
        .table("scheduled-msg-reveal-key");
    }
    ((l.addTable = e), (l.getScheduledMsgRevealKeyTable = s));
  },
  98,
);
