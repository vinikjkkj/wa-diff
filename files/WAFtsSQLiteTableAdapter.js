__d(
  "WAFtsSQLiteTableAdapter",
  ["Promise", "WALogger", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _,
      f = (function () {
        function t(e) {
          this.$1 = e;
        }
        var r = t.prototype;
        return (
          (r.bulkPut = (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (t) {
                o("WALogger").LOG(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "Using SQLite FTS insert",
                    ])),
                );
                var n = t.map(function (e) {
                    return [
                      "INSERT INTO message (id, chatId, timestamp, text) VALUES (?, ?, ?, ?)",
                      e.id,
                      e.chatId,
                      e.timestamp,
                      e.text,
                    ];
                  }),
                  r = [["BEGIN TRANSACTION"]].concat(n, [["COMMIT"]]);
                this.$1.postMessage({ executeSqlite: r });
              },
            );
            function r(e) {
              return t.apply(this, arguments);
            }
            return r;
          })()),
          (r.bulkCreate = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                yield this.bulkPut(e);
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (r.bulkGetByKey = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                return (
                  o("WALogger").LOG(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "SQLite FTS bulkGetByKey not supported",
                      ])),
                  ),
                  (_ || (_ = n("Promise"))).resolve([])
                );
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (r.erase = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* () {},
            );
            function t() {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (r.between = function (t, r, a, i) {
            return (
              o("WALogger").LOG(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "SQLite FTS between not supported",
                  ])),
              ),
              (_ || (_ = n("Promise"))).resolve([])
            );
          }),
          (r.bulkRemoveByIndex = function (t, r) {
            return (
              o("WALogger").LOG(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "SQLite FTS bulkRemoveByIndex not supported",
                  ])),
              ),
              (_ || (_ = n("Promise"))).resolve()
            );
          }),
          (r.merge = function (t, r) {
            return (
              o("WALogger").LOG(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "SQLite FTS merge not supported",
                  ])),
              ),
              (_ || (_ = n("Promise"))).resolve()
            );
          }),
          (r.bulkGetAnyOf = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t) {
                var n = yield this.bulkGetByKey(t);
                return n.filter(Boolean);
              },
            );
            function t(t, n) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (r.bulkGetStartsWithAnyOf = function (t, r) {
            return (
              o("WALogger").LOG(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
                    "SQLite FTS bulkGetStartsWithAnyOf not supported",
                  ])),
              ),
              (_ || (_ = n("Promise"))).resolve([])
            );
          }),
          (r.getKey = function () {
            return {
              type: "public",
              extractable: !1,
              algorithm: null,
              usages: null,
            };
          }),
          (r.query = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                return (
                  o("WALogger").LOG(
                    p ||
                      (p = babelHelpers.taggedTemplateLiteralLoose([
                        "SQLite FTS query not supported",
                      ])),
                  ),
                  (_ || (_ = n("Promise"))).resolve([])
                );
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          t
        );
      })();
    l.default = f;
  },
  98,
);
