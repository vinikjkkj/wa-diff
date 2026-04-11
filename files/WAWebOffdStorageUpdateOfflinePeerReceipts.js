__d(
  "WAWebOffdStorageUpdateOfflinePeerReceipts",
  [
    "Promise",
    "WAJids",
    "WALogger",
    "WAWebAck",
    "WAWebBackendApi",
    "WAWebDBBulkGetRootMsgs",
    "WAWebDBChatValidation",
    "WAWebDBMsgUtils",
    "WAWebLid1X1MigrationGating",
    "WAWebLidMigrationUtils",
    "WAWebLidStatusMigrationKeyUtils",
    "WAWebMarkAddOnsAsReadJob",
    "WAWebMessageReceiptUtils",
    "WAWebModelStorageUtils",
    "WAWebMsgGetters",
    "WAWebMsgKey",
    "WAWebQplFlowWrapper",
    "WAWebSchemaChat",
    "WAWebSchemaMessage",
    "WAWebSchemaPeerReadReceipt",
    "WAWebUsernameTypes",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "compactMap",
    "qpl",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _ = r("qpl")._(891431279, "3267");
    function f(e) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          if (
            !o(
              "WAWebLid1X1MigrationGating",
            ).Lid1X1MigrationUtils.isLidMigrated() ||
            t.length === 0
          )
            return t;
          for (var n = [], r = [], a = new Map(), i = 0; i < t.length; i++) {
            var l = t[i];
            if (l.id != null) {
              var u = o("WAWebWidFactory").createWid(l.id);
              if (u != null) {
                if (!u.isRegularUser()) {
                  n.push(l);
                  continue;
                }
                var c = l.id;
                if (c != null) {
                  r.push(c);
                  var d = o("WAWebLidMigrationUtils").toLid(u);
                  a.set(c, { chatUpdate: l, lid: d, chatWid: u });
                }
              }
            }
          }
          var m = [],
            p = 0,
            _ = [],
            f = 0;
          if (r.length > 0)
            for (
              var g = yield o("WAWebSchemaChat").getChatTable().bulkGet(r),
                h = 0;
              h < r.length;
              h++
            ) {
              var y = r[h],
                C = g[h],
                b = a.get(y);
              if (b != null) {
                var v = b.chatUpdate,
                  S = b.chatWid,
                  R = b.lid;
                if (C != null) n.push(v);
                else if (R != null) {
                  (p++,
                    m.length < 3 &&
                      m.push(S.toLogString() + ", " + R.toLogString()));
                  var L = babelHelpers.extends({}, v, {
                    accountLid: R.toString(),
                  });
                  (S.isLid() &&
                    (L.lidOriginType =
                      o("WAWebUsernameTypes").LidOriginType.GENERAL),
                    n.push(L));
                } else (f++, _.length < 3 && _.push(S.toLogString()));
              }
            }
          return (
            p > 0 &&
              o("WALogger").WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "addAccountLidToUpdates: added account_lid to ",
                    " chats => ",
                    "",
                  ])),
                p,
                m,
              ),
            f > 0 &&
              o("WALogger").WARN(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "addAccountLidToUpdates: no Lid for ",
                    " chats => ",
                    "",
                  ])),
                f,
                _,
              ),
            n
          );
        })),
        g.apply(this, arguments)
      );
    }
    function h() {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          (o("WAWebQplFlowWrapper").QPL.markerPoint(
            _,
            "UpdatePeerReceipts_start",
          ),
            o("WALogger").LOG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "[init-from-storage] updatePeerReceipts start",
                ])),
            ));
          var e = yield o("WAWebSchemaPeerReadReceipt").getTable().all();
          if (
            o("WAWebLid1X1MigrationGating").Lid1X1MigrationUtils.isLidMigrated()
          )
            yield (p || (p = n("Promise"))).all(
              e.map(
                (function () {
                  var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* (e) {
                      e.msgKeys = yield o(
                        "WAWebDBBulkGetRootMsgs",
                      ).fixMsgKeysWithChatId(e.msgKeys);
                    },
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
              ),
            );
          else {
            var t = [],
              a = [];
            for (var i of e)
              for (var l of i.msgKeys) {
                var s = r("WAWebMsgKey").fromString(l);
                s.remote.isLid() &&
                  (i.ack === o("WAWebAck").ACK.READ
                    ? t.push(s)
                    : i.ack === o("WAWebAck").ACK.PLAYED && a.push(s));
              }
            (t.length > 0 &&
              e.push({
                ack: o("WAWebAck").ACK.READ,
                msgKeys: o("WAWebDBBulkGetRootMsgs")
                  .fixMsgKeysWithPnMapping(t)
                  .map(String),
              }),
              a.length > 0 &&
                e.push({
                  ack: o("WAWebAck").ACK.PLAYED,
                  msgKeys: Array.from(a, String),
                }));
          }
          var m = [],
            g = [],
            h = [],
            y = 0;
          (e.forEach(function (e) {
            e.ack === o("WAWebAck").ACK.READ
              ? m.push(e)
              : e.ack === o("WAWebAck").ACK.PLAYED
                ? g.push(e)
                : (y++, h.length < 3 && h.push(e.ack));
          }),
            y > 0 &&
              o("WALogger").WARN(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "updatePeerReceipts: ",
                    " unknown ack types => ",
                    "",
                  ])),
                y,
                h,
              ));
          var b = yield C(m),
            v = b.chatAckUpdates,
            S = b.chatUpdates,
            R = b.statusAckUpdates,
            k = v.concat(R),
            I = new Map(
              R.map(function (e) {
                return [e.id, e];
              }),
            ),
            T = new Map(
              k.map(function (e) {
                return [e.id, e];
              }),
            ),
            D = E(g);
          D.forEach(function (e) {
            var t = T.get(e.id);
            t == null
              ? T.set(e.id, e)
              : T.set(e.id, babelHelpers.extends({}, t, { ack: e.ack }));
          });
          var x = Array.from(T.values());
          o("WAWebBackendApi").frontendFireAndForget(
            "updateOfflinePeerReceipt",
            {
              chatUpdates: S.map(function (e) {
                var t;
                return {
                  chatId: e.id,
                  unreadCount: e.unreadCount,
                  unreadMentionsOfMe:
                    (t = e.unreadMentionsOfMe) != null ? t : [],
                };
              }),
              ackUpdates: x.map(function (e) {
                var t = e.id;
                return (
                  I.has(e.id) &&
                    (t = o("WAWebLidStatusMigrationKeyUtils")
                      .matKeyConvert(r("WAWebMsgKey").fromString(t))
                      .toString()),
                  { msgKey: t, ack: e.ack }
                );
              }),
            },
          );
          var $ = yield f(S);
          return (
            o("WALogger")
              .LOG(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "updatePeerReceipts: bulkCreateOrMerge ",
                    "",
                  ])),
                $.slice(-15)
                  .map(function (e) {
                    return e.id;
                  })
                  .join(","),
              )
              .tags("missing-lid"),
            o("WAWebDBChatValidation").validateAccountLidInChatRows(
              $,
              "updatePeerReceipts",
            ),
            yield (p || (p = n("Promise"))).all([
              o("WAWebModelStorageUtils")
                .getStorage()
                .lock(["message", "chat"], function (e) {
                  var t = e[0],
                    r = e[1];
                  return (p || (p = n("Promise"))).all([
                    t.bulkCreateOrMerge(x),
                    r.bulkCreateOrMerge($),
                  ]);
                })
                .then(function () {}),
              o("WAWebMarkAddOnsAsReadJob")
                .markUnclassifiedAddOnsAsReadJob(
                  Array.from(L(m), function (e) {
                    return r("WAWebMsgKey").from(e);
                  }),
                )
                .then(function () {}),
            ]),
            o("WAWebSchemaPeerReadReceipt")
              .getTable()
              .clear()
              .then(function () {
                o("WAWebQplFlowWrapper").QPL.markerPoint(
                  _,
                  "UpdatePeerReceipts_end",
                );
              })
          );
        })),
        y.apply(this, arguments)
      );
    }
    function C(e) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          o("WALogger").LOG(
            m ||
              (m = babelHelpers.taggedTemplateLiteralLoose([
                "getUpdatesForPeerReadReceipts",
              ])),
          );
          var t = L(e),
            a = yield p(e),
            i = Array.from(a.keys()),
            l = i.reduce(function (e, t) {
              return (
                e.push([
                  t,
                  o("WAWebDBMsgUtils").PendingReadReceiptType.Message,
                ]),
                e.push([
                  t,
                  o("WAWebDBMsgUtils").PendingReadReceiptType.MessageEdit,
                ]),
                e
              );
            }, []),
            s = yield o("WAWebSchemaMessage")
              .getMessageTable()
              .anyOf(["from", "pendingReadReceipt"], l, { shouldDecrypt: !1 });
          (s.forEach(function (e) {
            return f(a.get(e.from), e);
          }),
            s.forEach(function (e) {
              return g(a.get(e.from), e);
            }));
          var u = h(),
            c = yield S(t),
            d = r("compactMap")(i, function (e) {
              var t = a.get(e);
              return t != null && t.lastUnreadMsgRowId != null
                ? {
                    id: e,
                    unreadCount: t.unreadCount,
                    unreadMentionsOfMe: t.unreadMentionsOfMe,
                  }
                : null;
            });
          return { chatUpdates: d, chatAckUpdates: u, statusAckUpdates: c };
          function p(e) {
            return _.apply(this, arguments);
          }
          function _() {
            return (
              (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
                return new Map(
                  e
                    .flatMap(function (e) {
                      return e.msgKeys;
                    })
                    .map(v)
                    .filter(function (e) {
                      return e !== o("WAJids").STATUS_JID;
                    })
                    .map(function (e) {
                      return [
                        e,
                        {
                          unreadCount: 0,
                          lastUnreadMsgRowId: void 0,
                          unreadMentionsOfMe: [],
                          unreadMentionCount: 0,
                        },
                      ];
                    }),
                );
              })),
              _.apply(this, arguments)
            );
          }
          function f(e, n) {
            var r = n.id,
              o = n.rowId;
            e == null ||
              o == null ||
              (t.has(r) &&
                (e.lastUnreadMsgRowId == null || o > e.lastUnreadMsgRowId) &&
                (e.lastUnreadMsgRowId = o));
          }
          function g(e, t) {
            var n = t.rowId;
            if (
              !(e == null || n == null || e.lastUnreadMsgRowId == null) &&
              n > e.lastUnreadMsgRowId &&
              ((e.unreadCount += 1),
              o("WAWebMsgGetters").getIsImportantMessage(t))
            ) {
              var r = { id: t.id, timestamp: t.t };
              e.unreadMentionsOfMe.push(r);
            }
          }
          function h() {
            return r("compactMap")(s, function (e) {
              var t = e.rowId,
                n = a.get(e.from);
              return n == null || t == null || n.lastUnreadMsgRowId == null
                ? null
                : t <= n.lastUnreadMsgRowId
                  ? e.pendingReadReceipt ===
                    o("WAWebDBMsgUtils").PendingReadReceiptType.MessageEdit
                    ? null
                    : {
                        id: e.id,
                        ack: o("WAWebAck").ACK.READ,
                        pendingReadReceipt: null,
                      }
                  : null;
            });
          }
        })),
        b.apply(this, arguments)
      );
    }
    function v(e) {
      return r("WAWebMsgKey").fromString(e).remote.toString();
    }
    function S(e) {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = Array.from(e)
              .filter(function (e) {
                return v(e) === o("WAJids").STATUS_JID;
              })
              .map(function (e) {
                return r("WAWebMsgKey").fromString(e);
              }),
            n = yield o("WAWebMessageReceiptUtils").fixStatusReceiptKeys(t);
          return n.map(function (e) {
            return { id: e.toString(), ack: o("WAWebAck").ACK.READ };
          });
        })),
        R.apply(this, arguments)
      );
    }
    function L(e) {
      return new Set(
        e.flatMap(function (e) {
          return e.msgKeys;
        }),
      );
    }
    function E(e) {
      var t = new Set();
      return (
        e.forEach(function (e) {
          e.ack === o("WAWebAck").ACK.PLAYED &&
            e.msgKeys.forEach(function (e) {
              return t.add(e);
            });
        }),
        Array.from(t, function (e) {
          return {
            id: e,
            ack: o("WAWebAck").ACK.PLAYED,
            pendingReadReceipt: null,
          };
        })
      );
    }
    ((l.addAccountLidToUpdates = f),
      (l.updatePeerReceipts = h),
      (l.getStatusMsgAckUpdates = S));
  },
  98,
);
