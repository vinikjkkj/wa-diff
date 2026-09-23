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
    function u(t) {
      var n,
        a,
        i = t.groupHistoryBundleMetadata.oldestMessageTimestampInWindow;
      if (i == null) return c();
      var l = Intl.DateTimeFormat(r("WAWeb-moment").locale(), {
          month: "short",
          day: "numeric",
          year: "numeric",
          hour: "numeric",
          minute: "2-digit",
        }).format(Number(o("WALongInt").longIntToDecimalString(i)) * 1e3),
        s = t.author,
        u =
          (n = t.groupHistoryBundleMetadata.historyReceivers) != null ? n : [],
        g = u.map(function (t) {
          var n = o("WAWebContactCollection").ContactCollection.get(t);
          return n ? e(n) : t.toString();
        }),
        h = o("WAWebContactCollection").ContactCollection.get(s),
        y = h ? e(h) : s.toString(),
        C = g[0] || "",
        b =
          (a = t.groupHistoryBundleMetadata.nonHistoryReceivers) != null
            ? a
            : [],
        v = f(b);
      return u.length === 1
        ? v != null
          ? p(y, C, l, v)
          : d(y, C, l)
        : v != null
          ? _(y, C, u.length - 1, l, v)
          : m(y, C, u.length - 1, l);
    }
    function c() {
      return o(
        "WAWebGroupHistoryGating",
      ).isSystemMessageDotClarificationEnabled()
        ? s._(/*BTDS*/ "Message history was sent")
        : s._(/*BTDS*/ "Message history was sent");
    }
    function d(e, t, n) {
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
    function m(e, t, n, r) {
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
    function p(e, t, n, r) {
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
    function _(e, t, n, r, a) {
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
    function f(t) {
      if (t.length === 0) return null;
      var n = t[0],
        r = o("WAWebContactCollection").ContactCollection.get(n);
      return r ? e(r) : n.toString();
    }
    l.formatMessageHistoryNoticeBody = u;
  },
  226,
);
