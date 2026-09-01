__d(
  "WAWebRecoverableQueue",
  [
    "Promise",
    "WALogger",
    "WATimeUtils",
    "WAWebNoop",
    "WAWebScheduledOperations",
    "WAWormQueueDef",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p = 15,
      _ = 6,
      f = Math.pow(10, _),
      g = 0,
      h = 0;
    function y() {
      var e = o("WATimeUtils").unixTimeMs();
      e > g ? ((g = e), (h = 0)) : h >= f && (g++, (h = 0));
      var t = String(g).padStart(p, "0"),
        n = String(h++).padStart(_, "0");
      return o("WAWormQueueDef").toWAWormQueueId(t + "-" + n);
    }
    var C = (function () {
      function t(e) {
        ((this.$1 = (m || (m = n("Promise"))).resolve()),
          (this.$2 = e.maxAttempts),
          (this.$3 = e.operation),
          (this.$4 = e.queue),
          (this.$5 = e.run));
      }
      var a = t.prototype;
      return (
        (a.runRecorded = function (t, r) {
          var e = this;
          return this.$6(
            n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              var n = yield e.$7(t);
              (yield r(), yield e.$4.ack([n]));
            }),
          );
        }),
        (a.addAndDrain = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            var t = this;
            (yield this.$6(function () {
              return t.$7(e);
            }),
              this.scheduleDrain());
          });
          function t(t) {
            return e.apply(this, arguments);
          }
          return t;
        })()),
        (a.start = function () {
          this.scheduleDrain();
        }),
        (a.scheduleDrain = function () {
          var e = this;
          return (
            this.$6(function () {
              return e.$8();
            }),
            this.$1
          );
        }),
        (a.$6 = function (n) {
          var t = this,
            a = this.$1.then(n);
          return (
            (this.$1 = a.then(r("WAWebNoop"), function (n) {
              o("WALogger")
                .WARN(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[recoverable-queue] ",
                      " chained work failed",
                    ])),
                  t.$3.valueOf(),
                )
                .catching(r("getErrorSafe")(n))
                .tags("messaging")
                .sendLogs("recoverable-queue-chain-failed");
            })),
            a
          );
        }),
        (a.$7 = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            var t = y(),
              n = o("WATimeUtils").unixTimeMs();
            return (
              yield this.$4.add([
                babelHelpers.extends({}, e, {
                  addedAtMs: n,
                  attempts: 0,
                  changedAtMs: n,
                  queueId: t,
                }),
              ]),
              t
            );
          });
          function t(t) {
            return e.apply(this, arguments);
          }
          return t;
        })()),
        (a.$8 = function () {
          var e = this;
          return o("WAWebScheduledOperations")
            .scheduleOperation(this.$3, function () {
              return e.$9();
            })
            .then(function (t) {
              return t ? e.$8() : void 0;
            });
        }),
        (a.$9 = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var e = this,
              t = yield this.$4.read({
                limit: o("WAWormQueueDef").WA_WORM_QUEUE_DRAIN_LIMIT,
              });
            if (t.length === 0) return !1;
            var r = 0;
            return (
              yield t.reduce(
                function (t, o) {
                  return t.then(
                    n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                      (yield e.$10(o)) && r++;
                    }),
                  );
                },
                (m || (m = n("Promise"))).resolve(),
              ),
              r > 0 &&
                t.length === o("WAWormQueueDef").WA_WORM_QUEUE_DRAIN_LIMIT
            );
          });
          function t() {
            return e.apply(this, arguments);
          }
          return t;
        })()),
        (a.$10 = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            if (e.attempts >= this.$2) return this.$11(e);
            var t = yield this.$12(e);
            if (t == null) return this.$13(e);
            var n = e.attempts + 1;
            return n >= this.$2
              ? (o("WALogger")
                  .ERROR(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "[recoverable-queue] ",
                        " exhausted ",
                        " attempts, dropping row",
                      ])),
                    this.$3.valueOf(),
                    n,
                  )
                  .catching(t)
                  .tags("messaging")
                  .sendLogs("recoverable-queue-row-dropped"),
                this.$13(e))
              : (o("WALogger")
                  .WARN(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "[recoverable-queue] ",
                        " attempt ",
                        " failed",
                      ])),
                    this.$3.valueOf(),
                    n,
                  )
                  .catching(t)
                  .tags("messaging")
                  .sendLogs("recoverable-queue-attempt-failed"),
                this.$14(e, n));
          });
          function t(t) {
            return e.apply(this, arguments);
          }
          return t;
        })()),
        (a.$13 = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            return (yield this.$11(e)) ? !0 : this.$14(e, this.$2);
          });
          function t(t) {
            return e.apply(this, arguments);
          }
          return t;
        })()),
        (a.$12 = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            try {
              return (yield this.$5(e), null);
            } catch (e) {
              return r("getErrorSafe")(e);
            }
          });
          function t(t) {
            return e.apply(this, arguments);
          }
          return t;
        })()),
        (a.$11 = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            try {
              return (yield this.$4.ack([e.queueId]), !0);
            } catch (e) {
              return (
                o("WALogger")
                  .WARN(
                    c ||
                      (c = babelHelpers.taggedTemplateLiteralLoose([
                        "[recoverable-queue] ",
                        " ack failed",
                      ])),
                    this.$3.valueOf(),
                  )
                  .catching(r("getErrorSafe")(e))
                  .tags("messaging")
                  .sendLogs("recoverable-queue-ack-failed"),
                !1
              );
            }
          });
          function t(t) {
            return e.apply(this, arguments);
          }
          return t;
        })()),
        (a.$14 = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* (e, t) {
              try {
                return (
                  yield this.$4.add([
                    babelHelpers.extends({}, e, {
                      attempts: t,
                      changedAtMs: o("WATimeUtils").unixTimeMs(),
                    }),
                  ]),
                  !0
                );
              } catch (e) {
                return (
                  o("WALogger")
                    .WARN(
                      d ||
                        (d = babelHelpers.taggedTemplateLiteralLoose([
                          "[recoverable-queue] ",
                          " attempt ",
                          " not recorded",
                        ])),
                      this.$3.valueOf(),
                      t,
                    )
                    .catching(r("getErrorSafe")(e))
                    .tags("messaging")
                    .sendLogs("recoverable-queue-attempt-not-recorded"),
                  !1
                );
              }
            },
          );
          function t(t, n) {
            return e.apply(this, arguments);
          }
          return t;
        })()),
        t
      );
    })();
    l.WAWebRecoverableQueue = C;
  },
  98,
);
