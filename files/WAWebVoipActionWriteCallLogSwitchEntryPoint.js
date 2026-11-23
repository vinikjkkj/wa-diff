__d(
  "WAWebVoipActionWriteCallLogSwitchEntryPoint",
  [
    "WALogger",
    "WATimeUtils",
    "WAWebABProps",
    "WAWebCallCollection",
    "WAWebCallLogMsgData.flow",
    "WAWebCallLogUtils",
    "WAWebMsgKey",
    "WAWebMsgType",
    "WAWebUserUtils",
    "WAWebVoipActionWriteCallLogImpl",
    "WAWebVoipTransferredCallRegistry",
    "WAWebVoipWaCallEnums",
    "WAWebWidFactory",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c = new Map();
    function d(e) {
      var t;
      if (
        o("WAWebABProps").getABPropConfigValue(
          "enable_1on1_call_transfer_entry_point",
        ) !== !0
      )
        return Promise.resolve();
      var n = e.rootCallId,
        r = ((t = c.get(n)) != null ? t : Promise.resolve()).then(function () {
          return m(e);
        });
      return (
        c.set(n, r),
        r.finally(function () {
          c.get(n) === r && c.delete(n);
        }),
        r
      );
    }
    async function m(t) {
      try {
        t.enabled ? await p(t) : f(t.rootCallId) || (await _(t));
      } catch (t) {
        o("WALogger")
          .ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "voip: writeCallLog: switchEntryPoint",
              ])),
          )
          .catching(r("getErrorSafe")(t))
          .tags("voip")
          .sendLogs("voip-switch-entry-point-call-log-failed");
      }
    }
    async function p(e) {
      var t = await g(e),
        n = t.callCreatorUserWid,
        r = t.chatId,
        a = t.id,
        i = t.rootCallCreatorWid,
        l = t.viewMode;
      o("WALogger").LOG(
        s ||
          (s = babelHelpers.taggedTemplateLiteralLoose([
            "voip: switch entry point: creating ongoing call log rootCallId=",
            "",
          ])),
        e.rootCallId,
      );
      var u = {
          id: a,
          type: o("WAWebMsgType").MSG_TYPE.CALL_LOG,
          kind: o("WAWebMsgType").MsgKind.CallLog,
          viewMode: l,
          callOutcome: o("WAWebCallLogMsgData.flow").CallOutcome.Ongoing,
          isVideoCall: e.isVideoCall,
          callCreator: i,
          from: n,
          to: r,
          t: o("WATimeUtils").unixTime(),
          callDuration: 0,
          callParticipants: [
            {
              participant: e.peerWid,
              outcome: o("WAWebVoipWaCallEnums").CallParticipantState.Connected,
            },
            {
              participant: o(
                "WAWebUserUtils",
              ).getMeUserMatchingAddressingModeOrThrow(e.peerWid),
              outcome: o("WAWebVoipWaCallEnums").CallParticipantState.Connected,
            },
          ],
          selfOtherDeviceConnected: !0,
        },
        c = await o(
          "WAWebVoipActionWriteCallLogImpl",
        ).writeVoipCallLogMessageImpl(r, u, !1, !1, !1, !0);
      c == null &&
        e.isVideoCall &&
        (await o(
          "WAWebVoipActionWriteCallLogImpl",
        ).updateOngoingVoipCallLogImpl({
          chatId: r,
          msgKey: a,
          update: { isVideoCall: !0 },
        }));
    }
    async function _(e) {
      var t = await g(e),
        n = t.chatId,
        r = t.id;
      (o("WALogger").LOG(
        u ||
          (u = babelHelpers.taggedTemplateLiteralLoose([
            "voip: switch entry point: call ended rootCallId=",
            "",
          ])),
        e.rootCallId,
      ),
        await o("WAWebVoipActionWriteCallLogImpl").updateOngoingVoipCallLogImpl(
          {
            chatId: n,
            msgKey: r,
            update: {
              finalCallOutcome: o("WAWebCallLogMsgData.flow").CallOutcome
                .Completed,
            },
          },
        ));
    }
    function f(e) {
      var t;
      return (
        o("WAWebVoipTransferredCallRegistry").getLiveTransferredCallRootId(
          (t = r("WAWebCallCollection").activeCall) == null ? void 0 : t.id,
        ) === e
      );
    }
    async function g(e) {
      var t = e.peerWid,
        n = e.rootCallCreatorJid,
        a = e.rootCallId,
        i = o("WAWebWidFactory").createWid(n),
        l = await o("WAWebCallLogUtils").getCallLogTargetDetails({
          callCreatorWid: i,
          callId: a,
          groupJid: null,
          participants: [t],
        }),
        s = l.callCreatorUserWid,
        u = l.chatId,
        c = l.fromMe,
        d = l.msgKeyId,
        m = l.participant,
        p = l.viewMode;
      return {
        callCreatorUserWid: s,
        chatId: u,
        id: new (r("WAWebMsgKey"))({
          remote: u,
          participant: m,
          fromMe: c,
          id: d,
        }),
        rootCallCreatorWid: i,
        viewMode: p,
      };
    }
    l.writeCallLogForSwitchEntryPoint = d;
  },
  98,
);
