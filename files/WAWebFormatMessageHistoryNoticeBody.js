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
      if (i == null) return s._(/*BTDS*/ "Message history was sent");
      var l = Intl.DateTimeFormat(r("WAWeb-moment").locale(), {
          month: "short",
          day: "numeric",
          year: "numeric",
          hour: "numeric",
          minute: "2-digit",
        }).format(Number(o("WALongInt").longIntToDecimalString(i)) * 1e3),
        u = t.author,
        d =
          (n = t.groupHistoryBundleMetadata.historyReceivers) != null ? n : [],
        m = d.map(function (t) {
          var n = o("WAWebContactCollection").ContactCollection.get(t);
          return n ? e(n) : t.toString();
        }),
        p = o("WAWebContactCollection").ContactCollection.get(u),
        _ = p ? e(p) : u.toString(),
        f = m[0] || "",
        g =
          (a = t.groupHistoryBundleMetadata.nonHistoryReceivers) != null
            ? a
            : [],
        h = c(g);
      return d.length === 1
        ? h != null
          ? s._(
              /*BTDS*/ "{author name} sent {receiver name} message history that starts on {timestamp}. {name of the non-history receiver} did not receive history",
              [
                s._param("author name", _),
                s._param("receiver name", f),
                s._param("timestamp", l),
                s._param("name of the non-history receiver", h),
              ],
            )
          : s._(
              /*BTDS*/ "{author name} sent {receiver name} message history that starts on {timestamp}",
              [
                s._param("author name", _),
                s._param("receiver name", f),
                s._param("timestamp", l),
              ],
            )
        : h != null
          ? s._(
              /*BTDS*/ "{author name} sent {receiver name} and {other count} others message history that starts on {timestamp}. {name of the non-history receiver} did not receive history",
              [
                s._param("author name", _),
                s._param("receiver name", f),
                s._param("other count", d.length - 1),
                s._param("timestamp", l),
                s._param("name of the non-history receiver", h),
              ],
            )
          : s._(
              /*BTDS*/ "{author name} sent {receiver name} and {other count} others message history that starts on {timestamp}",
              [
                s._param("author name", _),
                s._param("receiver name", f),
                s._param("other count", d.length - 1),
                s._param("timestamp", l),
              ],
            );
    }
    function c(t) {
      if (t.length === 0) return null;
      var n = t[0],
        r = o("WAWebContactCollection").ContactCollection.get(n);
      return r ? e(r) : n.toString();
    }
    l.formatMessageHistoryNoticeBody = u;
  },
  226,
);
