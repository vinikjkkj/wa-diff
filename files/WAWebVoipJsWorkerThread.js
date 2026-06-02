__d(
  "WAWebVoipJsWorkerThread",
  ["WAWebBackendApi", "WorkerMessagePort"],
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
      e.create = async function () {
        var t =
          await o("WAWebBackendApi").frontendSendAndReceive(
            "initializeVoipWasm",
          );
        return new e(t);
      };
      var n = e.prototype;
      return (
        (n.joinJsWorkerThread = async function () {
          var e = this,
            n = this.$1.tryJoinJsWorkerThread(this.$2);
          if (n !== 0)
            return t.setTimeout(function () {
              return e.joinJsWorkerThread();
            }, 100);
        }),
        (n.shutdown = async function () {
          (this.worker.postMessage({
            type: "cmd",
            cmd: "jsWorkerCmd",
            jsWorkerCmd: "shutdown",
          }),
            await this.joinJsWorkerThread());
        }),
        e
      );
    })();
    l.default = e;
  },
  98,
);
