__d(
  "WAWebFormatMessageHistoryBundleBody",
  [
    "fbt",
    "WALongInt",
    "WAWeb-moment",
    "WAWebContactCollection",
    "WAWebFrontendContactGetters",
    "WAWebGroupHistoryGating",
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
        s = e.author,
        v = o("WAWebContactCollection").ContactCollection.get(s),
        S = v
          ? o("WAWebFrontendContactGetters").getDisplayName(v)
          : s.toString();
      if (
        t ===
          o("WAWebGroupHistoryMsgData.flow").MessageHistoryBundleProcessState
            .FAILED ||
        t ===
          o("WAWebGroupHistoryMsgData.flow").MessageHistoryBundleProcessState
            .FAILED_NO_RETRY
      )
        return u(S);
      if (
        t ===
        o("WAWebGroupHistoryMsgData.flow").MessageHistoryBundleProcessState
          .DEDUPED
      )
        return c(S);
      if (
        t ===
          o("WAWebGroupHistoryMsgData.flow").MessageHistoryBundleProcessState
            .DOWNLOADING ||
        t ===
          o("WAWebGroupHistoryMsgData.flow").MessageHistoryBundleProcessState
            .PROCESSING
      )
        return d(S);
      var R =
          (n = e.groupHistoryBundleMetadata.historyReceivers) != null ? n : [],
        L = R.map(function (e) {
          var t = o("WAWebContactCollection").ContactCollection.get(e);
          return t
            ? o("WAWebFrontendContactGetters").getDisplayName(t)
            : e.toString();
        }),
        E = L[0] || "",
        k =
          (a = e.groupHistoryBundleMetadata.nonHistoryReceivers) != null
            ? a
            : [],
        I = b(k);
      if (o("WAWebUserPrefsMeUser").isMeAccount(s)) {
        if (R.length === 1) return I != null ? h(E, l, I) : m(E, l);
        if (R.length === 2) {
          var T = L[1] || "";
          return I != null ? y(E, T, l, I) : p(E, T, l);
        }
        return I != null ? C(E, R.length - 1, l, I) : _(E, R.length - 1, l);
      }
      return t ===
        o("WAWebGroupHistoryMsgData.flow").MessageHistoryBundleProcessState
          .INJECTED_PARTIAL
        ? f(S, l)
        : g(S, l);
    }
    function u(e) {
      return o(
        "WAWebGroupHistoryGating",
      ).isSystemMessageDotClarificationEnabled()
        ? s._(
            /*BTDS*/ "Couldn't download message history that {sender contact name} sent you",
            [s._param("sender contact name", e)],
          )
        : s._(
            /*BTDS*/ "Couldn't download message history that {sender contact name} sent you",
            [s._param("sender contact name", e)],
          );
    }
    function c(e) {
      return o(
        "WAWebGroupHistoryGating",
      ).isSystemMessageDotClarificationEnabled()
        ? s._(
            /*BTDS*/ "{sender contact name} also sent you message history, which you already got from someone else",
            [s._param("sender contact name", e)],
          )
        : s._(
            /*BTDS*/ "{sender contact name} also sent you message history, which you already got from someone else",
            [s._param("sender contact name", e)],
          );
    }
    function d(e) {
      return o(
        "WAWebGroupHistoryGating",
      ).isSystemMessageDotClarificationEnabled()
        ? s._(
            /*BTDS*/ "Downloading message history that {sender contact name} sent you",
            [s._param("sender contact name", e)],
          )
        : s._(
            /*BTDS*/ "Downloading message history that {sender contact name} sent you",
            [s._param("sender contact name", e)],
          );
    }
    function m(e, t) {
      return o(
        "WAWebGroupHistoryGating",
      ).isSystemMessageDotClarificationEnabled()
        ? s._(
            /*BTDS*/ "You sent {name of the group history receiver} message history that starts on {timestamp}",
            [
              s._param("name of the group history receiver", e),
              s._param("timestamp", t),
            ],
          )
        : s._(
            /*BTDS*/ "You sent {name of the group history receiver} message history that starts on {timestamp}",
            [
              s._param("name of the group history receiver", e),
              s._param("timestamp", t),
            ],
          );
    }
    function p(e, t, n) {
      return o(
        "WAWebGroupHistoryGating",
      ).isSystemMessageDotClarificationEnabled()
        ? s._(
            /*BTDS*/ "You sent {name of the group history receiver} and {name of the second group history receiver} message history that starts on {timestamp}",
            [
              s._param("name of the group history receiver", e),
              s._param("name of the second group history receiver", t),
              s._param("timestamp", n),
            ],
          )
        : s._(
            /*BTDS*/ "You sent {name of the group history receiver} and {name of the second group history receiver} message history that starts on {timestamp}",
            [
              s._param("name of the group history receiver", e),
              s._param("name of the second group history receiver", t),
              s._param("timestamp", n),
            ],
          );
    }
    function _(e, t, n) {
      return o(
        "WAWebGroupHistoryGating",
      ).isSystemMessageDotClarificationEnabled()
        ? s._(
            /*BTDS*/ '_j{"*":"You sent {name of the group history receiver} and {number} others message history that starts on {timestamp}","_1":"You sent {name of the group history receiver} and 1 other message history that starts on {timestamp}"}',
            [
              s._plural(t, "number"),
              s._param("name of the group history receiver", e),
              s._param("timestamp", n),
            ],
          )
        : s._(
            /*BTDS*/ '_j{"*":"You sent {name of the group history receiver} and {number} others message history that starts on {timestamp}","_1":"You sent {name of the group history receiver} and 1 other message history that starts on {timestamp}"}',
            [
              s._plural(t, "number"),
              s._param("name of the group history receiver", e),
              s._param("timestamp", n),
            ],
          );
    }
    function f(e, t) {
      return o(
        "WAWebGroupHistoryGating",
      ).isSystemMessageDotClarificationEnabled()
        ? s._(
            /*BTDS*/ "{author name} sent you message history that starts on {timestamp}. Some messages may not be available",
            [s._param("author name", e), s._param("timestamp", t)],
          )
        : s._(
            /*BTDS*/ "{author name} sent you message history that starts on {timestamp}. Some messages may not be available",
            [s._param("author name", e), s._param("timestamp", t)],
          );
    }
    function g(e, t) {
      return o(
        "WAWebGroupHistoryGating",
      ).isSystemMessageDotClarificationEnabled()
        ? s._(
            /*BTDS*/ "{author name} sent you message history that starts on {timestamp}",
            [s._param("author name", e), s._param("timestamp", t)],
          )
        : s._(
            /*BTDS*/ "{author name} sent you message history that starts on {timestamp}",
            [s._param("author name", e), s._param("timestamp", t)],
          );
    }
    function h(e, t, n) {
      return o(
        "WAWebGroupHistoryGating",
      ).isSystemMessageDotClarificationEnabled()
        ? s._(
            /*BTDS*/ "You sent {name of the group history receiver} message history that starts on {timestamp}. {name of the non-history receiver} didn't receive history",
            [
              s._param("name of the group history receiver", e),
              s._param("timestamp", t),
              s._param("name of the non-history receiver", n),
            ],
          )
        : s._(
            /*BTDS*/ "You sent {name of the group history receiver} message history that starts on {timestamp}. {name of the non-history receiver} didn't receive history",
            [
              s._param("name of the group history receiver", e),
              s._param("timestamp", t),
              s._param("name of the non-history receiver", n),
            ],
          );
    }
    function y(e, t, n, r) {
      return o(
        "WAWebGroupHistoryGating",
      ).isSystemMessageDotClarificationEnabled()
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
            /*BTDS*/ "You sent {name of the group history receiver} and {name of the second group history receiver} message history that starts on {timestamp}. {name of the non-history receiver} didn't receive history",
            [
              s._param("name of the group history receiver", e),
              s._param("name of the second group history receiver", t),
              s._param("timestamp", n),
              s._param("name of the non-history receiver", r),
            ],
          );
    }
    function C(e, t, n, r) {
      return o(
        "WAWebGroupHistoryGating",
      ).isSystemMessageDotClarificationEnabled()
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
            /*BTDS*/ '_j{"*":"You sent {name of the group history receiver} and {number} others message history that starts on {timestamp}. {name of the non-history receiver} didn\'t receive history","_1":"You sent {name of the group history receiver} and 1 other message history that starts on {timestamp}. {name of the non-history receiver} didn\'t receive history"}',
            [
              s._plural(t, "number"),
              s._param("name of the group history receiver", e),
              s._param("timestamp", n),
              s._param("name of the non-history receiver", r),
            ],
          );
    }
    function b(e) {
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
