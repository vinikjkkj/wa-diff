__d(
  "WAWebFtsSQLiteClient",
  [
    "Promise",
    "WAFtsIsSearchQueryEligibleForMessageSearch",
    "WAFtsMultiLangTokenizer",
    "WALogger",
    "WAWebABProps",
    "WAWebFtsClientMessageIdResolver",
    "WAWebFtsGenRequestId",
    "WAWebFtsWorkerAdapter",
    "WAWebODS",
    "WAWebWindowsHybridBridgeFactory",
    "WAWebWindowsHybridBridgeInitiator",
    "WAWebWindowsHybridBridgeTrace",
    "asyncToGeneratorRuntime",
    "err",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s, u, c;
    function d(e) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          return e;
        })),
        m.apply(this, arguments)
      );
    }
    var p = (function () {
      function t() {
        ((this.$1 = new (r("WAFtsMultiLangTokenizer"))()),
          (this.$3 = new Map()));
      }
      var a = t.prototype;
      return (
        (a.initialize = function () {
          var e = this;
          if (!this.$2) {
            var t = function (n) {
                var t = n;
                t.executeSqlite ? e.$4(t) : e.$5(t);
              },
              n = function (n) {
                return e.$6(n);
              },
              r = o("WAWebFtsWorkerAdapter").getFtsWorker(t, n);
            this.$2 = r;
          }
        }),
        (a.$6 = function (n) {
          o("WALogger").WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[fts][client] worker error: ",
                "",
              ])),
            n,
          );
        }),
        (a.$4 = function (t) {
          this.$7(t.executeSqlite);
        }),
        (a.$7 = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            var t,
              n = o("WAWebWindowsHybridBridgeFactory").getWindowsBridge(
                r("WAWebWindowsHybridBridgeInitiator").WAWebFtsSQLiteClient,
              ),
              a = n == null ? void 0 : n.sqlite;
            return (
              a != null &&
                (r("WAWebODS").incr(
                  "web.hybrid.bridge.fts_sqlite.send.execute_sqlite",
                ),
                (t = yield d(
                  o("WAWebWindowsHybridBridgeTrace").traceBridgeCall(
                    {
                      bridge: "fts-sqlite",
                      method: "executeSqlite",
                      type: "async",
                    },
                    function () {
                      return a.executeSqlite(JSON.stringify(e));
                    },
                  ),
                ).catch(function (e) {
                  o("WALogger").WARN(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "[fts][client] call to native bridge failed: ",
                        "",
                      ])),
                    e,
                  );
                }))),
              t == null || t === "" ? [] : JSON.parse(t)
            );
          });
          function t(t) {
            return e.apply(this, arguments);
          }
          return t;
        })()),
        (a.$5 = function (t) {
          var e = t.reqId,
            n = this.$3.get(e);
          n &&
            (t.error
              ? (o("WALogger").WARN(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "[fts][client] worker completed job ",
                      " with error",
                    ])),
                  n.command.operation,
                ),
                n.reject(r("err")("FTS worker error")))
              : n.resolve(t.result),
            this.$8(e));
        }),
        (a.index = function () {
          return this.$9({ operation: "consume" });
        }),
        (a.startIndexer = function () {
          return this.$9({
            operation: "start-indexer",
            isMentionSearchEnabled:
              o("WAWebABProps").getABPropConfigValue(
                "wa_web_mention_search",
              ) === !0,
          });
        }),
        (a.indexFull = function (t) {
          return this.$9({ operation: "run" });
        }),
        (a.clearInitializationPromises = function () {
          return this.$9({ operation: "clear-init" });
        }),
        (a.purge = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            return e.length === 0
              ? { eof: !0, status: 200, messages: [] }
              : (yield this.$7([
                  [
                    "DELETE FROM message WHERE id IN (" +
                      e
                        .map(function (e) {
                          return "?";
                        })
                        .join(",") +
                      ")",
                  ].concat(e),
                ]),
                { eof: !0, status: 200, messages: [] });
          });
          function t(t) {
            return e.apply(this, arguments);
          }
          return t;
        })()),
        (a.purgeRange = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            var t = e.chatId,
              n = e.endRowId,
              r = e.startRowId;
            return (
              yield this.$7([
                [
                  "DELETE FROM message WHERE chatId = ? AND id BETWEEN ? AND ?",
                  t,
                  String(r),
                  String(n),
                ],
              ]),
              { eof: !0, status: 200, messages: [] }
            );
          });
          function t(t) {
            return e.apply(this, arguments);
          }
          return t;
        })()),
        (a.reInit = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            return (
              yield this.destroyExternalStorage(),
              this.$9({ operation: "re-init" })
            );
          });
          function t() {
            return e.apply(this, arguments);
          }
          return t;
        })()),
        (a.destroyExternalStorage = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            yield this.$7([
              ["BEGIN TRANSACTION;"],
              ["DELETE FROM message;"],
              ["INSERT INTO message_fts(message_fts) VALUES('delete-all');"],
              ["END TRANSACTION;"],
            ]);
          });
          function t() {
            return e.apply(this, arguments);
          }
          return t;
        })()),
        (a.initExternalStorage = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            yield this.$7([
              [
                "CREATE TABLE IF NOT EXISTS message (\n          rowid INTEGER PRIMARY KEY,\n          id TEXT,\n          chatId TEXT,\n          timestamp TEXT,\n          text TEXT);",
              ],
              ["CREATE INDEX IF NOT EXISTS idx_message_id ON message(id);"],
              [
                "CREATE INDEX IF NOT EXISTS idx_message_chatId_id ON message(chatId, id);",
              ],
              [
                "CREATE VIRTUAL TABLE IF NOT EXISTS message_fts USING fts5(text, content='', prefix=2, tokenize='unicode61');",
              ],
              [
                "CREATE TRIGGER IF NOT EXISTS t1_message AFTER INSERT ON message\n          BEGIN\n          INSERT INTO message_fts(rowid, text) VALUES (new.rowid, new.text);\n          END;",
              ],
              [
                "CREATE TRIGGER IF NOT EXISTS t1_message_del AFTER DELETE ON message\n        BEGIN\n        INSERT INTO message_fts(message_fts, rowid, text) VALUES('delete', old.rowid, old.text);\n        END;",
              ],
              [
                "CREATE TRIGGER IF NOT EXISTS t1_message_up AFTER UPDATE ON message\n        BEGIN\n        INSERT INTO message_fts(message_fts, rowid, text) VALUES('delete', old.rowid, old.text);\n        INSERT INTO message_fts(rowid, text) VALUES (new.rowid, new.text);\n        END;",
              ],
            ]);
          });
          function t() {
            return e.apply(this, arguments);
          }
          return t;
        })()),
        (a.search = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* (e, t) {
              var a,
                i = Array.from(this.$1.tokenize(e)).filter(
                  r("WAFtsIsSearchQueryEligibleForMessageSearch"),
                );
              if (i.length === 0)
                return (c || (c = n("Promise"))).resolve({
                  canceled: !1,
                  eof: !0,
                  status: 200,
                  messages: [],
                });
              var l = [
                  i
                    .map(function (e) {
                      var t = e.replaceAll('"', '""');
                      return '"' + t + '"*';
                    })
                    .join(" AND "),
                ],
                s = ["message_fts MATCH ?"],
                u = t == null ? void 0 : t.remote;
              u != null && u && (s.push("AND chatId = ?"), l.push(u));
              var d = t == null ? void 0 : t.limit,
                m = t == null ? void 0 : t.page,
                p = null,
                _ =
                  "SELECT t.rowid, t.id, t.chatId, t.timestamp, t.text, rank\n      FROM message t JOIN message_fts f ON t.rowid = f.rowid\n      WHERE " +
                  s.join(" ") +
                  "\n      ORDER BY rank";
              if (
                o("WAWebABProps").getABPropConfigValue(
                  "web_anr_async_sqlite_bridge_operations",
                ) &&
                typeof d == "number" &&
                d > 0
              ) {
                p = d;
                var f = typeof m == "number" && m > 0 ? m : 1,
                  g = (f - 1) * p;
                ((_ += "\n      LIMIT ? OFFSET ?"),
                  l.push(String(p), String(g)));
              }
              var h = yield this.$7([[_].concat(l)]);
              if (h == null || h.length !== 1)
                return (c || (c = n("Promise"))).resolve({
                  canceled: !1,
                  eof: !0,
                  status: 404,
                  messages: [],
                });
              var y = ((a = h[0].Rows) != null ? a : []).map(function (e) {
                  return {
                    id: String(e[1]),
                    chatId: String(e[2]),
                    timestamp: parseInt(e[3], 10),
                  };
                }),
                C = p == null || y.length < p;
              return this.$10({ eof: C, status: 200, messages: y });
            },
          );
          function t(t, n) {
            return e.apply(this, arguments);
          }
          return t;
        })()),
        (a.$10 = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            if (Array.isArray(e) || typeof e == "boolean")
              return { canceled: !1, eof: !0, status: 404, messages: [] };
            var t = yield o("WAWebFtsClientMessageIdResolver").resolveMsgIds(
                e.messages,
              ),
              n = t.resolved,
              r = t.unresolved,
              a = e.eof,
              i = e.status;
            return (
              r.length > 0 && this.purge(r),
              { canceled: !1, eof: a, status: i, messages: n }
            );
          });
          function t(t) {
            return e.apply(this, arguments);
          }
          return t;
        })()),
        (a.$9 = function (t) {
          var e = this;
          this.initialize();
          var o = r("WAWebFtsGenRequestId")();
          return new (c || (c = n("Promise")))(function (n, r) {
            var a = { command: t, reqId: o };
            (e.$3.set(o, { resolve: n, reject: r, command: t }), e.$11(a));
          }).finally(function () {
            e.$8(o);
          });
        }),
        (a.$8 = function (t) {
          this.$3.delete(t);
        }),
        (a.$11 = function (t) {
          r("nullthrows")(this.$2).postMessage(t);
        }),
        t
      );
    })();
    l.FtsSQLiteClient = p;
  },
  98,
);
