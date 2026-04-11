__d(
  "WAWebFtsWorkerAdapter",
  [
    "WANullthrows",
    "WAWebBrokerMainConnect",
    "WAWebFtsWorkerResource",
    "WorkerBundleResource",
  ],
  function (t, n, r, o, a, i, l) {
    var e = null,
      s = (function () {
        function e() {
          this.worker = null;
        }
        var t = e.prototype;
        return (
          (t.initialize = function (t, n) {
            ((this.worker = o("WorkerBundleResource").createDedicatedWebWorker(
              r("WAWebFtsWorkerResource"),
            )),
              (r("WANullthrows")(this.worker).onmessage = function (e) {
                t(e.data.message);
              }),
              (r("WANullthrows")(this.worker).onerror = n),
              r("WAWebBrokerMainConnect")(this));
          }),
          (t.postMessage = function (t, n) {
            var e = { type: "message", message: t };
            r("WANullthrows")(this.worker).postMessage(e, n);
          }),
          (t.terminate = function () {
            r("WANullthrows")(this.worker).terminate();
          }),
          e
        );
      })();
    function u(t, n) {
      return (e || ((e = new s()), e.initialize(t, n)), e);
    }
    l.getFtsWorker = u;
  },
  98,
);
