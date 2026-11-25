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
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    function e(e) {
      if (o("WAWebFrontendContactGetters").getIsMyContact(e))
        return o("WAWebFrontendContactGetters").getFormattedName(e);
      var t = o("WAWebFrontendContactGetters").getShownMemberName(e);
      if (t != null) return t;
      var n = o("WAWebContactGetters").getNotifyName(e);
      return n != null
        ? o("WAWebChatContactUtils").getFormattedNotifyName(n).toString()
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
          : p({
              authorName: C,
              firstReceiverName: b,
              otherReceiverCount: c.length - 1,
              timestampString: u,
            });
    }
    function d() {
      return s._(/*BTDS*/ "");
    }
    function m(e, t, n) {
      return s._(/*BTDS*/ "", [
        s._param("author name", e),
        s._param("receiver name", t),
        s._param("timestamp", n),
      ]);
    }
    function p(e) {
      var t = e.authorName,
        n = e.firstReceiverName,
        o = e.otherReceiverCount,
        a = e.timestampString;
      return s._(/*BTDS*/ "", [
        s._plural(o, "number", r("WAWebL10N").n(o)),
        s._param("author name", t),
        s._param("receiver name", n),
        s._param("timestamp", a),
      ]);
    }
    function _(e, t, n, r) {
      return s._(/*BTDS*/ "", [
        s._param("author name", e),
        s._param("receiver name", t),
        s._param("timestamp", n),
        s._param("name of the non-history receiver", r),
      ]);
    }
    function f(e, t, n, o, a) {
      return s._(/*BTDS*/ "", [
        s._plural(n, "number", r("WAWebL10N").n(n)),
        s._param("author name", e),
        s._param("receiver name", t),
        s._param("timestamp", o),
        s._param("name of the non-history receiver", a),
      ]);
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
