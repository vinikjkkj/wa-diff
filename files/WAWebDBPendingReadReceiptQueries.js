__d(
  "WAWebDBPendingReadReceiptQueries",
  [
    "WAWebDBMessageUtils",
    "WAWebDBMsgUtils",
    "WAWebMsgType",
    "WAWebSchemaMessage",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e, t, n, r) {
      var a = await e.equals(["from", "pendingReadReceipt"], [t, n], {
        shouldDecrypt: !1,
      });
      return a.filter(function (e) {
        return n === o("WAWebDBMsgUtils").PendingReadReceiptType.Message &&
          e.type === o("WAWebMsgType").MSG_TYPE.UNKNOWN
          ? !1
          : r == null
            ? !0
            : o("WAWebDBMessageUtils").messageHasThreadId(e, r);
      });
    }
    function s(t, n, r) {
      return e(t, n, o("WAWebDBMsgUtils").PendingReadReceiptType.Message, r);
    }
    function u(e, t) {
      return s(o("WAWebSchemaMessage").getMessageTable(), e, t);
    }
    function c(t, n, r) {
      return e(
        t,
        n,
        o("WAWebDBMsgUtils").PendingReadReceiptType.MessageEdit,
        r,
      );
    }
    function d(e, t) {
      return c(o("WAWebSchemaMessage").getMessageTable(), e, t);
    }
    async function m(e, t, n) {
      var r,
        o,
        a,
        i = n.size;
      if (i === 0) return null;
      var l = await e.get(t);
      if (l == null) return null;
      var s = l.unreadCount,
        u = Math.max(s - i, 0),
        c = (r = l.unreadDividerOffset) != null ? r : 0,
        d = c + i,
        m = (o = l.unreadMentionsOfMe) != null ? o : [],
        p = m.filter(function (e) {
          return !n.has(e.id);
        }),
        _ = m.length - p.length,
        f = (a = l.unreadMentionCount) != null ? a : 0,
        g = Math.max(f - _, 0);
      return (
        await e.merge(t, {
          id: t,
          unreadCount: u,
          unreadDividerOffset: d,
          unreadMentionsOfMe: p,
          unreadMentionCount: g,
        }),
        {
          unreadCount: u,
          unreadDividerOffset: d,
          unreadMentionCount: g,
          markedAsReadCount: i,
        }
      );
    }
    ((l.queryPendingReadReceiptMsgRowsWithTable = s),
      (l.queryPendingReadReceiptMsgRows = u),
      (l.queryUnreadEditedMsgRowsWithTable = c),
      (l.queryUnreadEditedMsgRows = d),
      (l.updateChatUnreadCountForReadMessages = m));
  },
  98,
);
