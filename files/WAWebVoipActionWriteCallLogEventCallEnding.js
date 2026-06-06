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
    "compactMap",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c = u || (u = o("react"));
    async function d(t) {
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
                ? o("WAWebUserPrefsMeUser").getMeDevicePnOrThrow_DO_NOT_USE()
                : g,
          k = await o("WAWebCallLogUtils").getCallLogTargetDetails({
            callCreatorWid: E,
            peerWid: g,
            callId: l,
            groupJid: p,
            participants: r("compactMap")(f, function (e) {
              return e.jid;
            }),
          }),
          I = k.callCreatorUserWid,
          T = k.chatId,
          D = k.msgKeyId,
          x = k.participant;
        if (L != null) {
          var $ = babelHelpers.extends({}, L.toJSON(), {
            callDuration: d == null ? L.callDuration : d,
            callOutcome: R,
            finalCallOutcome: R,
            terminatedByDeviceSwitch: C,
            bytesSent: v,
            bytesReceived: S,
          });
          await o(
            "WAWebVoipActionWriteCallLogImpl",
          ).writeVoipCallLogMessageImpl(T, $, !1);
        } else {
          if (p != null || _ === !0) return;
          var P = {
            id: new (r("WAWebMsgKey"))({
              remote: T,
              participant: x,
              fromMe: m,
              id: D,
            }),
            type: o("WAWebMsgType").MSG_TYPE.CALL_LOG,
            kind: o("WAWebMsgType").MsgKind.CallLog,
            viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
            callOutcome: R,
            isVideoCall: b != null ? b : !1,
            callCreator: E,
            callDuration: d == null ? void 0 : d,
            from: I,
            t: y,
            callParticipants: f.map(function (e) {
              return { participant: e.jid, outcome: e.result };
            }),
            to: T,
            isCallLink: !1,
            callLinkToken: u != null ? u : void 0,
            finalCallOutcome: R,
            terminatedByDeviceSwitch: C,
            bytesSent: v,
            bytesReceived: S,
          };
          await o(
            "WAWebVoipActionWriteCallLogImpl",
          ).writeVoipCallLogMessageImpl(T, P, !1);
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
    }
    l.generateCallLogFromNativeCallEndingEvent = d;
  },
  226,
);
