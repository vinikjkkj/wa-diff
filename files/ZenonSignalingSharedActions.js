__d(
  "ZenonSignalingSharedActions",
  [
    "ZenonAuditedCheckpointLogId",
    "ZenonDebugLogger",
    "ZenonInfraActionsLogger",
    "ZenonMWMessageTypes",
    "ZenonODSLogger",
    "ZenonSignalingTypes",
    "promiseDone",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "last_remote_media_update_version_from_version_not_equal",
      s = r("ZenonDebugLogger").getInstance();
    function u(e, t) {
      t.type !== "messageSent" &&
        e.sendSignalingEvent(
          t.payload,
          t.onSent ? t.onSent : void 0,
          t.onError ? t.onError : void 0,
        );
    }
    function c(e, t) {
      var n;
      t.type === "receiveCapabilitiesRequest" &&
        r("promiseDone")(
          e.onCapabilitiesReceived(
            t.payload.capabilities,
            (n = t.payload.escalationConferenceName) != null ? n : null,
          ),
        );
    }
    function d(e, t) {
      t.type === "receiveClientInfoRequest" &&
        r("promiseDone")(
          e.onClientInfoReceived(
            t.payload.userCapabilities,
            t.payload.actorRepresentatives,
            t.payload.mediaPath,
          ),
        );
    }
    function m(e, t) {
      if (t.type === "receiveGenericDataMessageRequest") {
        e.sendSignalingEvent({
          ackMessageId: t.messageID,
          eventName: "genericDataMessageResponse",
        });
        var n = { message: t.payload.data, sender: "" };
        r("promiseDone")(e.onGenericDataMessageReceived(t.payload.topic, n));
      }
    }
    function p(e, t) {
      if (t.type === "receiveIceCandidateRequest") {
        var n = {
          ackMessageId: t.messageID,
          eventName: "iceCandidateResponse",
        };
        e.sendSignalingEvent(n);
        var r = e.onIceCandidateReceived;
        t.payload.iceCandidates.forEach(function (e) {
          return r(e);
        });
      }
    }
    function _(e, t) {
      var n, a;
      if (t.type !== "receiveInitiateRenegotiationRequest") return {};
      var i = t.payload,
        l = i.hasRemoteOffer,
        s = i.messageTags,
        u = D(e.lastRemoteMediaUpdateVersion, t.payload.fromVersion),
        c = {
          ackMessageId: t.messageID,
          acknowledgedVersion: u
            ? (n = e.lastRemoteMediaUpdateVersion) != null
              ? n
              : 0
            : t.payload.version,
          eventName: "initiateRenegotiationResponse",
          hasRemoteOffer: l,
          messageTags: s,
          statusCode: u
            ? o("ZenonSignalingTypes").ZenonSignalingStatusCode
                .REJECTED_FROM_VERSION_DOES_NOT_MATCH
            : o("ZenonSignalingTypes").ZenonSignalingStatusCode.OK,
        };
      if (
        (e.sendSignalingEvent(c),
        t.payload.onProcessed(),
        r("ZenonInfraActionsLogger").logCheckpoint({
          auditId: r("ZenonAuditedCheckpointLogId")
            .RP_ROOMS_INFRA_WWW__STATE_MACHINE,
          checkpoint:
            "onProcessed called in ZenonSignalingSharedActions.onReceiveInitiateRenegotiationRequest",
        }),
        u)
      )
        return {};
      var d = e.signalingModel.getMediaModeManager();
      return (
        t.payload.mediaPath === o("ZenonMWMessageTypes").ZenonMWMediaPath.P2P
          ? (d.onDeescalated(),
            l
              ? (e.logEvent({ name: "renegotiationSmuReqWithOfferReceived" }),
                r("ZenonInfraActionsLogger").logCheckpoint({
                  auditId: r("ZenonAuditedCheckpointLogId")
                    .RP_ROOMS_INFRA_WWW__STATE_MACHINE,
                  checkpoint:
                    "initiateRenegotiationRequest: De-escalation callee",
                }))
              : (e.logEvent({ name: "renegotiationSmuReqWithAnswerReceived" }),
                r("ZenonInfraActionsLogger").logCheckpoint({
                  auditId: r("ZenonAuditedCheckpointLogId")
                    .RP_ROOMS_INFRA_WWW__STATE_MACHINE,
                  checkpoint:
                    "initiateRenegotiationRequest: De-escalation caller",
                })))
          : (d.onSfuEscalated(),
            r("ZenonInfraActionsLogger").logCheckpoint({
              auditId: r("ZenonAuditedCheckpointLogId")
                .RP_ROOMS_INFRA_WWW__STATE_MACHINE,
              checkpoint: "initiateRenegotiationRequest: SFU escalation",
            })),
        r("promiseDone")(e.onRenegotiationRequested(l)),
        l
          ? {}
          : M(
              (a = e.lastRemoteMediaUpdateVersion) != null ? a : null,
              t.payload.version,
            )
      );
    }
    function f(e, t) {
      if (t.type === "receiveLocalSdpResponse") {
        t.payload.source === "joinResponse" &&
          e.logEvent({ name: "inviteResponseReceived" });
        var n = t.payload.hasAnswerInJoinResponse;
        (n
          ? e.signalingModel.getMediaModeManager().onSfuEscalated()
          : e.logEvent({ name: "inviteResponseProcessed" }),
          e.logEvent({
            hasAnswerInJoinResponse: n,
            name: "setHasAnswerInJoinResponse",
          }),
          e.logEvent({ name: "startHeartbeat" }));
      }
    }
    function g(t, n) {
      if (n.type !== "receiveMediaUpdateRequest") return {};
      var a = t.lastRemoteMediaUpdateVersion,
        i = n.payload,
        l = i.mediaStates,
        u = l.fromVersion,
        c = l.version,
        d = i.messageTags,
        m = i.onProcessed;
      m &&
        (m(),
        r("ZenonInfraActionsLogger").logCheckpoint({
          auditId: r("ZenonAuditedCheckpointLogId")
            .RP_ROOMS_INFRA_WWW__STATE_MACHINE,
          checkpoint:
            "onProcessed called in ZenonSignalingSharedActions.onReceiveMediaUpdateRequest",
        }));
      var p = a != null && u != null && a !== u;
      a !== u &&
        (r("ZenonODSLogger").logCounter(e),
        s.logConsole(
          "lastRemoteMediaUpdateVersion and fromVersion are not equal",
        ));
      var _ = {
        ackMessageId: n.messageID,
        acknowledgedVersion:
          p && t.lastRemoteMediaUpdateVersion != null
            ? t.lastRemoteMediaUpdateVersion
            : n.payload.mediaStates.version,
        eventName: "mediaUpdateResponse",
        messageTags: d,
        responseStatusCode: p
          ? o("ZenonMWMessageTypes").ZenonMWResponseStatusCode
              .CONDITIONAL_REQUEST_FAILED
          : o("ZenonMWMessageTypes").ZenonMWResponseStatusCode.OK,
      };
      return (
        t.sendSignalingEvent(_),
        !p &&
        (r("promiseDone")(t.onMediaUpdateReceived(n.payload.mediaStates)),
        a == null || c > a)
          ? { lastRemoteMediaUpdateVersion: c }
          : {}
      );
    }
    function h(e, t) {
      if (t.type !== "receiveParticipantUpdateRequest") return {};
      var n = {
        ackMessageId: t.messageID,
        eventName: "participantUpdateResponse",
        requestVersionId: t.payload.versionId,
      };
      e.sendSignalingEvent(n);
      var o = e.lastParticipantUpdateVersion;
      return o == null || o < t.payload.versionId
        ? (r("promiseDone")(
            e.onParticipantUpdateReceived(
              t.payload.participantStates,
              t.payload.sctpUserIdNodeIdMap,
            ),
          ),
          { lastParticipantUpdateVersion: t.payload.versionId })
        : {};
    }
    function y(e) {
      (r("promiseDone")(e.onPendingApprovalReceived()),
        e.logEvent({ name: "pendingApproval" }));
    }
    function C(e) {
      r("promiseDone")(e.onServerRenegotiationFinished());
    }
    function b(e, t) {
      var n, a, i;
      if (t.type !== "receiveRemoteSdpRequest") return {};
      var l = D(e.lastRemoteMediaUpdateVersion, t.payload.fromVersion);
      if (((n = t.payload) == null ? void 0 : n.source) !== "joinResponse") {
        var s,
          u = {
            ackMessageId: t.messageID,
            acknowledgedVersion: l
              ? (s = e.lastRemoteMediaUpdateVersion) != null
                ? s
                : 0
              : t.payload.sdp.version,
            eventName: "remoteSdpResponse",
            messageTags: t.payload.messageTags,
            negotiateType: t.payload.negotiateType,
            statusCode: l
              ? o("ZenonSignalingTypes").ZenonSignalingStatusCode
                  .REJECTED_FROM_VERSION_DOES_NOT_MATCH
              : o("ZenonSignalingTypes").ZenonSignalingStatusCode.OK,
            type: t.payload.sdp.type,
          };
        e.sendSignalingEvent(u);
      }
      return l
        ? (t.payload.onProcessed
            ? (t.payload.onProcessed(),
              r("ZenonInfraActionsLogger").logCheckpoint({
                auditId: r("ZenonAuditedCheckpointLogId")
                  .RP_ROOMS_INFRA_WWW__STATE_MACHINE,
                checkpoint:
                  "onProcessed called in ZenonSignalingSharedActions.onReceiveRemoteSdpRequest",
              }))
            : r("ZenonInfraActionsLogger").logCheckpoint({
                auditId: r("ZenonAuditedCheckpointLogId")
                  .RP_ROOMS_INFRA_WWW__STATE_MACHINE,
                checkpoint:
                  "onProcessed is not set in ZenonSignalingSharedActions.onReceiveRemoteSdpRequest!",
              }),
          {})
        : (t.payload.source === "serverMediaUpdateRequest" &&
            t.payload.sdp.type === "answer" &&
            e.logEvent({ name: "smuWithAnswerReceived" }),
          r("promiseDone")(
            e.onSdpReceived(
              t.payload.sdp,
              t.payload.mediaPath,
              t.payload.mediaStates,
              (a = t.payload.source) != null ? a : null,
              t.payload.renegotiationOffer,
              t.payload.sdpOriginLocalId,
              t.payload.onProcessed,
              t.payload.ackMessageId,
              t.payload.e2eeServerState,
            ),
          ),
          babelHelpers.extends(
            {},
            M(
              (i = e.lastRemoteMediaUpdateVersion) != null ? i : null,
              t.payload.sdp.version,
            ),
            { lastRemoteSdpResponseMessageId: t.messageID },
          ));
    }
    function v(e, t) {
      t.type === "receiveRoomContextUpdateRequest" &&
        r("promiseDone")(e.onRoomContextUpdateReceived(t.payload.context));
    }
    function S(e, t) {
      if (t.type === "receiveStateSyncNotifyRequest") {
        var n = e.signalingModel,
          r = t.payload,
          o = r.data,
          a = r.responseRequired,
          i = r.topic,
          l = r.version;
        if (
          (n.getStateSyncStore().updateOutputState(i, { data: o, version: l }),
          n.notify(),
          a)
        ) {
          var s = {
            ackMessageId: t.messageID,
            eventName: "stateSyncNotifyResponse",
            topic: i,
            version: l,
          };
          e.sendSignalingEvent(s);
        }
      }
    }
    function R(e, t) {
      if (t.type === "receiveOverlayConfigServerUpdateRequest") {
        var n = e.signalingModel;
        (n.updateOverlayConfigServerLayer(t.payload.serverLayer), n.notify());
      }
    }
    function L(e, t) {
      var n;
      if (t.type === "receiveTerminateRequest") {
        if (
          (t.payload.fromJoinResponse === !0 &&
            e.logEvent({ name: "inviteResponseReceived" }),
          t.payload.shouldInformPeer)
        ) {
          var o = { ackMessageId: t.messageID, eventName: "dismissResponse" };
          e.sendSignalingEvent(o);
        }
        r("promiseDone")(
          e.onDismissReceived(
            e.signalingModel.getSignalingID(),
            t.payload.reason,
            (n = t.payload.subreason) != null ? n : null,
            t.payload.detailedReasonFromMW,
          ),
        );
      }
    }
    function E(e, t) {
      if (t.type !== "sendSubscriptionRequest") return {};
      var n = e.lastSubscriptions,
        r = e.sendSignalingEvent,
        o = [].concat(t.payload.subscriptions).sort(w),
        a = JSON.stringify(o);
      return (
        n !== a && r(t.payload, t.onSent, t.onError),
        { lastSubscriptions: a }
      );
    }
    function k(e, t) {
      if (t.type === "sendClientRenegotiationRequest") {
        var n = t.payload.negotiationEvent;
        e.onClientRenegotiationReceived(n);
      }
    }
    function I(e, t) {
      t.type === "sendTerminateRequest" &&
        t.payload.shouldInformPeer &&
        e.signalingModel.getRemoteSignalingID() != null &&
        e.sendSignalingEvent(t.payload, t.onSent, t.onError);
    }
    function T(e, t) {
      t.type === "sendUsersApprovalRequest" &&
        e.sendSignalingEvent(t.payload, t.onSent, t.onError);
    }
    function D(e, t) {
      return e != null && t != null && e !== t;
    }
    function x(e, t) {
      return P(e, t, !1);
    }
    function $(e, t) {
      return P(e, t, !0);
    }
    function P(e, t, n) {
      if (t.type === "receiveMediaUpdateResponse") {
        var o,
          a =
            (o = e == null ? void 0 : e.lastAckedLocalSdpVersion) != null
              ? o
              : -1,
          i = t.payload.acknowledgedVersion;
        if (
          (r("ZenonDebugLogger")
            .getInstance()
            .logConsole(
              "receiveMediaUpdate: lastAckedSdpVersion " +
                String(a) +
                ", remoteAckedVersion: " +
                String(i),
            ),
          i >= a)
        ) {
          var l, s, u;
          ((e.lastAckedLocalSdpVersion = i),
            r("promiseDone")(
              e.onMediaUpdateResponseReceived({
                cancelNegotiations: n,
                responseStatusCode:
                  (l = t.payload.responseStatusCode) != null ? l : null,
                responseSubCode:
                  (s = t.payload.responseSubCode) != null ? s : null,
                retryAfter: (u = t.payload.retryAfter) != null ? u : null,
              }),
            ));
        } else
          r("ZenonDebugLogger")
            .getInstance()
            .logConsole("mediaUpdateResponse: Ignoring old message response");
        var c = e.mediaUpdateRequestToSend;
        if (c) {
          var d = c.onError,
            m = c.onSent,
            p = c.payload,
            _ = e.sendSignalingEvent(p, m, d);
          return {
            isMediaUpdateResponsePending: !0,
            lastAckedLocalSdpVersion: e.lastAckedLocalSdpVersion,
            mediaUpdateRequestToSend: null,
            mediaUpdateRequestTransactionId: _,
          };
        } else
          return {
            isMediaUpdateResponsePending: !1,
            lastAckedLocalSdpVersion: e.lastAckedLocalSdpVersion,
            mediaUpdateRequestTransactionId: "",
          };
      }
      return {};
    }
    function N(e, t) {
      if (t.type !== "sendLocalSdpRequest") return {};
      var n = e.sendSignalingEvent(t.payload, t.onSent, t.onError);
      return { mediaUpdateRequestTransactionId: n };
    }
    function M(e, t) {
      return e == null || t > e ? { lastRemoteMediaUpdateVersion: t } : {};
    }
    function w(e, t) {
      var n, r;
      if (e.type !== t.type) return e.type - t.type;
      var o = (n = e.trackId) != null ? n : null,
        a = (r = t.trackId) != null ? r : null;
      return o === null || a === null ? 0 : o.localeCompare(a);
    }
    ((l.genericEventSender = u),
      (l.onReceiveCapabilitiesRequest = c),
      (l.onReceiveClientInfoRequest = d),
      (l.onReceiveGenericDataMessageRequest = m),
      (l.onReceiveIceCandidateRequest = p),
      (l.onReceiveInitiateRenegotiationRequest = _),
      (l.onReceiveLocalSdpResponse = f),
      (l.onReceiveMediaUpdateRequest = g),
      (l.onReceiveParticipantUpdateRequest = h),
      (l.onReceivePendingApprovalRequest = y),
      (l.onServerRenegotiationFinished = C),
      (l.onReceiveRemoteSdpRequest = b),
      (l.onReceiveRoomContextUpdateRequest = v),
      (l.onReceiveStateSyncNotifyRequest = S),
      (l.onReceiveOverlayConfigServerUpdateRequest = R),
      (l.onReceiveTerminateRequest = L),
      (l.onSendSubscriptionRequest = E),
      (l.onSendClientRenegotiationRequest = k),
      (l.onSendTerminateRequest = I),
      (l.onSendUsersApprovalRequest = T),
      (l.shouldRejectRequest = D),
      (l.onNonSDPReceiveMediaUpdateResponse = x),
      (l.onReceiveMediaUpdateResponse = $),
      (l.onSendLocalSdpRequestOffer = N));
  },
  98,
);
