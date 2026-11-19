__d(
  "WAWebVoipAdHocCallLogs",
  [
    "Promise",
    "WAWebCallCollection",
    "WAWebMsgType",
    "WAWebUserUtils",
    "WAWebVoipOngoingCallCollection",
    "WAWebVoipTransferredCallRegistry",
    "countWhere",
    "isStringNullOrEmpty",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(e, t, n) {
      var r,
        a = n === void 0 ? {} : n,
        i = a.includeEndedCall,
        l = i === void 0 ? !0 : i,
        s = (r = u(e, l)) == null ? void 0 : r.msg;
      return s != null &&
        s.type === o("WAWebMsgType").MSG_TYPE.CALL_LOG &&
        s.id.id === t
        ? s
        : null;
    }
    function u(e, t) {
      var n = r("WAWebCallCollection").activeCall,
        o = r("WAWebCallCollection").lastEndedCall;
      return n != null && n.id === e
        ? n
        : t && o != null && o.id === e
          ? o
          : null;
    }
    function c(e, t) {
      var n,
        r,
        a = t === void 0 ? {} : t,
        i = a.includeEndedCall,
        l = i === void 0 ? !0 : i,
        u = a.includeUntracked,
        c = u === void 0 ? !1 : u,
        d =
          (n =
            (r = o("WAWebVoipTransferredCallRegistry").getTransferredCallRoot(
              e,
            )) == null
              ? void 0
              : r.rootCallId) != null
            ? n
            : e,
        m = [].concat(
          o(
            "WAWebVoipOngoingCallCollection",
          ).WAWebVoipOngoingCallCollection.getAllByCallId(d),
        );
      if (m.length === 0 && !c) return m;
      var p = s(e, d, { includeEndedCall: l });
      return (
        p != null &&
          !m.some(function (e) {
            return e.id.equals(p.id);
          }) &&
          m.push(p),
        m
      );
    }
    function d(t) {
      return (e || (e = n("Promise"))).allSettled(t).then(function (e) {
        return e.map(function (e) {
          if (e.status === "rejected") throw e.reason;
          return e.value;
        });
      });
    }
    function m(e) {
      var t;
      return (
        r("countWhere")(
          (t = e.callParticipants) != null ? t : [],
          function (e) {
            var t = e.participant;
            return !o("WAWebUserUtils").isMeAccount(t);
          },
        ) > 1 &&
        e.isCallLink !== !0 &&
        r("isStringNullOrEmpty")(e.callLinkToken) &&
        !e.id.remote.isGroup()
      );
    }
    ((l.getActiveCallLogMsg = s),
      (l.getCallLogMsgsForCall = c),
      (l.settleAllOrThrow = d),
      (l.isAdHocGroupCallLog = m));
  },
  98,
);
