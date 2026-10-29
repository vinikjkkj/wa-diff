__d(
  "WAWebVoipPendingCallLogOutcome",
  ["WAWebCallLogMsgData.flow"],
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
      if ((i == null ? void 0 : i.callOutcome) === n) return !0;
      if (i == null && s.size >= e) {
        var l = s.keys().next().value;
        l != null && s.delete(l);
      }
      return (s.set(a, { callOutcome: n }), !0);
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
    function p(e) {
      var t,
        n = e.existingCallOutcome,
        r = e.expectedPendingOutcome,
        a = e.msgKey,
        i = e.requestedCallOutcome,
        l = c(a);
      if (r != null) {
        if (l !== r) return { type: "skip", reason: "consumed" };
        if (
          n !== o("WAWebCallLogMsgData.flow").CallOutcome.Missed &&
          n !== o("WAWebCallLogMsgData.flow").CallOutcome.Unknown
        )
          return (m(a, r), { type: "skip", reason: "terminal" });
      }
      return {
        type: "apply",
        callOutcome: (t = r == null ? void 0 : r.callOutcome) != null ? t : i,
        pendingOutcome: l,
      };
    }
    ((l.rememberPendingCallLogOutcome = u),
      (l.getPendingCallLogOutcome = c),
      (l.mergePendingCallLogOutcome = d),
      (l.clearPendingCallLogOutcome = m),
      (l.prepareCallLogOutcomeUpdate = p));
  },
  98,
);
