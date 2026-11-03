__d(
  "WAWebSchemaSharableEventInviteMessage",
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
        a = t.addUserDefinedPrimaryKey;
      e.add("sharable-event-invite-message")
        .version(
          o(
            "WAWebModelStorageVersions",
          ).sharableEventInviteMessageCreateTable(),
          [a("msgKey"), n("eventId"), r("eventId")],
        )
        .view(function (e) {
          return e;
        });
    }
    function s() {
      return o("WAWebModelStorageUtils")
        .getStorage()
        .table("sharable-event-invite-message");
    }
    ((l.addTable = e), (l.getSharableEventInviteMessageTable = s));
  },
  98,
);
