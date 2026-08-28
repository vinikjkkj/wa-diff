__d(
  "ZenonMWThriftMessageTranslator",
  [
    "DGWWebConfig",
    "FBLogger",
    "MultiwayCommonTypes",
    "ZenonActorHooks",
    "ZenonMWThriftAddParticipantsTranslator",
    "ZenonMWThriftApprovalTranslator",
    "ZenonMWThriftClientEventTranslator",
    "ZenonMWThriftClientMediaUpdateTranslator",
    "ZenonMWThriftConferenceStateTranslator",
    "ZenonMWThriftDataMessageTranslator",
    "ZenonMWThriftDismissTranslator",
    "ZenonMWThriftHangupTranslator",
    "ZenonMWThriftIceCandidateTranslator",
    "ZenonMWThriftJoinTranslator",
    "ZenonMWThriftPingTranslator",
    "ZenonMWThriftRemoveParticipantsTranslator",
    "ZenonMWThriftRingTranslator",
    "ZenonMWThriftServerMediaUpdateTranslator",
    "ZenonMWThriftStateSyncTranslator",
    "ZenonMWThriftSubscriptionTranslator",
    "ZenonMWThriftTranslatorUtils",
    "ZenonMWThriftWakeupTranslator",
    "ZenonSignalingMessage",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = e.getHeader(),
        n = e.getEvents();
      if (n.length === 0)
        throw r("FBLogger")("rtc_www").mustfixThrow(
          "Unexpected Translation: called toMWThriftMessage with empty signaling events",
        );
      var a = n[0];
      switch (a.eventName) {
        case "addParticipantsRequest":
          return o(
            "ZenonMWThriftAddParticipantsTranslator",
          ).toThriftAddParticipantsRequest(t, a);
        case "clientEventRequest":
          return o(
            "ZenonMWThriftClientEventTranslator",
          ).toThriftClientEventRequest(t, a);
        case "clientInfoRequest":
          if (
            n.length >= 2 &&
            n[1].eventName === "localSdpRequest" &&
            (n[1].sdp.type === "offer" || n[1].sdp.type === "answer")
          )
            return o("ZenonMWThriftJoinTranslator").toThriftJoinRequest(
              t,
              a,
              n[1],
            );
          break;
        case "dismissResponse":
          return o("ZenonMWThriftDismissTranslator").toThriftDismissResponse(t);
        case "genericDataMessageRequest":
          return o(
            "ZenonMWThriftDataMessageTranslator",
          ).toThriftDataMessageRequest(t, a);
        case "genericDataMessageResponse":
          return o(
            "ZenonMWThriftDataMessageTranslator",
          ).toThriftDataMessageResponse(t);
        case "terminateRequest":
          return o("ZenonMWThriftHangupTranslator").toThriftHangupRequest(t, a);
        case "initiateRenegotiationResponse":
          return n.length >= 3 &&
            n[1].eventName === "remoteSdpResponse" &&
            n[2].eventName === "localSdpRequest" &&
            n[2].sdp.type === "answer"
            ? o(
                "ZenonMWThriftServerMediaUpdateTranslator",
              ).toThriftServerMediaUpdateResponse(
                t,
                n[1],
                n[2].mediaStates,
                n[2].sdp,
              )
            : o(
                "ZenonMWThriftServerMediaUpdateTranslator",
              ).toThriftServerMediaUpdateRenegotiationResponse(t, a);
        case "inviteRequest":
          if (
            n.length >= 3 &&
            n[1].eventName === "clientInfoRequest" &&
            n[2].eventName === "localSdpRequest" &&
            n[2].sdp.type === "offer"
          )
            return o("ZenonMWThriftJoinTranslator").toThriftJoinRequest(
              t,
              n[1],
              n[2],
              a,
            );
          break;
        case "inviteResponse":
          return o("ZenonMWThriftRingTranslator").toThriftRingResponse(t, a);
        case "iceCandidateRequest":
          return o(
            "ZenonMWThriftIceCandidateTranslator",
          ).toThriftIceCandidateRequest(t, a);
        case "iceCandidateResponse":
          return o(
            "ZenonMWThriftIceCandidateTranslator",
          ).toThriftIceCandidateResponse(t);
        case "participantUpdateResponse":
          return o(
            "ZenonMWThriftConferenceStateTranslator",
          ).toThriftConferenceStateResponse(t, a);
        case "localSdpRequest":
          return o(
            "ZenonMWThriftClientMediaUpdateTranslator",
          ).toThriftClientMediaUpdateRequest(t, a.mediaStates, a.sdp);
        case "mediaUpdateRequest":
          return o(
            "ZenonMWThriftClientMediaUpdateTranslator",
          ).toThriftClientMediaUpdateRequest(t, a.mediaStates);
        case "mediaUpdateResponse":
          return o(
            "ZenonMWThriftServerMediaUpdateTranslator",
          ).toThriftServerMediaUpdateNoSdpResponse(t, a);
        case "pingRequest":
          return o("ZenonMWThriftPingTranslator").toThriftPingRequest(t);
        case "remoteSdpResponse":
          return a.type === "offer" &&
            n.length >= 2 &&
            n[1].eventName === "localSdpRequest" &&
            n[1].sdp.type === "answer"
            ? n[1].mediaMode !== "p2p"
              ? o(
                  "ZenonMWThriftServerMediaUpdateTranslator",
                ).toThriftServerMediaUpdateResponse(t, a, n[1].mediaStates)
              : o(
                  "ZenonMWThriftServerMediaUpdateTranslator",
                ).toThriftServerMediaUpdateResponse(
                  t,
                  a,
                  n[1].mediaStates,
                  n[1].sdp,
                )
            : o(
                "ZenonMWThriftServerMediaUpdateTranslator",
              ).toThriftServerMediaUpdateResponse(t, a);
        case "removeParticipantsRequest":
          return o(
            "ZenonMWThriftRemoveParticipantsTranslator",
          ).toThriftRemoveParticipantsRequest(t, a);
        case "subscriptionRequest":
          return o(
            "ZenonMWThriftSubscriptionTranslator",
          ).toThriftSubscriptionRequest(t, a);
        case "stateSyncNotifyResponse":
          return o("ZenonMWThriftStateSyncTranslator").toThriftNotifyResponse(
            t,
            a,
          );
        case "stateSyncUpdateRequest":
          return o("ZenonMWThriftStateSyncTranslator").toThriftUpdateRequest(
            t,
            a,
          );
        case "stateSyncUnsubscribeRequest":
          return o(
            "ZenonMWThriftStateSyncTranslator",
          ).toThriftUnsubscribeRequest(t, a);
        case "usersApprovalRequest":
          return o("ZenonMWThriftApprovalTranslator").toThriftApprovalRequest(
            t,
            a,
          );
        case "wakeupResponse":
          return o("ZenonMWThriftWakeupTranslator").toThriftWakeupResponse(t);
      }
      return null;
    }
    function s(e) {
      var t = e.messageHeader;
      if (!u(t))
        return (
          r("FBLogger")("rtc_www").info(
            "Ignoring Thrift MW message; receiver does not match self ID",
            "rtc_www",
          ),
          null
        );
      var n = t.type,
        a = t.responseStatusCode == null,
        i = o(
          "ZenonMWThriftTranslatorUtils",
        ).mwThriftMessageHeaderToSignalingMessageHeader(t),
        l = [];
      if (n == null) return new (r("ZenonSignalingMessage"))(i, l);
      switch (n) {
        case o("MultiwayCommonTypes").MessageType.RING:
          a &&
            (l = o("ZenonMWThriftRingTranslator").fromThriftRingRequest(e, i));
          break;
        case o("MultiwayCommonTypes").MessageType.JOIN:
          a || (l = o("ZenonMWThriftJoinTranslator").fromThriftJoinResponse(e));
          break;
        case o("MultiwayCommonTypes").MessageType.CONFERENCE_STATE:
          a &&
            (l = o(
              "ZenonMWThriftConferenceStateTranslator",
            ).fromThriftConferenceStateRequest(e));
          break;
        case o("MultiwayCommonTypes").MessageType.CLIENT_MEDIA_UPDATE:
          a ||
            (l = o(
              "ZenonMWThriftClientMediaUpdateTranslator",
            ).fromThriftClientMediaUpdateResponse(e));
          break;
        case o("MultiwayCommonTypes").MessageType.HANGUP:
          a ||
            (l = o("ZenonMWThriftHangupTranslator").fromThriftHangupResponse(
              e,
            ));
          break;
        case o("MultiwayCommonTypes").MessageType.PING:
          a || (l = o("ZenonMWThriftPingTranslator").fromThriftPingResponse(e));
          break;
        case o("MultiwayCommonTypes").MessageType.ICE_CANDIDATE:
          a
            ? (l = o(
                "ZenonMWThriftIceCandidateTranslator",
              ).fromThriftIceCandidateRequest(e))
            : (l = o(
                "ZenonMWThriftIceCandidateTranslator",
              ).fromThriftIceCandidateResponse(e));
          break;
        case o("MultiwayCommonTypes").MessageType.DATA_MESSAGE:
          a &&
            (l = o(
              "ZenonMWThriftDataMessageTranslator",
            ).fromThriftDataMessageRequest(e));
          break;
        case o("MultiwayCommonTypes").MessageType.DISMISS:
          a &&
            (l = o("ZenonMWThriftDismissTranslator").fromThriftDismissRequest(
              e,
            ));
          break;
        case o("MultiwayCommonTypes").MessageType.SERVER_MEDIA_UPDATE:
          a &&
            (l = o(
              "ZenonMWThriftServerMediaUpdateTranslator",
            ).fromThriftServerMediaUpdateRequest(e));
          break;
        case o("MultiwayCommonTypes").MessageType.NOTIFY:
          a &&
            (l = o("ZenonMWThriftStateSyncTranslator").fromThriftNotifyRequest(
              e,
            ));
          break;
        case o("MultiwayCommonTypes").MessageType.UPDATE:
          a ||
            (l = o("ZenonMWThriftStateSyncTranslator").fromThriftUpdateResponse(
              e,
            ));
          break;
        case o("MultiwayCommonTypes").MessageType.UNSUBSCRIBE:
          a ||
            (l = o(
              "ZenonMWThriftStateSyncTranslator",
            ).fromThriftUnsubscribeResponse(e));
          break;
        case o("MultiwayCommonTypes").MessageType.WAKEUP:
          a &&
            (l = o("ZenonMWThriftWakeupTranslator").fromThriftWakeupRequest(e));
          break;
        default:
          break;
      }
      return new (r("ZenonSignalingMessage"))(i, l);
    }
    function u(e) {
      var t;
      return (
        o("ZenonActorHooks").ZenonActor.isInstagramUser() ||
        o("ZenonActorHooks").ZenonActor.isOculusUser() ||
        o("ZenonActorHooks").ZenonActor.isKadabraUser() ||
        o("ZenonActorHooks").ZenonActor.isLiveChatOnlyPerson() ||
        o("ZenonActorHooks").ZenonActor.isManagedMetaAccount() ||
        o("ZenonActorHooks").ZenonActor.isMDCUser() ||
        o("ZenonActorHooks").ZenonActor.isLoggedOutOculusStreamViewer() ||
        e.receiverUserId == null ||
        e.receiverUserId === o("ZenonActorHooks").ZenonActor.getID() ||
        ((t = e.receiver) == null ? void 0 : t.baseId) ===
          o("ZenonActorHooks").ZenonActor.getAccountID() ||
        e.receiverUserId === r("DGWWebConfig").fbId
      );
    }
    ((l.toMWThriftMessage = e), (l.toSignalingMessage = s));
  },
  98,
);
