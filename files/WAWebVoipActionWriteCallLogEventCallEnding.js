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
            var n = t.bytesReceived,
              a = t.bytesSent,
              i = t.callCreatorJid,
              l = t.callId,
              u = t.callLinkToken,
              d = t.connectTime,
              m = t.fromMe,
              p = t.groupJid,
              _ = t.isCallLink,
              f = t.participantEntries,
              g = t.peerJid,
              h = t.result,
              y = t.startTime,
              C = t.terminatedByDeviceSwitch,
              b = t.videoCall,
              v = a != null ? a : void 0,
              S = n != null ? n : void 0;
            C &&
              o("WAWebToastManager").ToastManager.open(
                c.jsx(o("WAWebToast.react").Toast, {
                  msg: s._(/*BTDS*/ "You joined the call from another device."),
                }),
              );
            var R = o(
                "WAWebVoipOngoingCallCollection",
              ).WAWebVoipOngoingCallCollection.getByCallId(l),
              L =
                i != null
                  ? i
                  : m
                    ? o(
                        "WAWebUserPrefsMeUser",
                      ).getMeDevicePnOrThrow_DO_NOT_USE()
                    : g,
              E = yield o("WAWebCallLogUtils").getCallLogTargetDetails({
                callCreatorWid: L,
                peerWid: g,
                callId: l,
                groupJid: p,
                participants: r("compactMap")(f, function (e) {
                  return e.jid;
                }),
              }),
              k = E.callCreatorUserWid,
              I = E.chatId,
              T = E.msgKeyId,
              D = E.participant;
            if (R != null) {
              var x = babelHelpers.extends({}, R.toJSON(), {
                callDuration: d == null ? R.callDuration : d,
                finalCallOutcome: o(
                  "WAWebCallLogUtils",
                ).getCallOutcomeFromCallLogResult(h, d),
                terminatedByDeviceSwitch: C,
                bytesSent: v,
                bytesReceived: S,
              });
              yield o(
                "WAWebVoipActionWriteCallLogImpl",
              ).writeVoipCallLogMessageImpl(I, x, !1);
            } else {
              if (p != null || _ === !0) return;
              var $ = {
                id: new (r("WAWebMsgKey"))({
                  remote: I,
                  participant: D,
                  fromMe: m,
                  id: T,
                }),
                type: o("WAWebMsgType").MSG_TYPE.CALL_LOG,
                kind: o("WAWebMsgType").MsgKind.CallLog,
                viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
                callOutcome: o(
                  "WAWebCallLogUtils",
                ).getCallOutcomeFromCallLogResult(h, d),
                isVideoCall: b != null ? b : !1,
                callCreator: L,
                callDuration: d == null ? void 0 : d,
                from: k,
                t: y,
                callParticipants: f.map(function (e) {
                  return { participant: e.jid, outcome: e.result };
                }),
                to: I,
                isCallLink: !1,
                callLinkToken: u != null ? u : void 0,
                finalCallOutcome: o(
                  "WAWebCallLogUtils",
                ).getCallOutcomeFromCallLogResult(h, d),
                terminatedByDeviceSwitch: C,
                bytesSent: v,
                bytesReceived: S,
              };
              yield o(
                "WAWebVoipActionWriteCallLogImpl",
              ).writeVoipCallLogMessageImpl(I, $, !1);
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
