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
    "WAWebOrgMemberContactName",
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
        s = e.getOrgName,
        u =
          s === void 0
            ? o("WAWebOrgMemberContactName").getOrgMemberDisplayName
            : s,
        R = e.metadata,
        L = function (t) {
          var e;
          return (e = u(t)) != null
            ? e
            : o("WAWebFrontendContactGetters").getDisplayName(t);
        },
        E =
          l != null
            ? o("WAWebContactCollection").ContactCollection.get(l)
            : null,
        k = E ? L(E) : (n = l == null ? void 0 : l.toString()) != null ? n : "";
      if (
        t ===
          o("WAWebGroupHistoryMsgData.flow").MessageHistoryBundleProcessState
            .FAILED ||
        t ===
          o("WAWebGroupHistoryMsgData.flow").MessageHistoryBundleProcessState
            .FAILED_NO_RETRY
      )
        return d(k);
      if (
        t ===
        o("WAWebGroupHistoryMsgData.flow").MessageHistoryBundleProcessState
          .DEDUPED
      )
        return m(k);
      if (
        t ===
          o("WAWebGroupHistoryMsgData.flow").MessageHistoryBundleProcessState
            .DOWNLOADING ||
        t ===
          o("WAWebGroupHistoryMsgData.flow").MessageHistoryBundleProcessState
            .PROCESSING
      )
        return p(k);
      var I = R == null ? void 0 : R.oldestMessageTimestampInWindow;
      if (R == null || I == null) return c();
      var T = Intl.DateTimeFormat(r("WAWeb-moment").locale(), {
          month: "short",
          day: "numeric",
          year: "numeric",
          hour: "numeric",
          minute: "2-digit",
        }).format(Number(o("WALongInt").longIntToDecimalString(I)) * 1e3),
        D = (a = R.historyReceivers) != null ? a : [],
        x = D.map(function (e) {
          var t = o("WAWebContactCollection").ContactCollection.get(e);
          return t ? L(t) : e.toString();
        }),
        $ = x[0] || "",
        P = (i = R.nonHistoryReceivers) != null ? i : [],
        N = S(P, L);
      if (l != null && o("WAWebUserPrefsMeUser").isMeAccount(l)) {
        if (D.length === 1) return N != null ? C($, T, N) : _($, T);
        if (D.length === 2) {
          var M = x[1] || "";
          return N != null ? b($, M, T, N) : f($, M, T);
        }
        return N != null ? v($, D.length - 1, T, N) : g($, D.length - 1, T);
      }
      return t ===
        o("WAWebGroupHistoryMsgData.flow").MessageHistoryBundleProcessState
          .INJECTED_PARTIAL
        ? h(k, T)
        : y(k, T);
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
