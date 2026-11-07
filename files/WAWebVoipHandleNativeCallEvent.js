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
    "WAWebODS",
    "WAWebVoipAppInBgWhenCallStartsStore",
    "WAWebVoipAudioCaptureBase",
    "WAWebVoipBatteryDiagnostics",
    "WAWebVoipBrowserMetrics",
    "WAWebVoipCallEnterPipModeCountStore",
    "WAWebVoipCallReachabilityStore",
    "WAWebVoipCallScreeningCaller",
    "WAWebVoipCallStartUnifiedSessionStore",
    "WAWebVoipCallStateUtils",
    "WAWebVoipCallWindowMode",
    "WAWebVoipCalleeOfferToRingStore",
    "WAWebVoipCameraFingerprintLogging",
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
    "WAWebVoipHandleNativeCallEventVoiceChatHandlers",
    "WAWebVoipHardwareInfo",
    "WAWebVoipIncomingCallNotificationStateStore",
    "WAWebVoipIncomingCallUiActionStore",
    "WAWebVoipInitEventEmitter",
    "WAWebVoipLastCallRecorder",
    "WAWebVoipLobbyVisibilityStore",
    "WAWebVoipLocalCallStateStore",
    "WAWebVoipOneOnOneJoinableCall",
    "WAWebVoipOwnDeviceJids",
    "WAWebVoipP2PConnectionManager",
    "WAWebVoipPersistentFS",
    "WAWebVoipQplHelpers",
    "WAWebVoipSctpConnectionManager",
    "WAWebVoipSctpIceTcpFallback",
    "WAWebVoipSignalingEnums",
    "WAWebVoipStackInterface",
    "WAWebVoipTabStateAtOfferStore",
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
      G,
      z,
      j,
      K,
      Q,
      X,
      Y,
      J,
      Z = 1;
    function ee(e) {
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
                                    : e ===
                                        o("WAWebVoipWaCallEnums").CallState
                                          .Screening
                                      ? "Screening"
                                      : (function () {
                                          throw Error(
                                            "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                                              e,
                                          );
                                        })();
    }
    var te = null,
      ne = null;
    function re() {
      return {
        initStarted: !1,
        callIsActive: !1,
        relayListReceived: !1,
        cachedRelayListData: null,
      };
    }
    var oe = re(),
      ae = 90,
      ie = null,
      le = null,
      se = null,
      ue = 60,
      ce = null,
      de = null,
      me = null;
    function pe() {
      ((ne = null), o("WAWebVoipWasmHeapMonitor").stopWasmHeapMonitor());
    }
    function _e(t, n) {
      if (
        t === o("WAWebVoipWaCallEnums").CallState.None ||
        t === o("WAWebVoipWaCallEnums").CallState.CallActiveElseWhere
      ) {
        pe();
        return;
      }
      if (
        !(
          ne != null ||
          t === o("WAWebVoipWaCallEnums").CallState.CallStateEnding
        )
      ) {
        var a = n.callId;
        ((ne = a),
          o("WAWebBackendApi")
            .frontendSendAndReceive("initializeVoipWasm")
            .then(function (e) {
              ne === a && o("WAWebVoipWasmHeapMonitor").startWasmHeapMonitor(e);
            })
            .catch(function (t) {
              (ne === a && (ne = null),
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
    function fe() {
      ie != null &&
        (window.clearTimeout(ie),
        (ie = null),
        (le = null),
        o("WALogger").LOG(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "voip: caller timeout cleared",
            ])),
        ));
    }
    function ge(e, t, n) {
      return he.apply(this, arguments);
    }
    function he() {
      return (
        (he = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n) {
            if (e.type === "web") {
              var r =
                o("WAWebVoipCallStateUtils").isCallTerminal(t) ||
                o("WAWebVoipCallStateUtils").isCallActive(t);
              if (r) {
                (fe(),
                  o("WAWebVoipCallStateUtils").isCallTerminal(t) &&
                    (se = null));
                return;
              }
              var a = o("WAWebVoipCallStateUtils").isCallOutgoing(t),
                i = n.isCaller === !0,
                l = n.isGroupCall === !0;
              if (o("WAWebVoipCallStateUtils").isCallScreening(t) && i && !l) {
                var s = n.callId;
                if (s == null || se === s) return;
                ((se = s), fe(), (le = s));
                var u = yield o(
                  "WAWebVoipCallScreeningCaller",
                ).getScreeningTimeoutSec(e);
                if (
                  le !== s ||
                  !o("WAWebVoipCallStateUtils").isCallScreening(
                    o("WAWebVoipLocalCallStateStore").getLocalCallState(),
                  )
                )
                  return;
                ye(s, u, e);
                return;
              }
              if (a && i && !l) {
                if (ie != null) return;
                var c = n.callId;
                if (c == null) {
                  o("WALogger").LOG(
                    v ||
                      (v = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: caller timeout not set, callId is null",
                      ])),
                  );
                  return;
                }
                le = c;
                var d = ae;
                try {
                  var m = yield e.getVoipParam("options.caller_timeout");
                  if (m != null && m !== "") {
                    var p = parseInt(m, 10);
                    !isNaN(p) && p > 0 && (d = p);
                  }
                } catch (e) {
                  o("WALogger").LOG(
                    S ||
                      (S = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: failed to get caller timeout param, using default: ",
                        "",
                      ])),
                    e,
                  );
                }
                if (le !== c) {
                  o("WALogger").LOG(
                    R ||
                      (R = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: caller timeout skipped, state changed",
                      ])),
                  );
                  return;
                }
                ye(c, d, e);
              }
            }
          },
        )),
        he.apply(this, arguments)
      );
    }
    function ye(e, t, a) {
      (o("WALogger").LOG(
        u ||
          (u = babelHelpers.taggedTemplateLiteralLoose([
            "voip: setting caller timeout for outgoing call: ",
            "s",
          ])),
        t,
      ),
        (ie = window.setTimeout(function () {
          if (le !== e) {
            o("WALogger").LOG(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: caller timeout fired but call ID changed, ignoring",
                ])),
            );
            return;
          }
          (o("WALogger").LOG(
            d ||
              (d = babelHelpers.taggedTemplateLiteralLoose([
                "voip: caller timeout fired, ending call",
              ])),
          ),
            (ie = null),
            (le = null),
            (J || (J = n("Promise")))
              .resolve(
                a.endCall(
                  o("WAWebVoipSignalingEnums").EndCallReason.Timeout,
                  !0,
                ),
              )
              .catch(function (e) {
                o("WALogger")
                  .ERROR(
                    m ||
                      (m = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: failed to end call on caller timeout",
                      ])),
                  )
                  .catching(r("getErrorSafe")(e));
              }));
        }, t * 1e3)));
    }
    function Ce() {
      ce != null &&
        (window.clearTimeout(ce),
        (ce = null),
        (de = null),
        o("WALogger").LOG(
          p ||
            (p = babelHelpers.taggedTemplateLiteralLoose([
              "voip: callee ringing timeout cleared",
            ])),
        ));
    }
    function be(e) {
      var t = e.callInfo,
        n = e.callState,
        r = e.voipStackInterface;
      if (r.type === "web") {
        var a =
          o("WAWebVoipCallStateUtils").isCallTerminal(n) ||
          o("WAWebVoipCallStateUtils").isCallActive(n) ||
          o("WAWebVoipCallStateUtils").isCallConnecting(n);
        if (a) {
          (Ce(), o("WAWebVoipCallStateUtils").isCallTerminal(n) && (me = null));
          return;
        }
        if (t.isCaller !== !0) {
          if (o("WAWebVoipCallStateUtils").isCallScreening(n)) {
            var i = t.callId;
            if (i == null || me === i) return;
            ((me = i),
              Ce(),
              o("WAWebVoipCallScreeningCaller")
                .getScreeningTimeoutSec(r)
                .then(function (e) {
                  me !== i ||
                    ce != null ||
                    !o("WAWebVoipCallStateUtils").isCallScreening(
                      o("WAWebVoipLocalCallStateStore").getLocalCallState(),
                    ) ||
                    ve(t, e, r);
                }));
            return;
          }
          if (n === o("WAWebVoipWaCallEnums").CallState.ReceivedCall) {
            if (ce != null) return;
            ve(t, ue, r);
          }
        }
      }
    }
    function ve(e, t, a) {
      var i = e.callId;
      if (i == null) {
        o("WALogger").LOG(
          _ ||
            (_ = babelHelpers.taggedTemplateLiteralLoose([
              "voip: callee ringing timeout not set, callId is null",
            ])),
        );
        return;
      }
      ((de = i),
        o("WALogger").LOG(
          f ||
            (f = babelHelpers.taggedTemplateLiteralLoose([
              "voip: callee ringing timeout set: ",
              " (",
              "s)",
            ])),
          i,
          t,
        ),
        (ce = window.setTimeout(function () {
          if (de !== i) {
            o("WALogger").LOG(
              g ||
                (g = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: callee ringing timeout fired, callId changed",
                ])),
            );
            return;
          }
          (o("WALogger").LOG(
            h ||
              (h = babelHelpers.taggedTemplateLiteralLoose([
                "voip: callee ringing timeout fired: ",
                "",
              ])),
            i,
          ),
            (ce = null),
            (de = null),
            (J || (J = n("Promise")))
              .resolve(
                a.endCall(
                  o("WAWebVoipSignalingEnums").EndCallReason.Timeout,
                  !0,
                ),
              )
              .catch(function (e) {
                o("WALogger")
                  .ERROR(
                    y ||
                      (y = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: failed to end call on callee ringing timeout",
                      ])),
                  )
                  .catching(r("getErrorSafe")(e));
              }),
            o("WAWebBackendApi").frontendFireAndForget("setCallState", {
              callState: o("WAWebVoipWaCallEnums").CallState.None,
              callInfo: e,
            }));
        }, t * 1e3)));
    }
    function Se(e, t) {
      return Re.apply(this, arguments);
    }
    function Re() {
      return (
        (Re = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          yield e === o("WAWebVoipWaCallEnums").CallEvent.CallStateChanged
            ? Ae(t)
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
                          ? Ue(t)
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
                                                                                            .CallAutoConnect
                                                                                        ? xe(
                                                                                            t,
                                                                                          )
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
                                                                                                  : e ===
                                                                                                      o(
                                                                                                        "WAWebVoipWaCallEnums",
                                                                                                      )
                                                                                                        .CallEvent
                                                                                                        .LidCallerDisplayInfo
                                                                                                    ? Le(
                                                                                                        t,
                                                                                                      )
                                                                                                    : e ===
                                                                                                        o(
                                                                                                          "WAWebVoipWaCallEnums",
                                                                                                        )
                                                                                                          .CallEvent
                                                                                                          .VoiceChatWaveReceived
                                                                                                      ? ke(
                                                                                                          t,
                                                                                                        )
                                                                                                      : e ===
                                                                                                          o(
                                                                                                            "WAWebVoipWaCallEnums",
                                                                                                          )
                                                                                                            .CallEvent
                                                                                                            .LonelyStateTimeout
                                                                                                        ? o(
                                                                                                            "WAWebVoipHandleNativeCallEventVoiceChatHandlers",
                                                                                                          ).handleLonelyStateTimeout(
                                                                                                            t,
                                                                                                          )
                                                                                                        : e ===
                                                                                                            o(
                                                                                                              "WAWebVoipWaCallEnums",
                                                                                                            )
                                                                                                              .CallEvent
                                                                                                              .SwitchEntryPointChanged
                                                                                                          ? Te(
                                                                                                              t,
                                                                                                            )
                                                                                                          : e ===
                                                                                                              o(
                                                                                                                "WAWebVoipWaCallEnums",
                                                                                                              )
                                                                                                                .CallEvent
                                                                                                                .CallTransferFailed
                                                                                                            ? Pe(
                                                                                                                t,
                                                                                                              )
                                                                                                            : e ===
                                                                                                                o(
                                                                                                                  "WAWebVoipWaCallEnums",
                                                                                                                )
                                                                                                                  .CallEvent
                                                                                                                  .ScreeningTimeout
                                                                                                              ? o(
                                                                                                                  "WAWebVoipCallScreeningCaller",
                                                                                                                ).handleScreeningTimeout()
                                                                                                              : null;
        })),
        Re.apply(this, arguments)
      );
    }
    function Le(e) {
      return Ee.apply(this, arguments);
    }
    function Ee() {
      return (
        (Ee = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
        Ee.apply(this, arguments)
      );
    }
    function ke(e) {
      return Ie.apply(this, arguments);
    }
    function Ie() {
      return (
        (Ie = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = o("WAWebABProps").getABPropConfigValue(
              "group_calling_wave_receiving_enabled",
            ),
            n = o("WAWebVoipGatingUtils").isWebVoiceChatEnabled();
          if (!(!t && !n)) {
            var a = r("nullthrows")(
              yield o("WAWebVoipStackInterface").getVoipStackInterface(),
            );
            if (a.type === "web") {
              var i = a.parsers.parseVoiceChatWaveReceivedData(e),
                l =
                  i.silenceReason === "wave"
                    ? t
                    : i.silenceReason === "vc_wave" ||
                        i.silenceReason === "vc_wave_all"
                      ? n
                      : !1;
              if (l) {
                var s = i.callId,
                  u = i.groupJid,
                  c = i.senderWid;
                if (c == null) {
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
                  { senderWid: c, groupJid: u, callId: s },
                );
              }
            }
          }
        })),
        Ie.apply(this, arguments)
      );
    }
    function Te(e) {
      return De.apply(this, arguments);
    }
    function De() {
      return (
        (De = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = r("nullthrows")(
              yield o("WAWebVoipStackInterface").getVoipStackInterface(),
            ),
            n;
          try {
            n = t.parsers.parseSwitchEntryPointChangedData(e);
          } catch (e) {
            o("WALogger")
              .ERROR(
                I ||
                  (I = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: SwitchEntryPointChanged: dropping unparseable event",
                  ])),
              )
              .catching(r("getErrorSafe")(e))
              .sendLogs("voip-switch-entry-point-parse-failed");
            return;
          }
          (o("WALogger").LOG(
            T ||
              (T = babelHelpers.taggedTemplateLiteralLoose([
                "voip: SwitchEntryPointChanged rootCallId=",
                " enabled=",
                "",
              ])),
            n.rootCallId,
            String(n.enabled),
          ),
            o("WAWebBackendApi").frontendFireAndForget(
              "handleSwitchEntryPointChanged",
              { entryPointData: n },
            ));
        })),
        De.apply(this, arguments)
      );
    }
    function xe(e) {
      return $e.apply(this, arguments);
    }
    function $e() {
      return (
        ($e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n = r("nullthrows")(
              (t = o(
                "WAWebVoipStackInterface",
              ).getCachedVoipStackInterface()) != null
                ? t
                : yield o("WAWebVoipStackInterface").getVoipStackInterface(),
            ),
            a;
          try {
            a = n.parsers.parseCallAutoSwitchData(e);
          } catch (e) {
            o("WALogger")
              .ERROR(
                D ||
                  (D = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: CallAutoSwitch: dropping unparseable event",
                  ])),
              )
              .catching(r("getErrorSafe")(e))
              .sendLogs("voip-call-auto-switch-parse-failed");
            return;
          }
          if (a == null) {
            o("WALogger").LOG(
              x ||
                (x = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: CallAutoSwitch: event carries no call ids",
                ])),
            );
            return;
          }
          (o("WALogger").LOG(
            $ ||
              ($ = babelHelpers.taggedTemplateLiteralLoose([
                "voip: CallAutoSwitch oldCallId=",
                " currentCallId=",
                " reason=",
                "",
              ])),
            a.oldCallId,
            a.currentCallId,
            String(a.reason),
          ),
            !(
              a.reason ===
                o("WAWebVoipWaCallEnums").CallAutoSwitchReason.AutoConnect ||
              a.reason ===
                o("WAWebVoipWaCallEnums").CallAutoSwitchReason.LobbySwitch
            ) &&
              o("WAWebBackendApi").frontendFireAndForget(
                "handleCallAutoSwitch",
                { autoSwitchData: a },
              ));
        })),
        $e.apply(this, arguments)
      );
    }
    function Pe(e) {
      return Ne.apply(this, arguments);
    }
    function Ne() {
      return (
        (Ne = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = r("nullthrows")(
              yield o("WAWebVoipStackInterface").getVoipStackInterface(),
            ),
            n;
          try {
            n = t.parsers.parseCallTransferFailedData(e);
          } catch (e) {
            o("WALogger")
              .ERROR(
                P ||
                  (P = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: CallTransferFailed: dropping unparseable event",
                  ])),
              )
              .catching(r("getErrorSafe")(e))
              .sendLogs("voip-call-transfer-failed-parse-failed");
            return;
          }
          (o("WALogger").LOG(
            N ||
              (N = babelHelpers.taggedTemplateLiteralLoose([
                "voip: CallTransferFailed rootCallId=",
                " failure=",
                "",
              ])),
            n.rootCallId,
            n.failure,
          ),
            o("WAWebBackendApi").frontendFireAndForget(
              "handleCallTransferFailed",
              { failureData: n },
            ));
        })),
        Ne.apply(this, arguments)
      );
    }
    var Me = null;
    function we(e) {
      var t;
      if (
        !(
          e == null ||
          e === "" ||
          e === Me ||
          !o("WAWebCallUserJourneyGating").isCallUserJourneyLoggingEnabled()
        )
      ) {
        var n =
          (t = o("WAWebCallRandomIdStore").getCurrentCallRandomId()) != null
            ? t
            : o("WAWebCallRandomIdStore").getOrCreateCallRandomId(e);
        n != null &&
          (o("WAWebCallRandomIdStore").setCurrentCallRandomId(n),
          (Me = e),
          o("WAWebCallUserJourneyLogger").CallUserJourneyLogger.startCall(n));
      }
    }
    function Ae(e) {
      return Fe.apply(this, arguments);
    }
    function Fe() {
      return (
        (Fe = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
            (o(
              "WAWebVoipCameraFingerprintLogging",
            ).resetCameraFingerprintLogging(),
            o("WAWebVoipHardwareInfo").ensureHardwareInfoDetected(),
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
            o("WAWebVoipCallReachabilityStore").resetCallReachability(),
            o(
              "WAWebVoipCallEnterPipModeCountStore",
            ).resetCallEnterPipModeCount(),
            o(
              "WAWebVoipOwnDeviceJids",
            ).refreshOwnOtherDeviceJidsForCallTransfer(a)),
            o(
              "WAWebVoipAppInBgWhenCallStartsStore",
            ).maybeRecordAppInBgWhenCallStarts(u, l),
            o("WAWebVoipCallReachabilityStore").maybeRecordCallReachability(
              u,
              l,
            ),
            o("WAWebVoipLastCallRecorder").maybeRecordLastCall(u, l),
            o(
              "WAWebVoipCallStartUnifiedSessionStore",
            ).maybeRecordCallStartUnifiedSessionId(
              u,
              l,
              typeof s.callId == "string" ? s.callId : null,
            ),
            o("WAWebVoipCallStateUtils").isCallTerminal(l)
              ? ((Me = null), Oe())
              : we(typeof s.callId == "string" ? s.callId : null),
            !o("WAWebVoipCallStateUtils").isCallTerminal(u) &&
              o("WAWebVoipCallStateUtils").isCallTerminal(l) &&
              (o("WAWebVoipFocusTracker").stopVoipFocusTracking(),
              o("WAWebVoipTransportFallbackTracker").finalizeFallbackOutcome(),
              o("WAWebVoipGatingUtils").resetWebTransportFallbackState(),
              o(
                "WAWebVoipSctpConnectionManager",
              ).reportSctpFallbackFamilyOutcome(),
              o(
                "WAWebVoipSctpConnectionManager",
              ).resetWebTransportSctpWarmStandbyAtCallBoundary(),
              o(
                "WAWebCallUserJourneyLogger",
              ).CallUserJourneyLogger.clearCall()),
            u === o("WAWebVoipWaCallEnums").CallState.CallActive &&
              l === o("WAWebVoipWaCallEnums").CallState.ConnectedLonely &&
              (o("WAWebVoipWebTransportConnectionManager").closeAllConnections(
                !1,
              ),
              o("WAWebVoipSctpConnectionManager").closeAllRelayConnections()),
            o(
              "WAWebCallUserJourneyLogger",
            ).CallUserJourneyLogger.setCallConnected(
              o("WAWebVoipCallStateUtils").isCallConnected(l),
            ),
            o("WAWebVoipOneOnOneJoinableCall").maybeLogOneOnOneJoinableCall(
              u,
              l,
              s,
            ),
            o("WAWebCallUserJourneyLogger").CallUserJourneyLogger.setGroupCall(
              s.isGroupCall === !0,
            ),
            o("WAWebCallUserJourneyLogger").CallUserJourneyLogger.setVideoCall(
              s.videoEnabled === !0,
            ),
            o(
              "WAWebCallUserJourneyLogger",
            ).CallUserJourneyLogger.setConnectedParticipants(Be(s)),
            o("WAWebVoipCallStateUtils").isCallTerminal(l) ||
              (o("WAWebVoipDtlsCertCallRegistration").syncDtlsCertCall(
                s.callId,
              ),
              o(
                "WAWebVoipCalleeOfferToRingStore",
              ).dropCalleeOfferToRingOfOtherCall(s.callId),
              o("WAWebVoipTabStateAtOfferStore").dropTabStateAtOfferOfOtherCall(
                s.callId,
              ),
              o(
                "WAWebVoipIncomingCallNotificationStateStore",
              ).dropIncomingCallNotificationStateOfOtherCall(s.callId),
              o("WAWebVoipLobbyVisibilityStore").dropLobbyVisibilityOfOtherCall(
                s.callId,
              )));
          var d = o("WAWebVoipGatingUtils").isWebTransportEnabled();
          o("WAWebVoipGatingUtils").markCurrentCallAsGroup(
            s.isGroupCall === !0,
          );
          var m =
            s.isGroupCall === !0 &&
            d &&
            !o("WAWebVoipGatingUtils").isWebTransportEnabled();
          if (
            (qe(c, u, typeof s.callId == "string" ? s.callId : null),
            o("WAWebVoipWebTransportCallSummary").recordWtCallState(l),
            We(c),
            (l === o("WAWebVoipWaCallEnums").CallState.AcceptSent ||
              l === o("WAWebVoipWaCallEnums").CallState.AcceptReceived) &&
              (o(
                "WAWebVoipSctpIceTcpFallback",
              ).noteIceTcpFallbackCallAccepted(),
              o("WAWebVoipGatingUtils").isWebTransportEnabled() &&
                o(
                  "WAWebVoipWebTransportConnectionManager",
                ).handleCallAccepted()),
            m)
          ) {
            (o("WALogger").LOG(
              M ||
                (M = babelHelpers.taggedTemplateLiteralLoose([
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
            var p = oe.cachedRelayListData;
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
                      w ||
                        (w = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [gating] SCTP relay list replay failed",
                        ])),
                    )
                    .catching(r("getErrorSafe")(e));
                }));
          }
          (ge(a, l, s).catch(function (e) {
            o("WALogger")
              .ERROR(
                A ||
                  (A = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: handleCallerTimeout failed",
                  ])),
              )
              .catching(r("getErrorSafe")(e));
          }),
            be({ callInfo: s, callState: l, voipStackInterface: a }),
            o("WAWebVoipCallScreeningCaller")
              .maybeStartCallerScreeningRecording({
                callState: l,
                isCaller: s.isCaller === !0,
                previousCallState: u,
                voipStackInterface: a,
              })
              .catch(function (e) {
                o("WALogger")
                  .ERROR(
                    F ||
                      (F = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: maybeStartCallerScreeningRecording failed",
                      ])),
                  )
                  .catching(r("getErrorSafe")(e));
              }),
            o("WAWebVoipCallScreeningCaller").maybeStopScreeningPrompt({
              callState: l,
              previousCallState: u,
            }));
          var _ = o(
            "WAWebVoipThreadPoolManagerRegistry",
          ).getVoipThreadPoolManager();
          (_ == null || _.onCallStateChanged(l),
            a.type === "web" && _e(l, s),
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
          var f = ee(l);
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
          ) {
            o("WAWebVoipCameraFingerprintLogging").maybeLogCameraFingerprint(
              s.videoEnabled === !0,
              a.type === "web",
            );
            try {
              var g = i.call_info.callId;
              te = g;
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
                O ||
                  (O = babelHelpers.taggedTemplateLiteralLoose([
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
                  B ||
                    (B = babelHelpers.taggedTemplateLiteralLoose([
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
                      te === g &&
                        o("WAWebVoipPersistentFS").startPeriodicVoipSync(e);
                    })
                    .catch(function (e) {
                      o("WALogger")
                        .ERROR(
                          W ||
                            (W = babelHelpers.taggedTemplateLiteralLoose([
                              "voip: [IDBFS] Failed to start periodic sync",
                            ])),
                        )
                        .catching(r("getErrorSafe")(e));
                    }),
                o("WAWebVoipBrowserMetrics").startBrowserMetrics(),
                o("WAWebVoipWindowMetrics").startWindowMetrics(),
                o("WAWebVoipBatteryDiagnostics").startBatteryDiagnostics(),
                (oe.callIsActive = !0));
              var E = s.linkToken != null && s.linkToken !== "";
              (E &&
                s.videoEnabled &&
                a.type === "web" &&
                a.broadcastVideoState().catch(function (e) {
                  o("WALogger")
                    .WARN(
                      q ||
                        (q = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [CallActive] broadcastVideoState for call link failed",
                        ])),
                    )
                    .catching(r("getErrorSafe")(e));
                }),
                Ge().catch(function (e) {
                  var t = r("getErrorSafe")(e);
                  o("WALogger")
                    .WARN(
                      U ||
                        (U = babelHelpers.taggedTemplateLiteralLoose([
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
                  V ||
                    (V = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [CallActive] backend setup failed",
                    ])),
                )
                .catching(r("getErrorSafe")(e));
            }
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
              (oe.callIsActive = !1),
              o("WAWebVoipSctpIceTcpFallback").resetIceTcpFallback()),
            l === o("WAWebVoipWaCallEnums").CallState.None)
          ) {
            (o("WAWebVoipQplHelpers").voipEndCallQplAddPoint(
              o("WAWebVoipQplHelpers").VoipEndCallQplPoint.CLEANUP_START,
            ),
              o("WAWebVoipErrorLogUpload").captureWamCallResult(e));
            var I = te != null ? te : "unknown";
            ((te = null),
              o("WAWebVoipFocusTracker").stopVoipFocusTracking(),
              o("WAWebVoipCallWindowMode").resetCallWindowMode(),
              o("WAWebVoipCrashRecovery").clearExitMarkers(I),
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
              (oe = re()),
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
        Fe.apply(this, arguments)
      );
    }
    function Oe() {
      o(
        "WAWebVoipInitEventEmitter",
      ).VoipInitEventEmitter.clearVoipStackUnresponsive();
    }
    function Be(e) {
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
    function We(e) {
      e &&
        o(
          "WAWebVoipWebTransportConnectionManager",
        ).resolvePendingFastSetupForNewCall(
          o("WAWebVoipGatingUtils").isWebTransportEnabled(),
        );
    }
    function qe(e, t, n) {
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
    function Ue(e) {
      return Ve.apply(this, arguments);
    }
    function Ve() {
      return (
        (Ve = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
          (i && r("WAWebODS").incr("web.call.relay.port_3478"),
            o("WAWebVoipGatingUtils").isWebTransportEnabled()
              ? (o(
                  "WAWebVoipWebTransportConnectionManager",
                ).handleRelayListUpdate(a),
                o("WAWebVoipGatingUtils").isWebTransportEnabled() &&
                  o("WAWebVoipGatingUtils").isWebTransportFastSetupEnabled() &&
                  o("WAWebVoipSctpConnectionManager")
                    .handleRelayListUpdate(a, {
                      connectionLimit: Z,
                      webTransportWarmStandby: !0,
                    })
                    .catch(function (e) {
                      o("WALogger")
                        .ERROR(
                          H ||
                            (H = babelHelpers.taggedTemplateLiteralLoose([
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
            (oe.cachedRelayListData = a),
            (oe.relayListReceived = !0),
            Ge().catch(function (e) {
              var t = r("getErrorSafe")(e);
              o("WALogger")
                .WARN(
                  G ||
                    (G = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: initP2PConnectionIfEnabled failed: ",
                      "",
                    ])),
                  t.message,
                )
                .catching(t);
            }));
        })),
        Ve.apply(this, arguments)
      );
    }
    function He() {
      oe.initStarted &&
        (o("WALogger").LOG(
          C ||
            (C = babelHelpers.taggedTemplateLiteralLoose([
              "voip: peer ICE restart detected, rebuilding P2P connection",
            ])),
        ),
        o("WAWebVoipP2PConnectionManager").cleanupP2PConnection(),
        (oe.initStarted = !1),
        Ge().catch(function (e) {
          var t = r("getErrorSafe")(e);
          o("WALogger")
            .WARN(
              b ||
                (b = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: P2P re-init after peer ICE restart failed: ",
                  "",
                ])),
              t.message,
            )
            .catching(t);
        }));
    }
    function Ge() {
      return ze.apply(this, arguments);
    }
    function ze() {
      return (
        (ze = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (!(oe.initStarted || !oe.callIsActive || !oe.relayListReceived)) {
            oe.initStarted = !0;
            try {
              yield je();
            } catch (e) {
              throw ((oe.initStarted = !1), e);
            }
          }
        })),
        ze.apply(this, arguments)
      );
    }
    function je() {
      return Ke.apply(this, arguments);
    }
    function Ke() {
      return (
        (Ke = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
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
                z ||
                  (z = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: initP2PConnectionIfEnabled: Failed to get call info",
                  ])),
              ),
                (oe.initStarted = !1));
              return;
            }
            var n = e.parsers.parseCallInfo(t);
            if (n.isGroupCall) {
              oe.initStarted = !1;
              return;
            }
            var a = n.callId,
              i = n.isCaller;
            if (
              (yield o("WAWebVoipP2PConnectionManager").refreshP2PEnablement(a),
              !o("WAWebVoipP2PConnectionManager").isP2PEnabled())
            ) {
              o("WALogger").LOG(
                j ||
                  (j = babelHelpers.taggedTemplateLiteralLoose([
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
                K ||
                  (K = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: initP2PConnectionIfEnabled: non-contact, P2P gated ",
                    "",
                  ])),
                a,
              );
              return;
            }
            if (!oe.callIsActive) {
              oe.initStarted = !1;
              return;
            }
            o("WALogger").LOG(
              Q ||
                (Q = babelHelpers.taggedTemplateLiteralLoose([
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
                      X ||
                        (X = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: sendWebP2PTransport failed",
                        ])),
                    )
                    .catching(r("getErrorSafe")(e));
                });
              },
              c = 10,
              d = new Set();
            if (oe.cachedRelayListData == null) {
              o("WALogger").ERROR(
                Y ||
                  (Y = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: initP2PConnectionIfEnabled: cachedRelayListData null",
                  ])),
              );
              return;
            }
            var m = oe.cachedRelayListData;
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
            (o("WAWebVoipP2PConnectionManager").registerOnPeerIceRestart(He),
              yield o("WAWebVoipP2PConnectionManager").initP2PConnection(
                i,
                s,
                f,
                u,
              ));
          }
        })),
        Ke.apply(this, arguments)
      );
    }
    ((l.requestStoredFieldstatsSend = o(
      "WAWebVoipHandleNativeCallEventFieldstatsHandlers",
    ).requestStoredFieldstatsSend),
      (l.sendStoredFieldstats = o(
        "WAWebVoipHandleNativeCallEventFieldstatsHandlers",
      ).sendStoredFieldstats),
      (l.handleWAWebVoipNativeCallEvent = Se));
  },
  98,
);
