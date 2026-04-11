__d(
  "WAWebSendReadReceiptJob",
  [
    "Promise",
    "WAJids",
    "WALogger",
    "WANullthrows",
    "WATimeUtils",
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
    "WAWebSchemaMessage",
    "WAWebSendReceiptJobCommon",
    "WAWebUserPrefsGeneral",
    "WAWebUserPrefsMeUser",
    "WAWebWamChatPSALogger",
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
    function m(e, t) {
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
    function p(e, t, n) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, a, i) {
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
            p = u.length - 1;
          if (d) {
            for (p; p >= 0 && u[p].id !== d; p--);
            p < 0 && (p = u.length - 1);
          }
          var _ = null,
            f = [];
          for (p; p >= 0; p--) {
            var g = u[p],
              h = t.msgs.get(g.id);
            (h &&
              r("WAWebWid").isPSA(t.id) &&
              o("WAWebWamChatPSALogger").logChatPSARead(h),
              g.rowId != null && (_ == null || g.rowId > _) && (_ = g.rowId));
            var y = r("WAWebMsgKey").fromString(g.id);
            if (g.type === o("WAWebMsgType").MSG_TYPE.CIPHERTEXT) {
              o("WAWebHandlePlaceholderWam").postPlaceholderActivityViewEvent([
                g,
              ]);
              continue;
            }
            var b = g.broadcastId || g.from,
              v = g.author || g.from;
            f.push({
              id: y.id,
              sender: o("WAWebWidFactory").createWidFromWidLike(v),
              chat: o("WAWebWidFactory").createWidFromWidLike(b),
            });
          }
          var S = C(f),
            R = S[0],
            L = S[1];
          return (
            yield (c || (c = n("Promise"))).all(
              [].concat(
                Array.from(R.keys(), function (e) {
                  var n = R.get(e);
                  if (n) {
                    var r;
                    return (
                      t.trusted
                        ? (r = m(t.id))
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
                      })
                    );
                  }
                }),
                Array.from(L.keys(), function (e) {
                  var t = L.get(e);
                  if (t)
                    return o("WAWebSendReceiptJobCommon").sendAggregateReceipts(
                      {
                        to: e,
                        type: o("WAWebSendReceiptJobCommon").RECEIPT_TYPE
                          .READ_SELF,
                        t: l,
                        groupedReceipt: t,
                      },
                    );
                }),
              ),
            ),
            o("WAWebApiChat").markMessageAndChatAsRead({
              lastReadRowId: _,
              chatId: s,
              keepChatUnread: !1,
              threadId: i,
            })
          );
        })),
        _.apply(this, arguments)
      );
    }
    function f(e, t, n) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
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
            p = (n == null || n.sendReceipt === !0) && !c;
          if (p) {
            var _ = i ? l : r("WANullthrows")(a.participant);
            if (
              (yield o("WAWebSendReceiptJobCommon").sendAggregateReceipts({
                to: l,
                type: m(l, i ? void 0 : _),
                t: String(t),
                receiptClass: i ? "status" : void 0,
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
        g.apply(this, arguments)
      );
    }
    function h(e) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = String(o("WATimeUtils").unixTime()),
            r = C(
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
        y.apply(this, arguments)
      );
    }
    function C(e) {
      var t = new Map(),
        n = new Map();
      return (
        e.forEach(function (e) {
          var r,
            o,
            a = e.chat,
            i = e.id,
            l = e.sender,
            s = !a.isBot() && l.isBot(),
            u = s ? n : t,
            c = (r = u.get(a)) != null ? r : new Map(),
            d = (o = c.get(l)) != null ? o : [];
          (d.push(i), c.set(l, d), u.set(a, c));
        }),
        [t, n]
      );
    }
    function b(e, t, n) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
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
              };
            }),
            c = C(u),
            d = c[0],
            p = c[1],
            _ = d.get(e),
            f = p.get(e),
            g = Date.now().toString();
          if (_) {
            var h;
            (t.trusted
              ? (h = m(e))
              : (h = o("WAWebSendReceiptJobCommon").RECEIPT_TYPE.READ_SELF),
              yield o("WAWebSendReceiptJobCommon").sendAggregateReceipts({
                to: e,
                type: h,
                t: g,
                groupedReceipt: _,
                threadId: o("WAWebBotUtils").isMetaAiBot(e) ? n : void 0,
              }));
          }
          f &&
            (yield o("WAWebSendReceiptJobCommon").sendAggregateReceipts({
              to: e,
              type: o("WAWebSendReceiptJobCommon").RECEIPT_TYPE.READ_SELF,
              t: g,
              groupedReceipt: f,
            }));
          var y = l.map(function (e) {
              return r("WAWebMsgKey").fromString(e.latestEditMsgKey);
            }),
            b = yield o("WAWebApiChat").markEditedMessageAndChatAsRead({
              chatId: e,
              readMsgKeys: y,
              threadId: n,
            });
          return b;
        })),
        v.apply(this, arguments)
      );
    }
    ((l.getReadReceiptType = m),
      (l.markChatRead = p),
      (l.markStatusRead = f),
      (l.sendAddOnReadReceipts = h),
      (l.groupMsgIdsByChatThenSender = C),
      (l.markEditedMsgsRead = b));
  },
  98,
);
