__d(
  "WAWebFormatMessageHistoryNoticeBody",
  [
    "fbt",
    "WALongInt",
    "WAWeb-moment",
    "WAWebChatContactUtils",
    "WAWebContactCollection",
    "WAWebContactGetters",
    "WAWebFrontendContactGetters",
    "WAWebGroupHistoryGating",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    function e(e) {
      if (o("WAWebFrontendContactGetters").getIsMyContact(e))
        return o("WAWebFrontendContactGetters").getFormattedName(e);
      var t = o("WAWebContactGetters").getNotifyName(e);
      return t != null
        ? o("WAWebChatContactUtils").getFormattedNotifyName(t).toString()
        : o("WAWebFrontendContactGetters").getFormattedUsernameOrPhone(e);
    }
    function u(e) {
      return c({ author: e.author, metadata: e.groupHistoryBundleMetadata });
    }
    function c(t) {
      var n,
        a,
        i = t.author,
        l = t.metadata,
        s = l == null ? void 0 : l.oldestMessageTimestampInWindow;
      if (l == null || s == null || i == null) return d();
      var u = Intl.DateTimeFormat(r("WAWeb-moment").locale(), {
          month: "short",
          day: "numeric",
          year: "numeric",
          hour: "numeric",
          minute: "2-digit",
        }).format(Number(o("WALongInt").longIntToDecimalString(s)) * 1e3),
        c = (n = l.historyReceivers) != null ? n : [],
        h = c.map(function (t) {
          var n = o("WAWebContactCollection").ContactCollection.get(t);
          return n ? e(n) : t.toString();
        }),
        y = o("WAWebContactCollection").ContactCollection.get(i),
        C = y ? e(y) : i.toString(),
        b = h[0] || "",
        v = (a = l.nonHistoryReceivers) != null ? a : [],
        S = g(v);
      return c.length === 1
        ? S != null
          ? _(C, b, u, S)
          : m(C, b, u)
        : S != null
          ? f(C, b, c.length - 1, u, S)
          : p(C, b, c.length - 1, u);
    }
    function d() {
      return o(
        "WAWebGroupHistoryGating",
      ).isSystemMessageDotClarificationEnabled()
        ? s._(/*BTDS*/ "Message history was sent")
        : s._(/*BTDS*/ "Message history was sent");
    }
    function m(e, t, n) {
      return o(
        "WAWebGroupHistoryGating",
      ).isSystemMessageDotClarificationEnabled()
        ? s._(
            /*BTDS*/ "{author name} sent {receiver name} message history that starts on {timestamp}",
            [
              s._param("author name", e),
              s._param("receiver name", t),
              s._param("timestamp", n),
            ],
          )
        : s._(
            /*BTDS*/ "{author name} sent {receiver name} message history that starts on {timestamp}",
            [
              s._param("author name", e),
              s._param("receiver name", t),
              s._param("timestamp", n),
            ],
          );
    }
    function p(e, t, n, r) {
      return o(
        "WAWebGroupHistoryGating",
      ).isSystemMessageDotClarificationEnabled()
        ? s._(
            /*BTDS*/ '_j{"*":"{author name} sent {receiver name} and {number} others message history that starts on {timestamp}","_1":"{author name} sent {receiver name} and 1 other message history that starts on {timestamp}"}',
            [
              s._plural(n, "number"),
              s._param("author name", e),
              s._param("receiver name", t),
              s._param("timestamp", r),
            ],
          )
        : s._(
            /*BTDS*/ '_j{"*":"{author name} sent {receiver name} and {number} others message history that starts on {timestamp}","_1":"{author name} sent {receiver name} and 1 other message history that starts on {timestamp}"}',
            [
              s._plural(n, "number"),
              s._param("author name", e),
              s._param("receiver name", t),
              s._param("timestamp", r),
            ],
          );
    }
    function _(e, t, n, r) {
      return o(
        "WAWebGroupHistoryGating",
      ).isSystemMessageDotClarificationEnabled()
        ? s._(
            /*BTDS*/ "{author name} sent {receiver name} message history that starts on {timestamp}. {name of the non-history receiver} didn't receive history",
            [
              s._param("author name", e),
              s._param("receiver name", t),
              s._param("timestamp", n),
              s._param("name of the non-history receiver", r),
            ],
          )
        : s._(
            /*BTDS*/ "{author name} sent {receiver name} message history that starts on {timestamp}. {name of the non-history receiver} didn't receive history",
            [
              s._param("author name", e),
              s._param("receiver name", t),
              s._param("timestamp", n),
              s._param("name of the non-history receiver", r),
            ],
          );
    }
    function f(e, t, n, r, a) {
      return o(
        "WAWebGroupHistoryGating",
      ).isSystemMessageDotClarificationEnabled()
        ? s._(
            /*BTDS*/ '_j{"*":"{author name} sent {receiver name} and {number} others message history that starts on {timestamp}. {name of the non-history receiver} didn\'t receive history","_1":"{author name} sent {receiver name} and 1 other message history that starts on {timestamp}. {name of the non-history receiver} didn\'t receive history"}',
            [
              s._plural(n, "number"),
              s._param("author name", e),
              s._param("receiver name", t),
              s._param("timestamp", r),
              s._param("name of the non-history receiver", a),
            ],
          )
        : s._(
            /*BTDS*/ '_j{"*":"{author name} sent {receiver name} and {number} others message history that starts on {timestamp}. {name of the non-history receiver} didn\'t receive history","_1":"{author name} sent {receiver name} and 1 other message history that starts on {timestamp}. {name of the non-history receiver} didn\'t receive history"}',
            [
              s._plural(n, "number"),
              s._param("author name", e),
              s._param("receiver name", t),
              s._param("timestamp", r),
              s._param("name of the non-history receiver", a),
            ],
          );
    }
    function g(t) {
      if (t.length === 0) return null;
      var n = t[0],
        r = o("WAWebContactCollection").ContactCollection.get(n);
      return r ? e(r) : n.toString();
    }
    ((l.formatMessageHistoryNoticeBody = u),
      (l.formatMessageHistoryNoticeBodyFor = c));
  },
  226,
);
