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
              R = o("WAWebCallLogUtils").getCallOutcomeFromCallLogResult(h, d);
            C &&
              o("WAWebToastManager").ToastManager.open(
                c.jsx(o("WAWebToast.react").Toast, {
                  msg: s._(/*BTDS*/ "You joined the call from another device."),
                }),
              );
            var L = o(
                "WAWebVoipOngoingCallCollection",
              ).WAWebVoipOngoingCallCollection.getByCallId(l),
              E =
                i != null
                  ? i
                  : m
                    ? o(
                        "WAWebUserPrefsMeUser",
                      ).getMeDevicePnOrThrow_DO_NOT_USE()
                    : g,
              k = _ === !0 || !r("isStringNullOrEmpty")(u);
            if (L != null) {
              var I = babelHelpers.extends({}, L.toJSON(), {
                  callDuration: d == null ? L.callDuration : d,
                  callOutcome: R,
                  finalCallOutcome: R,
                  terminatedByDeviceSwitch: C,
                  bytesSent: v,
                  bytesReceived: S,
                }),
                T = yield o(
                  "WAWebVoipActionWriteCallLogImpl",
                ).writeVoipCallLogMessageImpl(I.to, I, !1);
              T != null &&
                o("WAWebVoipActionWriteCallLogImpl").markCallIdProcessed(l);
            } else {
              if (p != null || k) return;
              var D = yield o("WAWebCallLogUtils").getCallLogTargetDetails({
                  callCreatorWid: E,
                  peerWid: g,
                  callId: l,
                  groupJid: p,
                  isCallLink: k,
                  participants: r("compactMap")(f, function (e) {
                    return e.jid;
                  }),
                }),
                x = D.callCreatorUserWid,
                $ = D.chatId,
                P = D.msgKeyId,
                N = D.participant,
                M = D.viewMode,
                w = {
                  id: new (r("WAWebMsgKey"))({
                    remote: $,
                    participant: N,
                    fromMe: m,
                    id: P,
                  }),
                  type: o("WAWebMsgType").MSG_TYPE.CALL_LOG,
                  kind: o("WAWebMsgType").MsgKind.CallLog,
                  viewMode: M,
                  callOutcome: R,
                  isVideoCall: b != null ? b : !1,
                  callCreator: E,
                  callDuration: d == null ? void 0 : d,
                  from: x,
                  t: y,
                  callParticipants: f.map(function (e) {
                    return { participant: e.jid, outcome: e.result };
                  }),
                  to: $,
                  isCallLink: !1,
                  callLinkToken: u != null ? u : void 0,
                  finalCallOutcome: R,
                  terminatedByDeviceSwitch: C,
                  bytesSent: v,
                  bytesReceived: S,
                },
                A = yield o(
                  "WAWebVoipActionWriteCallLogImpl",
                ).writeVoipCallLogMessageImpl($, w, !1);
              A != null &&
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
