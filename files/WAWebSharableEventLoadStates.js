__d(
  "WAWebSharableEventLoadStates",
  ["$InternalEnum", "WAWebSharableEventExternalStore"],
  function (t, n, r, o, a, i, l) {
    var e = n("$InternalEnum")({
        Idle: "idle",
        Loading: "loading",
        WaitingForCredentials: "waitingForCredentials",
        Loaded: "loaded",
        Error: "error",
        Unavailable: "unavailable",
      }),
      s = "list",
      u = { status: e.Idle, errorKind: null, lastRefreshedTs: null },
      c = o("WAWebSharableEventExternalStore").createSharableEventKeyedStore(u);
    function d(e, t) {
      c.set(e, babelHelpers.extends({}, c.get(e), t));
    }
    ((l.SharableEventLoadStatus = e),
      (l.SHARABLE_EVENT_LIST_LOAD_KEY = s),
      (l.SharableEventLoadStates = c),
      (l.updateSharableEventLoadState = d));
  },
  98,
);
