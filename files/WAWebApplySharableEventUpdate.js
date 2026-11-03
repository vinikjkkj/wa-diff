__d(
  "WAWebApplySharableEventUpdate",
  [
    "WAWebMsgCollection",
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
        u,
        c = (t = e.deletedEventIds) != null ? t : [];
      (c.length > 0 &&
        (o(
          "WAWebSharableEventInviteeCollection",
        ).SharableEventInviteeCollection.removeEvents(c),
        o("WAWebSharableEventCollection").SharableEventCollection.remove(c)),
        o(
          "WAWebSharableEventCreatorPushNameCollection",
        ).SharableEventCreatorPushNameCollection.addRows(
          (n = e.creatorPushNames) != null ? n : [],
        ));
      var d = (r = e.events) != null ? r : [],
        m = ((a = e.inviteeLists) != null ? a : []).filter(function (e) {
          var t = e.eventId,
            n = d.find(function (e) {
              return e.eventId === t;
            });
          return (
            n == null ||
            !o(
              "WAWebSharableEventCollection",
            ).SharableEventCollection.hasNewerInvitationThan(
              t,
              n.lastInvitationUpdatedTsUsec,
            )
          );
        });
      (o("WAWebSharableEventCollection").SharableEventCollection.addRows(d),
        m.forEach(function (e) {
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
        ),
        ((u = e.inviteMessages) != null ? u : []).forEach(function (e) {
          var t,
            n = e.fields,
            r = e.msgKey;
          (t = o("WAWebMsgCollection").MsgCollection.get(r)) == null ||
            t.set(n);
        }));
    }
    l.applySharableEventUpdate = e;
  },
  98,
);
