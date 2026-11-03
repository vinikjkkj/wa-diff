__d(
  "WAWebSharableEventUnseenStore",
  ["WAWebSharableEventExternalStore", "react"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e || (e = o("react"))).useSyncExternalStore,
      u = o("WAWebSharableEventExternalStore").createSharableEventStore(!1);
    function c(e) {
      u.get() !== e && u.set(e);
    }
    function d() {
      return s(u.subscribe, u.get);
    }
    ((l.updateSharableEventsHaveUnseenChanges = c),
      (l.useWAWebSharableEventsHaveUnseenChanges = d));
  },
  98,
);
