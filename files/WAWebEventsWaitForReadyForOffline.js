__d(
  "WAWebEventsWaitForReadyForOffline",
  ["Promise", "WAWebBackendEventBus", "WAWebEventsWaitForBbEvent", "err"],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u() {
      s == null &&
        (s = r("WAWebEventsWaitForBbEvent")(
          o("WAWebBackendEventBus").BackendEventBus,
          o("WAWebBackendEventBus").BackendEvent.OFFLINE_PROCESS_READY,
        ));
    }
    function c() {
      return s == null
        ? (e || (e = n("Promise"))).reject(
            r("err")("waitForOfflineProcessReady called before init"),
          )
        : s;
    }
    ((l.initWaitForOfflineProcessReady = u),
      (l.waitForOfflineProcessReady = c));
  },
  98,
);
