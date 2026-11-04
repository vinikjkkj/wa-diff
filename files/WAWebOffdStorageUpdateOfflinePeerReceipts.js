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
    "WAWebLidMigrationUtils",
    "WAWebLidStatusMigrationKeyUtils",
    "WAWebMarkAddOnsAsReadJob",
    "WAWebMessageReceiptUtils",
    "WAWebModelStorageUtils",
    "WAWebMsgGetters",
    "WAWebMsgKey",
    "WAWebSchemaChat",
    "WAWebSchemaMessage",
    "WAWebSchemaPeerReadReceipt",
    "WAWebStorageCrashAnnotations",
    "WAWebUsernameTypes",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "compactMap",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m, p, _, f, g;
    function h(e) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          if (t.length === 0) return t;
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
        y.apply(this, arguments)
      );
    }
    function C() {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          o("WALogger").LOG(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "[init-from-storage] updatePeerReceipts start",
              ])),
          );
          var e = self.performance.now(),
            t = yield o("WAWebSchemaPeerReadReceipt").getTable().all();
          (o("WALogger").LOG(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "[init-from-storage] updatePeerReceipts: ",
                " peer receipt rows",
              ])),
            t.length,
          ),
            o("WAWebStorageCrashAnnotations").logPeerReceiptRowsForCrash(t));
          var a = self.performance.now();
          (yield v(t),
            o("WALogger").LOG(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "[init-from-storage] updatePeerReceipts: chat lookup took ",
                  "ms",
                ])),
              Math.round(self.performance.now() - a),
            ));
          var i = [],
            l = [],
            s = [],
            f = 0;
          (t.forEach(function (e) {
            e.ack === o("WAWebAck").ACK.READ
              ? i.push(e)
              : e.ack === o("WAWebAck").ACK.PLAYED
                ? l.push(e)
                : (f++, s.length < 3 && s.push(e.ack));
          }),
            f > 0 &&
              o("WALogger").WARN(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
                    "updatePeerReceipts: ",
                    " unknown ack types => ",
                    "",
                  ])),
                f,
                s,
              ));
          var y = yield R(i),
            C = y.chatAckUpdates,
            b = y.chatUpdates,
            S = y.statusAckUpdates,
            L = C.concat(S),
            E = new Map(
              S.map(function (e) {
                return [e.id, e];
              }),
            ),
            k = new Map(
              L.map(function (e) {
                return [e.id, e];
              }),
            ),
            I = D(l);
          I.forEach(function (e) {
            var t = k.get(e.id);
            t == null
              ? k.set(e.id, e)
              : k.set(e.id, babelHelpers.extends({}, t, { ack: e.ack }));
          });
          var x = Array.from(k.values());
          o("WAWebBackendApi").frontendFireAndForget(
            "updateOfflinePeerReceipt",
            {
              chatUpdates: b.map(function (e) {
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
                  E.has(e.id) &&
                    (t = o("WAWebLidStatusMigrationKeyUtils")
                      .matKeyConvert(r("WAWebMsgKey").fromString(t))
                      .toString()),
                  { msgKey: t, ack: e.ack }
                );
              }),
            },
          );
          var $ = yield h(b);
          return (
            o("WALogger")
              .LOG(
                p ||
                  (p = babelHelpers.taggedTemplateLiteralLoose([
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
            yield (g || (g = n("Promise"))).all([
              o("WAWebModelStorageUtils")
                .getStorage()
                .lock(["message", "chat"], function (e) {
                  var t = e[0],
                    r = e[1];
                  return (g || (g = n("Promise"))).all([
                    t.bulkCreateOrMerge(x),
                    r.bulkCreateOrMerge($),
                  ]);
                })
                .then(function () {}),
              o("WAWebMarkAddOnsAsReadJob")
                .markUnclassifiedAddOnsAsReadJob(
                  Array.from(T(i), function (e) {
                    return r("WAWebMsgKey").from(e);
                  }),
                )
                .then(function () {}),
            ]),
            o("WAWebSchemaPeerReadReceipt")
              .getTable()
              .clear()
              .then(function () {
                o("WALogger").LOG(
                  _ ||
                    (_ = babelHelpers.taggedTemplateLiteralLoose([
                      "[init-from-storage] updatePeerReceipts: processed ",
                      " peer receipt rows in ",
                      "ms",
                    ])),
                  t.length,
                  Math.round(self.performance.now() - e),
                );
              })
          );
        })),
        b.apply(this, arguments)
      );
    }
    function v(e) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (!r("gkx")("5598")) {
            yield (g || (g = n("Promise"))).all(
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
            return;
          }
          var t = yield o("WAWebDBBulkGetRootMsgs").fixMsgKeysWithChatId(
              e.flatMap(function (e) {
                return e.msgKeys;
              }),
            ),
            a = 0;
          for (var i of e) {
            var l = a + i.msgKeys.length;
            ((i.msgKeys = t.slice(a, l)), (a = l));
          }
        })),
        S.apply(this, arguments)
      );
    }
    function R(e) {
      return L.apply(this, arguments);
    }
    function L() {
      return (
        (L = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          o("WALogger").LOG(
            f ||
              (f = babelHelpers.taggedTemplateLiteralLoose([
                "getUpdatesForPeerReadReceipts",
              ])),
          );
          var t = T(e),
            a = yield m(e),
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
            return _(a.get(e.from), e);
          }),
            s.forEach(function (e) {
              return g(a.get(e.from), e);
            }));
          var u = h(),
            c = yield k(t),
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
          function m(e) {
            return p.apply(this, arguments);
          }
          function p() {
            return (
              (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
                return new Map(
                  e
                    .flatMap(function (e) {
                      return e.msgKeys;
                    })
                    .map(E)
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
              p.apply(this, arguments)
            );
          }
          function _(e, t) {
            var n = t.rowId;
            e == null ||
              n == null ||
              (C(t) &&
                (e.lastUnreadMsgRowId == null || n > e.lastUnreadMsgRowId) &&
                (e.lastUnreadMsgRowId = n));
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
                      o("WAWebDBMsgUtils").PendingReadReceiptType.MessageEdit &&
                    !y(e)
                    ? null
                    : {
                        id: e.id,
                        ack: o("WAWebAck").ACK.READ,
                        pendingReadReceipt: null,
                      }
                  : null;
            });
          }
          function y(e) {
            return e.latestEditMsgKey != null && t.has(e.latestEditMsgKey);
          }
          function C(e) {
            return t.has(e.id) || y(e);
          }
        })),
        L.apply(this, arguments)
      );
    }
    function E(e) {
      return r("WAWebMsgKey").fromString(e).remote.toString();
    }
    function k(e) {
      return I.apply(this, arguments);
    }
    function I() {
      return (
        (I = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = Array.from(e)
              .filter(function (e) {
                return E(e) === o("WAJids").STATUS_JID;
              })
              .map(function (e) {
                return r("WAWebMsgKey").fromString(e);
              }),
            n = yield o("WAWebMessageReceiptUtils").fixStatusReceiptKeys(t);
          return n.map(function (e) {
            return { id: e.toString(), ack: o("WAWebAck").ACK.READ };
          });
        })),
        I.apply(this, arguments)
      );
    }
    function T(e) {
      return new Set(
        e.flatMap(function (e) {
          return e.msgKeys;
        }),
      );
    }
    function D(e) {
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
    ((l.addAccountLidToUpdates = h),
      (l.updatePeerReceipts = C),
      (l.getStatusMsgAckUpdates = k));
  },
  98,
);
