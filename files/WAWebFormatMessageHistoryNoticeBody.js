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
    "WAWebStringQualityGatingUtils",
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
        p =
          (n = t.groupHistoryBundleMetadata.historyReceivers) != null ? n : [],
        _ = p.map(function (t) {
          var n = o("WAWebContactCollection").ContactCollection.get(t);
          return n ? e(n) : t.toString();
        }),
        f = o("WAWebContactCollection").ContactCollection.get(u),
        g = f ? e(f) : u.toString(),
        h = _[0] || "",
        y =
          (a = t.groupHistoryBundleMetadata.nonHistoryReceivers) != null
            ? a
            : [],
        C = m(y);
      return p.length === 1
        ? C != null
          ? c(g, h, l, C)
          : s._(
              /*BTDS*/ "{author name} sent {receiver name} message history that starts on {timestamp}",
              [
                s._param("author name", g),
                s._param("receiver name", h),
                s._param("timestamp", l),
              ],
            )
        : C != null
          ? d(g, h, p.length - 1, l, C)
          : o("WAWebStringQualityGatingUtils").shouldUseStringQualityBatch2()
            ? s._(
                /*BTDS*/ '_j{"*":"{author name} sent {receiver name} and {number} others message history that starts on {timestamp}","_1":"{author name} sent {receiver name} and 1 other message history that starts on {timestamp}"}',
                [
                  s._plural(p.length - 1, "number"),
                  s._param("author name", g),
                  s._param("receiver name", h),
                  s._param("timestamp", l),
                ],
              )
            : s._(
                /*BTDS*/ "{author name} sent {receiver name} and {other count} others message history that starts on {timestamp}",
                [
                  s._param("author name", g),
                  s._param("receiver name", h),
                  s._param("other count", p.length - 1),
                  s._param("timestamp", l),
                ],
              );
    }
    function c(e, t, n, r) {
      return o("WAWebStringQualityGatingUtils").shouldUseStringQualityBatch2()
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
            /*BTDS*/ "{author name} sent {receiver name} message history that starts on {timestamp}. {name of the non-history receiver} did not receive history",
            [
              s._param("author name", e),
              s._param("receiver name", t),
              s._param("timestamp", n),
              s._param("name of the non-history receiver", r),
            ],
          );
    }
    function d(e, t, n, r, a) {
      return o("WAWebStringQualityGatingUtils").shouldUseStringQualityBatch2()
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
            /*BTDS*/ "{author name} sent {receiver name} and {other count} others message history that starts on {timestamp}. {name of the non-history receiver} did not receive history",
            [
              s._param("author name", e),
              s._param("receiver name", t),
              s._param("other count", n),
              s._param("timestamp", r),
              s._param("name of the non-history receiver", a),
            ],
          );
    }
    function m(t) {
      if (t.length === 0) return null;
      var n = t[0],
        r = o("WAWebContactCollection").ContactCollection.get(n);
      return r ? e(r) : n.toString();
    }
    l.formatMessageHistoryNoticeBody = u;
  },
  226,
);
