__d(
  "WAWebVoipWebBridgeApi",
  [
    "fbt",
    "Promise",
    "WALogger",
    "WAWebAvUpgradeBannerState",
    "WAWebCallAcceptedElsewhereNotificationDeferral",
    "WAWebCallCollection",
    "WAWebCallLogUtils",
    "WAWebCallModel",
    "WAWebChatCollection",
    "WAWebContactCollection",
    "WAWebEnvironment",
    "WAWebFrontendContactGetters",
    "WAWebGroupMetadataCollection",
    "WAWebInCallWaitingRoomNotificationHelper",
    "WAWebIncomingOfferNoticeVoipHandlerAction",
    "WAWebMsgGetters",
    "WAWebNotificationBackend",
    "WAWebNotificationsCallNotification",
    "WAWebParticipantListUtils",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebUserPrefsMeUser",
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
    "WAWebVoipAudioCaptureAndPlayback",
    "WAWebVoipBridgeMediaStreamHelpers",
    "WAWebVoipBridgeMicSilenceToast",
    "WAWebVoipCallStateUtils",
    "WAWebVoipCallSurveyState",
    "WAWebVoipCameraPrewarm",
    "WAWebVoipEventConstants",
    "WAWebVoipGatingUtils",
    "WAWebVoipLinkPreviewCallLink",
    "WAWebVoipNackHandlers",
    "WAWebVoipOngoingCallCollection",
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
      W = B || (B = o("react"));
    function q(e, t, n) {
      if (e != null) {
        var a = new Set(
            e.map(function (e) {
              return e.toString();
            }),
          ),
          i = [];
        for (var l of t) {
          var s = l.toString();
          a.has(s) ||
            o("WAWebUserPrefsMeUser").isMeAccount(l) ||
            l.isBot() ||
            n.get(s) ===
              o("WAWebVoipWaCallEnums").CallParticipantState.Connected ||
            i.push(l);
        }
        i.length !== 0 &&
          r("WAWebCallCollection").trigger(
            o("WAWebVoipEventConstants").getChangeEvent(
              o("WAWebVoipEventConstants").VoipCallCollectionEvents
                .PARTICIPANTS_INVITED,
            ),
            { jids: i },
          );
      }
    }
    function U(e, t) {
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
    function V(t, n) {
      if (
        n === o("WAWebVoipWaCallEnums").CallLogResult.AcceptedElsewhere &&
        t.isGroup &&
        o("WAWebVoipGatingUtils").isDeviceSwitchingEnabled() &&
        o("WAWebVoipGatingUtils").isCallTransferNotificationEnabled()
      ) {
        var r = t.id;
        if (r != null) {
          var a,
            i = (a = t.groupCallParticipants) != null ? a : [],
            l = U(t.groupJid, i),
            s = {
              callId: r,
              groupJid: t.groupJid,
              isVideo: t.isVideo,
              onJoinCall: function () {
                o("WAWebVoipStartCall").joinOngoingCallByCallId(r);
              },
              participantWids: i,
              title: l,
            };
          (o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "voip: routing call-accepted-elsewhere notification for group call ",
                " through foreground deferral",
              ])),
            r,
          ),
            o(
              "WAWebCallAcceptedElsewhereNotificationDeferral",
            ).deferCallAcceptedElsewhereNotificationUntilForeground(s));
        }
      }
    }
    var H = {
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
          return (O || (O = n("Promise"))).reject(
            r("err")(
              "VoipWebBridgeApi: WASM should not be loaded on Windows Hybrid",
            ),
          );
        if (!o("WAWebVoipGatingUtils").isVoipDownloadEnabled())
          throw (O || (O = n("Promise"))).reject(
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
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
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
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
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
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
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
              o("WAWebVoipCallStateUtils").isCallTerminal(a))
          ) {
            o("WALogger").LOG(
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: Ignoring terminal setCallState with no active call",
                ])),
            );
            return;
          }
          if (r("WAWebCallCollection").activeCall == null) {
            (o("WALogger").LOG(
              p ||
                (p = babelHelpers.taggedTemplateLiteralLoose([
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
            if (d) {
              ((i.isCallLink = !0), (i.callLinkToken = n.linkToken));
              var b = o(
                "WAWebVoipOngoingCallCollection",
              ).WAWebVoipOngoingCallCollection.getByCallId(n.callId);
              if (b != null && o("WAWebMsgGetters").getIsCallLink(b) === !0) {
                var v = o("WAWebMsgGetters").getSender(b);
                (v == null &&
                  o("WALogger").LOG(
                    _ ||
                      (_ = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: setCallState: joinable call-link Msg for ",
                        " has no sender, callLinkCreatorJid stays null",
                      ])),
                    n.callId,
                  ),
                  (i.callLinkCreatorJid = v));
              } else
                o("WALogger").LOG(
                  f ||
                    (f = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: setCallState: no joinable call-link Msg for ",
                      "",
                    ])),
                  n.callId,
                );
            }
            (r("WAWebCallCollection").setActiveCall(i),
              d &&
                i.callLinkCreatorJid != null &&
                i.trigger(
                  o("WAWebVoipEventConstants").getChangeEvent(
                    o("WAWebVoipEventConstants").VoipCallModelEvents
                      .CALL_LINK_CREATOR_JID,
                  ),
                ));
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
          var S = r("WAWebCallCollection").activeCall,
            R = n.linkToken != null && n.linkToken !== "",
            L = n.peerJid;
          if (S != null && R) {
            if (
              (S.isCallLink ||
                ((S.isCallLink = !0),
                (S.callLinkToken = n.linkToken),
                S.trigger(
                  o("WAWebVoipEventConstants").getChangeEvent(
                    o("WAWebVoipEventConstants").VoipCallModelEvents
                      .CALL_LINK_STATE,
                  ),
                )),
              n.callId != null &&
                S.id !== n.callId &&
                S.id === n.linkToken &&
                (o("WALogger").LOG(
                  g ||
                    (g = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: Updating call.id from linkToken to actual callId: ",
                      "",
                    ])),
                  n.callId,
                ),
                (S.id = n.callId),
                S.trigger("change:id")),
              L != null)
            ) {
              var E = S.peerJid == null || S.peerJid.toJid() !== L.toJid();
              E &&
                (o("WALogger").LOG(
                  h ||
                    (h = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: Updating peerJid for call link: ",
                      "",
                    ])),
                  L.toJid(),
                ),
                (S.peerJid = L),
                S.trigger(
                  o("WAWebVoipEventConstants").getChangeEvent(
                    o("WAWebVoipEventConstants").VoipCallModelEvents.PEER_JID,
                  ),
                ));
            }
            if (n.participants) {
              var k = n.participants.find(function (e) {
                return (
                  e.userType === o("WAWebVoipWaCallEnums").CallUserType.Admin
                );
              });
              if (k != null) {
                var I = S.callLinkCreatorJid;
                ((S.callLinkCreatorJid = k.jid),
                  (I == null || I.toJid() !== k.jid.toJid()) &&
                    S.trigger(
                      o("WAWebVoipEventConstants").getChangeEvent(
                        o("WAWebVoipEventConstants").VoipCallModelEvents
                          .CALL_LINK_CREATOR_JID,
                      ),
                    ));
              }
            }
          }
          (S != null &&
            ((S.isWaitingRoomEnabled = n.isWaitingRoomEnabled),
            (S.isWaitingRoomAdmin = n.isWaitingRoomAdmin),
            (S.isInWaitingRoom = n.isInWaitingRoom),
            (S.waitingRoomUsers = n.waitingRoomUsers),
            (S.waitingRoomUsersCount = n.waitingRoomUsersCount),
            (S.isDualStreamSsEnabled = n.isDualStreamSsEnabled),
            S.trigger(
              o("WAWebVoipEventConstants").getChangeEvent(
                o("WAWebVoipEventConstants").VoipCallModelEvents
                  .WAITING_ROOM_STATE,
              ),
            )),
            S != null &&
              n.callId != null &&
              S.id !== n.callId &&
              o("WAWebVoipCallStateUtils").isCallActive(a) &&
              o("WAWebVoipCallStateUtils").isCallOutgoing(S.getState()) &&
              (o("WALogger").LOG(
                y ||
                  (y = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: Updating call.id during auto-connect: ",
                    "",
                  ])),
                n.callId,
              ),
              (S.id = n.callId),
              (S.outgoing = n.isCaller),
              S.trigger("change:id")));
          var T =
            ((t = r("WAWebCallCollection").activeCall) == null
              ? void 0
              : t.id) === n.callId;
          if (T) {
            var D;
            (o("WALogger").LOG(
              C ||
                (C = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: Setting call state to ",
                  "",
                ])),
              a,
            ),
              (D = r("WAWebCallCollection").activeCall) == null ||
                D.setState(a),
              r("WAWebCallCollection").setIsInConnectedCall(
                o("WAWebVoipCallStateUtils").isCallConnected(a),
              ));
          }
          if (
            (o("WAWebVoipCallStateUtils").isCallTerminal(a) &&
              T &&
              (o(
                "WAWebInCallWaitingRoomNotificationHelper",
              ).closeInCallWaitingRoomNotification(n.callId),
              r("WAWebCallCollection").setActiveCall(null),
              r("WAWebCallCollection").setIsInConnectedCall(!1)),
            !r("WAWebEnvironment").isGuest)
          ) {
            n.isCaller ||
              o("WAWebVoipActivityTracker").trackActivity(
                o("WAWebVoipActivityTracker").VoipActivity
                  .INCOMING_CALL_MSG_GENERATING,
              );
            var x = yield o(
                "WAWebVoipActionWriteCallLogCallStateChanged",
              ).generateCallLogFromCallStateChangedEvent(n),
              $ = r("WAWebCallCollection").activeCall;
            x &&
              $ &&
              (n.isCaller ||
                o("WAWebVoipActivityTracker").trackActivity(
                  o("WAWebVoipActivityTracker").VoipActivity
                    .INCOMING_CALL_MSG_READY,
                ),
              ($.msg = x),
              $.trigger(
                o("WAWebVoipEventConstants").getChangeEvent(
                  o("WAWebVoipEventConstants").VoipCallModelEvents.MSG,
                ),
              ));
          }
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
              b ||
                (b = babelHelpers.taggedTemplateLiteralLoose([
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
      voipAcquireMediaStream: o("WAWebVoipBridgeMediaStreamHelpers")
        .voipAcquireMediaStreamImpl,
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
          v ||
            (v = babelHelpers.taggedTemplateLiteralLoose([
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
              S ||
                (S = babelHelpers.taggedTemplateLiteralLoose([
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
        var e,
          n,
          a = t.groupInfoChangedPayload,
          i = r("WAWebCallCollection").activeCall;
        if (i) {
          i.isGroup ||
            ((i.isGroup = !0),
            i.trigger(
              o("WAWebVoipEventConstants").getChangeEvent(
                o("WAWebVoipEventConstants").VoipCallModelEvents.IS_GROUP,
              ),
            ));
          var l =
              (e = i.groupCallParticipants) != null
                ? e
                : i.peerJid != null
                  ? [i.peerJid]
                  : null,
            s = new Set(
              ((n = i.groupCallParticipantsConnected) != null ? n : []).map(
                function (e) {
                  return e.toString();
                },
              ),
            ),
            u = [],
            c = [],
            d = new Map(),
            m = [],
            p = new Map(),
            _ = new Map();
          for (var f of (g = a.CallParticipants) != null ? g : []) {
            var g;
            if (
              (u.push(f.participant),
              d.set(f.participant.toString(), f.outcome),
              f.videoState != null)
            ) {
              var h = f.videoState;
              p.set(f.participant.toString(), h);
            } else {
              var y = i.getParticipantVideoState(f.participant);
              y != null && p.set(f.participant.toString(), y);
            }
            if (f.isMuted != null) {
              var C = f.isMuted;
              _.set(f.participant.toString(), C);
            } else {
              var b = i.getParticipantMuteState(f.participant);
              b != null && _.set(f.participant.toString(), b);
            }
            f.outcome ===
            o("WAWebVoipWaCallEnums").CallParticipantState.Connected
              ? (c.push(f.participant),
                m.push(f.participant.toLogString()),
                s.has(f.participant.toString()) ||
                  (i.setPeerReconnectingState(
                    f.participant,
                    !1,
                    o("WAWebVoipWaCallEnums").ReconnectingOption.Text,
                  ),
                  i.clearRaisedHandForParticipant(f.participant),
                  i.clearReactionForParticipant(f.participant),
                  i.setScreenShareState(
                    f.participant,
                    o("WAWebVoipWaCallEnums").ScreenShareState.Stopped,
                  )))
              : (f.outcome ===
                  o("WAWebVoipWaCallEnums").CallParticipantState.Terminated ||
                  f.outcome ===
                    o("WAWebVoipWaCallEnums").CallParticipantState.TimedOut ||
                  f.outcome ===
                    o("WAWebVoipWaCallEnums").CallParticipantState.Rejected) &&
                (o(
                  "WAWebVoipVideoRendererRegistry",
                ).videoRendererRegistry.removeParticipantAVSync(
                  f.participant.toString(),
                ),
                i.setPeerReconnectingState(
                  f.participant,
                  !1,
                  o("WAWebVoipWaCallEnums").ReconnectingOption.Text,
                ));
          }
          ((i.groupCallParticipants = u),
            (i.groupCallParticipantsConnected = c),
            (i.groupCallParticipantStates = d),
            i.setGroupParticipantMediaStates(p, _),
            q(l, u, d),
            o("WALogger").LOG(
              R ||
                (R = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: Group call connected participants: ",
                  "",
                ])),
              m.join(", "),
            ),
            i.trigger(
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
            L ||
              (L = babelHelpers.taggedTemplateLiteralLoose([
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
      showMicrophoneSilenceToast: o("WAWebVoipBridgeMicSilenceToast")
        .showMicrophoneSilenceToastImpl,
      handleRelayBindsFailed: function () {
        (o("WALogger").LOG(
          E ||
            (E = babelHelpers.taggedTemplateLiteralLoose([
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
                W.jsx(o("WAWebToast.react").Toast, {
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
          k ||
            (k = babelHelpers.taggedTemplateLiteralLoose([
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
          I ||
            (I = babelHelpers.taggedTemplateLiteralLoose([
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
              T ||
                (T = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: handleCallEndingForSurvey - stored callLogResult: ",
                  " on lastActiveCall",
                ])),
              e,
            ),
            V(i, e)),
          o("WAWebVoipCallSurveyState").shouldShowSurveyBasedOnInterval(a) &&
            (o("WALogger").LOG(
              D ||
                (D = babelHelpers.taggedTemplateLiteralLoose([
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
            o = t.previousState,
            a = t.shouldSendNoNetworkBanner,
            i = t.shouldSendPoorBanner;
          e.setNetHealth(t);
        }
      },
      handleCallLinkStateChanged: function (t) {
        if (t.callLinkState === o("WAWebVoipWaCallEnums").CallLinkState.None) {
          o("WALogger").LOG(
            x ||
              (x = babelHelpers.taggedTemplateLiteralLoose([
                "voip: Call link state is None, clearing active call",
              ])),
          );
          var e = r("WAWebCallCollection").activeCall;
          e != null &&
            e.isCallLink &&
            (o(
              "WAWebInCallWaitingRoomNotificationHelper",
            ).closeInCallWaitingRoomNotification(e.id),
            r("WAWebCallCollection").setActiveCall(null));
          return;
        }
        r("WAWebEnvironment").isWindows ||
          o("WAWebVoipUiManager").setupVoipActiveCallChangeListener();
        var n = r("WAWebCallCollection").activeCall;
        if (n == null) {
          var a;
          o("WALogger").LOG(
            $ ||
              ($ = babelHelpers.taggedTemplateLiteralLoose([
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
            P ||
              (P = babelHelpers.taggedTemplateLiteralLoose([
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
        (o("WALogger").LOG(
          N ||
            (N = babelHelpers.taggedTemplateLiteralLoose([
              "voip: handleWaitingRoomDenied",
            ])),
        ),
          o("WAWebToastManager").ToastManager.open(
            W.jsx(o("WAWebToast.react").Toast, {
              msg: s._(
                /*BTDS*/ "Your request to join the call was not approved.",
              ),
            }),
          ));
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
          M ||
            (M = babelHelpers.taggedTemplateLiteralLoose([
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
          w ||
            (w = babelHelpers.taggedTemplateLiteralLoose([
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
          ),
          n &&
            o(
              "WAWebInCallWaitingRoomNotificationHelper",
            ).maybeShowOrCloseInCallWaitingRoomNotification({
              callId: s.id,
              waitingRoomUsers: i,
              waitingRoomUsersCount: l,
            }));
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
          A ||
            (A = babelHelpers.taggedTemplateLiteralLoose([
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
          F ||
            (F = babelHelpers.taggedTemplateLiteralLoose([
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
      consumeAVSyncMetrics: function () {
        return o(
          "WAWebVoipVideoRendererRegistry",
        ).videoRendererRegistry.consumeAVSyncMetrics();
      },
      peekPerParticipantAVSyncMetrics: function (t) {
        var e = t.jid;
        return o(
          "WAWebVoipVideoRendererRegistry",
        ).videoRendererRegistry.peekPerParticipantAVSyncMetrics(e);
      },
      consumeAudioPlaybackMetrics: function () {
        return o(
          "WAWebVoipAudioCaptureAndPlayback",
        ).consumeAudioPlaybackMetrics();
      },
      consumeWebCodecsFatalErrorCount: function () {
        return o(
          "WAWebVoipVideoRendererRegistry",
        ).videoRendererRegistry.consumeWebCodecsFatalErrorCount();
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
    ((l.MICROPHONE_SILENCE_TOAST_ID = o(
      "WAWebVoipBridgeMicSilenceToast",
    ).MICROPHONE_SILENCE_TOAST_ID),
      (l.VoipWebBridgeApi = H));
  },
  226,
);
