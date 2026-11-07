__d(
  "WAWebSendReadReceiptJob",
  [
    "Promise",
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
    "WAWebUserPrefsMeUser",
    "WAWebWamChatPSALogger",
    "WAWebWamEnumReadSource",
    "WAWebWid",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
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
      p,
      _ = o("WAWebWidFactory").createWid(o("WAJids").STATUS_JID);
    function f(e) {
      return e == null || e <= 0 ? null : e;
    }
    function g(e, t) {
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
    function h(e) {
      return e.isGroup() &&
        o("WAWebUserPrefsGeneral").getUserPrivacySettings().readReceipts !==
          o("WAWebPrivacySettings").ALL_NONE.none &&
        o("WAWebBotGroupGatingUtils").isStandardBotProfileGroupEnabled()
        ? o("WAWebSendReceiptJobCommon").RECEIPT_TYPE.READ
        : o("WAWebSendReceiptJobCommon").RECEIPT_TYPE.READ_SELF;
    }
    function y(e) {
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
    function C(e, t, n) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, a) {
          o("WALogger").LOG(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose(["markChatRead"])),
          );
          var i = Date.now().toString(),
            l = String(e.id),
            u = yield o(
              "WAWebDBPendingReadReceiptQueries",
            ).queryPendingReadReceiptMsgRows(l, a);
          u.sort(function (e, t) {
            var n = e.rowId || 0,
              r = t.rowId || 0;
            return n - r;
          });
          var c = t ? String(t) : null,
            d = u.length - 1;
          if (c) {
            for (d; d >= 0 && u[d].id !== c; d--);
            d < 0 && (d = u.length - 1);
          }
          var m = null,
            _ = [];
          for (d; d >= 0; d--) {
            var C = u[d],
              b = e.msgs.get(C.id);
            (b &&
              r("WAWebWid").isPSA(e.id) &&
              o("WAWebWamChatPSALogger").logChatPSARead(b),
              b &&
                o("WAWebQbmMessageReadLogEvent").logQbmMessageRead({
                  msg: b,
                  chat: e,
                  readSource: o("WAWebWamEnumReadSource").READ_SOURCE.CHAT,
                }),
              C.rowId != null && (m == null || C.rowId > m) && (m = C.rowId));
            var v = r("WAWebMsgKey").fromString(C.id);
            if (C.type === o("WAWebMsgType").MSG_TYPE.CIPHERTEXT) {
              o("WAWebHandlePlaceholderWam").postPlaceholderActivityViewEvent([
                C,
              ]);
              continue;
            }
            if (C.type !== o("WAWebMsgType").MSG_TYPE.CALL_LOG) {
              var S = C.broadcastId || C.from,
                R = C.author || C.from;
              _.push({
                id: v.id,
                sender: o("WAWebWidFactory").createWidFromWidLike(R),
                senderWithDevice:
                  C.senderWithDevice != null
                    ? o("WAWebWidFactory").createWidFromWidLike(
                        C.senderWithDevice,
                      )
                    : null,
                metaFrom:
                  C.metaFrom != null
                    ? o("WAWebWidFactory").createWidFromWidLike(C.metaFrom)
                    : null,
                chat: o("WAWebWidFactory").createWidFromWidLike(S),
                serverStoreTimeMicros: f(C.serverStoreTimeMicros),
                botEditType: C.botEditType,
              });
            }
          }
          var L = M(
              e.id,
              _.filter(function (e) {
                return !y(e);
              }),
            ),
            E = L.coexV2Reads,
            k = L.coexV2Recipient,
            I = L.regularReads,
            T = D(I),
            x = T[0],
            $ = T[1],
            P = T[2],
            N = T[3];
          return (
            yield (p || (p = n("Promise"))).all(
              [].concat(
                Array.from(x.keys(), function (t) {
                  var n = x.get(t);
                  if (n) {
                    var r;
                    return (
                      e.trusted
                        ? (r = g(e.id))
                        : (r = o("WAWebSendReceiptJobCommon").RECEIPT_TYPE
                            .READ_SELF),
                      o("WAWebSendReceiptJobCommon").sendAggregateReceipts({
                        to: t,
                        type: r,
                        t: i,
                        groupedReceipt: n,
                        threadId: o("WAWebBotUtils").isMetaAiBot(e.id)
                          ? a
                          : void 0,
                        maxStsByAuthor: P.get(t),
                      })
                    );
                  }
                }),
                Array.from($.keys(), function (e) {
                  var t = $.get(e);
                  if (t)
                    return o("WAWebSendReceiptJobCommon").sendAggregateReceipts(
                      {
                        to: e,
                        type: h(e),
                        t: i,
                        groupedReceipt: t,
                        maxStsByAuthor: N.get(e),
                      },
                    );
                }),
              ),
            ),
            yield w({
              chatId: e.id,
              coexV2Reads: E,
              coexV2Recipient: k,
              t: i,
              trusted: e.trusted,
            }),
            o("WAWebApiChat").markMessageAndChatAsRead({
              lastReadRowId: m,
              chatId: l,
              keepChatUnread: !1,
              threadId: a,
            })
          );
        })),
        b.apply(this, arguments)
      );
    }
    function v(e, t, n) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var a = e.id;
          if (!o("WAWebMsgGetters").getIsStatus(e)) {
            o("WALogger").WARN(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "markStatusRead: message is not a status.",
                ])),
            );
            return;
          }
          var i = o("WAWebMsgGetters").getIsNewsletterStatus(e),
            l = o("WAWebMsgGetters").getIsGroupStatus(e) || i ? e.id.remote : _,
            s = a.fromMe && !R(l),
            d = (n == null || n.sendReceipt === !0) && !s;
          if (d) {
            var m = i ? l : r("nullthrows")(a.participant);
            if (
              (yield o("WAWebSendReceiptJobCommon").sendAggregateReceipts({
                to: l,
                type: a.fromMe
                  ? o("WAWebSendReceiptJobCommon").RECEIPT_TYPE.READ_SELF
                  : g(l, i ? void 0 : m),
                t: String(t),
                receiptClass: i ? "status" : void 0,
                isStatusReceipt: !0,
                groupedReceipt: new Map([[m, [a.id]]]),
              }),
              i)
            ) {
              var p = e.serverId;
              p != null &&
                o("WAWebNewsletterStatusViewReceiptUtils")
                  .sendNewsletterStatusViewReceipt(l, a, p)
                  .catch(function (e) {
                    o("WALogger")
                      .WARN(
                        c ||
                          (c = babelHelpers.taggedTemplateLiteralLoose([
                            "[newsletter][status] view receipt send failed",
                          ])),
                      )
                      .sendLogs("newsletter-status-view-receipt-fail");
                  });
            }
          } else L(e) && (yield E(a, t));
          var f = { ack: o("WAWebAck").ACK.READ };
          a.participant &&
            a.participant.isPSA() &&
            (f.statusPSAReadTimestamp = t);
          var h = [babelHelpers.extends({ id: a.toString() }, f)],
            y = o("WAWebLidMigrationUtils").getAlternateMsgKey(a);
          (y && h.push(babelHelpers.extends({ id: y.toString() }, f)),
            yield o("WAWebSchemaMessage").getMessageTable().bulkMergeOnly(h));
        })),
        S.apply(this, arguments)
      );
    }
    function R(e) {
      return (
        e.isStatus() &&
        o("WAWebStatusGatingUtils").isStatusCompanionReadSyncEnabled()
      );
    }
    function L(e) {
      return (
        !e.id.fromMe &&
        e.id.participant != null &&
        o("WAWebMsgGetters").getIsGroupStatus(e) &&
        o("WAWebStatusGatingUtils").isStatusCompanionReadSyncEnabled()
      );
    }
    function E(e, t) {
      return k.apply(this, arguments);
    }
    function k() {
      return (
        (k = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          try {
            yield o("WAWebSendReceiptJobCommon").sendAggregateReceipts({
              to: e.remote,
              type: o("WAWebSendReceiptJobCommon").RECEIPT_TYPE.READ_SELF,
              t: String(t),
              isStatusReceipt: !0,
              groupedReceipt: new Map([
                [r("nullthrows")(e.participant), [e.id]],
              ]),
            });
          } catch (e) {
            o("WALogger")
              .WARN(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "markStatusRead: group status read-self failed",
                  ])),
              )
              .catching(r("getErrorSafe")(e))
              .sendLogs("status-group-read-self-fail");
          }
        })),
        k.apply(this, arguments)
      );
    }
    function I(e) {
      return T.apply(this, arguments);
    }
    function T() {
      return (
        (T = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = String(o("WATimeUtils").unixTime()),
            r = D(
              e
                .filter(function (e) {
                  return !o("WAWebUserPrefsMeUser").isSerializedWidMe(e.sender);
                })
                .map(function (e) {
                  return {
                    chat: e.msgKey.remote,
                    sender: o("WAWebWidFactory").createWidFromWidLike(e.sender),
                    id: e.msgKey.id,
                  };
                }),
            ),
            a = r[0];
          yield (p || (p = n("Promise"))).all(
            Array.from(a.keys(), function (e) {
              var n = a.get(e);
              if (n)
                return o("WAWebSendReceiptJobCommon").sendAggregateReceipts({
                  to: e,
                  type: o("WAWebSendReceiptJobCommon").RECEIPT_TYPE.READ_SELF,
                  t: t,
                  groupedReceipt: n,
                });
            }),
          );
        })),
        T.apply(this, arguments)
      );
    }
    function D(e) {
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
    function x(e, t, n) {
      return $.apply(this, arguments);
    }
    function $() {
      return (
        ($ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var a = String(e),
            i = o("WAWebBotUtils").isMetaAiBot(e),
            l = yield o(
              "WAWebDBPendingReadReceiptQueries",
            ).queryUnreadEditedMsgRows(a, i ? n : void 0);
          if (!l.length) return { fullyReadThreadIds: [] };
          var s = new Set(),
            u = l.map(function (t) {
              var a = r("WAWebMsgKey").fromString(t.latestEditMsgKey),
                i = t.author || t.from;
              if (n == null)
                for (var l of o("WAWebDBMessageUtils").getThreadIdsFromMessage(
                  t,
                ))
                  s.add(l.toString());
              else s.add(n.toString());
              return {
                id: a.id,
                sender: o("WAWebWidFactory").createWidFromWidLike(i),
                senderWithDevice:
                  t.senderWithDevice != null
                    ? o("WAWebWidFactory").createWidFromWidLike(
                        t.senderWithDevice,
                      )
                    : null,
                metaFrom:
                  t.metaFrom != null
                    ? o("WAWebWidFactory").createWidFromWidLike(t.metaFrom)
                    : null,
                chat: o("WAWebWidFactory").createWidFromWidLike(e),
                serverStoreTimeMicros: f(t.serverStoreTimeMicros),
                botEditType: t.botEditType,
              };
            }),
            c = M(
              e,
              u.filter(function (e) {
                return !y(e);
              }),
            ),
            d = c.coexV2Reads,
            m = c.coexV2Recipient,
            p = c.regularReads,
            _ = D(p),
            C = _[0],
            b = _[1],
            v = _[2],
            S = _[3],
            R = C.get(e),
            L = b.get(e),
            E = Date.now().toString();
          if (R) {
            var k;
            (t.trusted
              ? (k = g(e))
              : (k = o("WAWebSendReceiptJobCommon").RECEIPT_TYPE.READ_SELF),
              yield o("WAWebSendReceiptJobCommon").sendAggregateReceipts({
                to: e,
                type: k,
                t: E,
                groupedReceipt: R,
                threadId: o("WAWebBotUtils").isMetaAiBot(e) ? n : void 0,
                maxStsByAuthor: v.get(e),
              }));
          }
          (L &&
            (yield o("WAWebSendReceiptJobCommon").sendAggregateReceipts({
              to: e,
              type: h(e),
              t: E,
              groupedReceipt: L,
              maxStsByAuthor: S.get(e),
            })),
            yield w({
              chatId: e,
              coexV2Reads: d,
              coexV2Recipient: m,
              t: E,
              trusted: t.trusted,
            }));
          var I = l.map(function (e) {
              return r("WAWebMsgKey").fromString(e.latestEditMsgKey);
            }),
            T = yield o("WAWebApiChat").markEditedMessageAndChatAsRead({
              chatId: e,
              readMsgKeys: I,
              threadId: n,
            });
          return T;
        })),
        $.apply(this, arguments)
      );
    }
    function P(e) {
      return (
        e.senderWithDevice != null &&
        e.senderWithDevice.equals(
          o("WAWebCoexV2BotWid").COEX_V2_BOT_FBID_WID,
        ) &&
        e.metaFrom != null &&
        !o("WAWebUserPrefsMeUser").isMeAccount(e.metaFrom)
      );
    }
    function N(e) {
      var t = null;
      for (var n of e) {
        var r = n.serverStoreTimeMicros;
        r != null && (t == null || r > t) && (t = r);
      }
      return t;
    }
    function M(t, n) {
      var a = { coexV2Reads: [], coexV2Recipient: null, regularReads: n };
      if (
        !n.some(P) ||
        !t.isUser() ||
        t.isBot() ||
        o("WAWebUserPrefsMeUser").isSerializedWidMe(String(t)) ||
        !o("WAWebCoexV2GatingUtils").isCoexV2RecvEnabled()
      )
        return a;
      var i;
      try {
        i = r("nullthrows")(
          o("WAWebCoexV2ReceiptRecipient").toCoexV2ReceiptRecipient(t),
        );
      } catch (t) {
        return (
          o("WALogger")
            .WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[coexv2] no represented LID for the read receipt",
                ])),
            )
            .catching(r("getErrorSafe")(t))
            .sendLogs("coexv2-read-receipt-lid-unresolved"),
          a
        );
      }
      var l = [],
        s = [];
      for (var u of n) P(u) ? l.push(u) : s.push(u);
      return { coexV2Reads: l, coexV2Recipient: i, regularReads: s };
    }
    function w(e) {
      return A.apply(this, arguments);
    }
    function A() {
      return (
        (A = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.chatId,
            n = e.coexV2Reads,
            a = e.coexV2Recipient,
            i = e.t,
            l = e.trusted;
          if (!(a == null || n.length === 0))
            try {
              yield o("WAWebCoexV2SendReceipt").sendCoexV2ReadReceipt({
                externalIds: n.map(function (e) {
                  return e.id;
                }),
                isReadSelf:
                  !l ||
                  g(t) ===
                    o("WAWebSendReceiptJobCommon").RECEIPT_TYPE.READ_SELF,
                maxSts: N(n),
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
        })),
        A.apply(this, arguments)
      );
    }
    ((l.getReadReceiptType = g),
      (l.getAgentReadReceiptType = h),
      (l.markChatRead = C),
      (l.markStatusRead = v),
      (l.sendAddOnReadReceipts = I),
      (l.groupMsgIdsByChatThenSender = D),
      (l.markEditedMsgsRead = x));
  },
  98,
);
