__d(
  "WAWebVoipOperationQueue",
  ["WALogger", "WAWebCommonTaskScheduler"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
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
        function t(e, t, n) {
          (t === void 0 && (t = c),
            (this.$1 = []),
            (this.$2 = null),
            (this.$3 = !1),
            (this.$4 = 0),
            (this.$5 = e),
            (this.$6 = t),
            (this.$7 = n));
        }
        var n = t.prototype;
        return (
          (n.enqueue = function (t, n) {
            var e = ++this.$4;
            (this.$1.push({ operation: t, name: n + " (#" + e + ")" }),
              this.isProcessing() || this.$8());
          }),
          (n.$8 = async function () {
            var t = this;
            if (!this.isProcessing()) {
              this.$3 = !0;
              for (
                var n = async function () {
                  var n = t.$1.shift();
                  if (n == null) return 1;
                  var a = n.name,
                    i = n.operation;
                  t.$2 = { name: a, startedAtMs: Date.now() };
                  var l = null,
                    c = new Promise(function (e, n) {
                      l = self.setTimeout(function () {
                        return n(new d(a, t.$6));
                      }, t.$6);
                    });
                  try {
                    await Promise.race([i(), c]);
                  } catch (n) {
                    if (n instanceof d) {
                      var m = !1;
                      try {
                        m = (await (t.$7 == null ? void 0 : t.$7(a))) === !0;
                      } catch (e) {
                        m = !1;
                      }
                      m
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
                              a,
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
                              a,
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
                          a,
                          n,
                        )
                        .sendLogs("voip-operation-queue-failure");
                  } finally {
                    ((t.$2 = null), l != null && self.clearTimeout(l));
                  }
                  await r("WAWebCommonTaskScheduler").yield();
                };
                this.getQueueLength() > 0;
              )
                await n();
              this.$3 = !1;
            }
          }),
          (n.getQueueLength = function () {
            return this.$1.length;
          }),
          (n.describeForLogs = function () {
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
          (n.isProcessing = function () {
            return this.$3;
          }),
          t
        );
      })();
    l.WAWebVoipOperationQueue = m;
  },
  98,
);
