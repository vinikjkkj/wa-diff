__d(
  "ZenonMWThriftRingTranslator",
  [
    "MultiwayCommonTypes",
    "MultiwaySharedTypes",
    "ZenonMWCommonUtils",
    "ZenonMWThriftTranslatorUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      if (t)
        return {
          groupThreadID: t.groupThreadId,
          peerID: t.peerId,
          serverInfoData: n,
        };
      var r = o(
        "ZenonMWThriftTranslatorUtils",
      ).getCollisionContextFromThriftAppMessages(e);
      return (
        r && (r.serverInfoData = n),
        r != null ? r : { groupThreadID: null, peerID: null, serverInfoData: n }
      );
    }
    function s(t, n) {
      var r = [],
        a = t.messageBody,
        i = t.messageHeader,
        l = a.ringRequest;
      if (l) {
        var s,
          u,
          c,
          d = l.appMessages,
          m = l.caller,
          p = l.e2eeEnforcement,
          _ = l.otherParticipants,
          f = l.ringType,
          g = l.sdpOriginLocalId,
          h = l.threadIdInfo,
          y = m,
          C =
            f === o("MultiwayCommonTypes").RingType.PEER_VIDEO_CALL ||
            f === o("MultiwayCommonTypes").RingType.GROUP_VIDEO_CALL ||
            f === o("MultiwayCommonTypes").RingType.LIVE_STREAM ||
            f === o("MultiwayCommonTypes").RingType.PEER_ESCALATED_AUDIO_CALL,
          b = i.conferenceName,
          v = i.serverInfoData,
          S = e(d, h, v),
          R = o(
            "ZenonMWThriftTranslatorUtils",
          ).getRoomMetadataFromThriftAppMessages(d),
          L = {
            actorID: n.actorID,
            e2eeInfraMandatedExpStatus:
              p == null ? void 0 : p.infraMandatedExpStatus,
            eventName: "inviteRequest",
            inviterID: y,
            isE2eeMandated:
              (p == null ? void 0 : p.mode) ===
              o("MultiwaySharedTypes").E2eeMode.E2EE_MANDATED,
            isRemoteOfferer: !1,
            otherParticipants: Array.from(_),
            requestingVideo: C,
            roomInfo: babelHelpers.extends(
              { context: S, name: b },
              R == null ? {} : { room: R, sender: R.sender },
            ),
            userID: n.userInfo.userID,
          };
        (v != null && (L.serverInfoData = v),
          d != null &&
            (L.appMessages = o(
              "ZenonMWThriftTranslatorUtils",
            ).mwThriftAppMessagesToSignalingAppMessages(d)),
          r.push(L));
        var E =
            (s = (u = l.offer) == null ? void 0 : u.sdpString) != null ? s : "",
          k = (c = l.mediaStatusEx) != null ? c : null;
        if (E !== "" && k != null) {
          var I = {
              sdp: E,
              type: "offer",
              version: o("ZenonMWCommonUtils").getSdpVersion(E),
            },
            T = o("ZenonMWThriftTranslatorUtils").toZenonMediaStatesFromThrift(
              k,
            ),
            D = {
              eventName: "remoteSdpRequest",
              mediaPath: o("ZenonMWThriftTranslatorUtils").fromThriftMediaPath(
                l.mediaPath,
              ),
              mediaStates: T,
              negotiateType: !1,
              sdp: I,
              sdpOriginLocalId: g,
              source: "ringRequest",
            };
          r.push(D);
        }
      }
      return r;
    }
    function u(e, t) {
      var n = t.status;
      n === "IN_ANOTHER_CALL" && (e.signalingID = null);
      var r = o("ZenonMWThriftTranslatorUtils").toMWThriftDeviceStatus(n),
        a = { deviceStatus: r };
      return o("ZenonMWThriftTranslatorUtils").createMWThriftResponse({
        header: e,
        rtcMessageBody: { ringResponse: a },
        type: o("MultiwayCommonTypes").MessageType.RING,
      });
    }
    ((l.fromThriftRingRequest = s), (l.toThriftRingResponse = u));
  },
  98,
);
