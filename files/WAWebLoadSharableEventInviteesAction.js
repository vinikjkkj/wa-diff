__d(
  "WAWebLoadSharableEventInviteesAction",
  ["WAWebApplySharableEventUpdate", "WAWebSharableEventStoredDataJob"],
  function (t, n, r, o, a, i, l) {
    async function e(e) {
      var t = await o(
        "WAWebSharableEventStoredDataJob",
      ).loadStoredSharableEventInvitees(e);
      o("WAWebApplySharableEventUpdate").applySharableEventUpdate({
        inviteeLists: [{ eventId: e, rows: t }],
      });
    }
    l.loadSharableEventInvitees = e;
  },
  98,
);
