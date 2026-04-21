__d(
  "WAWebCallModel",
  [
    "WALogger",
    "WAWebCallCollection",
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
      s = (function (t) {
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
            (n.isLidCall = !1),
            (n.isEventLink = !1),
            (n.isInWaitingRoom = !1),
            (n.displayWaitingRoomDenied = !1),
            (n.isWaitingRoomAdmin = !1),
            (n.isWaitingRoomEnabled = !1),
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
            (n.networkOfflineTimer = null),
            (n.$Call$p_1 = null),
            (n.$Call$p_2 = new Map()),
            (n.$Call$p_3 = o("WAWebVoipWaCallEnums").ScreenShareState.Stopped),
            (n.$Call$p_4 = new Map()),
            (n.$Call$p_5 = !1),
            (n.$Call$p_6 = new Map()),
            (n.$Call$p_7 = new Map()),
            (n.$Call$p_8 = new Map()),
            (n.$Call$p_9 = new Map()),
            (n.$Call$p_10 = null),
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
              o("WAWebVoipCallStateUtils").isCallActive(t) &&
                (this.wasEverConnected = !0),
              this.$Call$p_11(e),
              o("WAWebVoipPerfMeasurement").onCallStateChange(t, this.outgoing),
              o("WAWebVoipCallStateUtils").isCallTerminal(t))
            ) {
              var n;
              (this.$Call$p_2.clear(),
                this.trigger(
                  (n = o("WAWebVoipEventConstants")).getChangeEvent(
                    n.VoipCallModelEvents.PEER_RECONNECTING,
                  ),
                ),
                r("WAWebCallCollection").trigger(
                  n.getChangeEvent(n.VoipCallModelEvents.PEER_RECONNECTING),
                ),
                this.$Call$p_6.clear(),
                this.trigger(
                  n.getChangeEvent(n.VoipCallModelEvents.REACTION_STATES),
                ),
                this.$Call$p_7.clear(),
                this.trigger(
                  n.getChangeEvent(n.VoipCallModelEvents.RAISED_HAND_STATES),
                ),
                (this.$Call$p_3 = o(
                  "WAWebVoipWaCallEnums",
                ).ScreenShareState.Stopped),
                this.$Call$p_4.clear(),
                (this.$Call$p_5 = !1),
                this.trigger(
                  n.getChangeEvent(n.VoipCallModelEvents.SCREEN_SHARE_STATES),
                ),
                this.$Call$p_8.clear(),
                this.$Call$p_9.clear(),
                (this.$Call$p_10 = null),
                this.trigger(
                  n.getChangeEvent(n.VoipCallModelEvents.NETWORK_HEALTH),
                ),
                r("WAWebCallCollection").trigger(
                  n.getChangeEvent(n.VoipCallModelEvents.NETWORK_HEALTH),
                ));
            }
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
          (a.$Call$p_12 = function () {
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
            return this.$Call$p_12() && !e;
          }),
          (a.isInCallLinkLobby = function () {
            var e =
              this.$Call$p_1 ===
              o("WAWebVoipWaCallEnums").CallState.ConnectedLonely;
            return this.isCallLink && this.$Call$p_12() && e;
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
          (a.isAnyPeerReconnecting = function () {
            return this.$Call$p_2.size > 0;
          }),
          (a.setNetHealth = function (t) {
            var e;
            ((this.$Call$p_10 = t),
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
            return this.$Call$p_10;
          }),
          (a.setScreenShareState = function (t, n) {
            (o("WAWebUserPrefsMeUser").isMeAccount(t)
              ? ((this.$Call$p_3 = n),
                n === o("WAWebVoipWaCallEnums").ScreenShareState.Started &&
                  (this.$Call$p_5 = !1))
              : (this.$Call$p_4.set(t, n),
                this.isAnyPeerScreenSharing() || (this.$Call$p_5 = !1)),
              this.trigger(
                o("WAWebVoipEventConstants").getChangeEvent(
                  o("WAWebVoipEventConstants").VoipCallModelEvents
                    .SCREEN_SHARE_STATES,
                ),
              ));
          }),
          (a.setSelfScreenShareRejected = function (t) {
            ((this.$Call$p_5 = t),
              this.trigger(
                o("WAWebVoipEventConstants").getChangeEvent(
                  o("WAWebVoipEventConstants").VoipCallModelEvents
                    .SCREEN_SHARE_STATES,
                ),
              ));
          }),
          (a.isSelfScreenShareRejected = function () {
            return this.$Call$p_5;
          }),
          (a.isSelfScreenSharing = function () {
            return (
              this.$Call$p_3 ===
              o("WAWebVoipWaCallEnums").ScreenShareState.Started
            );
          }),
          (a.isAnyPeerScreenSharing = function () {
            return new Set(this.$Call$p_4.values()).has(
              o("WAWebVoipWaCallEnums").ScreenShareState.Started,
            );
          }),
          (a.getScreenSharingPeerJid = function () {
            for (var e of this.$Call$p_4) {
              var t = e[0],
                n = e[1];
              if (n === o("WAWebVoipWaCallEnums").ScreenShareState.Started)
                return t;
            }
            return null;
          }),
          (a.setReactionForParticipant = function (t, n) {
            var e = t.toString();
            (this.$Call$p_6.set(e, n),
              this.trigger(
                o("WAWebVoipEventConstants").getChangeEvent(
                  o("WAWebVoipEventConstants").VoipCallModelEvents
                    .REACTION_STATES,
                ),
              ));
          }),
          (a.clearReactionForParticipant = function (t) {
            var e = t.toString();
            (this.$Call$p_6.delete(e),
              this.trigger(
                o("WAWebVoipEventConstants").getChangeEvent(
                  o("WAWebVoipEventConstants").VoipCallModelEvents
                    .REACTION_STATES,
                ),
              ));
          }),
          (a.getReactionForParticipant = function (t) {
            var e = typeof t == "string" ? t : t.toString();
            return this.$Call$p_6.get(e);
          }),
          (a.setRaisedHandForParticipant = function (t) {
            var e = t.toString();
            (this.$Call$p_7.set(e, !0),
              this.trigger(
                o("WAWebVoipEventConstants").getChangeEvent(
                  o("WAWebVoipEventConstants").VoipCallModelEvents
                    .RAISED_HAND_STATES,
                ),
              ));
          }),
          (a.clearRaisedHandForParticipant = function (t) {
            var e = t.toString();
            (this.$Call$p_7.delete(e),
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
            return (e = this.$Call$p_7.get(n)) != null ? e : !1;
          }),
          (a.setGroupParticipantMediaStates = function (t, n) {
            ((this.$Call$p_8 = t), (this.$Call$p_9 = n));
          }),
          (a.getParticipantVideoState = function (t) {
            return this.$Call$p_8.get(t.toString());
          }),
          (a.isParticipantVideoMuted = function (t) {
            var e = this.$Call$p_8.get(t.toString());
            return e == null
              ? !0
              : o("WAWebVoipVideoStateUtils").isVideoMuted(e);
          }),
          (a.getParticipantMuteState = function (t) {
            return this.$Call$p_9.get(t.toString());
          }),
          (a.isParticipantMicMuted = function (t) {
            var e;
            return (e = this.$Call$p_9.get(t.toString())) != null ? e : !1;
          }),
          (a.updateParticipantVideoState = function (t, n) {
            this.$Call$p_8.set(t.toString(), n);
          }),
          (a.updateParticipantMicState = function (t, n) {
            this.$Call$p_9.set(t.toString(), n);
          }),
          (a.$Call$p_11 = function (t) {
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
              } else
                (r("WAWebCallNotificationBus").trigger("cancel_call", e),
                  t === o("WAWebVoipWaCallEnums").CallState.ReceivedCall &&
                    !this.wasEverConnected &&
                    !this.outgoing &&
                    !this.userEndedCall &&
                    r("WAWebCallNotificationBus").trigger("missed_call", e));
            }
          }),
          n
        );
      })(r("WAWebEventEmitter"));
    l.default = s;
  },
  98,
);
