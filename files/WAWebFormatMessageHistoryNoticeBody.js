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
    "WAWebL10N",
    "WAWebOrgMemberContactName",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    function e(e, t) {
      if (o("WAWebFrontendContactGetters").getIsMyContact(e))
        return o("WAWebFrontendContactGetters").getFormattedName(e);
      var n = t(e);
      if (n != null) return n;
      var r = o("WAWebContactGetters").getNotifyName(e);
      return r != null
        ? o("WAWebChatContactUtils").getFormattedNotifyName(r).toString()
        : o("WAWebFrontendContactGetters").getFormattedUsernameOrPhone(e);
    }
    function u(e) {
      return c({ author: e.author, metadata: e.groupHistoryBundleMetadata });
    }
    function c(t) {
      var n,
        a,
        i = t.author,
        l = t.getOrgName,
        s =
          l === void 0
            ? o("WAWebOrgMemberContactName").getOrgMemberDisplayName
            : l,
        u = t.metadata,
        c = u == null ? void 0 : u.oldestMessageTimestampInWindow;
      if (u == null || c == null || i == null) return d();
      var h = Intl.DateTimeFormat(r("WAWeb-moment").locale(), {
          month: "short",
          day: "numeric",
          year: "numeric",
          hour: "numeric",
          minute: "2-digit",
        }).format(Number(o("WALongInt").longIntToDecimalString(c)) * 1e3),
        y = (n = u.historyReceivers) != null ? n : [],
        C = y.map(function (t) {
          var n = o("WAWebContactCollection").ContactCollection.get(t);
          return n ? e(n, s) : t.toString();
        }),
        b = o("WAWebContactCollection").ContactCollection.get(i),
        v = b ? e(b, s) : i.toString(),
        S = C[0] || "",
        R = (a = u.nonHistoryReceivers) != null ? a : [],
        L = g(R, s);
      return y.length === 1
        ? L != null
          ? _(v, S, h, L)
          : m(v, S, h)
        : L != null
          ? f(v, S, y.length - 1, h, L)
          : p(v, S, y.length - 1, h);
    }
    function d() {
      return s._(/*BTDS*/ "Message history was sent");
    }
    function m(e, t, n) {
      return s._(
        /*BTDS*/ "{author name} sent {receiver name} message history that starts on {timestamp}",
        [
          s._param("author name", e),
          s._param("receiver name", t),
          s._param("timestamp", n),
        ],
      );
    }
    function p(e, t, n, o) {
      return s._(
        /*BTDS*/ '_j{"*":"{author name} sent {receiver name} and {number} others message history that starts on {timestamp}","_1":"{author name} sent {receiver name} and 1 other message history that starts on {timestamp}"}',
        [
          s._plural(n, "number", r("WAWebL10N").n(n)),
          s._param("author name", e),
          s._param("receiver name", t),
          s._param("timestamp", o),
        ],
      );
    }
    function _(e, t, n, r) {
      return s._(
        /*BTDS*/ "{author name} sent {receiver name} message history that starts on {timestamp}. {name of the non-history receiver} didn't receive history",
        [
          s._param("author name", e),
          s._param("receiver name", t),
          s._param("timestamp", n),
          s._param("name of the non-history receiver", r),
        ],
      );
    }
    function f(e, t, n, o, a) {
      return s._(
        /*BTDS*/ '_j{"*":"{author name} sent {receiver name} and {number} others message history that starts on {timestamp}. {name of the non-history receiver} didn\'t receive history","_1":"{author name} sent {receiver name} and 1 other message history that starts on {timestamp}. {name of the non-history receiver} didn\'t receive history"}',
        [
          s._plural(n, "number", r("WAWebL10N").n(n)),
          s._param("author name", e),
          s._param("receiver name", t),
          s._param("timestamp", o),
          s._param("name of the non-history receiver", a),
        ],
      );
    }
    function g(t, n) {
      if (t.length === 0) return null;
      var r = t[0],
        a = o("WAWebContactCollection").ContactCollection.get(r);
      return a ? e(a, n) : r.toString();
    }
    ((l.formatMessageHistoryNoticeBody = u),
      (l.formatMessageHistoryNoticeBodyFor = c));
  },
  226,
);
