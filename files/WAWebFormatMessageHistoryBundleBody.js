__d(
  "WAWebFormatMessageHistoryBundleBody",
  [
    "fbt",
    "WALongInt",
    "WAWeb-moment",
    "WAWebContactCollection",
    "WAWebFrontendContactGetters",
    "WAWebGroupHistoryMsgData.flow",
    "WAWebStringQualityGatingUtils",
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
        p = e.author,
        _ = o("WAWebContactCollection").ContactCollection.get(p),
        f = _
          ? o("WAWebFrontendContactGetters").getDisplayName(_)
          : p.toString();
      if (
        t ===
          o("WAWebGroupHistoryMsgData.flow").MessageHistoryBundleProcessState
            .FAILED ||
        t ===
          o("WAWebGroupHistoryMsgData.flow").MessageHistoryBundleProcessState
            .FAILED_NO_RETRY
      )
        return s._(
          /*BTDS*/ "Couldn't download message history that {sender contact name} sent you",
          [s._param("sender contact name", f)],
        );
      if (
        t ===
        o("WAWebGroupHistoryMsgData.flow").MessageHistoryBundleProcessState
          .DEDUPED
      )
        return s._(
          /*BTDS*/ "{sender contact name} also sent you message history, which you already got from someone else",
          [s._param("sender contact name", f)],
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
          [s._param("sender contact name", f)],
        );
      var g =
          (n = e.groupHistoryBundleMetadata.historyReceivers) != null ? n : [],
        h = g.map(function (e) {
          var t = o("WAWebContactCollection").ContactCollection.get(e);
          return t
            ? o("WAWebFrontendContactGetters").getDisplayName(t)
            : e.toString();
        }),
        y = h[0] || "",
        C =
          (a = e.groupHistoryBundleMetadata.nonHistoryReceivers) != null
            ? a
            : [],
        b = m(C);
      if (o("WAWebUserPrefsMeUser").isMeAccount(p)) {
        if (g.length === 1)
          return b != null
            ? u(y, l, b)
            : s._(
                /*BTDS*/ "You sent {name of the group history receiver} message history that starts on {timestamp}",
                [
                  s._param("name of the group history receiver", y),
                  s._param("timestamp", l),
                ],
              );
        if (g.length === 2) {
          var v = h[1] || "";
          return b != null
            ? c(y, v, l, b)
            : s._(
                /*BTDS*/ "You sent {name of the group history receiver} and {name of the second group history receiver} message history that starts on {timestamp}",
                [
                  s._param("name of the group history receiver", y),
                  s._param("name of the second group history receiver", v),
                  s._param("timestamp", l),
                ],
              );
        }
        return b != null
          ? d(y, g.length - 1, l, b)
          : o("WAWebStringQualityGatingUtils").shouldUseStringQualityBatch2()
            ? s._(
                /*BTDS*/ '_j{"*":"You sent {name of the group history receiver} and {number} others message history that starts on {timestamp}","_1":"You sent {name of the group history receiver} and 1 other message history that starts on {timestamp}"}',
                [
                  s._plural(g.length - 1, "number"),
                  s._param("name of the group history receiver", y),
                  s._param("timestamp", l),
                ],
              )
            : s._(
                /*BTDS*/ "You sent {name of the group history receiver} and {number of other group history receivers} others message history that starts on {timestamp}",
                [
                  s._param("name of the group history receiver", y),
                  s._param(
                    "number of other group history receivers",
                    g.length - 1,
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
            [s._param("author name", f), s._param("timestamp", l)],
          )
        : s._(
            /*BTDS*/ "{author name} sent you message history that starts on {timestamp}",
            [s._param("author name", f), s._param("timestamp", l)],
          );
    }
    function u(e, t, n) {
      return o("WAWebStringQualityGatingUtils").shouldUseStringQualityBatch2()
        ? s._(
            /*BTDS*/ "You sent {name of the group history receiver} message history that starts on {timestamp}. {name of the non-history receiver} didn't receive history",
            [
              s._param("name of the group history receiver", e),
              s._param("timestamp", t),
              s._param("name of the non-history receiver", n),
            ],
          )
        : s._(
            /*BTDS*/ "You sent {name of the group history receiver} message history that starts on {timestamp}. {name of the non-history receiver} did not receive history",
            [
              s._param("name of the group history receiver", e),
              s._param("timestamp", t),
              s._param("name of the non-history receiver", n),
            ],
          );
    }
    function c(e, t, n, r) {
      return o("WAWebStringQualityGatingUtils").shouldUseStringQualityBatch2()
        ? s._(
            /*BTDS*/ "You sent {name of the group history receiver} and {name of the second group history receiver} message history that starts on {timestamp}. {name of the non-history receiver} didn't receive history",
            [
              s._param("name of the group history receiver", e),
              s._param("name of the second group history receiver", t),
              s._param("timestamp", n),
              s._param("name of the non-history receiver", r),
            ],
          )
        : s._(
            /*BTDS*/ "You sent {name of the group history receiver} and {name of the second group history receiver} message history that starts on {timestamp}. {name of the non-history receiver} did not receive history",
            [
              s._param("name of the group history receiver", e),
              s._param("name of the second group history receiver", t),
              s._param("timestamp", n),
              s._param("name of the non-history receiver", r),
            ],
          );
    }
    function d(e, t, n, r) {
      return o("WAWebStringQualityGatingUtils").shouldUseStringQualityBatch2()
        ? s._(
            /*BTDS*/ '_j{"*":"You sent {name of the group history receiver} and {number} others message history that starts on {timestamp}. {name of the non-history receiver} didn\'t receive history","_1":"You sent {name of the group history receiver} and 1 other message history that starts on {timestamp}. {name of the non-history receiver} didn\'t receive history"}',
            [
              s._plural(t, "number"),
              s._param("name of the group history receiver", e),
              s._param("timestamp", n),
              s._param("name of the non-history receiver", r),
            ],
          )
        : s._(
            /*BTDS*/ "You sent {name of the group history receiver} and {number of other group history receivers} others message history that starts on {timestamp}. {name of the non-history receiver} did not receive history",
            [
              s._param("name of the group history receiver", e),
              s._param("number of other group history receivers", t),
              s._param("timestamp", n),
              s._param("name of the non-history receiver", r),
            ],
          );
    }
    function m(e) {
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
