__d(
  "WAWebHatchPeerConversationState",
  ["WAWebHatchPeerConversationDecoder"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      return {
        hasMore: !1,
        isReading: !0,
        isUnavailable: !1,
        lastReadBeforeSeq: null,
        messages: [],
        newestReadSeq: null,
        oldestSeq: null,
        outcome: null,
        removedIds: new Set(),
      };
    }
    function s(e, t) {
      return (function (t) {
        if (
          ((typeof t == "object" && t !== null) || typeof t == "function") &&
          t.type === "read_started" &&
          "beforeSeq" in t
        ) {
          var n = t.beforeSeq;
          return babelHelpers.extends({}, e, {
            isReading: !0,
            lastReadBeforeSeq: n,
          });
        }
        if (
          ((typeof t == "object" && t !== null) || typeof t == "function") &&
          t.type === "page_read" &&
          "beforeSeq" in t &&
          "page" in t
        ) {
          var r = t.beforeSeq,
            o = t.page;
          return p(e, r, o);
        }
        if (
          ((typeof t == "object" && t !== null) || typeof t == "function") &&
          t.type === "read_failed" &&
          "beforeSeq" in t &&
          "outcome" in t
        ) {
          var a = t.beforeSeq,
            i = t.outcome;
          return c(e, a, i);
        }
        if (
          ((typeof t == "object" && t !== null) || typeof t == "function") &&
          t.type === "live" &&
          "message" in t
        ) {
          var l = t.message;
          return d(e, l);
        }
        if (
          ((typeof t == "object" && t !== null) || typeof t == "function") &&
          t.type === "removed" &&
          "id" in t
        ) {
          var s = t.id;
          return m(e, s);
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            t,
        );
      })(t);
    }
    function u(e) {
      return e.hasMore ? e.oldestSeq : null;
    }
    function c(t, n, r) {
      var o = n == null && r === "not_found",
        a = o ? e() : t;
      return babelHelpers.extends({}, a, {
        isReading: !1,
        isUnavailable: t.isUnavailable || o,
        lastReadBeforeSeq: n,
        outcome: r,
      });
    }
    function d(e, t) {
      return e.isUnavailable || e.removedIds.has(t.id)
        ? e
        : babelHelpers.extends({}, e, {
            messages: o(
              "WAWebHatchPeerConversationDecoder",
            ).mergeHatchPeerConversationMessages(e.messages, [t]),
          });
    }
    function m(e, t) {
      if (e.removedIds.has(t)) return e;
      var n = new Set([].concat(Array.from(e.removedIds), [t]));
      return babelHelpers.extends({}, e, {
        messages: g(e.messages, n),
        removedIds: n,
      });
    }
    function p(e, t, n) {
      var r,
        a = _(e, t, n),
        i =
          n.removedIds.length > 0
            ? new Set([].concat(Array.from(e.removedIds), n.removedIds))
            : e.removedIds;
      return {
        hasMore: a ? n.hasMore : e.hasMore,
        isReading: !1,
        isUnavailable: !1,
        lastReadBeforeSeq: t,
        messages: g(
          o(
            "WAWebHatchPeerConversationDecoder",
          ).mergeHatchPeerConversationMessages(e.messages, n.messages),
          n.textlessIds.length > 0
            ? new Set([].concat(Array.from(i), n.textlessIds))
            : i,
        ),
        newestReadSeq: f(e.newestReadSeq, n),
        oldestSeq: a && (r = n.oldestSeq) != null ? r : e.oldestSeq,
        outcome: "ok",
        removedIds: i,
      };
    }
    function _(e, t, n) {
      var r = n.oldestSeq;
      return e.oldestSeq == null
        ? !0
        : r == null
          ? t != null
          : r <= e.oldestSeq ||
            (t == null && (e.newestReadSeq == null || r > e.newestReadSeq + 1));
    }
    function f(e, t) {
      var n = t.messages.map(function (e) {
        return e.seq;
      });
      return (
        t.oldestSeq != null && n.push(t.oldestSeq),
        e != null && n.push(e),
        n.length > 0 ? Math.max.apply(Math, n) : null
      );
    }
    function g(e, t) {
      return t.size === 0
        ? e
        : e.filter(function (e) {
            return !t.has(e.id);
          });
    }
    ((l.initialHatchPeerConversationState = e),
      (l.reduceHatchPeerConversation = s),
      (l.getHatchPeerConversationEarlierPage = u));
  },
  98,
);
