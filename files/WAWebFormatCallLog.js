__d(
  "WAWebFormatCallLog",
  ["fbt", "WAWebCallLogMsgData.flow", "WAWebCallLogUtils", "WAWebMsgGetters"],
  function (t, n, r, o, a, i, l, s) {
    function e(e) {
      if (o("WAWebMsgGetters").getIsCallSilenced(e))
        return s._(/*BTDS*/ "Silenced unknown caller");
      var t = u(e.subtype);
      if (t != null) return t;
      var n = o("WAWebMsgGetters").getCallOutcome(e),
        r = o("WAWebMsgGetters").getIsAdHocGroupCall(e),
        a = o("WAWebMsgGetters").getIsMissedCall(e),
        i = o("WAWebMsgGetters").getIsVideoCall(e),
        l = o("WAWebMsgGetters").getIsSentByMe(e),
        d = o("WAWebMsgGetters").getCallParticipants(e),
        m = o("WAWebMsgGetters").getFinalCallOutcome(e),
        p = o("WAWebCallLogUtils").getIsSelfConnected(d),
        _ = o("WAWebCallLogUtils").getIsMissedCallOrNotConnected(a, p, l, n, m),
        f =
          n === o("WAWebCallLogMsgData.flow").CallOutcome.Ongoing &&
          m !== o("WAWebCallLogMsgData.flow").CallOutcome.Completed;
      return (
        n &&
          (t = c({
            isAdHocGroupCall: r,
            isMissedCall: _,
            isOngoing: f,
            isVideoCall: i,
          })),
        t != null ? t : ""
      );
    }
    function u(e) {
      switch (e) {
        case "miss":
          return s._(/*BTDS*/ "Missed voice call");
        case "miss_video":
          return s._(/*BTDS*/ "Missed video call");
        case "miss_group":
        case "miss_group_video":
          return s._(/*BTDS*/ "Missed group call");
      }
    }
    function c(e) {
      var t = e.isAdHocGroupCall,
        n = e.isMissedCall,
        r = e.isOngoing,
        o = e.isVideoCall;
      return n && !r
        ? t
          ? s._(/*BTDS*/ "Missed group call")
          : o
            ? s._(/*BTDS*/ "Missed video call")
            : s._(/*BTDS*/ "Missed voice call")
        : t
          ? s._(/*BTDS*/ "Group call")
          : o
            ? s._(/*BTDS*/ "Video call")
            : s._(/*BTDS*/ "Voice call");
    }
    l.default = e;
  },
  226,
);
