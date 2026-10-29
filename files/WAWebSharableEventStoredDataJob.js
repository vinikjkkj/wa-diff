__d(
  "WAWebSharableEventStoredDataJob",
  [
    "Promise",
    "WAWebDBSharableEvent",
    "WAWebDBSharableEventChange",
    "WAWebDBSharableEventCreatorPushName",
    "WAWebDBSharableEventInvitationList",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s() {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var t = yield (e || (e = n("Promise"))).all([
              o("WAWebDBSharableEvent").getSharableEvents(),
              o("WAWebDBSharableEventChange").getSharableEventChanges(),
            ]),
            r = t[0],
            a = t[1],
            i = yield o(
              "WAWebDBSharableEventCreatorPushName",
            ).getSharableEventCreatorPushNames(
              r
                .map(function (e) {
                  return e.creatorLid;
                })
                .filter(Boolean),
            );
          return {
            events: r,
            unseenChanges: a,
            creatorPushNames: Array.from(i.values()),
          };
        })),
        u.apply(this, arguments)
      );
    }
    function c(e) {
      return o("WAWebDBSharableEventInvitationList").getSharableEventInvitees(
        e,
      );
    }
    ((l.loadStoredSharableEvents = s), (l.loadStoredSharableEventInvitees = c));
  },
  98,
);
