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
    "WAWebMetaAiFileDocMsgId",
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
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _,
      f,
      g,
      h,
      y,
      C,
      b,
      v = 3,
      S = 16;
    function R(e) {
      return L.apply(this, arguments);
    }
    function L() {
      return (
        (L = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (e.length === 0) return e;
          for (var t = [], n = [], r = new Map(), a = 0; a < e.length; a++) {
            var i = e[a];
            if (i.id != null) {
              var l = o("WAWebWidFactory").createWid(i.id);
              if (l != null) {
                if (!l.isRegularUser()) {
                  t.push(i);
                  continue;
                }
                var s = i.id;
                if (s != null) {
                  n.push(s);
                  var u = o("WAWebLidMigrationUtils").toLid(l);
                  r.set(s, { chatUpdate: i, lid: u, chatWid: l });
                }
              }
            }
          }
          var m = [],
            p = 0,
            _ = [],
            f = 0;
          if (n.length > 0)
            for (
              var g = yield o("WAWebSchemaChat").getChatTable().bulkGet(n),
                h = 0;
              h < n.length;
              h++
            ) {
              var y = n[h],
                C = g[h],
                b = r.get(y);
              if (b != null) {
                var v = b.chatUpdate,
                  S = b.chatWid,
                  R = b.lid;
                if (C != null) t.push(v);
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
                    t.push(L));
                } else (f++, _.length < 3 && _.push(S.toLogString()));
              }
            }
          return (
            p > 0 &&
              o("WALogger").WARN(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "addAccountLidToUpdates: added account_lid to ",
                    " chats => ",
                    "",
                  ])),
                p,
                m,
              ),
            f > 0 &&
              o("WALogger").WARN(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "addAccountLidToUpdates: no Lid for ",
                    " chats => ",
                    "",
                  ])),
                f,
                _,
              ),
            t
          );
        })),
        L.apply(this, arguments)
      );
    }
    function E() {
      return k.apply(this, arguments);
    }
    function k() {
      return (
        (k = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          o("WALogger").LOG(
            m ||
              (m = babelHelpers.taggedTemplateLiteralLoose([
                "[init-from-storage] updatePeerReceipts start",
              ])),
          );
          var e = self.performance.now(),
            t = T(I(yield o("WAWebSchemaPeerReadReceipt").getTable().all()));
          (o("WALogger").LOG(
            p ||
              (p = babelHelpers.taggedTemplateLiteralLoose([
                "[init-from-storage] updatePeerReceipts: ",
                " peer receipt rows",
              ])),
            t.length,
          ),
            o("WAWebStorageCrashAnnotations").annotateCrashWithPeerReceiptRows(
              t,
            ));
          var a = self.performance.now();
          (yield w(t),
            o("WALogger").LOG(
              _ ||
                (_ = babelHelpers.taggedTemplateLiteralLoose([
                  "[init-from-storage] updatePeerReceipts: chat lookup took ",
                  "ms",
                ])),
              Math.round(self.performance.now() - a),
            ));
          var i = [],
            l = [],
            s = [],
            u = 0;
          (t.forEach(function (e) {
            e.ack === o("WAWebAck").ACK.READ
              ? i.push(e)
              : e.ack === o("WAWebAck").ACK.PLAYED
                ? l.push(e)
                : (u++, s.length < 3 && s.push(e.ack));
          }),
            u > 0 &&
              o("WALogger").WARN(
                f ||
                  (f = babelHelpers.taggedTemplateLiteralLoose([
                    "updatePeerReceipts: ",
                    " unknown ack types => ",
                    "",
                  ])),
                u,
                s,
              ));
          var c = yield F(i),
            d = c.chatAckUpdates,
            y = c.chatUpdates,
            C = c.statusAckUpdates,
            v = yield $(i),
            S = d.concat(C, v),
            L = new Map(
              C.map(function (e) {
                return [e.id, e];
              }),
            ),
            E = new Map(
              S.map(function (e) {
                return [e.id, e];
              }),
            ),
            k = V(l);
          k.forEach(function (e) {
            var t = E.get(e.id);
            t == null
              ? E.set(e.id, e)
              : E.set(e.id, babelHelpers.extends({}, t, { ack: e.ack }));
          });
          var D = Array.from(E.values());
          o("WAWebBackendApi").frontendFireAndForget(
            "updateOfflinePeerReceipt",
            {
              chatUpdates: y.map(function (e) {
                var t;
                return {
                  chatId: e.id,
                  unreadCount: e.unreadCount,
                  unreadMentionsOfMe:
                    (t = e.unreadMentionsOfMe) != null ? t : [],
                };
              }),
              ackUpdates: D.map(function (e) {
                var t = e.id;
                return (
                  L.has(e.id) &&
                    (t = o("WAWebLidStatusMigrationKeyUtils")
                      .matKeyConvert(r("WAWebMsgKey").fromString(t))
                      .toString()),
                  { msgKey: t, ack: e.ack }
                );
              }),
            },
          );
          var x = yield R(y);
          return (
            o("WALogger")
              .LOG(
                g ||
                  (g = babelHelpers.taggedTemplateLiteralLoose([
                    "updatePeerReceipts: bulkCreateOrMerge ",
                    "",
                  ])),
                x
                  .slice(-15)
                  .map(function (e) {
                    return e.id;
                  })
                  .join(","),
              )
              .tags("missing-lid"),
            o("WAWebDBChatValidation").validateAccountLidInChatRows(
              x,
              "updatePeerReceipts",
            ),
            yield (b || (b = n("Promise"))).all([
              o("WAWebModelStorageUtils")
                .getStorage()
                .lock(["message", "chat"], function (e) {
                  var t = e[0],
                    r = e[1];
                  return (b || (b = n("Promise"))).all([
                    t.bulkCreateOrMerge(D),
                    r.bulkCreateOrMerge(x),
                  ]);
                })
                .then(function () {}),
              o("WAWebMarkAddOnsAsReadJob")
                .markUnclassifiedAddOnsAsReadJob(
                  Array.from(U(i), function (e) {
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
                  h ||
                    (h = babelHelpers.taggedTemplateLiteralLoose([
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
        k.apply(this, arguments)
      );
    }
    function I(t) {
      var n = 0,
        r = t.map(function (e) {
          var t = e.msgKeys.filter(function (e) {
            return !o("WAWebMetaAiFileDocMsgId").isMetaAiFileDocMsgKeyString(e);
          });
          return (
            (n += e.msgKeys.length - t.length),
            babelHelpers.extends({}, e, { msgKeys: t })
          );
        });
      return (
        n > 0 &&
          o("WALogger")
            .WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "updatePeerReceipts: dropped ",
                  " Meta AI file doc msg keys",
                ])),
              n,
            )
            .sendLogs("update-peer-receipts-meta-ai-file-doc-msg-key"),
        r
      );
    }
    function T(e) {
      var t = [],
        n = e.map(function (e) {
          var n = e.msgKeys.filter(function (e) {
            return x(e) ? !0 : (t.push(e), !1);
          });
          return babelHelpers.extends({}, e, { msgKeys: n });
        });
      return (
        t.length > 0 &&
          (r("gkx")("9092") &&
            o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "updatePeerReceipts: dropped msg ids starting ",
                  "",
                ])),
              t.slice(0, v).map(D).join(","),
            ),
          o("WALogger")
            .WARN(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "updatePeerReceipts: dropped ",
                  " unparsable msg keys",
                ])),
              t.length,
            )
            .sendLogs("update-peer-receipts-unparsable-msg-key")),
        n
      );
    }
    function D(e) {
      return e
        .split("_")
        .slice(2)
        .filter(function (e) {
          return !e.includes("@");
        })
        .join("_")
        .slice(0, S);
    }
    function x(e) {
      try {
        return (r("WAWebMsgKey").fromString(e), !0);
      } catch (e) {
        return !1;
      }
    }
    function $(e) {
      return P.apply(this, arguments);
    }
    function P() {
      return (
        (P = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = r("compactMap")(e, function (e) {
              var t = e.msgKeys,
                n = e.ts;
              return n != null ? { msgKeys: t, ts: n } : null;
            }),
            a = t.flatMap(function (e) {
              var t = e.msgKeys;
              return t.filter(M);
            });
          if (a.length === 0) return [];
          var i = yield (b || (b = n("Promise"))).all([
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
            : (yield b.all(
                t.map(function (e) {
                  var t = e.msgKeys,
                    n = e.ts,
                    a = u.filter(function (e) {
                      return N(e, t);
                    });
                  if (a.length !== 0)
                    return o("WAWebMessageReceiptUtils")
                      .markStatusesReadFromPeer(a, n)
                      .catch(function (e) {
                        o("WALogger")
                          .ERROR(
                            y ||
                              (y = babelHelpers.taggedTemplateLiteralLoose([
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
        P.apply(this, arguments)
      );
    }
    function N(e, t) {
      return t.some(function (t) {
        var n = r("WAWebMsgKey").fromString(t),
          o = n.id,
          a = n.remote;
        return o === e.id && a.equals(e.remote);
      });
    }
    function M(e) {
      var t = r("WAWebMsgKey").fromString(e),
        n = t.fromMe,
        o = t.remote;
      return !n && (o.isGroup() || o.isNewsletter());
    }
    function w(e) {
      return A.apply(this, arguments);
    }
    function A() {
      return (
        (A = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (!r("gkx")("5598")) {
            yield (b || (b = n("Promise"))).all(
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
        A.apply(this, arguments)
      );
    }
    function F(e) {
      return O.apply(this, arguments);
    }
    function O() {
      return (
        (O = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          o("WALogger").LOG(
            C ||
              (C = babelHelpers.taggedTemplateLiteralLoose([
                "getUpdatesForPeerReadReceipts",
              ])),
          );
          var t = U(e),
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
          var u = g(),
            c = yield W(t),
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
                    .map(B)
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
              (y(t) &&
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
          function g() {
            return r("compactMap")(s, function (e) {
              var t = e.rowId,
                n = a.get(e.from);
              return n == null || t == null || n.lastUnreadMsgRowId == null
                ? null
                : t <= n.lastUnreadMsgRowId
                  ? e.pendingReadReceipt ===
                      o("WAWebDBMsgUtils").PendingReadReceiptType.MessageEdit &&
                    !h(e)
                    ? null
                    : {
                        id: e.id,
                        ack: o("WAWebAck").ACK.READ,
                        pendingReadReceipt: null,
                      }
                  : null;
            });
          }
          function h(e) {
            return e.latestEditMsgKey != null && t.has(e.latestEditMsgKey);
          }
          function y(e) {
            return t.has(e.id) || h(e);
          }
        })),
        O.apply(this, arguments)
      );
    }
    function B(e) {
      return r("WAWebMsgKey").fromString(e).remote.toString();
    }
    function W(e) {
      return q.apply(this, arguments);
    }
    function q() {
      return (
        (q = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = Array.from(e)
              .filter(function (e) {
                return B(e) === o("WAJids").STATUS_JID;
              })
              .map(function (e) {
                return r("WAWebMsgKey").fromString(e);
              }),
            n = yield o("WAWebMessageReceiptUtils").fixStatusReceiptKeys(t);
          return n.map(function (e) {
            return { id: e.toString(), ack: o("WAWebAck").ACK.READ };
          });
        })),
        q.apply(this, arguments)
      );
    }
    function U(e) {
      return new Set(
        e.flatMap(function (e) {
          return e.msgKeys;
        }),
      );
    }
    function V(e) {
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
    ((l.addAccountLidToUpdates = R),
      (l.updatePeerReceipts = E),
      (l.getStatusMsgAckUpdates = W));
  },
  98,
);
