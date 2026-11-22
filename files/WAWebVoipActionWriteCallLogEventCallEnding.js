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
              g = t.callLinkToken,
              h = t.connectTime,
              y = t.fromMe,
              C = t.groupJid,
              b = t.isCallLink,
              v = t.participantEntries,
              S = t.peerJid,
              R = t.result,
              L = t.startTime,
              E = t.terminatedByDeviceSwitch,
              k = t.videoCall;
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
            var I = d != null ? d : void 0,
              T = l != null ? l : void 0,
              D = o("WAWebCallLogUtils").getCallOutcomeFromCallLogResult(R, h),
              x =
                R === o("WAWebVoipWaCallEnums").CallLogResult.ScreenedElsewhere;
            E &&
              o("WAWebToastManager").ToastManager.open(
                m.jsx(o("WAWebToast.react").Toast, {
                  msg: s._(/*BTDS*/ "You joined the call from another device."),
                }),
              );
            var $ =
                (a =
                  (i = o(
                    "WAWebVoipTransferredCallRegistry",
                  ).getTransferredCallRoot(_)) == null
                    ? void 0
                    : i.rootCallId) != null
                  ? a
                  : _,
              P = o(
                "WAWebVoipOngoingCallCollection",
              ).WAWebVoipOngoingCallCollection.getByCallId($),
              N =
                p != null
                  ? p
                  : y
                    ? o(
                        "WAWebUserUtils",
                      ).getMeDevicePnLessOrFallback_DO_NOT_USE()
                    : S,
              M = b === !0 || !r("isStringNullOrEmpty")(g);
            if (P != null) {
              var w = C != null,
                A = yield o(
                  "WAWebVoipCallLogWriteMutex",
                ).WACallLogWriteMutex.acquire();
              try {
                var F = o("WAWebVoipAdHocCallLogs").getCallLogMsgsForCall(_);
                if (F.length === 0) return;
                var O = o(
                    "WAWebVoipOngoingCallCollection",
                  ).WAWebVoipOngoingCallCollection.getAllByCallId($),
                  B = function (t) {
                    return (
                      w ||
                      (!M &&
                        o("WAWebVoipAdHocCallLogs").isAdHocGroupCallLog(t) &&
                        O.includes(t))
                    );
                  },
                  W = yield (c || (c = n("Promise"))).allSettled(
                    F.map(function (e) {
                      var t = babelHelpers.extends({}, e.toJSON(), {
                        callDuration: h == null ? e.callDuration : h,
                        callOutcome: B(e)
                          ? o("WAWebCallLogMsgData.flow").CallOutcome.Ongoing
                          : D,
                        finalCallOutcome: D,
                        terminatedByDeviceSwitch: E,
                        screenedElsewhere: x,
                        bytesSent: I,
                        bytesReceived: T,
                      });
                      return o(
                        "WAWebVoipActionWriteCallLogImpl",
                      ).writeVoipCallLogMessageImpl(t.to, t, !1);
                    }),
                  );
                (W.some(function (e) {
                  return e.status === "fulfilled" && e.value != null;
                }) &&
                  o("WAWebVoipActionWriteCallLogImpl").markCallIdProcessed(_),
                  C == null &&
                    !M &&
                    F.forEach(function (e, t) {
                      var n = W[t];
                      !B(e) &&
                        n.status === "fulfilled" &&
                        n.value != null &&
                        o(
                          "WAWebVoipOngoingCallCollection",
                        ).WAWebVoipOngoingCallCollection.remove(e.id);
                    }));
                for (var q of W) if (q.status === "rejected") throw q.reason;
              } finally {
                A.release();
              }
            } else {
              if (C != null || M) return;
              var U = yield o("WAWebCallLogUtils").getCallLogTargetDetails({
                  callCreatorWid: N,
                  peerWid: S,
                  callId: _,
                  groupJid: C,
                  isCallLink: M,
                  participants: r("compactMap")(v, function (e) {
                    return e.jid;
                  }),
                }),
                V = U.callCreatorUserWid,
                H = U.chatId,
                G = U.fromMe,
                z = U.msgKeyId,
                j = U.participant,
                K = U.viewMode,
                Q = babelHelpers.extends(
                  {
                    id: new (r("WAWebMsgKey"))({
                      remote: H,
                      participant: j,
                      fromMe: G,
                      id: z,
                    }),
                    type: o("WAWebMsgType").MSG_TYPE.CALL_LOG,
                    kind: o("WAWebMsgType").MsgKind.CallLog,
                    viewMode: K,
                    callOutcome: D,
                    isVideoCall: k != null ? k : !1,
                    callCreator: N,
                    callDuration: h == null ? void 0 : h,
                    from: V,
                    t: L,
                  },
                  f(v),
                  {
                    to: H,
                    isCallLink: !1,
                    callLinkToken: g != null ? g : void 0,
                    finalCallOutcome: D,
                    terminatedByDeviceSwitch: E,
                    screenedElsewhere: x,
                    bytesSent: I,
                    bytesReceived: T,
                  },
                ),
                X = yield o(
                  "WAWebVoipActionWriteCallLogImpl",
                ).writeVoipCallLogMessageImpl(H, Q, !1);
              X != null &&
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
    function f(e) {
      return e.length === 0
        ? null
        : {
            callParticipants: e.map(function (e) {
              return { participant: e.jid, outcome: e.result };
            }),
          };
    }
    l.generateCallLogFromNativeCallEndingEvent = p;
  },
  226,
);
