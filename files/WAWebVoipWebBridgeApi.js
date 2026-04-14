__d(
  "WAWebVoipWebBridgeApi",
  [
    "fbt",
    "Promise",
    "WALogger",
    "WAWebABProps",
    "WAWebAvUpgradeBannerState",
    "WAWebCallCollection",
    "WAWebCallLogUtils",
    "WAWebCallModel",
    "WAWebChatCollection",
    "WAWebContactCollection",
    "WAWebEnvironment",
    "WAWebFrontendContactGetters",
    "WAWebGroupMetadataCollection",
    "WAWebIncomingOfferNoticeVoipHandlerAction",
    "WAWebNotificationBackend",
    "WAWebNotificationsCallNotification",
    "WAWebParticipantListUtils",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebUA",
    "WAWebUserPrefsMeUser",
    "WAWebUserPrefsVoip",
    "WAWebVoipAcquireMediaStream",
    "WAWebVoipActionRequestOpenChat",
    "WAWebVoipActionWebHandleIncomingSignalingMessage",
    "WAWebVoipActionWriteCallLogCallStateChanged",
    "WAWebVoipActionWriteCallLogEventCallEnding",
    "WAWebVoipActionWriteCallLogEventCallMissed",
    "WAWebVoipActionWriteCallLogEventGroupInfoChanged",
    "WAWebVoipActionWriteCallLogEventUpdate1to1",
    "WAWebVoipActionWriteCallLogEventUpdateJoinable",
    "WAWebVoipActionWriteCallLogOfferNotice",
    "WAWebVoipActivityTracker",
    "WAWebVoipAnrTracker",
    "WAWebVoipCameraPrewarm",
    "WAWebVoipEventConstants",
    "WAWebVoipGatingUtils",
    "WAWebVoipLinkPreviewCallLink",
    "WAWebVoipNackHandlers",
    "WAWebVoipRelayAllCallsAction",
    "WAWebVoipStartCall",
    "WAWebVoipUiManager",
    "WAWebVoipUiPopoutWindowPortalContainer.react",
    "WAWebVoipVideoRendererRegistry",
    "WAWebVoipVideoStateUtils",
    "WAWebVoipWaCallEnums",
    "WAWebVoipWebLoadable",
    "WAWebWamEnumLobbyEntryPointType",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "err",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
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
      V = U || (U = o("react")),
      H = null,
      G = !1;
    function z() {
      return (
        G || ((H = o("WAWebUserPrefsVoip").getLastCallRatingTime()), (G = !0)),
        H
      );
    }
    function j(t) {
      if (t < 0)
        return (
          o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "voip: shouldShowSurveyBasedOnInterval: Survey disabled by VoIP stack (userRatingInterval=",
                ")",
              ])),
            t,
          ),
          !1
        );
      var n = o("WAWebABProps").getABPropConfigValue(
          "new_end_call_survey_pop_up_user_interval_s",
        ),
        r = n != null && n >= 0 ? n : t;
      o("WALogger").LOG(
        u ||
          (u = babelHelpers.taggedTemplateLiteralLoose([
            "voip: shouldShowSurveyBasedOnInterval: abPropInterval=",
            ", userRatingInterval=",
            ", effectiveInterval=",
            "",
          ])),
        n,
        t,
        r,
      );
      var a = Math.floor(Date.now() / 1e3),
        i = z();
      if (i == null)
        return (
          o("WALogger").LOG(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "voip: shouldShowSurveyBasedOnInterval: No previous survey, allowing (interval=",
                ")",
              ])),
            r,
          ),
          !0
        );
      var l = a - i,
        s = l >= r;
      return (
        o("WALogger").LOG(
          d ||
            (d = babelHelpers.taggedTemplateLiteralLoose([
              "voip: shouldShowSurveyBasedOnInterval: lastRatingTime=",
              ", secondsSince=",
              ", interval=",
              ", shouldShow=",
              "",
            ])),
          i,
          l,
          r,
          s,
        ),
        s
      );
    }
    function K() {
      var e = Math.floor(Date.now() / 1e3);
      ((H = e),
        o("WAWebUserPrefsVoip").setLastCallRatingTime(e),
        o("WALogger").LOG(
          m ||
            (m = babelHelpers.taggedTemplateLiteralLoose([
              "voip: recordSurveyShown: ",
              "",
            ])),
          e,
        ));
    }
    var Q = "microphone-silence-toast";
    function X(e, t) {
      if (e != null) {
        var n = r("WAWebGroupMetadataCollection").get(e);
        if ((n == null ? void 0 : n.subject) != null && n.subject !== "")
          return n.subject;
      }
      if (t.length === 0) return s._(/*BTDS*/ "Group call").toString();
      var a = o("WAWebCallLogUtils").sortParticipantWidsByPriority(t);
      return o("WAWebParticipantListUtils").formatParticipantWidsPreserveOrder(
        a,
        !0,
      );
    }
    function Y(e, t) {
      if (
        t === o("WAWebVoipWaCallEnums").CallLogResult.AcceptedElsewhere &&
        e.isGroup &&
        o("WAWebVoipGatingUtils").isDeviceSwitchingEnabled()
      ) {
        o("WALogger").LOG(
          p ||
            (p = babelHelpers.taggedTemplateLiteralLoose([
              "voip: handleCallEndingForSurvey - showing call accepted elsewhere notification for group call",
            ])),
        );
        var n = e.id;
        if (n != null) {
          var r,
            a = (r = e.groupCallParticipants) != null ? r : [],
            i = X(e.groupJid, a);
          o("WAWebNotificationBackend").showCallAcceptedElsewhereNotification({
            callId: n,
            groupJid: e.groupJid,
            isVideo: e.isVideo,
            onJoinCall: function () {
              o("WAWebVoipStartCall").joinOngoingCallByCallId(n);
            },
            participantWids: a,
            title: i,
          });
        }
      }
    }
    var J = {
      handleIncomingOfferNotice: function (t) {
        var e,
          n = t.callCreatorJid,
          a = t.callId,
          i = t.isGroup,
          l = t.isVideo,
          s = t.offerTime,
          u = o("WAWebWidFactory").createWid(n);
        ((e = o("WAWebVoipActivityTracker")).startActivityTracking(),
          e.startUiActivityTracking(),
          e.trackUiActivity(e.VoipUiActivity.CALL_RECEIVED_INCOMING),
          i
            ? o("WAWebVoipActivityTracker").trackActivity(
                l
                  ? o("WAWebVoipActivityTracker").VoipActivity
                      .RECEIVED_INCOMING_VIDEO_GROUP_CALL
                  : o("WAWebVoipActivityTracker").VoipActivity
                      .RECEIVED_INCOMING_AUDIO_GROUP_CALL,
              )
            : o("WAWebVoipActivityTracker").trackActivity(
                l
                  ? o("WAWebVoipActivityTracker").VoipActivity
                      .RECEIVED_INCOMING_VIDEO_CALL
                  : o("WAWebVoipActivityTracker").VoipActivity
                      .RECEIVED_INCOMING_AUDIO_CALL,
              ),
          r("WAWebIncomingOfferNoticeVoipHandlerAction")(u, a, s, l, i));
      },
      initializeVoipWasm: function () {
        if (r("WAWebEnvironment").isWindows)
          return (q || (q = n("Promise"))).reject(
            r("err")(
              "VoipWebBridgeApi: WASM should not be loaded on Windows Hybrid",
            ),
          );
        if (!o("WAWebVoipGatingUtils").isVoipDownloadEnabled())
          throw (q || (q = n("Promise"))).reject(
            r("err")(
              "VoipWebBridgeApi: VoipWebWasm should not be loaded - voip download is not enabled",
            ),
          );
        return o("WAWebVoipWebLoadable").requireVoip();
      },
      handleVoipWebIncomingSignalingMessageAction: function (t) {
        var e = t.msg,
          n = t.voipNode;
        return o(
          "WAWebVoipActionWebHandleIncomingSignalingMessage",
        ).handleVoipWebIncomingSignalingMessageAction(e, n);
      },
      startVoipCallByWid: function (t) {
        var e = t.isVideo,
          n = t.peerJid;
        return o("WAWebVoipStartCall").startWAWebVoipCall(n, e);
      },
      generateCallLog: function (t) {
        var e = t.props;
        return o(
          "WAWebVoipActionWriteCallLogOfferNotice",
        ).generateCallLogOfferNotice(e);
      },
      generateCallLogOfferNotice: function (t) {
        return o(
          "WAWebVoipActionWriteCallLogOfferNotice",
        ).generateCallLogOfferNotice(t);
      },
      generateCallLogFromNativeCallEndingEvent: function (t) {
        var e = t.callEndingData;
        return o(
          "WAWebVoipActionWriteCallLogEventCallEnding",
        ).generateCallLogFromNativeCallEndingEvent(e);
      },
      generateCallLogFromEventUpdateJoinable: function (t) {
        var e = t.joinableCallLogData;
        return o(
          "WAWebVoipActionWriteCallLogEventUpdateJoinable",
        ).generateCallLogFromEventUpdateJoinable(e);
      },
      generateCallLogFromEventCallMissed: function (t) {
        var e = t.callMissedData;
        return o(
          "WAWebVoipActionWriteCallLogEventCallMissed",
        ).generateCallLogFromEventCallMissed(e);
      },
      cancelCallNotification: function (t) {
        var e = t.wid;
        o("WAWebNotificationsCallNotification").cancelCallNotification(e);
      },
      generateCallLogFromEventUpdate1to1: function (t) {
        var e = t.call1to1LogData;
        return o(
          "WAWebVoipActionWriteCallLogEventUpdate1to1",
        ).generateCallLogFromEventUpdate1to1(e);
      },
      generateCallLogFromEventGroupInfoChanged: function (t) {
        var e = t.groupInfoChangedData;
        return o(
          "WAWebVoipActionWriteCallLogEventGroupInfoChanged",
        ).generateCallLogFromEventGroupInfoChanged(e);
      },
      requestOpenChat: function (t) {
        var e = t.chatJid,
          n = o("WAWebWidFactory").createWid(String(e));
        return o("WAWebVoipActionRequestOpenChat").requestOpenChat(n);
      },
      requestJoinCall: function (t) {
        var e = t.callId;
        o("WAWebVoipStartCall").joinOngoingCallByCallId(e);
      },
      getTcToken: (function () {
        var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.wid;
          if (!t.isUser())
            return (
              o("WALogger").WARN(
                _ ||
                  (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: getTcToken: wid is not a user wid, wid domain: ",
                    "",
                  ])),
                t.server,
              ),
              { tcToken: null }
            );
          try {
            var n = o("WAWebWidFactory").asUserWidOrThrow(t),
              r = yield o("WAWebCallLogUtils").get1x1CallLidOrPnDestination({
                callDestinationWid: n,
              }),
              a = o("WAWebChatCollection").ChatCollection.get(r);
            return (
              a == null &&
                o("WALogger").WARN(
                  f ||
                    (f = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: getTcToken: chat not found, chat domain: ",
                      "",
                    ])),
                  t.server,
                ),
              { tcToken: a == null ? void 0 : a.tcToken }
            );
          } catch (e) {
            return (
              o("WALogger").WARN(
                g ||
                  (g = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: getTcToken: get1x1CallLidOrPnDestination failed, error: ",
                    "",
                  ])),
                e,
              ),
              { tcToken: null }
            );
          }
        });
        function t(t) {
          return e.apply(this, arguments);
        }
        return t;
      })(),
      setCallState: (function () {
        var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n = e.callInfo,
            a = e.callState;
          if (
            (r("WAWebEnvironment").isWindows ||
              o("WAWebVoipUiManager").setupVoipActiveCallChangeListener(),
            r("WAWebCallCollection").activeCall == null &&
              (a === o("WAWebVoipWaCallEnums").CallState.CallStateEnding ||
                a === o("WAWebVoipWaCallEnums").CallState.None))
          ) {
            o("WALogger").LOG(
              h ||
                (h = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: Ignoring terminal setCallState with no active call",
                ])),
            );
            return;
          }
          if (r("WAWebCallCollection").activeCall == null) {
            (o("WALogger").LOG(
              y ||
                (y = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: Creating new call model for call state",
                ])),
            ),
              n.isCaller ||
                o("WAWebVoipActivityTracker").trackActivity(
                  o("WAWebVoipActivityTracker").VoipActivity
                    .INCOMING_CALL_MODEL_CREATING,
                ));
            var i = new (r("WAWebCallModel"))();
            if (
              ((i.id = n.callId),
              (i.peerJid = n.peerJid),
              (i.isVideo = n.videoEnabled),
              (i.isGroup = n.isGroupCall),
              (i.groupJid = n.groupJid),
              (i.outgoing = n.isCaller),
              (i.isBotGroupCall = n.isBotGroupCall),
              n.isGroupCall && n.participants)
            ) {
              var l = [],
                s = [],
                u = new Map();
              for (var c of n.participants)
                (l.push(c.jid),
                  u.set(c.jid.toString(), c.state),
                  c.state ===
                    o("WAWebVoipWaCallEnums").CallParticipantState.Connected &&
                    s.push(c.jid));
              ((i.groupCallParticipants = l),
                (i.groupCallParticipantsConnected = s),
                (i.groupCallParticipantStates = u));
            }
            n.videoEnabled
              ? ((i.selfVideoState = o(
                  "WAWebVoipWaCallEnums",
                ).VideoState.Enabled),
                (i.peerVideoState = o(
                  "WAWebVoipWaCallEnums",
                ).VideoState.Enabled))
              : ((i.selfVideoState = o(
                  "WAWebVoipWaCallEnums",
                ).VideoState.Disabled),
                (i.peerVideoState = o(
                  "WAWebVoipWaCallEnums",
                ).VideoState.Disabled));
            var d = n.linkToken != null && n.linkToken !== "";
            (d &&
              r("WAWebCallCollection").pendingCallLink != null &&
              (i.isCallLink = !0),
              r("WAWebCallCollection").setActiveCall(i));
          }
          r("WAWebCallCollection").activeCall != null &&
            n.isGroupCall &&
            !r("WAWebCallCollection").activeCall.isGroup &&
            ((r("WAWebCallCollection").activeCall.isGroup = n.isGroupCall),
            r("WAWebCallCollection").activeCall.trigger(
              o("WAWebVoipEventConstants").getChangeEvent(
                o("WAWebVoipEventConstants").VoipCallModelEvents.IS_GROUP,
              ),
            ));
          var m = r("WAWebCallCollection").activeCall,
            p = n.linkToken != null && n.linkToken !== "",
            _ = n.peerJid;
          if (
            m != null &&
            p &&
            (n.callId != null &&
              m.id !== n.callId &&
              m.id === n.linkToken &&
              (o("WALogger").LOG(
                C ||
                  (C = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: Updating call.id from linkToken to actual callId: ",
                    "",
                  ])),
                n.callId,
              ),
              (m.id = n.callId),
              m.trigger("change:id")),
            _ != null)
          ) {
            var f = m.peerJid == null || m.peerJid.toJid() !== _.toJid();
            f &&
              (o("WALogger").LOG(
                b ||
                  (b = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: Updating peerJid for call link: ",
                    "",
                  ])),
                _.toJid(),
              ),
              (m.peerJid = _),
              m.trigger(
                o("WAWebVoipEventConstants").getChangeEvent(
                  o("WAWebVoipEventConstants").VoipCallModelEvents.PEER_JID,
                ),
              ));
          }
          m != null &&
            ((m.isWaitingRoomEnabled = n.isWaitingRoomEnabled),
            (m.isWaitingRoomAdmin = n.isWaitingRoomAdmin),
            (m.isInWaitingRoom = n.isInWaitingRoom),
            (m.waitingRoomUsers = n.waitingRoomUsers),
            (m.waitingRoomUsersCount = n.waitingRoomUsersCount),
            m.trigger(
              o("WAWebVoipEventConstants").getChangeEvent(
                o("WAWebVoipEventConstants").VoipCallModelEvents
                  .WAITING_ROOM_STATE,
              ),
            ));
          var g =
            ((t = r("WAWebCallCollection").activeCall) == null
              ? void 0
              : t.id) === n.callId;
          if (g) {
            var S;
            (o("WALogger").LOG(
              v ||
                (v = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: Setting call state to ",
                  "",
                ])),
              a,
            ),
              (S = r("WAWebCallCollection").activeCall) == null ||
                S.setState(a),
              r("WAWebCallCollection").setIsInConnectedCall(
                a === o("WAWebVoipWaCallEnums").CallState.CallActive ||
                  a === o("WAWebVoipWaCallEnums").CallState.ConnectedLonely,
              ));
          }
          ((a === o("WAWebVoipWaCallEnums").CallState.CallStateEnding ||
            a === o("WAWebVoipWaCallEnums").CallState.None) &&
            g &&
            (r("WAWebCallCollection").setActiveCall(null),
            r("WAWebCallCollection").setIsInConnectedCall(!1)),
            n.isCaller ||
              o("WAWebVoipActivityTracker").trackActivity(
                o("WAWebVoipActivityTracker").VoipActivity
                  .INCOMING_CALL_MSG_GENERATING,
              ));
          var R = yield o(
              "WAWebVoipActionWriteCallLogCallStateChanged",
            ).generateCallLogFromCallStateChangedEvent(n),
            L = r("WAWebCallCollection").activeCall;
          R &&
            L &&
            (n.isCaller ||
              o("WAWebVoipActivityTracker").trackActivity(
                o("WAWebVoipActivityTracker").VoipActivity
                  .INCOMING_CALL_MSG_READY,
              ),
            (L.msg = R),
            L.trigger(
              o("WAWebVoipEventConstants").getChangeEvent(
                o("WAWebVoipEventConstants").VoipCallModelEvents.MSG,
              ),
            ));
        });
        function t(t) {
          return e.apply(this, arguments);
        }
        return t;
      })(),
      handleVideoStateChange: function (t) {
        var e = t.videoStateData,
          n = r("WAWebCallCollection").activeCall;
        if (n) {
          var a = e.isSelf != null && e.isSelf;
          a
            ? ((n.selfVideoState = e.videoState),
              n.trigger(
                o("WAWebVoipEventConstants").getChangeEvent(
                  o("WAWebVoipEventConstants").VoipCallModelEvents
                    .SELF_VIDEO_STATE,
                ),
              ),
              o("WAWebVoipVideoStateUtils").isVideoStateInactiveForCallMode(
                e.videoState,
              ) &&
                o(
                  "WAWebVoipUiPopoutWindowPortalContainer.react",
                ).setMediaStream("camera", null))
            : ((n.peerVideoState = e.videoState),
              e.userJid && (n.peerVideoJid = e.userJid));
          var i = e.userJid;
          if (
            (n.isGroup &&
              i != null &&
              (n.updateParticipantVideoState(i, e.videoState),
              n.trigger("participantVideoStateChange", {
                participantJid: i,
                videoState: e.videoState,
              })),
            e.callMediaStateChanged === !0)
          ) {
            var l = n.hasActiveVideo();
            (o("WALogger").LOG(
              S ||
                (S = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [A/V switch] Call media state changed,\n        selfVideoState: ",
                  ",\n        peerVideoState: ",
                  ",\n        isVideoCall: ",
                  "",
                ])),
              n.selfVideoState,
              n.peerVideoState,
              l,
            ),
              (n.isVideo = l),
              n.trigger(
                o("WAWebVoipEventConstants").getChangeEvent(
                  o("WAWebVoipEventConstants").VoipCallModelEvents.IS_VIDEO,
                ),
              ));
          }
          n.trigger(
            o("WAWebVoipEventConstants").getChangeEvent(
              o("WAWebVoipEventConstants").VoipCallModelEvents.VIDEO_STATE,
            ),
          );
        }
      },
      voipAcquireMediaStream: (function () {
        var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = null,
            n = o(
              "WAWebVoipUiPopoutWindowPortalContainer.react",
            ).getPopoutWindow(),
            r = n != null && !document.hasFocus();
          o("WAWebUA").UA.isFirefox || o("WAWebUA").UA.isSafari
            ? r && (t = n)
            : e.type !== "microphone" && r && (t = n);
          var a = yield o("WAWebVoipAcquireMediaStream").acquireVoipMediaStream(
            babelHelpers.extends({}, e, { targetWindow: t }),
          );
          if (a != null) {
            var i = e.type;
            if (i === "camera" || i === "desktop") {
              var l = t != null;
              o("WAWebVoipUiPopoutWindowPortalContainer.react").setMediaStream(
                i,
                a,
                l,
              );
            }
          }
          return a;
        });
        function t(t) {
          return e.apply(this, arguments);
        }
        return t;
      })(),
      getIsValidVideoDevice: (function () {
        var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.deviceId,
            n = e.isInActiveCall,
            r = e.targetWindow;
          return o("WAWebVoipAcquireMediaStream").getIsValidVideoDevice(
            t,
            r,
            n,
          );
        });
        function t(t) {
          return e.apply(this, arguments);
        }
        return t;
      })(),
      handleMuteStateChange: function (t) {
        var e = t.callInfo;
        o("WALogger").LOG(
          R ||
            (R = babelHelpers.taggedTemplateLiteralLoose([
              "voip: Mute state change received, callInfo: ",
              "",
            ])),
          e,
        );
        var n = r("WAWebCallCollection").activeCall;
        if (n) {
          var a = null;
          if (n.isGroup) {
            var i,
              l = (i = n.groupCallParticipantsConnected) != null ? i : [],
              s = l.filter(function (e) {
                return !o("WAWebUserPrefsMeUser").isMeAccount(e);
              });
            s.length === 1 && (a = s[0]);
          } else a = n.peerJid;
          var u = !1,
            c = !1;
          if (e.participants) {
            for (var d of e.participants)
              if (
                (o("WAWebUserPrefsMeUser").isMeAccount(d.jid)
                  ? (u = d.isMuted)
                  : a != null && d.jid.equals(a) && (c = d.isMuted),
                n.isGroup)
              ) {
                var m = n.isParticipantMicMuted(d.jid);
                (n.updateParticipantMicState(d.jid, d.isMuted),
                  d.isMuted !== m &&
                    n.trigger("participantMicStateChange", {
                      participantJid: d.jid,
                      isMuted: d.isMuted,
                    }));
              }
          }
          ((n.selfMicMuted = u),
            (n.peerMicMuted = c),
            o("WALogger").LOG(
              L ||
                (L = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: Updated mute states - selfMuted: ",
                  ", peerMuted: ",
                  "",
                ])),
              u,
              c,
            ),
            n.trigger(
              o("WAWebVoipEventConstants").getChangeEvent(
                o("WAWebVoipEventConstants").VoipCallModelEvents.SELF_MIC_MUTED,
              ),
            ),
            n.trigger(
              o("WAWebVoipEventConstants").getChangeEvent(
                o("WAWebVoipEventConstants").VoipCallModelEvents.PEER_MIC_MUTED,
              ),
            ));
        }
      },
      handleGroupInfoChangedGroupCall: function (t) {
        var e = t.groupInfoChangedPayload,
          n = r("WAWebCallCollection").activeCall;
        if (n) {
          n.isGroup ||
            ((n.isGroup = !0),
            n.trigger(
              o("WAWebVoipEventConstants").getChangeEvent(
                o("WAWebVoipEventConstants").VoipCallModelEvents.IS_GROUP,
              ),
            ));
          var a = [],
            i = [],
            l = new Map(),
            s = [],
            u = new Map(),
            c = new Map();
          for (var d of (m = e.CallParticipants) != null ? m : []) {
            var m;
            if (
              (a.push(d.participant),
              l.set(d.participant.toString(), d.outcome),
              d.videoState != null)
            ) {
              var p = d.videoState;
              u.set(d.participant.toString(), p);
            } else {
              var _ = n.getParticipantVideoState(d.participant);
              _ != null && u.set(d.participant.toString(), _);
            }
            if (d.isMuted != null) {
              var f = d.isMuted;
              c.set(d.participant.toString(), f);
            } else {
              var g = n.getParticipantMuteState(d.participant);
              g != null && c.set(d.participant.toString(), g);
            }
            d.outcome ===
            o("WAWebVoipWaCallEnums").CallParticipantState.Connected
              ? (i.push(d.participant), s.push(d.participant.toLogString()))
              : (d.outcome ===
                  o("WAWebVoipWaCallEnums").CallParticipantState.Terminated ||
                  d.outcome ===
                    o("WAWebVoipWaCallEnums").CallParticipantState.TimedOut ||
                  d.outcome ===
                    o("WAWebVoipWaCallEnums").CallParticipantState.Rejected) &&
                (o(
                  "WAWebVoipVideoRendererRegistry",
                ).videoRendererRegistry.removeParticipantAVSync(
                  d.participant.toString(),
                ),
                n.setPeerReconnectingState(
                  d.participant,
                  !1,
                  o("WAWebVoipWaCallEnums").ReconnectingOption.Text,
                ));
          }
          ((n.groupCallParticipants = a),
            (n.groupCallParticipantsConnected = i),
            (n.groupCallParticipantStates = l),
            n.setGroupParticipantMediaStates(u, c),
            o("WALogger").LOG(
              E ||
                (E = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: Group call connected participants: ",
                  "",
                ])),
              s.join(", "),
            ),
            n.trigger(
              o("WAWebVoipEventConstants").getChangeEvent(
                o("WAWebVoipEventConstants").VoipCallModelEvents
                  .GROUP_CALL_PARTICIPANT_STATES,
              ),
            ));
        }
      },
      handlePeerVideoPermissionChange: function (t) {
        var e = t.peerVideoPermissionData,
          n = e.isBannerVisible,
          a = e.jid,
          i = e.videoState;
        i === o("WAWebVoipWaCallEnums").VideoState.UnknownPeer && n
          ? r("WAWebAvUpgradeBannerState").showBanner({
              jid: a,
              videoState: i,
              isBannerVisible: n,
            })
          : r("WAWebAvUpgradeBannerState").removeBannerForJid(a);
      },
      handleAudioLevelChange: function (t) {
        var e = t.participantJid,
          n = r("WAWebCallCollection").activeCall;
        if (!n) {
          o("WALogger").LOG(
            k ||
              (k = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [FRONTEND] ERROR: No active call",
              ])),
          );
          return;
        }
        var a = o("WAWebUserPrefsMeUser").isMeAccount(e);
        (a
          ? ((n.selfAudioLevel = 1),
            n.trigger(
              o("WAWebVoipEventConstants").getChangeEvent(
                o("WAWebVoipEventConstants").VoipCallModelEvents
                  .SELF_AUDIO_LEVEL,
              ),
            ))
          : ((n.peerAudioLevel = 1),
            n.trigger(
              o("WAWebVoipEventConstants").getChangeEvent(
                o("WAWebVoipEventConstants").VoipCallModelEvents
                  .PEER_AUDIO_LEVEL,
              ),
            )),
          n.isGroup &&
            n.trigger("participantAudioLevelChange", { participantJid: e }));
      },
      handleReactionStateChange: function (t) {
        var e = t.reactionData,
          n = r("WAWebCallCollection").activeCall;
        if (n) {
          var o = e.callReaction,
            a = e.jid,
            i = e.reactionState;
          i === 1
            ? n.setReactionForParticipant(a, o)
            : i === 2 && n.clearReactionForParticipant(a);
        }
      },
      handleRaiseHandStateChange: function (t) {
        var e = t.raiseHandData,
          n = r("WAWebCallCollection").activeCall;
        if (n) {
          var o = e.isHandRaised,
            a = e.jid;
          o
            ? n.setRaisedHandForParticipant(a)
            : n.clearRaisedHandForParticipant(a);
        }
      },
      showMicrophoneSilenceToast: function () {
        (o("WALogger").LOG(
          I ||
            (I = babelHelpers.taggedTemplateLiteralLoose([
              "voip: Showing microphone silence toast",
            ])),
        ),
          o("WAWebToastManager").ToastManager.close(Q),
          o("WAWebToastManager").ToastManager.open(
            V.jsx(o("WAWebToast.react").Toast, {
              id: Q,
              msg: s._(
                /*BTDS*/ "Your microphone may not be working. Try switching to a different microphone.",
              ),
              duration: 1e4,
            }),
          ));
      },
      handleRelayBindsFailed: function () {
        (o("WALogger").LOG(
          T ||
            (T = babelHelpers.taggedTemplateLiteralLoose([
              "voip: handleRelayBindsFailed: Setting call failed reason (possible firewall blocking)",
            ])),
        ),
          r("WAWebCallCollection").setCallFailedReason(
            o("WAWebVoipWaCallEnums").CallFailedReason.RelayBindsFailed,
          ));
      },
      handleScreenShareStateChange: function (t) {
        var e = r("WAWebCallCollection").activeCall;
        if (e) {
          e.setScreenShareState(t.sharer_jid, t.state);
          var n = o("WAWebUserPrefsMeUser").isMeAccount(t.sharer_jid);
          n &&
            (t.state === o("WAWebVoipWaCallEnums").ScreenShareState.Stopped ||
              t.state === o("WAWebVoipWaCallEnums").ScreenShareState.Failed) &&
            (o("WAWebVoipUiPopoutWindowPortalContainer.react").setMediaStream(
              "desktop",
              null,
            ),
            t.reason ===
              o("WAWebVoipWaCallEnums").ScreenShareEndReason.TakeOver &&
              (e.setSelfScreenShareRejected(!0),
              o("WAWebToastManager").ToastManager.open(
                V.jsx(o("WAWebToast.react").Toast, {
                  msg: s._(
                    /*BTDS*/ "Another participant is already sharing their screen",
                  ),
                  duration: 5e3,
                }),
              )));
        }
      },
      handleCallEndingForSurvey: function (t) {
        var e = t.callLogResult,
          n = t.connectTime,
          a = t.userRatingInterval;
        o("WALogger").LOG(
          D ||
            (D = babelHelpers.taggedTemplateLiteralLoose([
              "voip: handleCallEndingForSurvey - connectTime: ",
              ", userRatingInterval: ",
              ", callLogResult: ",
              "",
            ])),
          n,
          a,
          e,
        );
        var i = r("WAWebCallCollection").lastActiveCall;
        (o("WALogger").LOG(
          x ||
            (x = babelHelpers.taggedTemplateLiteralLoose([
              "voip: handleCallEndingForSurvey - lastActiveCall exists: ",
              ", callLogResult value: ",
              "",
            ])),
          i != null,
          e,
        ),
          i != null &&
            e != null &&
            ((i.callLogResult = e),
            o("WALogger").LOG(
              $ ||
                ($ = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: handleCallEndingForSurvey - stored callLogResult: ",
                  " on lastActiveCall",
                ])),
              e,
            ),
            Y(i, e)),
          j(a) &&
            (o("WALogger").LOG(
              P ||
                (P = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: Showing post-call survey based on call ending event (fallback)",
                ])),
            ),
            r(
              "WAWebCallCollection",
            ).setShouldShowPostCallSurveyOnLastActiveCall(!0)));
      },
      handleRxTrafficStateForPeerChanged: function (t) {
        var e = r("WAWebCallCollection").activeCall;
        if (e) {
          var n = t.isStateOn,
            o = t.jid,
            a = t.reconnectingOption;
          e.setPeerReconnectingState(o, n, a);
        }
      },
      handleNetHealthStatusChanged: function (t) {
        var e = r("WAWebCallCollection").activeCall;
        if (e) {
          var n = t.currentState,
            a = t.previousState,
            i = t.shouldSendNoNetworkBanner,
            l = t.shouldSendPoorBanner;
          e.trigger(
            o("WAWebVoipEventConstants").getChangeEvent(
              o("WAWebVoipEventConstants").VoipCallModelEvents.NETWORK_HEALTH,
            ),
          );
        }
      },
      handleCallLinkStateChanged: function (t) {
        if (t.callLinkState === o("WAWebVoipWaCallEnums").CallLinkState.None) {
          o("WALogger").LOG(
            N ||
              (N = babelHelpers.taggedTemplateLiteralLoose([
                "voip: Call link state is None, clearing active call",
              ])),
          );
          var e = r("WAWebCallCollection").activeCall;
          e != null &&
            e.isCallLink &&
            r("WAWebCallCollection").setActiveCall(null);
          return;
        }
        r("WAWebEnvironment").isWindows ||
          o("WAWebVoipUiManager").setupVoipActiveCallChangeListener();
        var n = r("WAWebCallCollection").activeCall;
        if (n == null) {
          var a;
          o("WALogger").LOG(
            M ||
              (M = babelHelpers.taggedTemplateLiteralLoose([
                "voip: Creating new call model for call link",
              ])),
          );
          var i = new (r("WAWebCallModel"))();
          ((i.id = t.linkToken),
            (i.isCallLink = !0),
            (i.callLinkState = t.callLinkState),
            (i.callLinkToken = t.linkToken),
            (i.callLinkCreatorJid =
              (a = t.creatorJid) != null ? a : t.self.jid),
            (i.callLinkVideoEnabled = t.videoEnabled),
            (i.isLidCall = t.isLidCall),
            (i.isEventLink = t.isEventLink),
            (i.isVideo = t.videoEnabled),
            (i.outgoing = !0),
            t.videoEnabled
              ? (i.selfVideoState = o(
                  "WAWebVoipWaCallEnums",
                ).VideoState.Enabled)
              : (i.selfVideoState = o(
                  "WAWebVoipWaCallEnums",
                ).VideoState.Disabled),
            r("WAWebCallCollection").setActiveCall(i),
            (n = i));
        } else {
          var l;
          (o("WALogger").LOG(
            w ||
              (w = babelHelpers.taggedTemplateLiteralLoose([
                "voip: Updating existing call with call link state ",
                "",
              ])),
            t.callLinkState,
          ),
            (n.isCallLink = !0),
            (n.callLinkState = t.callLinkState),
            (n.callLinkToken = t.linkToken),
            (n.callLinkCreatorJid =
              (l = t.creatorJid) != null ? l : t.self.jid),
            (n.callLinkVideoEnabled = t.videoEnabled),
            (n.isLidCall = t.isLidCall),
            (n.isEventLink = t.isEventLink));
        }
        (n.trigger(
          o("WAWebVoipEventConstants").getChangeEvent(
            o("WAWebVoipEventConstants").VoipCallModelEvents
              .CALL_LINK_CREATOR_JID,
          ),
        ),
          n.trigger(
            o("WAWebVoipEventConstants").getChangeEvent(
              o("WAWebVoipEventConstants").VoipCallModelEvents.CALL_LINK_STATE,
            ),
          ),
          r("WAWebCallCollection").trigger(
            o("WAWebVoipEventConstants").getChangeEvent(
              o("WAWebVoipEventConstants").VoipCallModelEvents.CALL_LINK_STATE,
            ),
          ),
          r("WAWebCallCollection").trigger(
            o("WAWebVoipEventConstants").getChangeEvent(
              o("WAWebVoipEventConstants").VoipCallCollectionEvents.ACTIVE_CALL,
            ),
          ));
      },
      handleWaitingRoomDenied: function (t) {
        o("WALogger").LOG(
          A ||
            (A = babelHelpers.taggedTemplateLiteralLoose([
              "voip: handleWaitingRoomDenied",
            ])),
        );
        var e = r("WAWebCallCollection").activeCall;
        e != null &&
          ((e.displayWaitingRoomDenied = !0),
          e.trigger(
            o("WAWebVoipEventConstants").getChangeEvent(
              o("WAWebVoipEventConstants").VoipCallModelEvents
                .DISPLAY_WAITING_ROOM_DENIED,
            ),
          ));
      },
      handleIsInWaitingRoomChanged: function (t) {
        var e = t.isInWaitingRoom;
        o("WALogger").LOG(
          F ||
            (F = babelHelpers.taggedTemplateLiteralLoose([
              "voip: handleIsInWaitingRoomChanged: isInWaitingRoom=",
              "",
            ])),
          e,
        );
        var n = r("WAWebCallCollection").activeCall;
        n != null &&
          ((n.isInWaitingRoom = e),
          n.trigger(
            o("WAWebVoipEventConstants").getChangeEvent(
              o("WAWebVoipEventConstants").VoipCallModelEvents
                .IS_IN_WAITING_ROOM,
            ),
          ));
      },
      handleWaitingRoomStateChanged: function (t) {
        var e = t.isInWaitingRoom,
          n = t.isWaitingRoomAdmin,
          a = t.isWaitingRoomEnabled,
          i = t.waitingRoomUsers,
          l = t.waitingRoomUsersCount;
        o("WALogger").LOG(
          O ||
            (O = babelHelpers.taggedTemplateLiteralLoose([
              "voip: handleWaitingRoomStateChanged: enabled=",
              ", admin=",
              ", inWR=",
              ", count=",
              "",
            ])),
          a,
          n,
          e,
          l,
        );
        var s = r("WAWebCallCollection").activeCall;
        s != null &&
          ((s.isWaitingRoomEnabled = a),
          (s.isWaitingRoomAdmin = n),
          (s.isInWaitingRoom = e),
          (s.waitingRoomUsers = i),
          (s.waitingRoomUsersCount = l),
          s.trigger(
            o("WAWebVoipEventConstants").getChangeEvent(
              o("WAWebVoipEventConstants").VoipCallModelEvents
                .WAITING_ROOM_STATE,
            ),
          ),
          s.trigger(
            o("WAWebVoipEventConstants").getChangeEvent(
              o("WAWebVoipEventConstants").VoipCallModelEvents
                .IS_IN_WAITING_ROOM,
            ),
          ));
      },
      handleCallOfferNacked: function (t) {
        var e = t.callOfferNackedData;
        o("WAWebVoipNackHandlers").handleCallOfferNacked(e);
      },
      handleCallLinkNacked: function (t) {
        var e = t.nackCode;
        o("WAWebVoipNackHandlers").handleCallLinkNacked(e);
      },
      handleLobbyNacked: function () {
        o("WAWebVoipNackHandlers").handleLobbyNacked();
      },
      handleLobbyTimeout: function () {
        o("WAWebVoipNackHandlers").handleLobbyTimeout();
      },
      handleMuteRequestFailed: function () {
        (o("WALogger").LOG(
          B ||
            (B = babelHelpers.taggedTemplateLiteralLoose([
              "voip: handleMuteRequestFailed",
            ])),
        ),
          r("WAWebCallCollection").trigger(
            o("WAWebVoipEventConstants").getChangeEvent(
              o("WAWebVoipEventConstants").VoipCallCollectionEvents
                .MUTE_REQUEST_FAILED,
            ),
          ));
      },
      handleMutedByOthers: function (t) {
        var e = t.muterJid;
        o("WALogger").LOG(
          W ||
            (W = babelHelpers.taggedTemplateLiteralLoose([
              "voip: handleMutedByOthers muterJid=",
              "",
            ])),
          String(e),
        );
        var n = "";
        if (e != null) {
          var a = o("WAWebContactCollection").ContactCollection.get(e);
          a != null &&
            (n = o("WAWebFrontendContactGetters").getFormattedShortName(a));
        }
        r("WAWebCallCollection").trigger(
          o("WAWebVoipEventConstants").getChangeEvent(
            o("WAWebVoipEventConstants").VoipCallCollectionEvents
              .MUTED_BY_OTHERS,
          ),
          { name: n },
        );
      },
      handleGroupCallReminder: function (t) {
        var e = t.linkToken;
        if (e != null) {
          if (
            t.reminderType ===
              o("WAWebVoipWaCallEnums").ServerReminderType
                .CallLinkJoinedCreator ||
            t.reminderType ===
              o("WAWebVoipWaCallEnums").ServerReminderType
                .CallLinkCreatorCallConnected
          ) {
            var n = t.participants.map(function (e) {
              return o("WAWebWidFactory").createUserWidOrThrow(
                e.jid.user,
                e.jid.server,
              );
            });
            o("WAWebNotificationBackend").showCallLinkJoinedNotification({
              callId: t.callId,
              linkToken: e,
              participantWids: n,
              onJoinCall: function () {
                var n =
                  t.reminderType ===
                  o("WAWebVoipWaCallEnums").ServerReminderType
                    .CallLinkCreatorCallConnected
                    ? o("WAWebWamEnumLobbyEntryPointType")
                        .LOBBY_ENTRY_POINT_TYPE
                        .LINK_CREATOR_CALL_CONNECTED_PUSH_NOTIFICATION
                    : o("WAWebWamEnumLobbyEntryPointType")
                        .LOBBY_ENTRY_POINT_TYPE
                        .CALL_LINK_CREATOR_PUSH_NOTIFICATION;
                o("WAWebVoipLinkPreviewCallLink").handleClickCallLink(
                  {
                    resultType: "CALL_LINK",
                    data: {
                      token: e,
                      callType: t.isVideoCall ? "video" : "audio",
                    },
                  },
                  n,
                );
              },
            });
            return;
          }
          if (
            t.reminderType ===
              o("WAWebVoipWaCallEnums").ServerReminderType.WaitingRoomJoined ||
            t.reminderType ===
              o("WAWebVoipWaCallEnums").ServerReminderType
                .WaitingRoomMultipleJoined
          ) {
            o("WAWebNotificationBackend").showWaitingRoomNotification({
              callId: t.callId,
              linkToken: e,
              waitingRoomUserWids: t.waitingRoomUsers,
              onOpenWaitingRoom: function () {
                var n =
                  t.reminderType ===
                  o("WAWebVoipWaCallEnums").ServerReminderType
                    .WaitingRoomMultipleJoined
                    ? o("WAWebWamEnumLobbyEntryPointType")
                        .LOBBY_ENTRY_POINT_TYPE
                        .WAITING_ROOM_MULTIPLE_JOINED_PUSH_NOTIFICATION
                    : o("WAWebWamEnumLobbyEntryPointType")
                        .LOBBY_ENTRY_POINT_TYPE
                        .WAITING_ROOM_JOINED_PUSH_NOTIFICATION;
                o("WAWebVoipLinkPreviewCallLink").handleClickCallLink(
                  {
                    resultType: "CALL_LINK",
                    data: {
                      token: e,
                      callType: t.isVideoCall ? "video" : "audio",
                    },
                  },
                  n,
                );
              },
            });
            return;
          }
        }
      },
      handleCallGridRankingChanged: function (t) {
        var e = t.callInfo,
          n = r("WAWebCallCollection").activeCall;
        if (n != null) {
          var a = new Map();
          for (var i of e.participants) {
            var l = i.callGridRank;
            l != null && a.set(i.jid.toString(), l);
          }
          ((n.groupCallParticipantGridRanks = a),
            n.trigger(
              o("WAWebVoipEventConstants").getChangeEvent(
                o("WAWebVoipEventConstants").VoipCallModelEvents
                  .GROUP_CALL_PARTICIPANT_STATES,
              ),
            ));
        }
      },
      cleanupPrewarmedCamera: function () {
        o("WAWebVoipCameraPrewarm").cleanupPrewarmedCamera();
      },
      disableAVSync: function () {
        o(
          "WAWebVoipVideoRendererRegistry",
        ).videoRendererRegistry.disableAVSync();
      },
      startAnrTracking: function () {
        o("WAWebVoipAnrTracker").startAnrTracking();
      },
      consumeAnrCount: function () {
        return o("WAWebVoipAnrTracker").consumeAnrCount();
      },
      startActivityTracking: function () {
        o("WAWebVoipActivityTracker").startActivityTracking();
      },
      trackVoipActivity: function (t) {
        var e = t.activity,
          n = t.details;
        o("WAWebVoipActivityTracker").trackActivity(e, n);
      },
      trackVoipCallStateChange: function (t) {
        var e = t.stateName;
        o("WAWebVoipActivityTracker").trackCallStateChange(e);
      },
      consumeActivityData: function () {
        return o("WAWebVoipActivityTracker").consumeActivityData();
      },
      clearActivityTracking: function () {
        o("WAWebVoipActivityTracker").clearActivityTracking();
      },
      startUiActivityTracking: function () {
        o("WAWebVoipActivityTracker").startUiActivityTracking();
      },
      consumeUiActivityData: function () {
        return o("WAWebVoipActivityTracker").consumeUiActivityData();
      },
      clearUiActivityTracking: function () {
        o("WAWebVoipActivityTracker").clearUiActivityTracking();
      },
      clearAllActivityTracking: function () {
        o("WAWebVoipActivityTracker").clearAllActivityTracking();
      },
      setRelayAllCallsToUserPrefs: function (t) {
        var e = t.disallowAllP2p;
        return o("WAWebVoipRelayAllCallsAction").setRelayAllCallsToUserPrefs(e);
      },
    };
    ((l.recordSurveyShown = K),
      (l.MICROPHONE_SILENCE_TOAST_ID = Q),
      (l.VoipWebBridgeApi = J));
  },
  226,
);
