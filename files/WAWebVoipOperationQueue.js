__d(
  "WAWebVoipOperationQueue",
  [
    "WACommonTaskScheduler",
    "WALogger",
    "WAWebABProps",
    "WAWebReleaseToEventLoop",
    "WAWebVoipPerfOptimizations",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = 100,
      c = 3e4,
      d = (function (e) {
        function t(t, n) {
          var r;
          return (
            (r =
              e.call(this, "Operation timed out after " + n + "ms: " + t) ||
              this),
            (r.name = "OperationTimeoutError"),
            r
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(babelHelpers.wrapNativeSuper(Error)),
      m = (function () {
        function t(e, t) {
          (t === void 0 && (t = c),
            (this.$1 = []),
            (this.$2 = !1),
            (this.$3 = 0),
            (this.$4 = e),
            (this.$5 = t));
        }
        var n = t.prototype;
        return (
          (n.enqueue = function (t, n) {
            var e = ++this.$3;
            (this.$1.push({ operation: t, name: n + " (#" + e + ")" }),
              this.isProcessing() || this.$6());
          }),
          (n.$6 = async function () {
            var t = this;
            if (!this.isProcessing()) {
              this.$2 = !0;
              for (
                var n = o("WAWebABProps").getABPropConfigValue(
                    "wmi_worker_scheduler_web",
                  ),
                  a = self.performance.now(),
                  i = async function () {
                    var i = t.$1.shift();
                    if (i == null) return 1;
                    var l = i.name,
                      c = i.operation,
                      m = null,
                      p = new Promise(function (e, n) {
                        m = self.setTimeout(function () {
                          return n(new d(l, t.$5));
                        }, t.$5);
                      });
                    try {
                      await Promise.race([c(), p]);
                    } catch (n) {
                      n instanceof d
                        ? o("WALogger")
                            .ERROR(
                              e ||
                                (e = babelHelpers.taggedTemplateLiteralLoose([
                                  "voip: [",
                                  ":Queue] op timeout ",
                                  "ms, abandoning: ",
                                  "",
                                ])),
                              t.$4,
                              t.$5,
                              l,
                            )
                            .sendLogs("voip-operation-queue-timeout")
                        : o("WALogger")
                            .ERROR(
                              s ||
                                (s = babelHelpers.taggedTemplateLiteralLoose([
                                  "voip: [",
                                  ":Queue] Operation failed: ",
                                  ", error: ",
                                  "",
                                ])),
                              t.$4,
                              l,
                              n,
                            )
                            .sendLogs("voip-operation-queue-failure");
                    } finally {
                      m != null && self.clearTimeout(m);
                    }
                    n
                      ? await r("WACommonTaskScheduler").yield()
                      : o(
                          "WAWebVoipPerfOptimizations",
                        ).isPerfOptimizationEnabled(
                          o("WAWebVoipPerfOptimizations").PerfOptimizationFlag
                            .OPERATION_QUEUE_YIELD,
                        ) &&
                        self.performance.now() - a > u &&
                        (await o(
                          "WAWebReleaseToEventLoop",
                        ).releaseToEventLoop(),
                        (a = self.performance.now()));
                  };
                this.getQueueLength() > 0;
              )
                await i();
              this.$2 = !1;
            }
          }),
          (n.getQueueLength = function () {
            return this.$1.length;
          }),
          (n.isProcessing = function () {
            return this.$2;
          }),
          t
        );
      })();
    l.WAWebVoipOperationQueue = m;
  },
  98,
);
