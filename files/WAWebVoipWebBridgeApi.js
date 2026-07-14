__d(
  "WAWebVoipWebBridgeApi",
  [
    "fbt",
    "Promise",
    "WALogger",
    "WATimeUtils",
    "WAWebAvUpgradeBannerState",
    "WAWebCallAcceptedElsewhereNotificationDeferral",
    "WAWebCallCollection",
    "WAWebCallLogUtils",
    "WAWebCallModel",
    "WAWebChatCollection",
    "WAWebContactCollection",
    "WAWebContactExternalUserState",
    "WAWebEnvironment",
    "WAWebFrontendContactGetters",
    "WAWebGroupMetadataCollection",
    "WAWebInCallWaitingRoomNotificationHelper",
    "WAWebIncomingOfferNoticeVoipHandlerAction",
    "WAWebModalManager",
    "WAWebMsgGetters",
    "WAWebNotificationBackend",
    "WAWebNotificationsCallNotification",
    "WAWebNotificationsMissedCallTracker",
    "WAWebParticipantListUtils",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebUnifiedSession",
    "WAWebUserPrefsMeUser",
    "WAWebUsernameTypes",
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
    "WAWebVoipActionWriteCallLogPlaceholder",
    "WAWebVoipActivityTracker",
    "WAWebVoipAnrTracker",
    "WAWebVoipAudioCaptureAndPlayback",
    "WAWebVoipBridgeMediaStreamHelpers",
    "WAWebVoipBridgeMicSilenceToast",
    "WAWebVoipCallStateUtils",
    "WAWebVoipCallSurveyState",
    "WAWebVoipCameraPrewarm",
    "WAWebVoipCrashContext",
    "WAWebVoipEventConstants",
    "WAWebVoipGatingUtils",
    "WAWebVoipLinkPreviewCallLink",
    "WAWebVoipNackHandlers",
    "WAWebVoipOngoingCallCollection",
    "WAWebVoipRelayAllCallsAction",
    "WAWebVoipScreenShareUpdateAppModal.react",
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
    "getErrorSafe",
    "isEmptyObject",
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
      V,
      H = V || (V = o("react"));
    function G(e, t, n) {
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
    function z(t, n) {
      var a = s._(/*BTDS*/ "Group call").toString();
      try {
        if (t != null) {
          var i = r("WAWebGroupMetadataCollection").get(t);
          if ((i == null ? void 0 : i.subject) != null && i.subject !== "")
            return i.subject;
        }
        if (n.length === 0) return a;
        var l = o("WAWebCallLogUtils").sortParticipantWidsByPriority(n);
        return o(
          "WAWebParticipantListUtils",
        ).formatParticipantWidsPreserveOrder(l, !0);
      } catch (t) {
        return (
          o("WALogger")
            .ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: computeGroupCallTitle failed, using fallback title",
                ])),
            )
            .catching(r("getErrorSafe")(t))
            .sendLogs("voip-compute-group-call-title-failed"),
          a
        );
      }
    }
    function j(e, t) {
      if (
        t === o("WAWebVoipWaCallEnums").CallLogResult.AcceptedElsewhere &&
        e.isGroup &&
        o("WAWebVoipGatingUtils").isDeviceSwitchingEnabled() &&
        o("WAWebVoipGatingUtils").isCallTransferNotificationEnabled()
      ) {
        var n = e.id;
        if (n != null) {
          var r,
            a = (r = e.groupCallParticipants) != null ? r : [],
            i = z(e.groupJid, a),
            l = {
              callId: n,
              groupJid: e.groupJid,
              isVideo: e.isVideo,
              onJoinCall: function () {
                o("WAWebVoipStartCall").joinOngoingCallByCallId(n);
              },
              participantWids: a,
              title: i,
            };
          (o("WALogger").LOG(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "voip: routing call-accepted-elsewhere notification for group call ",
                " through foreground deferral",
              ])),
            n,
          ),
            o(
              "WAWebCallAcceptedElsewhereNotificationDeferral",
            ).deferCallAcceptedElsewhereNotificationUntilForeground(l));
        }
      }
    }
    var K = {
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
          r("WAWebIncomingOfferNoticeVoipHandlerAction")({
            callCreator: u,
            callId: a,
            isGroup: i,
            isVideo: l,
            offerTime: s,
          }));
      },
      initializeVoipWasm: function () {
        if (r("WAWebEnvironment").isWindows) {
          o("WALogger").LOG(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "voip: WASM load skipped on Windows Hybrid",
              ])),
          );
          var e = function () {
              return 0;
            },
            t = new Proxy(
              {},
              {
                get: function (n, r) {
                  if (!(r === "then" || r === "catch" || r === "finally"))
                    return e;
                },
              },
            );
          return (U || (U = n("Promise"))).resolve(t);
        }
        if (!o("WAWebVoipGatingUtils").isVoipDownloadEnabled())
          throw r("err")(
            "VoipWebBridgeApi: VoipWebWasm should not be loaded - voip download is not enabled",
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
      writeCallOfferPlaceholder: function (t) {
        return o(
          "WAWebVoipActionWriteCallLogPlaceholder",
        ).writeCallOfferPlaceholder(t);
      },
      showVoiceChatWaveNotification: function (t) {
        o("WAWebNotificationBackend")
          .showVoiceChatWaveNotification(
            babelHelpers.extends({}, t, {
              onJoinCall: function () {
                o("WAWebVoipStartCall")
                  .joinOngoingCallByCallId(t.callId)
                  .catch(function (e) {
                    o("WALogger")
                      .ERROR(
                        d ||
                          (d = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: failed to join ongoing call from wave notification",
                          ])),
                      )
                      .catching(r("getErrorSafe")(e))
                      .sendLogs("voip-wave-join-call-failed");
                  });
              },
            }),
          )
          .catch(function (e) {
            o("WALogger")
              .ERROR(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: failed to show voice chat wave notification",
                  ])),
              )
              .catching(r("getErrorSafe")(e))
              .sendLogs("voip-wave-notification-failed");
          });
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
                p ||
                  (p = babelHelpers.taggedTemplateLiteralLoose([
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
                  _ ||
                    (_ = babelHelpers.taggedTemplateLiteralLoose([
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
                f ||
                  (f = babelHelpers.taggedTemplateLiteralLoose([
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
              g ||
                (g = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: Ignoring terminal setCallState with no active call",
                ])),
            );
            return;
          }
          if (r("WAWebCallCollection").activeCall == null) {
            (o("WALogger").LOG(
              h ||
                (h = babelHelpers.taggedTemplateLiteralLoose([
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
              var m = o(
                "WAWebVoipOngoingCallCollection",
              ).WAWebVoipOngoingCallCollection.getByCallId(n.callId);
              if (m != null && o("WAWebMsgGetters").getIsCallLink(m) === !0) {
                var p = o("WAWebMsgGetters").getSender(m);
                (p == null &&
                  o("WALogger").LOG(
                    y ||
                      (y = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: setCallState: joinable call-link Msg for ",
                        " has no sender, callLinkCreatorJid stays null",
                      ])),
                    n.callId,
                  ),
                  (i.callLinkCreatorJid = p));
              } else
                o("WALogger").LOG(
                  C ||
                    (C = babelHelpers.taggedTemplateLiteralLoose([
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
          var _ = r("WAWebCallCollection").activeCall,
            f = n.linkToken != null && n.linkToken !== "",
            L = n.peerJid;
          if (_ != null && f) {
            if (
              (_.isCallLink ||
                ((_.isCallLink = !0),
                (_.callLinkToken = n.linkToken),
                _.trigger(
                  o("WAWebVoipEventConstants").getChangeEvent(
                    o("WAWebVoipEventConstants").VoipCallModelEvents
                      .CALL_LINK_STATE,
                  ),
                )),
              n.callId != null &&
                _.id !== n.callId &&
                _.id === n.linkToken &&
                (o("WALogger").LOG(
                  b ||
                    (b = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: Updating call.id from linkToken to actual callId: ",
                      "",
                    ])),
                  n.callId,
                ),
                (_.id = n.callId),
                _.trigger("change:id")),
              L != null)
            ) {
              var E = _.peerJid == null || _.peerJid.toJid() !== L.toJid();
              E &&
                (o("WALogger").LOG(
                  v ||
                    (v = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: Updating peerJid for call link: ",
                      "",
                    ])),
                  L.toJid(),
                ),
                (_.peerJid = L),
                _.trigger(
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
                var I = _.callLinkCreatorJid;
                ((_.callLinkCreatorJid = k.jid),
                  (I == null || I.toJid() !== k.jid.toJid()) &&
                    _.trigger(
                      o("WAWebVoipEventConstants").getChangeEvent(
                        o("WAWebVoipEventConstants").VoipCallModelEvents
                          .CALL_LINK_CREATOR_JID,
                      ),
                    ));
              }
            }
          }
          (_ != null &&
            ((_.isWaitingRoomEnabled = n.isWaitingRoomEnabled),
            (_.isWaitingRoomAdmin = n.isWaitingRoomAdmin),
            (_.waitingRoomFilter = n.waitingRoomFilter),
            (_.isInWaitingRoom = n.isInWaitingRoom),
            (_.waitingRoomUsers = n.waitingRoomUsers),
            (_.waitingRoomUsersCount = n.waitingRoomUsersCount),
            (_.isDualStreamSsEnabled = n.isDualStreamSsEnabled),
            _.trigger(
              o("WAWebVoipEventConstants").getChangeEvent(
                o("WAWebVoipEventConstants").VoipCallModelEvents
                  .WAITING_ROOM_STATE,
              ),
            )),
            _ != null &&
              n.callId != null &&
              _.id !== n.callId &&
              o("WAWebVoipCallStateUtils").isCallActive(a) &&
              o("WAWebVoipCallStateUtils").isCallOutgoing(_.getState()) &&
              (o("WALogger").LOG(
                S ||
                  (S = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: Updating call.id during auto-connect: ",
                    "",
                  ])),
                n.callId,
              ),
              (_.id = n.callId),
              (_.outgoing = n.isCaller),
              _.trigger("change:id")));
          var T =
            ((t = r("WAWebCallCollection").activeCall) == null
              ? void 0
              : t.id) === n.callId;
          if (T) {
            var D;
            (o("WALogger").LOG(
              R ||
                (R = babelHelpers.taggedTemplateLiteralLoose([
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
              L ||
                (L = babelHelpers.taggedTemplateLiteralLoose([
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
      getVoipCameraPermissionState: (function () {
        var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          return o("WAWebVoipAcquireMediaStream").queryCameraPermissionStrict();
        });
        function t() {
          return e.apply(this, arguments);
        }
        return t;
      })(),
      handleMuteStateChange: function (t) {
        var e = t.callInfo;
        o("WALogger").LOG(
          E ||
            (E = babelHelpers.taggedTemplateLiteralLoose([
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
              k ||
                (k = babelHelpers.taggedTemplateLiteralLoose([
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
            G(l, u, d),
            o("WALogger").LOG(
              I ||
                (I = babelHelpers.taggedTemplateLiteralLoose([
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
      hydrateGuestParticipantContacts: function (t) {
        var e = t.participants;
        e.forEach(function (e) {
          var t = e.isGuestUser,
            n = e.jid,
            a = e.pushName,
            i = e.username;
          if (
            !(
              o("WAWebUserPrefsMeUser").isMeAccount(n) ||
              n.isBot() ||
              !n.isUser()
            )
          ) {
            var l = {};
            a != null && a !== "" && (l.pushname = a);
            var s =
              i != null && i !== ""
                ? o("WAWebUsernameTypes").asMaybeUsername(i)
                : null;
            (s != null && (l.username = s),
              t &&
                (l.externalUserState = o(
                  "WAWebContactExternalUserState",
                ).ExternalUserState.GuestUser),
              !r("isEmptyObject")(l) &&
                o("WAWebContactCollection")
                  .ContactCollection.gadd(
                    o("WAWebWidFactory").asUserWidOrThrow(n),
                  )
                  .set(l));
          }
        });
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
            T ||
              (T = babelHelpers.taggedTemplateLiteralLoose([
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
          D ||
            (D = babelHelpers.taggedTemplateLiteralLoose([
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
                H.jsx(o("WAWebToast.react").Toast, {
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
                H.jsx(r("WAWebVoipScreenShareUpdateAppModal.react"), {}),
              ));
        }
      },
      handleCallEndingForSurvey: function (t) {
        var e = t.callLogResult,
          n = t.connectTime,
          a = t.userRatingInterval;
        o("WALogger").LOG(
          x ||
            (x = babelHelpers.taggedTemplateLiteralLoose([
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
          $ ||
            ($ = babelHelpers.taggedTemplateLiteralLoose([
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
              P ||
                (P = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: handleCallEndingForSurvey - stored callLogResult: ",
                  " on lastActiveCall",
                ])),
              e,
            ),
            j(i, e)),
          e === o("WAWebVoipWaCallEnums").CallLogResult.Missed &&
            document.hidden &&
            o("WAWebNotificationsMissedCallTracker").markCallMissedWhileHidden(
              o("WATimeUtils").unixTime(),
            ),
          o("WAWebVoipCallSurveyState").shouldShowSurveyBasedOnInterval(a) &&
            (o("WALogger").LOG(
              N ||
                (N = babelHelpers.taggedTemplateLiteralLoose([
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
            M ||
              (M = babelHelpers.taggedTemplateLiteralLoose([
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
            w ||
              (w = babelHelpers.taggedTemplateLiteralLoose([
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
            (i.selfVideoState = o(
              "WAWebVoipVideoStateUtils",
            ).getInitialCallLinkSelfVideoState(t.videoEnabled, t.videoMuted)),
            r("WAWebCallCollection").setActiveCall(i),
            (n = i));
        } else {
          var l;
          (o("WALogger").LOG(
            A ||
              (A = babelHelpers.taggedTemplateLiteralLoose([
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
          F ||
            (F = babelHelpers.taggedTemplateLiteralLoose([
              "voip: handleWaitingRoomDenied",
            ])),
        ),
          o("WAWebToastManager").ToastManager.open(
            H.jsx(o("WAWebToast.react").Toast, {
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
          O ||
            (O = babelHelpers.taggedTemplateLiteralLoose([
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
          i = t.waitingRoomFilter,
          l = t.waitingRoomUsers,
          s = t.waitingRoomUsersCount;
        o("WALogger").LOG(
          B ||
            (B = babelHelpers.taggedTemplateLiteralLoose([
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
          W ||
            (W = babelHelpers.taggedTemplateLiteralLoose([
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
          q ||
            (q = babelHelpers.taggedTemplateLiteralLoose([
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
      showUserRemovedDialog: function (t) {
        var e = t.removerJid;
        o("WAWebVoipNackHandlers").showUserRemovedDialog(e);
      },
      showParticipantRemovedToast: function (t) {
        var e = t.removeeJid;
        o("WAWebVoipNackHandlers").showParticipantRemovedToast(e);
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
        (o("WAWebVoipCrashContext").ensureVoipCrashContextRegistered(),
          o("WAWebVoipAnrTracker").startAnrTracking());
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
      getUnifiedSessionId: function () {
        return o("WAWebUnifiedSession").UnifiedSessionManager.getSessionId();
      },
    };
    ((l.MICROPHONE_SILENCE_TOAST_ID = o(
      "WAWebVoipBridgeMicSilenceToast",
    ).MICROPHONE_SILENCE_TOAST_ID),
      (l.VoipWebBridgeApi = K));
  },
  226,
);
