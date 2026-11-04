__d(
  "WAWebFtsPurgeRangeManager",
  [
    "WALogger",
    "WAPromiseDelays",
    "WAWebFtsStorage",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = (function () {
        function t(e) {
          ((this.$2 = null), (this.$3 = null), (this.$1 = e));
        }
        var a = t.prototype;
        return (
          (a.enqueue = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                return (
                  yield o("WAWebFtsStorage")
                    .getPurgeRangeQueueTable()
                    .createOrReplace(e),
                  this.startDrain(),
                  !0
                );
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.startDrain = function () {
            var t = [this.$2, this.$3],
              n = this.$4();
            t.includes(n) ||
              n.catch(function (t) {
                o("WALogger")
                  .WARN(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[fts][purge-range-manager] drain failed",
                      ])),
                  )
                  .catching(r("getErrorSafe")(t))
                  .sendLogs("fts-purge-range-drain-failed");
              });
          }),
          (a.drainQueue = function () {
            var e, t;
            return (e = (t = this.$3) != null ? t : this.$2) != null
              ? e
              : this.$4();
          }),
          (a.$4 = function () {
            var e = this,
              t = this.$2;
            if (t == null) {
              var n = this.$5().finally(function () {
                e.$2 = null;
              });
              return ((this.$2 = n), n);
            }
            if (this.$3 == null) {
              var r = function () {
                return ((e.$3 = null), e.$4());
              };
              this.$3 = t.then(r, r);
            }
            return this.$3;
          }),
          (a.$5 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              for (
                var e = new Set(), t = null, n = yield this.$6(e);
                n.length > 0;
              ) {
                for (var a of n) {
                  e.add(d(a));
                  try {
                    yield this.$7(a);
                  } catch (e) {
                    var i = r("getErrorSafe")(e);
                    (o("WALogger").LOG(
                      s ||
                        (s = babelHelpers.taggedTemplateLiteralLoose([
                          "[fts][purge-range-manager] queued chat purge failed: ",
                          "",
                        ])),
                      i.name,
                    ),
                      t != null || (t = i));
                  }
                  yield o("WAPromiseDelays").delayMs(200);
                }
                n = yield this.$6(e);
              }
              if (t != null) throw t;
              return !0;
            });
            function t() {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.$7 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = self.performance.now();
                (yield this.$1.purgeChat(e.chatId),
                  yield this.$8(e),
                  o("WALogger").LOG(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "[fts][purge-range-manager] purged queued chat in ",
                        "ms",
                      ])),
                    self.performance.now() - t,
                  ));
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.$6 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = yield o("WAWebFtsStorage")
                  .getPurgeRangeQueueTable()
                  .all();
                return t.filter(function (t) {
                  return !e.has(d(t));
                });
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.$8 = function (t) {
            return o("WAWebFtsStorage")
              .getPurgeRangeQueueTable()
              .remove([t.chatId, t.tsOfLastMessage, t.startRowId, t.endRowId]);
          }),
          t
        );
      })();
    function d(e) {
      return (
        e.chatId +
        "|" +
        e.tsOfLastMessage +
        "|" +
        e.startRowId +
        "|" +
        e.endRowId
      );
    }
    l.default = c;
  },
  98,
);
