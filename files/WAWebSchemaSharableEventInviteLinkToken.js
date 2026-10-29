__d(
  "WAWebSchemaSharableEventInviteLinkToken",
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
        n = t.addEncryptedColumn,
        r = t.addUserDefinedPrimaryKey;
      e.add("sharable-event-invite-link-token")
        .version(
          o(
            "WAWebModelStorageVersions",
          ).sharableEventInviteLinkTokenCreateTable(),
          [
            r("eventId"),
            n("token", o("WAWebStorageSchema").EncryptedValueType.STRING),
          ],
        )
        .view(function (e) {
          return e;
        });
    }
    function s() {
      return o("WAWebModelStorageUtils")
        .getStorage()
        .table("sharable-event-invite-link-token");
    }
    ((l.addTable = e), (l.getSharableEventInviteLinkTokenTable = s));
  },
  98,
);
