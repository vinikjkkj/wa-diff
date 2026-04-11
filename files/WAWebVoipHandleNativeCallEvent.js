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
    "WAWebVoipCrashRecovery",
    "WAWebVoipErrorLogUpload",
    "WAWebVoipFocusTracker",
    "WAWebVoipGatingUtils",
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
    "WAWebVoipWaCallEnums",
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
      M;
    function w(e) {
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
    var A = null;
    function F() {
      return {
        initStarted: !1,
        callIsActive: !1,
        relayListReceived: !1,
        cachedRelayListData: null,
      };
    }
    var O = F(),
      B = 90,
      W = null,
      q = null,
      U = 60,
      V = null,
      H = null;
    function G() {
      W != null &&
        (window.clearTimeout(W),
        (W = null),
        (q = null),
        o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "voip: caller timeout cleared",
            ])),
        ));
    }
    function z(e, t, n) {
      return j.apply(this, arguments);
    }
    function j() {
      return (
        (j = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, a) {
          if (e.type === "web") {
            var i =
              t === o("WAWebVoipWaCallEnums").CallState.None ||
              t === o("WAWebVoipWaCallEnums").CallState.CallStateEnding ||
              t === o("WAWebVoipWaCallEnums").CallState.CallActive;
            if (i) {
              G();
              return;
            }
            var l =
                t === o("WAWebVoipWaCallEnums").CallState.Calling ||
                t === o("WAWebVoipWaCallEnums").CallState.PreacceptReceived,
              s = a.isCaller === !0,
              u = a.isGroupCall === !0;
            if (l && s && !u) {
              if (W != null) return;
              var c = a.callId;
              if (c == null) {
                o("WALogger").LOG(
                  _ ||
                    (_ = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: caller timeout not set, callId is null",
                    ])),
                );
                return;
              }
              q = c;
              var d = B;
              try {
                var m = yield e.getVoipParam("options.caller_timeout");
                if (m != null && m !== "") {
                  var p = parseInt(m, 10);
                  !isNaN(p) && p > 0 && (d = p);
                }
              } catch (e) {
                o("WALogger").LOG(
                  f ||
                    (f = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: failed to get caller timeout param, using default: ",
                      "",
                    ])),
                  e,
                );
              }
              if (q !== c) {
                o("WALogger").LOG(
                  g ||
                    (g = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: caller timeout skipped, state changed",
                    ])),
                );
                return;
              }
              (o("WALogger").LOG(
                h ||
                  (h = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: setting caller timeout for outgoing call: ",
                    "s",
                  ])),
                d,
              ),
                (W = window.setTimeout(function () {
                  if (q !== c) {
                    o("WALogger").LOG(
                      y ||
                        (y = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: caller timeout fired but call ID changed, ignoring",
                        ])),
                    );
                    return;
                  }
                  (o("WALogger").LOG(
                    C ||
                      (C = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: caller timeout fired, ending call",
                      ])),
                  ),
                    (W = null),
                    (q = null),
                    (M || (M = n("Promise")))
                      .resolve(
                        e.endCall(
                          o("WAWebVoipSignalingEnums").EndCallReason.Timeout,
                          !0,
                        ),
                      )
                      .catch(function (e) {
                        o("WALogger")
                          .ERROR(
                            b ||
                              (b = babelHelpers.taggedTemplateLiteralLoose([
                                "voip: failed to end call on caller timeout",
                              ])),
                          )
                          .catching(r("getErrorSafe")(e));
                      }));
                }, d * 1e3)));
            }
          }
        })),
        j.apply(this, arguments)
      );
    }
    function K() {
      V != null &&
        (window.clearTimeout(V),
        (V = null),
        (H = null),
        o("WALogger").LOG(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "voip: callee ringing timeout cleared",
            ])),
        ));
    }
    function Q(e, t, a) {
      if (e.type === "web") {
        var i =
          t === o("WAWebVoipWaCallEnums").CallState.None ||
          t === o("WAWebVoipWaCallEnums").CallState.CallStateEnding ||
          t === o("WAWebVoipWaCallEnums").CallState.CallActive ||
          t === o("WAWebVoipWaCallEnums").CallState.AcceptSent;
        if (i) {
          K();
          return;
        }
        if (
          t === o("WAWebVoipWaCallEnums").CallState.ReceivedCall &&
          a.isCaller !== !0
        ) {
          if (V != null) return;
          var l = a.callId;
          if (l == null) {
            o("WALogger").LOG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: callee ringing timeout not set, callId is null",
                ])),
            );
            return;
          }
          H = l;
          var s = U;
          (o("WALogger").LOG(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "voip: callee ringing timeout set: ",
                " (",
                "s)",
              ])),
            l,
            s,
          ),
            (V = window.setTimeout(
              n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                if (H !== l) {
                  o("WALogger").LOG(
                    d ||
                      (d = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: callee ringing timeout fired, callId changed",
                      ])),
                  );
                  return;
                }
                (o("WALogger").LOG(
                  m ||
                    (m = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: callee ringing timeout fired: ",
                      "",
                    ])),
                  l,
                ),
                  (V = null),
                  (H = null));
                try {
                  yield e.endCall(
                    o("WAWebVoipSignalingEnums").EndCallReason.Timeout,
                    !0,
                  );
                } catch (e) {
                  o("WALogger")
                    .ERROR(
                      p ||
                        (p = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: failed to end call on callee ringing timeout",
                        ])),
                    )
                    .catching(r("getErrorSafe")(e));
                }
                o("WAWebBackendApi").frontendFireAndForget("setCallState", {
                  callState: o("WAWebVoipWaCallEnums").CallState.None,
                  callInfo: a,
                });
              }),
              s * 1e3,
            )));
        }
      }
    }
    function X(e, t) {
      return Y.apply(this, arguments);
    }
    function Y() {
      return (
        (Y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          yield e === o("WAWebVoipWaCallEnums").CallEvent.CallStateChanged
            ? J(t)
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
                          ? ee(t)
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
                                                                                        : null;
        })),
        Y.apply(this, arguments)
      );
    }
    function J(e) {
      return Z.apply(this, arguments);
    }
    function Z() {
      return (
        (Z = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
          (z(n, i, l).catch(function (e) {
            o("WALogger")
              .ERROR(
                v ||
                  (v = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: handleCallerTimeout failed",
                  ])),
              )
              .catching(r("getErrorSafe")(e));
          }),
            Q(n, i, l));
          var s = o(
            "WAWebVoipThreadPoolManagerRegistry",
          ).getVoipThreadPoolManager();
          (s == null || s.onCallStateChanged(i),
            i !== o("WAWebVoipWaCallEnums").CallState.None &&
              i !== o("WAWebVoipWaCallEnums").CallState.CallStateEnding &&
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
          var u = w(i);
          if (
            (o("WAWebBackendApi").frontendFireAndForget(
              "trackVoipCallStateChange",
              { stateName: u },
            ),
            i === o("WAWebVoipWaCallEnums").CallState.CallActive)
          ) {
            var c = a.call_info.callId;
            A = c;
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
              S ||
                (S = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [CallActive] abprops proxySctp=",
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
                R ||
                  (R = babelHelpers.taggedTemplateLiteralLoose([
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
                  A === c &&
                    o("WAWebVoipPersistentFS").startPeriodicVoipSync(e);
                })
                .catch(function (e) {
                  o("WALogger")
                    .ERROR(
                      L ||
                        (L = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [IDBFS] Failed to start periodic sync",
                        ])),
                    )
                    .catching(r("getErrorSafe")(e));
                }),
              o("WAWebVoipBrowserMetrics").startBrowserMetrics(),
              o("WAWebVoipWindowMetrics").startWindowMetrics(),
              o("WAWebVoipBatteryDiagnostics").startBatteryDiagnostics(),
              (O.callIsActive = !0));
            var b = l.linkToken != null && l.linkToken !== "";
            (b &&
              l.videoEnabled &&
              n.type === "web" &&
              n.broadcastVideoState().catch(function (e) {
                o("WALogger")
                  .WARN(
                    E ||
                      (E = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [CallActive] broadcastVideoState for call link failed",
                      ])),
                  )
                  .catching(r("getErrorSafe")(e));
              }),
              ne().catch(function (e) {
                o("WALogger")
                  .WARN(
                    k ||
                      (k = babelHelpers.taggedTemplateLiteralLoose([
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
          var D =
            i === o("WAWebVoipWaCallEnums").CallState.CallStateEnding ||
            i === o("WAWebVoipWaCallEnums").CallState.None;
          if (
            (D &&
              a.call_info.callDuration === 0 &&
              o("WAWebVoipHandleNativeCallEventFieldstatsHandlers")
                .sendStoredFieldstats()
                .catch(function (e) {
                  o("WALogger")
                    .WARN(
                      I ||
                        (I = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: sendStoredFieldstats failed",
                        ])),
                    )
                    .catching(r("getErrorSafe")(e));
                }),
            i === o("WAWebVoipWaCallEnums").CallState.CallStateEnding &&
              (o("WAWebVoipErrorLogUpload").captureWamCallResult(e),
              o("WAWebVoipP2PConnectionManager").cleanupP2PConnection(),
              (O.callIsActive = !1)),
            i === o("WAWebVoipWaCallEnums").CallState.None)
          ) {
            o("WAWebVoipErrorLogUpload").captureWamCallResult(e);
            var x = A != null ? A : "unknown";
            ((A = null),
              o("WAWebVoipFocusTracker").stopVoipFocusTracking(),
              o("WAWebVoipCrashRecovery").clearExitMarkers(x),
              o("WAWebVoipCrashRecovery").unregisterGracefulExitHandler(),
              o("WAWebVoipPersistentFS").stopPeriodicVoipSync(),
              o("WAWebVoipBrowserMetrics").stopBrowserMetrics(),
              o("WAWebVoipWindowMetrics").stopWindowMetrics(),
              o("WAWebVoipGatingUtils").isWebTransportEnabled()
                ? o(
                    "WAWebVoipWebTransportConnectionManager",
                  ).closeAllConnections()
                : o("WAWebVoipSctpConnectionManager").cleanupAllConnections(),
              o("WAWebVoipP2PConnectionManager").cleanupP2PConnection(),
              (O = F()),
              o("WAWebBackendApi").frontendFireAndForget(
                "cleanupPrewarmedCamera",
                {},
              ),
              o("WAWebBackendApi").frontendFireAndForget("disableAVSync", {}),
              o("WAWebVoipHandleNativeCallEventFieldstatsHandlers")
                .cleanupFieldstatsAfterNormalEnd()
                .catch(function (e) {
                  o("WALogger")
                    .WARN(
                      T ||
                        (T = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: cleanupFieldstatsAfterNormalEnd failed",
                        ])),
                    )
                    .catching(r("getErrorSafe")(e));
                }),
              o(
                "WAWebVoipHandleNativeCallEventMediaHandlers",
              ).resetWebCodecsEncoderState(),
              o(
                "WAWebVoipHandleNativeCallEventCallLinkHandlers",
              ).resetCallLinkHandlerState(),
              o(
                "WAWebVoipHandleNativeCallEventFieldstatsHandlers",
              ).syncVoipPersistentFSWithIdleCallback(),
              o("WAWebVoipErrorLogUpload").maybeUploadErrorLogs());
          }
        })),
        Z.apply(this, arguments)
      );
    }
    function ee(e) {
      return te.apply(this, arguments);
    }
    function te() {
      return (
        (te = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
            (O.cachedRelayListData = n),
            (O.relayListReceived = !0),
            ne().catch(function (e) {
              o("WALogger")
                .WARN(
                  D ||
                    (D = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: initP2PConnectionIfEnabled failed",
                    ])),
                )
                .catching(r("getErrorSafe")(e));
            }));
        })),
        te.apply(this, arguments)
      );
    }
    function ne() {
      return re.apply(this, arguments);
    }
    function re() {
      return (
        (re = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (
            !(
              O.initStarted ||
              !O.callIsActive ||
              !O.relayListReceived ||
              !o("WAWebVoipP2PConnectionManager").isP2PEnabled()
            )
          ) {
            O.initStarted = !0;
            try {
              yield oe();
            } catch (e) {
              throw ((O.initStarted = !1), e);
            }
          }
        })),
        re.apply(this, arguments)
      );
    }
    function oe() {
      return ae.apply(this, arguments);
    }
    function ae() {
      return (
        (ae = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
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
                x ||
                  (x = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: initP2PConnectionIfEnabled: Failed to get call info",
                  ])),
              ),
                (O.initStarted = !1));
              return;
            }
            var n = e.parsers.parseCallInfo(t);
            if (n.isGroupCall) {
              O.initStarted = !1;
              return;
            }
            var a = n.callId,
              i = n.isCaller;
            if (!O.callIsActive) {
              O.initStarted = !1;
              return;
            }
            o("WALogger").LOG(
              $ ||
                ($ = babelHelpers.taggedTemplateLiteralLoose([
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
                      P ||
                        (P = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: sendWebP2PTransport failed",
                        ])),
                    )
                    .catching(r("getErrorSafe")(e));
                });
              },
              s = 10,
              u = new Set();
            if (O.cachedRelayListData == null) {
              o("WALogger").ERROR(
                N ||
                  (N = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: initP2PConnectionIfEnabled: cachedRelayListData null",
                  ])),
              );
              return;
            }
            var c = O.cachedRelayListData;
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
        ae.apply(this, arguments)
      );
    }
    ((l.sendStoredFieldstats = o(
      "WAWebVoipHandleNativeCallEventFieldstatsHandlers",
    ).sendStoredFieldstats),
      (l.handleWAWebVoipNativeCallEvent = X));
  },
  98,
);
