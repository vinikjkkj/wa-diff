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
      return u({ author: e.author, metadata: e.groupHistoryBundleMetadata }, t);
    }
    function u(e, t) {
      var n,
        a,
        i,
        l = e.author,
        s = e.metadata,
        u = s == null ? void 0 : s.oldestMessageTimestampInWindow;
      if (s == null || u == null)
        throw r("err")(
          "[group-history] oldestMessageTimestampInWindow is null",
        );
      var S = Intl.DateTimeFormat(r("WAWeb-moment").locale(), {
          month: "short",
          day: "numeric",
          year: "numeric",
          hour: "numeric",
          minute: "2-digit",
        }).format(Number(o("WALongInt").longIntToDecimalString(u)) * 1e3),
        R =
          l != null
            ? o("WAWebContactCollection").ContactCollection.get(l)
            : null,
        L = R
          ? o("WAWebFrontendContactGetters").getDisplayName(R)
          : (n = l == null ? void 0 : l.toString()) != null
            ? n
            : "";
      if (
        t ===
          o("WAWebGroupHistoryMsgData.flow").MessageHistoryBundleProcessState
            .FAILED ||
        t ===
          o("WAWebGroupHistoryMsgData.flow").MessageHistoryBundleProcessState
            .FAILED_NO_RETRY
      )
        return c(L);
      if (
        t ===
        o("WAWebGroupHistoryMsgData.flow").MessageHistoryBundleProcessState
          .DEDUPED
      )
        return d(L);
      if (
        t ===
          o("WAWebGroupHistoryMsgData.flow").MessageHistoryBundleProcessState
            .DOWNLOADING ||
        t ===
          o("WAWebGroupHistoryMsgData.flow").MessageHistoryBundleProcessState
            .PROCESSING
      )
        return m(L);
      var E = (a = s.historyReceivers) != null ? a : [],
        k = E.map(function (e) {
          var t = o("WAWebContactCollection").ContactCollection.get(e);
          return t
            ? o("WAWebFrontendContactGetters").getDisplayName(t)
            : e.toString();
        }),
        I = k[0] || "",
        T = (i = s.nonHistoryReceivers) != null ? i : [],
        D = v(T);
      if (l != null && o("WAWebUserPrefsMeUser").isMeAccount(l)) {
        if (E.length === 1) return D != null ? y(I, S, D) : p(I, S);
        if (E.length === 2) {
          var x = k[1] || "";
          return D != null ? C(I, x, S, D) : _(I, x, S);
        }
        return D != null ? b(I, E.length - 1, S, D) : f(I, E.length - 1, S);
      }
      return t ===
        o("WAWebGroupHistoryMsgData.flow").MessageHistoryBundleProcessState
          .INJECTED_PARTIAL
        ? g(L, S)
        : h(L, S);
    }
    function c(e) {
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
    function d(e) {
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
    function m(e) {
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
    function p(e, t) {
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
    function _(e, t, n) {
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
    function f(e, t, n) {
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
    function g(e, t) {
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
    function h(e, t) {
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
    function y(e, t, n) {
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
    function C(e, t, n, r) {
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
    function b(e, t, n, r) {
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
    function v(e) {
      if (e.length === 0) return null;
      var t = e[0],
        n = o("WAWebContactCollection").ContactCollection.get(t);
      return n
        ? o("WAWebFrontendContactGetters").getDisplayName(n)
        : t.toString();
    }
    ((l.formatMessageHistoryBundleBody = e),
      (l.formatMessageHistoryBundleBodyFor = u));
  },
  226,
);
