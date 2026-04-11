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
        o("WAWebMsgGetters").getIsSentByMe(e) ||
        o("WAWebMsgGetters").getT(e) <=
          o("WAWebUserPrefsVoip").getCallsTabLastSeenTimestamp()
      )
        return !1;
      var n = o("WAWebUserPrefsMultiDevice").getPairingTimestamp();
      if (n != null && o("WAWebMsgGetters").getT(e) <= n) return !1;
      var r = o("WAWebMsgGetters").getCallOutcome(e),
        a = o("WAWebMsgGetters").getFinalCallOutcome(e);
      if (
        r === o("WAWebCallLogMsgData.flow").CallOutcome.AcceptedElsewhere ||
        a === o("WAWebCallLogMsgData.flow").CallOutcome.AcceptedElsewhere ||
        r === o("WAWebCallLogMsgData.flow").CallOutcome.Ongoing ||
        a === o("WAWebCallLogMsgData.flow").CallOutcome.Ongoing ||
        r === o("WAWebCallLogMsgData.flow").CallOutcome.Rejected ||
        a === o("WAWebCallLogMsgData.flow").CallOutcome.Rejected
      )
        return !1;
      if (
        r === o("WAWebCallLogMsgData.flow").CallOutcome.Missed ||
        a === o("WAWebCallLogMsgData.flow").CallOutcome.Missed
      )
        return !0;
      var i = o("WAWebMsgGetters").getCallParticipants(e),
        l =
          (t =
            i == null
              ? void 0
              : i.some(function (e) {
                  return e.participant.isLid();
                })) != null
            ? t
            : !1,
        s = l
          ? o("WAWebUserPrefsMeUser").getMeLidUserOrThrow()
          : o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE(),
        u =
          i == null
            ? void 0
            : i.find(function (e) {
                var t;
                return (t = e.participant) == null ? void 0 : t.equals(s);
              });
      return (
        (u == null ? void 0 : u.outcome) !==
        o("WAWebVoipWaCallEnums").CallParticipantState.Connected
      );
    }
    function s(t) {
      return r("countWhere")(t, e);
    }
    l.countMissedCalls = s;
  },
  98,
);
