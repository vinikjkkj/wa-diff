__d(
  "WAFtsSQLiteClient",
  [
    "WAFtsIsSearchQueryEligibleForMessageSearch",
    "WAFtsMultiLangTokenizer",
    "WALogger",
    "WAWebABProps",
    "WAWebFtsClientMessageIdResolver",
    "WAWebFtsGenRequestId",
    "WAWebFtsWorkerAdapter",
    "WAWebODS",
    "WAWebWindowsHybridBridgeFactory",
    "WAWebWindowsHybridBridgeTrace",
    "err",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s, u;
    async function c(e) {
      return e;
    }
    var d = (function () {
      function t() {
        ((this.$1 = new (r("WAFtsMultiLangTokenizer"))()),
          (this.$3 = new Map()));
      }
      var n = t.prototype;
      return (
        (n.initialize = function () {
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
        (n.$6 = function (n) {
          o("WALogger").WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[fts][client] worker error: ",
                "",
              ])),
            n,
          );
        }),
        (n.$4 = function (t) {
          this.$7(t.executeSqlite);
        }),
        (n.$7 = async function (t) {
          var e,
            n = o("WAWebWindowsHybridBridgeFactory").getWindowsBridge(),
            a = n == null ? void 0 : n.sqlite;
          return (
            a != null &&
              (r("WAWebODS").incr(
                "web.hybrid.bridge.fts_sqlite.send.execute_sqlite",
              ),
              (e = await c(
                o("WAWebWindowsHybridBridgeTrace").traceBridgeCall(
                  {
                    bridge: "fts-sqlite",
                    method: "executeSqlite",
                    type: "sync",
                  },
                  function () {
                    return a.executeSqlite(JSON.stringify(t));
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
            e == null || e === "" ? [] : JSON.parse(e)
          );
        }),
        (n.$5 = function (t) {
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
        (n.index = function () {
          return this.$9({ operation: "consume" });
        }),
        (n.startIndexer = function () {
          return this.$9({
            operation: "start-indexer",
            isMentionSearchEnabled:
              o("WAWebABProps").getABPropConfigValue(
                "wa_web_mention_search",
              ) === !0,
          });
        }),
        (n.indexFull = function (t) {
          return this.$9({ operation: "run" });
        }),
        (n.clearInitializationPromises = function () {
          return this.$9({ operation: "clear-init" });
        }),
        (n.purge = async function (t) {
          return t.length === 0
            ? { eof: !0, status: 200, messages: [] }
            : (await this.$7([
                [
                  "DELETE FROM message WHERE id IN (" +
                    t
                      .map(function (e) {
                        return "?";
                      })
                      .join(",") +
                    ")",
                ].concat(t),
              ]),
              { eof: !0, status: 200, messages: [] });
        }),
        (n.purgeRange = async function (t) {
          var e = t.chatId,
            n = t.endRowId,
            r = t.startRowId;
          return (
            await this.$7([
              [
                "DELETE FROM message WHERE chatId = ? AND id BETWEEN ? AND ?",
                e,
                String(r),
                String(n),
              ],
            ]),
            { eof: !0, status: 200, messages: [] }
          );
        }),
        (n.reInit = async function () {
          return (
            await this.destroyExternalStorage(),
            this.$9({ operation: "re-init" })
          );
        }),
        (n.destroyExternalStorage = async function () {
          await this.$7([
            ["BEGIN TRANSACTION;"],
            ["DELETE FROM message;"],
            ["INSERT INTO message_fts(message_fts) VALUES('delete-all');"],
            ["END TRANSACTION;"],
          ]);
        }),
        (n.initExternalStorage = async function () {
          await this.$7([
            [
              `CREATE TABLE IF NOT EXISTS message (
          rowid INTEGER PRIMARY KEY,
          id TEXT,
          chatId TEXT,
          timestamp TEXT,
          text TEXT);`,
            ],
            ["CREATE INDEX IF NOT EXISTS idx_message_id ON message(id);"],
            [
              "CREATE INDEX IF NOT EXISTS idx_message_chatId_id ON message(chatId, id);",
            ],
            [
              "CREATE VIRTUAL TABLE IF NOT EXISTS message_fts USING fts5(text, content='', prefix=2, tokenize='unicode61');",
            ],
            [
              `CREATE TRIGGER IF NOT EXISTS t1_message AFTER INSERT ON message
          BEGIN
          INSERT INTO message_fts(rowid, text) VALUES (new.rowid, new.text);
          END;`,
            ],
            [
              `CREATE TRIGGER IF NOT EXISTS t1_message_del AFTER DELETE ON message
        BEGIN
        INSERT INTO message_fts(message_fts, rowid, text) VALUES('delete', old.rowid, old.text);
        END;`,
            ],
            [
              `CREATE TRIGGER IF NOT EXISTS t1_message_up AFTER UPDATE ON message
        BEGIN
        INSERT INTO message_fts(message_fts, rowid, text) VALUES('delete', old.rowid, old.text);
        INSERT INTO message_fts(rowid, text) VALUES (new.rowid, new.text);
        END;`,
            ],
          ]);
        }),
        (n.search = async function (t, n) {
          var e,
            a = Array.from(this.$1.tokenize(t)).filter(
              r("WAFtsIsSearchQueryEligibleForMessageSearch"),
            );
          if (a.length === 0)
            return Promise.resolve({
              canceled: !1,
              eof: !0,
              status: 200,
              messages: [],
            });
          var i = [
              a
                .map(function (e) {
                  var t = e.replaceAll('"', '""');
                  return '"' + t + '"*';
                })
                .join(" AND "),
            ],
            l = ["message_fts MATCH ?"],
            s = n == null ? void 0 : n.remote;
          s != null && s && (l.push("AND chatId = ?"), i.push(s));
          var u = n == null ? void 0 : n.limit,
            c = n == null ? void 0 : n.page,
            d = null,
            m =
              `SELECT t.rowid, t.id, t.chatId, t.timestamp, t.text, rank
      FROM message t JOIN message_fts f ON t.rowid = f.rowid
      WHERE ` +
              l.join(" ") +
              `
      ORDER BY rank`;
          if (
            o("WAWebABProps").getABPropConfigValue(
              "web_anr_async_sqlite_bridge_operations",
            ) &&
            typeof u == "number" &&
            u > 0
          ) {
            d = u;
            var p = typeof c == "number" && c > 0 ? c : 1,
              _ = (p - 1) * d;
            ((m += `
      LIMIT ? OFFSET ?`),
              i.push(String(d), String(_)));
          }
          var f = await this.$7([[m].concat(i)]);
          if (f == null || f.length !== 1)
            return Promise.resolve({
              canceled: !1,
              eof: !0,
              status: 404,
              messages: [],
            });
          var g = ((e = f[0].Rows) != null ? e : []).map(function (e) {
              return {
                id: String(e[1]),
                chatId: String(e[2]),
                timestamp: parseInt(e[3], 10),
              };
            }),
            h = d == null || g.length < d;
          return this.$10({ eof: h, status: 200, messages: g });
        }),
        (n.$10 = async function (t) {
          if (Array.isArray(t) || typeof t == "boolean")
            return { canceled: !1, eof: !0, status: 404, messages: [] };
          var e = await o("WAWebFtsClientMessageIdResolver").resolveMsgIds(
              t.messages,
            ),
            n = e.resolved,
            r = e.unresolved,
            a = t.eof,
            i = t.status;
          return (
            r.length > 0 && this.purge(r),
            { canceled: !1, eof: a, status: i, messages: n }
          );
        }),
        (n.$9 = function (t) {
          var e = this;
          this.initialize();
          var n = r("WAWebFtsGenRequestId")();
          return new Promise(function (r, o) {
            var a = { command: t, reqId: n };
            (e.$3.set(n, { resolve: r, reject: o, command: t }), e.$11(a));
          }).finally(function () {
            e.$8(n);
          });
        }),
        (n.$8 = function (t) {
          this.$3.delete(t);
        }),
        (n.$11 = function (t) {
          r("nullthrows")(this.$2).postMessage(t);
        }),
        t
      );
    })();
    l.FtsSQLiteClient = d;
  },
  98,
);
