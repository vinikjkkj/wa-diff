__d(
  "WAWebSharableEventListFilters",
  [
    "$InternalEnum",
    "WAWebSharableEventCardLayout",
    "WAWebSharableEventStorageEnums",
  ],
  function (t, n, r, o, a, i, l) {
    var e = n("$InternalEnum")({
      All: "all",
      ScheduledCalls: "scheduled-calls",
      NotResponded: "not-responded",
    });
    function s(t, n, r) {
      var o = t.upcoming;
      return n === e.All
        ? t
        : n === e.ScheduledCalls
          ? {
              upcoming: o.filter(function (e) {
                return e.isScheduledCall;
              }),
              past: [],
            }
          : n === e.NotResponded
            ? {
                upcoming: o.filter(function (e) {
                  return c(e, r.get(e.id));
                }),
                past: [],
              }
            : (function () {
                throw Error(
                  "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                    n,
                );
              })();
    }
    function u(t, n, r) {
      if (n === e.All) return null;
      var o = s({ past: [], upcoming: t }, n, r).upcoming.length;
      return o > 0 ? o : null;
    }
    function c(e, t) {
      return (
        t ===
          o("WAWebSharableEventStorageEnums").SharableEventStoredRsvpStatus
            .NoResponse &&
        !o("WAWebSharableEventCardLayout").isSharableEventHostedByViewer(
          e.creatorLid,
        ) &&
        e.status !==
          o("WAWebSharableEventStorageEnums").SharableEventStoredStatus
            .Canceled &&
        e.status !==
          o("WAWebSharableEventStorageEnums").SharableEventStoredStatus
            .Suspended
      );
    }
    ((l.SharableEventListFilter = e),
      (l.selectSharableEventsForFilter = s),
      (l.countSharableEventsForFilter = u));
  },
  98,
);
