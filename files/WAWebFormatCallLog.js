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
      return (n && (t = c(r, _, i, f)), t != null ? t : "");
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
    function c(e, t, n, r) {
      return t && !r
        ? e
          ? s._(/*BTDS*/ "Missed group call")
          : n
            ? s._(/*BTDS*/ "Missed video call")
            : s._(/*BTDS*/ "Missed voice call")
        : e
          ? s._(/*BTDS*/ "Group call")
          : n
            ? s._(/*BTDS*/ "Video call")
            : s._(/*BTDS*/ "Voice call");
    }
    l.default = e;
  },
  226,
);
