__d(
  "WAWebWaitForInitialChatsSynced",
  ["Promise", "WAWebBackendEventBus", "WAWebEventsWaitForBbEvent"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e || (e = n("Promise"))).resolve(),
      u = !1;
    function c() {
      ((u = !0),
        (s = r("WAWebEventsWaitForBbEvent")(
          o("WAWebBackendEventBus").BackendEventBus,
          o("WAWebBackendEventBus").BackendEvent.ON_INITIAL_CHAT_SYNCED,
        ).finally(function () {
          u = !1;
        })));
    }
    function d() {
      return u;
    }
    function m() {
      return s;
    }
    ((l.initWaitForInitialChatsSynced = c),
      (l.isWaitForInitialChatsSyncedPending = d),
      (l.waitForInitialChatsSynced = m));
  },
  98,
);
