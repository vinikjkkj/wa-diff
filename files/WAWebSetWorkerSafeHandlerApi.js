__d(
  "WAWebSetWorkerSafeHandlerApi",
  ["WAWebWorkerSafeBridgeApi"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      e.setHandlers(
        "workerSafeEvent",
        babelHelpers.extends(
          {},
          o("WAWebWorkerSafeBridgeApi").WorkerSafeBridgeApi,
        ),
      );
    }
    l.setWorkerSafeHandlers = e;
  },
  98,
);
