__d(
  "WAWebWorkerHeadlessApi",
  ["Promise", "WAWebRuntimeEnvironmentUtils", "err"],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(t) {
      if (!o("WAWebRuntimeEnvironmentUtils").isWorker())
        throw r("err")(
          "attachHeadlessHandlers should be used only in worker thread",
        );
      function a() {
        return (e || (e = n("Promise"))).resolve(null);
      }
      (t.setNamespaceHandler("event", function (e, t, n) {
        n && n(a());
      }),
        t.setNamespaceHandler("workerSafeEvent", function (e, t, n) {
          n && n(a());
        }));
    }
    l.attachHeadlessHandlers = s;
  },
  98,
);
