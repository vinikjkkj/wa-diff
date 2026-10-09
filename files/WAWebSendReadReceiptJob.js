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
    "WAWebUserPrefsGeneral",
    "WAWebUserPrefsMeUser",
    "WAWebWamChatPSALogger",
    "WAWebWamEnumReadSource",
    "WAWebWid",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "justknobx",
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
    function y(e, t, n) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, a) {
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
          var p = null,
            y = [];
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
              C.rowId != null && (p == null || C.rowId > p) && (p = C.rowId));
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
              y.push({
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
                serverStoreTimeMicros: _(C.serverStoreTimeMicros),
                botEditType: C.botEditType,
              });
            }
          }
          var E = D(
              e.id,
              y.filter(function (e) {
                return !h(e);
              }),
            ),
            k = E.coexV2Reads,
            I = E.coexV2Recipient,
            T = E.regularReads,
            $ = L(T),
            P = $[0],
            N = $[1],
            M = $[2],
            w = $[3];
          return (
            yield (m || (m = n("Promise"))).all(
              [].concat(
                Array.from(P.keys(), function (t) {
                  var n = P.get(t);
                  if (n) {
                    var r;
                    return (
                      e.trusted
                        ? (r = f(e.id))
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
                        maxStsByAuthor: M.get(t),
                      })
                    );
                  }
                }),
                Array.from(N.keys(), function (e) {
                  var t = N.get(e);
                  if (t)
                    return o("WAWebSendReceiptJobCommon").sendAggregateReceipts(
                      {
                        to: e,
                        type: g(e),
                        t: i,
                        groupedReceipt: t,
                        maxStsByAuthor: w.get(e),
                      },
                    );
                }),
              ),
            ),
            yield x({
              chatId: e.id,
              coexV2Reads: k,
              coexV2Recipient: I,
              t: i,
              trusted: e.trusted,
            }),
            o("WAWebApiChat").markMessageAndChatAsRead({
              lastReadRowId: p,
              chatId: l,
              keepChatUnread: !1,
              threadId: a,
            })
          );
        })),
        C.apply(this, arguments)
      );
    }
    function b(e, t, n) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
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
            l = o("WAWebMsgGetters").getIsGroupStatus(e) || i ? e.id.remote : p,
            s = a.fromMe && !r("justknobx")._("5152"),
            d = (n == null || n.sendReceipt === !0) && !s;
          if (d) {
            var m = i ? l : r("nullthrows")(a.participant);
            if (
              (yield o("WAWebSendReceiptJobCommon").sendAggregateReceipts({
                to: l,
                type: f(l, i ? void 0 : m),
                t: String(t),
                receiptClass: i ? "status" : void 0,
                isStatusReceipt: !0,
                groupedReceipt: new Map([[m, [a.id]]]),
              }),
              i)
            ) {
              var _ = e.serverId;
              _ != null &&
                o("WAWebNewsletterStatusViewReceiptUtils")
                  .sendNewsletterStatusViewReceipt(l, a, _)
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
          }
          var g = { ack: o("WAWebAck").ACK.READ };
          a.participant &&
            a.participant.isPSA() &&
            (g.statusPSAReadTimestamp = t);
          var h = [babelHelpers.extends({ id: a.toString() }, g)],
            y = o("WAWebLidMigrationUtils").getAlternateMsgKey(a);
          (y && h.push(babelHelpers.extends({ id: y.toString() }, g)),
            yield o("WAWebSchemaMessage").getMessageTable().bulkMergeOnly(h));
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
          var t = String(o("WATimeUtils").unixTime()),
            r = L(
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
          yield (m || (m = n("Promise"))).all(
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
        R.apply(this, arguments)
      );
    }
    function L(e) {
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
    function E(e, t, n) {
      return k.apply(this, arguments);
    }
    function k() {
      return (
        (k = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
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
                serverStoreTimeMicros: _(t.serverStoreTimeMicros),
                botEditType: t.botEditType,
              };
            }),
            c = D(
              e,
              u.filter(function (e) {
                return !h(e);
              }),
            ),
            d = c.coexV2Reads,
            m = c.coexV2Recipient,
            p = c.regularReads,
            y = L(p),
            C = y[0],
            b = y[1],
            v = y[2],
            S = y[3],
            R = C.get(e),
            E = b.get(e),
            k = Date.now().toString();
          if (R) {
            var I;
            (t.trusted
              ? (I = f(e))
              : (I = o("WAWebSendReceiptJobCommon").RECEIPT_TYPE.READ_SELF),
              yield o("WAWebSendReceiptJobCommon").sendAggregateReceipts({
                to: e,
                type: I,
                t: k,
                groupedReceipt: R,
                threadId: o("WAWebBotUtils").isMetaAiBot(e) ? n : void 0,
                maxStsByAuthor: v.get(e),
              }));
          }
          (E &&
            (yield o("WAWebSendReceiptJobCommon").sendAggregateReceipts({
              to: e,
              type: g(e),
              t: k,
              groupedReceipt: E,
              maxStsByAuthor: S.get(e),
            })),
            yield x({
              chatId: e,
              coexV2Reads: d,
              coexV2Recipient: m,
              t: k,
              trusted: t.trusted,
            }));
          var T = l.map(function (e) {
              return r("WAWebMsgKey").fromString(e.latestEditMsgKey);
            }),
            $ = yield o("WAWebApiChat").markEditedMessageAndChatAsRead({
              chatId: e,
              readMsgKeys: T,
              threadId: n,
            });
          return $;
        })),
        k.apply(this, arguments)
      );
    }
    function I(e) {
      return (
        e.senderWithDevice != null &&
        e.senderWithDevice.equals(
          o("WAWebCoexV2BotWid").COEX_V2_BOT_FBID_WID,
        ) &&
        e.metaFrom != null &&
        !o("WAWebUserPrefsMeUser").isMeAccount(e.metaFrom)
      );
    }
    function T(e) {
      var t = null;
      for (var n of e) {
        var r = n.serverStoreTimeMicros;
        r != null && (t == null || r > t) && (t = r);
      }
      return t;
    }
    function D(t, n) {
      var a = { coexV2Reads: [], coexV2Recipient: null, regularReads: n };
      if (
        !n.some(I) ||
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
      for (var u of n) I(u) ? l.push(u) : s.push(u);
      return { coexV2Reads: l, coexV2Recipient: i, regularReads: s };
    }
    function x(e) {
      return $.apply(this, arguments);
    }
    function $() {
      return (
        ($ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
                  f(t) ===
                    o("WAWebSendReceiptJobCommon").RECEIPT_TYPE.READ_SELF,
                maxSts: T(n),
                recipient: a,
                t: i,
              });
            } catch (e) {
              o("WALogger")
                .WARN(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "[coexv2] failed to send read receipt",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("coexv2-read-receipt-error");
            }
        })),
        $.apply(this, arguments)
      );
    }
    ((l.getReadReceiptType = f),
      (l.getAgentReadReceiptType = g),
      (l.markChatRead = y),
      (l.markStatusRead = b),
      (l.sendAddOnReadReceipts = S),
      (l.groupMsgIdsByChatThenSender = L),
      (l.markEditedMsgsRead = E));
  },
  98,
);
