__d(
  "WAWebSharableEventTiming",
  ["WAWebSharableEventStorageEnums"],
  function (t, n, r, o, a, i, l) {
    var e = 1800;
    function s(t) {
      var n;
      return (n = t.endTsSec) != null ? n : t.startTsSec + e;
    }
    function u(e, t) {
      return (
        e.status !==
          o("WAWebSharableEventStorageEnums").SharableEventStoredStatus
            .Canceled && s(e) >= t
      );
    }
    function c(e, t) {
      return e.startTsSec - t.startTsSec || s(e) - s(t) || d(e.id, t.id);
    }
    function d(e, t) {
      return e === t ? 0 : e < t ? -1 : 1;
    }
    ((l.DEFAULT_SHARABLE_EVENT_DURATION_SEC = e),
      (l.computeSharableEventEffectiveEndTsSec = s),
      (l.isSharableEventUpcoming = u),
      (l.compareSharableEvents = c));
  },
  98,
);
