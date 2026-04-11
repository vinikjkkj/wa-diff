__d(
  "WAFtsSQLiteIndexer",
  ["Promise", "WAFtsBaseIndexer", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = 2e3,
      u = (function (e) {
        function t(t, n, r, o) {
          return (
            r === void 0 && (r = s),
            e.call(this, new c(), t, n, r, o) || this
          );
        }
        babelHelpers.inheritsLoose(t, e);
        var r = t.prototype;
        return (
          (r.incremental = (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (t, n) {
                var r = this;
                return e.prototype.incremental.call(
                  this,
                  function (e) {
                    return r
                      .getMessageSource()
                      .removeFromBacklog(e)
                      .then(function () {
                        if (t) return t(e);
                      });
                  },
                  n,
                );
              },
            );
            function r(e, n) {
              return t.apply(this, arguments);
            }
            return r;
          })()),
          (r.__processBatch = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = e.map(function (e) {
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
                yield this.tableAdapter.bulkPut(t);
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (r.purge = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                return !1;
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (r.purgeChat = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                return !1;
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (r.purge__DEPRECATED_DO_NOT_USE = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t, n) {
                return !1;
              },
            );
            function t(t, n, r) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          t
        );
      })(r("WAFtsBaseIndexer")),
      c = (function () {
        function t() {}
        var r = t.prototype;
        return (
          (r.find = function (r, o) {
            return (e || (e = n("Promise"))).resolve({
              eof: !0,
              messages: [],
              status: 200,
            });
          }),
          (r.invalidateCache = function (t) {}),
          (r.invalidateAllCaches = function () {}),
          t
        );
      })();
    l.default = u;
  },
  98,
);
