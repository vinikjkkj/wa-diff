__d(
  "WAWebFormatMessageHistoryBundleBody",
  [
    "fbt",
    "WALongInt",
    "WAWeb-moment",
    "WAWebContactCollection",
    "WAWebFrontendContactGetters",
    "WAWebGroupHistoryMsgData.flow",
    "WAWebL10N",
    "WAWebUserPrefsMeUser",
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
        u =
          l != null
            ? o("WAWebContactCollection").ContactCollection.get(l)
            : null,
        R = u
          ? o("WAWebFrontendContactGetters").getDisplayName(u)
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
        return d(R);
      if (
        t ===
        o("WAWebGroupHistoryMsgData.flow").MessageHistoryBundleProcessState
          .DEDUPED
      )
        return m(R);
      if (
        t ===
          o("WAWebGroupHistoryMsgData.flow").MessageHistoryBundleProcessState
            .DOWNLOADING ||
        t ===
          o("WAWebGroupHistoryMsgData.flow").MessageHistoryBundleProcessState
            .PROCESSING
      )
        return p(R);
      var L = s == null ? void 0 : s.oldestMessageTimestampInWindow;
      if (s == null || L == null) return c();
      var E = Intl.DateTimeFormat(r("WAWeb-moment").locale(), {
          month: "short",
          day: "numeric",
          year: "numeric",
          hour: "numeric",
          minute: "2-digit",
        }).format(Number(o("WALongInt").longIntToDecimalString(L)) * 1e3),
        k = (a = s.historyReceivers) != null ? a : [],
        I = k.map(function (e) {
          var t = o("WAWebContactCollection").ContactCollection.get(e);
          return t
            ? o("WAWebFrontendContactGetters").getDisplayName(t)
            : e.toString();
        }),
        T = I[0] || "",
        D = (i = s.nonHistoryReceivers) != null ? i : [],
        x = S(D);
      if (l != null && o("WAWebUserPrefsMeUser").isMeAccount(l)) {
        if (k.length === 1) return x != null ? C(T, E, x) : _(T, E);
        if (k.length === 2) {
          var $ = I[1] || "";
          return x != null ? b(T, $, E, x) : f(T, $, E);
        }
        return x != null ? v(T, k.length - 1, E, x) : g(T, k.length - 1, E);
      }
      return t ===
        o("WAWebGroupHistoryMsgData.flow").MessageHistoryBundleProcessState
          .INJECTED_PARTIAL
        ? h(R, E)
        : y(R, E);
    }
    function c() {
      return s._(/*BTDS*/ "Message history was sent");
    }
    function d(e) {
      return s._(
        /*BTDS*/ "Couldn't download message history that {sender contact name} sent you",
        [s._param("sender contact name", e)],
      );
    }
    function m(e) {
      return s._(
        /*BTDS*/ "{sender contact name} also sent you message history, which you already got from someone else",
        [s._param("sender contact name", e)],
      );
    }
    function p(e) {
      return s._(
        /*BTDS*/ "Downloading message history that {sender contact name} sent you",
        [s._param("sender contact name", e)],
      );
    }
    function _(e, t) {
      return s._(
        /*BTDS*/ "You sent {name of the group history receiver} message history that starts on {timestamp}",
        [
          s._param("name of the group history receiver", e),
          s._param("timestamp", t),
        ],
      );
    }
    function f(e, t, n) {
      return s._(
        /*BTDS*/ "You sent {name of the group history receiver} and {name of the second group history receiver} message history that starts on {timestamp}",
        [
          s._param("name of the group history receiver", e),
          s._param("name of the second group history receiver", t),
          s._param("timestamp", n),
        ],
      );
    }
    function g(e, t, n) {
      return s._(
        /*BTDS*/ '_j{"*":"You sent {name of the group history receiver} and {number} others message history that starts on {timestamp}","_1":"You sent {name of the group history receiver} and 1 other message history that starts on {timestamp}"}',
        [
          s._plural(t, "number", r("WAWebL10N").n(t)),
          s._param("name of the group history receiver", e),
          s._param("timestamp", n),
        ],
      );
    }
    function h(e, t) {
      return s._(
        /*BTDS*/ "{author name} sent you message history that starts on {timestamp}. Some messages may not be available",
        [s._param("author name", e), s._param("timestamp", t)],
      );
    }
    function y(e, t) {
      return s._(
        /*BTDS*/ "{author name} sent you message history that starts on {timestamp}",
        [s._param("author name", e), s._param("timestamp", t)],
      );
    }
    function C(e, t, n) {
      return s._(
        /*BTDS*/ "You sent {name of the group history receiver} message history that starts on {timestamp}. {name of the non-history receiver} didn't receive history",
        [
          s._param("name of the group history receiver", e),
          s._param("timestamp", t),
          s._param("name of the non-history receiver", n),
        ],
      );
    }
    function b(e, t, n, r) {
      return s._(
        /*BTDS*/ "You sent {name of the group history receiver} and {name of the second group history receiver} message history that starts on {timestamp}. {name of the non-history receiver} didn't receive history",
        [
          s._param("name of the group history receiver", e),
          s._param("name of the second group history receiver", t),
          s._param("timestamp", n),
          s._param("name of the non-history receiver", r),
        ],
      );
    }
    function v(e, t, n, o) {
      return s._(
        /*BTDS*/ '_j{"*":"You sent {name of the group history receiver} and {number} others message history that starts on {timestamp}. {name of the non-history receiver} didn\'t receive history","_1":"You sent {name of the group history receiver} and 1 other message history that starts on {timestamp}. {name of the non-history receiver} didn\'t receive history"}',
        [
          s._plural(t, "number", r("WAWebL10N").n(t)),
          s._param("name of the group history receiver", e),
          s._param("timestamp", n),
          s._param("name of the non-history receiver", o),
        ],
      );
    }
    function S(e) {
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
