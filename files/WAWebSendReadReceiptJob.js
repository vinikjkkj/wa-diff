__d(
  "WAWebSendReadReceiptJob",
  [
    "Promise",
    "WAJids",
    "WALogger",
    "WATimeUtils",
    "WAWebABProps",
    "WAWebAck",
    "WAWebApiChat",
    "WAWebBotUtils",
    "WAWebCoexV2BotWid",
    "WAWebCoexV2GatingUtils",
    "WAWebCoexV2ReceiptRecipient",
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
      return e == null ||
        e <= 0 ||
        !o("WAWebABProps").getABPropConfigValue(
          "web_read_self_watermark_send_store_ts",
        )
        ? null
        : e;
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
    function g(e, t, n) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, a) {
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
            g = [];
          for (d; d >= 0; d--) {
            var h = u[d],
              y = e.msgs.get(h.id);
            (y &&
              r("WAWebWid").isPSA(e.id) &&
              o("WAWebWamChatPSALogger").logChatPSARead(y),
              y &&
                o("WAWebQbmMessageReadLogEvent").logQbmMessageRead({
                  msg: y,
                  chat: e,
                  readSource: o("WAWebWamEnumReadSource").READ_SOURCE.CHAT,
                }),
              h.rowId != null && (p == null || h.rowId > p) && (p = h.rowId));
            var C = r("WAWebMsgKey").fromString(h.id);
            if (h.type === o("WAWebMsgType").MSG_TYPE.CIPHERTEXT) {
              o("WAWebHandlePlaceholderWam").postPlaceholderActivityViewEvent([
                h,
              ]);
              continue;
            }
            if (h.type !== o("WAWebMsgType").MSG_TYPE.CALL_LOG) {
              var b = h.broadcastId || h.from,
                v = h.author || h.from;
              g.push({
                id: C.id,
                sender: o("WAWebWidFactory").createWidFromWidLike(v),
                senderWithDevice:
                  h.senderWithDevice != null
                    ? o("WAWebWidFactory").createWidFromWidLike(
                        h.senderWithDevice,
                      )
                    : null,
                metaFrom:
                  h.metaFrom != null
                    ? o("WAWebWidFactory").createWidFromWidLike(h.metaFrom)
                    : null,
                chat: o("WAWebWidFactory").createWidFromWidLike(b),
                serverStoreTimeMicros: _(h.serverStoreTimeMicros),
              });
            }
          }
          var R = I(e.id, g),
            L = R.coexV2Reads,
            E = R.coexV2Recipient,
            k = R.regularReads,
            D = S(k),
            x = D[0],
            $ = D[1],
            P = D[2],
            N = D[3];
          return (
            yield (m || (m = n("Promise"))).all(
              [].concat(
                Array.from(x.keys(), function (t) {
                  var n = x.get(t);
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
                        type: o("WAWebSendReceiptJobCommon").RECEIPT_TYPE
                          .READ_SELF,
                        t: i,
                        groupedReceipt: t,
                        maxStsByAuthor: N.get(e),
                      },
                    );
                }),
              ),
            ),
            yield T({
              chatId: e.id,
              coexV2Reads: L,
              coexV2Recipient: E,
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
        h.apply(this, arguments)
      );
    }
    function y(e, t, n) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
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
        C.apply(this, arguments)
      );
    }
    function b(e) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = String(o("WATimeUtils").unixTime()),
            r = S(
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
        v.apply(this, arguments)
      );
    }
    function S(e) {
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
    function R(e, t, n) {
      return L.apply(this, arguments);
    }
    function L() {
      return (
        (L = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
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
              };
            }),
            c = I(e, u),
            d = c.coexV2Reads,
            m = c.coexV2Recipient,
            p = c.regularReads,
            g = S(p),
            h = g[0],
            y = g[1],
            C = g[2],
            b = g[3],
            v = h.get(e),
            R = y.get(e),
            L = Date.now().toString();
          if (v) {
            var E;
            (t.trusted
              ? (E = f(e))
              : (E = o("WAWebSendReceiptJobCommon").RECEIPT_TYPE.READ_SELF),
              yield o("WAWebSendReceiptJobCommon").sendAggregateReceipts({
                to: e,
                type: E,
                t: L,
                groupedReceipt: v,
                threadId: o("WAWebBotUtils").isMetaAiBot(e) ? n : void 0,
                maxStsByAuthor: C.get(e),
              }));
          }
          (R &&
            (yield o("WAWebSendReceiptJobCommon").sendAggregateReceipts({
              to: e,
              type: o("WAWebSendReceiptJobCommon").RECEIPT_TYPE.READ_SELF,
              t: L,
              groupedReceipt: R,
              maxStsByAuthor: b.get(e),
            })),
            yield T({
              chatId: e,
              coexV2Reads: d,
              coexV2Recipient: m,
              t: L,
              trusted: t.trusted,
            }));
          var k = l.map(function (e) {
              return r("WAWebMsgKey").fromString(e.latestEditMsgKey);
            }),
            D = yield o("WAWebApiChat").markEditedMessageAndChatAsRead({
              chatId: e,
              readMsgKeys: k,
              threadId: n,
            });
          return D;
        })),
        L.apply(this, arguments)
      );
    }
    function E(e) {
      return (
        e.senderWithDevice != null &&
        e.senderWithDevice.equals(
          o("WAWebCoexV2BotWid").COEX_V2_BOT_FBID_WID,
        ) &&
        e.metaFrom != null &&
        !o("WAWebUserPrefsMeUser").isMeAccount(e.metaFrom)
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
    function I(t, n) {
      var a = { coexV2Reads: [], coexV2Recipient: null, regularReads: n };
      if (
        !n.some(E) ||
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
      for (var u of n) E(u) ? l.push(u) : s.push(u);
      return { coexV2Reads: l, coexV2Recipient: i, regularReads: s };
    }
    function T(e) {
      return D.apply(this, arguments);
    }
    function D() {
      return (
        (D = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.chatId,
            n = e.coexV2Reads,
            a = e.coexV2Recipient,
            i = e.t,
            l = e.trusted;
          if (!(a == null || n.length === 0))
            try {
              yield o("WAWebSendReceiptJobCommon").sendCoexV2ReadReceipt({
                externalIds: n.map(function (e) {
                  return e.id;
                }),
                isReadSelf:
                  !l ||
                  f(t) ===
                    o("WAWebSendReceiptJobCommon").RECEIPT_TYPE.READ_SELF,
                maxSts: k(n),
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
        D.apply(this, arguments)
      );
    }
    ((l.getReadReceiptType = f),
      (l.markChatRead = g),
      (l.markStatusRead = y),
      (l.sendAddOnReadReceipts = b),
      (l.groupMsgIdsByChatThenSender = S),
      (l.markEditedMsgsRead = R));
  },
  98,
);
