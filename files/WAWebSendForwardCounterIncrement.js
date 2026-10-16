__d(
  "WAWebSendForwardCounterIncrement",
  ["WAWebWorkerSafeBackendApi"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.newsletterId,
        n = e.retriesRemaining,
        r = e.serverId;
      o("WAWebWorkerSafeBackendApi").workerSafeFireAndForget(
        "incrementForwardCounterAPI",
        { newsletterId: t, retriesRemaining: n, serverId: r },
      );
    }
    l.sendForwardCounterIncrement = e;
  },
  98,
);
