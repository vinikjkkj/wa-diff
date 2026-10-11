__d(
  "WAWebMissedCallCountUtils",
  [
    "WAWebCallLogMsgData.flow",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebUserPrefsMeUser",
    "WAWebUserPrefsMultiDevice",
    "WAWebUserPrefsVoip",
    "WAWebVoipWaCallEnums",
    "countWhere",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t;
      if (
        e.type !== o("WAWebMsgType").MSG_TYPE.CALL_LOG ||
        o("WAWebMsgGetters").getIsSentByMe(e)
      )
        return !1;
      var n = o("WAWebMsgGetters").getCallOutcome(e),
        r = o("WAWebMsgGetters").getFinalCallOutcome(e);
      if (
        n === o("WAWebCallLogMsgData.flow").CallOutcome.AcceptedElsewhere ||
        r === o("WAWebCallLogMsgData.flow").CallOutcome.AcceptedElsewhere ||
        n === o("WAWebCallLogMsgData.flow").CallOutcome.Ongoing ||
        r === o("WAWebCallLogMsgData.flow").CallOutcome.Ongoing ||
        n === o("WAWebCallLogMsgData.flow").CallOutcome.Rejected ||
        r === o("WAWebCallLogMsgData.flow").CallOutcome.Rejected
      )
        return !1;
      if (
        n === o("WAWebCallLogMsgData.flow").CallOutcome.Missed ||
        r === o("WAWebCallLogMsgData.flow").CallOutcome.Missed
      )
        return !0;
      var a = o("WAWebMsgGetters").getCallParticipants(e),
        i =
          (t =
            a == null
              ? void 0
              : a.some(function (e) {
                  return e.participant.isLid();
                })) != null
            ? t
            : !1,
        l = i
          ? o("WAWebUserPrefsMeUser").getMeLidUserOrThrow()
          : o("WAWebUserPrefsMeUser").getMaybeMePnUser(),
        s =
          a == null
            ? void 0
            : a.find(function (e) {
                var t;
                return (t = e.participant) == null ? void 0 : t.equals(l);
              });
      return (
        (s == null ? void 0 : s.outcome) !==
        o("WAWebVoipWaCallEnums").CallParticipantState.Connected
      );
    }
    function s(t) {
      if (
        t.type !== o("WAWebMsgType").MSG_TYPE.CALL_LOG ||
        o("WAWebMsgGetters").getIsSentByMe(t) ||
        o("WAWebMsgGetters").getT(t) <=
          o("WAWebUserPrefsVoip").getCallsTabLastSeenTimestamp()
      )
        return !1;
      var n = o("WAWebUserPrefsMultiDevice").getPairingTimestamp();
      return n != null && o("WAWebMsgGetters").getT(t) <= n ? !1 : e(t);
    }
    function u(e, t) {
      return t == null
        ? r("countWhere")(e, s)
        : r("countWhere")(e, function (e) {
            return s(e) && t(e);
          });
    }
    ((l.isInboundMissedCall = e), (l.countMissedCalls = u));
  },
  98,
);
