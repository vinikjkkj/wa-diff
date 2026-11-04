__d(
  "WAWebVoipPendingCallLogOutcome",
  ["WAWebCallLogMsgData.flow", "WAWebVoipCallLogPlaceholderTracker"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 100,
      s = new Map();
    function u(t, n, r) {
      var a = t.toString();
      if (
        (r == null ? void 0 : r.keepAnyOutcome) !== !0 &&
        n !== o("WAWebCallLogMsgData.flow").CallOutcome.AcceptedElsewhere
      )
        return (s.delete(a), !1);
      var i = s.get(a);
      return (
        (i == null ? void 0 : i.outcome.callOutcome) === n ||
          (i == null && s.size >= e && c(),
          s.set(a, { callId: t.id, outcome: { callOutcome: n } })),
        !0
      );
    }
    function c() {
      for (var e of s) {
        var t = e[0],
          n = e[1].callId;
        if (!o("WAWebVoipCallLogPlaceholderTracker").isPlaceholderPending(n)) {
          s.delete(t);
          return;
        }
      }
    }
    function d(e) {
      var t;
      return (t = s.get(e.toString())) == null ? void 0 : t.outcome;
    }
    function m(e) {
      var t = e.id;
      if (t == null || e.kind !== "callLog")
        return { callLogMessage: e, pendingOutcome: null };
      var n = d(t);
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
    function p(e, t) {
      var n;
      if (!(e == null || t == null)) {
        var r = e.toString();
        ((n = s.get(r)) == null ? void 0 : n.outcome) === t && s.delete(r);
      }
    }
    function _(e) {
      var t,
        n = e.existingCallOutcome,
        r = e.expectedPendingOutcome,
        a = e.msgKey,
        i = e.requestedCallOutcome,
        l = d(a);
      if (r != null) {
        if (l !== r) return { type: "skip", reason: "consumed" };
        if (
          n !== o("WAWebCallLogMsgData.flow").CallOutcome.Missed &&
          n !== o("WAWebCallLogMsgData.flow").CallOutcome.Unknown
        )
          return (p(a, r), { type: "skip", reason: "terminal" });
      }
      return {
        type: "apply",
        callOutcome: (t = r == null ? void 0 : r.callOutcome) != null ? t : i,
        pendingOutcome: l,
      };
    }
    ((l.MAX_PENDING_CALL_LOG_OUTCOMES = e),
      (l.rememberPendingCallLogOutcome = u),
      (l.getPendingCallLogOutcome = d),
      (l.mergePendingCallLogOutcome = m),
      (l.clearPendingCallLogOutcome = p),
      (l.prepareCallLogOutcomeUpdate = _));
  },
  98,
);
