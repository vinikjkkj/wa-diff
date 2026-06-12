__d(
  "WAWebVoipHandleNativeCallEvent",
  [
    "Promise",
    "WALogger",
    "WAWebABProps",
    "WAWebBackendApi",
    "WAWebCoreActionsODS",
    "WAWebVoipBatteryDiagnostics",
    "WAWebVoipBrowserMetrics",
    "WAWebVoipCallStateUtils",
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
      O;
    function B(e) {
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
    var W = null,
      q = null;
    function U() {
      return {
        initStarted: !1,
        callIsActive: !1,
        relayListReceived: !1,
        cachedRelayListData: null,
      };
    }
    var V = U(),
      H = 90,
      G = null,
      z = null,
      j = 60,
      K = null,
      Q = null;
    function X() {
      ((q = null), o("WAWebVoipWasmHeapMonitor").stopWasmHeapMonitor());
    }
    function Y(t, n) {
      if (
        t === o("WAWebVoipWaCallEnums").CallState.None ||
        t === o("WAWebVoipWaCallEnums").CallState.CallActiveElseWhere
      ) {
        X();
        return;
      }
      if (
        !(
          q != null || t === o("WAWebVoipWaCallEnums").CallState.CallStateEnding
        )
      ) {
        var a = n.callId;
        ((q = a),
          o("WAWebBackendApi")
            .frontendSendAndReceive("initializeVoipWasm")
            .then(function (e) {
              q === a && o("WAWebVoipWasmHeapMonitor").startWasmHeapMonitor(e);
            })
            .catch(function (t) {
              (q === a && (q = null),
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
    function J() {
      G != null &&
        (window.clearTimeout(G),
        (G = null),
        (z = null),
        o("WALogger").LOG(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "voip: caller timeout cleared",
            ])),
        ));
    }
    function Z(e, t, n) {
      return ee.apply(this, arguments);
    }
    function ee() {
      return (
        (ee = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, a) {
            if (e.type === "web") {
              var i =
                o("WAWebVoipCallStateUtils").isCallTerminal(t) ||
                o("WAWebVoipCallStateUtils").isCallActive(t);
              if (i) {
                J();
                return;
              }
              var l = o("WAWebVoipCallStateUtils").isCallOutgoing(t),
                s = a.isCaller === !0,
                u = a.isGroupCall === !0;
              if (l && s && !u) {
                if (G != null) return;
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
                z = c;
                var d = H;
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
                if (z !== c) {
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
                  (G = window.setTimeout(function () {
                    if (z !== c) {
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
                      (G = null),
                      (z = null),
                      (O || (O = n("Promise")))
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
        ee.apply(this, arguments)
      );
    }
    function te() {
      K != null &&
        (window.clearTimeout(K),
        (K = null),
        (Q = null),
        o("WALogger").LOG(
          u ||
            (u = babelHelpers.taggedTemplateLiteralLoose([
              "voip: callee ringing timeout cleared",
            ])),
        ));
    }
    function ne(e, t, a) {
      if (e.type === "web") {
        var i =
          o("WAWebVoipCallStateUtils").isCallTerminal(t) ||
          o("WAWebVoipCallStateUtils").isCallActive(t) ||
          o("WAWebVoipCallStateUtils").isCallConnecting(t);
        if (i) {
          te();
          return;
        }
        if (
          t === o("WAWebVoipWaCallEnums").CallState.ReceivedCall &&
          a.isCaller !== !0
        ) {
          if (K != null) return;
          var l = a.callId;
          if (l == null) {
            o("WALogger").LOG(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: callee ringing timeout not set, callId is null",
                ])),
            );
            return;
          }
          Q = l;
          var s = j;
          (o("WALogger").LOG(
            d ||
              (d = babelHelpers.taggedTemplateLiteralLoose([
                "voip: callee ringing timeout set: ",
                " (",
                "s)",
              ])),
            l,
            s,
          ),
            (K = window.setTimeout(function () {
              if (Q !== l) {
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
                l,
              ),
                (K = null),
                (Q = null),
                (O || (O = n("Promise")))
                  .resolve(
                    e.endCall(
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
                  callInfo: a,
                }));
            }, s * 1e3)));
        }
      }
    }
    function re(e, t) {
      return oe.apply(this, arguments);
    }
    function oe() {
      return (
        (oe = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          yield e === o("WAWebVoipWaCallEnums").CallEvent.CallStateChanged
            ? ue(t)
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
                          ? de(t)
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
                                                                                            ? ae(
                                                                                                t,
                                                                                              )
                                                                                            : e ===
                                                                                                o(
                                                                                                  "WAWebVoipWaCallEnums",
                                                                                                )
                                                                                                  .CallEvent
                                                                                                  .VoiceChatWaveReceived
                                                                                              ? le(
                                                                                                  t,
                                                                                                )
                                                                                              : null;
        })),
        oe.apply(this, arguments)
      );
    }
    function ae(e) {
      return ie.apply(this, arguments);
    }
    function ie() {
      return (
        (ie = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          (o("WALogger").LOG(
            S ||
              (S = babelHelpers.taggedTemplateLiteralLoose([
                "voip: LidCallerDisplayInfo",
              ])),
          ),
            yield o("WAWebVoipHandleLidCallerDisplayInfo")
              .handleWAWebVoipLidCallerDisplayInfo(e)
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
        ie.apply(this, arguments)
      );
    }
    function le(e) {
      return se.apply(this, arguments);
    }
    function se() {
      return (
        (se = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
                        "voip: wave received without a sender jid; skipping notification",
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
          (Z(n, i, l).catch(function (e) {
            o("WALogger")
              .ERROR(
                E ||
                  (E = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: handleCallerTimeout failed",
                  ])),
              )
              .catching(r("getErrorSafe")(e));
          }),
            ne(n, i, l));
          var s = o(
            "WAWebVoipThreadPoolManagerRegistry",
          ).getVoipThreadPoolManager();
          (s == null || s.onCallStateChanged(i),
            n.type === "web" && Y(i, l),
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
          var u = B(i);
          if (
            (o("WAWebBackendApi").frontendFireAndForget(
              "trackVoipCallStateChange",
              { stateName: u },
            ),
            i === o("WAWebVoipWaCallEnums").CallState.CallActive)
          ) {
            var c = a.call_info.callId;
            W = c;
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
                "enable_web_voip_platform_av_sync",
              ),
              g = o("WAWebABProps").getABPropConfigValue(
                "enable_web_voip_dynamic_fps_throttle",
              ),
              h = o("WAWebABProps").getABPropConfigValue(
                "web_calling_perf_optimizations_bitmask",
              ),
              y = o("WAWebABProps").getABPropConfigValue(
                "web_voip_audio_capture_impl",
              ),
              C = o("WAWebABProps").getABPropConfigValue(
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
              f,
              g,
              h,
            ),
              o("WALogger").LOG(
                I ||
                  (I = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [CallActive] abprops audioCap=",
                    " audioPlay=",
                    " dynPool=",
                    "",
                  ])),
                y,
                C,
                p,
              ),
              o("WAWebVoipCrashRecovery").markCallActive(c),
              o("WAWebVoipCrashRecovery").registerGracefulExitHandler(c),
              o("WAWebVoipFocusTracker").startVoipFocusTracking(),
              o("WAWebBackendApi")
                .frontendSendAndReceive("initializeVoipWasm")
                .then(function (e) {
                  W === c &&
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
              (V.callIsActive = !0));
            var b = l.linkToken != null && l.linkToken !== "";
            (b &&
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
              pe().catch(function (e) {
                o("WALogger")
                  .WARN(
                    x ||
                      (x = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: initP2PConnectionIfEnabled failed",
                      ])),
                  )
                  .catching(r("getErrorSafe")(e));
              }));
          }
          o("WAWebBackendApi").frontendFireAndForget("setCallState", {
            callState: i,
            callInfo: a.call_info,
          });
          var v = o("WAWebVoipCallStateUtils").isCallTerminal(i);
          if (
            (v &&
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
              (V.callIsActive = !1)),
            i === o("WAWebVoipWaCallEnums").CallState.None)
          ) {
            o("WAWebVoipErrorLogUpload").captureWamCallResult(e);
            var S = W != null ? W : "unknown";
            ((W = null),
              o("WAWebVoipFocusTracker").stopVoipFocusTracking(),
              o("WAWebVoipCrashRecovery").clearExitMarkers(S),
              o("WAWebVoipCrashRecovery").unregisterGracefulExitHandler(),
              o("WAWebVoipPersistentFS").stopPeriodicVoipSync(),
              o("WAWebVoipBrowserMetrics").stopBrowserMetrics(),
              o("WAWebVoipWindowMetrics").stopWindowMetrics(),
              o("WAWebVoipGatingUtils").isWebTransportEnabled() ||
                o("WAWebVoipSctpConnectionManager").cleanupAllConnections(),
              o("WAWebVoipP2PConnectionManager").cleanupP2PConnection(),
              (V = U()),
              o("WAWebBackendApi").frontendFireAndForget(
                "cleanupPrewarmedCamera",
                {},
              ),
              o("WAWebBackendApi").frontendFireAndForget("disableAVSync", {}),
              o(
                "WAWebVoipVideoCameraCapture",
              ).WAWebVoipVideoCameraCapture.scheduleCallEndCameraRelease(),
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
              o("WAWebVoipErrorLogUpload").maybeUploadErrorLogs());
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
            (V.cachedRelayListData = n),
            (V.relayListReceived = !0),
            pe().catch(function (e) {
              o("WALogger")
                .WARN(
                  N ||
                    (N = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: initP2PConnectionIfEnabled failed",
                    ])),
                )
                .catching(r("getErrorSafe")(e));
            }));
        })),
        me.apply(this, arguments)
      );
    }
    function pe() {
      return _e.apply(this, arguments);
    }
    function _e() {
      return (
        (_e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (
            !(
              V.initStarted ||
              !V.callIsActive ||
              !V.relayListReceived ||
              !o("WAWebVoipP2PConnectionManager").isP2PEnabledLive()
            )
          ) {
            V.initStarted = !0;
            try {
              yield fe();
            } catch (e) {
              throw ((V.initStarted = !1), e);
            }
          }
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
                (V.initStarted = !1));
              return;
            }
            var n = e.parsers.parseCallInfo(t);
            if (n.isGroupCall) {
              V.initStarted = !1;
              return;
            }
            var a = n.callId,
              i = n.isCaller;
            if (!V.callIsActive) {
              V.initStarted = !1;
              return;
            }
            o("WALogger").LOG(
              w ||
                (w = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: initP2PConnectionIfEnabled: callId=",
                  ", isCaller=",
                  "",
                ])),
              a,
              String(i),
            );
            var l = function (n, i, l, s, u) {
                e.sendWebP2PTransport(a, n, i, l, s, u).catch(function (e) {
                  o("WALogger")
                    .ERROR(
                      A ||
                        (A = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: sendWebP2PTransport failed",
                        ])),
                    )
                    .catching(r("getErrorSafe")(e));
                });
              },
              s = 10,
              u = new Set();
            if (V.cachedRelayListData == null) {
              o("WALogger").ERROR(
                F ||
                  (F = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: initP2PConnectionIfEnabled: cachedRelayListData null",
                  ])),
              );
              return;
            }
            var c = V.cachedRelayListData;
            for (var d of c.relays) {
              if (u.size >= s) break;
              for (var m of d.addresses) {
                if (u.size >= s) break;
                (m.ipv4 != null &&
                  m.port != null &&
                  u.add("stun:" + m.ipv4 + ":" + m.port),
                  u.size < s &&
                    m.ipv6 != null &&
                    m.port_v6 != null &&
                    u.add("stun:[" + m.ipv6 + "]:" + m.port_v6));
              }
            }
            var p = Array.from(u, function (e) {
              return { urls: e };
            });
            yield o("WAWebVoipP2PConnectionManager").initP2PConnection(i, p, l);
          }
        })),
        ge.apply(this, arguments)
      );
    }
    ((l.sendStoredFieldstats = o(
      "WAWebVoipHandleNativeCallEventFieldstatsHandlers",
    ).sendStoredFieldstats),
      (l.handleWAWebVoipNativeCallEvent = re));
  },
  98,
);
