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
    "WAWebStatusGatingUtils",
    "WAWebStorageCrashAnnotations",
    "WAWebUsernameTypes",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "compactMap",
    "getErrorSafe",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m, p, _, f, g, h;
    function y(e) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
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
        C.apply(this, arguments)
      );
    }
    function b() {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
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
            o("WAWebStorageCrashAnnotations").annotateCrashWithPeerReceiptRows(
              t,
            ));
          var a = self.performance.now();
          (yield k(t),
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
          var g = yield T(i),
            C = g.chatAckUpdates,
            b = g.chatUpdates,
            v = g.statusAckUpdates,
            R = yield S(i),
            L = C.concat(v, R),
            E = new Map(
              v.map(function (e) {
                return [e.id, e];
              }),
            ),
            I = new Map(
              L.map(function (e) {
                return [e.id, e];
              }),
            ),
            D = M(l);
          D.forEach(function (e) {
            var t = I.get(e.id);
            t == null
              ? I.set(e.id, e)
              : I.set(e.id, babelHelpers.extends({}, t, { ack: e.ack }));
          });
          var x = Array.from(I.values());
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
          var $ = yield y(b);
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
            yield (h || (h = n("Promise"))).all([
              o("WAWebModelStorageUtils")
                .getStorage()
                .lock(["message", "chat"], function (e) {
                  var t = e[0],
                    r = e[1];
                  return (h || (h = n("Promise"))).all([
                    t.bulkCreateOrMerge(x),
                    r.bulkCreateOrMerge($),
                  ]);
                })
                .then(function () {}),
              o("WAWebMarkAddOnsAsReadJob")
                .markUnclassifiedAddOnsAsReadJob(
                  Array.from(N(i), function (e) {
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
        v.apply(this, arguments)
      );
    }
    function S(e) {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = r("compactMap")(e, function (e) {
              var t = e.msgKeys,
                n = e.ts;
              return n != null ? { msgKeys: t, ts: n } : null;
            }),
            a = t.flatMap(function (e) {
              var t = e.msgKeys;
              return t.filter(E);
            });
          if (a.length === 0) return [];
          var i = yield (h || (h = n("Promise"))).all([
              o("WAWebSchemaMessage").getMessageTable().bulkGet(a, !1),
              o(
                "WAWebMessageReceiptUtils",
              ).getMyUnreadStatusKeysReadByMyOtherDevice(a),
            ]),
            l = i[0],
            s = i[1],
            u = [].concat(
              o("WAWebMessageReceiptUtils").getUnreadStatusKeysFromOthers(
                r("compactMap")(l, function (e) {
                  return e != null &&
                    o("WAWebMessageReceiptUtils").isGroupOrChannelStatusRow(e)
                    ? e
                    : null;
                }),
              ),
              s,
            );
          return u.length === 0 ||
            !o("WAWebStatusGatingUtils").isStatusCompanionReadSyncEnabled()
            ? []
            : (yield h.all(
                t.map(function (e) {
                  var t = e.msgKeys,
                    n = e.ts,
                    a = u.filter(function (e) {
                      return L(e, t);
                    });
                  if (a.length !== 0)
                    return o("WAWebMessageReceiptUtils")
                      .markStatusesReadFromPeer(a, n)
                      .catch(function (e) {
                        o("WALogger")
                          .ERROR(
                            f ||
                              (f = babelHelpers.taggedTemplateLiteralLoose([
                                "updatePeerReceipts: failed to mark statuses read",
                              ])),
                          )
                          .catching(r("getErrorSafe")(e))
                          .sendLogs("update-peer-receipts-mark-statuses-fail");
                      });
                }),
              ),
              u.map(function (e) {
                return { id: e.toString(), ack: o("WAWebAck").ACK.READ };
              }));
        })),
        R.apply(this, arguments)
      );
    }
    function L(e, t) {
      return t.some(function (t) {
        var n = r("WAWebMsgKey").fromString(t),
          o = n.id,
          a = n.remote;
        return o === e.id && a.equals(e.remote);
      });
    }
    function E(e) {
      var t = r("WAWebMsgKey").fromString(e),
        n = t.fromMe,
        o = t.remote;
      return !n && (o.isGroup() || o.isNewsletter());
    }
    function k(e) {
      return I.apply(this, arguments);
    }
    function I() {
      return (
        (I = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (!r("gkx")("5598")) {
            yield (h || (h = n("Promise"))).all(
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
        I.apply(this, arguments)
      );
    }
    function T(e) {
      return D.apply(this, arguments);
    }
    function D() {
      return (
        (D = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          o("WALogger").LOG(
            g ||
              (g = babelHelpers.taggedTemplateLiteralLoose([
                "getUpdatesForPeerReadReceipts",
              ])),
          );
          var t = N(e),
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
              return f(a.get(e.from), e);
            }));
          var u = h(),
            c = yield $(t),
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
                    .map(x)
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
          function f(e, t) {
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
        D.apply(this, arguments)
      );
    }
    function x(e) {
      return r("WAWebMsgKey").fromString(e).remote.toString();
    }
    function $(e) {
      return P.apply(this, arguments);
    }
    function P() {
      return (
        (P = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = Array.from(e)
              .filter(function (e) {
                return x(e) === o("WAJids").STATUS_JID;
              })
              .map(function (e) {
                return r("WAWebMsgKey").fromString(e);
              }),
            n = yield o("WAWebMessageReceiptUtils").fixStatusReceiptKeys(t);
          return n.map(function (e) {
            return { id: e.toString(), ack: o("WAWebAck").ACK.READ };
          });
        })),
        P.apply(this, arguments)
      );
    }
    function N(e) {
      return new Set(
        e.flatMap(function (e) {
          return e.msgKeys;
        }),
      );
    }
    function M(e) {
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
    ((l.addAccountLidToUpdates = y),
      (l.updatePeerReceipts = b),
      (l.getStatusMsgAckUpdates = $));
  },
  98,
);
