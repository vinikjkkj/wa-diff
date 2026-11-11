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
            (this.$2 = null),
            (this.$3 = !1),
            (this.$4 = 0),
            (this.$5 = e),
            (this.$6 = t),
            (this.$7 = n));
        }
        var a = t.prototype;
        return (
          (a.enqueue = function (t, n) {
            var e = ++this.$4;
            (this.$1.push({ operation: t, name: n + " (#" + e + ")" }),
              this.isProcessing() || this.$8());
          }),
          (a.$8 = (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              var t = this;
              if (!this.isProcessing()) {
                this.$3 = !0;
                for (
                  var a = function* () {
                    var a = t.$1.shift();
                    if (a == null) return 1;
                    var i = a.name,
                      l = a.operation;
                    t.$2 = { name: i, startedAtMs: Date.now() };
                    var d = null,
                      p = new (c || (c = n("Promise")))(function (e, n) {
                        d = self.setTimeout(function () {
                          return n(new m(i, t.$6));
                        }, t.$6);
                      });
                    try {
                      yield (c || (c = n("Promise"))).race([l(), p]);
                    } catch (n) {
                      if (n instanceof m) {
                        var _ = !1;
                        try {
                          _ = (yield t.$7 == null ? void 0 : t.$7(i)) === !0;
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
                                t.$5,
                                t.$6,
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
                                t.$5,
                                t.$6,
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
                            t.$5,
                            i,
                            n,
                          )
                          .sendLogs("voip-operation-queue-failure");
                    } finally {
                      ((t.$2 = null), d != null && self.clearTimeout(d));
                    }
                    yield r("WAWebCommonTaskScheduler").yield();
                  };
                  this.getQueueLength() > 0;
                )
                  yield* a();
                this.$3 = !1;
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
          (a.describeForLogs = function () {
            var e = this.$2,
              t = this.getQueueLength();
            return e == null
              ? t === 0
                ? "idle"
                : t + " waiting"
              : e.name +
                  " for " +
                  (Date.now() - e.startedAtMs) +
                  "ms, " +
                  t +
                  " waiting";
          }),
          (a.isProcessing = function () {
            return this.$3;
          }),
          t
        );
      })();
    l.WAWebVoipOperationQueue = p;
  },
  98,
);
