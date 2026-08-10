__d(
  "WAWebVoipJsWorkerThread",
  ["WAWebBackendApi", "WorkerMessagePort", "asyncToGeneratorRuntime", "err"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
      function e(e, t) {
        if (
          (t === void 0 && (t = "legacy-pj"),
          (this.$1 = e),
          (this.$2 = t),
          t === "pre-init"
            ? (this.$3 = e.startPreInitJsWorkerThread())
            : (this.$3 = e.startJsWorkerThread()),
          this.$3 === 0)
        )
          throw r("err")("voip: failed to create JsWorkerThread");
        ((this.$4 =
          t === "pre-init" ? this.$3 : e.getJsWorkerPThreadId(this.$3)),
          (this.worker = o("WorkerMessagePort").CastWorkerMessagePort(
            e.PThread.pthreads[this.$4],
          )));
      }
      e.create = (function () {
        var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          n === void 0 && (n = "legacy-pj");
          var r =
            t != null
              ? t
              : yield o("WAWebBackendApi").frontendSendAndReceive(
                  "initializeVoipWasm",
                );
          return new e(r, n);
        });
        function r(e, n) {
          return t.apply(this, arguments);
        }
        return r;
      })();
      var a = e.prototype;
      return (
        (a.joinJsWorkerThread = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var e = this,
              n =
                this.$2 === "pre-init"
                  ? this.$1.tryJoinPreInitJsWorkerThread(this.$3)
                  : this.$1.tryJoinJsWorkerThread(this.$3);
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
        (a.shutdown = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            (this.worker.postMessage({
              type: "cmd",
              cmd: "jsWorkerCmd",
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
