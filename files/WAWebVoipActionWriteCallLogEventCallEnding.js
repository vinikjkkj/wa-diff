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
    "WAWebVoipActionWriteCallLogImpl",
    "WAWebVoipOngoingCallCollection",
    "WAWebVoipTransferredCallRegistry",
    "WAWebVoipWaCallEnums",
    "asyncToGeneratorRuntime",
    "compactMap",
    "isStringNullOrEmpty",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c,
      d = c || (c = o("react"));
    function m(e) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          try {
            var n = t.bytesReceived,
              a = t.bytesSent,
              i = t.callCreatorJid,
              l = t.callId,
              c = t.callLinkToken,
              m = t.connectTime,
              p = t.fromMe,
              _ = t.groupJid,
              f = t.isCallLink,
              g = t.participantEntries,
              h = t.peerJid,
              y = t.result,
              C = t.startTime,
              b = t.terminatedByDeviceSwitch,
              v = t.videoCall;
            if (
              o("WAWebVoipTransferredCallRegistry").hasTransferredCallFailed(l)
            ) {
              (o("WALogger").LOG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: skipping call log for failed transfer segment ",
                    "",
                  ])),
                l,
              ),
                o("WAWebVoipActionWriteCallLogImpl").markCallIdProcessed(l));
              return;
            }
            var S = a != null ? a : void 0,
              R = n != null ? n : void 0,
              L = o("WAWebCallLogUtils").getCallOutcomeFromCallLogResult(y, m),
              E =
                y === o("WAWebVoipWaCallEnums").CallLogResult.ScreenedElsewhere;
            b &&
              o("WAWebToastManager").ToastManager.open(
                d.jsx(o("WAWebToast.react").Toast, {
                  msg: s._(/*BTDS*/ "You joined the call from another device."),
                }),
              );
            var k = o(
                "WAWebVoipOngoingCallCollection",
              ).WAWebVoipOngoingCallCollection.getByCallId(l),
              I =
                i != null
                  ? i
                  : p
                    ? o(
                        "WAWebUserPrefsMeUser",
                      ).getMeDevicePnOrThrow_DO_NOT_USE()
                    : h,
              T = f === !0 || !r("isStringNullOrEmpty")(c);
            if (k != null) {
              var D = babelHelpers.extends({}, k.toJSON(), {
                  callDuration: m == null ? k.callDuration : m,
                  callOutcome: L,
                  finalCallOutcome: L,
                  terminatedByDeviceSwitch: b,
                  screenedElsewhere: E,
                  bytesSent: S,
                  bytesReceived: R,
                }),
                x = yield o(
                  "WAWebVoipActionWriteCallLogImpl",
                ).writeVoipCallLogMessageImpl(D.to, D, !1);
              x != null &&
                o("WAWebVoipActionWriteCallLogImpl").markCallIdProcessed(l);
            } else {
              if (_ != null || T) return;
              var $ = yield o("WAWebCallLogUtils").getCallLogTargetDetails({
                  callCreatorWid: I,
                  peerWid: h,
                  callId: l,
                  groupJid: _,
                  isCallLink: T,
                  participants: r("compactMap")(g, function (e) {
                    return e.jid;
                  }),
                }),
                P = $.callCreatorUserWid,
                N = $.chatId,
                M = $.fromMe,
                w = $.msgKeyId,
                A = $.participant,
                F = $.viewMode,
                O = {
                  id: new (r("WAWebMsgKey"))({
                    remote: N,
                    participant: A,
                    fromMe: M,
                    id: w,
                  }),
                  type: o("WAWebMsgType").MSG_TYPE.CALL_LOG,
                  kind: o("WAWebMsgType").MsgKind.CallLog,
                  viewMode: F,
                  callOutcome: L,
                  isVideoCall: v != null ? v : !1,
                  callCreator: I,
                  callDuration: m == null ? void 0 : m,
                  from: P,
                  t: C,
                  callParticipants: g.map(function (e) {
                    return { participant: e.jid, outcome: e.result };
                  }),
                  to: N,
                  isCallLink: !1,
                  callLinkToken: c != null ? c : void 0,
                  finalCallOutcome: L,
                  terminatedByDeviceSwitch: b,
                  screenedElsewhere: E,
                  bytesSent: S,
                  bytesReceived: R,
                },
                B = yield o(
                  "WAWebVoipActionWriteCallLogImpl",
                ).writeVoipCallLogMessageImpl(N, O, !1);
              B != null &&
                o("WAWebVoipActionWriteCallLogImpl").markCallIdProcessed(l);
            }
          } catch (e) {
            o("WALogger")
              .ERROR(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[generateCallLogFromCallSyncRecord] call log gen failed: ",
                    "",
                  ])),
                e,
              )
              .tags("nexus-voip")
              .sendLogs("generate-call-log-message-syncd-failed");
          }
        })),
        p.apply(this, arguments)
      );
    }
    l.generateCallLogFromNativeCallEndingEvent = m;
  },
  226,
);
