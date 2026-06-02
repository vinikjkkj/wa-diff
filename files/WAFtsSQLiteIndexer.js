__d(
  "WAFtsSQLiteIndexer",
  ["WAFtsBaseIndexer"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 2e3,
      s = (function (t) {
        function n(n) {
          var r = n.batchSize,
            o = r === void 0 ? e : r,
            a = n.messageSource,
            i = n.scheduler,
            l = n.tableAdapter;
          return t.call(this, new u(), a, l, o, i) || this;
        }
        babelHelpers.inheritsLoose(n, t);
        var r = n.prototype;
        return (
          (r.incremental = async function (n, r) {
            var e = this;
            return t.prototype.incremental.call(
              this,
              function (t) {
                return e
                  .getMessageSource()
                  .removeFromBacklog(t)
                  .then(function () {
                    if (n) return n(t);
                  });
              },
              r,
            );
          }),
          (r.__processBatch = async function (t) {
            var e = t.map(function (e) {
              var t = e.chatId,
                n = e.id,
                r = e.textFragments,
                o = e.timestamp;
              return {
                id: n,
                chatId: t,
                timestamp: o.toString(),
                text: r.join(" "),
              };
            });
            await this.tableAdapter.bulkPut(e);
          }),
          (r.purge = async function (t) {
            return !1;
          }),
          (r.purgeChat = async function (t) {
            return !1;
          }),
          (r.purge__DEPRECATED_DO_NOT_USE = async function (t, n, r) {
            return !1;
          }),
          n
        );
      })(r("WAFtsBaseIndexer")),
      u = (function () {
        function e() {}
        var t = e.prototype;
        return (
          (t.find = function (t, n) {
            return Promise.resolve({ eof: !0, messages: [], status: 200 });
          }),
          (t.invalidateCache = function (t) {}),
          (t.invalidateAllCaches = function () {}),
          e
        );
      })();
    l.default = s;
  },
  98,
);
