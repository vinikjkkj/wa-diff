__d(
  "WAWebCallModel",
  [
    "WALogger",
    "WAWebABProps",
    "WAWebCallCollection",
    "WAWebCallEndTone",
    "WAWebCallNotificationBus",
    "WAWebEnvironment",
    "WAWebEventEmitter",
    "WAWebNoop",
    "WAWebPttAudioChannels",
    "WAWebUserPrefsMeUser",
    "WAWebVoipCallStateUtils",
    "WAWebVoipEventConstants",
    "WAWebVoipPerfMeasurement",
    "WAWebVoipVideoStateUtils",
    "WAWebVoipWaCallEnums",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = 3,
      u = (function (t) {
        function n(e) {
          var n;
          return (
            (n = t.call(this) || this),
            (n.id = ""),
            (n.peerJid = null),
            (n.offerTime = 0),
            (n.isVideo = !1),
            (n.isGroup = !1),
            (n.groupJid = null),
            (n.groupCallParticipants = null),
            (n.groupCallParticipantsConnected = null),
            (n.groupCallParticipantStates = null),
            (n.groupCallParticipantGridRanks = null),
            (n.outgoing = !1),
            (n.isSilenced = !1),
            (n.offerReceivedWhileOffline = !1),
            (n.isVoiceChat = !1),
            (n.isBotGroupCall = !1),
            (n.silenceReason = null),
            (n.callLinkState = null),
            (n.callLinkToken = null),
            (n.callLinkCreatorJid = null),
            (n.callLinkVideoEnabled = !1),
            (n.isCallLink = !1),
            (n.isEventLink = !1),
            (n.isInWaitingRoom = !1),
            (n.displayWaitingRoomDenied = !1),
            (n.isWaitingRoomAdmin = !1),
            (n.isWaitingRoomEnabled = !1),
            (n.waitingRoomFilter = null),
            (n.isDualStreamSsEnabled = !1),
            (n.waitingRoomUsers = []),
            (n.waitingRoomUsersCount = 0),
            (n.selfVideoState = null),
            (n.peerVideoState = null),
            (n.peerVideoJid = null),
            (n.selfMicMuted = !1),
            (n.peerMicMuted = !1),
            (n.peerAudioLevel = 0),
            (n.selfAudioLevel = 0),
            (n.selfPreviewCorner = null),
            (n.shouldShowPostCallSurvey = !1),
            (n.postCallSurveyInteracted = !1),
            (n.wasEverConnected = !1),
            (n.callLogResult = null),
            (n.userEndedCall = !1),
            (n.callFailedReason = null),
            (n.peerBusy = !1),
            (n.networkOfflineTimer = null),
            (n.$Call$p_1 = null),
            (n.$Call$p_2 = new Map()),
            (n.$Call$p_3 = o("WAWebVoipWaCallEnums").ScreenShareState.Stopped),
            (n.$Call$p_4 = 0),
            (n.$Call$p_5 = new Map()),
            (n.$Call$p_6 = new Map()),
            (n.$Call$p_7 = !1),
            (n.$Call$p_8 = !1),
            (n.$Call$p_9 = null),
            (n.$Call$p_10 = new Map()),
            (n.$Call$p_11 = new Map()),
            (n.$Call$p_12 = new Map()),
            (n.$Call$p_13 = new Map()),
            (n.$Call$p_14 = null),
            e != null && (n.id = e),
            n
          );
        }
        babelHelpers.inheritsLoose(n, t);
        var a = n.prototype;
        return (
          (a.delete = function () {
            this.stopListening();
          }),
          (a.getState = function () {
            return this.$Call$p_1;
          }),
          (a.setState = function (t) {
            var e = this.$Call$p_1;
            if (
              ((this.$Call$p_1 = t),
              this.trigger(
                o("WAWebVoipEventConstants").getChangeEvent(
                  o("WAWebVoipEventConstants").VoipCallModelEvents.STATE,
                ),
              ),
              o("WAWebVoipCallStateUtils").isCallConnected(t) &&
                (this.wasEverConnected = !0),
              this.$Call$p_15(e),
              !r("WAWebEnvironment").isWindows &&
                this.wasEverConnected &&
                !o("WAWebVoipCallStateUtils").isCallTerminal(e) &&
                o("WAWebVoipCallStateUtils").isCallTerminal(t) &&
                o("WAWebCallEndTone").playCallEndTone(),
              o("WAWebVoipPerfMeasurement").onCallStateChange(t, this.outgoing),
              o("WAWebVoipCallStateUtils").isCallTerminal(t))
            ) {
              var n;
              (this.$Call$p_2.clear(),
                this.$Call$p_10.clear(),
                this.$Call$p_11.clear(),
                (this.$Call$p_3 = o(
                  "WAWebVoipWaCallEnums",
                ).ScreenShareState.Stopped),
                (this.$Call$p_4 = 0),
                this.$Call$p_5.clear(),
                this.$Call$p_6.clear(),
                (this.$Call$p_7 = !1),
                (this.$Call$p_8 = !1),
                this.$Call$p_12.clear(),
                this.$Call$p_13.clear(),
                (this.$Call$p_14 = null),
                (this.peerBusy = !1),
                this.trigger(
                  (n = o("WAWebVoipEventConstants")).getChangeEvent(
                    n.VoipCallModelEvents.PEER_RECONNECTING,
                  ),
                ),
                r("WAWebCallCollection").trigger(
                  n.getChangeEvent(n.VoipCallModelEvents.PEER_RECONNECTING),
                ),
                this.trigger(
                  n.getChangeEvent(n.VoipCallModelEvents.REACTION_STATES),
                ),
                this.trigger(
                  n.getChangeEvent(n.VoipCallModelEvents.RAISED_HAND_STATES),
                ),
                this.trigger(
                  n.getChangeEvent(n.VoipCallModelEvents.SCREEN_SHARE_STATES),
                ),
                this.trigger(
                  n.getChangeEvent(n.VoipCallModelEvents.NETWORK_HEALTH),
                ),
                r("WAWebCallCollection").trigger(
                  n.getChangeEvent(n.VoipCallModelEvents.NETWORK_HEALTH),
                ));
            }
          }),
          (a.markPeerBusy = function () {
            ((this.peerBusy = !0),
              this.trigger(
                o("WAWebVoipEventConstants").getChangeEvent(
                  o("WAWebVoipEventConstants").VoipCallModelEvents.STATE,
                ),
              ));
          }),
          (a.hasActiveVideo = function () {
            return (
              !o("WAWebVoipVideoStateUtils").isVideoStateInactiveForCallMode(
                this.selfVideoState,
              ) ||
              !o("WAWebVoipVideoStateUtils").isVideoStateInactiveForCallMode(
                this.peerVideoState,
              )
            );
          }),
          (a.shouldShowVideoUI = function () {
            return this.selfVideoState == null && this.peerVideoState == null
              ? (o("WALogger").WARN(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: shouldShowVideoUI: video states null, fallback",
                    ])),
                ),
                this.isVideo)
              : this.selfVideoState != null && this.peerVideoState == null
                ? this.shouldShowSelfPreview()
                : this.selfVideoState == null && this.peerVideoState != null
                  ? this.shouldShowPeerVideo() ||
                    this.peerVideoState ===
                      o("WAWebVoipWaCallEnums").VideoState.UnknownPeer
                  : this.shouldShowSelfPreview() ||
                    this.shouldShowPeerVideo() ||
                    this.peerVideoState ===
                      o("WAWebVoipWaCallEnums").VideoState.UnknownPeer;
          }),
          (a.shouldShowSelfPreview = function () {
            return this.isVideo
              ? !0
              : o("WAWebVoipVideoStateUtils").isVideoEnabled(
                  this.selfVideoState,
                );
          }),
          (a.shouldShowPeerVideo = function () {
            return this.peerVideoState == null
              ? !1
              : o("WAWebVoipVideoStateUtils").shouldShowVideo(
                  this.peerVideoState,
                );
          }),
          (a.$Call$p_16 = function () {
            return (
              this.callLinkState ===
                o("WAWebVoipWaCallEnums").CallLinkState.JoinSent ||
              this.callLinkState ===
                o("WAWebVoipWaCallEnums").CallLinkState.JoinAcked
            );
          }),
          (a.isInCallLinkPreview = function () {
            if (!this.isCallLink) return !1;
            if (
              this.callLinkState ===
              o("WAWebVoipWaCallEnums").CallLinkState.QueryAcked
            )
              return !0;
            var e = o("WAWebVoipCallStateUtils").isCallConnected(
              this.$Call$p_1,
            );
            return this.$Call$p_16() && !e;
          }),
          (a.isInCallLinkLobby = function () {
            var e =
              this.$Call$p_1 ===
              o("WAWebVoipWaCallEnums").CallState.ConnectedLonely;
            return this.isCallLink && this.$Call$p_16() && e;
          }),
          (a.isConnectingToCallLinkLobby = function () {
            return (
              this.isCallLink &&
              this.$Call$p_16() &&
              !o("WAWebVoipCallStateUtils").isCallConnected(this.$Call$p_1)
            );
          }),
          (a.isWaitingRoomToggleOn = function (t) {
            return o("WAWebVoipWaCallEnums").wireStringToWaitingRoomFilter(
              this.waitingRoomFilter,
            ) === o("WAWebVoipWaCallEnums").WaitingRoomFilter.GuestsOnly && t()
              ? !1
              : this.isWaitingRoomEnabled;
          }),
          (a.setPeerReconnectingState = function (t, n, a) {
            var e = t.toString();
            (n
              ? this.$Call$p_2.set(e, { isReconnecting: n, option: a })
              : this.$Call$p_2.delete(e),
              this.trigger(
                o("WAWebVoipEventConstants").getChangeEvent(
                  o("WAWebVoipEventConstants").VoipCallModelEvents
                    .PEER_RECONNECTING,
                ),
              ),
              r("WAWebCallCollection").trigger(
                o("WAWebVoipEventConstants").getChangeEvent(
                  o("WAWebVoipEventConstants").VoipCallModelEvents
                    .PEER_RECONNECTING,
                ),
              ));
          }),
          (a.getPeerReconnectingState = function (t) {
            return this.$Call$p_2.get(t.toString());
          }),
          (a.setNetHealth = function (t) {
            var e;
            ((this.$Call$p_14 = t),
              this.trigger(
                (e = o("WAWebVoipEventConstants")).getChangeEvent(
                  e.VoipCallModelEvents.NETWORK_HEALTH,
                ),
              ),
              r("WAWebCallCollection").trigger(
                e.getChangeEvent(e.VoipCallModelEvents.NETWORK_HEALTH),
              ));
          }),
          (a.getNetHealth = function () {
            return this.$Call$p_14;
          }),
          (a.setScreenShareState = function (t, n, r) {
            var e =
              n === o("WAWebVoipWaCallEnums").ScreenShareState.Started &&
              r != null &&
              Number.isFinite(r)
                ? r
                : 0;
            (o("WAWebUserPrefsMeUser").isMeAccount(t)
              ? ((this.$Call$p_3 = n),
                (this.$Call$p_4 = e),
                n === o("WAWebVoipWaCallEnums").ScreenShareState.Started &&
                  (this.$Call$p_7 = !1))
              : (this.$Call$p_5.set(t, n),
                e > 0 ? this.$Call$p_6.set(t, e) : this.$Call$p_6.delete(t),
                this.isAnyPeerScreenSharing() || (this.$Call$p_7 = !1)),
              this.trigger(
                o("WAWebVoipEventConstants").getChangeEvent(
                  o("WAWebVoipEventConstants").VoipCallModelEvents
                    .SCREEN_SHARE_STATES,
                ),
              ));
          }),
          (a.setSelfScreenShareRejected = function (t) {
            ((this.$Call$p_7 = t),
              this.trigger(
                o("WAWebVoipEventConstants").getChangeEvent(
                  o("WAWebVoipEventConstants").VoipCallModelEvents
                    .SCREEN_SHARE_STATES,
                ),
              ));
          }),
          (a.isSelfScreenShareRejected = function () {
            return this.$Call$p_7;
          }),
          (a.tryMarkScreenShareUpdateAppModalShown = function () {
            return this.$Call$p_8 ? !1 : ((this.$Call$p_8 = !0), !0);
          }),
          (a.isSelfScreenSharing = function () {
            return (
              this.$Call$p_3 ===
              o("WAWebVoipWaCallEnums").ScreenShareState.Started
            );
          }),
          (a.isAnyPeerScreenSharing = function () {
            return new Set(this.$Call$p_5.values()).has(
              o("WAWebVoipWaCallEnums").ScreenShareState.Started,
            );
          }),
          (a.getScreenSharingPeerJid = function () {
            for (var e of this.$Call$p_5) {
              var t = e[0],
                n = e[1];
              if (n === o("WAWebVoipWaCallEnums").ScreenShareState.Started)
                return t;
            }
            return null;
          }),
          (a.isDualStreamScreenShareEnabled = function () {
            return (
              this.$Call$p_9 == null &&
                (this.$Call$p_9 =
                  o("WAWebABProps").getABPropConfigValue(
                    "calling_screen_share_milestone_version",
                  ) >= s),
              this.isDualStreamSsEnabled && this.$Call$p_9
            );
          }),
          (a.isSelfDualStreaming = function () {
            return (
              this.isDualStreamScreenShareEnabled() &&
              this.$Call$p_3 ===
                o("WAWebVoipWaCallEnums").ScreenShareState.Started &&
              this.$Call$p_4 >= s
            );
          }),
          (a.isPeerDualStreaming = function (t) {
            var e;
            return (
              this.isDualStreamScreenShareEnabled() &&
              !o("WAWebUserPrefsMeUser").isMeAccount(t) &&
              this.$Call$p_5.get(t) ===
                o("WAWebVoipWaCallEnums").ScreenShareState.Started &&
              ((e = this.$Call$p_6.get(t)) != null ? e : 0) >= s
            );
          }),
          (a.getDualStreamingPeerJids = function () {
            if (!this.isDualStreamScreenShareEnabled()) return [];
            var e = [];
            for (var t of this.$Call$p_5) {
              var n,
                r = t[0],
                a = t[1];
              a === o("WAWebVoipWaCallEnums").ScreenShareState.Started &&
                ((n = this.$Call$p_6.get(r)) != null ? n : 0) >= s &&
                e.push(r);
            }
            return e;
          }),
          (a.setReactionForParticipant = function (t, n) {
            var e = t.toString();
            (this.$Call$p_10.set(e, n),
              this.trigger(
                o("WAWebVoipEventConstants").getChangeEvent(
                  o("WAWebVoipEventConstants").VoipCallModelEvents
                    .REACTION_STATES,
                ),
              ));
          }),
          (a.clearReactionForParticipant = function (t) {
            var e = t.toString();
            (this.$Call$p_10.delete(e),
              this.trigger(
                o("WAWebVoipEventConstants").getChangeEvent(
                  o("WAWebVoipEventConstants").VoipCallModelEvents
                    .REACTION_STATES,
                ),
              ));
          }),
          (a.getReactionForParticipant = function (t) {
            var e = typeof t == "string" ? t : t.toString();
            return this.$Call$p_10.get(e);
          }),
          (a.setRaisedHandForParticipant = function (t) {
            var e = t.toString();
            (this.$Call$p_11.set(e, !0),
              this.trigger(
                o("WAWebVoipEventConstants").getChangeEvent(
                  o("WAWebVoipEventConstants").VoipCallModelEvents
                    .RAISED_HAND_STATES,
                ),
              ));
          }),
          (a.clearRaisedHandForParticipant = function (t) {
            var e = t.toString();
            (this.$Call$p_11.delete(e),
              this.trigger(
                o("WAWebVoipEventConstants").getChangeEvent(
                  o("WAWebVoipEventConstants").VoipCallModelEvents
                    .RAISED_HAND_STATES,
                ),
              ));
          }),
          (a.isHandRaisedForParticipant = function (t) {
            var e,
              n = typeof t == "string" ? t : t.toString();
            return (e = this.$Call$p_11.get(n)) != null ? e : !1;
          }),
          (a.setGroupParticipantMediaStates = function (t, n) {
            ((this.$Call$p_12 = t), (this.$Call$p_13 = n));
          }),
          (a.getParticipantVideoState = function (t) {
            var e = this.$Call$p_12.get(t.toString());
            return e != null || this.isGroup
              ? e
              : o("WAWebUserPrefsMeUser").isMeAccount(t)
                ? this.selfVideoState
                : this.peerVideoState;
          }),
          (a.isParticipantVideoMuted = function (t) {
            var e = this.getParticipantVideoState(t);
            return e == null
              ? !0
              : o("WAWebVoipVideoStateUtils").isVideoMuted(e);
          }),
          (a.getParticipantMuteState = function (t) {
            var e = this.$Call$p_13.get(t.toString());
            return e != null || this.isGroup
              ? e
              : o("WAWebUserPrefsMeUser").isMeAccount(t)
                ? this.selfMicMuted
                : this.peerMicMuted;
          }),
          (a.isParticipantMicMuted = function (t) {
            var e;
            return (e = this.getParticipantMuteState(t)) != null ? e : !1;
          }),
          (a.updateParticipantVideoState = function (t, n) {
            this.$Call$p_12.set(t.toString(), n);
          }),
          (a.updateParticipantMicState = function (t, n) {
            this.$Call$p_13.set(t.toString(), n);
          }),
          (a.$Call$p_15 = function (t) {
            if (!r("WAWebEnvironment").isWindows && this.peerJid) {
              var e = {
                wid: this.peerJid,
                msgId: this.id,
                isVideo: this.isVideo,
                isGroup: this.isGroup,
                isSilenced: this.isSilenced,
                groupJid: this.groupJid,
                groupCallParticipants: this.groupCallParticipants,
              };
              if (
                !this.offerReceivedWhileOffline &&
                this.getState() ===
                  o("WAWebVoipWaCallEnums").CallState.ReceivedCall
              ) {
                r("WAWebCallNotificationBus").trigger("alert_call", e);
                var n = o("WAWebPttAudioChannels").MainAudioChannel.claim(
                  this,
                  r("WAWebNoop"),
                );
                n();
              } else {
                r("WAWebCallNotificationBus").trigger("cancel_call", e);
                var a = this.getState();
                t === o("WAWebVoipWaCallEnums").CallState.ReceivedCall &&
                  !this.wasEverConnected &&
                  !this.outgoing &&
                  !this.userEndedCall &&
                  !o("WAWebVoipCallStateUtils").isCallConnecting(a) &&
                  !o("WAWebVoipCallStateUtils").isCallConnected(a) &&
                  this.callLogResult !==
                    o("WAWebVoipWaCallEnums").CallLogResult.AcceptedElsewhere &&
                  r("WAWebCallNotificationBus").trigger("missed_call", e);
              }
            }
          }),
          n
        );
      })(r("WAWebEventEmitter"));
    l.default = u;
  },
  98,
);
