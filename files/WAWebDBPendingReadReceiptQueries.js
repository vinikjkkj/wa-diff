__d(
  "WAWebDBPendingReadReceiptQueries",
  [
    "WAWebDBMessageUtils",
    "WAWebDBMsgUtils",
    "WAWebMsgType",
    "WAWebSchemaMessage",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.MessageTable,
            n = e.chatId,
            r = e.pendingReadReceiptType,
            a = e.threadId,
            i = yield t.equals(["from", "pendingReadReceipt"], [n, r], {
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
        })),
        s.apply(this, arguments)
      );
    }
    function u(t, n, r) {
      return e({
        MessageTable: t,
        chatId: n,
        pendingReadReceiptType:
          o("WAWebDBMsgUtils").PendingReadReceiptType.Message,
        threadId: r,
      });
    }
    function c(e, t) {
      return u(o("WAWebSchemaMessage").getMessageTable(), e, t);
    }
    function d(t, n, r) {
      return e({
        MessageTable: t,
        chatId: n,
        pendingReadReceiptType:
          o("WAWebDBMsgUtils").PendingReadReceiptType.MessageEdit,
        threadId: r,
      });
    }
    function m(e, t) {
      return d(o("WAWebSchemaMessage").getMessageTable(), e, t);
    }
    function p(e, t, n) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r,
            o,
            a,
            i = n.size;
          if (i === 0) return null;
          var l = yield e.get(t);
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
            yield e.merge(t, {
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
        })),
        _.apply(this, arguments)
      );
    }
    ((l.queryPendingReadReceiptMsgRowsWithTable = u),
      (l.queryPendingReadReceiptMsgRows = c),
      (l.queryUnreadEditedMsgRowsWithTable = d),
      (l.queryUnreadEditedMsgRows = m),
      (l.updateChatUnreadCountForReadMessages = p));
  },
  98,
);
