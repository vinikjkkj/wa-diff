__d(
  "WAWebApplySharableEventUpdate",
  [
    "WAWebSharableEventCollection",
    "WAWebSharableEventCreatorPushNameCollection",
    "WAWebSharableEventInviteeCollection",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t,
        n,
        r,
        a,
        i,
        l,
        s,
        u = (t = e.deletedEventIds) != null ? t : [];
      (u.length > 0 &&
        (o(
          "WAWebSharableEventInviteeCollection",
        ).SharableEventInviteeCollection.removeEvents(u),
        o("WAWebSharableEventCollection").SharableEventCollection.remove(u)),
        o(
          "WAWebSharableEventCreatorPushNameCollection",
        ).SharableEventCreatorPushNameCollection.addRows(
          (n = e.creatorPushNames) != null ? n : [],
        ),
        o("WAWebSharableEventCollection").SharableEventCollection.addRows(
          (r = e.events) != null ? r : [],
        ),
        ((a = e.inviteeLists) != null ? a : []).forEach(function (e) {
          var t = e.eventId,
            n = e.rows;
          return o(
            "WAWebSharableEventInviteeCollection",
          ).SharableEventInviteeCollection.replaceEventRows(t, n);
        }),
        o(
          "WAWebSharableEventInviteeCollection",
        ).SharableEventInviteeCollection.addRows(
          (i = e.invitees) != null ? i : [],
        ),
        o(
          "WAWebSharableEventCollection",
        ).SharableEventCollection.applyUnseenChanges(
          (l = e.unseenChanges) != null ? l : [],
          (s = e.seenEventIds) != null ? s : [],
        ));
    }
    l.applySharableEventUpdate = e;
  },
  98,
);
