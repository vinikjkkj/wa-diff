__d(
  "WAWebFormatCallLog",
  [
    "fbt",
    "WAWebABProps",
    "WAWebCallLogUtils",
    "WAWebL10N",
    "WAWebMsgGetters",
    "WAWebVoipCallTransferEntryPointStore",
  ],
  function (t, n, r, o, a, i, l, s) {
    function e(e) {
      var t,
        n = c(e.msg);
      if (n != null) return n;
      var o = u(e),
        a = (t = e.options.callLogCount) != null ? t : 1;
      return a <= 1 || o === ""
        ? o
        : s._(
            /*BTDS*/ '_j{"*":"{call-log-entry-text} ({call-logs-merged-count})"}',
            [
              s._param("call-logs-merged-count", r("WAWebL10N").n(a), [0, a]),
              s._param("call-log-entry-text", o),
            ],
          );
    }
    function u(e) {
      var t = e.msg;
      if (o("WAWebMsgGetters").getIsCallSilenced(t))
        return s._(/*BTDS*/ "Silenced unknown caller");
      var n = d(t.subtype);
      return n != null
        ? n
        : (o("WAWebMsgGetters").getCallOutcome(t) != null &&
            (n = m({
              isAdHocGroupCall: o("WAWebMsgGetters").getIsAdHocGroupCall(t),
              isMissedCall: o("WAWebCallLogUtils").getIsCallLogOutcomeMissed(t),
              isVideoCall: o("WAWebMsgGetters").getIsVideoCall(t),
            })),
          n != null ? n : "");
    }
    function c(e) {
      var t = o("WAWebMsgGetters").getCallId(e);
      if (
        t == null ||
        o("WAWebMsgGetters").getIsGroupCall(e) ||
        o("WAWebABProps").getABPropConfigValue(
          "enable_1on1_call_transfer_entry_point",
        ) !== !0
      )
        return null;
      var n = o(
        "WAWebVoipCallTransferEntryPointStore",
      ).WAWebVoipCallTransferEntryPointStore.getForRootCallId(t);
      return n == null
        ? null
        : n.isVideoCall
          ? s._(/*BTDS*/ "Video call \u2022 On another device")
          : s._(/*BTDS*/ "Voice call \u2022 On another device");
    }
    function d(e) {
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
    function m(e) {
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
