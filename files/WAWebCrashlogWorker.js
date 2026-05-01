__d(
  "WAWebCrashlogWorker",
  [],
  function (t, n, r, o, a, i) {
    function e(e) {
      return function (t, n) {
        return e.sendAndReceive("mainthread_crashlog", "sendLogs", {
          reason: t,
          options: n,
        });
      };
    }
    i.createSendLogsWorker = e;
  },
  66,
);
