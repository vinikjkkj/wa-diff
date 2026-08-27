__d(
  "WAWebVoipBridgeCallStateHandlers",
  [
    "fbt",
    "WALogger",
    "WAWebAvUpgradeBannerState",
    "WAWebCallCollection",
    "WAWebCallModel",
    "WAWebEnvironment",
    "WAWebInCallWaitingRoomNotificationHelper",
    "WAWebModalManager",
    "WAWebMsgGetters",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebUserPrefsMeUser",
    "WAWebVoipActionWriteCallLogCallStateChanged",
    "WAWebVoipActivityTracker",
    "WAWebVoipBridgeMicSilenceToast",
    "WAWebVoipCallStateUtils",
    "WAWebVoipEventConstants",
    "WAWebVoipGatingUtils",
    "WAWebVoipOngoingCallCollection",
    "WAWebVoipPermissionCheckCaptureRegistry",
    "WAWebVoipScreenShareUpdateAppModal.react",
    "WAWebVoipUiManager",
    "WAWebVoipUiPopoutWindowPortalContainer.react",
    "WAWebVoipVideoRendererRegistry",
    "WAWebVoipVideoStateUtils",
    "WAWebVoipWaCallEnums",
    "asyncToGeneratorRuntime",
    "justknobx",
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
      P = $ || ($ = o("react"));
    function N(e, t, n) {
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
    var M = {
      setCallState: (function () {
        var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n,
            a = t.callInfo,
            i = t.callState;
          if (
            (o("WAWebVoipCallStateUtils").isCallTerminal(i) &&
              w(a.callId, a.linkToken, r("WAWebCallCollection").activeCall),
            (!r("WAWebEnvironment").isWindows ||
              o("WAWebVoipGatingUtils").isWinHybridPlusEnabled()) &&
              o("WAWebVoipUiManager").setupVoipActiveCallChangeListener(),
            r("WAWebCallCollection").activeCall == null &&
              o("WAWebVoipCallStateUtils").isCallTerminal(i))
          ) {
            o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: Ignoring terminal setCallState with no active call",
                ])),
            );
            return;
          }
          if (r("WAWebCallCollection").activeCall == null) {
            (o("WALogger").LOG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: Creating new call model for call state",
                ])),
            ),
              a.isCaller ||
                o("WAWebVoipActivityTracker").trackActivity(
                  o("WAWebVoipActivityTracker").VoipActivity
                    .INCOMING_CALL_MODEL_CREATING,
                ));
            var l = new (r("WAWebCallModel"))();
            if (
              ((l.id = a.callId),
              (l.peerJid = a.peerJid),
              (l.isVideo = a.videoEnabled),
              (l.isGroup = a.isGroupCall),
              (l.groupJid = a.groupJid),
              (l.outgoing = a.isCaller),
              (l.isBotGroupCall = a.isBotGroupCall),
              a.isGroupCall && a.participants)
            ) {
              var s = [],
                h = [],
                y = new Map();
              for (var C of a.participants)
                (s.push(C.jid),
                  y.set(C.jid.toString(), C.state),
                  C.state ===
                    o("WAWebVoipWaCallEnums").CallParticipantState.Connected &&
                    h.push(C.jid));
              ((l.groupCallParticipants = s),
                (l.groupCallParticipantsConnected = h),
                (l.groupCallParticipantStates = y));
            }
            a.videoEnabled
              ? ((l.selfVideoState = o(
                  "WAWebVoipWaCallEnums",
                ).VideoState.Enabled),
                (l.peerVideoState = o(
                  "WAWebVoipWaCallEnums",
                ).VideoState.Enabled))
              : ((l.selfVideoState = o(
                  "WAWebVoipWaCallEnums",
                ).VideoState.Disabled),
                (l.peerVideoState = o(
                  "WAWebVoipWaCallEnums",
                ).VideoState.Disabled));
            var b = a.linkToken != null && a.linkToken !== "";
            if (b) {
              ((l.isCallLink = !0), (l.callLinkToken = a.linkToken));
              var v = o(
                "WAWebVoipOngoingCallCollection",
              ).WAWebVoipOngoingCallCollection.getByCallId(a.callId);
              if (v != null && o("WAWebMsgGetters").getIsCallLink(v) === !0) {
                var S = o("WAWebMsgGetters").getSender(v);
                (S == null &&
                  o("WALogger").LOG(
                    c ||
                      (c = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: setCallState: joinable call-link Msg for ",
                        " has no sender, callLinkCreatorJid stays null",
                      ])),
                    a.callId,
                  ),
                  (l.callLinkCreatorJid = S));
              } else
                o("WALogger").LOG(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: setCallState: no joinable call-link Msg for ",
                      "",
                    ])),
                  a.callId,
                );
            }
            (r("WAWebCallCollection").setActiveCall(l),
              b &&
                l.callLinkCreatorJid != null &&
                l.trigger(
                  o("WAWebVoipEventConstants").getChangeEvent(
                    o("WAWebVoipEventConstants").VoipCallModelEvents
                      .CALL_LINK_CREATOR_JID,
                  ),
                ));
          }
          r("WAWebCallCollection").activeCall != null &&
            a.isGroupCall &&
            !r("WAWebCallCollection").activeCall.isGroup &&
            ((r("WAWebCallCollection").activeCall.isGroup = a.isGroupCall),
            r("WAWebCallCollection").activeCall.trigger(
              o("WAWebVoipEventConstants").getChangeEvent(
                o("WAWebVoipEventConstants").VoipCallModelEvents.IS_GROUP,
              ),
            ));
          var R = r("WAWebCallCollection").activeCall,
            L = a.linkToken != null && a.linkToken !== "",
            E = a.peerJid,
            k = (R == null ? void 0 : R.id) === a.callId,
            I =
              !o("WAWebVoipCallStateUtils").isCallTerminal(i) &&
              (R == null ? void 0 : R.id) === a.linkToken;
          if (R != null && L && (k || I)) {
            if (
              (R.isCallLink ||
                ((R.isCallLink = !0),
                (R.callLinkToken = a.linkToken),
                R.trigger(
                  o("WAWebVoipEventConstants").getChangeEvent(
                    o("WAWebVoipEventConstants").VoipCallModelEvents
                      .CALL_LINK_STATE,
                  ),
                )),
              a.callId != null &&
                R.id !== a.callId &&
                R.id === a.linkToken &&
                (o("WALogger").LOG(
                  m ||
                    (m = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: Updating call.id from linkToken to actual callId: ",
                      "",
                    ])),
                  a.callId,
                ),
                (R.id = a.callId),
                R.trigger("change:id")),
              E != null)
            ) {
              var T = R.peerJid == null || R.peerJid.toJid() !== E.toJid();
              T &&
                (o("WALogger").LOG(
                  p ||
                    (p = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: Updating peerJid for call link: ",
                      "",
                    ])),
                  E.toJid(),
                ),
                (R.peerJid = E),
                R.trigger(
                  o("WAWebVoipEventConstants").getChangeEvent(
                    o("WAWebVoipEventConstants").VoipCallModelEvents.PEER_JID,
                  ),
                ));
            }
            if (a.participants) {
              var D = a.participants.find(function (e) {
                return (
                  e.userType === o("WAWebVoipWaCallEnums").CallUserType.Admin
                );
              });
              if (D != null) {
                var x = R.callLinkCreatorJid;
                ((R.callLinkCreatorJid = D.jid),
                  (x == null || x.toJid() !== D.jid.toJid()) &&
                    R.trigger(
                      o("WAWebVoipEventConstants").getChangeEvent(
                        o("WAWebVoipEventConstants").VoipCallModelEvents
                          .CALL_LINK_CREATOR_JID,
                      ),
                    ));
              }
            }
          }
          R != null &&
            a.callId != null &&
            R.id !== a.callId &&
            o("WAWebVoipCallStateUtils").isCallActive(i) &&
            o("WAWebVoipCallStateUtils").isCallOutgoing(R.getState()) &&
            (o("WALogger").LOG(
              _ ||
                (_ = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: Updating call.id during auto-connect: ",
                  "",
                ])),
              a.callId,
            ),
            (R.id = a.callId),
            (R.outgoing = a.isCaller),
            R.trigger("change:id"));
          var $ =
            ((n = r("WAWebCallCollection").activeCall) == null
              ? void 0
              : n.id) === a.callId;
          if ($ && R != null)
            ((R.isWaitingRoomEnabled = a.isWaitingRoomEnabled),
              (R.isWaitingRoomAdmin = a.isWaitingRoomAdmin),
              (R.waitingRoomFilter = a.waitingRoomFilter),
              (R.isInWaitingRoom = a.isInWaitingRoom),
              (R.waitingRoomUsers = a.waitingRoomUsers),
              (R.waitingRoomUsersCount = a.waitingRoomUsersCount),
              (R.isDualStreamSsEnabled = a.isDualStreamSsEnabled),
              R.trigger(
                o("WAWebVoipEventConstants").getChangeEvent(
                  o("WAWebVoipEventConstants").VoipCallModelEvents
                    .WAITING_ROOM_STATE,
                ),
              ),
              o("WALogger").LOG(
                f ||
                  (f = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: Setting call state to ",
                    "",
                  ])),
                i,
              ),
              R.setState(i),
              r("WAWebCallCollection").setIsInConnectedCall(
                o("WAWebVoipCallStateUtils").isCallConnected(i),
              ));
          else if (!o("WAWebVoipCallStateUtils").isCallTerminal(i)) {
            var P;
            o("WALogger").WARN(
              g ||
                (g = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: Dropped non-terminal state update ",
                  " (activeCall.id=",
                  " !== callInfo.callId=",
                  ")",
                ])),
              i,
              String(
                (P = r("WAWebCallCollection").activeCall) == null
                  ? void 0
                  : P.id,
              ),
              String(a.callId),
            );
          }
          if (
            (o("WAWebVoipCallStateUtils").isCallTerminal(i) &&
              $ &&
              (o(
                "WAWebInCallWaitingRoomNotificationHelper",
              ).closeInCallWaitingRoomNotification(a.callId),
              r("WAWebCallCollection").setActiveCall(null),
              r("WAWebCallCollection").setIsInConnectedCall(!1)),
            !o("WAWebVoipGatingUtils").isGuestViewer())
          ) {
            a.isCaller ||
              o("WAWebVoipActivityTracker").trackActivity(
                o("WAWebVoipActivityTracker").VoipActivity
                  .INCOMING_CALL_MSG_GENERATING,
              );
            var N = yield o(
                "WAWebVoipActionWriteCallLogCallStateChanged",
              ).generateCallLogFromCallStateChangedEvent(a),
              M = r("WAWebCallCollection").activeCall;
            N != null &&
              M != null &&
              M.id === a.callId &&
              (a.isCaller ||
                o("WAWebVoipActivityTracker").trackActivity(
                  o("WAWebVoipActivityTracker").VoipActivity
                    .INCOMING_CALL_MSG_READY,
                ),
              (M.msg = N),
              M.trigger(
                o("WAWebVoipEventConstants").getChangeEvent(
                  o("WAWebVoipEventConstants").VoipCallModelEvents.MSG,
                ),
              ));
          }
        });
        function a(e) {
          return t.apply(this, arguments);
        }
        return a;
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
              h ||
                (h = babelHelpers.taggedTemplateLiteralLoose([
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
      handleMuteStateChange: function (t) {
        var e = t.callInfo;
        o("WALogger").LOG(
          y ||
            (y = babelHelpers.taggedTemplateLiteralLoose([
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
              C ||
                (C = babelHelpers.taggedTemplateLiteralLoose([
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
              var v = i.getParticipantMuteState(f.participant);
              v != null && _.set(f.participant.toString(), v);
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
            N(l, u, d),
            o("WALogger").LOG(
              b ||
                (b = babelHelpers.taggedTemplateLiteralLoose([
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
            v ||
              (v = babelHelpers.taggedTemplateLiteralLoose([
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
          S ||
            (S = babelHelpers.taggedTemplateLiteralLoose([
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
          e.setScreenShareState(
            t.sharer_jid,
            t.state,
            t.sharer_version != null ? Number(t.sharer_version) : void 0,
          );
          var n = o("WAWebUserPrefsMeUser").isMeAccount(t.sharer_jid);
          (n &&
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
                P.jsx(o("WAWebToast.react").Toast, {
                  msg: s._(
                    /*BTDS*/ "Another participant is already sharing their screen",
                  ),
                  duration: 5e3,
                }),
              ))),
            !n &&
              t.state === o("WAWebVoipWaCallEnums").ScreenShareState.Stopped &&
              t.reason ===
                o("WAWebVoipWaCallEnums").ScreenShareEndReason.NotSupported &&
              Number(t.sharer_version) >=
                Number(o("WAWebVoipWaCallEnums").ScreenShareVersion.Version3) &&
              o(
                "WAWebVoipGatingUtils",
              ).isScreenShareDualStreamAppUpdateDialogEnabled() &&
              e.tryMarkScreenShareUpdateAppModalShown() &&
              o("WAWebModalManager").ModalManager.open(
                P.jsx(r("WAWebVoipScreenShareUpdateAppModal.react"), {}),
              ));
        }
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
          var e = r("WAWebCallCollection").activeCall;
          w(t.linkToken, null, e);
          var n = A(e, t.linkToken);
          n != null &&
            (o("WALogger").LOG(
              R ||
                (R = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: Call link state is None, clearing active call",
                ])),
            ),
            o(
              "WAWebInCallWaitingRoomNotificationHelper",
            ).closeInCallWaitingRoomNotification(n.id),
            r("WAWebCallCollection").setActiveCall(null));
          return;
        }
        (!r("WAWebEnvironment").isWindows ||
          o("WAWebVoipGatingUtils").isWinHybridPlusEnabled()) &&
          o("WAWebVoipUiManager").setupVoipActiveCallChangeListener();
        var a = r("WAWebCallCollection").activeCall;
        if (a == null) {
          var i;
          o("WALogger").LOG(
            L ||
              (L = babelHelpers.taggedTemplateLiteralLoose([
                "voip: Creating new call model for call link",
              ])),
          );
          var l = new (r("WAWebCallModel"))();
          ((l.id = t.linkToken),
            (l.isCallLink = !0),
            (l.callLinkState = t.callLinkState),
            (l.callLinkToken = t.linkToken),
            (l.callLinkCreatorJid =
              (i = t.creatorJid) != null ? i : t.self.jid),
            (l.callLinkVideoEnabled = t.videoEnabled),
            (l.isEventLink = t.isEventLink),
            (l.isVideo = t.videoEnabled),
            (l.outgoing = !0),
            (l.selfVideoState = o(
              "WAWebVoipVideoStateUtils",
            ).getInitialCallLinkSelfVideoState(t.videoEnabled, t.videoMuted)),
            r("WAWebCallCollection").setActiveCall(l),
            (a = l));
        } else {
          var s;
          (o("WALogger").LOG(
            E ||
              (E = babelHelpers.taggedTemplateLiteralLoose([
                "voip: Updating existing call with call link state ",
                "",
              ])),
            t.callLinkState,
          ),
            (a.isCallLink = !0),
            (a.callLinkState = t.callLinkState),
            (a.callLinkToken = t.linkToken),
            (a.callLinkCreatorJid =
              (s = t.creatorJid) != null ? s : t.self.jid),
            (a.callLinkVideoEnabled = t.videoEnabled),
            (a.isEventLink = t.isEventLink));
        }
        (a.trigger(
          o("WAWebVoipEventConstants").getChangeEvent(
            o("WAWebVoipEventConstants").VoipCallModelEvents
              .CALL_LINK_CREATOR_JID,
          ),
        ),
          a.trigger(
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
          k ||
            (k = babelHelpers.taggedTemplateLiteralLoose([
              "voip: handleWaitingRoomDenied",
            ])),
        ),
          o("WAWebToastManager").ToastManager.open(
            P.jsx(o("WAWebToast.react").Toast, {
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
        var e = t.isInWaitingRoom,
          n = t.isWaitingRoomAdmin,
          a = t.isWaitingRoomEnabled,
          i = t.waitingRoomFilter;
        o("WALogger").LOG(
          I ||
            (I = babelHelpers.taggedTemplateLiteralLoose([
              "voip: handleIsInWaitingRoomChanged: inWR=",
              ", enabled=",
              ", admin=",
              "",
            ])),
          e,
          a,
          n,
        );
        var l = r("WAWebCallCollection").activeCall;
        l != null &&
          ((l.isInWaitingRoom = e),
          (l.isWaitingRoomEnabled = a),
          (l.isWaitingRoomAdmin = n),
          (l.waitingRoomFilter = i),
          l.trigger(
            o("WAWebVoipEventConstants").getChangeEvent(
              o("WAWebVoipEventConstants").VoipCallModelEvents
                .IS_IN_WAITING_ROOM,
            ),
          ),
          l.trigger(
            o("WAWebVoipEventConstants").getChangeEvent(
              o("WAWebVoipEventConstants").VoipCallModelEvents
                .WAITING_ROOM_STATE,
            ),
          ));
      },
      handleWaitingRoomStateChanged: function (t) {
        var e = t.isInWaitingRoom,
          n = t.isWaitingRoomAdmin,
          a = t.isWaitingRoomEnabled,
          i = t.waitingRoomFilter,
          l = t.waitingRoomUsers,
          s = t.waitingRoomUsersCount;
        o("WALogger").LOG(
          T ||
            (T = babelHelpers.taggedTemplateLiteralLoose([
              "voip: handleWaitingRoomStateChanged: enabled=",
              ", admin=",
              ", inWR=",
              ", count=",
              "",
            ])),
          a,
          n,
          e,
          s,
        );
        var u = r("WAWebCallCollection").activeCall;
        u != null &&
          ((u.isWaitingRoomEnabled = a),
          (u.isWaitingRoomAdmin = n),
          (u.waitingRoomFilter = i),
          (u.isInWaitingRoom = e),
          (u.waitingRoomUsers = l),
          (u.waitingRoomUsersCount = s),
          u.trigger(
            o("WAWebVoipEventConstants").getChangeEvent(
              o("WAWebVoipEventConstants").VoipCallModelEvents
                .WAITING_ROOM_STATE,
            ),
          ),
          u.trigger(
            o("WAWebVoipEventConstants").getChangeEvent(
              o("WAWebVoipEventConstants").VoipCallModelEvents
                .IS_IN_WAITING_ROOM,
            ),
          ),
          n &&
            o(
              "WAWebInCallWaitingRoomNotificationHelper",
            ).maybeShowOrCloseInCallWaitingRoomNotification({
              callId: u.id,
              waitingRoomUsers: l,
              waitingRoomUsersCount: s,
            }));
      },
      handleMuteRequestFailed: function () {
        (o("WALogger").LOG(
          D ||
            (D = babelHelpers.taggedTemplateLiteralLoose([
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
      handleVoipSettingsUpdate: function (t) {
        var e = t.callId,
          n = t.isDualStreamSsEnabled,
          a = r("WAWebCallCollection").activeCall;
        a == null ||
          a.id !== e ||
          (a.isDualStreamSsEnabled !== n &&
            (o("WALogger").LOG(
              x ||
                (x = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: isDualStreamSsEnabled ",
                  " -> ",
                  "",
                ])),
              String(a.isDualStreamSsEnabled),
              String(n),
            ),
            (a.isDualStreamSsEnabled = n),
            a.trigger(
              o("WAWebVoipEventConstants").getChangeEvent(
                o("WAWebVoipEventConstants").VoipCallModelEvents
                  .SCREEN_SHARE_STATES,
              ),
            )));
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
    };
    function w(e, t, n) {
      if (r("justknobx")._("5756"))
        for (var a of F(e, t, n))
          o(
            "WAWebVoipPermissionCheckCaptureRegistry",
          ).releasePermissionCheckCaptures(a);
    }
    function A(e, t) {
      return (e == null ? void 0 : e.isCallLink) !== !0
        ? null
        : r("justknobx")._("5756")
          ? e.id === t
            ? e
            : null
          : e;
    }
    function F(e, t, n) {
      var r = n != null && n.id === e ? n : null,
        o = n != null && n.id !== e ? n : null,
        a = new Set();
      return (
        O(a, e, o),
        O(a, t, o),
        O(a, r == null ? void 0 : r.callLinkToken, null),
        a
      );
    }
    function O(e, t, n) {
      t == null ||
        t === "" ||
        (n != null && (n.id === t || n.callLinkToken === t)) ||
        e.add(t);
    }
    l.VoipBridgeCallStateHandlers = M;
  },
  226,
);
