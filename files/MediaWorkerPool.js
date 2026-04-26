__d(
  "MediaWorkerPool",
  [
    "FBLogger",
    "WACustomError",
    "WAPromiseTimeout",
    "WAResultOrError",
    "WAShiftTimer",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = function () {
        return r("FBLogger")("media_platform").tags(["MediaWorkerPool"]);
      },
      c = (function () {
        function t() {
          ((this.$1 = new Map()), (this.$2 = 0), (this.$3 = null));
        }
        var n = t.prototype;
        return (
          (n.addWorker = function (t, n, r) {
            (r === void 0 && (r = !1),
              this.$1.set(t, {
                worker: n,
                lastTaskEnd: -1,
                inFlight: 0,
                idleTimer: null,
                isExpansion: r,
              }));
          }),
          (n.terminateAndRemoveWorker = function (t) {
            var e,
              n = this.$1.get(t);
            n != null &&
              ((e = n.idleTimer) == null || e.cancel(),
              n.worker.terminate(),
              this.$1.delete(t));
          }),
          (n.getNextPort = function () {
            if (this.$1.size === 0)
              throw r("err")("MediaWorkerPool: no workers available");
            var e = null,
              t = 1 / 0;
            for (var n of this.$1) {
              var o = n[0],
                a = n[1];
              if (a.inFlight === 0) return o;
              (e == null || a.inFlight < t) && ((e = o), (t = a.inFlight));
            }
            if (e == null) throw r("err")("MediaWorkerPool: unreachable");
            return e;
          }),
          (n.markTaskComplete = function (t) {
            var e = this.$1.get(t);
            e != null && ((e.lastTaskEnd = Date.now()), this.$4(t));
          }),
          (n.$4 = function (t) {
            var e = this.$1.get(t);
            e != null && (e.inFlight > 0 && e.inFlight--, this.$5(t));
          }),
          (n.getWorkerIdleMs = function (t) {
            var e = this.$1.get(t);
            return e != null && e.lastTaskEnd >= 0
              ? Date.now() - e.lastTaskEnd
              : -1;
          }),
          (n.configureIdleCleanup = function (t, n) {
            ((this.$2 = t), (this.$3 = n));
            for (var e of this.$1) {
              var r = e[0],
                o = e[1];
              o.isExpansion && this.$5(r);
            }
          }),
          (n.terminateExpansionWorkers = function (t) {
            var e = 0;
            for (var n of Array.from(this.$1)) {
              var r,
                o = n[0],
                a = n[1];
              if (!(!a.isExpansion || a.inFlight > 0)) {
                var i = this.getWorkerIdleMs(o),
                  l = this.$1.size - 1;
                (this.terminateAndRemoveWorker(o),
                  (r = this.$3) == null || r.call(this, i, l, t),
                  e++);
              }
            }
            return e;
          }),
          (n.$5 = function (n) {
            var t,
              r = this,
              a = this.$1.get(n);
            if (
              !(a == null || !a.isExpansion || this.$2 <= 0 || a.inFlight > 0)
            ) {
              (t = a.idleTimer) == null || t.cancel();
              var i = Math.max(0, this.getWorkerIdleMs(n)),
                l = Math.max(0, this.$2 - i),
                s = new (o("WAShiftTimer").ShiftTimer)(function (t) {
                  var n = r.$1.get(t);
                  n != null && (n.idleTimer = null);
                  var o = r.getWorkerIdleMs(t),
                    a = r.$1.size - 1;
                  (u().INFO(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "idle cleanup: removing worker after ",
                        "ms idle",
                      ])),
                    o,
                  ),
                    r.terminateAndRemoveWorker(t),
                    r.$3 == null || r.$3(o, a, "timer"));
                });
              (s.onOrBefore(l, n), (a.idleTimer = s));
            }
          }),
          (n.getNextConnectedPortWithTimeout = function (t) {
            var e = this;
            t == null || t.addPoint("get_connected_worker_port_start");
            var n = this.getNextPort(),
              r = this.$1.get(n);
            ((r == null ? void 0 : r.idleTimer) != null &&
              (r.idleTimer.cancel(), (r.idleTimer = null)),
              r != null && r.inFlight++);
            var a = 0;
            for (var i of this.$1.keys()) {
              if (i === n) break;
              a++;
            }
            var l = 3e4;
            return (
              t == null ||
                t.addAnnotations({
                  int: {
                    pool_size: this.$1.size,
                    worker_index: a,
                    worker_idle_ms: this.getWorkerIdleMs(n),
                  },
                }),
              o("WAPromiseTimeout")
                .promiseTimeout(n.fullyConnected, l)
                .then(function (e) {
                  return (
                    t == null || t.addPoint("get_connected_worker_port_end"),
                    o("WAResultOrError").makeResult(e)
                  );
                })
                .catch(function (r) {
                  return (
                    e.$4(n),
                    t == null ||
                      t.addPoint("get_connected_worker_port_fail", {
                        string: {
                          workerPortFailure:
                            r instanceof o("WACustomError").TimeoutError
                              ? "timeout"
                              : "runtime-error",
                        },
                      }),
                    r instanceof o("WACustomError").TimeoutError
                      ? o("WAResultOrError").makeError(
                          "worker-connection-timeout",
                        )
                      : (u().MUSTFIX(
                          s ||
                            (s = babelHelpers.taggedTemplateLiteralLoose([
                              "worker-connection-runtime-error: ",
                              "",
                            ])),
                          String(r),
                        ),
                        o("WAResultOrError").makeError(
                          "worker-connection-runtime-error",
                        ))
                  );
                })
            );
          }),
          (n.broadcastPrewarm = function (t) {
            for (var e of this.$1.keys()) this.prewarmPort(e, t);
          }),
          (n.prewarmPort = function (t, n) {
            t.postMessage({ type: "prewarm", operation: n });
          }),
          (n.getSize = function () {
            return this.$1.size;
          }),
          t
        );
      })();
    l.default = c;
  },
  98,
);
