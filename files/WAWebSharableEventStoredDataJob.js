__d(
  "WAWebSharableEventStoredDataJob",
  [
    "WAWebDBSharableEvent",
    "WAWebDBSharableEventChange",
    "WAWebDBSharableEventCreatorPushName",
    "WAWebDBSharableEventInvitationList",
  ],
  function (t, n, r, o, a, i, l) {
    async function e() {
      var e = await Promise.all([
          o("WAWebDBSharableEvent").getSharableEvents(),
          o("WAWebDBSharableEventChange").getSharableEventChanges(),
        ]),
        t = e[0],
        n = e[1],
        r = await o(
          "WAWebDBSharableEventCreatorPushName",
        ).getSharableEventCreatorPushNames(
          t
            .map(function (e) {
              return e.creatorLid;
            })
            .filter(Boolean),
        );
      return {
        events: t,
        unseenChanges: n,
        creatorPushNames: Array.from(r.values()),
      };
    }
    function s(e) {
      return o("WAWebDBSharableEventInvitationList").getSharableEventInvitees(
        e,
      );
    }
    async function u(e) {
      return o(
        "WAWebDBSharableEventInvitationList",
      ).getSharableEventInviteeRowsFor(
        await o("WAWebDBSharableEvent").getSharableEventIds(),
        e,
      );
    }
    ((l.loadStoredSharableEvents = e),
      (l.loadStoredSharableEventInvitees = s),
      (l.loadStoredSharableEventViewerInvitations = u));
  },
  98,
);
