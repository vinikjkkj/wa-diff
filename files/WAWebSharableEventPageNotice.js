__d(
  "WAWebSharableEventPageNotice",
  ["$InternalEnum", "WAWebSharableEventStorageEnums"],
  function (t, n, r, o, a, i, l) {
    var e = n("$InternalEnum")({
      Suspended: "suspended",
      Canceled: "canceled",
      Ended: "ended",
    });
    function s(t, n) {
      return t ===
        o("WAWebSharableEventStorageEnums").SharableEventStoredStatus.Suspended
        ? e.Suspended
        : t ===
            o("WAWebSharableEventStorageEnums").SharableEventStoredStatus
              .Canceled
          ? e.Canceled
          : t ===
                o("WAWebSharableEventStorageEnums").SharableEventStoredStatus
                  .Active ||
              t ===
                o("WAWebSharableEventStorageEnums").SharableEventStoredStatus
                  .Unknown
            ? n
              ? e.Ended
              : null
            : (function () {
                throw Error(
                  "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                    t,
                );
              })();
    }
    ((l.SharableEventPageNotice = e), (l.getSharableEventPageNotice = s));
  },
  98,
);
