__d(
  "WAWebSharableEventGuestListDrawerWidth",
  ["WAWebSharableEventExternalStore"],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebSharableEventExternalStore").createSharableEventStore(null);
    function s(t, n, r) {
      var o = e.get(),
        a = (o == null ? void 0 : o.drawer) === t ? o : null;
      r == null
        ? a != null && e.set(null)
        : (a == null || a.widthPx !== r) &&
          e.set({ drawer: t, eventId: n, widthPx: r });
    }
    function u(t) {
      var n = e.get();
      return n != null && n.eventId === t ? n.widthPx : 0;
    }
    function c(t) {
      return e.subscribe(t);
    }
    ((l.reportSharableEventGuestListDrawerWidth = s),
      (l.getSharableEventGuestListDrawerWidth = u),
      (l.subscribeToSharableEventGuestListDrawerWidth = c));
  },
  98,
);
