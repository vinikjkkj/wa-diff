__d(
  "WAWebVoipPendingCallLogOutcome",
  ["WAWebCallLogMsgData.flow"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 100,
      s = new Map();
    function u(t, n) {
      var r = t.toString();
      if (n !== o("WAWebCallLogMsgData.flow").CallOutcome.AcceptedElsewhere)
        return (s.delete(r), !1);
      if (s.has(r)) return !0;
      if (s.size >= e) {
        var a = s.keys().next().value;
        a != null && s.delete(a);
      }
      return (s.set(r, { callOutcome: n }), !0);
    }
    function c(e) {
      return s.get(e.toString());
    }
    function d(e) {
      var t = e.id;
      if (t == null || e.kind !== "callLog")
        return { callLogMessage: e, pendingOutcome: null };
      var n = c(t);
      return n == null ||
        (e.callOutcome !== o("WAWebCallLogMsgData.flow").CallOutcome.Missed &&
          e.callOutcome !== o("WAWebCallLogMsgData.flow").CallOutcome.Unknown)
        ? { callLogMessage: e, pendingOutcome: n }
        : {
            callLogMessage: babelHelpers.extends({}, e, {
              callOutcome: n.callOutcome,
            }),
            pendingOutcome: n,
          };
    }
    function m(e, t) {
      if (!(e == null || t == null)) {
        var n = e.toString();
        s.get(n) === t && s.delete(n);
      }
    }
    function p(e, t, n, r) {
      var a,
        i = c(e);
      if (r != null) {
        if (i !== r) return { type: "skip", reason: "consumed" };
        if (
          t !== o("WAWebCallLogMsgData.flow").CallOutcome.Missed &&
          t !== o("WAWebCallLogMsgData.flow").CallOutcome.Unknown
        )
          return (m(e, r), { type: "skip", reason: "terminal" });
      }
      return {
        type: "apply",
        callOutcome: (a = r == null ? void 0 : r.callOutcome) != null ? a : n,
        pendingOutcome: i,
      };
    }
    function _() {
      s.clear();
    }
    ((l.rememberPendingCallLogOutcome = u),
      (l.getPendingCallLogOutcome = c),
      (l.mergePendingCallLogOutcome = d),
      (l.clearPendingCallLogOutcome = m),
      (l.prepareCallLogOutcomeUpdate = p),
      (l.clearAllPendingCallLogOutcomes = _));
  },
  98,
);
