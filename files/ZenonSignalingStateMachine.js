__d(
  "ZenonSignalingStateMachine",
  [
    "Promise",
    "ZenonDebugLogger",
    "ZenonInfraActionsLogger",
    "ZenonLogPromiseRejection",
    "ZenonMWMessageReliabilityLogTypes",
    "ZenonSignalingInitState",
    "ZenonSignalingInviteReceivedState",
    "ZenonSignalingNegotiationCompleteState",
    "ZenonSignalingSMGuards",
    "ZenonSignalingSharedActions",
    "ZenonSignalingTerminatedState",
    "ZenonStateMachineBase",
    "err",
    "getReceiveEvent",
    "getSendEvent",
    "qpl",
    "xstate",
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
      _ = [
        "receiveRemoteSdpRequest",
        "receiveInitiateRenegotiationRequest",
        "receiveMediaUpdateRequest",
      ],
      f = {
        loggingStateName: "signalingState",
        name: "SignalingStateMachine",
        shortname: "Signaling",
      },
      g = {
        lastRemoteSdpResponseMessageIdSentGuard: (p = o(
          "ZenonSignalingSMGuards",
        )).lastRemoteSdpResponseMessageIdSentGuard,
        receiveNonOkMediaUpdateResponseGuard:
          p.receiveNonOkMediaUpdateResponseGuard,
        receiveRemoteSdpRequestSmuOrCmuGuard:
          p.receiveRemoteSdpRequestSmuOrCmuGuard,
        sdpAnswerReceiveGuard: p.sdpAnswerReceiveGuard,
        sdpAnswerSendGuard: p.sdpAnswerSendGuard,
        sdpJoinResponseReceiveGuard: p.sdpJoinResponseReceiveGuard,
        sdpOfferReceiveGuard: p.sdpOfferReceiveGuard,
        sdpOfferReceiveNotRejectedGuard: p.sdpOfferReceiveNotRejectedGuard,
        sdpOfferReceiveRejectedGuard: p.sdpOfferReceiveRejectedGuard,
        sdpOfferSendGuard: p.sdpOfferSendGuard,
        sdpOfferSendGuardNegotiationComplete:
          p.sdpOfferSendGuardNegotiationComplete,
        sdpPrAnswerReceiveGuard: p.sdpPrAnswerReceiveGuard,
      },
      h = (function (t) {
        function a(e, n) {
          var a;
          return (
            n === void 0 && (n = "init"),
            (a =
              t.call(this, {
                base: { guards: g, initState: "init" },
                logging: babelHelpers.extends({}, f, {
                  eventToLogTimeoutsOn: null,
                  getTransactionId: function (t) {
                    return t.type !== "messageSent"
                      ? t.payload.ackMessageId
                      : null;
                  },
                  loggableEvents: _,
                  loggingId: +e.signalingModel.getSignalingID(),
                }),
                machine: {
                  context: babelHelpers.extends({}, e),
                  initialState: n,
                  states: q,
                },
              }) || this),
            a.sm.onTransition(function (e) {
              r("ZenonInfraActionsLogger").updateCachedValues({
                signalingState: e.value,
              });
              var t =
                e.event.type === "receiveRemoteSdpRequest"
                  ? e.event.messageID
                  : null;
              (a.logTransition(e, t),
                a.logTransaction(
                  e.event,
                  o("ZenonMWMessageReliabilityLogTypes")
                    .ZenonMWMessageReliabilityEvent.PROCESSED_SM_EVENT,
                ),
                a.ifDroppedEvent(e, function (e) {
                  e.onError &&
                    e.onError(r("err")("event was dropped: " + e.type));
                }));
            }),
            (a.$ZenonSignalingStateMachine$p_1 = e.sendSignalingEvent),
            r("ZenonDebugLogger")
              .getInstance()
              .startQPL(r("qpl")._(64245348, "8823"), a.loggingId),
            a
          );
        }
        babelHelpers.inheritsLoose(a, t);
        var i = a.prototype;
        return (
          (i.processSendEvent = function (o) {
            var t = this;
            return r("ZenonLogPromiseRejection")(
              new (e || (e = n("Promise")))(function (e, n) {
                var a = r("getSendEvent")(o, e, n);
                a != null ? t.$ZenonSignalingStateMachine$p_2(a) : e();
              }),
            );
          }),
          (i.processReceiveEvent = function (t, n, o) {
            if (t.eventName === "wakeupRequest") {
              this.$ZenonSignalingStateMachine$p_1(t);
              return;
            }
            var e = r("getReceiveEvent")(t, n, o);
            e != null && this.$ZenonSignalingStateMachine$p_2(e);
          }),
          (i.processEvent = function (t) {
            this.$ZenonSignalingStateMachine$p_2(t);
          }),
          (i.$ZenonSignalingStateMachine$p_2 = function (t) {
            var e = t.type === "receiveRemoteSdpRequest" ? t.messageID : null;
            (this.logEvent(t, e), this.sm.send(t));
          }),
          a
        );
      })((s = o("ZenonStateMachineBase")).ZenonStateMachineBase),
      y = {
        actions: [(u = o("ZenonSignalingSharedActions")).genericEventSender],
      },
      C = { actions: [u.onReceiveTerminateRequest], target: "terminated" },
      b = { actions: [u.genericEventSender] },
      v = { actions: [u.genericEventSender] },
      S = { actions: [u.genericEventSender] },
      R = { actions: [u.onReceiveCapabilitiesRequest] },
      L = { actions: [u.onReceiveClientInfoRequest] },
      E = { actions: [u.onReceiveGenericDataMessageRequest] },
      k = { actions: [u.onReceiveIceCandidateRequest] },
      I = { actions: [u.genericEventSender] },
      T = { actions: [u.genericEventSender] },
      D = { actions: [u.genericEventSender] },
      x = { actions: [(c = o("xstate")).assign(u.onSendSubscriptionRequest)] },
      $ = { actions: [u.onSendTerminateRequest], target: "terminated" },
      P = { actions: [u.genericEventSender] },
      N = { actions: [c.assign(u.onReceiveParticipantUpdateRequest)] },
      M = { actions: [u.onReceiveRoomContextUpdateRequest] },
      w = { actions: [u.onReceiveOverlayConfigServerUpdateRequest] },
      A = { actions: [u.onReceiveStateSyncNotifyRequest] },
      F = { actions: [u.genericEventSender] },
      O = { actions: [u.genericEventSender] },
      B = { actions: [u.onSendUsersApprovalRequest] },
      W = { actions: [c.assign(u.onReceiveMediaUpdateRequest)] },
      q = {
        init: {
          on: {
            sendInviteRequest: {
              actions: [
                c.assign((d = o("ZenonSignalingInitState")).startPingTimer),
                d.onSendInvite,
              ],
              target: "inviteSent",
            },
            receiveInviteRequest: {
              target: "inviteReceived",
              actions: [
                c.assign(d.startPingTimer),
                c.assign(d.onReceiveInvite),
              ],
            },
            receiveTerminateRequest: C,
            sendTerminateRequest: $,
            receiveRoomContextUpdateRequest: M,
            sendClientInfoRequest: y,
            sendRemoveParticipantsRequest: P,
            sendUsersApprovalRequest: B,
            sendSubscriptionRequest: x,
            receiveMediaUpdateRequest: W,
            receiveOverlayConfigServerUpdateRequest: w,
            receiveStateSyncNotifyRequest: A,
            sendLocalSdpRequest: s.defer,
            receiveCapabilitiesRequest: s.defer,
            receiveClientInfoRequest: s.defer,
            receiveGenericDataMessageRequest: s.defer,
            receiveIceCandidateRequest: s.defer,
            receiveParticipantUpdateRequest: s.defer,
            receiveLocalSdpResponse: s.defer,
            receiveMediaUpdateResponse: s.defer,
            receiveRemoteSdpRequest: s.defer,
            sendGenericDataMessageRequest: s.defer,
            sendIceCandidateRequest: s.defer,
            sendStateSyncUnsubscribeRequest: s.defer,
            sendStateSyncUpdateRequest: s.defer,
            sendCapabilitiesRequest: s.defer,
            sendClientRenegotiationRequest: s.defer,
          },
        },
        inviteSent: {
          on: {
            sendLocalSdpRequest: {
              actions: [u.genericEventSender],
              cond: g.sdpOfferSendGuard,
              target: "offerSdpSent",
            },
            receiveTerminateRequest: C,
            sendTerminateRequest: $,
            receiveIceCandidateRequest: k,
            receiveParticipantUpdateRequest: N,
            receiveRoomContextUpdateRequest: M,
            sendCapabilitiesRequest: D,
            sendClientInfoRequest: y,
            sendRemoveParticipantsRequest: P,
            receiveMediaUpdateRequest: W,
            receiveOverlayConfigServerUpdateRequest: w,
            receiveStateSyncNotifyRequest: A,
            sendSubscriptionRequest: x,
            sendUsersApprovalRequest: B,
            sendMediaUpdateRequest: s.defer,
            sendIceCandidateRequest: s.defer,
            receiveGenericDataMessageRequest: s.defer,
            sendGenericDataMessageRequest: s.defer,
            sendStateSyncUnsubscribeRequest: s.defer,
            sendStateSyncUpdateRequest: s.defer,
            sendClientRenegotiationRequest: s.defer,
          },
        },
        offerSdpSent: {
          on: {
            receiveLocalSdpResponse: {
              actions: [u.onReceiveLocalSdpResponse],
              cond: g.sdpJoinResponseReceiveGuard,
              target: "offerSdpAcknowledged",
            },
            receiveTerminateRequest: C,
            receiveCapabilitiesRequest: R,
            receiveClientInfoRequest: L,
            receiveIceCandidateRequest: k,
            receiveMediaUpdateRequest: W,
            receiveParticipantUpdateRequest: N,
            receiveRoomContextUpdateRequest: M,
            sendAddParticipantsRequest: T,
            sendAnswerIntentRequest: b,
            sendUsersApprovalRequest: B,
            sendClientInfoRequest: y,
            sendRemoveParticipantsRequest: P,
            receiveOverlayConfigServerUpdateRequest: w,
            receiveStateSyncNotifyRequest: A,
            sendSubscriptionRequest: x,
            receivePendingApprovalRequest: s.defer,
            receiveRemoteSdpRequest: s.defer,
            receiveInitiateRenegotiationRequest: s.defer,
            sendGenericDataMessageRequest: s.defer,
            sendIceCandidateRequest: s.defer,
            sendClientEventRequest: s.defer,
            sendMediaUpdateRequest: s.defer,
            receiveGenericDataMessageRequest: s.defer,
            sendStateSyncUnsubscribeRequest: s.defer,
            sendStateSyncUpdateRequest: s.defer,
            sendTerminateRequest: s.defer,
            sendClientRenegotiationRequest: s.defer,
          },
        },
        offerSdpAcknowledged: {
          on: {
            receivePendingApprovalRequest: {
              actions: [u.onReceivePendingApprovalRequest],
            },
            receiveRemoteSdpRequest: [
              {
                actions: [c.assign(u.onReceiveRemoteSdpRequest)],
                cond: g.sdpAnswerReceiveGuard,
                target: "negotiationComplete",
              },
              {
                actions: [c.assign(u.onReceiveRemoteSdpRequest)],
                cond: g.sdpPrAnswerReceiveGuard,
              },
              babelHelpers.extends({}, s.defer, {
                cond: g.sdpOfferReceiveGuard,
              }),
            ],
            receiveInitiateRenegotiationRequest: {
              actions: [c.assign(u.onReceiveInitiateRenegotiationRequest)],
              target: "negotiationComplete",
            },
            receiveTerminateRequest: C,
            sendTerminateRequest: $,
            receiveCapabilitiesRequest: R,
            receiveClientInfoRequest: L,
            receiveIceCandidateRequest: k,
            receiveMediaUpdateRequest: W,
            receiveParticipantUpdateRequest: N,
            receiveRoomContextUpdateRequest: M,
            sendAddParticipantsRequest: T,
            sendAnswerIntentRequest: b,
            sendUsersApprovalRequest: B,
            sendClientInfoRequest: y,
            sendRemoveParticipantsRequest: P,
            receiveOverlayConfigServerUpdateRequest: w,
            receiveStateSyncNotifyRequest: A,
            sendStateSyncUnsubscribeRequest: O,
            sendStateSyncUpdateRequest: F,
            sendSubscriptionRequest: x,
            sendIceCandidateRequest: S,
            sendClientEventRequest: I,
            sendGenericDataMessageRequest: s.defer,
            sendMediaUpdateRequest: s.defer,
            receiveGenericDataMessageRequest: s.defer,
            sendClientRenegotiationRequest: s.defer,
          },
        },
        inviteReceived: {
          on: {
            sendInviteResponse: {
              actions: [
                o("ZenonSignalingInviteReceivedState").onSendInviteResponse,
              ],
              target: "inviteAcknowledged",
            },
            sendTerminateRequest: $,
            receiveRoomContextUpdateRequest: M,
            sendAnswerIntentRequest: b,
            sendIceCandidateRequest: S,
            sendUsersApprovalRequest: B,
            sendRemoveParticipantsRequest: P,
            receiveMediaUpdateRequest: W,
            receiveOverlayConfigServerUpdateRequest: w,
            receiveStateSyncNotifyRequest: A,
            sendStateSyncUnsubscribeRequest: O,
            sendStateSyncUpdateRequest: F,
            sendSubscriptionRequest: x,
            receiveCapabilitiesRequest: s.defer,
            receiveClientInfoRequest: s.defer,
            receiveGenericDataMessageRequest: s.defer,
            receiveIceCandidateRequest: s.defer,
            receiveParticipantUpdateRequest: s.defer,
            receiveRemoteSdpRequest: s.defer,
            sendGenericDataMessageRequest: s.defer,
            receiveTerminateRequest: s.defer,
            sendClientRenegotiationRequest: s.defer,
            sendMediaUpdateRequest: s.defer,
          },
        },
        inviteAcknowledged: {
          on: {
            sendLocalSdpRequest: [
              {
                actions: [u.genericEventSender],
                cond: g.sdpOfferSendGuard,
                target: "offerSdpSent",
              },
              {
                actions: [u.genericEventSender],
                cond: g.sdpAnswerSendGuard,
                target: "negotiationComplete",
              },
            ],
            receiveRemoteSdpRequest: {
              actions: [c.assign(u.onReceiveRemoteSdpRequest)],
              cond: g.sdpOfferReceiveGuard,
              target: "offerSdpReceived",
            },
            receiveTerminateRequest: C,
            sendTerminateRequest: $,
            receiveCapabilitiesRequest: R,
            receiveClientInfoRequest: L,
            receiveIceCandidateRequest: k,
            receiveMediaUpdateRequest: W,
            receiveParticipantUpdateRequest: N,
            receiveRoomContextUpdateRequest: M,
            sendAnswerIntentRequest: b,
            sendClientInfoRequest: y,
            sendIceCandidateRequest: S,
            receiveOverlayConfigServerUpdateRequest: w,
            receiveStateSyncNotifyRequest: A,
            sendSubscriptionRequest: x,
            sendStateSyncUpdateRequest: s.defer,
            sendUsersApprovalRequest: s.defer,
            sendRemoveParticipantsRequest: s.defer,
            sendStateSyncUnsubscribeRequest: s.defer,
            sendMediaUpdateRequest: s.defer,
            sendGenericDataMessageRequest: s.defer,
            receiveGenericDataMessageRequest: s.defer,
            sendClientRenegotiationRequest: s.defer,
          },
        },
        offerSdpReceived: {
          on: {
            sendLocalSdpRequest: [
              { actions: u.genericEventSender, cond: g.sdpAnswerSendGuard },
            ],
            receiveTerminateRequest: C,
            sendTerminateRequest: $,
            receiveLocalSdpResponse: {
              actions: [u.onReceiveLocalSdpResponse],
              target: "negotiationComplete",
            },
            receiveCapabilitiesRequest: R,
            receiveClientInfoRequest: L,
            receiveIceCandidateRequest: k,
            receiveMediaUpdateRequest: W,
            receiveParticipantUpdateRequest: N,
            receiveRoomContextUpdateRequest: M,
            sendAnswerIntentRequest: b,
            sendCapabilitiesRequest: D,
            sendClientInfoRequest: y,
            sendIceCandidateRequest: S,
            receiveOverlayConfigServerUpdateRequest: w,
            receiveStateSyncNotifyRequest: A,
            sendSubscriptionRequest: x,
            sendUsersApprovalRequest: s.defer,
            sendRemoveParticipantsRequest: s.defer,
            sendStateSyncUnsubscribeRequest: s.defer,
            sendStateSyncUpdateRequest: s.defer,
            receiveRemoteSdpRequest: s.defer,
            sendGenericDataMessageRequest: s.defer,
            receiveGenericDataMessageRequest: s.defer,
            sendClientRenegotiationRequest: s.defer,
            sendMediaUpdateRequest: s.defer,
          },
        },
        negotiationComplete: {
          on: {
            receiveInitiateRenegotiationRequest: {
              actions: [c.assign(u.onReceiveInitiateRenegotiationRequest)],
            },
            receiveLocalSdpResponse: {
              actions: [u.onReceiveLocalSdpResponse],
              cond: g.sdpJoinResponseReceiveGuard,
            },
            receiveMediaUpdateResponse: {
              actions: [c.assign(u.onNonSDPReceiveMediaUpdateResponse)],
            },
            receivePendingApprovalRequest: {
              actions: [u.onReceivePendingApprovalRequest],
            },
            receiveRemoteSdpRequest: [
              {
                actions: [c.assign(u.onReceiveRemoteSdpRequest)],
                cond: g.sdpOfferReceiveNotRejectedGuard,
                target: "serverInitiatedRenegotiating",
              },
              {
                actions: [c.assign(u.onReceiveRemoteSdpRequest)],
                cond: g.sdpOfferReceiveRejectedGuard,
              },
              {
                actions: [
                  c.assign(
                    o("ZenonSignalingNegotiationCompleteState").onReceiveAnswer,
                  ),
                ],
                cond: g.sdpAnswerReceiveGuard,
              },
            ],
            sendClientRenegotiationRequest: {
              actions: [u.onSendClientRenegotiationRequest],
              target: "clientInitiatedRenegotiating",
            },
            sendLocalSdpRequest: [
              {
                actions: [c.assign(u.onSendLocalSdpRequestOffer)],
                cond: g.sdpOfferSendGuardNegotiationComplete,
                target: "clientInitiatedRenegotiating",
              },
              { actions: [u.genericEventSender], cond: g.sdpAnswerSendGuard },
            ],
            receiveTerminateRequest: C,
            sendTerminateRequest: $,
            receiveOverlayConfigServerUpdateRequest: w,
            receiveParticipantUpdateRequest: N,
            receiveMediaUpdateRequest: W,
            receiveCapabilitiesRequest: R,
            receiveClientInfoRequest: L,
            receiveGenericDataMessageRequest: E,
            receiveIceCandidateRequest: k,
            receiveRoomContextUpdateRequest: M,
            receiveStateSyncNotifyRequest: A,
            sendAddParticipantsRequest: T,
            sendClientEventRequest: I,
            sendGenericDataMessageRequest: v,
            sendIceCandidateRequest: S,
            sendMediaUpdateRequest: [
              {
                actions: [
                  c.assign(
                    o("ZenonSignalingNegotiationCompleteState")
                      .onSendMediaUpdateRequest,
                  ),
                ],
              },
            ],
            sendPingRequest: { actions: [u.genericEventSender] },
            sendRemoveParticipantsRequest: P,
            sendStateSyncUnsubscribeRequest: O,
            sendStateSyncUpdateRequest: F,
            sendSubscriptionRequest: x,
            sendUsersApprovalRequest: B,
          },
        },
        serverInitiatedRenegotiating: {
          on: {
            sendLocalSdpRequest: [
              { actions: ["defer"], cond: g.sdpOfferSendGuard },
              {
                actions: [
                  u.genericEventSender,
                  u.onServerRenegotiationFinished,
                ],
                cond: g.sdpAnswerSendGuard,
                target: "negotiationComplete",
              },
            ],
            messageSent: {
              actions: [u.onServerRenegotiationFinished],
              cond: g.lastRemoteSdpResponseMessageIdSentGuard,
              target: "negotiationComplete",
            },
            receiveTerminateRequest: C,
            sendTerminateRequest: $,
            receiveGenericDataMessageRequest: E,
            receiveIceCandidateRequest: k,
            receiveParticipantUpdateRequest: N,
            receiveRoomContextUpdateRequest: M,
            sendUsersApprovalRequest: B,
            sendIceCandidateRequest: S,
            sendSubscriptionRequest: x,
            sendGenericDataMessageRequest: v,
            sendClientEventRequest: I,
            receiveMediaUpdateRequest: s.defer,
            receiveCapabilitiesRequest: s.defer,
            receiveClientInfoRequest: s.defer,
            receiveLocalSdpResponse: s.defer,
            receiveRemoteSdpRequest: s.defer,
            sendMediaUpdateRequest: s.defer,
            sendClientRenegotiationRequest: s.defer,
            receiveMediaUpdateResponse: s.defer,
            sendRemoveParticipantsRequest: s.defer,
            receiveOverlayConfigServerUpdateRequest: s.defer,
            receiveStateSyncNotifyRequest: s.defer,
            sendStateSyncUnsubscribeRequest: s.defer,
            sendStateSyncUpdateRequest: s.defer,
            sendAddParticipantsRequest: s.defer,
          },
        },
        clientInitiatedRenegotiating: {
          on: {
            receiveRemoteSdpRequest: [
              { actions: ["defer"], cond: g.sdpOfferReceiveGuard },
              {
                actions: [c.assign(u.onReceiveRemoteSdpRequest)],
                cond: g.sdpAnswerReceiveGuard,
                target: "negotiationComplete",
              },
            ],
            receiveMediaUpdateResponse: [
              {
                actions: [c.assign(u.onReceiveMediaUpdateResponse)],
                cond: g.receiveNonOkMediaUpdateResponseGuard,
                target: "negotiationComplete",
              },
              { actions: ["defer"] },
            ],
            receiveTerminateRequest: C,
            sendTerminateRequest: $,
            sendLocalSdpRequest: [
              {
                actions: [c.assign(u.onSendLocalSdpRequestOffer)],
                cond: g.sdpOfferSendGuard,
              },
              { actions: ["defer"], cond: g.sdpAnswerSendGuard },
            ],
            receiveCapabilitiesRequest: R,
            receiveClientInfoRequest: L,
            receiveGenericDataMessageRequest: E,
            receiveIceCandidateRequest: k,
            receiveMediaUpdateRequest: W,
            receiveParticipantUpdateRequest: N,
            receiveRoomContextUpdateRequest: M,
            sendUsersApprovalRequest: B,
            sendAddParticipantsRequest: T,
            sendIceCandidateRequest: S,
            sendRemoveParticipantsRequest: P,
            receiveOverlayConfigServerUpdateRequest: w,
            receiveStateSyncNotifyRequest: A,
            sendStateSyncUnsubscribeRequest: O,
            sendStateSyncUpdateRequest: F,
            sendSubscriptionRequest: x,
            sendGenericDataMessageRequest: v,
            sendClientEventRequest: I,
            receiveLocalSdpResponse: s.defer,
            sendMediaUpdateRequest: s.defer,
            sendClientRenegotiationRequest: s.defer,
            receiveInitiateRenegotiationRequest: s.defer,
          },
        },
        terminated: {
          entry: [
            c.assign((m = o("ZenonSignalingTerminatedState")).stopPingTimer),
          ],
          on: {
            receiveRemoteSdpRequest: [
              {
                actions: [m.onReceiveRemoteSdpRequest],
                cond: g.receiveRemoteSdpRequestSmuOrCmuGuard,
              },
            ],
            receiveInitiateRenegotiationRequest: [
              { actions: [m.onReceiveInitiateRenegotiationRequest] },
            ],
            receiveMediaUpdateRequest: [
              { actions: [m.onReceiveMediaUpdateRequest] },
            ],
          },
        },
      };
    l.default = h;
  },
  98,
);
