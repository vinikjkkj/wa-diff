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
    function _(e) {
      return e == null || e <= 0 ? null : e;
    }
    function f(e, t) {
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
    function g(e) {
      return e.isGroup() &&
        o("WAWebUserPrefsGeneral").getUserPrivacySettings().readReceipts !==
          o("WAWebPrivacySettings").ALL_NONE.none &&
        o("WAWebBotGroupGatingUtils").isStandardBotProfileGroupEnabled()
        ? o("WAWebSendReceiptJobCommon").RECEIPT_TYPE.READ
        : o("WAWebSendReceiptJobCommon").RECEIPT_TYPE.READ_SELF;
    }
    function h(e) {
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
    async function y(t, n, a) {
      o("WALogger").LOG(
        e || (e = babelHelpers.taggedTemplateLiteralLoose(["markChatRead"])),
      );
      var i = Date.now().toString(),
        l = String(t.id),
        s = await o(
          "WAWebDBPendingReadReceiptQueries",
        ).queryPendingReadReceiptMsgRows(l, a);
      s.sort(function (e, t) {
        var n = e.rowId || 0,
          r = t.rowId || 0;
        return n - r;
      });
      var u = n ? String(n) : null,
        c = s.length - 1;
      if (u) {
        for (c; c >= 0 && s[c].id !== u; c--);
        c < 0 && (c = s.length - 1);
      }
      var d = null,
        m = [];
      for (c; c >= 0; c--) {
        var p = s[c],
          y = t.msgs.get(p.id);
        (y &&
          r("WAWebWid").isPSA(t.id) &&
          o("WAWebWamChatPSALogger").logChatPSARead(y),
          y &&
            o("WAWebQbmMessageReadLogEvent").logQbmMessageRead({
              msg: y,
              chat: t,
              readSource: o("WAWebWamEnumReadSource").READ_SOURCE.CHAT,
            }),
          p.rowId != null && (d == null || p.rowId > d) && (d = p.rowId));
        var C = r("WAWebMsgKey").fromString(p.id);
        if (p.type === o("WAWebMsgType").MSG_TYPE.CIPHERTEXT) {
          o("WAWebHandlePlaceholderWam").postPlaceholderActivityViewEvent([p]);
          continue;
        }
        if (p.type !== o("WAWebMsgType").MSG_TYPE.CALL_LOG) {
          var b = p.broadcastId || p.from,
            v = p.author || p.from;
          m.push({
            id: C.id,
            sender: o("WAWebWidFactory").createWidFromWidLike(v),
            senderWithDevice:
              p.senderWithDevice != null
                ? o("WAWebWidFactory").createWidFromWidLike(p.senderWithDevice)
                : null,
            metaFrom:
              p.metaFrom != null
                ? o("WAWebWidFactory").createWidFromWidLike(p.metaFrom)
                : null,
            chat: o("WAWebWidFactory").createWidFromWidLike(b),
            serverStoreTimeMicros: _(p.serverStoreTimeMicros),
            botEditType: p.botEditType,
          });
        }
      }
      var S = I(
          t.id,
          m.filter(function (e) {
            return !h(e);
          }),
        ),
        L = S.coexV2Reads,
        E = S.coexV2Recipient,
        k = S.regularReads,
        D = R(k),
        x = D[0],
        $ = D[1],
        P = D[2],
        N = D[3];
      return (
        await Promise.all(
          [].concat(
            Array.from(x.keys(), function (e) {
              var n = x.get(e);
              if (n) {
                var r;
                return (
                  t.trusted
                    ? (r = f(t.id))
                    : (r = o("WAWebSendReceiptJobCommon").RECEIPT_TYPE
                        .READ_SELF),
                  o("WAWebSendReceiptJobCommon").sendAggregateReceipts({
                    to: e,
                    type: r,
                    t: i,
                    groupedReceipt: n,
                    threadId: o("WAWebBotUtils").isMetaAiBot(t.id) ? a : void 0,
                    maxStsByAuthor: P.get(e),
                  })
                );
              }
            }),
            Array.from($.keys(), function (e) {
              var t = $.get(e);
              if (t)
                return o("WAWebSendReceiptJobCommon").sendAggregateReceipts({
                  to: e,
                  type: g(e),
                  t: i,
                  groupedReceipt: t,
                  maxStsByAuthor: N.get(e),
                });
            }),
          ),
        ),
        await T({
          chatId: t.id,
          coexV2Reads: L,
          coexV2Recipient: E,
          t: i,
          trusted: t.trusted,
        }),
        o("WAWebApiChat").markMessageAndChatAsRead({
          lastReadRowId: d,
          chatId: l,
          keepChatUnread: !1,
          threadId: a,
        })
      );
    }
    async function C(e, t, n) {
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
              : f(l, i ? void 0 : m),
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
      } else b(e) && (await v(a, t));
      var g = { ack: o("WAWebAck").ACK.READ };
      a.participant && a.participant.isPSA() && (g.statusPSAReadTimestamp = t);
      var h = [babelHelpers.extends({ id: a.toString() }, g)],
        y = o("WAWebLidMigrationUtils").getAlternateMsgKey(a);
      (y && h.push(babelHelpers.extends({ id: y.toString() }, g)),
        await o("WAWebSchemaMessage").getMessageTable().bulkMergeOnly(h));
    }
    function b(e) {
      return (
        !e.id.fromMe &&
        e.id.participant != null &&
        o("WAWebMsgGetters").getIsGroupStatus(e) &&
        o("WAWebStatusGatingUtils").isStatusCompanionReadSyncEnabled()
      );
    }
    async function v(e, t) {
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
    async function S(e) {
      var t = String(o("WATimeUtils").unixTime()),
        n = R(
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
    function R(e) {
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
    async function L(e, t, n) {
      var a = String(e),
        i = o("WAWebBotUtils").isMetaAiBot(e),
        l = await o(
          "WAWebDBPendingReadReceiptQueries",
        ).queryUnreadEditedMsgRows(a, i ? n : void 0);
      if (!l.length) return { fullyReadThreadIds: [] };
      var s = new Set(),
        u = l.map(function (t) {
          var a = r("WAWebMsgKey").fromString(t.latestEditMsgKey),
            i = t.author || t.from;
          if (n == null)
            for (var l of o("WAWebDBMessageUtils").getThreadIdsFromMessage(t))
              s.add(l.toString());
          else s.add(n.toString());
          return {
            id: a.id,
            sender: o("WAWebWidFactory").createWidFromWidLike(i),
            senderWithDevice:
              t.senderWithDevice != null
                ? o("WAWebWidFactory").createWidFromWidLike(t.senderWithDevice)
                : null,
            metaFrom:
              t.metaFrom != null
                ? o("WAWebWidFactory").createWidFromWidLike(t.metaFrom)
                : null,
            chat: o("WAWebWidFactory").createWidFromWidLike(e),
            serverStoreTimeMicros: _(t.serverStoreTimeMicros),
            botEditType: t.botEditType,
          };
        }),
        c = I(
          e,
          u.filter(function (e) {
            return !h(e);
          }),
        ),
        d = c.coexV2Reads,
        m = c.coexV2Recipient,
        p = c.regularReads,
        y = R(p),
        C = y[0],
        b = y[1],
        v = y[2],
        S = y[3],
        L = C.get(e),
        E = b.get(e),
        k = Date.now().toString();
      if (L) {
        var D;
        (t.trusted
          ? (D = f(e))
          : (D = o("WAWebSendReceiptJobCommon").RECEIPT_TYPE.READ_SELF),
          await o("WAWebSendReceiptJobCommon").sendAggregateReceipts({
            to: e,
            type: D,
            t: k,
            groupedReceipt: L,
            threadId: o("WAWebBotUtils").isMetaAiBot(e) ? n : void 0,
            maxStsByAuthor: v.get(e),
          }));
      }
      (E &&
        (await o("WAWebSendReceiptJobCommon").sendAggregateReceipts({
          to: e,
          type: g(e),
          t: k,
          groupedReceipt: E,
          maxStsByAuthor: S.get(e),
        })),
        await T({
          chatId: e,
          coexV2Reads: d,
          coexV2Recipient: m,
          t: k,
          trusted: t.trusted,
        }));
      var x = l.map(function (e) {
          return r("WAWebMsgKey").fromString(e.latestEditMsgKey);
        }),
        $ = await o("WAWebApiChat").markEditedMessageAndChatAsRead({
          chatId: e,
          readMsgKeys: x,
          threadId: n,
        });
      return $;
    }
    function E(e) {
      return (
        e.senderWithDevice != null &&
        e.senderWithDevice.equals(
          o("WAWebCoexV2BotWid").COEX_V2_BOT_FBID_WID,
        ) &&
        e.metaFrom != null &&
        !o("WAWebUserUtils").isMeAccount(e.metaFrom)
      );
    }
    function k(e) {
      var t = null;
      for (var n of e) {
        var r = n.serverStoreTimeMicros;
        r != null && (t == null || r > t) && (t = r);
      }
      return t;
    }
    function I(e, t) {
      var n = { coexV2Reads: [], coexV2Recipient: null, regularReads: t };
      if (
        !t.some(E) ||
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
      for (var s of t) E(s) ? i.push(s) : l.push(s);
      return { coexV2Reads: i, coexV2Recipient: a, regularReads: l };
    }
    async function T(e) {
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
              f(t) === o("WAWebSendReceiptJobCommon").RECEIPT_TYPE.READ_SELF,
            maxSts: k(n),
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
    ((l.getReadReceiptType = f),
      (l.getAgentReadReceiptType = g),
      (l.markChatRead = y),
      (l.markStatusRead = C),
      (l.sendAddOnReadReceipts = S),
      (l.groupMsgIdsByChatThenSender = R),
      (l.markEditedMsgsRead = L));
  },
  98,
);
