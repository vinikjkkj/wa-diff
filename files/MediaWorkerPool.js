__d(
  "MediaWorkerPool",
  ["FBLogger", "WACustomError", "WAPromiseTimeout", "WAResultOrError", "err"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = function () {
        return r("FBLogger")("media_platform").tags(["MediaWorkerPool"]);
      },
      u = (function () {
        function t() {
          ((this.$1 = []), (this.$2 = 0), (this.$3 = new Map()));
        }
        var n = t.prototype;
        return (
          (n.addWorker = function (t) {
            this.$1.push(t);
          }),
          (n.removeWorker = function (t) {
            var e = this.$1.indexOf(t);
            e !== -1 &&
              (this.$1.splice(e, 1),
              this.$3.delete(t),
              this.$2 >= this.$1.length && (this.$2 = 0));
          }),
          (n.getNextPort = function () {
            if (this.$1.length === 0)
              throw r("err")("MediaWorkerPool: no workers available");
            var e = this.$1[this.$2];
            return ((this.$2 = (this.$2 + 1) % this.$1.length), e);
          }),
          (n.markTaskComplete = function (t) {
            this.$3.set(t, Date.now());
          }),
          (n.getWorkerIdleMs = function (t) {
            var e = this.$3.get(t);
            return e != null ? Date.now() - e : -1;
          }),
          (n.getNextConnectedPortWithTimeout = function (n) {
            n == null || n.addPoint("get_connected_worker_port_start");
            var t = this.getNextPort(),
              r = (this.$2 - 1 + this.$1.length) % this.$1.length,
              a = 3e4;
            return (
              n == null ||
                n.addAnnotations({
                  int: {
                    pool_size: this.$1.length,
                    worker_index: r,
                    worker_idle_ms: this.getWorkerIdleMs(t),
                  },
                }),
              o("WAPromiseTimeout")
                .promiseTimeout(t.fullyConnected, a)
                .then(function (e) {
                  return (
                    n == null || n.addPoint("get_connected_worker_port_end"),
                    o("WAResultOrError").makeResult(e)
                  );
                })
                .catch(function (t) {
                  return (
                    n == null ||
                      n.addPoint("get_connected_worker_port_fail", {
                        string: {
                          workerPortFailure:
                            t instanceof o("WACustomError").TimeoutError
                              ? "timeout"
                              : "runtime-error",
                        },
                      }),
                    t instanceof o("WACustomError").TimeoutError
                      ? o("WAResultOrError").makeError(
                          "worker-connection-timeout",
                        )
                      : (s().MUSTFIX(
                          e ||
                            (e = babelHelpers.taggedTemplateLiteralLoose([
                              "worker-connection-runtime-error: ",
                              "",
                            ])),
                          String(t),
                        ),
                        o("WAResultOrError").makeError(
                          "worker-connection-runtime-error",
                        ))
                  );
                })
            );
          }),
          (n.broadcastPrewarm = function (t) {
            for (var e of this.$1) this.prewarmPort(e, t);
          }),
          (n.prewarmPort = function (t, n) {
            t.postMessage({ type: "prewarm", operation: n });
          }),
          (n.getSize = function () {
            return this.$1.length;
          }),
          t
        );
      })();
    l.default = u;
  },
  98,
);
