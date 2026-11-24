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
        a,
        i = t === void 0 ? {} : t,
        l = i.includeEndedCall,
        u = l === void 0 ? !0 : l,
        c = i.includeUntracked,
        d = c === void 0 ? !1 : c,
        m =
          (n =
            (r =
              (a = o("WAWebVoipTransferredCallRegistry").getTransferredCallRoot(
                e,
              )) == null
                ? void 0
                : a.rootCallId) != null
              ? r
              : o(
                  "WAWebVoipOngoingCallCollection",
                ).WAWebVoipOngoingCallCollection.getMsgKeyIdByJoinableCallId(
                  e,
                )) != null
            ? n
            : e,
        p = [].concat(
          o(
            "WAWebVoipOngoingCallCollection",
          ).WAWebVoipOngoingCallCollection.getAllByCallId(m),
        );
      if (p.length === 0 && !d) return p;
      var _ = s(e, m, { includeEndedCall: u });
      return (
        _ != null &&
          !p.some(function (e) {
            return e.id.equals(_.id);
          }) &&
          p.push(_),
        p
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
