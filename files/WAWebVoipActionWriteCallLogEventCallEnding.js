__d(
  "WAWebVoipActionWriteCallLogEventCallEnding",
  [
    "fbt",
    "Promise",
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
      d,
      m = d || (d = o("react"));
    function p(e) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          try {
            var a,
              i,
              l = t.bytesReceived,
              d = t.bytesSent,
              p = t.callCreatorJid,
              _ = t.callId,
              f = t.callLinkToken,
              g = t.connectTime,
              h = t.fromMe,
              y = t.groupJid,
              C = t.isCallLink,
              b = t.participantEntries,
              v = t.peerJid,
              S = t.result,
              R = t.startTime,
              L = t.terminatedByDeviceSwitch,
              E = t.videoCall;
            if (
              o("WAWebVoipTransferredCallRegistry").hasTransferredCallFailed(_)
            ) {
              (o("WALogger").LOG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: skipping call log for failed transfer segment ",
                    "",
                  ])),
                _,
              ),
                o("WAWebVoipActionWriteCallLogImpl").markCallIdProcessed(_));
              return;
            }
            var k = d != null ? d : void 0,
              I = l != null ? l : void 0,
              T = o("WAWebCallLogUtils").getCallOutcomeFromCallLogResult(S, g),
              D =
                S === o("WAWebVoipWaCallEnums").CallLogResult.ScreenedElsewhere;
            L &&
              o("WAWebToastManager").ToastManager.open(
                m.jsx(o("WAWebToast.react").Toast, {
                  msg: s._(/*BTDS*/ "You joined the call from another device."),
                }),
              );
            var x =
                (a =
                  (i = o(
                    "WAWebVoipTransferredCallRegistry",
                  ).getTransferredCallRoot(_)) == null
                    ? void 0
                    : i.rootCallId) != null
                  ? a
                  : _,
              $ = o(
                "WAWebVoipOngoingCallCollection",
              ).WAWebVoipOngoingCallCollection.getByCallId(x),
              P =
                p != null
                  ? p
                  : h
                    ? o(
                        "WAWebUserUtils",
                      ).getMeDevicePnLessOrFallback_DO_NOT_USE()
                    : v,
              N = C === !0 || !r("isStringNullOrEmpty")(f);
            if ($ != null) {
              var M = y != null,
                w = yield o(
                  "WAWebVoipCallLogWriteMutex",
                ).WACallLogWriteMutex.acquire();
              try {
                var A = o("WAWebVoipAdHocCallLogs").getCallLogMsgsForCall(_);
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
                  B = yield (c || (c = n("Promise"))).allSettled(
                    A.map(function (e) {
                      var t = babelHelpers.extends({}, e.toJSON(), {
                        callDuration: g == null ? e.callDuration : g,
                        callOutcome: O(e)
                          ? o("WAWebCallLogMsgData.flow").CallOutcome.Ongoing
                          : T,
                        finalCallOutcome: T,
                        terminatedByDeviceSwitch: L,
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
                }) &&
                  o("WAWebVoipActionWriteCallLogImpl").markCallIdProcessed(_),
                  y == null &&
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
              if (y != null || N) return;
              var q = yield o("WAWebCallLogUtils").getCallLogTargetDetails({
                  callCreatorWid: P,
                  peerWid: v,
                  callId: _,
                  groupJid: y,
                  isCallLink: N,
                  participants: r("compactMap")(b, function (e) {
                    return e.jid;
                  }),
                }),
                U = q.callCreatorUserWid,
                V = q.chatId,
                H = q.fromMe,
                G = q.msgKeyId,
                z = q.participant,
                j = q.viewMode,
                K = {
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
                  isVideoCall: E != null ? E : !1,
                  callCreator: P,
                  callDuration: g == null ? void 0 : g,
                  from: U,
                  t: R,
                  callParticipants: b.map(function (e) {
                    return { participant: e.jid, outcome: e.result };
                  }),
                  to: V,
                  isCallLink: !1,
                  callLinkToken: f != null ? f : void 0,
                  finalCallOutcome: T,
                  terminatedByDeviceSwitch: L,
                  screenedElsewhere: D,
                  bytesSent: k,
                  bytesReceived: I,
                },
                Q = yield o(
                  "WAWebVoipActionWriteCallLogImpl",
                ).writeVoipCallLogMessageImpl(V, K, !1);
              Q != null &&
                o("WAWebVoipActionWriteCallLogImpl").markCallIdProcessed(_);
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
        _.apply(this, arguments)
      );
    }
    l.generateCallLogFromNativeCallEndingEvent = p;
  },
  226,
);
