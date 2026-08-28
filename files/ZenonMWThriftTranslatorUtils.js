__d(
  "ZenonMWThriftTranslatorUtils",
  [
    "FBLogger",
    "MultiwayCommonTypes",
    "MultiwaySharedTypes",
    "OverlayConfigServerLayer",
    "RequestStreamBodyUtils",
    "WebrtcSignalingCommonTypes",
    "ZenonDismissReason",
    "ZenonMWMessageTypes",
    "ZenonMWThriftMessageTagUtils",
    "ZenonParticipantState",
    "ZenonScreenShare",
    "ZenonSignalingProtocol",
    "ZenonSignalingTypes",
    "addDevTierOverridesToHeaderExtensions",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d = "signalingDominantSpeakerUpdate",
      m = "signalingVideoUploadUpdate",
      p = "E2eeState",
      _ = new Map(
        Array.from(
          o("MultiwaySharedTypes").ConferenceType.members(),
          function (e) {
            return [o("MultiwaySharedTypes").ConferenceType.getName(e), e];
          },
        ),
      );
    function f(e, t, n, r) {
      (n === void 0 && (n = !1),
        e &&
          Object.keys(e).forEach(function (o) {
            if (!(o === p && r)) {
              var a = e[o],
                i = a.data,
                l = a.version;
              if (i != null) {
                var s = {
                  data: i,
                  eventName: "stateSyncNotifyRequest",
                  responseRequired: n,
                  topic: o,
                  version: l,
                };
                t.push(s);
              }
            }
          }));
    }
    function g(e) {
      if (e) {
        var t = e[p];
        return t == null ? void 0 : t.data;
      }
    }
    function h(e) {
      if (e == null) return o("ZenonMWMessageTypes").ZenonMWMediaPath.UNKNOWN;
      switch (e) {
        case o("MultiwaySharedTypes").MediaPath.SFU:
          return o("ZenonMWMessageTypes").ZenonMWMediaPath.SFU;
        case o("MultiwaySharedTypes").MediaPath.P2P:
          return o("ZenonMWMessageTypes").ZenonMWMediaPath.P2P;
        default:
          return o("ZenonMWMessageTypes").ZenonMWMediaPath.UNKNOWN;
      }
    }
    function y(e) {
      if (e == null)
        return o("ZenonParticipantState").ZenonParticipantState.UNKNOWN;
      switch (e) {
        case o("MultiwayCommonTypes").ParticipantCallState.DISCONNECTED:
          return o("ZenonParticipantState").ZenonParticipantState.DISCONNECTED;
        case o("MultiwayCommonTypes").ParticipantCallState.NO_ANSWER:
          return o("ZenonParticipantState").ZenonParticipantState.NO_ANSWER;
        case o("MultiwayCommonTypes").ParticipantCallState.REJECTED:
          return o("ZenonParticipantState").ZenonParticipantState.REJECTED;
        case o("MultiwayCommonTypes").ParticipantCallState.UNREACHABLE:
        case o("MultiwayCommonTypes").ParticipantCallState.UNCALLABLE:
          return o("ZenonParticipantState").ZenonParticipantState.UNREACHABLE;
        case o("MultiwayCommonTypes").ParticipantCallState.CONNECTION_DROPPED:
          return o("ZenonParticipantState").ZenonParticipantState
            .CONNECTION_DROPPED;
        case o("MultiwayCommonTypes").ParticipantCallState.CONTACTING:
          return o("ZenonParticipantState").ZenonParticipantState.CONTACTING;
        case o("MultiwayCommonTypes").ParticipantCallState.RINGING:
          return o("ZenonParticipantState").ZenonParticipantState.RINGING;
        case o("MultiwayCommonTypes").ParticipantCallState.CONNECTING:
          return o("ZenonParticipantState").ZenonParticipantState.CONNECTING;
        case o("MultiwayCommonTypes").ParticipantCallState.CONNECTED:
          return o("ZenonParticipantState").ZenonParticipantState.CONNECTED;
        case o("MultiwayCommonTypes").ParticipantCallState
          .PARTICIPANT_LIMIT_REACHED:
          return o("ZenonParticipantState").ZenonParticipantState
            .PARTICIPANT_LIMIT_REACHED;
        case o("MultiwayCommonTypes").ParticipantCallState.IN_ANOTHER_CALL:
          return o("ZenonParticipantState").ZenonParticipantState
            .IN_ANOTHER_CALL;
        case o("MultiwayCommonTypes").ParticipantCallState
          .RING_TYPE_UNSUPPORTED:
          return o("ZenonParticipantState").ZenonParticipantState
            .RING_TYPE_UNSUPPORTED;
        case o("MultiwayCommonTypes").ParticipantCallState.PENDING_APPROVAL:
          return o("ZenonParticipantState").ZenonParticipantState
            .PENDING_APPROVAL;
        case o("MultiwayCommonTypes").ParticipantCallState.APPROVED:
          return o("ZenonParticipantState").ZenonParticipantState.APPROVED;
        case o("MultiwayCommonTypes").ParticipantCallState.FAILED_APPROVAL:
          return o("ZenonParticipantState").ZenonParticipantState
            .FAILED_APPROVAL;
        case o("MultiwayCommonTypes").ParticipantCallState
          .HANGUP_IN_WAITING_ROOM:
          return o("ZenonParticipantState").ZenonParticipantState
            .HANGUP_IN_WAITING_ROOM;
        default:
          return o("ZenonParticipantState").ZenonParticipantState.UNKNOWN;
      }
    }
    function C(e) {
      var t = null;
      return (
        e != null &&
          e.forEach(function (e) {
            var n,
              r = (n = e.body) == null ? void 0 : n.genericMessage;
            if (r != null && r.topic === "collision_context_payload") {
              var a = r.data;
              if (a != null) {
                var i,
                  l,
                  s,
                  u = JSON.parse(
                    o("RequestStreamBodyUtils").uint8ArrayToString(a),
                  );
                t = {
                  groupThreadID: (i = u.group_thread_id) != null ? i : null,
                  peerID: (l = u.peer_id) != null ? l : null,
                  serverInfoData: (s = u.server_info_data) != null ? s : null,
                };
              }
            }
          }),
        t
      );
    }
    function b(e) {
      var t =
        e && e.length > 0
          ? e.find(function (e) {
              var t;
              return (
                ((t = e.body) == null || (t = t.genericMessage) == null
                  ? void 0
                  : t.topic) === "room_metadata"
              );
            })
          : null;
      if (t) {
        var n,
          r =
            (n = t.body) == null || (n = n.genericMessage) == null
              ? void 0
              : n.data;
        if (r != null) {
          var a,
            i = JSON.parse(o("RequestStreamBodyUtils").uint8ArrayToString(r)),
            l = (a = t.header) == null ? void 0 : a.sender;
          if (i.link_hash != null && i.room_name != null && l != null)
            return {
              linkHash: i.link_hash,
              profileURL: i.profile_url,
              ringSubtitle: i.ring_subtitle,
              roomName: i.room_name,
              sender: l,
            };
        }
      }
      return null;
    }
    function v(e) {
      return e.reduce(function (e, t) {
        var n,
          r,
          a =
            (n = t.body) == null || (n = n.genericMessage) == null
              ? void 0
              : n.topic,
          i =
            (r = t.body) == null || (r = r.genericMessage) == null
              ? void 0
              : r.data;
        return (
          a != null &&
            i != null &&
            (e[a] = o("RequestStreamBodyUtils").uint8ArrayToString(i)),
          e
        );
      }, {});
    }
    function S(e, t, n) {
      n === void 0 && (n = 0);
      var r = { fromVersion: t, tracks: [], version: n };
      return (
        e != null &&
          Object.keys(e.tracks).forEach(function (t) {
            var n,
              o,
              a = e.tracks[t],
              i = {
                enabled: a.enabled,
                name: (n = a.name) != null ? n : "",
                participantID: (o = a.owner) != null ? o : "0",
                trackID: t,
                type: R(a.label),
              };
            r.tracks.push(i);
          }),
        r
      );
    }
    function R(e) {
      if (e == null) return null;
      switch (e) {
        case o("WebrtcSignalingCommonTypes").TrackLabel.DEFAULT_AUDIO:
          return "audio";
        case o("WebrtcSignalingCommonTypes").TrackLabel.DEFAULT_VIDEO:
          return "video";
        case o("WebrtcSignalingCommonTypes").TrackLabel.SCREEN_AUDIO:
          return "screen_audio";
        case o("WebrtcSignalingCommonTypes").TrackLabel.SCREEN_VIDEO:
          return "screen";
        default:
          return null;
      }
    }
    function L(e, t) {
      var n = r("OverlayConfigServerLayer").createFromHeader(t);
      if (n) {
        var o = {
          eventName: "overlayConfigServerUpdateRequest",
          serverLayer: n,
        };
        e.push(o);
      }
    }
    function E(e) {
      var t = e.header,
        n = e.rtcMessageBody,
        r = e.type,
        o = x(t, r),
        a = { messageBody: n, messageHeader: o };
      return a;
    }
    function k(e) {
      var t = e.header,
        n = e.rtcMessageBody,
        r = e.statusCode,
        o = e.subCode,
        a = e.type,
        i = F(t, a, r, o),
        l = { messageBody: n, messageHeader: i };
      return l;
    }
    var I = {
      IN_ANOTHER_CALL: (u = o("MultiwayCommonTypes")).DeviceStatus
        .IN_ANOTHER_CALL,
      NO_OP: null,
      NOT_SUPPORTED: u.DeviceStatus.NOT_SUPPORTED,
      OK: u.DeviceStatus.OK,
    };
    function T(e, t) {
      return Object.keys(e).map(function (n) {
        var r = e[n];
        return {
          body: {
            genericMessage: {
              data: o("RequestStreamBodyUtils").stringToUint8Array(r),
              topic: n,
            },
          },
          header: { recipients: new Set(t), topic_DEPRECATED: n },
        };
      });
    }
    function D(e) {
      var t,
        n = e.clientSessionId,
        a = e.conferenceName,
        i = e.receiver,
        l = e.receiverUserId,
        s = e.sequenceNumber,
        u = e.serverInfoData,
        c = e.transactionId,
        d = e.type;
      if (l == null) {
        var m =
          d != null
            ? o("MultiwayCommonTypes").MessageType.getName(d)
            : "UNKNOWN";
        r("FBLogger")("rpweb").info(
          "Allowing null receiverUserId for MessageType: %s",
          m,
        );
      }
      var p = n,
        _ = { userID: "2" },
        f = {
          actorID: (t = i == null ? void 0 : i.actorId) != null ? t : null,
          messageID: c,
          messageTags: o("ZenonMWThriftMessageTagUtils").fromThriftMessageTags(
            e.messageTags,
          ),
          protocol: r("ZenonSignalingProtocol").MW,
          remoteInfo: _,
          retryCount: e.retryCount,
          roomInfo: { name: a },
          sequenceNumber: Number(s),
          signalingID: p,
          userInfo: { userID: l != null ? l : "1" },
        };
      return (u != null && (f.remoteSignalingID = u), f);
    }
    function x(e, t) {
      var n,
        a,
        i,
        l = e.messageID,
        s = e.messageTags,
        u = e.remoteSignalingID,
        c = e.roomInfo,
        d = e.signalingID,
        m = r("addDevTierOverridesToHeaderExtensions")(window.location.href),
        p = {
          clientStack: o("WebrtcSignalingCommonTypes").ClientStack.ZENON,
          conferenceName: (n = c.name) != null ? n : "",
          conferenceType: O((a = c.name) != null ? a : ""),
          messageTags: new Set(
            s == null
              ? void 0
              : s.map(function (e) {
                  return o("ZenonMWThriftMessageTagUtils").toThriftMessageTag(
                    e,
                  );
                }),
          ),
          retryCount: e.retryCount,
          sequenceNumber:
            (i = e.sequenceNumber) == null ? void 0 : i.toString(),
          transactionId: l,
          type: t,
        };
      return (
        (m.multiwayCoreTier !== "" || m.multiwayWwwTier !== "") &&
          (p.extensions = m),
        d != null && (p.clientSessionId = d),
        u != null && (p.serverInfoData = u),
        e.actorID != null && (p.sender = { id: e.actorID }),
        p
      );
    }
    function $(e) {
      switch (e) {
        case o("ZenonDismissReason").ZenonDismissReason.IgnoreCall:
          return o("MultiwayCommonTypes").HangupReason.IGNORE_CALL;
        case o("ZenonDismissReason").ZenonDismissReason.HangupCall:
          return o("MultiwayCommonTypes").HangupReason.HANGUP_CALL;
        case o("ZenonDismissReason").ZenonDismissReason.NoAnswerTimeout:
          return o("MultiwayCommonTypes").HangupReason.NO_ANSWER_TIMEOUT;
        case o("ZenonDismissReason").ZenonDismissReason.ClientError:
          return o("MultiwayCommonTypes").HangupReason.CLIENT_ERROR;
        case o("ZenonDismissReason").ZenonDismissReason.InAnotherCall:
          return o("MultiwayCommonTypes").HangupReason.IN_ANOTHER_CALL;
        case o("ZenonDismissReason").ZenonDismissReason.ClientInterrupted:
          return o("MultiwayCommonTypes").HangupReason.CLIENT_INTERRUPTED;
        case o("ZenonDismissReason").ZenonDismissReason.SessionMigrated:
          return o("MultiwayCommonTypes").HangupReason.SESSION_MIGRATED;
        default:
          return o("MultiwayCommonTypes").HangupReason.HANGUP_CALL;
      }
    }
    function P(e) {
      var t,
        n = (t = e.message.body) != null ? t : {},
        r = n.dominantSpeakerSignalingInfo,
        a = n.genericMessage,
        i = n.videoUploadSignalingInfo;
      return a
        ? o("RequestStreamBodyUtils").uint8ArrayToString(a.data)
        : r
          ? JSON.stringify(r)
          : i
            ? JSON.stringify(i)
            : null;
    }
    function N(e) {
      var t,
        n = (t = e.message.body) != null ? t : {},
        r = n.dominantSpeakerSignalingInfo,
        o = n.genericMessage,
        a = n.videoUploadSignalingInfo;
      return o ? o.topic : r ? d : a ? m : null;
    }
    function M(e) {
      return e == null
        ? null
        : e === 1
          ? o("MultiwaySharedTypes").EndpointServiceType.COMPOSITING_SERVICE
          : o("MultiwaySharedTypes").EndpointServiceType.UNKNOWN;
    }
    function w(e) {
      var t = A(e);
      return t != null
        ? t
        : o("ZenonDismissReason").ZenonDismissReason.CallEnded;
    }
    function A(e) {
      if (e == null) return null;
      switch (e) {
        case o("MultiwayCommonTypes").DismissReason.CALL_ENDED:
          return o("ZenonDismissReason").ZenonDismissReason.CallEnded;
        case o("MultiwayCommonTypes").DismissReason.ANSWERED_ON_ANOTHER_DEVICE:
          return o("ZenonDismissReason").ZenonDismissReason
            .AnsweredOnAnotherDevice;
        case o("MultiwayCommonTypes").DismissReason.ANSWERED_BY_OTHER_USER:
          return o("ZenonDismissReason").ZenonDismissReason.AnsweredByOtherUser;
        case o("MultiwayCommonTypes").DismissReason.IN_ANOTHER_CALL:
          return o("ZenonDismissReason").ZenonDismissReason.InAnotherCall;
        case o("MultiwayCommonTypes").DismissReason.CONNECTION_DROPPED:
          return o("ZenonDismissReason").ZenonDismissReason.ConnectionDropped;
        case o("MultiwayCommonTypes").DismissReason.PRIMARY_ENDPOINT_HANGUP:
          return o("ZenonDismissReason").ZenonDismissReason.HangupCall;
        case o("MultiwayCommonTypes").DismissReason.REJECTED_ON_ANOTHER_DEVICE:
          return o("ZenonDismissReason").ZenonDismissReason
            .RejectedOnAnotherDevice;
        case o("MultiwayCommonTypes").DismissReason.REMOVED_BY_PARTICIPANT:
          return o("ZenonDismissReason").ZenonDismissReason
            .RemovedByParticipant;
        case o("MultiwayCommonTypes").DismissReason.REJECTED_BY_CALLEE:
          return o("ZenonDismissReason").ZenonDismissReason.RejectedByCallee;
        case o("MultiwayCommonTypes").DismissReason.INTERNAL_ERROR:
          return o("ZenonDismissReason").ZenonDismissReason
            .SignalingMessageFailed;
        case o("MultiwayCommonTypes").DismissReason.CALL_ENDED_BY_PRODUCT:
          return o("ZenonDismissReason").ZenonDismissReason.CallEndedByProduct;
        case o("MultiwayCommonTypes").DismissReason.TX_ACK_TIMEDOUT:
          return o("ZenonDismissReason").ZenonDismissReason.TxAckTimeout;
        default:
          return null;
      }
    }
    function F(e, t, n, r) {
      var a = x(e, t);
      return (
        (a.responseStatusCode =
          n != null ? n : o("MultiwayCommonTypes").RtcResponseStatusCode.OK),
        (a.responseSubCode = r),
        a
      );
    }
    function O(e) {
      var t,
        n = e.indexOf(":");
      if (n === -1) return null;
      var r = e.slice(0, n);
      return (t = _.get(r)) != null ? t : null;
    }
    function B(e) {
      var t = {},
        n = !o("ZenonScreenShare").screenShareWithReplaceTrack();
      return (
        e.tracks.forEach(function (e) {
          var r = {
              customAudioContentType: o("WebrtcSignalingCommonTypes")
                .CustomAudioContentType.NONE,
              customVideoContentType: o("WebrtcSignalingCommonTypes")
                .CustomVideoContentType.NONE,
              enabled: e.enabled,
            },
            a = n ? G(e.type) : null;
          (a != null && (r.label = a), (t[e.trackID] = r));
        }),
        { tracks: t }
      );
    }
    function W(e) {
      var t = I[e];
      return t != null ? t : o("MultiwayCommonTypes").DeviceStatus.OK;
    }
    function q(e) {
      var t = {};
      return (
        e.tracks.forEach(function (e) {
          t[e.trackID] = e.enabled;
        }),
        t
      );
    }
    function U(e) {
      return j[e];
    }
    function V(e) {
      return e == null ? null : K[e];
    }
    function H(e) {
      var t = {};
      return (
        e.forEach(function (e, n) {
          t[n] = { data: e.data, version: e.version };
        }),
        t
      );
    }
    function G(e) {
      switch (e) {
        case "audio":
          return o("WebrtcSignalingCommonTypes").TrackLabel.DEFAULT_AUDIO;
        case "video":
          return o("WebrtcSignalingCommonTypes").TrackLabel.DEFAULT_VIDEO;
        case "screen":
          return o("WebrtcSignalingCommonTypes").TrackLabel.SCREEN_VIDEO;
        case "screen_audio":
          return o("WebrtcSignalingCommonTypes").TrackLabel.SCREEN_AUDIO;
        default:
          return null;
      }
    }
    function z(e) {
      return e ===
        o("MultiwaySharedTypes").EndpointServiceType.COMPOSITING_SERVICE
        ? 1
        : 0;
    }
    var j = Object.freeze(
        ((e = {}),
        (e[(c = o("ZenonSignalingTypes")).ZenonSignalingStatusCode.OK] =
          u.RtcResponseStatusCode.OK),
        (e[c.ZenonSignalingStatusCode.REJECTED_FROM_VERSION_DOES_NOT_MATCH] =
          u.RtcResponseStatusCode.CONDITIONAL_REQUEST_FAILED),
        (e[c.ZenonSignalingStatusCode.METHOD_NOT_ALLOWED] =
          u.RtcResponseStatusCode.METHOD_NOT_ALLOWED),
        e),
      ),
      K = Object.freeze(
        ((s = {}),
        (s[c.ZenonSignalingStatusSubCode.CLIENT_TERMINATED] =
          u.RtcResponseSubCode.CLIENT_TERMINATED),
        s),
      );
    ((l.addThriftStateStoreSignalingEvents = f),
      (l.fetchE2eeServerState = g),
      (l.fromThriftMediaPath = h),
      (l.fromThriftParticipantState = y),
      (l.getCollisionContextFromThriftAppMessages = C),
      (l.getRoomMetadataFromThriftAppMessages = b),
      (l.mwThriftAppMessagesToSignalingAppMessages = v),
      (l.toZenonMediaStatesFromThrift = S),
      (l.maybeAddOverlayConfigServerUpdateRequestFromThrift = L),
      (l.createMWThriftRequest = E),
      (l.createMWThriftResponse = k),
      (l.signalingMessageAppMessagesToThriftMWAppMessages = T),
      (l.mwThriftMessageHeaderToSignalingMessageHeader = D),
      (l.toMWThriftHangupReason = $),
      (l.getGenericMWThriftDataMessageData = P),
      (l.getGenericMWThriftDataMessageTopic = N),
      (l.toThriftServiceRecipient = M),
      (l.fromMWThriftDismissReason = w),
      (l.getConferenceTypeFromName = O),
      (l.toThriftMWMediaStatusEx = B),
      (l.toMWThriftDeviceStatus = W),
      (l.toMWThriftMediaStatus = q),
      (l.toMWThriftResponseStatusCode = U),
      (l.toMWThriftResponseStatusSubCode = V),
      (l.toThriftMWSyncStateStore = H),
      (l.toMWThriftTrackLabel = G),
      (l.toServiceRecipientType = z));
  },
  98,
);
