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
      p = r("qpl")._(891431279, "3267");
    async function _(t) {
      if (
        !o("WAWebLid1X1MigrationGating").Lid1X1MigrationUtils.isLidMigrated() ||
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
    async function f() {
      (o("WAWebQplFlowWrapper").QPL.markerPoint(p, "UpdatePeerReceipts_start"),
        o("WALogger").LOG(
          u ||
            (u = babelHelpers.taggedTemplateLiteralLoose([
              "[init-from-storage] updatePeerReceipts start",
            ])),
        ));
      var e = await o("WAWebSchemaPeerReadReceipt").getTable().all();
      if (o("WAWebLid1X1MigrationGating").Lid1X1MigrationUtils.isLidMigrated())
        await Promise.all(
          e.map(async function (e) {
            e.msgKeys = await o("WAWebDBBulkGetRootMsgs").fixMsgKeysWithChatId(
              e.msgKeys,
            );
          }),
        );
      else {
        var t = [],
          n = [];
        for (var a of e)
          for (var i of a.msgKeys) {
            var l = r("WAWebMsgKey").fromString(i);
            l.remote.isLid() &&
              (a.ack === o("WAWebAck").ACK.READ
                ? t.push(l)
                : a.ack === o("WAWebAck").ACK.PLAYED && n.push(l));
          }
        (t.length > 0 &&
          e.push({
            ack: o("WAWebAck").ACK.READ,
            msgKeys: o("WAWebDBBulkGetRootMsgs")
              .fixMsgKeysWithPnMapping(t)
              .map(String),
          }),
          n.length > 0 &&
            e.push({
              ack: o("WAWebAck").ACK.PLAYED,
              msgKeys: Array.from(n, String),
            }));
      }
      var s = [],
        m = [],
        f = [],
        h = 0;
      (e.forEach(function (e) {
        e.ack === o("WAWebAck").ACK.READ
          ? s.push(e)
          : e.ack === o("WAWebAck").ACK.PLAYED
            ? m.push(e)
            : (h++, f.length < 3 && f.push(e.ack));
      }),
        h > 0 &&
          o("WALogger").WARN(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "updatePeerReceipts: ",
                " unknown ack types => ",
                "",
              ])),
            h,
            f,
          ));
      var y = await g(s),
        v = y.chatAckUpdates,
        S = y.chatUpdates,
        R = y.statusAckUpdates,
        L = v.concat(R),
        E = new Map(
          R.map(function (e) {
            return [e.id, e];
          }),
        ),
        k = new Map(
          L.map(function (e) {
            return [e.id, e];
          }),
        ),
        I = b(m);
      I.forEach(function (e) {
        var t = k.get(e.id);
        t == null
          ? k.set(e.id, e)
          : k.set(e.id, babelHelpers.extends({}, t, { ack: e.ack }));
      });
      var T = Array.from(k.values());
      o("WAWebBackendApi").frontendFireAndForget("updateOfflinePeerReceipt", {
        chatUpdates: S.map(function (e) {
          var t;
          return {
            chatId: e.id,
            unreadCount: e.unreadCount,
            unreadMentionsOfMe: (t = e.unreadMentionsOfMe) != null ? t : [],
          };
        }),
        ackUpdates: T.map(function (e) {
          var t = e.id;
          return (
            E.has(e.id) &&
              (t = o("WAWebLidStatusMigrationKeyUtils")
                .matKeyConvert(r("WAWebMsgKey").fromString(t))
                .toString()),
            { msgKey: t, ack: e.ack }
          );
        }),
      });
      var D = await _(S);
      return (
        o("WALogger")
          .LOG(
            d ||
              (d = babelHelpers.taggedTemplateLiteralLoose([
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
                t.bulkCreateOrMerge(T),
                n.bulkCreateOrMerge(D),
              ]);
            })
            .then(function () {}),
          o("WAWebMarkAddOnsAsReadJob")
            .markUnclassifiedAddOnsAsReadJob(
              Array.from(C(s), function (e) {
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
              p,
              "UpdatePeerReceipts_end",
            );
          })
      );
    }
    async function g(e) {
      o("WALogger").LOG(
        m ||
          (m = babelHelpers.taggedTemplateLiteralLoose([
            "getUpdatesForPeerReadReceipts",
          ])),
      );
      var t = C(e),
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
        return p(n.get(e.from), e);
      }),
        l.forEach(function (e) {
          return _(n.get(e.from), e);
        }));
      var s = f(),
        u = await y(t),
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
            .map(h)
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
      function p(e, n) {
        var r = n.id,
          o = n.rowId;
        e == null ||
          o == null ||
          (t.has(r) &&
            (e.lastUnreadMsgRowId == null || o > e.lastUnreadMsgRowId) &&
            (e.lastUnreadMsgRowId = o));
      }
      function _(e, t) {
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
      function f() {
        return r("compactMap")(l, function (e) {
          var t = e.rowId,
            r = n.get(e.from);
          return r == null || t == null || r.lastUnreadMsgRowId == null
            ? null
            : t <= r.lastUnreadMsgRowId
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
    }
    function h(e) {
      return r("WAWebMsgKey").fromString(e).remote.toString();
    }
    async function y(e) {
      var t = Array.from(e)
          .filter(function (e) {
            return h(e) === o("WAJids").STATUS_JID;
          })
          .map(function (e) {
            return r("WAWebMsgKey").fromString(e);
          }),
        n = await o("WAWebMessageReceiptUtils").fixStatusReceiptKeys(t);
      return n.map(function (e) {
        return { id: e.toString(), ack: o("WAWebAck").ACK.READ };
      });
    }
    function C(e) {
      return new Set(
        e.flatMap(function (e) {
          return e.msgKeys;
        }),
      );
    }
    function b(e) {
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
    ((l.addAccountLidToUpdates = _),
      (l.updatePeerReceipts = f),
      (l.getStatusMsgAckUpdates = y));
  },
  98,
);
