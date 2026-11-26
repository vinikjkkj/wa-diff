__d(
  "WAWebVoipActionWriteCallLogInvitee",
  [
    "WALogger",
    "WATimeUtils",
    "WAWebCallCollection",
    "WAWebCallLogMsgData.flow",
    "WAWebMsgKey",
    "WAWebMsgType",
    "WAWebUserUtils",
    "WAWebViewMode.flow",
    "WAWebVoipActionWriteCallLogImpl",
    "WAWebVoipBackendCallLogTargetResolver",
    "WAWebVoipCallLogWriteMutex",
    "WAWebVoipOngoingCallCollection",
    "WAWebVoipWaCallEnums",
    "WAWebWidFactory",
    "getErrorSafe",
    "isStringNullOrEmpty",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s, u, c;
    async function d(t) {
      var n,
        a = (n = r("WAWebCallCollection").activeCall) == null ? void 0 : n.msg;
      if (a == null) {
        o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "voip: invitee call log skipped, no active call log",
            ])),
        );
        return;
      }
      await p(t, a);
    }
    async function m(e, t, n) {
      await e.reduce(function (e, r) {
        return e.then(async function () {
          (await p(r, t)) || n(r);
        });
      }, Promise.resolve());
    }
    async function p(e, t) {
      if (!f(t))
        return (
          o("WALogger").LOG(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "voip: invitee call log skipped, no ad hoc call log",
              ])),
          ),
          !0
        );
      try {
        var n = await o(
          "WAWebVoipBackendCallLogTargetResolver",
        ).get1x1CallLidOrPnDestination({
          callDestinationWid: o("WAWebWidFactory").asUserWidOrThrow(e),
        });
        if (n.equals(t.id.remote)) return !0;
        var a = await o(
          "WAWebVoipCallLogWriteMutex",
        ).WACallLogWriteMutex.acquire();
        try {
          var i;
          if (
            ((i = r("WAWebCallCollection").activeCall) == null
              ? void 0
              : i.msg) !== t &&
            t.callOutcome ===
              o("WAWebCallLogMsgData.flow").CallOutcome.Ongoing &&
            o(
              "WAWebVoipOngoingCallCollection",
            ).WAWebVoipOngoingCallCollection.get(t.id) == null
          )
            return (
              o("WALogger").LOG(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: invitee call log skipped, call ending",
                  ])),
              ),
              !1
            );
          var l = await _(n, t, !0);
          return (
            (l == null ? void 0 : l.callOutcome) ===
              o("WAWebCallLogMsgData.flow").CallOutcome.Ongoing &&
              t.callOutcome !==
                o("WAWebCallLogMsgData.flow").CallOutcome.Ongoing &&
              (await _(n, t, !1)),
            !0
          );
        } finally {
          a.release();
        }
      } catch (e) {
        return (
          o("WALogger")
            .ERROR(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: invitee call log write failed",
                ])),
            )
            .catching(r("getErrorSafe")(e))
            .sendLogs("voip-invitee-call-log-failed"),
          !1
        );
      }
    }
    async function _(e, t, n) {
      var r = g(t, e),
        a = await o(
          "WAWebVoipActionWriteCallLogImpl",
        ).writeVoipCallLogMessageImpl(e, r, !1, !1, !1, n);
      return a == null
        ? null
        : (r.callOutcome === o("WAWebCallLogMsgData.flow").CallOutcome.Ongoing
            ? o(
                "WAWebVoipOngoingCallCollection",
              ).WAWebVoipOngoingCallCollection.add(a, { merge: !0 })
            : o(
                "WAWebVoipOngoingCallCollection",
              ).WAWebVoipOngoingCallCollection.remove(a.id),
          a);
    }
    function f(e) {
      return (
        e.type === o("WAWebMsgType").MSG_TYPE.CALL_LOG &&
        !e.id.remote.isGroup() &&
        e.isCallLink !== !0 &&
        r("isStringNullOrEmpty")(e.callLinkToken)
      );
    }
    function g(e, t) {
      var n,
        a,
        i,
        l,
        s = e.callOutcome === o("WAWebCallLogMsgData.flow").CallOutcome.Ongoing;
      return {
        id: new (r("WAWebMsgKey"))({ remote: t, fromMe: !0, id: e.id.id }),
        type: o("WAWebMsgType").MSG_TYPE.CALL_LOG,
        kind: o("WAWebMsgType").MsgKind.CallLog,
        viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
        callOutcome: s
          ? o("WAWebCallLogMsgData.flow").CallOutcome.Ongoing
          : (n = e.callOutcome) != null
            ? n
            : o("WAWebCallLogMsgData.flow").CallOutcome.Unknown,
        finalCallOutcome: (a = e.finalCallOutcome) != null ? a : void 0,
        isVideoCall: e.isVideoCall === !0,
        callCreator: (i = e.callCreator) != null ? i : void 0,
        from: o("WAWebUserUtils").getMeUserMatchingAddressingModeOrThrow(t),
        to: t,
        t: Math.max(s ? o("WATimeUtils").unixTime() : 0, e.t + 1),
        callDuration: s ? 0 : (l = e.callDuration) != null ? l : 0,
        callParticipants: h(e.callParticipants, t),
      };
    }
    function h(e, t) {
      var n = [].concat(e != null ? e : []);
      return (
        n.some(function (e) {
          var n = e.participant;
          return n.equals(t);
        }) ||
          n.push({
            participant: t,
            outcome: o("WAWebVoipWaCallEnums").CallParticipantState.Invited,
          }),
        n
      );
    }
    ((l.writeCallLogForInvitee = d), (l.writeCallLogsForInvitees = m));
  },
  98,
);
