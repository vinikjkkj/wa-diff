__d(
  "WAWebFtsWorkerAdapter",
  [
    "WAWebBrokerMainConnect",
    "WAWebFtsWorkerResource",
    "WorkerBundleResource",
    "nullthrows",
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
              (r("nullthrows")(this.worker).onmessage = function (e) {
                t(e.data.message);
              }),
              (r("nullthrows")(this.worker).onerror = n),
              r("WAWebBrokerMainConnect")(this));
          }),
          (t.postMessage = function (t, n) {
            var e = { type: "message", message: t };
            r("nullthrows")(this.worker).postMessage(e, n);
          }),
          (t.terminate = function () {
            r("nullthrows")(this.worker).terminate();
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
