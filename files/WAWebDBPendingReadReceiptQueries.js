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
              if (!(a == null || l.has(a.id) || !m(a, n, e))) {
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
    function c(e, t, n) {
      var r,
        a = o(
          "WAWebDBReadReceiptOriginBindings",
        ).getCurrentPendingReadReceiptOrigin(e);
      return t && a != null
        ? {
            pendingReadReceiptOrigin: babelHelpers.extends({}, a, {
              locallyRead: !0,
              locallyReadAtMs: (r = a.locallyReadAtMs) != null ? r : n,
            }),
          }
        : { pendingReadReceipt: null, pendingReadReceiptOrigin: null };
    }
    function d(e) {
      return o("WAWebModelStorageUtils")
        .getStorage()
        .lock(["message"], async function (t) {
          var n = t[0],
            r = await n.bulkGet(
              e.map(function (e) {
                return e.id;
              }),
              !1,
            ),
            a = [];
          (r.forEach(function (t, n) {
            var r;
            t != null &&
              ((r = o(
                "WAWebDBReadReceiptOriginBindings",
              ).getCurrentPendingReadReceiptOrigin(t)) == null
                ? void 0
                : r.locallyRead) === !0 &&
              o(
                "WAWebDBReadReceiptOriginBindings",
              ).isPendingReadReceiptTargetUnchanged(t, e[n]) &&
              a.push({
                id: t.id,
                pendingReadReceipt: null,
                pendingReadReceiptOrigin: null,
              });
          }),
            a.length > 0 && (await n.bulkMergeOnly(a)));
        });
    }
    function m(e, t, n) {
      return e.from !== t || e.pendingReadReceipt !== n.pendingType
        ? !1
        : n.pendingType ===
            o("WAWebDBMsgUtils").PendingReadReceiptType.MessageEdit
          ? e.latestEditMsgKey != null &&
            e.latestEditMsgKey === n.latestEditMsgKey
          : !s.has(e.type);
    }
    async function p(e) {
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
    function _(e, t, n) {
      return p({
        MessageTable: e,
        chatId: t,
        pendingReadReceiptType:
          o("WAWebDBMsgUtils").PendingReadReceiptType.Message,
        threadId: n,
      });
    }
    function f(e, t) {
      return _(o("WAWebSchemaMessage").getMessageTable(), e, t);
    }
    function g(e, t, n) {
      return p({
        MessageTable: e,
        chatId: t,
        pendingReadReceiptType:
          o("WAWebDBMsgUtils").PendingReadReceiptType.MessageEdit,
        threadId: n,
      });
    }
    function h(e, t) {
      return g(o("WAWebSchemaMessage").getMessageTable(), e, t);
    }
    async function y(e, t, n) {
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
    ((l.getCarriedPendingReadReceiptOrigin = o(
      "WAWebDBReadReceiptOriginBindings",
    ).getCarriedPendingReadReceiptOrigin),
      (l.getCurrentPendingReadReceiptOrigin = o(
        "WAWebDBReadReceiptOriginBindings",
      ).getCurrentPendingReadReceiptOrigin),
      (l.isPendingReadReceiptTargetUnchanged = o(
        "WAWebDBReadReceiptOriginBindings",
      ).isPendingReadReceiptTargetUnchanged),
      (l.claimPendingReadReceiptOrigins = u),
      (l.getLocallyReadPendingReceiptUpdate = c),
      (l.clearSentPendingReadReceipts = d),
      (l.queryPendingReadReceiptMsgRowsWithTable = _),
      (l.queryPendingReadReceiptMsgRows = f),
      (l.queryUnreadEditedMsgRowsWithTable = g),
      (l.queryUnreadEditedMsgRows = h),
      (l.updateChatUnreadCountForReadMessages = y));
  },
  98,
);
