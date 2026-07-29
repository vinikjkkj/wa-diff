__d(
  "WAWebVoipOperationQueue",
  [
    "Promise",
    "WALogger",
    "WAWebABProps",
    "WAWebCommonTaskScheduler",
    "WAWebReleaseToEventLoop",
    "WAWebVoipPerfOptimizations",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d = 100,
      m = 3e4,
      p = (function (e) {
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
      _ = (function () {
        function t(e, t, n) {
          (t === void 0 && (t = m),
            (this.$1 = []),
            (this.$2 = !1),
            (this.$3 = 0),
            (this.$4 = e),
            (this.$5 = t),
            (this.$6 = n));
        }
        var a = t.prototype;
        return (
          (a.enqueue = function (t, n) {
            var e = ++this.$3;
            (this.$1.push({ operation: t, name: n + " (#" + e + ")" }),
              this.isProcessing() || this.$7());
          }),
          (a.$7 = (function () {
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
                      var m = l.name,
                        _ = l.operation,
                        f = null,
                        g = new (c || (c = n("Promise")))(function (e, n) {
                          f = self.setTimeout(function () {
                            return n(new p(m, t.$5));
                          }, t.$5);
                        });
                      try {
                        yield (c || (c = n("Promise"))).race([_(), g]);
                      } catch (n) {
                        if (n instanceof p) {
                          var h = !1;
                          try {
                            h = (yield t.$6 == null ? void 0 : t.$6(m)) === !0;
                          } catch (e) {
                            h = !1;
                          }
                          h
                            ? o("WALogger")
                                .LOG(
                                  e ||
                                    (e =
                                      babelHelpers.taggedTemplateLiteralLoose([
                                        "voip: [",
                                        ":Queue] op timeout ",
                                        "ms (benign, abandoning): ",
                                        "",
                                      ])),
                                  t.$4,
                                  t.$5,
                                  m,
                                )
                                .tags("non-sad")
                                .sendLogs("voip-operation-queue-timeout-benign")
                            : o("WALogger")
                                .ERROR(
                                  s ||
                                    (s =
                                      babelHelpers.taggedTemplateLiteralLoose([
                                        "voip: [",
                                        ":Queue] op timeout ",
                                        "ms, abandoning: ",
                                        "",
                                      ])),
                                  t.$4,
                                  t.$5,
                                  m,
                                )
                                .sendLogs("voip-operation-queue-timeout");
                        } else
                          o("WALogger")
                            .ERROR(
                              u ||
                                (u = babelHelpers.taggedTemplateLiteralLoose([
                                  "voip: [",
                                  ":Queue] Operation failed: ",
                                  ", error: ",
                                  "",
                                ])),
                              t.$4,
                              m,
                              n,
                            )
                            .sendLogs("voip-operation-queue-failure");
                      } finally {
                        f != null && self.clearTimeout(f);
                      }
                      a
                        ? yield r("WAWebCommonTaskScheduler").yield()
                        : o(
                            "WAWebVoipPerfOptimizations",
                          ).isPerfOptimizationEnabled(
                            o("WAWebVoipPerfOptimizations").PerfOptimizationFlag
                              .OPERATION_QUEUE_YIELD,
                          ) &&
                          self.performance.now() - i > d &&
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
    l.WAWebVoipOperationQueue = _;
  },
  98,
);
