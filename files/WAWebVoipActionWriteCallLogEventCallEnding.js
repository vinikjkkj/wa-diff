__d(
  "WAWebVoipActionWriteCallLogEventCallEnding",
  [
    "fbt",
    "WALogger",
    "WAWebCallLogUtils",
    "WAWebMsgKey",
    "WAWebMsgType",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebUserPrefsMeUser",
    "WAWebViewMode.flow",
    "WAWebVoipActionWriteCallLogImpl",
    "WAWebVoipOngoingCallCollection",
    "asyncToGeneratorRuntime",
    "compactMap",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c = u || (u = o("react"));
    function d(e) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          try {
            var n = t.callCreatorJid,
              a = t.callId,
              i = t.callLinkToken,
              l = t.connectTime,
              u = t.fromMe,
              d = t.groupJid,
              m = t.isCallLink,
              p = t.participantEntries,
              _ = t.peerJid,
              f = t.result,
              g = t.startTime,
              h = t.terminatedByDeviceSwitch,
              y = t.videoCall;
            h &&
              o("WAWebToastManager").ToastManager.open(
                c.jsx(o("WAWebToast.react").Toast, {
                  msg: s._(/*BTDS*/ "You joined the call from another device."),
                }),
              );
            var C = o(
                "WAWebVoipOngoingCallCollection",
              ).WAWebVoipOngoingCallCollection.getByCallId(a),
              b =
                n != null
                  ? n
                  : u
                    ? o(
                        "WAWebUserPrefsMeUser",
                      ).getMeDevicePnOrThrow_DO_NOT_USE()
                    : _,
              v = yield o("WAWebCallLogUtils").getCallLogTargetDetails({
                callCreatorWid: b,
                peerWid: _,
                callId: a,
                groupJid: d,
                participants: r("compactMap")(p, function (e) {
                  return e.jid;
                }),
              }),
              S = v.callCreatorUserWid,
              R = v.chatId,
              L = v.msgKeyId,
              E = v.participant;
            if (C != null) {
              var k = babelHelpers.extends({}, C.toJSON(), {
                callDuration: l == null ? C.callDuration : l,
                finalCallOutcome: o(
                  "WAWebCallLogUtils",
                ).getCallOutcomeFromCallLogResult(f, l),
                terminatedByDeviceSwitch: h,
              });
              yield o(
                "WAWebVoipActionWriteCallLogImpl",
              ).writeVoipCallLogMessageImpl(R, k, !1);
            } else {
              if (d != null || m === !0) return;
              var I = {
                id: new (r("WAWebMsgKey"))({
                  remote: R,
                  participant: E,
                  fromMe: u,
                  id: L,
                }),
                type: o("WAWebMsgType").MSG_TYPE.CALL_LOG,
                kind: o("WAWebMsgType").MsgKind.CallLog,
                viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
                callOutcome: o(
                  "WAWebCallLogUtils",
                ).getCallOutcomeFromCallLogResult(f, l),
                isVideoCall: y != null ? y : !1,
                callCreator: b,
                callDuration: l == null ? void 0 : l,
                from: S,
                t: g,
                callParticipants: p.map(function (e) {
                  return { participant: e.jid, outcome: e.result };
                }),
                to: R,
                isCallLink: !1,
                callLinkToken: i != null ? i : void 0,
                finalCallOutcome: o(
                  "WAWebCallLogUtils",
                ).getCallOutcomeFromCallLogResult(f, l),
                terminatedByDeviceSwitch: h,
              };
              yield o(
                "WAWebVoipActionWriteCallLogImpl",
              ).writeVoipCallLogMessageImpl(R, I, !1);
            }
          } catch (t) {
            o("WALogger")
              .ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[generateCallLogFromCallSyncRecord] call log gen failed: ",
                    "",
                  ])),
                t,
              )
              .tags("nexus-voip")
              .sendLogs("generate-call-log-message-syncd-failed");
          }
        })),
        m.apply(this, arguments)
      );
    }
    l.generateCallLogFromNativeCallEndingEvent = d;
  },
  226,
);
