__d(
  "WAWebFormatMessageHistoryBundleBody",
  [
    "fbt",
    "WALongInt",
    "WAWeb-moment",
    "WAWebContactCollection",
    "WAWebFrontendContactGetters",
    "WAWebGroupHistoryMsgData.flow",
    "WAWebUserPrefsMeUser",
    "err",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    function e(e, t) {
      var n,
        a,
        i = e.groupHistoryBundleMetadata.oldestMessageTimestampInWindow;
      if (i == null)
        throw r("err")(
          "[group-history] oldestMessageTimestampInWindow is null",
        );
      var l = Intl.DateTimeFormat(r("WAWeb-moment").locale(), {
          month: "short",
          day: "numeric",
          year: "numeric",
          hour: "numeric",
          minute: "2-digit",
        }).format(Number(o("WALongInt").longIntToDecimalString(i)) * 1e3),
        c = e.author,
        d = o("WAWebContactCollection").ContactCollection.get(c),
        m = d
          ? o("WAWebFrontendContactGetters").getDisplayName(d)
          : c.toString();
      if (
        t ===
        o("WAWebGroupHistoryMsgData.flow").MessageHistoryBundleProcessState
          .FAILED
      )
        return s._(
          /*BTDS*/ "Failed to download message history that {sender contact name} sent you",
          [s._param("sender contact name", m)],
        );
      if (
        t ===
          o("WAWebGroupHistoryMsgData.flow").MessageHistoryBundleProcessState
            .DOWNLOADING ||
        t ===
          o("WAWebGroupHistoryMsgData.flow").MessageHistoryBundleProcessState
            .PROCESSING
      )
        return s._(
          /*BTDS*/ "Downloading message history that {sender contact name} sent you",
          [s._param("sender contact name", m)],
        );
      var p =
          (n = e.groupHistoryBundleMetadata.historyReceivers) != null ? n : [],
        _ = p.map(function (e) {
          var t = o("WAWebContactCollection").ContactCollection.get(e);
          return t
            ? o("WAWebFrontendContactGetters").getDisplayName(t)
            : e.toString();
        }),
        f = _[0] || "",
        g =
          (a = e.groupHistoryBundleMetadata.nonHistoryReceivers) != null
            ? a
            : [],
        h = u(g);
      if (o("WAWebUserPrefsMeUser").isMeAccount(c)) {
        if (p.length === 1)
          return h != null
            ? s._(
                /*BTDS*/ "You sent {name of the group history receiver} message history that starts on {timestamp}. {name of the non-history receiver} did not receive history",
                [
                  s._param("name of the group history receiver", f),
                  s._param("timestamp", l),
                  s._param("name of the non-history receiver", h),
                ],
              )
            : s._(
                /*BTDS*/ "You sent {name of the group history receiver} message history that starts on {timestamp}",
                [
                  s._param("name of the group history receiver", f),
                  s._param("timestamp", l),
                ],
              );
        if (p.length === 2) {
          var y = _[1] || "";
          return h != null
            ? s._(
                /*BTDS*/ "You sent {name of the group history receiver} and {name of the second group history receiver} message history that starts on {timestamp}. {name of the non-history receiver} did not receive history",
                [
                  s._param("name of the group history receiver", f),
                  s._param("name of the second group history receiver", y),
                  s._param("timestamp", l),
                  s._param("name of the non-history receiver", h),
                ],
              )
            : s._(
                /*BTDS*/ "You sent {name of the group history receiver} and {name of the second group history receiver} message history that starts on {timestamp}",
                [
                  s._param("name of the group history receiver", f),
                  s._param("name of the second group history receiver", y),
                  s._param("timestamp", l),
                ],
              );
        }
        return h != null
          ? s._(
              /*BTDS*/ "You sent {name of the group history receiver} and {number of other group history receivers} others message history that starts on {timestamp}. {name of the non-history receiver} did not receive history",
              [
                s._param("name of the group history receiver", f),
                s._param(
                  "number of other group history receivers",
                  p.length - 1,
                ),
                s._param("timestamp", l),
                s._param("name of the non-history receiver", h),
              ],
            )
          : s._(
              /*BTDS*/ "You sent {name of the group history receiver} and {number of other group history receivers} others message history that starts on {timestamp}",
              [
                s._param("name of the group history receiver", f),
                s._param(
                  "number of other group history receivers",
                  p.length - 1,
                ),
                s._param("timestamp", l),
              ],
            );
      }
      return t ===
        o("WAWebGroupHistoryMsgData.flow").MessageHistoryBundleProcessState
          .INJECTED_PARTIAL
        ? s._(
            /*BTDS*/ "{author name} sent you message history that starts on {timestamp}. Some messages may not be available",
            [s._param("author name", m), s._param("timestamp", l)],
          )
        : s._(
            /*BTDS*/ "{author name} sent you message history that starts on {timestamp}",
            [s._param("author name", m), s._param("timestamp", l)],
          );
    }
    function u(e) {
      if (e.length === 0) return null;
      var t = e[0],
        n = o("WAWebContactCollection").ContactCollection.get(t);
      return n
        ? o("WAWebFrontendContactGetters").getDisplayName(n)
        : t.toString();
    }
    l.formatMessageHistoryBundleBody = e;
  },
  226,
);
