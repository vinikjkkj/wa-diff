__d(
  "WAWebFtsPurgeRangeManager",
  ["WALogger", "WAPromiseDelays", "WAWebFtsStorage", "getErrorSafe"],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = (function () {
        function t(e) {
          ((this.$2 = null), (this.$3 = null), (this.$1 = e));
        }
        var n = t.prototype;
        return (
          (n.enqueue = async function (t) {
            return (
              await o("WAWebFtsStorage")
                .getPurgeRangeQueueTable()
                .createOrReplace(t),
              this.startDrain(),
              !0
            );
          }),
          (n.startDrain = function () {
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
          (n.drainQueue = function () {
            var e, t;
            return (e = (t = this.$3) != null ? t : this.$2) != null
              ? e
              : this.$4();
          }),
          (n.$4 = function () {
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
          (n.$5 = async function () {
            for (
              var e = new Set(), t = null, n = await this.$6(e);
              n.length > 0;
            ) {
              for (var a of n) {
                e.add(d(a));
                try {
                  await this.$7(a);
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
                await o("WAPromiseDelays").delayMs(200);
              }
              n = await this.$6(e);
            }
            if (t != null) throw t;
            return !0;
          }),
          (n.$7 = async function (t) {
            var e = self.performance.now();
            (await this.$1.purgeChat(t.chatId),
              await this.$8(t),
              o("WALogger").LOG(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[fts][purge-range-manager] purged queued chat in ",
                    "ms",
                  ])),
                self.performance.now() - e,
              ));
          }),
          (n.$6 = async function (t) {
            var e = await o("WAWebFtsStorage").getPurgeRangeQueueTable().all();
            return e.filter(function (e) {
              return !t.has(d(e));
            });
          }),
          (n.$8 = function (t) {
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
