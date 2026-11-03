__d(
  "WAWebRecoverableQueue",
  [
    "WALogger",
    "WATimeUtils",
    "WAWebNoop",
    "WAWebScheduledOperations",
    "WAWormQueueDef",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m = 15,
      p = 6,
      _ = Math.pow(10, p),
      f = 0,
      g = 0;
    function h() {
      var e = o("WATimeUtils").unixTimeMs();
      e > f ? ((f = e), (g = 0)) : g >= _ && (f++, (g = 0));
      var t = String(f).padStart(m, "0"),
        n = String(g++).padStart(p, "0");
      return o("WAWormQueueDef").toWAWormQueueId(t + "-" + n);
    }
    var y = (function () {
      function t(e) {
        ((this.$1 = Promise.resolve()),
          (this.$2 = e.maxAttempts),
          (this.$3 = e.operation),
          (this.$4 = e.queue),
          (this.$5 = e.run));
      }
      var n = t.prototype;
      return (
        (n.runRecorded = function (t, n) {
          var e = this;
          return this.$6(async function () {
            var r = await e.$7(t);
            (await n(), await e.$4.ack([r]));
          });
        }),
        (n.addAndDrain = async function (t) {
          var e = this;
          (await this.$6(function () {
            return e.$7(t);
          }),
            this.scheduleDrain());
        }),
        (n.start = function () {
          this.scheduleDrain();
        }),
        (n.scheduleDrain = function () {
          var e = this;
          return (
            this.$6(function () {
              return e.$8();
            }),
            this.$1
          );
        }),
        (n.$6 = function (n) {
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
        (n.$7 = async function (t) {
          var e = h(),
            n = o("WATimeUtils").unixTimeMs();
          return (
            await this.$4.add([
              babelHelpers.extends({}, t, {
                addedAtMs: n,
                attempts: 0,
                changedAtMs: n,
                queueId: e,
              }),
            ]),
            e
          );
        }),
        (n.$8 = function () {
          var e = this;
          return o("WAWebScheduledOperations")
            .scheduleOperation(this.$3, function () {
              return e.$9();
            })
            .then(function (t) {
              return t ? e.$8() : void 0;
            });
        }),
        (n.$9 = async function () {
          var e = this,
            t = await this.$4.read({
              limit: o("WAWormQueueDef").WA_WORM_QUEUE_DRAIN_LIMIT,
            });
          if (t.length === 0) return !1;
          var n = 0;
          return (
            await t.reduce(function (t, r) {
              return t.then(async function () {
                (await e.$10(r)) && n++;
              });
            }, Promise.resolve()),
            n > 0 && t.length === o("WAWormQueueDef").WA_WORM_QUEUE_DRAIN_LIMIT
          );
        }),
        (n.$10 = async function (t) {
          if (t.attempts >= this.$2) return this.$11(t);
          var e = await this.$12(t);
          if (e == null) return this.$13(t);
          var n = t.attempts + 1;
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
                .catching(e)
                .tags("messaging")
                .sendLogs("recoverable-queue-row-dropped"),
              this.$13(t))
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
                .catching(e)
                .tags("messaging")
                .sendLogs("recoverable-queue-attempt-failed"),
              this.$14(t, n));
        }),
        (n.$13 = async function (t) {
          return (await this.$11(t)) ? !0 : this.$14(t, this.$2);
        }),
        (n.$12 = async function (t) {
          try {
            return (await this.$5(t), null);
          } catch (e) {
            return r("getErrorSafe")(e);
          }
        }),
        (n.$11 = async function (t) {
          try {
            return (await this.$4.ack([t.queueId]), !0);
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
        }),
        (n.$14 = async function (t, n) {
          try {
            return (
              await this.$4.add([
                babelHelpers.extends({}, t, {
                  attempts: n,
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
                  n,
                )
                .catching(r("getErrorSafe")(e))
                .tags("messaging")
                .sendLogs("recoverable-queue-attempt-not-recorded"),
              !1
            );
          }
        }),
        t
      );
    })();
    l.WAWebRecoverableQueue = y;
  },
  98,
);
