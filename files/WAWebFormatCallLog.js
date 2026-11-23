__d(
  "WAWebFormatCallLog",
  [
    "fbt",
    "WAWebABProps",
    "WAWebCallLogMsgData.flow",
    "WAWebCallLogUtils",
    "WAWebL10N",
    "WAWebMsgGetters",
    "WAWebUserUtils",
    "WAWebVoipCallTransferEntryPointStore",
    "WAWebVoipWaCallEnums",
    "countWhere",
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
        : s._(/*BTDS*/ "", [
            s._param("call-logs-merged-count", r("WAWebL10N").n(a), [0, a]),
            s._param("call-log-entry-text", o),
          ]);
    }
    function u(e) {
      var t = e.msg,
        n = e.options;
      if (o("WAWebMsgGetters").getIsCallSilenced(t)) return s._(/*BTDS*/ "");
      var r = g(t.subtype);
      if (r != null) return r;
      var a = o("WAWebMsgGetters").getCallOutcome(t);
      return a === o("WAWebCallLogMsgData.flow").CallOutcome.Ongoing &&
        n.isCallLive === !0 &&
        (o("WAWebMsgGetters").getFinalCallOutcome(t) !==
          o("WAWebCallLogMsgData.flow").CallOutcome.Completed ||
          o("WAWebMsgGetters").getIsGroupCall(t)) &&
        ((r = d(t)), r != null)
        ? r
        : (a != null &&
            (r = h({
              isAdHocGroupCall: o("WAWebMsgGetters").getIsAdHocGroupCall(t),
              isMissedCall: o("WAWebCallLogUtils").getIsCallLogOutcomeMissed(t),
              isVideoCall: o("WAWebMsgGetters").getIsVideoCall(t),
            })),
          r != null ? r : "");
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
          ? s._(/*BTDS*/ "")
          : s._(/*BTDS*/ "");
    }
    function d(e) {
      var t = o("WAWebMsgGetters").getCallParticipants(e),
        n =
          o("WAWebMsgGetters").getIsGroupCall(e) &&
          o("WAWebMsgGetters").getFinalCallOutcome(e) ===
            o("WAWebCallLogMsgData.flow").CallOutcome.Completed,
        a =
          t != null
            ? r("countWhere")(t, function (e) {
                var t = e.outcome,
                  r = e.participant;
                return (
                  t ===
                    o("WAWebVoipWaCallEnums").CallParticipantState.Connected &&
                  !(n && o("WAWebUserUtils").isMeAccount(r))
                );
              })
            : 0,
        i = o("WAWebMsgGetters").getIsVideoCall(e);
      if (!o("WAWebMsgGetters").getIsGroupCall(e)) return a > 1 ? p(i) : _(i);
      var l = !n && o("WAWebCallLogUtils").getIsSelfConnected(t);
      return o("WAWebMsgGetters").getIsAdHocGroupCall(e)
        ? m(e, l, n)
        : l
          ? p(i)
          : a > 0
            ? f(i, a)
            : null;
    }
    function m(e, t, n) {
      return t
        ? s._(/*BTDS*/ "")
        : n
          ? s._(/*BTDS*/ "")
          : o("WAWebMsgGetters").getIsSentByMe(e)
            ? null
            : s._(/*BTDS*/ "");
    }
    function p(e) {
      return e ? s._(/*BTDS*/ "") : s._(/*BTDS*/ "");
    }
    function _(e) {
      return e ? s._(/*BTDS*/ "") : s._(/*BTDS*/ "");
    }
    function f(e, t) {
      return e
        ? s._(/*BTDS*/ "", [s._plural(t, "joined-count")])
        : s._(/*BTDS*/ "", [s._plural(t, "joined-count")]);
    }
    function g(e) {
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
    function h(e) {
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
