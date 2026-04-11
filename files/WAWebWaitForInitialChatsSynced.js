__d(
  "WAWebWaitForInitialChatsSynced",
  ["Promise", "WAWebBackendEventBus", "WAWebEventsWaitForBbEvent"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e || (e = n("Promise"))).resolve();
    function u() {
      s = r("WAWebEventsWaitForBbEvent")(
        o("WAWebBackendEventBus").BackendEventBus,
        o("WAWebBackendEventBus").BackendEvent.ON_INITIAL_CHAT_SYNCED,
      );
    }
    function c() {
      return s;
    }
    ((l.initWaitForInitialChatsSynced = u), (l.waitForInitialChatsSynced = c));
  },
  98,
);
