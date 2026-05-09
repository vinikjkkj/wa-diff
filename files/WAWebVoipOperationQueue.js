__d(
  "WAWebVoipOperationQueue",
  [
    "Promise",
    "WACommonTaskScheduler",
    "WALogger",
    "WAWebABProps",
    "WAWebReleaseToEventLoop",
    "WAWebVoipPerfOptimizations",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c = 100,
      d = 3e4,
      m = (function (e) {
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
      p = (function () {
        function t(e, t) {
          (t === void 0 && (t = d),
            (this.$1 = []),
            (this.$2 = !1),
            (this.$3 = 0),
            (this.$4 = e),
            (this.$5 = t));
        }
        var a = t.prototype;
        return (
          (a.enqueue = function (t, n) {
            var e = ++this.$3;
            (this.$1.push({ operation: t, name: n + " (#" + e + ")" }),
              this.isProcessing() || this.$6());
          }),
          (a.$6 = (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              var t = this;
              if (!this.isProcessing()) {
                this.$2 = !0;
                for (
                  var a = o("WAWebABProps").getABPropConfigValue(
                      "wmi_worker_scheduler_web",
                    ),
                    i = self.performance.now(),
                    l = function* () {
                      var l = t.$1.shift();
                      if (l == null) return 1;
                      var d = l.name,
                        p = l.operation,
                        _ = null,
                        f = new (u || (u = n("Promise")))(function (e, n) {
                          _ = self.setTimeout(function () {
                            return n(new m(d, t.$5));
                          }, t.$5);
                        });
                      try {
                        yield (u || (u = n("Promise"))).race([p(), f]);
                      } catch (n) {
                        n instanceof m
                          ? o("WALogger")
                              .ERROR(
                                e ||
                                  (e = babelHelpers.taggedTemplateLiteralLoose([
                                    "voip: [",
                                    ":Queue] Operation timed out after ",
                                    "ms, abandoning and proceeding: ",
                                    "",
                                  ])),
                                t.$4,
                                t.$5,
                                d,
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
                                d,
                                n,
                              )
                              .sendLogs("voip-operation-queue-failure");
                      } finally {
                        _ != null && self.clearTimeout(_);
                      }
                      a
                        ? yield r("WACommonTaskScheduler").yield()
                        : o(
                            "WAWebVoipPerfOptimizations",
                          ).isPerfOptimizationEnabled(
                            o("WAWebVoipPerfOptimizations").PerfOptimizationFlag
                              .OPERATION_QUEUE_YIELD,
                          ) &&
                          self.performance.now() - i > c &&
                          (yield o(
                            "WAWebReleaseToEventLoop",
                          ).releaseToEventLoop(),
                          (i = self.performance.now()));
                    };
                  this.getQueueLength() > 0;
                )
                  yield* l();
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
    l.WAWebVoipOperationQueue = p;
  },
  98,
);
