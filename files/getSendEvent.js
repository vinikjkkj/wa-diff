__d(
  "getSendEvent",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e, t, n) {
      switch (e.eventName) {
        case "addParticipantsRequest":
          return {
            onError: n,
            onSent: t,
            payload: e,
            type: "sendAddParticipantsRequest",
          };
        case "addParticipantsResponse":
          return {
            onError: n,
            onSent: t,
            payload: e,
            type: "sendAddParticipantsResponse",
          };
        case "answerIntentRequest":
          return {
            onError: n,
            onSent: t,
            payload: e,
            type: "sendAnswerIntentRequest",
          };
        case "usersApprovalRequest":
          return {
            onError: n,
            onSent: t,
            payload: e,
            type: "sendUsersApprovalRequest",
          };
        case "capabilitiesRequest":
          return {
            onError: n,
            onSent: t,
            payload: e,
            type: "sendCapabilitiesRequest",
          };
        case "clientEventRequest":
          return {
            onError: n,
            onSent: t,
            payload: e,
            type: "sendClientEventRequest",
          };
        case "clientInfoRequest":
          return {
            onError: n,
            onSent: t,
            payload: e,
            type: "sendClientInfoRequest",
          };
        case "clientRenegotiationRequest":
          return {
            onError: n,
            onSent: t,
            payload: e,
            type: "sendClientRenegotiationRequest",
          };
        case "dismissResponse":
          return {
            onError: n,
            onSent: t,
            payload: e,
            type: "sendDismissResponse",
          };
        case "iceCandidateRequest":
          return {
            onError: n,
            onSent: t,
            payload: e,
            type: "sendIceCandidateRequest",
          };
        case "iceCandidateResponse":
          return {
            onError: n,
            onSent: t,
            payload: e,
            type: "sendIceCandidateResponse",
          };
        case "initiateRenegotiationRequest":
          return null;
        case "initiateRenegotiationResponse":
          return {
            onError: n,
            onSent: t,
            payload: e,
            type: "sendInitiateRenegotiationResponse",
          };
        case "inviteRequest":
          return {
            onError: n,
            onSent: t,
            payload: e,
            type: "sendInviteRequest",
          };
        case "inviteResponse":
          return {
            onError: n,
            onSent: t,
            payload: e,
            type: "sendInviteResponse",
          };
        case "localSdpRequest":
          return {
            onError: n,
            onSent: t,
            payload: e,
            type: "sendLocalSdpRequest",
          };
        case "localSdpResponse":
          return {
            onError: n,
            onSent: t,
            payload: e,
            type: "sendLocalSdpResponse",
          };
        case "mediaUpdateRequest":
          return {
            onError: n,
            onSent: t,
            payload: e,
            type: "sendMediaUpdateRequest",
          };
        case "mediaUpdateResponse":
          return {
            onError: n,
            onSent: t,
            payload: e,
            type: "sendMediaUpdateResponse",
          };
        case "overlayConfigServerUpdateRequest":
          return {
            onError: n,
            onSent: t,
            payload: e,
            type: "sendOverlayConfigServerUpdateRequest",
          };
        case "participantUpdateRequest":
          return {
            onError: n,
            onSent: t,
            payload: e,
            type: "sendParticipantUpdateRequest",
          };
        case "participantUpdateResponse":
          return {
            onError: n,
            onSent: t,
            payload: e,
            type: "sendParticipantUpdateResponse",
          };
        case "pingResponse":
          return null;
        case "pingRequest":
          return { onError: n, onSent: t, payload: e, type: "sendPingRequest" };
        case "remoteSdpRequest":
          return null;
        case "remoteSdpResponse":
          return {
            onError: n,
            onSent: t,
            payload: e,
            type: "sendRemoteSdpResponse",
          };
        case "subscriptionRequest":
          return {
            onError: n,
            onSent: t,
            payload: e,
            type: "sendSubscriptionRequest",
          };
        case "removeParticipantsRequest":
          return {
            onError: n,
            onSent: t,
            payload: e,
            type: "sendRemoveParticipantsRequest",
          };
        case "stateSyncNotifyRequest":
          return null;
        case "stateSyncNotifyResponse":
          return {
            onError: n,
            onSent: t,
            payload: e,
            type: "sendStateSyncNotifyResponse",
          };
        case "stateSyncUnsubscribeRequest":
          return {
            onError: n,
            onSent: t,
            payload: e,
            type: "sendStateSyncUnsubscribeRequest",
          };
        case "stateSyncUnsubscribeResponse":
          return null;
        case "stateSyncUpdateRequest":
          return {
            onError: n,
            onSent: t,
            payload: e,
            type: "sendStateSyncUpdateRequest",
          };
        case "stateSyncUpdateResponse":
          return null;
        case "terminateRequest":
          return {
            onError: n,
            onSent: t,
            payload: e,
            type: "sendTerminateRequest",
          };
        case "hangupResponse":
          return null;
        case "roomContextUpdateRequest":
          return null;
        case "genericDataMessageRequest":
          return {
            onError: n,
            onSent: t,
            payload: e,
            type: "sendGenericDataMessageRequest",
          };
        case "pendingApprovalRequest":
          return null;
        case "genericDataMessageResponse":
          return {
            onError: n,
            onSent: t,
            payload: e,
            type: "sendGenericDataMessageResponse",
          };
        case "wakeupRequest":
          return null;
        case "wakeupResponse":
          return {
            onError: n,
            onSent: t,
            payload: e,
            type: "sendWakeupResponse",
          };
        default:
          return null;
      }
    }
    i.default = e;
  },
  66,
);
