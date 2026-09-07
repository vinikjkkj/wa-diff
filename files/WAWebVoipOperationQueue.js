__d(
  "WAWebVoipOperationQueue",
  [
    "Promise",
    "WALogger",
    "WAWebCommonTaskScheduler",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
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
        function t(e, t, n) {
          (t === void 0 && (t = d),
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
                  var a = function* () {
                    var a = t.$1.shift();
                    if (a == null) return 1;
                    var i = a.name,
                      l = a.operation,
                      d = null,
                      p = new (c || (c = n("Promise")))(function (e, n) {
                        d = self.setTimeout(function () {
                          return n(new m(i, t.$5));
                        }, t.$5);
                      });
                    try {
                      yield (c || (c = n("Promise"))).race([l(), p]);
                    } catch (n) {
                      if (n instanceof m) {
                        var _ = !1;
                        try {
                          _ = (yield t.$6 == null ? void 0 : t.$6(i)) === !0;
                        } catch (e) {
                          _ = !1;
                        }
                        _
                          ? o("WALogger")
                              .LOG(
                                e ||
                                  (e = babelHelpers.taggedTemplateLiteralLoose([
                                    "voip: [",
                                    ":Queue] op timeout ",
                                    "ms (benign, abandoning): ",
                                    "",
                                  ])),
                                t.$4,
                                t.$5,
                                i,
                              )
                              .tags("non-sad")
                              .sendLogs("voip-operation-queue-timeout-benign")
                          : o("WALogger")
                              .ERROR(
                                s ||
                                  (s = babelHelpers.taggedTemplateLiteralLoose([
                                    "voip: [",
                                    ":Queue] op timeout ",
                                    "ms, abandoning: ",
                                    "",
                                  ])),
                                t.$4,
                                t.$5,
                                i,
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
                            i,
                            n,
                          )
                          .sendLogs("voip-operation-queue-failure");
                    } finally {
                      d != null && self.clearTimeout(d);
                    }
                    yield r("WAWebCommonTaskScheduler").yield();
                  };
                  this.getQueueLength() > 0;
                )
                  yield* a();
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
