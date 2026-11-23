__d(
  "MAIBAR23CreationThreadStore",
  ["MAIBALiveDeliveredReplies", "react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (e || (e = o("react"))).useSyncExternalStore,
      u = "gp3_e2e_entrypoint",
      c = new Map(),
      d = new Set();
    function m(e, t) {
      var n = new Map(c);
      (t == null ? n.delete(e) : n.set(e, t), (c = n));
      for (var r of d) r();
    }
    function p(e) {
      e == null || e === "" || c.get(e) === "marker" || m(e, "marker");
    }
    function _(e, t) {
      t !== u || e == null || e === "" || c.has(e) || m(e, "entry_send");
    }
    function f(e) {
      e != null && c.get(e) === "entry_send" && m(e, "marker");
    }
    function g(e) {
      return e != null && c.get(e) === "entry_send" ? (m(e, null), !0) : !1;
    }
    function h(e) {
      return (
        d.add(e),
        function () {
          d.delete(e);
        }
      );
    }
    function y(e) {
      return e != null && c.has(e);
    }
    function C(e) {
      return e != null && c.get(e) === "marker";
    }
    function b(e) {
      var t = function () {
        return C(e);
      };
      return s(h, t, t);
    }
    var v = 500;
    function S(e, t) {
      if (!e.has(t)) {
        if (e.size >= v) {
          var n = e.values().next();
          n.done !== !0 && e.delete(n.value);
        }
        e.add(t);
      }
    }
    function R(e, t) {
      return t == null || t === "" || e.has(t) ? !1 : (S(e, t), !0);
    }
    var L = new Set();
    function E(e) {
      e != null && e !== "" && S(L, e);
    }
    var k = new Set();
    function I(e) {
      var t = R(k, e);
      if (t) for (var n of d) n();
      return t;
    }
    function T(e) {
      return e != null && k.has(e) && !C(e);
    }
    function D(e) {
      var t = function () {
        return T(e);
      };
      return s(h, t, t);
    }
    var x = new Set();
    function $(e, t) {
      return e == null || t == null || t === "" ? !1 : R(x, e + "\0" + t);
    }
    function P(e, t, n) {
      return (
        (e != null && L.has(e)) ||
        o("MAIBALiveDeliveredReplies").isMAIBAReplyDeliveredLive(t, n)
      );
    }
    function N(e) {
      var t = function () {
        return y(e);
      };
      return s(h, t, t);
    }
    ((l.MAIBA_R23_E2E_ENTRY_PROMPT_ID = u),
      (l.markMAIBAR23CreationThread = p),
      (l.recordMAIBAR23EntrySend = _),
      (l.confirmMAIBAR23EntrySendThread = f),
      (l.clearMAIBAR23EntrySendMark = g),
      (l.isMAIBAR23CreationThread = y),
      (l.isMAIBAR23MarkedThread = C),
      (l.useIsMAIBAR23MarkedThread = b),
      (l.recordMAIBAR23LiveResponse = E),
      (l.claimMAIBAR23EntryDecline = I),
      (l.isMAIBAR23DeclinedThread = T),
      (l.useIsMAIBAR23DeclinedThread = D),
      (l.claimMAIBAR23PlanCardDisplay = $),
      (l.wasMAIBAR23ResponseLive = P),
      (l.useIsMAIBAR23CreationThread = N));
  },
  98,
);
