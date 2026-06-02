__d(
  "WAWebSendReadReceiptJob",
  [
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
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = o("WAWebWidFactory").createWid(o("WAJids").STATUS_JID);
    function d(e) {
      return e == null ||
        e <= 0 ||
        !o("WAWebABProps").getABPropConfigValue(
          "web_read_self_watermark_send_store_ts",
        )
        ? null
        : e;
    }
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
    async function p(t, n, a) {
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
      var p = null,
        _ = [];
      for (c; c >= 0; c--) {
        var f = s[c],
          h = t.msgs.get(f.id);
        (h &&
          r("WAWebWid").isPSA(t.id) &&
          o("WAWebWamChatPSALogger").logChatPSARead(h),
          h &&
            o("WAWebQbmMessageReadLogEvent").logQbmMessageRead({
              msg: h,
              chat: t,
              readSource: o("WAWebWamEnumReadSource").READ_SOURCE.CHAT,
            }),
          f.rowId != null && (p == null || f.rowId > p) && (p = f.rowId));
        var y = r("WAWebMsgKey").fromString(f.id);
        if (f.type === o("WAWebMsgType").MSG_TYPE.CIPHERTEXT) {
          o("WAWebHandlePlaceholderWam").postPlaceholderActivityViewEvent([f]);
          continue;
        }
        var C = f.broadcastId || f.from,
          b = f.author || f.from;
        _.push({
          id: y.id,
          sender: o("WAWebWidFactory").createWidFromWidLike(b),
          chat: o("WAWebWidFactory").createWidFromWidLike(C),
          serverStoreTimeMicros: d(f.serverStoreTimeMicros),
        });
      }
      var v = g(_),
        S = v[0],
        R = v[1],
        L = v[2],
        E = v[3];
      return (
        await Promise.all(
          [].concat(
            Array.from(S.keys(), function (e) {
              var n = S.get(e);
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
                    t: i,
                    groupedReceipt: n,
                    threadId: o("WAWebBotUtils").isMetaAiBot(t.id) ? a : void 0,
                    maxStsByAuthor: L.get(e),
                  })
                );
              }
            }),
            Array.from(R.keys(), function (e) {
              var t = R.get(e);
              if (t)
                return o("WAWebSendReceiptJobCommon").sendAggregateReceipts({
                  to: e,
                  type: o("WAWebSendReceiptJobCommon").RECEIPT_TYPE.READ_SELF,
                  t: i,
                  groupedReceipt: t,
                  maxStsByAuthor: E.get(e),
                });
            }),
          ),
        ),
        o("WAWebApiChat").markMessageAndChatAsRead({
          lastReadRowId: p,
          chatId: l,
          keepChatUnread: !1,
          threadId: a,
        })
      );
    }
    async function _(e, t, n) {
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
        l = o("WAWebMsgGetters").getIsGroupStatus(e) || i ? e.id.remote : c,
        d = a.fromMe && !r("justknobx")._("5152"),
        p = (n == null || n.sendReceipt === !0) && !d;
      if (p) {
        var _ = i ? l : r("WANullthrows")(a.participant);
        if (
          (await o("WAWebSendReceiptJobCommon").sendAggregateReceipts({
            to: l,
            type: m(l, i ? void 0 : _),
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
      a.participant && a.participant.isPSA() && (g.statusPSAReadTimestamp = t);
      var h = [babelHelpers.extends({ id: a.toString() }, g)],
        y = o("WAWebLidMigrationUtils").getAlternateMsgKey(a);
      (y && h.push(babelHelpers.extends({ id: y.toString() }, g)),
        await o("WAWebSchemaMessage").getMessageTable().bulkMergeOnly(h));
    }
    async function f(e) {
      var t = String(o("WATimeUtils").unixTime()),
        n = g(
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
    function g(e) {
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
    async function h(e, t, n) {
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
            chat: o("WAWebWidFactory").createWidFromWidLike(e),
            serverStoreTimeMicros: d(t.serverStoreTimeMicros),
          };
        }),
        c = g(u),
        p = c[0],
        _ = c[1],
        f = c[2],
        h = c[3],
        y = p.get(e),
        C = _.get(e),
        b = Date.now().toString();
      if (y) {
        var v;
        (t.trusted
          ? (v = m(e))
          : (v = o("WAWebSendReceiptJobCommon").RECEIPT_TYPE.READ_SELF),
          await o("WAWebSendReceiptJobCommon").sendAggregateReceipts({
            to: e,
            type: v,
            t: b,
            groupedReceipt: y,
            threadId: o("WAWebBotUtils").isMetaAiBot(e) ? n : void 0,
            maxStsByAuthor: f.get(e),
          }));
      }
      C &&
        (await o("WAWebSendReceiptJobCommon").sendAggregateReceipts({
          to: e,
          type: o("WAWebSendReceiptJobCommon").RECEIPT_TYPE.READ_SELF,
          t: b,
          groupedReceipt: C,
          maxStsByAuthor: h.get(e),
        }));
      var S = l.map(function (e) {
          return r("WAWebMsgKey").fromString(e.latestEditMsgKey);
        }),
        R = await o("WAWebApiChat").markEditedMessageAndChatAsRead({
          chatId: e,
          readMsgKeys: S,
          threadId: n,
        });
      return R;
    }
    ((l.getReadReceiptType = m),
      (l.markChatRead = p),
      (l.markStatusRead = _),
      (l.sendAddOnReadReceipts = f),
      (l.groupMsgIdsByChatThenSender = g),
      (l.markEditedMsgsRead = h));
  },
  98,
);
