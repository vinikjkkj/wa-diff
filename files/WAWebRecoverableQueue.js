__d(
  "WAWebRecoverableQueue",
  [
    "WALogger",
    "WATimeUtils",
    "WAWebNoop",
    "WAWebPersistedQueueIds",
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
      m = (function () {
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
            return this.$4.isReady()
              ? this.$6(async function () {
                  var r = await e.$7(t);
                  (await n(), await e.$4.ack([r]));
                })
              : this.$6(n);
          }),
          (n.addAndDrain = async function (t) {
            var e = this;
            if (!this.$4.isReady()) {
              var n = this.$8(t);
              this.$6(function () {
                return o("WAWebScheduledOperations").scheduleOperation(
                  e.$3,
                  function () {
                    return e.$5(n);
                  },
                );
              });
              return;
            }
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
                return e.$9();
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
            var e = this,
              n = this.$8(t);
            return (
              await o("WAWebPersistedQueueIds").countQueueIdCollisions(
                this.$4,
                [n.queueId],
                async function () {
                  var t = await e.$4.read({
                    filter: function (t) {
                      var e = t.queueId;
                      return e === n.queueId;
                    },
                    limit: 1,
                  });
                  return t.length;
                },
              ),
              await this.$4.add([n]),
              n.queueId
            );
          }),
          (n.$8 = function (t) {
            var e = o("WATimeUtils").unixTimeMs();
            return babelHelpers.extends({}, t, {
              addedAtMs: e,
              attempts: 0,
              changedAtMs: e,
              queueId: o("WAWebPersistedQueueIds").nextPersistedQueueId(),
            });
          }),
          (n.$9 = function () {
            var e = this;
            return o("WAWebScheduledOperations")
              .scheduleOperation(this.$3, function () {
                return e.$10();
              })
              .then(function (t) {
                return t ? e.$9() : void 0;
              });
          }),
          (n.$10 = async function () {
            var e = this,
              t = await this.$4.read({
                limit: o("WAWormQueueDef").WA_WORM_QUEUE_DRAIN_LIMIT,
              });
            if (t.length === 0) return !1;
            var n = 0;
            return (
              await t.reduce(function (t, r) {
                return t.then(async function () {
                  (await e.$11(r)) && n++;
                });
              }, Promise.resolve()),
              n > 0 &&
                t.length === o("WAWormQueueDef").WA_WORM_QUEUE_DRAIN_LIMIT
            );
          }),
          (n.$11 = async function (t) {
            if (t.attempts >= this.$2) return this.$12(t);
            var e = await this.$13(t);
            if (e == null) return this.$14(t);
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
                this.$14(t))
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
                this.$15(t, n));
          }),
          (n.$14 = async function (t) {
            return (await this.$12(t)) ? !0 : this.$15(t, this.$2);
          }),
          (n.$13 = async function (t) {
            try {
              return (await this.$5(t), null);
            } catch (e) {
              return r("getErrorSafe")(e);
            }
          }),
          (n.$12 = async function (t) {
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
          (n.$15 = async function (t, n) {
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
    l.WAWebRecoverableQueue = m;
  },
  98,
);
