__d(
  "WAWebVoipHandleNativeCallEvent",
  [
    "Promise",
    "WALogger",
    "WAWebABProps",
    "WAWebBackendApi",
    "WAWebCallRandomIdStore",
    "WAWebCallUserJourneyGating",
    "WAWebCallUserJourneyLogger",
    "WAWebCoreActionsODS",
    "WAWebVoipAppInBgWhenCallStartsStore",
    "WAWebVoipAudioCaptureBase",
    "WAWebVoipBatteryDiagnostics",
    "WAWebVoipBrowserMetrics",
    "WAWebVoipCallEnterPipModeCountStore",
    "WAWebVoipCallStateUtils",
    "WAWebVoipCalleeOfferToRingStore",
    "WAWebVoipContactUtils",
    "WAWebVoipCrashRecovery",
    "WAWebVoipDtlsCertCallRegistration",
    "WAWebVoipErrorLogUpload",
    "WAWebVoipFocusTracker",
    "WAWebVoipGatingUtils",
    "WAWebVoipHandleLidCallerDisplayInfo",
    "WAWebVoipHandleNativeCallEventCallLinkHandlers",
    "WAWebVoipHandleNativeCallEventCallLogHandlers",
    "WAWebVoipHandleNativeCallEventFieldstatsHandlers",
    "WAWebVoipHandleNativeCallEventMediaHandlers",
    "WAWebVoipHardwareInfo",
    "WAWebVoipIncomingCallUiActionStore",
    "WAWebVoipInitEventEmitter",
    "WAWebVoipLocalCallStateStore",
    "WAWebVoipP2PConnectionManager",
    "WAWebVoipPersistentFS",
    "WAWebVoipQplHelpers",
    "WAWebVoipSctpConnectionManager",
    "WAWebVoipSignalingEnums",
    "WAWebVoipStackInterface",
    "WAWebVoipThreadPoolManagerRegistry",
    "WAWebVoipTransportFallbackTracker",
    "WAWebVoipVideoCameraCapture",
    "WAWebVoipVideoCaptureAndRendering",
    "WAWebVoipWaCallEnums",
    "WAWebVoipWasmHeapMonitor",
    "WAWebVoipWebTransportCallSummary",
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
      W,
      q,
      U,
      V,
      H,
      G = 1;
    function z(e) {
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
    var j = null,
      K = null;
    function Q() {
      return {
        initStarted: !1,
        callIsActive: !1,
        relayListReceived: !1,
        cachedRelayListData: null,
      };
    }
    var X = Q(),
      Y = 90,
      J = null,
      Z = null,
      ee = 60,
      te = null,
      ne = null;
    function re() {
      ((K = null), o("WAWebVoipWasmHeapMonitor").stopWasmHeapMonitor());
    }
    function oe(t, n) {
      if (
        t === o("WAWebVoipWaCallEnums").CallState.None ||
        t === o("WAWebVoipWaCallEnums").CallState.CallActiveElseWhere
      ) {
        re();
        return;
      }
      if (
        !(
          K != null || t === o("WAWebVoipWaCallEnums").CallState.CallStateEnding
        )
      ) {
        var a = n.callId;
        ((K = a),
          o("WAWebBackendApi")
            .frontendSendAndReceive("initializeVoipWasm")
            .then(function (e) {
              K === a && o("WAWebVoipWasmHeapMonitor").startWasmHeapMonitor(e);
            })
            .catch(function (t) {
              (K === a && (K = null),
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
    function ae() {
      J != null &&
        (window.clearTimeout(J),
        (J = null),
        (Z = null),
        o("WALogger").LOG(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "voip: caller timeout cleared",
            ])),
        ));
    }
    function ie(e, t, n) {
      return le.apply(this, arguments);
    }
    function le() {
      return (
        (le = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, a) {
            if (e.type === "web") {
              var i =
                o("WAWebVoipCallStateUtils").isCallTerminal(t) ||
                o("WAWebVoipCallStateUtils").isCallActive(t);
              if (i) {
                ae();
                return;
              }
              var l = o("WAWebVoipCallStateUtils").isCallOutgoing(t),
                s = a.isCaller === !0,
                u = a.isGroupCall === !0;
              if (l && s && !u) {
                if (J != null) return;
                var c = a.callId;
                if (c == null) {
                  o("WALogger").LOG(
                    h ||
                      (h = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: caller timeout not set, callId is null",
                      ])),
                  );
                  return;
                }
                Z = c;
                var d = Y;
                try {
                  var m = yield e.getVoipParam("options.caller_timeout");
                  if (m != null && m !== "") {
                    var p = parseInt(m, 10);
                    !isNaN(p) && p > 0 && (d = p);
                  }
                } catch (e) {
                  o("WALogger").LOG(
                    y ||
                      (y = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: failed to get caller timeout param, using default: ",
                        "",
                      ])),
                    e,
                  );
                }
                if (Z !== c) {
                  o("WALogger").LOG(
                    C ||
                      (C = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: caller timeout skipped, state changed",
                      ])),
                  );
                  return;
                }
                (o("WALogger").LOG(
                  b ||
                    (b = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: setting caller timeout for outgoing call: ",
                      "s",
                    ])),
                  d,
                ),
                  (J = window.setTimeout(function () {
                    if (Z !== c) {
                      o("WALogger").LOG(
                        v ||
                          (v = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: caller timeout fired but call ID changed, ignoring",
                          ])),
                      );
                      return;
                    }
                    (o("WALogger").LOG(
                      S ||
                        (S = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: caller timeout fired, ending call",
                        ])),
                    ),
                      (J = null),
                      (Z = null),
                      (H || (H = n("Promise")))
                        .resolve(
                          e.endCall(
                            o("WAWebVoipSignalingEnums").EndCallReason.Timeout,
                            !0,
                          ),
                        )
                        .catch(function (e) {
                          o("WALogger")
                            .ERROR(
                              R ||
                                (R = babelHelpers.taggedTemplateLiteralLoose([
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
        le.apply(this, arguments)
      );
    }
    function se() {
      te != null &&
        (window.clearTimeout(te),
        (te = null),
        (ne = null),
        o("WALogger").LOG(
          u ||
            (u = babelHelpers.taggedTemplateLiteralLoose([
              "voip: callee ringing timeout cleared",
            ])),
        ));
    }
    function ue(e) {
      var t = e.callInfo,
        a = e.callState,
        i = e.voipStackInterface;
      if (i.type === "web") {
        var l =
          o("WAWebVoipCallStateUtils").isCallTerminal(a) ||
          o("WAWebVoipCallStateUtils").isCallActive(a) ||
          o("WAWebVoipCallStateUtils").isCallConnecting(a);
        if (l) {
          se();
          return;
        }
        if (
          a === o("WAWebVoipWaCallEnums").CallState.ReceivedCall &&
          t.isCaller !== !0
        ) {
          if (te != null) return;
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
          ne = s;
          var u = ee;
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
            (te = window.setTimeout(function () {
              if (ne !== s) {
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
                (te = null),
                (ne = null),
                (H || (H = n("Promise")))
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
    function ce(e, t) {
      return de.apply(this, arguments);
    }
    function de() {
      return (
        (de = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          yield e === o("WAWebVoipWaCallEnums").CallEvent.CallStateChanged
            ? ye(t)
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
                          ? Le(t)
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
                                                            .SelfCameraAutoOff
                                                        ? o(
                                                            "WAWebVoipHandleNativeCallEventMediaHandlers",
                                                          ).handleSelfCameraAutoOff(
                                                            t,
                                                          )
                                                        : e ===
                                                            o(
                                                              "WAWebVoipWaCallEnums",
                                                            ).CallEvent
                                                              .RxTrafficStopped
                                                          ? o(
                                                              "WAWebVoipErrorLogUpload",
                                                            ).recordCallReconnectingStateForLogs()
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
                                                                        )
                                                                          .CallEvent
                                                                          .LinkQueryNacked ||
                                                                      e ===
                                                                        o(
                                                                          "WAWebVoipWaCallEnums",
                                                                        )
                                                                          .CallEvent
                                                                          .LinkJoinNacked
                                                                    ? o(
                                                                        "WAWebVoipHandleNativeCallEventCallLinkHandlers",
                                                                      ).handleCallLinkNacked(
                                                                        t,
                                                                      )
                                                                    : e ===
                                                                        o(
                                                                          "WAWebVoipWaCallEnums",
                                                                        )
                                                                          .CallEvent
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
                                                                                        .UpdateVoipSettings
                                                                                    ? o(
                                                                                        "WAWebVoipHandleNativeCallEventMediaHandlers",
                                                                                      ).handleUpdateVoipSettings()
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
                                                                                                  ? me(
                                                                                                      t,
                                                                                                    )
                                                                                                  : e ===
                                                                                                      o(
                                                                                                        "WAWebVoipWaCallEnums",
                                                                                                      )
                                                                                                        .CallEvent
                                                                                                        .VoiceChatWaveReceived
                                                                                                    ? _e(
                                                                                                        t,
                                                                                                      )
                                                                                                    : null;
        })),
        de.apply(this, arguments)
      );
    }
    function me(e) {
      return pe.apply(this, arguments);
    }
    function pe() {
      return (
        (pe = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          (o("WALogger").LOG(
            L ||
              (L = babelHelpers.taggedTemplateLiteralLoose([
                "voip: LidCallerDisplayInfo",
              ])),
          ),
            yield o("WAWebVoipHandleLidCallerDisplayInfo")
              .handleWAWebVoipLidCallerDisplayInfoJson(e)
              .catch(function (e) {
                o("WALogger")
                  .WARN(
                    E ||
                      (E = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [LidCallerDisplayInfo] unhandled error",
                      ])),
                  )
                  .catching(r("getErrorSafe")(e))
                  .sendLogs("voip-lid-caller-display-info-failed");
              }));
        })),
        pe.apply(this, arguments)
      );
    }
    function _e(e) {
      return fe.apply(this, arguments);
    }
    function fe() {
      return (
        (fe = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
                      k ||
                        (k = babelHelpers.taggedTemplateLiteralLoose([
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
        fe.apply(this, arguments)
      );
    }
    var ge = null;
    function he(e) {
      var t;
      if (
        !(
          e == null ||
          e === "" ||
          e === ge ||
          !o("WAWebCallUserJourneyGating").isCallUserJourneyLoggingEnabled()
        )
      ) {
        var n =
          (t = o("WAWebCallRandomIdStore").getCurrentCallRandomId()) != null
            ? t
            : o("WAWebCallRandomIdStore").getOrCreateCallRandomId(e);
        n != null &&
          (o("WAWebCallRandomIdStore").setCurrentCallRandomId(n),
          (ge = e),
          o("WAWebCallUserJourneyLogger").CallUserJourneyLogger.startCall(n));
      }
    }
    function ye(e) {
      return Ce.apply(this, arguments);
    }
    function Ce() {
      return (
        (Ce = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n,
            a = r("nullthrows")(
              (t = o(
                "WAWebVoipStackInterface",
              ).getCachedVoipStackInterface()) != null
                ? t
                : yield o("WAWebVoipStackInterface").getVoipStackInterface(),
            ),
            i = a.parsers.parseCallStateChangedData(e),
            l =
              (n = i.CallState) != null
                ? n
                : o("WAWebVoipWaCallEnums").CallState.None,
            s = i.call_info,
            u = o("WAWebVoipLocalCallStateStore").getLocalCallState();
          o("WAWebVoipLocalCallStateStore").setLocalCallState(l);
          var c =
            o("WAWebVoipCallStateUtils").isCallTerminal(u) &&
            !o("WAWebVoipCallStateUtils").isCallTerminal(l);
          (c &&
            (o("WAWebVoipHardwareInfo").ensureHardwareInfoDetected(),
            o("WAWebVoipErrorLogUpload").resetReconnectingStateForNewCall(),
            o("WAWebVoipTransportFallbackTracker").resetFallbackTracker(),
            o(
              "WAWebVoipSctpConnectionManager",
            ).resetSctpFallbackFamilyOutcome(),
            o(
              "WAWebVoipWebTransportConnectionManager",
            ).resetFallbackStateForNewCall(),
            o("WAWebCallRandomIdStore").clearCurrentCallRandomId(),
            o("WAWebVoipIncomingCallUiActionStore").resetIncomingCallUiAction(),
            o(
              "WAWebVoipAppInBgWhenCallStartsStore",
            ).resetAppInBgWhenCallStarts(),
            o(
              "WAWebVoipCallEnterPipModeCountStore",
            ).resetCallEnterPipModeCount()),
            o(
              "WAWebVoipAppInBgWhenCallStartsStore",
            ).maybeRecordAppInBgWhenCallStarts(u, l),
            o("WAWebVoipCallStateUtils").isCallTerminal(l)
              ? ((ge = null), be())
              : he(typeof s.callId == "string" ? s.callId : null),
            !o("WAWebVoipCallStateUtils").isCallTerminal(u) &&
              o("WAWebVoipCallStateUtils").isCallTerminal(l) &&
              (o("WAWebVoipTransportFallbackTracker").finalizeFallbackOutcome(),
              o(
                "WAWebVoipSctpConnectionManager",
              ).reportSctpFallbackFamilyOutcome(),
              o(
                "WAWebVoipSctpConnectionManager",
              ).resetWebTransportSctpWarmStandbyAtCallBoundary(),
              o(
                "WAWebCallUserJourneyLogger",
              ).CallUserJourneyLogger.clearCall()),
            o(
              "WAWebCallUserJourneyLogger",
            ).CallUserJourneyLogger.setCallConnected(
              o("WAWebVoipCallStateUtils").isCallConnected(l),
            ),
            o("WAWebCallUserJourneyLogger").CallUserJourneyLogger.setGroupCall(
              s.isGroupCall === !0,
            ),
            o("WAWebCallUserJourneyLogger").CallUserJourneyLogger.setVideoCall(
              s.videoEnabled === !0,
            ),
            o(
              "WAWebCallUserJourneyLogger",
            ).CallUserJourneyLogger.setConnectedParticipants(ve(s)),
            o("WAWebVoipCallStateUtils").isCallTerminal(l) ||
              (o("WAWebVoipDtlsCertCallRegistration").syncDtlsCertCall(
                s.callId,
              ),
              o(
                "WAWebVoipCalleeOfferToRingStore",
              ).dropCalleeOfferToRingOfOtherCall(s.callId)));
          var d = o("WAWebVoipGatingUtils").isWebTransportEnabled();
          o("WAWebVoipGatingUtils").markCurrentCallAsGroup(
            s.isGroupCall === !0,
          );
          var m =
            s.isGroupCall === !0 &&
            d &&
            !o("WAWebVoipGatingUtils").isWebTransportEnabled();
          if (
            (Re(c, u, typeof s.callId == "string" ? s.callId : null),
            o("WAWebVoipWebTransportCallSummary").recordWtCallState(l),
            Se(c),
            o("WAWebVoipGatingUtils").isWebTransportEnabled() &&
              (l === o("WAWebVoipWaCallEnums").CallState.AcceptSent ||
                l === o("WAWebVoipWaCallEnums").CallState.AcceptReceived) &&
              o("WAWebVoipWebTransportConnectionManager").handleCallAccepted(),
            m)
          ) {
            (o("WALogger").LOG(
              I ||
                (I = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [gating] group call detected, moving relay traffic to SCTP",
                ])),
            ),
              o("WAWebVoipWebTransportCallSummary").recordWtCallEligibility(
                o("WAWebVoipGatingUtils").isWebTransportConfigured(),
                !1,
              ),
              c ||
                (o(
                  "WAWebVoipWebTransportCallSummary",
                ).recordWtFallbackTriggered(
                  l,
                  o("WAWebVoipWebTransportCallSummary").WtFallbackReason
                    .GroupCallDisabled,
                ),
                o("WAWebVoipTransportFallbackTracker").markFallbackTriggered()),
              o("WAWebVoipWebTransportConnectionManager").closeAllConnections(
                !1,
              ));
            var p = X.cachedRelayListData;
            p != null &&
              (o("WAWebVoipTransportFallbackTracker").markFallbackSctpStarted(),
              o(
                "WAWebVoipSctpConnectionManager",
              ).cleanupWebTransportSctpWarmStandby(),
              o("WAWebVoipSctpConnectionManager")
                .handleRelayListUpdate(p)
                .catch(function (e) {
                  o("WALogger")
                    .ERROR(
                      T ||
                        (T = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [gating] SCTP relay list replay failed",
                        ])),
                    )
                    .catching(r("getErrorSafe")(e));
                }));
          }
          (ie(a, l, s).catch(function (e) {
            o("WALogger")
              .ERROR(
                D ||
                  (D = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: handleCallerTimeout failed",
                  ])),
              )
              .catching(r("getErrorSafe")(e));
          }),
            ue({ callInfo: s, callState: l, voipStackInterface: a }));
          var _ = o(
            "WAWebVoipThreadPoolManagerRegistry",
          ).getVoipThreadPoolManager();
          (_ == null || _.onCallStateChanged(l),
            a.type === "web" && oe(l, s),
            o("WAWebVoipCallStateUtils").isCallTerminal(l) ||
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
          var f = z(l);
          if (
            (o("WAWebBackendApi").frontendFireAndForget(
              "trackVoipCallStateChange",
              { stateName: f },
            ),
            o("WAWebBackendApi").frontendFireAndForget("setCallState", {
              callState: l,
              callInfo: i.call_info,
            }),
            l === o("WAWebVoipWaCallEnums").CallState.CallActive)
          )
            try {
              var g = i.call_info.callId;
              j = g;
              var h = o("WAWebABProps").getABPropConfigValue(
                  "web_voip_dynamic_thread_preallocate_count",
                ),
                y = o("WAWebVoipGatingUtils").isWebKitBrowser(),
                C =
                  h > 0 && !y
                    ? h
                    : "disabled(webkit=" + String(y) + ", count=" + h + ")",
                b = o("WAWebABProps").getABPropConfigValue(
                  "enable_web_voip_proxy_and_sctp_workers",
                ),
                v = !0,
                S = o("WAWebABProps").getABPropConfigValue(
                  "web_calling_perf_optimizations_bitmask",
                ),
                R = o("WAWebABProps").getABPropConfigValue(
                  "web_voip_audio_capture_impl",
                ),
                L = o("WAWebABProps").getABPropConfigValue(
                  "web_voip_audio_playback_impl",
                );
              (o("WALogger").LOG(
                x ||
                  (x = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [CallActive] proxySctp=",
                    " avSync=",
                    " dynFps=",
                    " perfBits=",
                    "",
                  ])),
                b,
                !0,
                v,
                S,
              ),
                o("WALogger").LOG(
                  $ ||
                    ($ = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [CallActive] abprops audioCap=",
                      " audioPlay=",
                      " dynPool=",
                      "",
                    ])),
                  R,
                  L,
                  C,
                ),
                o("WAWebVoipCrashRecovery").markCallActive(g),
                o("WAWebVoipCrashRecovery").registerGracefulExitHandler(g),
                o("WAWebVoipFocusTracker").startVoipFocusTracking(),
                o("WAWebBackendApi").frontendFireAndForget(
                  "reloadVideoEnhancement",
                  {},
                ),
                a.type === "web" &&
                  o("WAWebBackendApi")
                    .frontendSendAndReceive("initializeVoipWasm")
                    .then(function (e) {
                      j === g &&
                        o("WAWebVoipPersistentFS").startPeriodicVoipSync(e);
                    })
                    .catch(function (e) {
                      o("WALogger")
                        .ERROR(
                          P ||
                            (P = babelHelpers.taggedTemplateLiteralLoose([
                              "voip: [IDBFS] Failed to start periodic sync",
                            ])),
                        )
                        .catching(r("getErrorSafe")(e));
                    }),
                o("WAWebVoipBrowserMetrics").startBrowserMetrics(),
                o("WAWebVoipWindowMetrics").startWindowMetrics(),
                o("WAWebVoipBatteryDiagnostics").startBatteryDiagnostics(),
                (X.callIsActive = !0));
              var E = s.linkToken != null && s.linkToken !== "";
              (E &&
                s.videoEnabled &&
                a.type === "web" &&
                a.broadcastVideoState().catch(function (e) {
                  o("WALogger")
                    .WARN(
                      N ||
                        (N = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [CallActive] broadcastVideoState for call link failed",
                        ])),
                    )
                    .catching(r("getErrorSafe")(e));
                }),
                Ie().catch(function (e) {
                  var t = r("getErrorSafe")(e);
                  o("WALogger")
                    .WARN(
                      M ||
                        (M = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: initP2PConnectionIfEnabled failed: ",
                          "",
                        ])),
                      t.message,
                    )
                    .catching(t);
                }));
            } catch (e) {
              o("WALogger")
                .WARN(
                  w ||
                    (w = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [CallActive] backend setup failed",
                    ])),
                )
                .catching(r("getErrorSafe")(e));
            }
          var k = o("WAWebVoipCallStateUtils").isCallTerminal(l);
          if (
            (k &&
              i.call_info.callDuration === 0 &&
              o(
                "WAWebVoipHandleNativeCallEventFieldstatsHandlers",
              ).requestStoredFieldstatsSend(),
            l === o("WAWebVoipWaCallEnums").CallState.CallStateEnding &&
              (o("WAWebVoipErrorLogUpload").captureWamCallResult(e),
              o("WAWebVoipP2PConnectionManager").cleanupP2PConnection(),
              (X.callIsActive = !1)),
            l === o("WAWebVoipWaCallEnums").CallState.None)
          ) {
            (o("WAWebVoipQplHelpers").voipEndCallQplAddPoint(
              o("WAWebVoipQplHelpers").VoipEndCallQplPoint.CLEANUP_START,
            ),
              o("WAWebVoipErrorLogUpload").captureWamCallResult(e));
            var A = j != null ? j : "unknown";
            ((j = null),
              o("WAWebVoipFocusTracker").stopVoipFocusTracking(),
              o("WAWebVoipCrashRecovery").clearExitMarkers(A),
              o("WAWebVoipCrashRecovery").unregisterGracefulExitHandler(),
              o("WAWebVoipPersistentFS").stopPeriodicVoipSync(),
              o("WAWebVoipBrowserMetrics").stopBrowserMetrics(),
              o("WAWebVoipWindowMetrics").stopWindowMetrics(),
              o("WAWebVoipWebTransportConnectionManager").prepareForEndCall(),
              o("WAWebVoipWebTransportConnectionManager").closeAllConnections(),
              o(
                "WAWebVoipDtlsCertCallRegistration",
              ).endDtlsCertCallForRegisteredCall(),
              o("WAWebVoipSctpConnectionManager").cleanupAllConnections(),
              o("WAWebVoipGatingUtils").markCurrentCallAsFna(!1),
              o("WAWebVoipP2PConnectionManager").cleanupP2PConnection(),
              (X = Q()),
              o("WAWebBackendApi").frontendFireAndForget(
                "cleanupPrewarmedCamera",
                {},
              ),
              o("WAWebBackendApi").frontendFireAndForget("disableAVSync", {}),
              o("WAWebBackendApi").frontendFireAndForget(
                "resetVideoEnhancementState",
                {},
              ),
              o(
                "WAWebVoipVideoCameraCapture",
              ).WAWebVoipVideoCameraCapture.recordCallEnd(),
              o(
                "WAWebVoipVideoCameraCapture",
              ).WAWebVoipVideoCameraCapture.scheduleCallEndCameraRelease(),
              o("WAWebVoipAudioCaptureBase").scheduleCallEndMicRelease(),
              o("WAWebVoipVideoCaptureAndRendering").releaseDesktopStreamJS(),
              a.type === "web" &&
                o(
                  "WAWebVoipHandleNativeCallEventFieldstatsHandlers",
                ).syncVoipPersistentFSWithIdleCallback(),
              o(
                "WAWebVoipHandleNativeCallEventMediaHandlers",
              ).resetWebCodecsEncoderState(),
              o(
                "WAWebVoipHandleNativeCallEventCallLinkHandlers",
              ).resetCallLinkHandlerState(),
              o("WAWebVoipErrorLogUpload").maybeUploadReconnectingLogs(),
              o("WAWebVoipErrorLogUpload").maybeUploadErrorLogs(),
              o("WAWebVoipQplHelpers").voipEndCallQplAddPoint(
                o("WAWebVoipQplHelpers").VoipEndCallQplPoint.CLEANUP_END,
              ),
              o("WAWebVoipQplHelpers").endVoipEndCallQplSuccess());
          }
        })),
        Ce.apply(this, arguments)
      );
    }
    function be() {
      o(
        "WAWebVoipInitEventEmitter",
      ).VoipInitEventEmitter.clearVoipStackUnresponsive();
    }
    function ve(e) {
      var t = e.participants;
      return t == null
        ? null
        : t.filter(function (e) {
            return (
              e.state ===
              o("WAWebVoipWaCallEnums").CallParticipantState.Connected
            );
          }).length;
    }
    function Se(e) {
      e &&
        o(
          "WAWebVoipWebTransportConnectionManager",
        ).resolvePendingFastSetupForNewCall(
          o("WAWebVoipGatingUtils").isWebTransportEnabled(),
        );
    }
    function Re(e, t, n) {
      if (e) {
        (o("WAWebVoipWebTransportCallSummary").resetWtCurrentCallActivity(
          n,
          t === o("WAWebVoipWaCallEnums").CallState.None,
        ),
          o("WAWebVoipWebTransportCallSummary").recordWtCallEligibility(
            o("WAWebVoipGatingUtils").isWebTransportConfigured(),
            o("WAWebVoipGatingUtils").isWebTransportEnabled(),
          ));
        return;
      }
      n != null &&
        o("WAWebVoipWebTransportCallSummary").updateWtCurrentCallId(n);
    }
    function Le(e) {
      return Ee.apply(this, arguments);
    }
    function Ee() {
      return (
        (Ee = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n = r("nullthrows")(
              (t = o(
                "WAWebVoipStackInterface",
              ).getCachedVoipStackInterface()) != null
                ? t
                : yield o("WAWebVoipStackInterface").getVoipStackInterface(),
            ),
            a = n.parsers.parseRelayListUpdateData(e),
            i = a.relays.some(function (e) {
              return e.addresses.some(function (e) {
                return e.port === 3478 || e.port_v6 === 3478;
              });
            });
          (i && o("WAWebCoreActionsODS").logCallRelayPort3478(),
            o("WAWebVoipGatingUtils").isWebTransportEnabled()
              ? (o(
                  "WAWebVoipWebTransportConnectionManager",
                ).handleRelayListUpdate(a),
                o("WAWebVoipGatingUtils").isWebTransportEnabled() &&
                  o("WAWebVoipGatingUtils").isWebTransportFastSetupEnabled() &&
                  o("WAWebVoipSctpConnectionManager")
                    .handleRelayListUpdate(a, {
                      connectionLimit: G,
                      webTransportWarmStandby: !0,
                    })
                    .catch(function (e) {
                      o("WALogger")
                        .ERROR(
                          A ||
                            (A = babelHelpers.taggedTemplateLiteralLoose([
                              "voip: [WebTransport] SCTP warm standby setup failed",
                            ])),
                        )
                        .catching(r("getErrorSafe")(e));
                    }))
              : (o(
                  "WAWebVoipTransportFallbackTracker",
                ).markFallbackSctpStarted(),
                yield o("WAWebVoipSctpConnectionManager").handleRelayListUpdate(
                  a,
                )),
            (X.cachedRelayListData = a),
            (X.relayListReceived = !0),
            Ie().catch(function (e) {
              var t = r("getErrorSafe")(e);
              o("WALogger")
                .WARN(
                  F ||
                    (F = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: initP2PConnectionIfEnabled failed: ",
                      "",
                    ])),
                  t.message,
                )
                .catching(t);
            }));
        })),
        Ee.apply(this, arguments)
      );
    }
    function ke() {
      X.initStarted &&
        (o("WALogger").LOG(
          f ||
            (f = babelHelpers.taggedTemplateLiteralLoose([
              "voip: peer ICE restart detected, rebuilding P2P connection",
            ])),
        ),
        o("WAWebVoipP2PConnectionManager").cleanupP2PConnection(),
        (X.initStarted = !1),
        Ie().catch(function (e) {
          var t = r("getErrorSafe")(e);
          o("WALogger")
            .WARN(
              g ||
                (g = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: P2P re-init after peer ICE restart failed: ",
                  "",
                ])),
              t.message,
            )
            .catching(t);
        }));
    }
    function Ie() {
      return Te.apply(this, arguments);
    }
    function Te() {
      return (
        (Te = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (!(X.initStarted || !X.callIsActive || !X.relayListReceived)) {
            X.initStarted = !0;
            try {
              yield De();
            } catch (e) {
              throw ((X.initStarted = !1), e);
            }
          }
        })),
        Te.apply(this, arguments)
      );
    }
    function De() {
      return xe.apply(this, arguments);
    }
    function xe() {
      return (
        (xe = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
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
                O ||
                  (O = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: initP2PConnectionIfEnabled: Failed to get call info",
                  ])),
              ),
                (X.initStarted = !1));
              return;
            }
            var n = e.parsers.parseCallInfo(t);
            if (n.isGroupCall) {
              X.initStarted = !1;
              return;
            }
            var a = n.callId,
              i = n.isCaller;
            if (
              (yield o("WAWebVoipP2PConnectionManager").refreshP2PEnablement(a),
              !o("WAWebVoipP2PConnectionManager").isP2PEnabled())
            ) {
              o("WALogger").LOG(
                B ||
                  (B = babelHelpers.taggedTemplateLiteralLoose([
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
                W ||
                  (W = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: initP2PConnectionIfEnabled: non-contact, P2P gated ",
                    "",
                  ])),
                a,
              );
              return;
            }
            if (!X.callIsActive) {
              X.initStarted = !1;
              return;
            }
            o("WALogger").LOG(
              q ||
                (q = babelHelpers.taggedTemplateLiteralLoose([
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
                      U ||
                        (U = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: sendWebP2PTransport failed",
                        ])),
                    )
                    .catching(r("getErrorSafe")(e));
                });
              },
              c = 10,
              d = new Set();
            if (X.cachedRelayListData == null) {
              o("WALogger").ERROR(
                V ||
                  (V = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: initP2PConnectionIfEnabled: cachedRelayListData null",
                  ])),
              );
              return;
            }
            var m = X.cachedRelayListData;
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
            (o("WAWebVoipP2PConnectionManager").registerOnPeerIceRestart(ke),
              yield o("WAWebVoipP2PConnectionManager").initP2PConnection(
                i,
                s,
                f,
                u,
              ));
          }
        })),
        xe.apply(this, arguments)
      );
    }
    ((l.requestStoredFieldstatsSend = o(
      "WAWebVoipHandleNativeCallEventFieldstatsHandlers",
    ).requestStoredFieldstatsSend),
      (l.sendStoredFieldstats = o(
        "WAWebVoipHandleNativeCallEventFieldstatsHandlers",
      ).sendStoredFieldstats),
      (l.handleWAWebVoipNativeCallEvent = ce));
  },
  98,
);
