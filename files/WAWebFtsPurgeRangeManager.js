__d(
  "WAWebFtsPurgeRangeManager",
  ["WAAsyncSleep", "WALogger", "WAWebFtsStorage"],
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
        var n = t.prototype;
        return (
          (n.enqueue = async function (t) {
            return (
              await o("WAWebFtsStorage").getPurgeRangeQueueTable().create(t),
              this.drainQueue()
            );
          }),
          (n.drainQueue = function () {
            var e = this;
            return (
              this.$3 == null &&
                (this.$3 = this.$4().then(function (t) {
                  return ((e.$3 = null), t);
                })),
              this.$3
            );
          }),
          (n.$4 = async function () {
            for (var t = await this.$5(); t != null; ) {
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
              await this.$6(t);
              var i = self.performance.now();
              (o("WALogger").LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[fts][purge-range-manager] iteration took ",
                    "ms",
                  ])),
                i - a,
              ),
                await o("WAAsyncSleep").asyncSleep(200),
                (t = await this.$5()));
            }
            return !0;
          }),
          (n.$5 = async function () {
            var e = await o("WAWebFtsStorage")
              .getPurgeRangeQueueTable()
              .all({ limit: 1 });
            return !e || e.length === 0 ? null : e[0];
          }),
          (n.$6 = async function (t) {
            var e,
              n = (e = t.offset) != null ? e : 0,
              r = t.startRowId + n,
              o = r + this.$2 <= t.endRowId ? r + this.$2 : t.endRowId;
            if (r > o) {
              await this.$7(t);
              return;
            }
            for (var a = [], i = r; i <= o; ++i) a.push(i);
            var l = Array.from(a, function (e) {
              return String(e);
            });
            (await this.$1.purge__DEPRECATED_DO_NOT_USE(
              t.chatId,
              l,
              t.tsOfLastMessage,
            ),
              await this.$8(t));
          }),
          (n.$7 = function (t) {
            return o("WAWebFtsStorage")
              .getPurgeRangeQueueTable()
              .remove([t.chatId, t.tsOfLastMessage, t.startRowId, t.endRowId]);
          }),
          (n.$8 = function (t) {
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
