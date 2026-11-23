__d(
  "WAWebOffdStorageUpdateOfflinePeerReceipts",
  [
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
      b = 3,
      v = 16;
    async function S(t) {
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
          var g = await o("WAWebSchemaChat").getChatTable().bulkGet(r), h = 0;
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
              var L = babelHelpers.extends({}, v, { accountLid: R.toString() });
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
    }
    async function R() {
      o("WALogger").LOG(
        u ||
          (u = babelHelpers.taggedTemplateLiteralLoose([
            "[init-from-storage] updatePeerReceipts start",
          ])),
      );
      var e = self.performance.now(),
        t = E(L(await o("WAWebSchemaPeerReadReceipt").getTable().all()));
      (o("WALogger").LOG(
        c ||
          (c = babelHelpers.taggedTemplateLiteralLoose([
            "[init-from-storage] updatePeerReceipts: ",
            " peer receipt rows",
          ])),
        t.length,
      ),
        o("WAWebStorageCrashAnnotations").annotateCrashWithPeerReceiptRows(t));
      var n = self.performance.now();
      (await $(t),
        o("WALogger").LOG(
          d ||
            (d = babelHelpers.taggedTemplateLiteralLoose([
              "[init-from-storage] updatePeerReceipts: chat lookup took ",
              "ms",
            ])),
          Math.round(self.performance.now() - n),
        ));
      var a = [],
        i = [],
        l = [],
        s = 0;
      (t.forEach(function (e) {
        e.ack === o("WAWebAck").ACK.READ
          ? a.push(e)
          : e.ack === o("WAWebAck").ACK.PLAYED
            ? i.push(e)
            : (s++, l.length < 3 && l.push(e.ack));
      }),
        s > 0 &&
          o("WALogger").WARN(
            m ||
              (m = babelHelpers.taggedTemplateLiteralLoose([
                "updatePeerReceipts: ",
                " unknown ack types => ",
                "",
              ])),
            s,
            l,
          ));
      var f = await P(a),
        g = f.chatAckUpdates,
        h = f.chatUpdates,
        y = f.statusAckUpdates,
        C = await T(a),
        b = g.concat(y, C),
        v = new Map(
          y.map(function (e) {
            return [e.id, e];
          }),
        ),
        R = new Map(
          b.map(function (e) {
            return [e.id, e];
          }),
        ),
        k = A(i);
      k.forEach(function (e) {
        var t = R.get(e.id);
        t == null
          ? R.set(e.id, e)
          : R.set(e.id, babelHelpers.extends({}, t, { ack: e.ack }));
      });
      var I = Array.from(R.values());
      o("WAWebBackendApi").frontendFireAndForget("updateOfflinePeerReceipt", {
        chatUpdates: h.map(function (e) {
          var t;
          return {
            chatId: e.id,
            unreadCount: e.unreadCount,
            unreadMentionsOfMe: (t = e.unreadMentionsOfMe) != null ? t : [],
          };
        }),
        ackUpdates: I.map(function (e) {
          var t = e.id;
          return (
            v.has(e.id) &&
              (t = o("WAWebLidStatusMigrationKeyUtils")
                .matKeyConvert(r("WAWebMsgKey").fromString(t))
                .toString()),
            { msgKey: t, ack: e.ack }
          );
        }),
      });
      var D = await S(h);
      return (
        o("WALogger")
          .LOG(
            p ||
              (p = babelHelpers.taggedTemplateLiteralLoose([
                "updatePeerReceipts: bulkCreateOrMerge ",
                "",
              ])),
            D.slice(-15)
              .map(function (e) {
                return e.id;
              })
              .join(","),
          )
          .tags("missing-lid"),
        o("WAWebDBChatValidation").validateAccountLidInChatRows(
          D,
          "updatePeerReceipts",
        ),
        await Promise.all([
          o("WAWebModelStorageUtils")
            .getStorage()
            .lock(["message", "chat"], function (e) {
              var t = e[0],
                n = e[1];
              return Promise.all([
                t.bulkCreateOrMerge(I),
                n.bulkCreateOrMerge(D),
              ]);
            })
            .then(function () {}),
          o("WAWebMarkAddOnsAsReadJob")
            .markUnclassifiedAddOnsAsReadJob(
              Array.from(w(a), function (e) {
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
    }
    function L(e) {
      var t = 0,
        n = e.map(function (e) {
          var n = e.msgKeys.filter(function (e) {
            return !o("WAWebMetaAiFileDocMsgId").isMetaAiFileDocMsgKeyString(e);
          });
          return (
            (t += e.msgKeys.length - n.length),
            babelHelpers.extends({}, e, { msgKeys: n })
          );
        });
      return (
        t > 0 &&
          o("WALogger")
            .WARN(
              f ||
                (f = babelHelpers.taggedTemplateLiteralLoose([
                  "updatePeerReceipts: dropped ",
                  " Meta AI file doc msg keys",
                ])),
              t,
            )
            .sendLogs("update-peer-receipts-meta-ai-file-doc-msg-key"),
        n
      );
    }
    function E(e) {
      var t = [],
        n = e.map(function (e) {
          var n = e.msgKeys.filter(function (e) {
            return I(e) ? !0 : (t.push(e), !1);
          });
          return babelHelpers.extends({}, e, { msgKeys: n });
        });
      return (
        t.length > 0 &&
          (r("gkx")("9092") &&
            o("WALogger").LOG(
              g ||
                (g = babelHelpers.taggedTemplateLiteralLoose([
                  "updatePeerReceipts: dropped msg ids starting ",
                  "",
                ])),
              t.slice(0, b).map(k).join(","),
            ),
          o("WALogger")
            .WARN(
              h ||
                (h = babelHelpers.taggedTemplateLiteralLoose([
                  "updatePeerReceipts: dropped ",
                  " unparsable msg keys",
                ])),
              t.length,
            )
            .sendLogs("update-peer-receipts-unparsable-msg-key")),
        n
      );
    }
    function k(e) {
      return e
        .split("_")
        .slice(2)
        .filter(function (e) {
          return !e.includes("@");
        })
        .join("_")
        .slice(0, v);
    }
    function I(e) {
      try {
        return (r("WAWebMsgKey").fromString(e), !0);
      } catch (e) {
        return !1;
      }
    }
    async function T(e) {
      var t = r("compactMap")(e, function (e) {
          var t = e.msgKeys,
            n = e.ts;
          return n != null ? { msgKeys: t, ts: n } : null;
        }),
        n = t.flatMap(function (e) {
          var t = e.msgKeys;
          return t.filter(x);
        });
      if (n.length === 0) return [];
      var a = await Promise.all([
          o("WAWebSchemaMessage").getMessageTable().bulkGet(n, !1),
          o(
            "WAWebMessageReceiptUtils",
          ).getMyUnreadStatusKeysReadByMyOtherDevice(n),
        ]),
        i = a[0],
        l = a[1],
        s = [].concat(
          o("WAWebMessageReceiptUtils").getUnreadStatusKeysFromOthers(
            r("compactMap")(i, function (e) {
              return e != null &&
                o("WAWebMessageReceiptUtils").isGroupOrChannelStatusRow(e)
                ? e
                : null;
            }),
          ),
          l,
        );
      return s.length === 0 ||
        !o("WAWebStatusGatingUtils").isStatusCompanionReadSyncEnabled()
        ? []
        : (await Promise.all(
            t.map(function (e) {
              var t = e.msgKeys,
                n = e.ts,
                a = s.filter(function (e) {
                  return D(e, t);
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
          s.map(function (e) {
            return { id: e.toString(), ack: o("WAWebAck").ACK.READ };
          }));
    }
    function D(e, t) {
      return t.some(function (t) {
        var n = r("WAWebMsgKey").fromString(t),
          o = n.id,
          a = n.remote;
        return o === e.id && a.equals(e.remote);
      });
    }
    function x(e) {
      var t = r("WAWebMsgKey").fromString(e),
        n = t.fromMe,
        o = t.remote;
      return !n && (o.isGroup() || o.isNewsletter());
    }
    async function $(e) {
      if (!r("gkx")("5598")) {
        await Promise.all(
          e.map(async function (e) {
            e.msgKeys = await o("WAWebDBBulkGetRootMsgs").fixMsgKeysWithChatId(
              e.msgKeys,
            );
          }),
        );
        return;
      }
      var t = await o("WAWebDBBulkGetRootMsgs").fixMsgKeysWithChatId(
          e.flatMap(function (e) {
            return e.msgKeys;
          }),
        ),
        n = 0;
      for (var a of e) {
        var i = n + a.msgKeys.length;
        ((a.msgKeys = t.slice(n, i)), (n = i));
      }
    }
    async function P(e) {
      o("WALogger").LOG(
        C ||
          (C = babelHelpers.taggedTemplateLiteralLoose([
            "getUpdatesForPeerReadReceipts",
          ])),
      );
      var t = w(e),
        n = await d(e),
        a = Array.from(n.keys()),
        i = a.reduce(function (e, t) {
          return (
            e.push([t, o("WAWebDBMsgUtils").PendingReadReceiptType.Message]),
            e.push([
              t,
              o("WAWebDBMsgUtils").PendingReadReceiptType.MessageEdit,
            ]),
            e
          );
        }, []),
        l = await o("WAWebSchemaMessage")
          .getMessageTable()
          .anyOf(["from", "pendingReadReceipt"], i, { shouldDecrypt: !1 });
      (l.forEach(function (e) {
        return m(n.get(e.from), e);
      }),
        l.forEach(function (e) {
          return p(n.get(e.from), e);
        }));
      var s = _(),
        u = await M(t),
        c = r("compactMap")(a, function (e) {
          var t = n.get(e);
          return t != null && t.lastUnreadMsgRowId != null
            ? {
                id: e,
                unreadCount: t.unreadCount,
                unreadMentionsOfMe: t.unreadMentionsOfMe,
              }
            : null;
        });
      return { chatUpdates: c, chatAckUpdates: s, statusAckUpdates: u };
      async function d(e) {
        return new Map(
          e
            .flatMap(function (e) {
              return e.msgKeys;
            })
            .map(N)
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
      }
      function m(e, t) {
        var n = t.rowId;
        e == null ||
          n == null ||
          (g(t) &&
            (e.lastUnreadMsgRowId == null || n > e.lastUnreadMsgRowId) &&
            (e.lastUnreadMsgRowId = n));
      }
      function p(e, t) {
        var n = t.rowId;
        if (
          !(e == null || n == null || e.lastUnreadMsgRowId == null) &&
          n > e.lastUnreadMsgRowId &&
          ((e.unreadCount += 1), o("WAWebMsgGetters").getIsImportantMessage(t))
        ) {
          var r = { id: t.id, timestamp: t.t };
          e.unreadMentionsOfMe.push(r);
        }
      }
      function _() {
        return r("compactMap")(l, function (e) {
          var t = e.rowId,
            r = n.get(e.from);
          return r == null || t == null || r.lastUnreadMsgRowId == null
            ? null
            : t <= r.lastUnreadMsgRowId
              ? e.pendingReadReceipt ===
                  o("WAWebDBMsgUtils").PendingReadReceiptType.MessageEdit &&
                !f(e)
                ? null
                : {
                    id: e.id,
                    ack: o("WAWebAck").ACK.READ,
                    pendingReadReceipt: null,
                  }
              : null;
        });
      }
      function f(e) {
        return e.latestEditMsgKey != null && t.has(e.latestEditMsgKey);
      }
      function g(e) {
        return t.has(e.id) || f(e);
      }
    }
    function N(e) {
      return r("WAWebMsgKey").fromString(e).remote.toString();
    }
    async function M(e) {
      var t = Array.from(e)
          .filter(function (e) {
            return N(e) === o("WAJids").STATUS_JID;
          })
          .map(function (e) {
            return r("WAWebMsgKey").fromString(e);
          }),
        n = await o("WAWebMessageReceiptUtils").fixStatusReceiptKeys(t);
      return n.map(function (e) {
        return { id: e.toString(), ack: o("WAWebAck").ACK.READ };
      });
    }
    function w(e) {
      return new Set(
        e.flatMap(function (e) {
          return e.msgKeys;
        }),
      );
    }
    function A(e) {
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
    ((l.addAccountLidToUpdates = S),
      (l.updatePeerReceipts = R),
      (l.getStatusMsgAckUpdates = M));
  },
  98,
);
