__d(
  "WAWebLoadSharableEventInviteesAction",
  [
    "WAWebApplySharableEventUpdate",
    "WAWebSharableEventStoredDataJob",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield o(
            "WAWebSharableEventStoredDataJob",
          ).loadStoredSharableEventInvitees(e);
          o("WAWebApplySharableEventUpdate").applySharableEventUpdate({
            inviteeLists: [{ eventId: e, rows: t }],
          });
        })),
        s.apply(this, arguments)
      );
    }
    l.loadSharableEventInvitees = e;
  },
  98,
);
