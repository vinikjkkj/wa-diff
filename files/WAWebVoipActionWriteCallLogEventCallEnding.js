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
    "WAWebVoipBackendCallLogTargetResolver",
    "WAWebVoipCallLogWriteMutex",
    "WAWebVoipNativeRootCallLogEnding",
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
        var E = o(
            "WAWebVoipNativeRootCallLogEnding",
          ).captureNativeRootCallLogEnd(t),
          k = l != null ? l : void 0,
          I = i != null ? i : void 0,
          T = o("WAWebCallLogUtils").getCallOutcomeFromCallLogResult(v, f),
          D = v === o("WAWebVoipWaCallEnums").CallLogResult.ScreenedElsewhere;
        R &&
          o("WAWebToastManager").ToastManager.open(
            d.jsx(o("WAWebToast.react").Toast, { msg: s._(/*BTDS*/ "") }),
          );
        var x =
            (n =
              (a = o("WAWebVoipTransferredCallRegistry").getTransferredCallRoot(
                m,
              )) == null
                ? void 0
                : a.rootCallId) != null
              ? n
              : m,
          $ = o(
            "WAWebVoipOngoingCallCollection",
          ).WAWebVoipOngoingCallCollection.getByCallId(x),
          P =
            c != null
              ? c
              : g
                ? o("WAWebUserUtils").getMeDevicePnLessOrFallback_DO_NOT_USE()
                : b,
          N = y === !0 || !r("isStringNullOrEmpty")(_);
        if ($ != null) {
          var M = h != null,
            w = await o(
              "WAWebVoipCallLogWriteMutex",
            ).WACallLogWriteMutex.acquire();
          try {
            var A = o("WAWebVoipAdHocCallLogs").getCallLogMsgsForCall(m);
            if (A.length === 0) return;
            var F = o(
                "WAWebVoipOngoingCallCollection",
              ).WAWebVoipOngoingCallCollection.getAllByCallId(x),
              O = function (t) {
                return (
                  M ||
                  (!N &&
                    o("WAWebVoipAdHocCallLogs").isAdHocGroupCallLog(t) &&
                    F.includes(t))
                );
              },
              B = await Promise.allSettled(
                A.map(function (e) {
                  var t = babelHelpers.extends({}, e.toJSON(), {
                    callDuration: f == null ? e.callDuration : f,
                    callOutcome: O(e)
                      ? o("WAWebCallLogMsgData.flow").CallOutcome.Ongoing
                      : T,
                    finalCallOutcome: T,
                    terminatedByDeviceSwitch: R,
                    screenedElsewhere: D,
                    bytesSent: k,
                    bytesReceived: I,
                  });
                  return o(
                    "WAWebVoipActionWriteCallLogImpl",
                  ).writeVoipCallLogMessageImpl(t.to, t, !1);
                }),
              );
            (B.some(function (e) {
              return e.status === "fulfilled" && e.value != null;
            }) && o("WAWebVoipActionWriteCallLogImpl").markCallIdProcessed(m),
              h == null &&
                !N &&
                A.forEach(function (e, t) {
                  var n = B[t];
                  !O(e) &&
                    n.status === "fulfilled" &&
                    n.value != null &&
                    o(
                      "WAWebVoipOngoingCallCollection",
                    ).WAWebVoipOngoingCallCollection.remove(e.id);
                }));
            for (var W of B) if (W.status === "rejected") throw W.reason;
          } finally {
            w.release();
          }
        } else {
          if (h != null || N) return;
          var q = await o(
              "WAWebVoipBackendCallLogTargetResolver",
            ).getCallLogTargetDetails({
              callCreatorWid: P,
              peerWid: b,
              callId: m,
              groupJid: h,
              isCallLink: N,
              participants: r("compactMap")(C, function (e) {
                return e.jid;
              }),
            }),
            U = q.callCreatorUserWid,
            V = q.chatId,
            H = q.fromMe,
            G = q.msgKeyId,
            z = q.participant,
            j = q.viewMode,
            K = babelHelpers.extends(
              {
                id: new (r("WAWebMsgKey"))({
                  remote: V,
                  participant: z,
                  fromMe: H,
                  id: G,
                }),
                type: o("WAWebMsgType").MSG_TYPE.CALL_LOG,
                kind: o("WAWebMsgType").MsgKind.CallLog,
                viewMode: j,
                callOutcome: T,
                isVideoCall: L != null ? L : !1,
                callCreator: P,
                callDuration: f == null ? void 0 : f,
                from: U,
                t: S,
              },
              p(C),
              {
                to: V,
                isCallLink: !1,
                callLinkToken: _ != null ? _ : void 0,
                finalCallOutcome: T,
                terminatedByDeviceSwitch: R,
                screenedElsewhere: D,
                bytesSent: k,
                bytesReceived: I,
              },
            ),
            Q = await o(
              "WAWebVoipNativeRootCallLogEnding",
            ).writeNativeRootCallLogFromEnding(K, m, E);
          Q != null &&
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
