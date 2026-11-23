__d(
  "MAIBAThinkingModeStore",
  ["react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (e || (e = o("react"))).useSyncExternalStore,
      u = "minimal",
      c = new Set();
    function d(e) {
      u !== e && ((u = e), m());
    }
    function m() {
      for (var e of c) e();
    }
    function p(e) {
      return (
        c.add(e),
        function () {
          c.delete(e);
        }
      );
    }
    function _() {
      return s(p, function () {
        return u;
      });
    }
    var f = !1;
    function g(e) {
      f !== e && ((f = e), m());
    }
    function h() {
      return s(p, function () {
        return f;
      });
    }
    var y = new Set();
    function C(e, t) {
      y.has(e) !== t && (t ? y.add(e) : y.delete(e), m());
    }
    function b(e) {
      return s(p, function () {
        return e != null && y.has(e);
      });
    }
    var v = "transfer_to_subagent_";
    function S(e) {
      for (var t = e.length - 1; t >= 0; t--)
        for (var n = e[t], r = n.length - 1; r >= 0; r--) {
          var o = n[r];
          if (o != null && o.startsWith(v)) return o.slice(v.length);
        }
      return null;
    }
    function R(e) {
      return e.requestedReasoningMode != null
        ? { effort: null, mode: e.requestedReasoningMode }
        : e.hideUserMessage === !0 ||
            e.postback_payload != null ||
            e.isHandoverActive === !0 ||
            e.isInSituPregeneration === !0 ||
            e.messageType === "SHADOW" ||
            e.messageType === "WARM_UP" ||
            e.messageType === "COMPARISON" ||
            u === "minimal"
          ? null
          : { effort: u, mode: "THINKING_TOGGLE" };
    }
    ((l.updateMAIBAReasoningLevel = d),
      (l.useMAIBAReasoningLevel = _),
      (l.updateMAIBAThinkingSelectorShown = g),
      (l.useMAIBAIsThinkingSelectorShown = h),
      (l.updateMAIBASupportAgentActive = C),
      (l.useMAIBAIsSupportAgentActive = b),
      (l.getMAIBAActiveSubagent = S),
      (l.resolveMAIBARequestedReasoningMode = R));
  },
  98,
);
