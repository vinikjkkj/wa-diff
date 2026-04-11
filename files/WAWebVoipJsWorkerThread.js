__d(
  "WAWebVoipJsWorkerThread",
  ["WAWebBackendApi", "WorkerMessagePort", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
      function e(e) {
        ((this.$1 = e),
          (this.$2 = e.startJsWorkerThread()),
          (this.$3 = e.getJsWorkerPThreadId(this.$2)),
          (this.worker = o("WorkerMessagePort").CastWorkerMessagePort(
            e.PThread.pthreads[this.$3],
          )));
      }
      e.create = (function () {
        var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var t =
            yield o("WAWebBackendApi").frontendSendAndReceive(
              "initializeVoipWasm",
            );
          return new e(t);
        });
        function r() {
          return t.apply(this, arguments);
        }
        return r;
      })();
      var r = e.prototype;
      return (
        (r.joinJsWorkerThread = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var e = this,
              n = this.$1.tryJoinJsWorkerThread(this.$2);
            if (n !== 0)
              return t.setTimeout(function () {
                return e.joinJsWorkerThread();
              }, 100);
          });
          function r() {
            return e.apply(this, arguments);
          }
          return r;
        })()),
        (r.shutdown = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            (this.worker.postMessage({
              type: "jsWorkerCmd",
              jsWorkerCmd: "shutdown",
            }),
              yield this.joinJsWorkerThread());
          });
          function t() {
            return e.apply(this, arguments);
          }
          return t;
        })()),
        e
      );
    })();
    l.default = e;
  },
  98,
);
