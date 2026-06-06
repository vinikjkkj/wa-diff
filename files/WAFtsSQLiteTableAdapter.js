__d(
  "WAFtsSQLiteTableAdapter",
  ["WALogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _ = (function () {
        function t(e) {
          this.$1 = e;
        }
        var n = t.prototype;
        return (
          (n.bulkPut = async function (n) {
            o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "Using SQLite FTS insert",
                ])),
            );
            var t = n.map(function (e) {
                return [
                  "INSERT INTO message (id, chatId, timestamp, text) VALUES (?, ?, ?, ?)",
                  e.id,
                  e.chatId,
                  e.timestamp,
                  e.text,
                ];
              }),
              r = [["BEGIN TRANSACTION"]].concat(t, [["COMMIT"]]);
            this.$1.postMessage({ executeSqlite: r });
          }),
          (n.bulkCreate = async function (t) {
            await this.bulkPut(t);
          }),
          (n.bulkGetByKey = async function (t) {
            return (
              o("WALogger").LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "SQLite FTS bulkGetByKey not supported",
                  ])),
              ),
              Promise.resolve([])
            );
          }),
          (n.erase = async function () {}),
          (n.between = function (t, n, r, a) {
            return (
              o("WALogger").LOG(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "SQLite FTS between not supported",
                  ])),
              ),
              Promise.resolve([])
            );
          }),
          (n.bulkRemoveByIndex = function (t, n) {
            return (
              o("WALogger").LOG(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "SQLite FTS bulkRemoveByIndex not supported",
                  ])),
              ),
              Promise.resolve()
            );
          }),
          (n.merge = function (t, n) {
            return (
              o("WALogger").LOG(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "SQLite FTS merge not supported",
                  ])),
              ),
              Promise.resolve()
            );
          }),
          (n.bulkGetAnyOf = async function (t, n) {
            var e = await this.bulkGetByKey(n);
            return e.filter(Boolean);
          }),
          (n.bulkGetStartsWithAnyOf = function (t, n) {
            return (
              o("WALogger").LOG(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
                    "SQLite FTS bulkGetStartsWithAnyOf not supported",
                  ])),
              ),
              Promise.resolve([])
            );
          }),
          (n.getKey = function () {
            return {
              type: "public",
              extractable: !1,
              algorithm: null,
              usages: null,
            };
          }),
          (n.query = async function (t) {
            return (
              o("WALogger").LOG(
                p ||
                  (p = babelHelpers.taggedTemplateLiteralLoose([
                    "SQLite FTS query not supported",
                  ])),
              ),
              Promise.resolve([])
            );
          }),
          t
        );
      })();
    l.default = _;
  },
  98,
);
