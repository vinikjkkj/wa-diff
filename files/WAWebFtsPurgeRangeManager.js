__d(
  "WAWebFtsPurgeRangeManager",
  ["WAAsyncSleep", "WALogger", "WAWebFtsStorage", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = (function () {
        function t(e, t) {
          (t === void 0 && (t = 200),
            (this.$3 = null),
            (this.$1 = e),
            (this.$2 = t));
        }
        var r = t.prototype;
        return (
          (r.enqueue = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                return (
                  yield o("WAWebFtsStorage")
                    .getPurgeRangeQueueTable()
                    .create(e),
                  this.drainQueue()
                );
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (r.drainQueue = function () {
            var e = this;
            return (
              this.$3 == null &&
                (this.$3 = this.$4().then(function (t) {
                  return ((e.$3 = null), t);
                })),
              this.$3
            );
          }),
          (r.$4 = (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              for (var t = yield this.$5(); t != null; ) {
                var n,
                  r = (n = t.offset) != null ? n : 0;
                o("WALogger").LOG(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[fts][purge-range-manager] drain rows ",
                      "-",
                      " off=",
                      "",
                    ])),
                  t.startRowId,
                  t.endRowId,
                  r,
                );
                var a = self.performance.now();
                yield this.$6(t);
                var i = self.performance.now();
                (o("WALogger").LOG(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "[fts][purge-range-manager] iteration took ",
                      "ms",
                    ])),
                  i - a,
                ),
                  yield o("WAAsyncSleep").asyncSleep(200),
                  (t = yield this.$5()));
              }
              return !0;
            });
            function r() {
              return t.apply(this, arguments);
            }
            return r;
          })()),
          (r.$5 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              var e = yield o("WAWebFtsStorage")
                .getPurgeRangeQueueTable()
                .all({ limit: 1 });
              return !e || e.length === 0 ? null : e[0];
            });
            function t() {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (r.$6 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t,
                  n = (t = e.offset) != null ? t : 0,
                  r = e.startRowId + n,
                  o = r + this.$2 <= e.endRowId ? r + this.$2 : e.endRowId;
                if (r > o) {
                  yield this.$7(e);
                  return;
                }
                for (var a = [], i = r; i <= o; ++i) a.push(i);
                var l = Array.from(a, function (e) {
                  return String(e);
                });
                (yield this.$1.purge__DEPRECATED_DO_NOT_USE(
                  e.chatId,
                  l,
                  e.tsOfLastMessage,
                ),
                  yield this.$8(e));
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (r.$7 = function (t) {
            return o("WAWebFtsStorage")
              .getPurgeRangeQueueTable()
              .remove([t.chatId, t.tsOfLastMessage, t.startRowId, t.endRowId]);
          }),
          (r.$8 = function (t) {
            var e,
              n = (e = t.offset) != null ? e : 0;
            return o("WAWebFtsStorage")
              .getPurgeRangeQueueTable()
              .createOrReplace(
                babelHelpers.extends({}, t, { offset: n + this.$2 }),
              );
          }),
          t
        );
      })();
    l.default = u;
  },
  98,
);
