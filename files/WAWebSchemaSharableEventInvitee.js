__d(
  "WAWebSchemaSharableEventInvitee",
  [
    "WAWebModelStorageUtils",
    "WAWebModelStorageVersions",
    "WAWebStorageMutationBuilder",
    "WAWebStorageSchema",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.eventId,
        n = e.inviteeLid;
      return [t, n];
    }
    function s() {
      var e = o("WAWebModelStorageUtils").getStorage(),
        t = o("WAWebStorageMutationBuilder").columnBuilder(e.config),
        n = t.addColumn,
        r = t.addCompositePrimaryKey,
        a = t.addEncryptedColumn,
        i = t.addIndex;
      e.add("sharable-event-invitee")
        .version(
          o("WAWebModelStorageVersions").sharableEventInviteeCreateTable(),
          [
            r(["eventId", "inviteeLid"]),
            a("username", o("WAWebStorageSchema").EncryptedValueType.STRING),
            n("rsvpStatus"),
            n("isWaUser"),
            n("extraGuestCount"),
            n("createdTsSec"),
            n("lastUpdatedTsSec"),
            a("phoneNumber", o("WAWebStorageSchema").EncryptedValueType.STRING),
            a("guestName", o("WAWebStorageSchema").EncryptedValueType.STRING),
            i("eventId"),
            i("inviteeLid"),
          ],
        )
        .view(function (e) {
          return e;
        });
    }
    function u() {
      return o("WAWebModelStorageUtils")
        .getStorage()
        .table("sharable-event-invitee");
    }
    ((l.createSharableEventInviteePrimaryKey = e),
      (l.addTable = s),
      (l.getSharableEventInviteeTable = u));
  },
  98,
);
