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
        u = function (t) {
          return o("WAWebFrontendContactGetters").getDisplayName(t);
        },
        R =
          l != null
            ? o("WAWebContactCollection").ContactCollection.get(l)
            : null,
        L = R ? u(R) : (n = l == null ? void 0 : l.toString()) != null ? n : "";
      if (
        t ===
          o("WAWebGroupHistoryMsgData.flow").MessageHistoryBundleProcessState
            .FAILED ||
        t ===
          o("WAWebGroupHistoryMsgData.flow").MessageHistoryBundleProcessState
            .FAILED_NO_RETRY
      )
        return d(L);
      if (
        t ===
        o("WAWebGroupHistoryMsgData.flow").MessageHistoryBundleProcessState
          .DEDUPED
      )
        return m(L);
      if (
        t ===
          o("WAWebGroupHistoryMsgData.flow").MessageHistoryBundleProcessState
            .DOWNLOADING ||
        t ===
          o("WAWebGroupHistoryMsgData.flow").MessageHistoryBundleProcessState
            .PROCESSING
      )
        return p(L);
      var E = s == null ? void 0 : s.oldestMessageTimestampInWindow;
      if (s == null || E == null) return c();
      var k = Intl.DateTimeFormat(r("WAWeb-moment").locale(), {
          month: "short",
          day: "numeric",
          year: "numeric",
          hour: "numeric",
          minute: "2-digit",
        }).format(Number(o("WALongInt").longIntToDecimalString(E)) * 1e3),
        I = (a = s.historyReceivers) != null ? a : [],
        T = I.map(function (e) {
          var t = o("WAWebContactCollection").ContactCollection.get(e);
          return t ? u(t) : e.toString();
        }),
        D = T[0] || "",
        x = (i = s.nonHistoryReceivers) != null ? i : [],
        $ = S(x, u);
      if (l != null && o("WAWebUserPrefsMeUser").isMeAccount(l)) {
        if (I.length === 1) return $ != null ? C(D, k, $) : _(D, k);
        if (I.length === 2) {
          var P = T[1] || "";
          return $ != null ? b(D, P, k, $) : f(D, P, k);
        }
        return $ != null ? v(D, I.length - 1, k, $) : g(D, I.length - 1, k);
      }
      return t ===
        o("WAWebGroupHistoryMsgData.flow").MessageHistoryBundleProcessState
          .INJECTED_PARTIAL
        ? h(L, k)
        : y(L, k);
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
    function S(e, t) {
      if (e.length === 0) return null;
      var n = e[0],
        r = o("WAWebContactCollection").ContactCollection.get(n);
      return r ? t(r) : n.toString();
    }
    ((l.formatMessageHistoryBundleBody = e),
      (l.formatMessageHistoryBundleBodyFor = u));
  },
  226,
);
