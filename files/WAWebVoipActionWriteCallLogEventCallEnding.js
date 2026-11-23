__d(
  "WAWebVoipActionWriteCallLogEventCallEnding",
  [
    "fbt",
    "WALogger",
    "WAWebCallLogMsgData.flow",
    "WAWebCallLogUtils",
    "WAWebMsgKey",
    "WAWebMsgType",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebUserUtils",
    "WAWebVoipActionWriteCallLogImpl",
    "WAWebVoipAdHocCallLogs",
    "WAWebVoipCallLogWriteMutex",
    "WAWebVoipOngoingCallCollection",
    "WAWebVoipTransferredCallRegistry",
    "WAWebVoipWaCallEnums",
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
    async function m(t) {
      try {
        var n,
          a,
          i = t.bytesReceived,
          l = t.bytesSent,
          c = t.callCreatorJid,
          m = t.callId,
          _ = t.callLinkToken,
          f = t.connectTime,
          g = t.fromMe,
          h = t.groupJid,
          y = t.isCallLink,
          C = t.participantEntries,
          b = t.peerJid,
          v = t.result,
          S = t.startTime,
          R = t.terminatedByDeviceSwitch,
          L = t.videoCall;
        if (o("WAWebVoipTransferredCallRegistry").hasTransferredCallFailed(m)) {
          (o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "voip: skipping call log for failed transfer segment ",
                "",
              ])),
            m,
          ),
            o("WAWebVoipActionWriteCallLogImpl").markCallIdProcessed(m));
          return;
        }
        var E = l != null ? l : void 0,
          k = i != null ? i : void 0,
          I = o("WAWebCallLogUtils").getCallOutcomeFromCallLogResult(v, f),
          T = v === o("WAWebVoipWaCallEnums").CallLogResult.ScreenedElsewhere;
        R &&
          o("WAWebToastManager").ToastManager.open(
            d.jsx(o("WAWebToast.react").Toast, { msg: s._(/*BTDS*/ "") }),
          );
        var D =
            (n =
              (a = o("WAWebVoipTransferredCallRegistry").getTransferredCallRoot(
                m,
              )) == null
                ? void 0
                : a.rootCallId) != null
              ? n
              : m,
          x = o(
            "WAWebVoipOngoingCallCollection",
          ).WAWebVoipOngoingCallCollection.getByCallId(D),
          $ =
            c != null
              ? c
              : g
                ? o("WAWebUserUtils").getMeDevicePnLessOrFallback_DO_NOT_USE()
                : b,
          P = y === !0 || !r("isStringNullOrEmpty")(_);
        if (x != null) {
          var N = h != null,
            M = await o(
              "WAWebVoipCallLogWriteMutex",
            ).WACallLogWriteMutex.acquire();
          try {
            var w = o("WAWebVoipAdHocCallLogs").getCallLogMsgsForCall(m);
            if (w.length === 0) return;
            var A = o(
                "WAWebVoipOngoingCallCollection",
              ).WAWebVoipOngoingCallCollection.getAllByCallId(D),
              F = function (t) {
                return (
                  N ||
                  (!P &&
                    o("WAWebVoipAdHocCallLogs").isAdHocGroupCallLog(t) &&
                    A.includes(t))
                );
              },
              O = await Promise.allSettled(
                w.map(function (e) {
                  var t = babelHelpers.extends({}, e.toJSON(), {
                    callDuration: f == null ? e.callDuration : f,
                    callOutcome: F(e)
                      ? o("WAWebCallLogMsgData.flow").CallOutcome.Ongoing
                      : I,
                    finalCallOutcome: I,
                    terminatedByDeviceSwitch: R,
                    screenedElsewhere: T,
                    bytesSent: E,
                    bytesReceived: k,
                  });
                  return o(
                    "WAWebVoipActionWriteCallLogImpl",
                  ).writeVoipCallLogMessageImpl(t.to, t, !1);
                }),
              );
            (O.some(function (e) {
              return e.status === "fulfilled" && e.value != null;
            }) && o("WAWebVoipActionWriteCallLogImpl").markCallIdProcessed(m),
              h == null &&
                !P &&
                w.forEach(function (e, t) {
                  var n = O[t];
                  !F(e) &&
                    n.status === "fulfilled" &&
                    n.value != null &&
                    o(
                      "WAWebVoipOngoingCallCollection",
                    ).WAWebVoipOngoingCallCollection.remove(e.id);
                }));
            for (var B of O) if (B.status === "rejected") throw B.reason;
          } finally {
            M.release();
          }
        } else {
          if (h != null || P) return;
          var W = await o("WAWebCallLogUtils").getCallLogTargetDetails({
              callCreatorWid: $,
              peerWid: b,
              callId: m,
              groupJid: h,
              isCallLink: P,
              participants: r("compactMap")(C, function (e) {
                return e.jid;
              }),
            }),
            q = W.callCreatorUserWid,
            U = W.chatId,
            V = W.fromMe,
            H = W.msgKeyId,
            G = W.participant,
            z = W.viewMode,
            j = babelHelpers.extends(
              {
                id: new (r("WAWebMsgKey"))({
                  remote: U,
                  participant: G,
                  fromMe: V,
                  id: H,
                }),
                type: o("WAWebMsgType").MSG_TYPE.CALL_LOG,
                kind: o("WAWebMsgType").MsgKind.CallLog,
                viewMode: z,
                callOutcome: I,
                isVideoCall: L != null ? L : !1,
                callCreator: $,
                callDuration: f == null ? void 0 : f,
                from: q,
                t: S,
              },
              p(C),
              {
                to: U,
                isCallLink: !1,
                callLinkToken: _ != null ? _ : void 0,
                finalCallOutcome: I,
                terminatedByDeviceSwitch: R,
                screenedElsewhere: T,
                bytesSent: E,
                bytesReceived: k,
              },
            ),
            K = await o(
              "WAWebVoipActionWriteCallLogImpl",
            ).writeVoipCallLogMessageImpl(U, j, !1);
          K != null &&
            o("WAWebVoipActionWriteCallLogImpl").markCallIdProcessed(m);
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
    }
    function p(e) {
      return e.length === 0
        ? null
        : {
            callParticipants: e.map(function (e) {
              return { participant: e.jid, outcome: e.result };
            }),
          };
    }
    l.generateCallLogFromNativeCallEndingEvent = m;
  },
  226,
);
