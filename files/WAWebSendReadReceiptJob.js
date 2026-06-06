__d(
  "WAWebSendReadReceiptJob",
  [
    "Promise",
    "WAJids",
    "WALogger",
    "WANullthrows",
    "WATimeUtils",
    "WAWebABProps",
    "WAWebAck",
    "WAWebApiChat",
    "WAWebBotUtils",
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
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d = o("WAWebWidFactory").createWid(o("WAJids").STATUS_JID);
    function m(e) {
      return e == null ||
        e <= 0 ||
        !o("WAWebABProps").getABPropConfigValue(
          "web_read_self_watermark_send_store_ts",
        )
        ? null
        : e;
    }
    function p(e, t) {
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
    function _(e, t, n) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, a, i) {
          o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose(["markChatRead"])),
          );
          var l = Date.now().toString(),
            s = String(t.id),
            u = yield o(
              "WAWebDBPendingReadReceiptQueries",
            ).queryPendingReadReceiptMsgRows(s, i);
          u.sort(function (e, t) {
            var n = e.rowId || 0,
              r = t.rowId || 0;
            return n - r;
          });
          var d = a ? String(a) : null,
            _ = u.length - 1;
          if (d) {
            for (_; _ >= 0 && u[_].id !== d; _--);
            _ < 0 && (_ = u.length - 1);
          }
          var f = null,
            g = [];
          for (_; _ >= 0; _--) {
            var h = u[_],
              y = t.msgs.get(h.id);
            (y &&
              r("WAWebWid").isPSA(t.id) &&
              o("WAWebWamChatPSALogger").logChatPSARead(y),
              y &&
                o("WAWebQbmMessageReadLogEvent").logQbmMessageRead({
                  msg: y,
                  chat: t,
                  readSource: o("WAWebWamEnumReadSource").READ_SOURCE.CHAT,
                }),
              h.rowId != null && (f == null || h.rowId > f) && (f = h.rowId));
            var C = r("WAWebMsgKey").fromString(h.id);
            if (h.type === o("WAWebMsgType").MSG_TYPE.CIPHERTEXT) {
              o("WAWebHandlePlaceholderWam").postPlaceholderActivityViewEvent([
                h,
              ]);
              continue;
            }
            if (h.type !== o("WAWebMsgType").MSG_TYPE.CALL_LOG) {
              var v = h.broadcastId || h.from,
                S = h.author || h.from;
              g.push({
                id: C.id,
                sender: o("WAWebWidFactory").createWidFromWidLike(S),
                chat: o("WAWebWidFactory").createWidFromWidLike(v),
                serverStoreTimeMicros: m(h.serverStoreTimeMicros),
              });
            }
          }
          var R = b(g),
            L = R[0],
            E = R[1],
            k = R[2],
            I = R[3];
          return (
            yield (c || (c = n("Promise"))).all(
              [].concat(
                Array.from(L.keys(), function (e) {
                  var n = L.get(e);
                  if (n) {
                    var r;
                    return (
                      t.trusted
                        ? (r = p(t.id))
                        : (r = o("WAWebSendReceiptJobCommon").RECEIPT_TYPE
                            .READ_SELF),
                      o("WAWebSendReceiptJobCommon").sendAggregateReceipts({
                        to: e,
                        type: r,
                        t: l,
                        groupedReceipt: n,
                        threadId: o("WAWebBotUtils").isMetaAiBot(t.id)
                          ? i
                          : void 0,
                        maxStsByAuthor: k.get(e),
                      })
                    );
                  }
                }),
                Array.from(E.keys(), function (e) {
                  var t = E.get(e);
                  if (t)
                    return o("WAWebSendReceiptJobCommon").sendAggregateReceipts(
                      {
                        to: e,
                        type: o("WAWebSendReceiptJobCommon").RECEIPT_TYPE
                          .READ_SELF,
                        t: l,
                        groupedReceipt: t,
                        maxStsByAuthor: I.get(e),
                      },
                    );
                }),
              ),
            ),
            o("WAWebApiChat").markMessageAndChatAsRead({
              lastReadRowId: f,
              chatId: s,
              keepChatUnread: !1,
              threadId: i,
            })
          );
        })),
        f.apply(this, arguments)
      );
    }
    function g(e, t, n) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
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
            l = o("WAWebMsgGetters").getIsGroupStatus(e) || i ? e.id.remote : d,
            c = a.fromMe && !r("justknobx")._("5152"),
            m = (n == null || n.sendReceipt === !0) && !c;
          if (m) {
            var _ = i ? l : r("WANullthrows")(a.participant);
            if (
              (yield o("WAWebSendReceiptJobCommon").sendAggregateReceipts({
                to: l,
                type: p(l, i ? void 0 : _),
                t: String(t),
                receiptClass: i ? "status" : void 0,
                isStatusReceipt: !0,
                groupedReceipt: new Map([[_, [a.id]]]),
              }),
              i)
            ) {
              var f = e.serverId;
              f != null &&
                o("WAWebNewsletterStatusViewReceiptUtils")
                  .sendNewsletterStatusViewReceipt(l, a, f)
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
        h.apply(this, arguments)
      );
    }
    function y(e) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = String(o("WATimeUtils").unixTime()),
            r = b(
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
          yield (c || (c = n("Promise"))).all(
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
        C.apply(this, arguments)
      );
    }
    function b(e) {
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
    function v(e, t, n) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
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
                chat: o("WAWebWidFactory").createWidFromWidLike(e),
                serverStoreTimeMicros: m(t.serverStoreTimeMicros),
              };
            }),
            c = b(u),
            d = c[0],
            _ = c[1],
            f = c[2],
            g = c[3],
            h = d.get(e),
            y = _.get(e),
            C = Date.now().toString();
          if (h) {
            var v;
            (t.trusted
              ? (v = p(e))
              : (v = o("WAWebSendReceiptJobCommon").RECEIPT_TYPE.READ_SELF),
              yield o("WAWebSendReceiptJobCommon").sendAggregateReceipts({
                to: e,
                type: v,
                t: C,
                groupedReceipt: h,
                threadId: o("WAWebBotUtils").isMetaAiBot(e) ? n : void 0,
                maxStsByAuthor: f.get(e),
              }));
          }
          y &&
            (yield o("WAWebSendReceiptJobCommon").sendAggregateReceipts({
              to: e,
              type: o("WAWebSendReceiptJobCommon").RECEIPT_TYPE.READ_SELF,
              t: C,
              groupedReceipt: y,
              maxStsByAuthor: g.get(e),
            }));
          var S = l.map(function (e) {
              return r("WAWebMsgKey").fromString(e.latestEditMsgKey);
            }),
            R = yield o("WAWebApiChat").markEditedMessageAndChatAsRead({
              chatId: e,
              readMsgKeys: S,
              threadId: n,
            });
          return R;
        })),
        S.apply(this, arguments)
      );
    }
    ((l.getReadReceiptType = p),
      (l.markChatRead = _),
      (l.markStatusRead = g),
      (l.sendAddOnReadReceipts = y),
      (l.groupMsgIdsByChatThenSender = b),
      (l.markEditedMsgsRead = v));
  },
  98,
);
