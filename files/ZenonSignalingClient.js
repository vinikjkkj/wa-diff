__d(
  "ZenonSignalingClient",
  [
    "FBLogger",
    "JSResourceForInteraction",
    "Promise",
    "ZenonActorHooks",
    "ZenonDGWUtils",
    "ZenonDismissReason",
    "ZenonE2eeMandatedStateManager",
    "ZenonInfraActionsLogger",
    "ZenonMWMessageTypes",
    "ZenonMediaActionLogger",
    "ZenonSignalingStateMachine",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = r("JSResourceForInteraction")("ZenonDGWStreamManager").__setRef(
        "ZenonSignalingClient",
      ),
      u = (function () {
        function t(e, t, n, o, a) {
          var i = this;
          (a === void 0 && (a = null),
            (this.$5 = null),
            (this.$6 = function () {}),
            (this.$1 = e));
          var l = this.$7();
          ((this.$2 = new (r("ZenonSignalingStateMachine"))(
            babelHelpers.extends(
              {
                config: a,
                logEvent: function (t) {
                  return i.$6(t);
                },
                onInviteReceived: function (t, n) {
                  o(t, n, i);
                },
                sendSignalingEvent: function (t, r, o) {
                  return n.sendEvent(t, r, o);
                },
              },
              l,
              { signalingModel: e },
            ),
          )),
            t.setReceiver(function (e, t, n) {
              return i.processReceiveEvent(e, t, n);
            }),
            (this.$3 = t),
            (this.$4 = n));
        }
        var a = t.prototype;
        return (
          (a.getSignalingModel = function () {
            return this.$1;
          }),
          (a.processReceiveEvent = function (t, n, r) {
            this.$2.processReceiveEvent(t, n, r);
          }),
          (a.sendInvite = function (t, n, r, a) {
            a === void 0 && (a = o("ZenonActorHooks").ZenonActor.getID());
            var e = {
              actorID: null,
              appMessages: n,
              eventName: "inviteRequest",
              inviterID: "0",
              isRemoteOfferer: !1,
              otherParticipants: t,
              requestingVideo: !1,
              roomInfo: { name: "mock" },
              userID: a,
            };
            return this.$2.processSendEvent(e);
          }),
          (a.initiateClientRenegotiation = function (t) {
            var e = {
              eventName: "clientRenegotiationRequest",
              negotiationEvent: t,
            };
            return this.$2.processSendEvent(e);
          }),
          (a.sendSdp = function (t, n) {
            var e = this.$1.getMediaModeManager().getMediaMode(),
              r = {
                eventName: "localSdpRequest",
                mediaMode: e,
                mediaStates: n,
                sdp: t,
              };
            return this.$2.processSendEvent(r);
          }),
          (a.sendIceCandidate = function (t) {
            var e = { eventName: "iceCandidateRequest", iceCandidates: [t] };
            return this.$2.processSendEvent(e);
          }),
          (a.sendClientEvent = function (t) {
            var e = { clientEventType: t, eventName: "clientEventRequest" };
            return this.$2.processSendEvent(e);
          }),
          (a.closeTransport = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              if (o("ZenonDGWUtils").shouldUseDGW()) {
                var e = yield s.load();
                e.getManagerInstance().closeStream("call ended");
              }
            });
            function t() {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.sendDismiss = function (t) {
            this.$6({ name: "dismissSent" });
            var e = {
              eventName: "terminateRequest",
              fromJoinResponse: !1,
              reason: t,
              shouldInformPeer: !0,
            };
            return this.$2.processSendEvent(e);
          }),
          (a.silentlyTerminate = function () {
            var e = {
              eventName: "terminateRequest",
              fromJoinResponse: !1,
              reason:
                o("ZenonDismissReason").ZenonDismissReason.OtherInstanceHandled,
              shouldInformPeer: !1,
            };
            return this.$2.processSendEvent(e);
          }),
          (a.sendGenericDataMessage = function (t, n, r, o) {
            var e = {
              data: n,
              eventName: "genericDataMessageRequest",
              recipientIDs: r,
              serviceRecipients: o,
              topic: t,
            };
            return this.$2.processSendEvent(e);
          }),
          (a.sendMediaUpdate = function (t) {
            var e = { eventName: "mediaUpdateRequest", mediaStates: t };
            return this.$2.processSendEvent(e);
          }),
          (a.sendAddParticipantsMessage = function (t, n) {
            var e = {
              eventName: "addParticipantsRequest",
              groupThreadId: n,
              participants: t,
            };
            return this.$2.processSendEvent(e);
          }),
          (a.sendRemoveParticipantsRequest = function (t) {
            var e = { eventName: "removeParticipantsRequest", participants: t };
            return this.$2.processSendEvent(e);
          }),
          (a.sendUsersApprovalRequest = function (t, n) {
            var e = {
              approvalStatus: t,
              eventName: "usersApprovalRequest",
              targetUsers: n,
            };
            return this.$2.processSendEvent(e);
          }),
          (a.sendClientInfo = function (t, n, a, i) {
            var e = this,
              l;
            ((n || a) && (l = new Map()),
              n &&
                n.forEach(function (t, n) {
                  var r;
                  (r = l) == null ||
                    r.set(
                      n,
                      e
                        .getSignalingModel()
                        .getStateSyncStore()
                        .updateInputState(n, t),
                    );
                }),
              a &&
                a.forEach(function (e, t) {
                  var n;
                  (n = l) == null || n.set(t, e);
                }));
            var s = this.$1.getMediaModeManager().getMediaMode(),
              u = {
                actorRepresentatives: new Map(),
                e2eeInfraMandatedExpStatus: r(
                  "ZenonE2eeMandatedStateManager",
                ).getE2eeInfraMandatedExpStatus(),
                eventName: "clientInfoRequest",
                initialSyncStates: l,
                isE2eeMandated: r(
                  "ZenonE2eeMandatedStateManager",
                ).isInfraE2eeMandated(),
                isSecondaryJoinRole: i,
                mediaPath: o("ZenonMWMessageTypes").ZenonMWMediaPath[
                  s.toUpperCase()
                ],
                userCapabilities: t,
              };
            return this.$2.processSendEvent(u);
          }),
          (a.sendStateSyncUnsubscribe = function (t) {
            var e = this.getSignalingModel(),
              n = e.getStateSyncStore().unsubscribe(t),
              r = {
                eventName: "stateSyncUnsubscribeRequest",
                topic: t,
                version: n.version,
              },
              o = this.$2.processSendEvent(r);
            return (e.notify(), o);
          }),
          (a.sendStateSyncUpdate = function (t, n) {
            var e = this.getSignalingModel(),
              r = e.getStateSyncStore().updateInputState(t, n),
              o = {
                data: r.data != null ? r.data : void 0,
                eventName: "stateSyncUpdateRequest",
                topic: t,
                version: r.version,
              },
              a = this.$2.processSendEvent(o);
            return (e.notify(), a);
          }),
          (a.sendSubscriptionRequest = function (t) {
            var e = { eventName: "subscriptionRequest", subscriptions: t };
            return this.$2.processSendEvent(e);
          }),
          (a.receiveMessage = function (t) {
            var e = t.getHeader(),
              n = e.remoteSignalingID,
              o = e.roomInfo;
            (n != null &&
              this.$1.getRemoteSignalingID() !== n &&
              (this.$1.updateRemoteSignalingID(n),
              this.$6({
                conferenceName: o.name,
                name: "setRemoteSignalingID",
                remoteSignalingID: n,
              }),
              this.$1.notify()),
              o != null &&
                this.$1.getRoomInfo().name !== o.name &&
                (r("ZenonInfraActionsLogger").updateCachedValues({
                  conferenceName: o.name,
                }),
                r("ZenonMediaActionLogger").updateCachedValues({
                  conferenceName: o.name,
                }),
                this.$1.updateRoomInfo(o),
                this.$1.notify()),
              this.$3.receiveMessage(t));
          }),
          (a.isTerminated = function () {
            return this.$2.getState() === "terminated";
          }),
          (a.sendAnswerIntent = function () {
            var e = { eventName: "answerIntentRequest" };
            return this.$2.processSendEvent(e);
          }),
          (a.respondToInvite = function (t) {
            var e = {
              ackMessageId: "",
              eventName: "inviteResponse",
              status: t,
            };
            return this.$2.processSendEvent(e);
          }),
          (a.setSignalingEventHandlers = function (t) {
            if (this.$5 != null) {
              r("FBLogger")("rtc_www").mustfix(
                "setSignalingEventHandlers should only be called once, to avoid accidentally losing handlers.",
              );
              return;
            }
            this.$5 = t;
          }),
          (a.setLoggingEventHandler = function (t) {
            ((this.$6 = t), this.$3.setLoggingEventHandler(t));
          }),
          (a.setSecureDataMessageManager = function (t) {
            t != null && this.$3.setSecureDataMessageManager(t);
          }),
          (a.$7 = function () {
            return {
              onCapabilitiesReceived: this.$8("onCapabilitiesReceived"),
              onClientInfoReceived: this.$8("onClientInfoReceived"),
              onClientRenegotiationReceived: this.$9(
                "onClientRenegotiationReceived",
              ),
              onDismissReceived: this.$8("onDismissReceived"),
              onGenericDataMessageReceived: this.$8(
                "onGenericDataMessageReceived",
              ),
              onIceCandidateReceived: this.$8("onIceCandidateReceived"),
              onInviteAcknowledgeSent: this.$8("onInviteAcknowledgeSent"),
              onMediaUpdateReceived: this.$8("onMediaUpdateReceived"),
              onMediaUpdateResponseReceived: this.$8(
                "onMediaUpdateResponseReceived",
              ),
              onParticipantUpdateReceived: this.$8(
                "onParticipantUpdateReceived",
              ),
              onPendingApprovalReceived: this.$8("onPendingApprovalReceived"),
              onRenegotiationRequested: this.$8("onRenegotiationRequested"),
              onRoomContextUpdateReceived: this.$8(
                "onRoomContextUpdateReceived",
              ),
              onSdpReceived: this.$8("onSdpReceived"),
              onServerRenegotiationFinished: this.$8(
                "onServerRenegotiationFinished",
              ),
            };
          }),
          (a.$9 = function (t) {
            var e = this;
            return function () {
              if (e.$5 && e.$5[t]) {
                var n;
                (n = e.$5)[t].apply(n, arguments);
              }
            };
          }),
          (a.$8 = function (r) {
            var t = this;
            return function () {
              if (t.$5 && t.$5[r]) {
                var o;
                return (o = t.$5)[r].apply(o, arguments);
              }
              return (e || (e = n("Promise"))).resolve();
            };
          }),
          t
        );
      })();
    l.default = u;
  },
  98,
);
