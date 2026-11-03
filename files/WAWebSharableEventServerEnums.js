__d(
  "WAWebSharableEventServerEnums",
  ["WAWebSharableEventStorageEnums"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return e === "ACTIVE"
        ? o("WAWebSharableEventStorageEnums").SharableEventStoredStatus.Active
        : e === "CANCELED"
          ? o("WAWebSharableEventStorageEnums").SharableEventStoredStatus
              .Canceled
          : e === "SUSPENDED"
            ? o("WAWebSharableEventStorageEnums").SharableEventStoredStatus
                .Suspended
            : o("WAWebSharableEventStorageEnums").SharableEventStoredStatus
                .Unknown;
    }
    function s(e) {
      return e === "GOING"
        ? o("WAWebSharableEventStorageEnums").SharableEventStoredRsvpStatus
            .Going
        : e === "MAYBE"
          ? o("WAWebSharableEventStorageEnums").SharableEventStoredRsvpStatus
              .Maybe
          : e === "NOT_GOING"
            ? o("WAWebSharableEventStorageEnums").SharableEventStoredRsvpStatus
                .NotGoing
            : o("WAWebSharableEventStorageEnums").SharableEventStoredRsvpStatus
                .NoResponse;
    }
    ((l.toStoredStatus = e), (l.toStoredRsvpStatus = s));
  },
  98,
);
