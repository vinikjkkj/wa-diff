__d(
  "WAWebFormatCallLog",
  ["fbt", "WAWebCallLogUtils", "WAWebL10N", "WAWebMsgGetters"],
  function (t, n, r, o, a, i, l, s) {
    function e(e) {
      var t,
        n = u(e),
        o = (t = e.options.callLogCount) != null ? t : 1;
      return o <= 1 || n === ""
        ? n
        : s._(
            /*BTDS*/ '_j{"*":"{call-log-entry-text} ({call-logs-merged-count})"}',
            [
              s._param("call-logs-merged-count", r("WAWebL10N").n(o), [0, o]),
              s._param("call-log-entry-text", n),
            ],
          );
    }
    function u(e) {
      var t = e.msg;
      if (o("WAWebMsgGetters").getIsCallSilenced(t))
        return s._(/*BTDS*/ "Silenced unknown caller");
      var n = c(t.subtype);
      return n != null
        ? n
        : (o("WAWebMsgGetters").getCallOutcome(t) &&
            (n = d({
              isAdHocGroupCall: o("WAWebMsgGetters").getIsAdHocGroupCall(t),
              isMissedCall: o("WAWebCallLogUtils").getIsCallLogOutcomeMissed(t),
              isVideoCall: o("WAWebMsgGetters").getIsVideoCall(t),
            })),
          n != null ? n : "");
    }
    function c(e) {
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
    function d(e) {
      var t = e.isAdHocGroupCall,
        n = e.isMissedCall,
        r = e.isVideoCall;
      return n
        ? t
          ? s._(/*BTDS*/ "Missed group call")
          : r
            ? s._(/*BTDS*/ "Missed video call")
            : s._(/*BTDS*/ "Missed voice call")
        : t
          ? s._(/*BTDS*/ "Group call")
          : r
            ? s._(/*BTDS*/ "Video call")
            : s._(/*BTDS*/ "Voice call");
    }
    l.default = e;
  },
  226,
);
