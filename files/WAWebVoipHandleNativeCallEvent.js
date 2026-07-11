__d(
  "WAWebVoipHandleNativeCallEvent",
  [
    "Promise",
    "WALogger",
    "WAWebABProps",
    "WAWebBackendApi",
    "WAWebCoreActionsODS",
    "WAWebVoipAudioCaptureBase",
    "WAWebVoipBatteryDiagnostics",
    "WAWebVoipBrowserMetrics",
    "WAWebVoipCallStateUtils",
    "WAWebVoipContactUtils",
    "WAWebVoipCrashRecovery",
    "WAWebVoipErrorLogUpload",
    "WAWebVoipFocusTracker",
    "WAWebVoipGatingUtils",
    "WAWebVoipHandleLidCallerDisplayInfo",
    "WAWebVoipHandleNativeCallEventCallLinkHandlers",
    "WAWebVoipHandleNativeCallEventCallLogHandlers",
    "WAWebVoipHandleNativeCallEventFieldstatsHandlers",
    "WAWebVoipHandleNativeCallEventMediaHandlers",
    "WAWebVoipP2PConnectionManager",
    "WAWebVoipPersistentFS",
    "WAWebVoipQplHelpers",
    "WAWebVoipSctpConnectionManager",
    "WAWebVoipSignalingEnums",
    "WAWebVoipStackInterface",
    "WAWebVoipThreadPoolManagerRegistry",
    "WAWebVoipVideoCameraCapture",
    "WAWebVoipWaCallEnums",
    "WAWebVoipWasmHeapMonitor",
    "WAWebVoipWebTransportConnectionManager",
    "WAWebVoipWindowMetrics",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _,
      f,
      g,
      h,
      y,
      C,
      b,
      v,
      S,
      R,
      L,
      E,
      k,
      I,
      T,
      D,
      x,
      $,
      P,
      N,
      M,
      w,
      A,
      F,
      O,
      B,
      W;
    function q(e) {
      return e === o("WAWebVoipWaCallEnums").CallState.None
        ? "None"
        : e === o("WAWebVoipWaCallEnums").CallState.Calling
          ? "Calling"
          : e === o("WAWebVoipWaCallEnums").CallState.PreacceptReceived
            ? "PreacceptReceived"
            : e === o("WAWebVoipWaCallEnums").CallState.ReceivedCall
              ? "ReceivedCall"
              : e === o("WAWebVoipWaCallEnums").CallState.AcceptSent
                ? "AcceptSent"
                : e === o("WAWebVoipWaCallEnums").CallState.AcceptReceived
                  ? "AcceptReceived"
                  : e === o("WAWebVoipWaCallEnums").CallState.CallActive
                    ? "CallActive"
                    : e ===
                        o("WAWebVoipWaCallEnums").CallState.CallActiveElseWhere
                      ? "CallActiveElseWhere"
                      : e ===
                          o("WAWebVoipWaCallEnums").CallState
                            .ReceivedCallWithoutOffer
                        ? "ReceivedCallWithoutOffer"
                        : e === o("WAWebVoipWaCallEnums").CallState.Rejoining
                          ? "Rejoining"
                          : e === o("WAWebVoipWaCallEnums").CallState.Link
                            ? "Link"
                            : e ===
                                o("WAWebVoipWaCallEnums").CallState
                                  .ConnectedLonely
                              ? "ConnectedLonely"
                              : e ===
                                  o("WAWebVoipWaCallEnums").CallState.PreCalling
                                ? "PreCalling"
                                : e ===
                                    o("WAWebVoipWaCallEnums").CallState
                                      .CallStateEnding
                                  ? "CallStateEnding"
                                  : e ===
                                      o("WAWebVoipWaCallEnums").CallState
                                        .CallBCallStarting
                                    ? "CallBCallStarting"
                                    : (function () {
                                        throw Error(
                                          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                                            e,
                                        );
                                      })();
    }
    var U = null,
      V = null;
    function H() {
      return {
        initStarted: !1,
        callIsActive: !1,
        relayListReceived: !1,
        cachedRelayListData: null,
      };
    }
    var G = H(),
      z = 90,
      j = null,
      K = null,
      Q = 60,
      X = null,
      Y = null;
    function J() {
      ((V = null), o("WAWebVoipWasmHeapMonitor").stopWasmHeapMonitor());
    }
    function Z(t, n) {
      if (
        t === o("WAWebVoipWaCallEnums").CallState.None ||
        t === o("WAWebVoipWaCallEnums").CallState.CallActiveElseWhere
      ) {
        J();
        return;
      }
      if (
        !(
          V != null || t === o("WAWebVoipWaCallEnums").CallState.CallStateEnding
        )
      ) {
        var a = n.callId;
        ((V = a),
          o("WAWebBackendApi")
            .frontendSendAndReceive("initializeVoipWasm")
            .then(function (e) {
              V === a && o("WAWebVoipWasmHeapMonitor").startWasmHeapMonitor(e);
            })
            .catch(function (t) {
              (V === a && (V = null),
                o("WALogger")
                  .WARN(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [WasmHeap] failed to start monitor",
                      ])),
                  )
                  .catching(r("getErrorSafe")(t)));
            }));
      }
    }
    function ee() {
      j != null &&
        (window.clearTimeout(j),
        (j = null),
        (K = null),
        o("WALogger").LOG(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "voip: caller timeout cleared",
            ])),
        ));
    }
    function te(e, t, n) {
      return ne.apply(this, arguments);
    }
    function ne() {
      return (
        (ne = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, a) {
            if (e.type === "web") {
              var i =
                o("WAWebVoipCallStateUtils").isCallTerminal(t) ||
                o("WAWebVoipCallStateUtils").isCallActive(t);
              if (i) {
                ee();
                return;
              }
              var l = o("WAWebVoipCallStateUtils").isCallOutgoing(t),
                s = a.isCaller === !0,
                u = a.isGroupCall === !0;
              if (l && s && !u) {
                if (j != null) return;
                var c = a.callId;
                if (c == null) {
                  o("WALogger").LOG(
                    f ||
                      (f = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: caller timeout not set, callId is null",
                      ])),
                  );
                  return;
                }
                K = c;
                var d = z;
                try {
                  var m = yield e.getVoipParam("options.caller_timeout");
                  if (m != null && m !== "") {
                    var p = parseInt(m, 10);
                    !isNaN(p) && p > 0 && (d = p);
                  }
                } catch (e) {
                  o("WALogger").LOG(
                    g ||
                      (g = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: failed to get caller timeout param, using default: ",
                        "",
                      ])),
                    e,
                  );
                }
                if (K !== c) {
                  o("WALogger").LOG(
                    h ||
                      (h = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: caller timeout skipped, state changed",
                      ])),
                  );
                  return;
                }
                (o("WALogger").LOG(
                  y ||
                    (y = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: setting caller timeout for outgoing call: ",
                      "s",
                    ])),
                  d,
                ),
                  (j = window.setTimeout(function () {
                    if (K !== c) {
                      o("WALogger").LOG(
                        C ||
                          (C = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: caller timeout fired but call ID changed, ignoring",
                          ])),
                      );
                      return;
                    }
                    (o("WALogger").LOG(
                      b ||
                        (b = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: caller timeout fired, ending call",
                        ])),
                    ),
                      (j = null),
                      (K = null),
                      (W || (W = n("Promise")))
                        .resolve(
                          e.endCall(
                            o("WAWebVoipSignalingEnums").EndCallReason.Timeout,
                            !0,
                          ),
                        )
                        .catch(function (e) {
                          o("WALogger")
                            .ERROR(
                              v ||
                                (v = babelHelpers.taggedTemplateLiteralLoose([
                                  "voip: failed to end call on caller timeout",
                                ])),
                            )
                            .catching(r("getErrorSafe")(e));
                        }));
                  }, d * 1e3)));
              }
            }
          },
        )),
        ne.apply(this, arguments)
      );
    }
    function re() {
      X != null &&
        (window.clearTimeout(X),
        (X = null),
        (Y = null),
        o("WALogger").LOG(
          u ||
            (u = babelHelpers.taggedTemplateLiteralLoose([
              "voip: callee ringing timeout cleared",
            ])),
        ));
    }
    function oe(e) {
      var t = e.callInfo,
        a = e.callState,
        i = e.voipStackInterface;
      if (i.type === "web") {
        var l =
          o("WAWebVoipCallStateUtils").isCallTerminal(a) ||
          o("WAWebVoipCallStateUtils").isCallActive(a) ||
          o("WAWebVoipCallStateUtils").isCallConnecting(a);
        if (l) {
          re();
          return;
        }
        if (
          a === o("WAWebVoipWaCallEnums").CallState.ReceivedCall &&
          t.isCaller !== !0
        ) {
          if (X != null) return;
          var s = t.callId;
          if (s == null) {
            o("WALogger").LOG(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: callee ringing timeout not set, callId is null",
                ])),
            );
            return;
          }
          Y = s;
          var u = Q;
          (o("WALogger").LOG(
            d ||
              (d = babelHelpers.taggedTemplateLiteralLoose([
                "voip: callee ringing timeout set: ",
                " (",
                "s)",
              ])),
            s,
            u,
          ),
            (X = window.setTimeout(function () {
              if (Y !== s) {
                o("WALogger").LOG(
                  m ||
                    (m = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: callee ringing timeout fired, callId changed",
                    ])),
                );
                return;
              }
              (o("WALogger").LOG(
                p ||
                  (p = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: callee ringing timeout fired: ",
                    "",
                  ])),
                s,
              ),
                (X = null),
                (Y = null),
                (W || (W = n("Promise")))
                  .resolve(
                    i.endCall(
                      o("WAWebVoipSignalingEnums").EndCallReason.Timeout,
                      !0,
                    ),
                  )
                  .catch(function (e) {
                    o("WALogger")
                      .ERROR(
                        _ ||
                          (_ = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: failed to end call on callee ringing timeout",
                          ])),
                      )
                      .catching(r("getErrorSafe")(e));
                  }),
                o("WAWebBackendApi").frontendFireAndForget("setCallState", {
                  callState: o("WAWebVoipWaCallEnums").CallState.None,
                  callInfo: t,
                }));
            }, u * 1e3)));
        }
      }
    }
    function ae(e, t) {
      return ie.apply(this, arguments);
    }
    function ie() {
      return (
        (ie = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          yield e === o("WAWebVoipWaCallEnums").CallEvent.CallStateChanged
            ? de(t)
            : e === o("WAWebVoipWaCallEnums").CallEvent.SyncDevices
              ? o(
                  "WAWebVoipHandleNativeCallEventCallLogHandlers",
                ).handleSyncDevices(t)
              : e === o("WAWebVoipWaCallEnums").CallEvent.CallEnding
                ? o(
                    "WAWebVoipHandleNativeCallEventCallLogHandlers",
                  ).handleCallEnding(t)
                : e ===
                    o("WAWebVoipWaCallEnums").CallEvent
                      .RejectedDecryptionFailure
                  ? o(
                      "WAWebVoipHandleNativeCallEventCallLogHandlers",
                    ).handleRejectedDecryptionFailure(t)
                  : e ===
                      o("WAWebVoipWaCallEnums").CallEvent.UpdateJoinableCallLog
                    ? o(
                        "WAWebVoipHandleNativeCallEventCallLogHandlers",
                      ).handleUpdateJoinableCallLog(t)
                    : e === o("WAWebVoipWaCallEnums").CallEvent.CallMissed
                      ? o(
                          "WAWebVoipHandleNativeCallEventCallLogHandlers",
                        ).handleCallMissed(t)
                      : e ===
                          o("WAWebVoipWaCallEnums").CallEvent.Update1to1CallLog
                        ? o(
                            "WAWebVoipHandleNativeCallEventCallLogHandlers",
                          ).handleUpdate1to1CallLog(t)
                        : e ===
                            o("WAWebVoipWaCallEnums").CallEvent.RelayListUpdate
                          ? pe(t)
                          : e ===
                              o("WAWebVoipWaCallEnums").CallEvent
                                .FieldstatsReady
                            ? o(
                                "WAWebVoipHandleNativeCallEventFieldstatsHandlers",
                              ).handleFieldstatsReady(t)
                            : e ===
                                  o("WAWebVoipWaCallEnums").CallEvent
                                    .GroupInfoChanged ||
                                e ===
                                  o("WAWebVoipWaCallEnums").CallEvent
                                    .GroupParticipantLeft
                              ? o(
                                  "WAWebVoipHandleNativeCallEventCallLinkHandlers",
                                ).handleGroupInfoChanged(t)
                              : e ===
                                    o("WAWebVoipWaCallEnums").CallEvent
                                      .SelfVideoStateChanged ||
                                  e ===
                                    o("WAWebVoipWaCallEnums").CallEvent
                                      .PeerVideoStateChanged ||
                                  e ===
                                    o("WAWebVoipWaCallEnums").CallEvent
                                      .VideoStateChanged
                                ? o(
                                    "WAWebVoipHandleNativeCallEventMediaHandlers",
                                  ).handleVideoStateChanged(t)
                                : e ===
                                    o("WAWebVoipWaCallEnums").CallEvent
                                      .PeerVideoPermissionChanged
                                  ? o(
                                      "WAWebVoipHandleNativeCallEventMediaHandlers",
                                    ).handlePeerVideoPermissionChanged(t)
                                  : e ===
                                      o("WAWebVoipWaCallEnums").CallEvent
                                        .CallRejectReceived
                                    ? o(
                                        "WAWebVoipHandleNativeCallEventCallLinkHandlers",
                                      ).handleCallRejectReceived(t)
                                    : e ===
                                        o("WAWebVoipWaCallEnums").CallEvent
                                          .CallFatal
                                      ? o(
                                          "WAWebVoipHandleNativeCallEventCallLinkHandlers",
                                        ).handleCallFatal(t)
                                      : e ===
                                          o("WAWebVoipWaCallEnums").CallEvent
                                            .RTCPByeReceived
                                        ? o(
                                            "WAWebVoipHandleNativeCallEventCallLinkHandlers",
                                          ).handleRTCPByeReceived(t)
                                        : e ===
                                            o("WAWebVoipWaCallEnums").CallEvent
                                              .RelayBindsFailed
                                          ? o(
                                              "WAWebVoipHandleNativeCallEventCallLinkHandlers",
                                            ).handleRelayBindsFailed(t)
                                          : e ===
                                              o("WAWebVoipWaCallEnums")
                                                .CallEvent.MuteStateChanged
                                            ? o(
                                                "WAWebVoipHandleNativeCallEventMediaHandlers",
                                              ).handleMuteStateChanged()
                                            : e ===
                                                o("WAWebVoipWaCallEnums")
                                                  .CallEvent
                                                  .ReactionStateChanged
                                              ? o(
                                                  "WAWebVoipHandleNativeCallEventMediaHandlers",
                                                ).handleReactionStateChanged(t)
                                              : e ===
                                                  o("WAWebVoipWaCallEnums")
                                                    .CallEvent
                                                    .RaiseHandStateChanged
                                                ? o(
                                                    "WAWebVoipHandleNativeCallEventMediaHandlers",
                                                  ).handleRaiseHandStateChanged(
                                                    t,
                                                  )
                                                : e ===
                                                    o("WAWebVoipWaCallEnums")
                                                      .CallEvent
                                                      .SpeakerStatusChanged
                                                  ? o(
                                                      "WAWebVoipHandleNativeCallEventMediaHandlers",
                                                    ).handleSpeakerStatusChanged(
                                                      t,
                                                    )
                                                  : e ===
                                                      o("WAWebVoipWaCallEnums")
                                                        .CallEvent
                                                        .AudioDriverRestart
                                                    ? o(
                                                        "WAWebVoipHandleNativeCallEventMediaHandlers",
                                                      ).handleAudioDriverRestart(
                                                        t,
                                                      )
                                                    : e ===
                                                        o(
                                                          "WAWebVoipWaCallEnums",
                                                        ).CallEvent.ScreenShare
                                                      ? o(
                                                          "WAWebVoipHandleNativeCallEventMediaHandlers",
                                                        ).handleScreenShareStateChanged(
                                                          t,
                                                        )
                                                      : e ===
                                                          o(
                                                            "WAWebVoipWaCallEnums",
                                                          ).CallEvent
                                                            .RxTrafficStateForPeerChanged
                                                        ? o(
                                                            "WAWebVoipHandleNativeCallEventCallLinkHandlers",
                                                          ).handleRxTrafficStateForPeerChanged(
                                                            t,
                                                          )
                                                        : e ===
                                                            o(
                                                              "WAWebVoipWaCallEnums",
                                                            ).CallEvent
                                                              .NetHealthStatusChangedV2
                                                          ? o(
                                                              "WAWebVoipHandleNativeCallEventCallLinkHandlers",
                                                            ).handleNetHealthStatusChanged(
                                                              t,
                                                            )
                                                          : e ===
                                                              o(
                                                                "WAWebVoipWaCallEnums",
                                                              ).CallEvent
                                                                .CallLinkStateChanged
                                                            ? o(
                                                                "WAWebVoipHandleNativeCallEventCallLinkHandlers",
                                                              ).handleCallLinkStateChanged(
                                                                t,
                                                              )
                                                            : e ===
                                                                o(
                                                                  "WAWebVoipWaCallEnums",
                                                                ).CallEvent
                                                                  .CallOfferNacked
                                                              ? o(
                                                                  "WAWebVoipHandleNativeCallEventCallLinkHandlers",
                                                                ).handleCallOfferNacked(
                                                                  t,
                                                                )
                                                              : e ===
                                                                    o(
                                                                      "WAWebVoipWaCallEnums",
                                                                    ).CallEvent
                                                                      .LinkQueryNacked ||
                                                                  e ===
                                                                    o(
                                                                      "WAWebVoipWaCallEnums",
                                                                    ).CallEvent
                                                                      .LinkJoinNacked
                                                                ? o(
                                                                    "WAWebVoipHandleNativeCallEventCallLinkHandlers",
                                                                  ).handleCallLinkNacked(
                                                                    t,
                                                                  )
                                                                : e ===
                                                                    o(
                                                                      "WAWebVoipWaCallEnums",
                                                                    ).CallEvent
                                                                      .LobbyNacked
                                                                  ? o(
                                                                      "WAWebVoipHandleNativeCallEventCallLinkHandlers",
                                                                    ).handleLobbyNacked()
                                                                  : e ===
                                                                      o(
                                                                        "WAWebVoipWaCallEnums",
                                                                      )
                                                                        .CallEvent
                                                                        .LobbyTimeout
                                                                    ? o(
                                                                        "WAWebVoipHandleNativeCallEventCallLinkHandlers",
                                                                      ).handleLobbyTimeout()
                                                                    : e ===
                                                                        o(
                                                                          "WAWebVoipWaCallEnums",
                                                                        )
                                                                          .CallEvent
                                                                          .MuteRequestFailed
                                                                      ? o(
                                                                          "WAWebVoipHandleNativeCallEventCallLogHandlers",
                                                                        ).handleMuteRequestFailed()
                                                                      : e ===
                                                                          o(
                                                                            "WAWebVoipWaCallEnums",
                                                                          )
                                                                            .CallEvent
                                                                            .MutedByOthers
                                                                        ? o(
                                                                            "WAWebVoipHandleNativeCallEventCallLogHandlers",
                                                                          ).handleMutedByOthers(
                                                                            t,
                                                                          )
                                                                        : e ===
                                                                            o(
                                                                              "WAWebVoipWaCallEnums",
                                                                            )
                                                                              .CallEvent
                                                                              .WaitingRoomDenied
                                                                          ? void o(
                                                                              "WAWebVoipHandleNativeCallEventCallLinkHandlers",
                                                                            ).handleWaitingRoomDenied()
                                                                          : e ===
                                                                              o(
                                                                                "WAWebVoipWaCallEnums",
                                                                              )
                                                                                .CallEvent
                                                                                .WaitingRoomStateChanged
                                                                            ? void o(
                                                                                "WAWebVoipHandleNativeCallEventCallLinkHandlers",
                                                                              ).handleWaitingRoomStateChanged()
                                                                            : e ===
                                                                                o(
                                                                                  "WAWebVoipWaCallEnums",
                                                                                )
                                                                                  .CallEvent
                                                                                  .CallGridRankingChanged
                                                                              ? o(
                                                                                  "WAWebVoipHandleNativeCallEventCallLinkHandlers",
                                                                                ).handleCallGridRankingChanged()
                                                                              : e ===
                                                                                  o(
                                                                                    "WAWebVoipWaCallEnums",
                                                                                  )
                                                                                    .CallEvent
                                                                                    .UserRemoved
                                                                                ? o(
                                                                                    "WAWebVoipHandleNativeCallEventCallLinkHandlers",
                                                                                  ).handleUserRemoved(
                                                                                    t,
                                                                                  )
                                                                                : e ===
                                                                                      o(
                                                                                        "WAWebVoipWaCallEnums",
                                                                                      )
                                                                                        .CallEvent
                                                                                        .CallAutoConnect ||
                                                                                    e ===
                                                                                      o(
                                                                                        "WAWebVoipWaCallEnums",
                                                                                      )
                                                                                        .CallEvent
                                                                                        .BotReconfigureSuccess ||
                                                                                    e ===
                                                                                      o(
                                                                                        "WAWebVoipWaCallEnums",
                                                                                      )
                                                                                        .CallEvent
                                                                                        .AudioDeviceReady ||
                                                                                    e ===
                                                                                      o(
                                                                                        "WAWebVoipWaCallEnums",
                                                                                      )
                                                                                        .CallEvent
                                                                                        .BotEarlyConnect ||
                                                                                    e ===
                                                                                      o(
                                                                                        "WAWebVoipWaCallEnums",
                                                                                      )
                                                                                        .CallEvent
                                                                                        .MicrophoneDeviceReady ||
                                                                                    e ===
                                                                                      o(
                                                                                        "WAWebVoipWaCallEnums",
                                                                                      )
                                                                                        .CallEvent
                                                                                        .SpeakerDeviceReady ||
                                                                                    e ===
                                                                                      o(
                                                                                        "WAWebVoipWaCallEnums",
                                                                                      )
                                                                                        .CallEvent
                                                                                        .WearableAttributionStateChanged ||
                                                                                    e ===
                                                                                      o(
                                                                                        "WAWebVoipWaCallEnums",
                                                                                      )
                                                                                        .CallEvent
                                                                                        .RxTranscriptMsg ||
                                                                                    e ===
                                                                                      o(
                                                                                        "WAWebVoipWaCallEnums",
                                                                                      )
                                                                                        .CallEvent
                                                                                        .RemoveFailed ||
                                                                                    e ===
                                                                                      o(
                                                                                        "WAWebVoipWaCallEnums",
                                                                                      )
                                                                                        .CallEvent
                                                                                        .E2EEStatusChanged ||
                                                                                    e ===
                                                                                      o(
                                                                                        "WAWebVoipWaCallEnums",
                                                                                      )
                                                                                        .CallEvent
                                                                                        .WaitingRoomToggleAcked ||
                                                                                    e ===
                                                                                      o(
                                                                                        "WAWebVoipWaCallEnums",
                                                                                      )
                                                                                        .CallEvent
                                                                                        .WaitingRoomAdmitAcked ||
                                                                                    e ===
                                                                                      o(
                                                                                        "WAWebVoipWaCallEnums",
                                                                                      )
                                                                                        .CallEvent
                                                                                        .WaitingRoomDenyAcked ||
                                                                                    e ===
                                                                                      o(
                                                                                        "WAWebVoipWaCallEnums",
                                                                                      )
                                                                                        .CallEvent
                                                                                        .LinkQueryAcked
                                                                                  ? o(
                                                                                      "WAWebVoipHandleNativeCallEventCallLogHandlers",
                                                                                    ).handleNoOpEvent(
                                                                                      e,
                                                                                    )
                                                                                  : e ===
                                                                                      o(
                                                                                        "WAWebVoipWaCallEnums",
                                                                                      )
                                                                                        .CallEvent
                                                                                        .EncodeTargetFpsChanged
                                                                                    ? o(
                                                                                        "WAWebVoipHandleNativeCallEventMediaHandlers",
                                                                                      ).handleEncodeTargetFpsChanged(
                                                                                        t,
                                                                                      )
                                                                                    : e ===
                                                                                        o(
                                                                                          "WAWebVoipWaCallEnums",
                                                                                        )
                                                                                          .CallEvent
                                                                                          .EncodeParamsChanged
                                                                                      ? o(
                                                                                          "WAWebVoipHandleNativeCallEventMediaHandlers",
                                                                                        ).handleEncodeParamsChanged(
                                                                                          t,
                                                                                        )
                                                                                      : e ===
                                                                                          o(
                                                                                            "WAWebVoipWaCallEnums",
                                                                                          )
                                                                                            .CallEvent
                                                                                            .P2PTransportUpdate
                                                                                        ? o(
                                                                                            "WAWebVoipHandleNativeCallEventCallLinkHandlers",
                                                                                          ).handleP2PTransportUpdate(
                                                                                            t,
                                                                                          )
                                                                                        : e ===
                                                                                            o(
                                                                                              "WAWebVoipWaCallEnums",
                                                                                            )
                                                                                              .CallEvent
                                                                                              .HandleGroupCallReminder
                                                                                          ? o(
                                                                                              "WAWebVoipHandleNativeCallEventCallLinkHandlers",
                                                                                            ).handleGroupCallReminder(
                                                                                              t,
                                                                                            )
                                                                                          : e ===
                                                                                              o(
                                                                                                "WAWebVoipWaCallEnums",
                                                                                              )
                                                                                                .CallEvent
                                                                                                .LidCallerDisplayInfo
                                                                                            ? le(
                                                                                                t,
                                                                                              )
                                                                                            : e ===
                                                                                                o(
                                                                                                  "WAWebVoipWaCallEnums",
                                                                                                )
                                                                                                  .CallEvent
                                                                                                  .VoiceChatWaveReceived
                                                                                              ? ue(
                                                                                                  t,
                                                                                                )
                                                                                              : null;
        })),
        ie.apply(this, arguments)
      );
    }
    function le(e) {
      return se.apply(this, arguments);
    }
    function se() {
      return (
        (se = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          (o("WALogger").LOG(
            S ||
              (S = babelHelpers.taggedTemplateLiteralLoose([
                "voip: LidCallerDisplayInfo",
              ])),
          ),
            yield o("WAWebVoipHandleLidCallerDisplayInfo")
              .handleWAWebVoipLidCallerDisplayInfoJson(e)
              .catch(function (e) {
                o("WALogger")
                  .WARN(
                    R ||
                      (R = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [LidCallerDisplayInfo] unhandled error",
                      ])),
                  )
                  .catching(r("getErrorSafe")(e))
                  .sendLogs("voip-lid-caller-display-info-failed");
              }));
        })),
        se.apply(this, arguments)
      );
    }
    function ue(e) {
      return ce.apply(this, arguments);
    }
    function ce() {
      return (
        (ce = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (
            o("WAWebABProps").getABPropConfigValue(
              "group_calling_wave_receiving_enabled",
            )
          ) {
            var t = r("nullthrows")(
              yield o("WAWebVoipStackInterface").getVoipStackInterface(),
            );
            if (t.type === "web") {
              var n = t.parsers.parseVoiceChatWaveReceivedData(e);
              if (n.silenceReason === "wave") {
                var a = n.callId,
                  i = n.groupJid,
                  l = n.senderWid;
                if (l == null) {
                  o("WALogger")
                    .WARN(
                      L ||
                        (L = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [wave] no sender jid; skip notif",
                        ])),
                    )
                    .sendLogs("voip-wave-no-sender");
                  return;
                }
                o("WAWebBackendApi").frontendFireAndForget(
                  "showVoiceChatWaveNotification",
                  { senderWid: l, groupJid: i, callId: a },
                );
              }
            }
          }
        })),
        ce.apply(this, arguments)
      );
    }
    function de(e) {
      return me.apply(this, arguments);
    }
    function me() {
      return (
        (me = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n = r("nullthrows")(
              yield o("WAWebVoipStackInterface").getVoipStackInterface(),
            ),
            a = n.parsers.parseCallStateChangedData(e),
            i =
              (t = a.CallState) != null
                ? t
                : o("WAWebVoipWaCallEnums").CallState.None,
            l = a.call_info;
          (te(n, i, l).catch(function (e) {
            o("WALogger")
              .ERROR(
                E ||
                  (E = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: handleCallerTimeout failed",
                  ])),
              )
              .catching(r("getErrorSafe")(e));
          }),
            oe({ callInfo: l, callState: i, voipStackInterface: n }));
          var s = o(
            "WAWebVoipThreadPoolManagerRegistry",
          ).getVoipThreadPoolManager();
          (s == null || s.onCallStateChanged(i),
            n.type === "web" && Z(i, l),
            o("WAWebVoipCallStateUtils").isCallTerminal(i) ||
              (o("WAWebBackendApi").frontendFireAndForget(
                "startAnrTracking",
                {},
              ),
              o("WAWebBackendApi").frontendFireAndForget(
                "startActivityTracking",
                {},
              ),
              o("WAWebBackendApi").frontendFireAndForget(
                "startUiActivityTracking",
                {},
              )));
          var u = q(i);
          if (
            (o("WAWebBackendApi").frontendFireAndForget(
              "trackVoipCallStateChange",
              { stateName: u },
            ),
            i === o("WAWebVoipWaCallEnums").CallState.CallActive)
          ) {
            var c = a.call_info.callId;
            U = c;
            var d = o("WAWebABProps").getABPropConfigValue(
                "web_voip_dynamic_thread_preallocate_count",
              ),
              m = o("WAWebVoipGatingUtils").isWebKitBrowser(),
              p =
                d > 0 && !m
                  ? d
                  : "disabled(webkit=" + String(m) + ", count=" + d + ")",
              _ = o("WAWebABProps").getABPropConfigValue(
                "enable_web_voip_proxy_and_sctp_workers",
              ),
              f = o("WAWebABProps").getABPropConfigValue(
                "enable_web_voip_dynamic_fps_throttle",
              ),
              g = o("WAWebABProps").getABPropConfigValue(
                "web_calling_perf_optimizations_bitmask",
              ),
              h = o("WAWebABProps").getABPropConfigValue(
                "web_voip_audio_capture_impl",
              ),
              y = o("WAWebABProps").getABPropConfigValue(
                "web_voip_audio_playback_impl",
              );
            (o("WALogger").LOG(
              k ||
                (k = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [CallActive] proxySctp=",
                  " avSync=",
                  " dynFps=",
                  " perfBits=",
                  "",
                ])),
              _,
              !0,
              f,
              g,
            ),
              o("WALogger").LOG(
                I ||
                  (I = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [CallActive] abprops audioCap=",
                    " audioPlay=",
                    " dynPool=",
                    "",
                  ])),
                h,
                y,
                p,
              ),
              o("WAWebVoipCrashRecovery").markCallActive(c),
              o("WAWebVoipCrashRecovery").registerGracefulExitHandler(c),
              o("WAWebVoipFocusTracker").startVoipFocusTracking(),
              n.type === "web" &&
                o("WAWebBackendApi")
                  .frontendSendAndReceive("initializeVoipWasm")
                  .then(function (e) {
                    U === c &&
                      o("WAWebVoipPersistentFS").startPeriodicVoipSync(e);
                  })
                  .catch(function (e) {
                    o("WALogger")
                      .ERROR(
                        T ||
                          (T = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: [IDBFS] Failed to start periodic sync",
                          ])),
                      )
                      .catching(r("getErrorSafe")(e));
                  }),
              o("WAWebVoipBrowserMetrics").startBrowserMetrics(),
              o("WAWebVoipWindowMetrics").startWindowMetrics(),
              o("WAWebVoipBatteryDiagnostics").startBatteryDiagnostics(),
              (G.callIsActive = !0));
            var C = l.linkToken != null && l.linkToken !== "";
            (C &&
              l.videoEnabled &&
              n.type === "web" &&
              n.broadcastVideoState().catch(function (e) {
                o("WALogger")
                  .WARN(
                    D ||
                      (D = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [CallActive] broadcastVideoState for call link failed",
                      ])),
                  )
                  .catching(r("getErrorSafe")(e));
              }),
              fe().catch(function (e) {
                var t = r("getErrorSafe")(e);
                o("WALogger")
                  .WARN(
                    x ||
                      (x = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: initP2PConnectionIfEnabled failed: ",
                        "",
                      ])),
                    t.message,
                  )
                  .catching(t);
              }));
          }
          o("WAWebBackendApi").frontendFireAndForget("setCallState", {
            callState: i,
            callInfo: a.call_info,
          });
          var b = o("WAWebVoipCallStateUtils").isCallTerminal(i);
          if (
            (b &&
              a.call_info.callDuration === 0 &&
              o("WAWebVoipHandleNativeCallEventFieldstatsHandlers")
                .sendStoredFieldstats()
                .catch(function (e) {
                  o("WALogger")
                    .WARN(
                      $ ||
                        ($ = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: sendStoredFieldstats failed",
                        ])),
                    )
                    .catching(r("getErrorSafe")(e));
                }),
            i === o("WAWebVoipWaCallEnums").CallState.CallStateEnding &&
              (o("WAWebVoipErrorLogUpload").captureWamCallResult(e),
              o("WAWebVoipP2PConnectionManager").cleanupP2PConnection(),
              (G.callIsActive = !1)),
            i === o("WAWebVoipWaCallEnums").CallState.None)
          ) {
            (o("WAWebVoipQplHelpers").voipEndCallQplAddPoint(
              o("WAWebVoipQplHelpers").VoipEndCallQplPoint.CLEANUP_START,
            ),
              o("WAWebVoipErrorLogUpload").captureWamCallResult(e));
            var v = U != null ? U : "unknown";
            ((U = null),
              o("WAWebVoipFocusTracker").stopVoipFocusTracking(),
              o("WAWebVoipCrashRecovery").clearExitMarkers(v),
              o("WAWebVoipCrashRecovery").unregisterGracefulExitHandler(),
              o("WAWebVoipPersistentFS").stopPeriodicVoipSync(),
              o("WAWebVoipBrowserMetrics").stopBrowserMetrics(),
              o("WAWebVoipWindowMetrics").stopWindowMetrics(),
              o("WAWebVoipGatingUtils").isWebTransportEnabled() ||
                o("WAWebVoipSctpConnectionManager").cleanupAllConnections(),
              o("WAWebVoipGatingUtils").markCurrentCallAsFna(!1),
              o("WAWebVoipP2PConnectionManager").cleanupP2PConnection(),
              (G = H()),
              o("WAWebBackendApi").frontendFireAndForget(
                "cleanupPrewarmedCamera",
                {},
              ),
              o("WAWebBackendApi").frontendFireAndForget("disableAVSync", {}),
              o(
                "WAWebVoipVideoCameraCapture",
              ).WAWebVoipVideoCameraCapture.scheduleCallEndCameraRelease(),
              o("WAWebVoipAudioCaptureBase").scheduleCallEndMicRelease(),
              n.type === "web" &&
                o("WAWebVoipHandleNativeCallEventFieldstatsHandlers")
                  .cleanupFieldstatsAfterNormalEnd()
                  .catch(function (e) {
                    o("WALogger")
                      .WARN(
                        P ||
                          (P = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: cleanupFieldstatsAfterNormalEnd failed",
                          ])),
                      )
                      .catching(r("getErrorSafe")(e));
                  })
                  .finally(function () {
                    o(
                      "WAWebVoipHandleNativeCallEventFieldstatsHandlers",
                    ).syncVoipPersistentFSWithIdleCallback();
                  }),
              o(
                "WAWebVoipHandleNativeCallEventMediaHandlers",
              ).resetWebCodecsEncoderState(),
              o(
                "WAWebVoipHandleNativeCallEventCallLinkHandlers",
              ).resetCallLinkHandlerState(),
              o("WAWebVoipErrorLogUpload").maybeUploadErrorLogs(),
              o("WAWebVoipQplHelpers").voipEndCallQplAddPoint(
                o("WAWebVoipQplHelpers").VoipEndCallQplPoint.CLEANUP_END,
              ),
              o("WAWebVoipQplHelpers").endVoipEndCallQplSuccess());
          }
        })),
        me.apply(this, arguments)
      );
    }
    function pe(e) {
      return _e.apply(this, arguments);
    }
    function _e() {
      return (
        (_e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = r("nullthrows")(
              yield o("WAWebVoipStackInterface").getVoipStackInterface(),
            ),
            n = t.parsers.parseRelayListUpdateData(e),
            a = n.relays.some(function (e) {
              return e.addresses.some(function (e) {
                return e.port === 3478 || e.port_v6 === 3478;
              });
            });
          (a && o("WAWebCoreActionsODS").logCallRelayPort3478(),
            o("WAWebVoipGatingUtils").isWebTransportEnabled()
              ? o(
                  "WAWebVoipWebTransportConnectionManager",
                ).handleRelayListUpdate(n)
              : yield o("WAWebVoipSctpConnectionManager").handleRelayListUpdate(
                  n,
                ),
            (G.cachedRelayListData = n),
            (G.relayListReceived = !0),
            fe().catch(function (e) {
              var t = r("getErrorSafe")(e);
              o("WALogger")
                .WARN(
                  N ||
                    (N = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: initP2PConnectionIfEnabled failed: ",
                      "",
                    ])),
                  t.message,
                )
                .catching(t);
            }));
        })),
        _e.apply(this, arguments)
      );
    }
    function fe() {
      return ge.apply(this, arguments);
    }
    function ge() {
      return (
        (ge = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (!(G.initStarted || !G.callIsActive || !G.relayListReceived)) {
            G.initStarted = !0;
            try {
              yield he();
            } catch (e) {
              throw ((G.initStarted = !1), e);
            }
          }
        })),
        ge.apply(this, arguments)
      );
    }
    function he() {
      return ye.apply(this, arguments);
    }
    function ye() {
      return (
        (ye = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = r("nullthrows")(
            yield o("WAWebVoipStackInterface").getVoipStackInterface(),
          );
          if (e.type === "web") {
            o("WAWebBackendApi").frontendFireAndForget("trackVoipActivity", {
              activity: "get_call_info",
              details: "p2p_init",
            });
            var t = yield e.getCallInfo();
            if (t === "") {
              (o("WALogger").LOG(
                M ||
                  (M = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: initP2PConnectionIfEnabled: Failed to get call info",
                  ])),
              ),
                (G.initStarted = !1));
              return;
            }
            var n = e.parsers.parseCallInfo(t);
            if (n.isGroupCall) {
              G.initStarted = !1;
              return;
            }
            var a = n.callId,
              i = n.isCaller;
            if (
              (yield o("WAWebVoipP2PConnectionManager").refreshP2PEnablement(a),
              !o("WAWebVoipP2PConnectionManager").isP2PEnabled())
            ) {
              o("WALogger").LOG(
                w ||
                  (w = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: initP2PConnectionIfEnabled: P2P disabled for callId=",
                    "",
                  ])),
                a,
              );
              return;
            }
            var l = n.participants.find(function (e) {
                return e.isSelf !== !0;
              }),
              s =
                (l == null ? void 0 : l.devicePlatform) ===
                o("WAWebVoipWaCallEnums").ClientPlatform.Web;
            if (
              !i &&
              n.peerJid != null &&
              (yield o("WAWebVoipContactUtils").isCallerNotContact(n.peerJid))
            ) {
              o("WALogger").LOG(
                A ||
                  (A = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: initP2PConnectionIfEnabled: non-contact, P2P gated ",
                    "",
                  ])),
                a,
              );
              return;
            }
            if (!G.callIsActive) {
              G.initStarted = !1;
              return;
            }
            o("WALogger").LOG(
              F ||
                (F = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: initP2PConnectionIfEnabled: callId=",
                  ", isCaller=",
                  ", isPeerWebBrowser=",
                  "",
                ])),
              a,
              String(i),
              String(s),
            );
            var u = function (n, i, l, s, u) {
                e.sendWebP2PTransport(a, n, i, l, s, u).catch(function (e) {
                  o("WALogger")
                    .ERROR(
                      O ||
                        (O = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: sendWebP2PTransport failed",
                        ])),
                    )
                    .catching(r("getErrorSafe")(e));
                });
              },
              c = 10,
              d = new Set();
            if (G.cachedRelayListData == null) {
              o("WALogger").ERROR(
                B ||
                  (B = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: initP2PConnectionIfEnabled: cachedRelayListData null",
                  ])),
              );
              return;
            }
            var m = G.cachedRelayListData;
            for (var p of m.relays) {
              if (d.size >= c) break;
              for (var _ of p.addresses) {
                if (d.size >= c) break;
                (_.ipv4 != null &&
                  _.port != null &&
                  d.add("stun:" + _.ipv4 + ":" + _.port),
                  d.size < c &&
                    _.ipv6 != null &&
                    _.port_v6 != null &&
                    d.add("stun:[" + _.ipv6 + "]:" + _.port_v6));
              }
            }
            var f = Array.from(d, function (e) {
              return { urls: e };
            });
            yield o("WAWebVoipP2PConnectionManager").initP2PConnection(
              i,
              s,
              f,
              u,
            );
          }
        })),
        ye.apply(this, arguments)
      );
    }
    ((l.sendStoredFieldstats = o(
      "WAWebVoipHandleNativeCallEventFieldstatsHandlers",
    ).sendStoredFieldstats),
      (l.handleWAWebVoipNativeCallEvent = ae));
  },
  98,
);
