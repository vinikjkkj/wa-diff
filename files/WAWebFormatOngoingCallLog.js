__d(
  "WAWebFormatOngoingCallLog",
  [
    "fbt",
    "WAWebABProps",
    "WAWebCallLogMsgData.flow",
    "WAWebCallLogUtils",
    "WAWebMsgGetters",
    "WAWebUserUtils",
    "WAWebVoipCallTransferEntryPointStore",
    "WAWebVoipWaCallEnums",
    "countWhere",
  ],
  function (t, n, r, o, a, i, l, s) {
    function e(e, t) {
      return (
        u(e) != null ||
        (!o("WAWebMsgGetters").getIsCallSilenced(e) && c(e, t) != null)
      );
    }
    function u(e) {
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
    function c(e, t) {
      return o("WAWebMsgGetters").getCallOutcome(e) !==
        o("WAWebCallLogMsgData.flow").CallOutcome.Ongoing ||
        t !== !0 ||
        (o("WAWebMsgGetters").getFinalCallOutcome(e) ===
          o("WAWebCallLogMsgData.flow").CallOutcome.Completed &&
          !o("WAWebMsgGetters").getIsGroupCall(e))
        ? null
        : d(e);
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
    ((l.getIsOngoingCallLogPreview = e),
      (l.formatOngoingOnAnotherDevice = u),
      (l.formatLiveOngoingCallLog = c));
  },
  226,
);
