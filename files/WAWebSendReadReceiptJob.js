__d(
  "WAWebSendReadReceiptJob",
  [
    "WAJids",
    "WALogger",
    "WAPromiseQueue",
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
    "WAWebDBMsgUtils",
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
      p = o("WAWebWidFactory").createWid(o("WAJids").STATUS_JID),
      _ = new (o("WAPromiseQueue").PromiseQueueMap)();
    function f(e, t, n, r, o) {
      return (
        o === void 0 && (o = !0),
        _.enqueue(String(e.id), function () {
          return k(e, t, n, r, o);
        })
      );
    }
    function g(e, t, n) {
      return _.enqueue(String(e), function () {
        return I(e, t, n);
      });
    }
    function h(e, t, n, r) {
      return _.enqueue(String(e), async function () {
        await T(String(e), n, r, t);
      });
    }
    function y(e, t, n) {
      return _.enqueue(String(e), async function () {
        await x(e, n, t);
      });
    }
    async function C(t, n, a) {
      var i = t.id;
      if (!o("WAWebMsgGetters").getIsStatus(t)) {
        o("WALogger").WARN(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "markStatusRead: message is not a status.",
            ])),
        );
        return;
      }
      var l = o("WAWebMsgGetters").getIsNewsletterStatus(t),
        u = o("WAWebMsgGetters").getIsGroupStatus(t) || l ? t.id.remote : p,
        c =
          i.fromMe &&
          !o("WAWebStatusGatingUtils").isStatusCompanionReadSyncEnabled(),
        d = (a == null || a.sendReceipt === !0) && !c;
      if (d) {
        var m = l ? u : r("nullthrows")(i.participant);
        if (
          (await o("WAWebSendReceiptJobCommon").sendAggregateReceipts({
            to: u,
            type: i.fromMe
              ? o("WAWebSendReceiptJobCommon").RECEIPT_TYPE.READ_SELF
              : R(u, l ? void 0 : m),
            t: String(n),
            receiptClass: l ? "status" : void 0,
            isStatusReceipt: !0,
            groupedReceipt: new Map([[m, [i.id]]]),
          }),
          l && !i.fromMe)
        ) {
          var _ = t.serverId;
          _ != null &&
            o("WAWebNewsletterStatusViewReceiptUtils")
              .sendNewsletterStatusViewReceipt(u, i, _)
              .catch(function (e) {
                o("WALogger")
                  .WARN(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "[newsletter][status] view receipt send failed",
                      ])),
                  )
                  .sendLogs("newsletter-status-view-receipt-fail");
              });
        }
      } else b(t) && (await v(i, n));
      var f = { ack: o("WAWebAck").ACK.READ };
      i.participant && i.participant.isPSA() && (f.statusPSAReadTimestamp = n);
      var g = [babelHelpers.extends({ id: i.toString() }, f)],
        h = o("WAWebLidMigrationUtils").getAlternateMsgKey(i);
      (h && g.push(babelHelpers.extends({ id: h.toString() }, f)),
        await o("WAWebSchemaMessage").getMessageTable().bulkMergeOnly(g));
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
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "markStatusRead: group status read-self failed",
              ])),
          )
          .catching(r("getErrorSafe")(e))
          .sendLogs("status-group-read-self-fail");
      }
    }
    async function S(e) {
      var t = String(o("WATimeUtils").unixTime()),
        n = E(
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
    function R(e, t) {
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
    function L(e) {
      return e.isGroup() &&
        o("WAWebUserPrefsGeneral").getUserPrivacySettings().readReceipts !==
          o("WAWebPrivacySettings").ALL_NONE.none &&
        o("WAWebBotGroupGatingUtils").isStandardBotProfileGroupEnabled()
        ? o("WAWebSendReceiptJobCommon").RECEIPT_TYPE.READ
        : o("WAWebSendReceiptJobCommon").RECEIPT_TYPE.READ_SELF;
    }
    function E(e) {
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
    async function k(e, t, n, r, a) {
      (a === void 0 && (a = !0),
        o("WALogger").LOG(
          c || (c = babelHelpers.taggedTemplateLiteralLoose(["markChatRead"])),
        ));
      var i = String(e.id),
        l = await T(i, t, n, a ? r : null, !a),
        s = l.origins,
        u = l.rows;
      return (
        await F({
          chatId: e.id,
          msgsForReceipt: M(e, u, s),
          threadId: n,
          trusted: e.trusted,
        }),
        o("WAWebApiChat").markMessageAndChatAsRead({
          lastReadRowId: N(u),
          chatId: i,
          keepChatUnread: !1,
          readMsgRows: u,
          threadId: n,
        })
      );
    }
    async function I(e, t, n) {
      var a = String(e),
        i = await x(
          e,
          n,
          t.claimNewOrigins === !1 ? null : t.readOrigin,
          t.claimNewOrigins === !1,
        ),
        l = i.origins,
        s = i.rows;
      if (!s.length) return { fullyReadThreadIds: [] };
      await F({
        chatId: e,
        msgsForReceipt: s
          .filter(function (e) {
            return l.has(e.id);
          })
          .map(function (e) {
            return w(e, r("nullthrows")(e.latestEditMsgKey), a, l.get(e.id));
          }),
        threadId: n,
        trusted: t.trusted,
      });
      var u = await o("WAWebApiChat").markEditedMessageAndChatAsRead({
        chatId: e,
        readMsgKeys: s.map(function (e) {
          return r("WAWebMsgKey").fromString(e.latestEditMsgKey);
        }),
        threadId: n,
      });
      return u;
    }
    async function T(e, t, n, r, a) {
      a === void 0 && (a = !1);
      var i = P(
        await o(
          "WAWebDBPendingReadReceiptQueries",
        ).queryPendingReadReceiptMsgRows(e, n != null ? n : void 0),
        t,
      );
      return $(e, a ? D(i) : i, r, function (e) {
        return {
          msgId: e.id,
          pendingType: o("WAWebDBMsgUtils").PendingReadReceiptType.Message,
        };
      });
    }
    function D(e) {
      var t = function (t) {
          return (
            o(
              "WAWebDBPendingReadReceiptQueries",
            ).getCurrentPendingReadReceiptOrigin(t) != null
          );
        },
        n = Math.min.apply(
          Math,
          e
            .filter(function (e) {
              return (
                !t(e) &&
                !o("WAWebDBPendingReadReceiptQueries").isUnreceiptedMessageRow(
                  e,
                )
              );
            })
            .map(function (e) {
              var t;
              return (t = e.rowId) != null ? t : 1 / 0;
            }),
        );
      return e.filter(function (e) {
        var r;
        return (
          t(e) ||
          (o("WAWebDBPendingReadReceiptQueries").isUnreceiptedMessageRow(e) &&
            ((r = e.rowId) != null ? r : 1 / 0) < n)
        );
      });
    }
    async function x(e, t, n, r) {
      r === void 0 && (r = !1);
      var a = await o(
        "WAWebDBPendingReadReceiptQueries",
      ).queryUnreadEditedMsgRows(
        String(e),
        o("WAWebBotUtils").isMetaAiBot(e) && t != null ? t : void 0,
      );
      return $(
        String(e),
        r
          ? a.filter(function (e) {
              return (
                o(
                  "WAWebDBPendingReadReceiptQueries",
                ).getCurrentPendingReadReceiptOrigin(e) != null
              );
            })
          : a,
        n,
        function (e) {
          return {
            msgId: e.id,
            pendingType:
              o("WAWebDBMsgUtils").PendingReadReceiptType.MessageEdit,
            latestEditMsgKey: e.latestEditMsgKey,
          };
        },
      );
    }
    async function $(e, t, n, r) {
      var a = await o(
        "WAWebDBPendingReadReceiptQueries",
      ).claimPendingReadReceiptOrigins({
        chatId: e,
        origin: n != null ? n : null,
        targets: t.map(r),
      });
      return { rows: t, origins: a };
    }
    function P(e, t) {
      var n = [].concat(e).sort(function (e, t) {
          var n, r;
          return (
            ((n = e.rowId) != null ? n : 0) - ((r = t.rowId) != null ? r : 0)
          );
        }),
        r = t == null ? void 0 : t.toString(),
        o = n.findIndex(function (e) {
          return e.id === r;
        }),
        a = o < 0 ? n : n.slice(0, o + 1);
      return a.reverse();
    }
    function N(e) {
      var t = null;
      for (var n of e)
        n.rowId != null && (t == null || n.rowId > t) && (t = n.rowId);
      return t;
    }
    function M(e, t, n) {
      var a = [];
      for (var i of t) {
        var l = e.msgs.get(i.id);
        if (
          (l &&
            r("WAWebWid").isPSA(e.id) &&
            o("WAWebWamChatPSALogger").logChatPSARead(l),
          l &&
            o("WAWebQbmMessageReadLogEvent").logQbmMessageRead({
              msg: l,
              chat: e,
              readSource: o("WAWebWamEnumReadSource").READ_SOURCE.CHAT,
            }),
          i.type === o("WAWebMsgType").MSG_TYPE.CIPHERTEXT)
        ) {
          o("WAWebHandlePlaceholderWam").postPlaceholderActivityViewEvent([i]);
          continue;
        }
        i.type === o("WAWebMsgType").MSG_TYPE.CALL_LOG ||
          !n.has(i.id) ||
          a.push(w(i, i.id, String(i.broadcastId || i.from), n.get(i.id)));
      }
      return a;
    }
    function w(e, t, n, a) {
      var i = e.author || e.from;
      return {
        id: r("WAWebMsgKey").fromString(t).id,
        sender: o("WAWebWidFactory").createWidFromWidLike(i),
        senderWithDevice:
          e.senderWithDevice != null
            ? o("WAWebWidFactory").createWidFromWidLike(e.senderWithDevice)
            : null,
        metaFrom:
          e.metaFrom != null
            ? o("WAWebWidFactory").createWidFromWidLike(e.metaFrom)
            : null,
        chat: o("WAWebWidFactory").createWidFromWidLike(n),
        serverStoreTimeMicros: A(e.serverStoreTimeMicros),
        botEditType: e.botEditType,
        readOrigin: a,
      };
    }
    function A(e) {
      return e == null || e <= 0 ? null : e;
    }
    async function F(e) {
      var t = e.chatId,
        n = e.msgsForReceipt,
        r = e.threadId,
        a = e.trusted,
        i = Date.now().toString(),
        l = O(
          n.filter(function (e) {
            return !W(e);
          }),
          function (e) {
            var t;
            return (t = e.readOrigin) != null ? t : null;
          },
        );
      await o("WAWebSendReceiptJobCommon").waitForReceiptSends(
        Array.from(l, function (e) {
          var n = e[0],
            o = e[1];
          return B({
            chatId: t,
            messages: o,
            readOrigin: n,
            t: i,
            threadId: r,
            trusted: a,
          });
        }),
      );
    }
    function O(e, t) {
      var n = new Map();
      for (var r of e) {
        var o,
          a = t(r),
          i = (o = n.get(a)) != null ? o : [];
        (i.push(r), n.set(a, i));
      }
      return n;
    }
    async function B(e) {
      var t = e.chatId,
        n = e.messages,
        r = e.readOrigin,
        a = e.t,
        i = e.threadId,
        l = e.trusted,
        s = V(t, n),
        u = s.coexV2Reads,
        c = s.coexV2Recipient,
        d = s.regularReads,
        m = E(d),
        p = m[0],
        _ = m[1],
        f = m[2],
        g = m[3],
        h = Array.from(p, function (e) {
          var n = e[0],
            s = e[1];
          return o("WAWebSendReceiptJobCommon").sendAggregateReceipts({
            to: n,
            type: l
              ? R(t)
              : o("WAWebSendReceiptJobCommon").RECEIPT_TYPE.READ_SELF,
            t: a,
            groupedReceipt: s,
            readOrigin: r,
            threadId: o("WAWebBotUtils").isMetaAiBot(t) ? i : void 0,
            maxStsByAuthor: f.get(n),
          });
        }),
        y = Array.from(_, function (e) {
          var t = e[0],
            n = e[1];
          return o("WAWebSendReceiptJobCommon").sendAggregateReceipts({
            to: t,
            type: L(t),
            t: a,
            groupedReceipt: n,
            readOrigin: r,
            maxStsByAuthor: g.get(t),
          });
        });
      (await o("WAWebSendReceiptJobCommon").waitForReceiptSends(
        [].concat(h, y),
      ),
        await H({
          chatId: t,
          coexV2Reads: u,
          coexV2Recipient: c,
          t: a,
          trusted: l,
        }));
    }
    function W(e) {
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
    function q(e) {
      return (
        e.senderWithDevice != null &&
        e.senderWithDevice.equals(
          o("WAWebCoexV2BotWid").COEX_V2_BOT_FBID_WID,
        ) &&
        e.metaFrom != null &&
        !o("WAWebUserUtils").isMeAccount(e.metaFrom)
      );
    }
    function U(e) {
      var t = null;
      for (var n of e) {
        var r = n.serverStoreTimeMicros;
        r != null && (t == null || r > t) && (t = r);
      }
      return t;
    }
    function V(e, t) {
      var n = { coexV2Reads: [], coexV2Recipient: null, regularReads: t };
      if (
        !t.some(q) ||
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
      for (var s of t) q(s) ? i.push(s) : l.push(s);
      return { coexV2Reads: i, coexV2Recipient: a, regularReads: l };
    }
    async function H(e) {
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
              R(t) === o("WAWebSendReceiptJobCommon").RECEIPT_TYPE.READ_SELF,
            maxSts: U(n),
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
    ((l.markChatRead = f),
      (l.markEditedMsgsRead = g),
      (l.prepareChatReadReceiptOrigins = h),
      (l.prepareEditedReadReceiptOrigins = y),
      (l.markStatusRead = C),
      (l.sendAddOnReadReceipts = S),
      (l.getReadReceiptType = R),
      (l.getAgentReadReceiptType = L),
      (l.groupMsgIdsByChatThenSender = E));
  },
  98,
);
