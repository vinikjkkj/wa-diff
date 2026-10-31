__d(
  "WAWebSharableEventJoinWindow",
  ["WAWebSharableEventStorageEnums", "WAWebSharableEventTiming"],
  function (t, n, r, o, a, i, l) {
    var e = 1800;
    function s(e, t, n, r) {
      return (
        n &&
        e.callLinkToken != null &&
        e.callLinkToken !== "" &&
        e.status !==
          o("WAWebSharableEventStorageEnums").SharableEventStoredStatus
            .Suspended &&
        t !==
          o("WAWebSharableEventStorageEnums").SharableEventStoredRsvpStatus
            .NotGoing &&
        c(e, r)
      );
    }
    function u(t, n) {
      var r = null;
      return (
        t.forEach(function (t) {
          [
            t.startTsSec - e,
            t.startTsSec,
            o("WAWebSharableEventTiming").computeSharableEventEffectiveEndTsSec(
              t,
            ),
          ].forEach(function (e) {
            e > n && (r == null || e < r) && (r = e);
          });
        }),
        r
      );
    }
    function c(t, n) {
      return (
        n >= t.startTsSec - e &&
        n <
          o("WAWebSharableEventTiming").computeSharableEventEffectiveEndTsSec(t)
      );
    }
    ((l.canJoinSharableEventCall = s),
      (l.getNextSharableEventJoinWindowChangeSec = u));
  },
  98,
);
