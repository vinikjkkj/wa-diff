__d(
  "WAWebSendReadReceiptJob",
  [
    "WAJids",
    "WALogger",
    "WATimeUtils",
    "WAWebAck",
    "WAWebApiChat",
    "WAWebBotGroupGatingUtils",
    "WAWebBotTypes",
    "WAWebBotUtils",
    "WAWebCoexV2BotWid",
    "WAWebCoexV2GatingUtils",
    "WAWebCoexV2ReceiptRecipient",
    "WAWebCoexV2SendReceipt",
    "WAWebDBMessageUtils",
    "WAWebDBPendingReadReceiptQueries",
    "WAWebHandlePlaceholderWam",
    "WAWebLidMigrationUtils",
    "WAWebMsgGetters",
    "WAWebMsgKey",
    "WAWebMsgType",
    "WAWebNewsletterStatusViewReceiptUtils",
    "WAWebPrivacySettings",
    "WAWebQbmMessageReadLogEvent",
    "WAWebSchemaMessage",
    "WAWebSendReceiptJobCommon",
    "WAWebStatusGatingUtils",
    "WAWebUserPrefsGeneral",
    "WAWebUserUtils",
    "WAWebWamChatPSALogger",
    "WAWebWamEnumReadSource",
    "WAWebWid",
    "WAWebWidFactory",
    "getErrorSafe",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p = o("WAWebWidFactory").createWid(o("WAJids").STATUS_JID);
    async function _(t, n, r) {
      o("WALogger").LOG(
        e || (e = babelHelpers.taggedTemplateLiteralLoose(["markChatRead"])),
      );
      var a = Date.now().toString(),
        i = String(t.id),
        l = await o(
          "WAWebDBPendingReadReceiptQueries",
        ).queryPendingReadReceiptMsgRows(i, r),
        s = R(l, n),
        u = L(s),
        c = E(t, s),
        d = $(
          t.id,
          c.filter(function (e) {
            return !T(e);
          }),
        ),
        m = d.coexV2Reads,
        p = d.coexV2Recipient,
        _ = d.regularReads,
        f = v(_),
        g = f[0],
        h = f[1],
        y = f[2],
        S = f[3];
      return (
        await Promise.all(
          [].concat(
            Array.from(g.keys(), function (e) {
              var n = g.get(e);
              if (n) {
                var i;
                return (
                  t.trusted
                    ? (i = C(t.id))
                    : (i = o("WAWebSendReceiptJobCommon").RECEIPT_TYPE
                        .READ_SELF),
                  o("WAWebSendReceiptJobCommon").sendAggregateReceipts({
                    to: e,
                    type: i,
                    t: a,
                    groupedReceipt: n,
                    threadId: o("WAWebBotUtils").isMetaAiBot(t.id) ? r : void 0,
                    maxStsByAuthor: y.get(e),
                  })
                );
              }
            }),
            Array.from(h.keys(), function (e) {
              var t = h.get(e);
              if (t)
                return o("WAWebSendReceiptJobCommon").sendAggregateReceipts({
                  to: e,
                  type: b(e),
                  t: a,
                  groupedReceipt: t,
                  maxStsByAuthor: S.get(e),
                });
            }),
          ),
        ),
        await P({
          chatId: t.id,
          coexV2Reads: m,
          coexV2Recipient: p,
          t: a,
          trusted: t.trusted,
        }),
        o("WAWebApiChat").markMessageAndChatAsRead({
          lastReadRowId: u,
          chatId: i,
          keepChatUnread: !1,
          threadId: r,
        })
      );
    }
    async function f(e, t, n) {
      var a = e.id;
      if (!o("WAWebMsgGetters").getIsStatus(e)) {
        o("WALogger").WARN(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "markStatusRead: message is not a status.",
            ])),
        );
        return;
      }
      var i = o("WAWebMsgGetters").getIsNewsletterStatus(e),
        l = o("WAWebMsgGetters").getIsGroupStatus(e) || i ? e.id.remote : p,
        c =
          a.fromMe &&
          !o("WAWebStatusGatingUtils").isStatusCompanionReadSyncEnabled(),
        d = (n == null || n.sendReceipt === !0) && !c;
      if (d) {
        var m = i ? l : r("nullthrows")(a.participant);
        if (
          (await o("WAWebSendReceiptJobCommon").sendAggregateReceipts({
            to: l,
            type: a.fromMe
              ? o("WAWebSendReceiptJobCommon").RECEIPT_TYPE.READ_SELF
              : C(l, i ? void 0 : m),
            t: String(t),
            receiptClass: i ? "status" : void 0,
            isStatusReceipt: !0,
            groupedReceipt: new Map([[m, [a.id]]]),
          }),
          i && !a.fromMe)
        ) {
          var _ = e.serverId;
          _ != null &&
            o("WAWebNewsletterStatusViewReceiptUtils")
              .sendNewsletterStatusViewReceipt(l, a, _)
              .catch(function (e) {
                o("WALogger")
                  .WARN(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "[newsletter][status] view receipt send failed",
                      ])),
                  )
                  .sendLogs("newsletter-status-view-receipt-fail");
              });
        }
      } else g(e) && (await h(a, t));
      var f = { ack: o("WAWebAck").ACK.READ };
      a.participant && a.participant.isPSA() && (f.statusPSAReadTimestamp = t);
      var y = [babelHelpers.extends({ id: a.toString() }, f)],
        b = o("WAWebLidMigrationUtils").getAlternateMsgKey(a);
      (b && y.push(babelHelpers.extends({ id: b.toString() }, f)),
        await o("WAWebSchemaMessage").getMessageTable().bulkMergeOnly(y));
    }
    function g(e) {
      return (
        !e.id.fromMe &&
        e.id.participant != null &&
        o("WAWebMsgGetters").getIsGroupStatus(e) &&
        o("WAWebStatusGatingUtils").isStatusCompanionReadSyncEnabled()
      );
    }
    async function h(e, t) {
      try {
        await o("WAWebSendReceiptJobCommon").sendAggregateReceipts({
          to: e.remote,
          type: o("WAWebSendReceiptJobCommon").RECEIPT_TYPE.READ_SELF,
          t: String(t),
          isStatusReceipt: !0,
          groupedReceipt: new Map([[r("nullthrows")(e.participant), [e.id]]]),
        });
      } catch (e) {
        o("WALogger")
          .WARN(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "markStatusRead: group status read-self failed",
              ])),
          )
          .catching(r("getErrorSafe")(e))
          .sendLogs("status-group-read-self-fail");
      }
    }
    async function y(e) {
      var t = String(o("WATimeUtils").unixTime()),
        n = v(
          e
            .filter(function (e) {
              return !o("WAWebUserUtils").isSerializedWidMe(e.sender);
            })
            .map(function (e) {
              return {
                chat: e.msgKey.remote,
                sender: o("WAWebWidFactory").createWidFromWidLike(e.sender),
                id: e.msgKey.id,
              };
            }),
        ),
        r = n[0];
      await Promise.all(
        Array.from(r.keys(), function (e) {
          var n = r.get(e);
          if (n)
            return o("WAWebSendReceiptJobCommon").sendAggregateReceipts({
              to: e,
              type: o("WAWebSendReceiptJobCommon").RECEIPT_TYPE.READ_SELF,
              t,
              groupedReceipt: n,
            });
        }),
      );
    }
    function C(e, t) {
      return e.isNewsletter() ||
        (e.isStatus() && t != null && t.isPSA()) ||
        r("WAWebWid").isPSA(e)
        ? o("WAWebSendReceiptJobCommon").RECEIPT_TYPE.READ_SELF
        : e.isGroup()
          ? o("WAWebSendReceiptJobCommon").RECEIPT_TYPE.READ
          : o("WAWebUserPrefsGeneral").getUserPrivacySettings().readReceipts ===
              o("WAWebPrivacySettings").ALL_NONE.none
            ? o("WAWebSendReceiptJobCommon").RECEIPT_TYPE.READ_SELF
            : o("WAWebSendReceiptJobCommon").RECEIPT_TYPE.READ;
    }
    function b(e) {
      return e.isGroup() &&
        o("WAWebUserPrefsGeneral").getUserPrivacySettings().readReceipts !==
          o("WAWebPrivacySettings").ALL_NONE.none &&
        o("WAWebBotGroupGatingUtils").isStandardBotProfileGroupEnabled()
        ? o("WAWebSendReceiptJobCommon").RECEIPT_TYPE.READ
        : o("WAWebSendReceiptJobCommon").RECEIPT_TYPE.READ_SELF;
    }
    function v(e) {
      var t = new Map(),
        n = new Map(),
        r = new Map(),
        o = new Map();
      return (
        e.forEach(function (e) {
          var a,
            i,
            l = e.chat,
            s = e.id,
            u = e.sender,
            c = e.serverStoreTimeMicros,
            d = !l.isBot() && u.isBot(),
            m = d ? n : t,
            p = d ? o : r,
            _ = (a = m.get(l)) != null ? a : new Map(),
            f = (i = _.get(u)) != null ? i : [];
          if ((f.push(s), _.set(u, f), m.set(l, _), c != null && c > 0)) {
            var g,
              h,
              y = (g = p.get(l)) != null ? g : new Map(),
              C = (h = y.get(u)) != null ? h : 0;
            (c > C && y.set(u, c), p.set(l, y));
          }
        }),
        [t, n, r, o]
      );
    }
    async function S(e, t, n) {
      var a = String(e),
        i = o("WAWebBotUtils").isMetaAiBot(e),
        l = await o(
          "WAWebDBPendingReadReceiptQueries",
        ).queryUnreadEditedMsgRows(a, i ? n : void 0);
      if (!l.length) return { fullyReadThreadIds: [] };
      var s = new Set(),
        u = l.map(function (t) {
          var a = r("WAWebMsgKey").fromString(t.latestEditMsgKey);
          if (n == null)
            for (var i of o("WAWebDBMessageUtils").getThreadIdsFromMessage(t))
              s.add(i.toString());
          else s.add(n.toString());
          return k(t, a, e);
        }),
        c = $(
          e,
          u.filter(function (e) {
            return !T(e);
          }),
        ),
        d = c.coexV2Reads,
        m = c.coexV2Recipient,
        p = c.regularReads,
        _ = v(p),
        f = _[0],
        g = _[1],
        h = _[2],
        y = _[3],
        S = f.get(e),
        R = g.get(e),
        L = Date.now().toString();
      if (S) {
        var E;
        (t.trusted
          ? (E = C(e))
          : (E = o("WAWebSendReceiptJobCommon").RECEIPT_TYPE.READ_SELF),
          await o("WAWebSendReceiptJobCommon").sendAggregateReceipts({
            to: e,
            type: E,
            t: L,
            groupedReceipt: S,
            threadId: o("WAWebBotUtils").isMetaAiBot(e) ? n : void 0,
            maxStsByAuthor: h.get(e),
          }));
      }
      (R &&
        (await o("WAWebSendReceiptJobCommon").sendAggregateReceipts({
          to: e,
          type: b(e),
          t: L,
          groupedReceipt: R,
          maxStsByAuthor: y.get(e),
        })),
        await P({
          chatId: e,
          coexV2Reads: d,
          coexV2Recipient: m,
          t: L,
          trusted: t.trusted,
        }));
      var I = l.map(function (e) {
          return r("WAWebMsgKey").fromString(e.latestEditMsgKey);
        }),
        D = await o("WAWebApiChat").markEditedMessageAndChatAsRead({
          chatId: e,
          readMsgKeys: I,
          threadId: n,
        });
      return D;
    }
    function R(e, t) {
      var n = [].concat(e).sort(function (e, t) {
          return (e.rowId || 0) - (t.rowId || 0);
        }),
        r = t ? String(t) : null,
        o = -1;
      if (r) {
        for (var a = n.length - 1; a >= 0; a--)
          if (n[a].id === r) {
            o = a;
            break;
          }
      }
      var i = o < 0 ? n : n.slice(0, o + 1);
      return i.reverse();
    }
    function L(e) {
      var t = null;
      for (var n of e)
        n.rowId != null && (t == null || n.rowId > t) && (t = n.rowId);
      return t;
    }
    function E(e, t) {
      var n = [];
      for (var a of t) {
        var i = e.msgs.get(a.id);
        (i &&
          r("WAWebWid").isPSA(e.id) &&
          o("WAWebWamChatPSALogger").logChatPSARead(i),
          i &&
            o("WAWebQbmMessageReadLogEvent").logQbmMessageRead({
              msg: i,
              chat: e,
              readSource: o("WAWebWamEnumReadSource").READ_SOURCE.CHAT,
            }));
        var l = r("WAWebMsgKey").fromString(a.id);
        if (a.type === o("WAWebMsgType").MSG_TYPE.CIPHERTEXT) {
          o("WAWebHandlePlaceholderWam").postPlaceholderActivityViewEvent([a]);
          continue;
        }
        a.type !== o("WAWebMsgType").MSG_TYPE.CALL_LOG &&
          n.push(k(a, l, a.broadcastId || a.from));
      }
      return n;
    }
    function k(e, t, n) {
      var r = e.author || e.from;
      return {
        id: t.id,
        sender: o("WAWebWidFactory").createWidFromWidLike(r),
        senderWithDevice:
          e.senderWithDevice != null
            ? o("WAWebWidFactory").createWidFromWidLike(e.senderWithDevice)
            : null,
        metaFrom:
          e.metaFrom != null
            ? o("WAWebWidFactory").createWidFromWidLike(e.metaFrom)
            : null,
        chat: o("WAWebWidFactory").createWidFromWidLike(n),
        serverStoreTimeMicros: I(e.serverStoreTimeMicros),
        botEditType: e.botEditType,
      };
    }
    function I(e) {
      return e == null || e <= 0 ? null : e;
    }
    function T(e) {
      var t = e.botEditType,
        n = e.chat,
        r = e.sender;
      return (
        (t === o("WAWebBotTypes").BotMsgEditType.FIRST ||
          t === o("WAWebBotTypes").BotMsgEditType.INNER) &&
        n.isGroup() &&
        r.isBot() &&
        o("WAWebBotGroupGatingUtils").isStandardBotProfileGroupEnabled()
      );
    }
    function D(e) {
      return (
        e.senderWithDevice != null &&
        e.senderWithDevice.equals(
          o("WAWebCoexV2BotWid").COEX_V2_BOT_FBID_WID,
        ) &&
        e.metaFrom != null &&
        !o("WAWebUserUtils").isMeAccount(e.metaFrom)
      );
    }
    function x(e) {
      var t = null;
      for (var n of e) {
        var r = n.serverStoreTimeMicros;
        r != null && (t == null || r > t) && (t = r);
      }
      return t;
    }
    function $(e, t) {
      var n = { coexV2Reads: [], coexV2Recipient: null, regularReads: t };
      if (
        !t.some(D) ||
        !e.isUser() ||
        e.isBot() ||
        o("WAWebUserUtils").isSerializedWidMe(String(e)) ||
        !o("WAWebCoexV2GatingUtils").isCoexV2RecvEnabled()
      )
        return n;
      var a;
      try {
        a = r("nullthrows")(
          o("WAWebCoexV2ReceiptRecipient").toCoexV2ReceiptRecipient(e),
        );
      } catch (e) {
        return (
          o("WALogger")
            .WARN(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "[coexv2] no represented LID for the read receipt",
                ])),
            )
            .catching(r("getErrorSafe")(e))
            .sendLogs("coexv2-read-receipt-lid-unresolved"),
          n
        );
      }
      var i = [],
        l = [];
      for (var s of t) D(s) ? i.push(s) : l.push(s);
      return { coexV2Reads: i, coexV2Recipient: a, regularReads: l };
    }
    async function P(e) {
      var t = e.chatId,
        n = e.coexV2Reads,
        a = e.coexV2Recipient,
        i = e.t,
        l = e.trusted;
      if (!(a == null || n.length === 0))
        try {
          await o("WAWebCoexV2SendReceipt").sendCoexV2ReadReceipt({
            externalIds: n.map(function (e) {
              return e.id;
            }),
            isReadSelf:
              !l ||
              C(t) === o("WAWebSendReceiptJobCommon").RECEIPT_TYPE.READ_SELF,
            maxSts: x(n),
            recipient: a,
            t: i,
          });
        } catch (e) {
          o("WALogger")
            .WARN(
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
                  "[coexv2] failed to send read receipt",
                ])),
            )
            .catching(r("getErrorSafe")(e))
            .sendLogs("coexv2-read-receipt-error");
        }
    }
    ((l.markChatRead = _),
      (l.markStatusRead = f),
      (l.sendAddOnReadReceipts = y),
      (l.getReadReceiptType = C),
      (l.getAgentReadReceiptType = b),
      (l.groupMsgIdsByChatThenSender = v),
      (l.markEditedMsgsRead = S));
  },
  98,
);
