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
              S = n != null ? n : void 0,
              R = o("WAWebCallLogUtils").getCallOutcomeFromCallLogResult(h, d),
              L =
                h === o("WAWebVoipWaCallEnums").CallLogResult.ScreenedElsewhere;
            C &&
              o("WAWebToastManager").ToastManager.open(
                c.jsx(o("WAWebToast.react").Toast, {
                  msg: s._(/*BTDS*/ "You joined the call from another device."),
                }),
              );
            var E = o(
                "WAWebVoipOngoingCallCollection",
              ).WAWebVoipOngoingCallCollection.getByCallId(l),
              k =
                i != null
                  ? i
                  : m
                    ? o(
                        "WAWebUserPrefsMeUser",
                      ).getMeDevicePnOrThrow_DO_NOT_USE()
                    : g,
              I = _ === !0 || !r("isStringNullOrEmpty")(u);
            if (E != null) {
              var T = babelHelpers.extends({}, E.toJSON(), {
                  callDuration: d == null ? E.callDuration : d,
                  callOutcome: R,
                  finalCallOutcome: R,
                  terminatedByDeviceSwitch: C,
                  screenedElsewhere: L,
                  bytesSent: v,
                  bytesReceived: S,
                }),
                D = yield o(
                  "WAWebVoipActionWriteCallLogImpl",
                ).writeVoipCallLogMessageImpl(T.to, T, !1);
              D != null &&
                o("WAWebVoipActionWriteCallLogImpl").markCallIdProcessed(l);
            } else {
              if (p != null || I) return;
              var x = yield o("WAWebCallLogUtils").getCallLogTargetDetails({
                  callCreatorWid: k,
                  peerWid: g,
                  callId: l,
                  groupJid: p,
                  isCallLink: I,
                  participants: r("compactMap")(f, function (e) {
                    return e.jid;
                  }),
                }),
                $ = x.callCreatorUserWid,
                P = x.chatId,
                N = x.msgKeyId,
                M = x.participant,
                w = x.viewMode,
                A = {
                  id: new (r("WAWebMsgKey"))({
                    remote: P,
                    participant: M,
                    fromMe: m,
                    id: N,
                  }),
                  type: o("WAWebMsgType").MSG_TYPE.CALL_LOG,
                  kind: o("WAWebMsgType").MsgKind.CallLog,
                  viewMode: w,
                  callOutcome: R,
                  isVideoCall: b != null ? b : !1,
                  callCreator: k,
                  callDuration: d == null ? void 0 : d,
                  from: $,
                  t: y,
                  callParticipants: f.map(function (e) {
                    return { participant: e.jid, outcome: e.result };
                  }),
                  to: P,
                  isCallLink: !1,
                  callLinkToken: u != null ? u : void 0,
                  finalCallOutcome: R,
                  terminatedByDeviceSwitch: C,
                  screenedElsewhere: L,
                  bytesSent: v,
                  bytesReceived: S,
                },
                F = yield o(
                  "WAWebVoipActionWriteCallLogImpl",
                ).writeVoipCallLogMessageImpl(P, A, !1);
              F != null &&
                o("WAWebVoipActionWriteCallLogImpl").markCallIdProcessed(l);
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
