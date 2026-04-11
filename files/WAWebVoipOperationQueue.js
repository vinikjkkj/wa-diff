__d(
  "WAWebVoipOperationQueue",
  [
    "WACommonTaskScheduler",
    "WALogger",
    "WAPromiseDelays",
    "WAWebABProps",
    "WAWebVoipPerfOptimizations",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = 100,
      u = (function () {
        function t(e) {
          ((this.$1 = []), (this.$2 = !1), (this.$3 = 0), (this.$4 = e));
        }
        var a = t.prototype;
        return (
          (a.enqueue = function (t, n) {
            var e = ++this.$3;
            (this.$1.push({ operation: t, name: n + " (#" + e + ")" }),
              this.isProcessing() || this.$5());
          }),
          (a.$5 = (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              if (!this.isProcessing()) {
                this.$2 = !0;
                for (
                  var t = o("WAWebABProps").getABPropConfigValue(
                      "wmi_worker_scheduler_web",
                    ),
                    n = self.performance.now();
                  this.getQueueLength() > 0;
                ) {
                  var a = this.$1.shift();
                  if (a != null) {
                    var i = a.name,
                      l = a.operation;
                    try {
                      yield l();
                    } catch (t) {
                      o("WALogger")
                        .ERROR(
                          e ||
                            (e = babelHelpers.taggedTemplateLiteralLoose([
                              "voip: [",
                              ":Queue] Operation failed: ",
                              ", error: ",
                              "",
                            ])),
                          this.$4,
                          i,
                          t,
                        )
                        .sendLogs(
                          "voip: " + this.$4 + " operation " + i + " failed",
                        );
                    }
                    t
                      ? yield r("WACommonTaskScheduler").yield()
                      : o(
                          "WAWebVoipPerfOptimizations",
                        ).isPerfOptimizationEnabled(
                          o("WAWebVoipPerfOptimizations").PerfOptimizationFlag
                            .OPERATION_QUEUE_YIELD,
                        ) &&
                        self.performance.now() - n > s &&
                        (yield o("WAPromiseDelays").releaseToEventLoop(),
                        (n = self.performance.now()));
                  }
                }
                this.$2 = !1;
              }
            });
            function a() {
              return t.apply(this, arguments);
            }
            return a;
          })()),
          (a.getQueueLength = function () {
            return this.$1.length;
          }),
          (a.isProcessing = function () {
            return this.$2;
          }),
          t
        );
      })();
    l.WAWebVoipOperationQueue = u;
  },
  98,
);
