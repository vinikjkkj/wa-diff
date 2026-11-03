__d(
  "WAWebSharableEventViewerState",
  [
    "WAWebSharableEventAddToCalendarAction",
    "WAWebSharableEventGatingUtils",
    "WAWebSharableEventJoinWindow",
    "WAWebSharableEventStorageEnums",
    "WAWebSharableEventTiming",
    "WAWebUserPrefsMeUser",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return e != null && o("WAWebUserPrefsMeUser").isMeAccount(e);
    }
    function s(t, n, r, a) {
      var i = e(t.creatorLid),
        l =
          t.status ===
          o("WAWebSharableEventStorageEnums").SharableEventStoredStatus.Active,
        s = o("WAWebSharableEventTiming").computeSharableEventEffectiveEndTsSec(
          t,
        ),
        u = r >= s,
        c = !i && l && !u,
        d = i && l && !u;
      return {
        isHost: i,
        hasEnded: u,
        canRespond: c,
        canBringGuest: c && t.maxAdditionalGuests > 0,
        canInvite: d,
        canEdit: d,
        canDelete: i && l,
        canAddToCalendar: o(
          "WAWebSharableEventAddToCalendarAction",
        ).canAddSharableEventToCalendar(
          o("WAWebSharableEventGatingUtils")
            .SharableEventAddToCalendarEntryPoint.EventDetails,
          {
            startTsSec: t.startTsSec,
            endTsSec: t.endTsSec,
            isCanceled:
              t.status ===
              o("WAWebSharableEventStorageEnums").SharableEventStoredStatus
                .Canceled,
          },
          r,
        ),
        canJoin: o("WAWebSharableEventJoinWindow").canJoinSharableEventCall(
          t,
          n,
          a,
          r,
        ),
      };
    }
    function u(e, t) {
      var n = o(
          "WAWebSharableEventTiming",
        ).computeSharableEventEffectiveEndTsSec(e),
        r = [
          e.startTsSec - o("WAWebSharableEventJoinWindow").JOIN_WINDOW_LEAD_SEC,
          e.startTsSec,
          o(
            "WAWebSharableEventAddToCalendarAction",
          ).getSharableEventAddToCalendarHiddenTsSec(e.startTsSec, n),
          n,
        ].filter(function (e) {
          return e > t;
        });
      return r.length === 0 ? null : Math.min.apply(Math, r);
    }
    ((l.isSharableEventHostedByViewer = e),
      (l.getSharableEventViewerState = s),
      (l.getNextSharableEventViewerStateChangeSec = u));
  },
  98,
);
