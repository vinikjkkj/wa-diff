__d(
  "WAWebEventsWaitForMainStreamReadyMd",
  ["Promise", "WAWebBackendEventBus", "WAWebEventsWaitForBbEvent"],
  function (t, n, r, o, a, i, l) {
    var e;
    function s() {
      return o("WAWebBackendEventBus").BackendEventBus.isMainStreamReadyMd
        ? (e || (e = n("Promise"))).resolve()
        : r("WAWebEventsWaitForBbEvent")(
            o("WAWebBackendEventBus").BackendEventBus,
            o("WAWebBackendEventBus").BackendEvent.MAIN_STREAM_MODE_READY,
          );
    }
    l.default = s;
  },
  98,
);
