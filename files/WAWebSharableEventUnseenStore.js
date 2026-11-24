__d(
  "WAWebSharableEventUnseenStore",
  [
    "WAWebSharableEventExternalStore",
    "react",
    "useWAWebSharableEventHasPassed",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e || (e = o("react"))).useSyncExternalStore,
      u = o("WAWebSharableEventExternalStore").createSharableEventStore(null);
    function c(e) {
      u.get() !== e && u.set(e);
    }
    function d() {
      var e = s(u.subscribe, u.get),
        t = r("useWAWebSharableEventHasPassed")(e != null ? e : 0);
      return e != null && !t;
    }
    ((l.updateSharableEventsUnseenChangesEnd = c),
      (l.useWAWebSharableEventsHaveUnseenChanges = d));
  },
  98,
);
