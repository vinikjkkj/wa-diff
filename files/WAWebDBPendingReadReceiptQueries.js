__d(
  "WAWebDBPendingReadReceiptQueries",
  [
    "WALogger",
    "WAWebDBMessageUtils",
    "WAWebDBMsgUtils",
    "WAWebDBReadReceiptOriginBindings",
    "WAWebModelStorageUtils",
    "WAWebMsgType",
    "WAWebSchemaMessage",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = new Set([
        o("WAWebMsgType").MSG_TYPE.UNKNOWN,
        o("WAWebMsgType").MSG_TYPE.CIPHERTEXT,
        o("WAWebMsgType").MSG_TYPE.CALL_LOG,
      ]);
    function u(t) {
      var n = t.chatId,
        r = t.origin,
        a = t.targets;
      return o("WAWebModelStorageUtils")
        .getStorage()
        .lock(["message"], async function (t) {
          var i = t[0],
            l = new Map();
          if (a.length === 0) return l;
          var s = await i.bulkGet(
              a.map(function (e) {
                return e.msgId;
              }),
              !1,
            ),
            u = [];
          return (
            a.forEach(function (e, t) {
              var a = s[t];
              if (!(a == null || l.has(a.id) || !d(a, n, e))) {
                var i = o(
                  "WAWebDBReadReceiptOriginBindings",
                ).getCurrentPendingReadReceiptOrigin(a);
                if (i != null) {
                  l.set(a.id, i.origin);
                  return;
                }
                (l.set(a.id, r),
                  u.push({
                    id: a.id,
                    pendingReadReceiptOrigin: {
                      origin: r,
                      pendingType: e.pendingType,
                      latestEditMsgKey: o(
                        "WAWebDBReadReceiptOriginBindings",
                      ).getBoundLatestEditMsgKey(a),
                    },
                  }));
              }
            }),
            u.length > 0 &&
              (o("WALogger").LOG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "claimPendingReadReceiptOrigins: ",
                    " new claims, origin: ",
                    "",
                  ])),
                u.length,
                r != null ? r : "unknown",
              ),
              await i.bulkMergeOnly(u)),
            l
          );
        });
    }
    function c(e) {
      return s.has(e.type);
    }
    function d(e, t, n) {
      return e.from !== t || e.pendingReadReceipt !== n.pendingType
        ? !1
        : n.pendingType ===
            o("WAWebDBMsgUtils").PendingReadReceiptType.MessageEdit
          ? e.latestEditMsgKey != null &&
            e.latestEditMsgKey === n.latestEditMsgKey
          : !c(e);
    }
    async function m(e) {
      var t = e.MessageTable,
        n = e.chatId,
        r = e.pendingReadReceiptType,
        a = e.threadId,
        i = await t.equals(["from", "pendingReadReceipt"], [n, r], {
          shouldDecrypt: !1,
        });
      return i.filter(function (e) {
        return r === o("WAWebDBMsgUtils").PendingReadReceiptType.Message &&
          e.type === o("WAWebMsgType").MSG_TYPE.UNKNOWN
          ? !1
          : a == null
            ? !0
            : o("WAWebDBMessageUtils").messageHasThreadId(e, a);
      });
    }
    function p(e, t, n) {
      return m({
        MessageTable: e,
        chatId: t,
        pendingReadReceiptType:
          o("WAWebDBMsgUtils").PendingReadReceiptType.Message,
        threadId: n,
      });
    }
    function _(e, t) {
      return p(o("WAWebSchemaMessage").getMessageTable(), e, t);
    }
    function f(e, t, n) {
      return m({
        MessageTable: e,
        chatId: t,
        pendingReadReceiptType:
          o("WAWebDBMsgUtils").PendingReadReceiptType.MessageEdit,
        threadId: n,
      });
    }
    function g(e, t) {
      return f(o("WAWebSchemaMessage").getMessageTable(), e, t);
    }
    async function h(e, t, n, r) {
      var o, a, i;
      r === void 0 && (r = n);
      var l = n.size;
      if (l === 0 && r.size === 0) return null;
      var s = await e.get(t);
      if (s == null) return null;
      var u = s.unreadCount,
        c = Math.max(u - l, 0),
        d = (o = s.unreadDividerOffset) != null ? o : 0,
        m = d + l,
        p = (a = s.unreadMentionsOfMe) != null ? a : [],
        _ = p.filter(function (e) {
          return !r.has(e.id);
        }),
        f = p.length - _.length,
        g = (i = s.unreadMentionCount) != null ? i : 0,
        h = Math.max(g - f, 0);
      return (
        await e.merge(t, {
          id: t,
          unreadCount: c,
          unreadDividerOffset: m,
          unreadMentionsOfMe: _,
          unreadMentionCount: h,
        }),
        {
          unreadCount: c,
          unreadDividerOffset: m,
          unreadMentionCount: h,
          markedAsReadCount: l,
        }
      );
    }
    ((l.getCurrentPendingReadReceiptOrigin = o(
      "WAWebDBReadReceiptOriginBindings",
    ).getCurrentPendingReadReceiptOrigin),
      (l.isPendingReadReceiptTargetUnchanged = o(
        "WAWebDBReadReceiptOriginBindings",
      ).isPendingReadReceiptTargetUnchanged),
      (l.claimPendingReadReceiptOrigins = u),
      (l.isUnreceiptedMessageRow = c),
      (l.queryPendingReadReceiptMsgRowsWithTable = p),
      (l.queryPendingReadReceiptMsgRows = _),
      (l.queryUnreadEditedMsgRowsWithTable = f),
      (l.queryUnreadEditedMsgRows = g),
      (l.updateChatUnreadCountForReadMessages = h));
  },
  98,
);
