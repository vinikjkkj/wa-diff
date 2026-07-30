__d(
  "WAWebFormatCallLog",
  ["fbt", "WAWebCallLogMsgData.flow", "WAWebCallLogUtils", "WAWebMsgGetters"],
  function (t, n, r, o, a, i, l, s) {
    function e(e) {
      var t = e.msg;
      if (o("WAWebMsgGetters").getIsCallSilenced(t))
        return s._(/*BTDS*/ "Silenced unknown caller");
      var n = u(t.subtype);
      if (n != null) return n;
      var r = o("WAWebMsgGetters").getCallOutcome(t),
        a = o("WAWebMsgGetters").getIsAdHocGroupCall(t),
        i = o("WAWebMsgGetters").getIsMissedCall(t),
        l = o("WAWebMsgGetters").getIsVideoCall(t),
        d = o("WAWebMsgGetters").getIsSentByMe(t),
        m = o("WAWebMsgGetters").getCallParticipants(t),
        p = o("WAWebMsgGetters").getFinalCallOutcome(t),
        _ = o("WAWebCallLogUtils").getIsSelfConnected(m),
        f = o("WAWebCallLogUtils").getIsMissedCallOrNotConnected(i, _, d, r, p),
        g =
          r === o("WAWebCallLogMsgData.flow").CallOutcome.Ongoing &&
          p !== o("WAWebCallLogMsgData.flow").CallOutcome.Completed;
      return (
        r &&
          (n = c({
            isAdHocGroupCall: a,
            isMissedCall: f,
            isOngoing: g,
            isVideoCall: l,
          })),
        n != null ? n : ""
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
