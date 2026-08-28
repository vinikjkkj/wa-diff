__d(
  "getReceiveEvent",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e, t, n) {
      switch (e.eventName) {
        case "addParticipantsRequest":
          return { payload: e, type: "receiveAddParticipantsRequest" };
        case "addParticipantsResponse":
          return { payload: e, type: "receiveAddParticipantsResponse" };
        case "pendingApprovalRequest":
          return {
            configuration: n,
            messageID: t,
            payload: e,
            type: "receivePendingApprovalRequest",
          };
        case "answerIntentRequest":
          return null;
        case "clientEventRequest":
          return null;
        case "clientRenegotiationRequest":
          return null;
        case "capabilitiesRequest":
          return {
            configuration: n,
            messageID: t,
            payload: e,
            type: "receiveCapabilitiesRequest",
          };
        case "clientInfoRequest":
          return {
            configuration: n,
            messageID: t,
            payload: e,
            type: "receiveClientInfoRequest",
          };
        case "dismissResponse":
          return {
            configuration: n,
            messageID: t,
            payload: e,
            type: "receiveDismissResponse",
          };
        case "iceCandidateRequest":
          return {
            configuration: n,
            messageID: t,
            payload: e,
            type: "receiveIceCandidateRequest",
          };
        case "iceCandidateResponse":
          return {
            configuration: n,
            messageID: t,
            payload: e,
            type: "receiveIceCandidateResponse",
          };
        case "initiateRenegotiationRequest":
          return {
            configuration: n,
            messageID: t,
            payload: e,
            type: "receiveInitiateRenegotiationRequest",
          };
        case "initiateRenegotiationResponse":
          return null;
        case "inviteRequest":
          return {
            configuration: n,
            messageID: t,
            payload: e,
            type: "receiveInviteRequest",
          };
        case "inviteResponse":
          return {
            configuration: n,
            messageID: t,
            payload: e,
            type: "receiveInviteResponse",
          };
        case "localSdpRequest":
          return null;
        case "localSdpResponse":
          return {
            configuration: n,
            messageID: t,
            payload: e,
            type: "receiveLocalSdpResponse",
          };
        case "mediaUpdateRequest":
          return {
            configuration: n,
            messageID: t,
            payload: e,
            type: "receiveMediaUpdateRequest",
          };
        case "mediaUpdateResponse":
          return {
            configuration: n,
            messageID: t,
            payload: e,
            type: "receiveMediaUpdateResponse",
          };
        case "overlayConfigServerUpdateRequest":
          return {
            configuration: n,
            messageID: t,
            payload: e,
            type: "receiveOverlayConfigServerUpdateRequest",
          };
        case "participantUpdateRequest":
          return {
            configuration: n,
            messageID: t,
            payload: e,
            type: "receiveParticipantUpdateRequest",
          };
        case "participantUpdateResponse":
          return {
            configuration: n,
            messageID: t,
            payload: e,
            type: "receiveParticipantUpdateResponse",
          };
        case "pingResponse":
          return {
            configuration: n,
            messageID: t,
            payload: e,
            type: "receivePingResponse",
          };
        case "pingRequest":
          return null;
        case "remoteSdpRequest":
          return {
            configuration: n,
            messageID: t,
            payload: e,
            type: "receiveRemoteSdpRequest",
          };
        case "remoteSdpResponse":
          return {
            configuration: n,
            messageID: t,
            payload: e,
            type: "receiveRemoteSdpResponse",
          };
        case "stateSyncNotifyRequest":
          return {
            configuration: n,
            messageID: t,
            payload: e,
            type: "receiveStateSyncNotifyRequest",
          };
        case "stateSyncNotifyResponse":
          return null;
        case "stateSyncUnsubscribeRequest":
          return null;
        case "stateSyncUnsubscribeResponse":
          return {
            configuration: n,
            messageID: t,
            payload: e,
            type: "receiveStateSyncUnsubscribeResponse",
          };
        case "stateSyncUpdateRequest":
          return null;
        case "stateSyncUpdateResponse":
          return {
            configuration: n,
            messageID: t,
            payload: e,
            type: "receiveStateSyncUpdateResponse",
          };
        case "subscriptionRequest":
          return null;
        case "removeParticipantsRequest":
          return null;
        case "usersApprovalRequest":
          return null;
        case "terminateRequest":
          return {
            configuration: n,
            messageID: t,
            payload: e,
            type: "receiveTerminateRequest",
          };
        case "hangupResponse":
          return null;
        case "roomContextUpdateRequest":
          return {
            configuration: n,
            messageID: t,
            payload: e,
            type: "receiveRoomContextUpdateRequest",
          };
        case "genericDataMessageRequest":
          return {
            configuration: n,
            messageID: t,
            payload: e,
            type: "receiveGenericDataMessageRequest",
          };
        case "genericDataMessageResponse":
          return {
            configuration: n,
            messageID: t,
            payload: e,
            type: "receiveGenericDataMessageResponse",
          };
        case "wakeupRequest":
          return {
            configuration: n,
            messageID: t,
            payload: e,
            type: "receiveWakeupRequest",
          };
        case "wakeupResponse":
          return null;
        default:
          return null;
      }
    }
    i.default = e;
  },
  66,
);
