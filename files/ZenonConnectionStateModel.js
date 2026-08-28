__d(
  "ZenonConnectionStateModel",
  [
    "DateConsts",
    "ZenonAppProvider",
    "ZenonAuditedCheckpointLogId",
    "ZenonBrowsers",
    "ZenonConnectionStateTypes",
    "ZenonInfraActionsLogger",
    "ZenonNetworkQualityMonitor",
    "ZenonParticipantState",
    "ZenonPeerConnectionConstants",
    "ZenonRTWebBrowserFeatureSupport",
    "ZenonScreenShare",
    "ZenonScreenSharingAvailabilityType",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
      function e(e, t, n, a, i, l, s, u) {
        var c, d, m;
        (s === void 0 &&
          (s = { groupThreadID: null, peerID: null, serverInfoData: null }),
          u === void 0 && (u = "init"),
          (this.peerConnectionConnected = !1),
          (this.$13 = new Map()),
          (this.$15 = new Map()),
          (this.$16 = new Map()),
          (this.$17 = new Map([
            [o("ZenonPeerConnectionConstants").SCTP_MEDIA_SERVER_ID, -1],
          ])),
          (this.$18 = new Map([
            [-1, o("ZenonPeerConnectionConstants").SCTP_MEDIA_SERVER_ID],
          ])),
          (this.selfParticipantID =
            (c = e.getActorID()) != null ? c : e.getUserInfo().userID),
          (this.collisionContext = s),
          (this.clientEndpointId = n),
          (this.localCallId = a),
          (this.connectionDirection = i),
          (this.connectionState = u),
          (this.actorRepresentatives = new Map()),
          (this.duplicatedParticipantsProcessingMode =
            (d = o(
              "ZenonConnectionStateTypes",
            ).ZenonDuplicatedParticipantsProcessingMode.cast(
              l
                .getZenonGeneralizedIdentityConfig()
                .getDuplicatedParticipantsProcessingMode(),
            )) != null
              ? d
              : o("ZenonConnectionStateTypes")
                  .ZenonDuplicatedParticipantsProcessingMode.REMOVE_DUPLICATED),
          (this.currentUserCapabilities = {
            canAddParticipants: !1,
            canApproveCollaborationSpaceJoinRequests: !0,
            cowatchEnabled: !0,
            cowatchGroupEnabled: !0,
            dominantSpeaker: null,
            multiwayVideoEscalation:
              l
                .getZenonPlatformSupportConfig()
                .isMultiwayAvEscalationEnabled() &&
              o("ZenonBrowsers").supportsMWAVEscalation(),
            networkStatus: {
              local: o("ZenonNetworkQualityMonitor").ZenonNetworkQuality.Good,
              remote: new Map(),
            },
            screenSharingAvailability: o(
              "ZenonRTWebBrowserFeatureSupport",
            ).isReplaceTrackSupported()
              ? r("ZenonScreenSharingAvailabilityType").Available
              : r("ZenonScreenSharingAvailabilityType").Unknown,
            screenSharingEnabled:
              (m = o("ZenonAppProvider").isInstagramApp()) != null ? m : void 0,
            supportConstrainedDevices: {
              frameRate: null,
              height: null,
              isEnabled: !1,
              width: null,
            },
            supportMultipleStreams:
              !o("ZenonScreenShare").screenShareWithReplaceTrack(),
          }),
          (this.$1 = l),
          (this.$6 = function () {
            return new Map();
          }),
          (this.$7 = function () {
            return [];
          }),
          (this.$8 = function () {
            return [];
          }),
          (this.$9 = function () {
            return e.getStateSyncStore().getInputStates();
          }),
          (this.$10 = function () {
            return e.getStateSyncStore().getOutputStates();
          }),
          (this.$11 = new Map()),
          (this.$2 = t),
          this.$2.set(
            this.selfParticipantID,
            o("ZenonParticipantState").ZenonParticipantState.DISCONNECTED,
          ),
          (this.$3 = new Set()),
          (this.$5 = new Map(this.$2)),
          (this.$12 = null),
          (this.$14 = new Map()),
          (this.$4 = new Map()),
          (this.$19 = e));
      }
      var t = e.prototype;
      return (
        (t.overrideCurrentUserCapabilities = function (t) {
          this.currentUserCapabilities = t;
        }),
        (t.startFailedSubscriptionTimer = function (t) {
          if (this.$13.get(t) == null) {
            var e = 15;
            this.$13.set(
              t,
              window.setTimeout(
                function () {
                  r("ZenonInfraActionsLogger").logError({
                    auditId: r("ZenonAuditedCheckpointLogId")
                      .RP_ROOMS_INFRA_WWW__ERROR,
                    callType: "mw",
                    checkpoint:
                      "[ZP] Failed subscription request for user: " +
                      t +
                      "\n            was never retried after " +
                      e +
                      " seconds",
                    errorDomain:
                      "ZenonConnectionStateModel_startFailedSubscriptionTimer",
                  });
                },
                e * o("DateConsts").MS_PER_SEC,
              ),
            );
          }
        }),
        (t.clearFailedSubscriptionTimer = function (t) {
          var e = this.$13.get(t);
          e != null && (window.clearTimeout(e), this.$13.delete(t));
        }),
        (t.getConsolidatedParticipantStates = function () {
          return this.$5;
        }),
        (t.getConnectedParticipantIDs = function () {
          var e = this;
          return new Set(
            Array.from(this.$5.keys()).filter(function (t) {
              return (
                e.$5.get(t) ===
                o("ZenonParticipantState").ZenonParticipantState.CONNECTED
              );
            }),
          );
        }),
        (t.getRemoteConnectedParticipantIDs = function () {
          var e = this;
          return new Set(
            Array.from(this.$5.keys()).filter(function (t) {
              return (
                t !== e.selfParticipantID &&
                e.$5.get(t) ===
                  o("ZenonParticipantState").ZenonParticipantState.CONNECTED
              );
            }),
          );
        }),
        (t.updateParticipantState = function (t, n) {
          if (
            (this.$2.set(t, n),
            !this.$3.has(t) &&
              ((this.$5 = this.$5.set(t, n)),
              n !==
                o("ZenonParticipantState").ZenonParticipantState.CONNECTED &&
                this.$12 != null &&
                this.$12.has(t)))
          ) {
            var e;
            (e = this.$12) == null || e.delete(t);
          }
        }),
        (t.updateConnectionState = function (t) {
          this.connectionState = t;
        }),
        (t.updatePreferredCaptureConfigs = function () {
          var e = this.$1.getPreferredCaptureConfig();
          e.isEnabledForZenon() &&
            (this.currentUserCapabilities = babelHelpers.extends(
              {},
              this.currentUserCapabilities,
              {
                supportConstrainedDevices: {
                  frameRate: e.getFps(),
                  height: e.getHeightPx(),
                  isEnabled: e.isEnabled(),
                  width: e.getWidthPx(),
                },
              },
            ));
        }),
        (t.updateCurrentUserCapabilities = function (t) {
          (t.addParticipantEnabled != null &&
            (this.currentUserCapabilities = babelHelpers.extends(
              {},
              this.currentUserCapabilities,
              { canAddParticipants: t.addParticipantEnabled },
            )),
            t.cowatchEnabled != null &&
              (this.currentUserCapabilities = babelHelpers.extends(
                {},
                this.currentUserCapabilities,
                { cowatchEnabled: t.cowatchEnabled },
              )),
            t.cowatchGroupEnabled != null &&
              (this.currentUserCapabilities = babelHelpers.extends(
                {},
                this.currentUserCapabilities,
                { cowatchGroupEnabled: t.cowatchGroupEnabled },
              )),
            t.multipleVideoStreamsAllowed != null &&
              (this.currentUserCapabilities = babelHelpers.extends(
                {},
                this.currentUserCapabilities,
                { supportMultipleStreams: t.multipleVideoStreamsAllowed },
              )),
            t.multiwayVideoEscalation != null &&
              (this.currentUserCapabilities = babelHelpers.extends(
                {},
                this.currentUserCapabilities,
                { multiwayVideoEscalation: t.multiwayVideoEscalation },
              )),
            t.screenSharingEnabled != null &&
              (this.currentUserCapabilities = babelHelpers.extends(
                {},
                this.currentUserCapabilities,
                { screenSharingEnabled: t.screenSharingEnabled },
              )));
        }),
        (t.updateAllParticipantsCapabilities = function (t) {
          for (var e of t) {
            var n = e[0],
              r = e[1];
            this.$4.set(n, r);
          }
        }),
        (t.getUserCapabilities = function (t) {
          var e;
          return (e = this.$4.get(t)) != null ? e : "";
        }),
        (t.updateNetworkStatus = function (t) {
          this.currentUserCapabilities = babelHelpers.extends(
            {},
            this.currentUserCapabilities,
            { networkStatus: t },
          );
        }),
        (t.updateConsolidatedParticipantStates = function () {
          var e = new Map(this.$2);
          (this.$3.forEach(function (t) {
            e.set(
              t,
              o("ZenonParticipantState").ZenonParticipantState.CONNECTED,
            );
          }),
            (this.$5 = e));
        }),
        (t.getTracks = function () {
          return this.$6();
        }),
        (t.registerTrackFetcher = function (t) {
          this.$6 = t;
        }),
        (t.getRtpSenders_I_KNOW_WHAT_I_AM_DOING = function () {
          return this.$7();
        }),
        (t.registerRtpSendersFetcher = function (t) {
          this.$7 = t;
        }),
        (t.getRtpReceivers_I_KNOW_WHAT_I_AM_DOING = function () {
          return this.$8();
        }),
        (t.registerRtpReceiversFetcher = function (t) {
          this.$8 = t;
        }),
        (t.getStateSyncInputs = function () {
          return this.$9();
        }),
        (t.getStateSyncOutputs = function () {
          return this.$10();
        }),
        (t.getUserToTracksMap = function () {
          return this.$11;
        }),
        (t.getRemoteUserToTracksMap = function () {
          var e = this;
          return new Map(
            Array.from(this.$11.entries()).filter(function (t) {
              var n = t[0];
              return n !== e.selfParticipantID;
            }),
          );
        }),
        (t.getExistingParticipantIds = function () {
          return this.$12 || new Set();
        }),
        (t.addLocalTrackToTrackMap = function (t) {
          this.$20(t, this.selfParticipantID);
        }),
        (t.addRemoteTrackToTrackMap = function (t, n) {
          this.$20(t, n);
        }),
        (t.$20 = function (t, n) {
          var e,
            r = (e = this.$11.get(n)) != null ? e : new Map();
          (r.set(t.trackID, t), this.$11.set(n, r));
        }),
        (t.removeLocalTrackFromTrackMap = function (t) {
          this.$21(t, this.selfParticipantID);
        }),
        (t.removeRemoteTrackFromTrackMap = function (t, n) {
          this.$21(t, n);
        }),
        (t.$21 = function (t, n) {
          var e = this.$11.get(n);
          e != null && e.delete(t);
        }),
        (t.updateTrackMapFromMediaStates = function (t, n) {
          var e = this;
          (n === void 0 && (n = !1),
            (this.$3 = new Set()),
            t.forEach(function (t) {
              var r = t.participantID;
              r != null && (e.$20(t, r), n || e.$3.add(r));
            }),
            this.updateConsolidatedParticipantStates());
        }),
        (t.updateExistingParticipantsFromMediaStateTracks = function (t) {
          if (this.$12 == null) {
            var e = new Set();
            (t.forEach(function (t) {
              var n = t.participantID;
              n != null && e.add(n);
            }),
              (this.$12 = e));
          }
        }),
        (t.getIsUserVideoSubscribed = function (t) {
          var e;
          return (e = this.$14.get(t)) != null ? e : !1;
        }),
        (t.updateUserVideoSubscription = function (t, n) {
          this.$14.set(t, n);
        }),
        (t.clearAllUserVideoSubscriptions = function () {
          this.$14 = new Map();
        }),
        (t.getRemoteSignalingId = function () {
          return this.$19.getRemoteSignalingID();
        }),
        (t.updateFromUserIdToNodeIdMap = function (t) {
          ((this.$15 = t),
            (this.$16 = new Map(
              Array.from(this.$15, function (e) {
                return [e[1], e[0]];
              }),
            )));
        }),
        (t.updateFromNodeIdToUserIdMap = function (t) {
          ((this.$16 = t),
            (this.$15 = new Map(
              Array.from(this.$16, function (e) {
                return [e[1], e[0]];
              }),
            )));
        }),
        (t.getUserIdToNodeIdMap = function () {
          return this.$15;
        }),
        (t.registerDataMessageService = function (t, n) {
          (this.$17.set(t, n), this.$18.set(n, t));
        }),
        (t.convertServiceIdToNodeId = function (t) {
          return this.$17.get(t);
        }),
        (t.convertUserIdToNodeId = function (t) {
          return this.$15.get(t);
        }),
        (t.convertNodeIdtoUserId = function (t) {
          var e;
          return (e = this.$16.get(t)) != null ? e : this.$18.get(t);
        }),
        (t.userIds = function () {
          return Array.from(this.$15.keys());
        }),
        e
      );
    })();
    l.default = e;
  },
  98,
);
