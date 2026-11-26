__d(
  "WAWebFormatCallLog",
  [
    "fbt",
    "WAWebCallLogUtils",
    "WAWebFormatOngoingCallLog",
    "WAWebL10N",
    "WAWebMsgGetters",
  ],
  function (t, n, r, o, a, i, l, s) {
    function e(e) {
      var t,
        n = o("WAWebFormatOngoingCallLog").formatOngoingOnAnotherDevice(e.msg);
      if (n != null) return n;
      var a = u(e),
        i = (t = e.options.callLogCount) != null ? t : 1;
      return i <= 1 || a === ""
        ? a
        : s._(/*BTDS*/ "", [
            s._param("call-logs-merged-count", r("WAWebL10N").n(i), [0, i]),
            s._param("call-log-entry-text", a),
          ]);
    }
    function u(e) {
      var t = e.msg,
        n = e.options;
      if (o("WAWebMsgGetters").getIsCallSilenced(t)) return s._(/*BTDS*/ "");
      var r = c(t.subtype);
      return r != null ||
        ((r = o("WAWebFormatOngoingCallLog").formatLiveOngoingCallLog(
          t,
          n.isCallLive,
        )),
        r != null)
        ? r
        : (o("WAWebMsgGetters").getCallOutcome(t) != null &&
            (r = d({
              isAdHocGroupCall: o("WAWebMsgGetters").getIsAdHocGroupCall(t),
              isMissedCall: o("WAWebCallLogUtils").getIsCallLogOutcomeMissed(t),
              isVideoCall: o("WAWebMsgGetters").getIsVideoCall(t),
            })),
          r != null ? r : "");
    }
    function c(e) {
      switch (e) {
        case "miss":
          return s._(/*BTDS*/ "");
        case "miss_video":
          return s._(/*BTDS*/ "");
        case "miss_group":
        case "miss_group_video":
          return s._(/*BTDS*/ "");
      }
    }
    function d(e) {
      var t = e.isAdHocGroupCall,
        n = e.isMissedCall,
        r = e.isVideoCall;
      return n
        ? t
          ? s._(/*BTDS*/ "")
          : r
            ? s._(/*BTDS*/ "")
            : s._(/*BTDS*/ "")
        : t
          ? s._(/*BTDS*/ "")
          : r
            ? s._(/*BTDS*/ "")
            : s._(/*BTDS*/ "");
    }
    l.default = e;
  },
  226,
);
