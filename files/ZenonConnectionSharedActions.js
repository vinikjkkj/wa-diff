__d(
  "ZenonConnectionSharedActions",
  [
    "DateConsts",
    "Promise",
    "RTCIceCandidate",
    "ZenonActorHooks",
    "ZenonAppProvider",
    "ZenonAuditedCheckpointLogId",
    "ZenonBrowsers",
    "ZenonDismissReason",
    "ZenonE2ee",
    "ZenonInfraActionsLogger",
    "ZenonMWMessageTypes",
    "ZenonParticipantState",
    "ZenonPeerConnectionConstants",
    "ZenonSCTPConstants",
    "ZenonTransportType",
    "performanceNow",
    "promiseDone",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = 1 * o("DateConsts").MS_PER_SEC;
    function c(e, t) {
      if (t.type === "addParticipants") {
        var n = !1,
          a = t.payload,
          i = a.groupThreadId,
          l = a.usersToRing;
        (e.updateConnectionModel(function (e) {
          var t = e.getConsolidatedParticipantStates();
          l.forEach(function (r) {
            V(r, t) ||
              (e.updateParticipantState(
                r,
                o("ZenonParticipantState").ZenonParticipantState.CONTACTING,
              ),
              (n = !0));
          });
        }),
          n
            ? r("promiseDone")(
                e.signalingClient.sendAddParticipantsMessage(l, i),
                t.onSuccess,
                t.onError,
              )
            : t.onSuccess());
      }
    }
    function d(e, t) {
      if (t.type === "answerReady") {
        var n = t.payload,
          o = n.mediaStates,
          a = n.sdp;
        (e.logEvent({ name: "answerSent" }),
          r("promiseDone")(e.signalingClient.sendSdp(a, o)));
      }
    }
    function m(e, t) {
      if (t.type === "capabilitiesReceived") {
        var n = t.payload.capabilities;
        e.updateConnectionModel(function (e) {
          e.updateCurrentUserCapabilities(n);
        });
      }
    }
    function p(e, t) {
      if (t.type === "clientInfoReceived") {
        var n = t.payload,
          r = n.actorRepresentatives,
          a = n.mediaPath,
          i = n.userCapabilities;
        (e.updateConnectionModel(function (e) {
          e.updateAllParticipantsCapabilities(i);
        }),
          e.updateConnectionModel(function (e) {
            r.forEach(function (t, n) {
              e.actorRepresentatives.set(n, t);
            });
          }),
          a !== o("ZenonMWMessageTypes").ZenonMWMediaPath.UNKNOWN &&
            e.logEvent({ mediaPath: a, name: "setMediaPath" }));
      }
    }
    function _(e, t) {
      if (!(t.type !== "connectionDestroyed" || t.payload.error === null)) {
        var n = o("ZenonDismissReason").mediaErrorToDismissReason(
          t.payload.error,
        );
        (e.updateConnectionModel(function (e) {
          (e.updateParticipantState(
            e.selfParticipantID,
            o("ZenonParticipantState").ZenonParticipantState.DISCONNECTED,
          ),
            (e.dismissDetails = { dismissReason: n }));
        }),
          r("promiseDone")(r("ZenonE2ee").freeCallScopedResources()),
          r("promiseDone")(e.signalingClient.sendDismiss(n)),
          e.logEvent({ name: "connectionDestroyed" }),
          e.logEvent({
            endCallReason: n,
            endCallSubreason: t.payload.error ? t.payload.error : "",
            isRemoteEnded: !1,
            name: "callEnded",
          }));
      }
    }
    function f(e, t) {
      if (t.type !== "connectionDropped") return {};
      var n = (s || (s = r("performanceNow")))();
      return (
        e.updateConnectionModel(function (e) {
          V(e.selfParticipantID, e.getConsolidatedParticipantStates()) &&
            e.updateParticipantState(
              e.selfParticipantID,
              o("ZenonParticipantState").ZenonParticipantState.CONNECTING,
            );
        }),
        { disconnectTime: n, mediaConnectedBeforeAnswer: !1 }
      );
    }
    function g(e, t) {
      if (t.type !== "createDataMessageSubscription") return {};
      var n = t.payload.dataChannelLabel,
        a = t.payload.messageHandler,
        i = t.payload.onSctpChannelOpenCallback,
        l = new Map(e.dataMessageSubscriptions),
        s = new Set(l.get(n));
      (s.add(a), l.set(n, s));
      var u = e.signalingClient
          .getSignalingModel()
          .getMediaModeManager()
          .getMediaMode(),
        c = e.peerConnectionManager.getDataChannelOpenCount() > 0,
        d =
          u === "sfu" ||
          (u === "p2p" && o("ZenonBrowsers").isMidCallSCTPSupported()) ||
          c;
      return (
        d &&
          r("promiseDone")(
            e.peerConnectionManager.createDataChannel(
              n,
              u,
              t.payload.dataChannelOptions,
            ),
          ),
        i != null && e.peerConnectionManager.subscribeDataChannelOpen(i, n),
        t.onSuccess(),
        { dataMessageSubscriptions: l }
      );
    }
    function h(e, t) {
      if (t.type === "dataMessageReceived") {
        var n = e.signalingClient
            .getSignalingModel()
            .getMediaModeManager()
            .getMediaMode(),
          r = t.payload,
          a = r.dataChannelLabel,
          i = r.dataMessage,
          l = r.peerConnectionRole;
        if (
          !(
            n === "p2p" &&
            l != null &&
            !o("ZenonSCTPConstants").P2P_ALLOWED_DATA_CHANNELS.has(a)
          )
        ) {
          var s = e.dataMessageSubscriptions.get(a);
          s &&
            s.forEach(function (e) {
              return e(i);
            });
        }
      }
    }
    function y(t, a) {
      if (a.type === "endConnection") {
        var i = (s || (s = r("performanceNow")))(),
          l = a.payload,
          c = l.detailedReasonFromMW,
          d = l.dismissReason,
          m = l.dismissReasonSetByRemote,
          p = l.dismissSubreason,
          _ = l.shouldInformPeer;
        t.updateConnectionModel(function (e) {
          (e.getConsolidatedParticipantStates().forEach(function (t, n) {
            e.updateParticipantState(
              n,
              o("ZenonParticipantState").ZenonParticipantState.DISCONNECTED,
            );
          }),
            (e.dismissDetails = {
              detailedReasonFromMW: c,
              dismissReason: d,
              dismissSubreason: p,
            }));
        });
        var f = [];
        (f.push(r("ZenonE2ee").freeCallScopedResources()),
          _ && f.push(t.signalingClient.sendDismiss(d)));
        var g = p;
        (i - t.disconnectTime < u &&
          (g =
            g != null
              ? g.concat(", disconnect less than 1 second")
              : "disconnect less than 1 second"),
          t.logEvent({
            endCallReason: d,
            endCallSubreason: g,
            isRemoteEnded: m,
            name: "callEnded",
          }),
          r("ZenonInfraActionsLogger").logCheckpointEmployeesTestUsersOnly({
            checkpoint:
              "Issuing end call to peer connection due to dismiss received",
          }),
          f.push(t.peerConnectionManager.end(!0)),
          r("promiseDone")(
            (e || (e = n("Promise"))).all(f).then(function () {
              r("promiseDone")(t.signalingClient.closeTransport());
            }),
            a.onSuccess,
            a.onError,
          ));
      }
    }
    function C(e, t) {
      t.type === "forceEncodingEnabled" &&
        r("promiseDone")(
          e.peerConnectionManager.forceEncodingEnabled(t.payload.enabled),
          t.onSuccess,
          t.onError,
        );
    }
    function b(e, t) {
      var n, o;
      if (t.type === "iceCandidateReady") {
        var a = t.payload.candidate,
          i = {
            candidateSdpString: a.candidate,
            sdpMid: (n = a.sdpMid) != null ? n : "",
            sdpMLineIndex: (o = a.sdpMLineIndex) != null ? o : 0,
          };
        r("promiseDone")(e.signalingClient.sendIceCandidate(i));
      }
    }
    function v(e, t) {
      if (t.type === "iceCandidateReceived") {
        var n = t.payload,
          o = {
            candidate: n.candidateSdpString,
            sdpMid: n.sdpMid,
            sdpMLineIndex: n.sdpMLineIndex,
          },
          a = e.activePeerConnection,
          i = e.peerConnectionManager,
          l = e.secondaryPeerConnectionManager,
          s = a === "primary" ? i : l;
        r("promiseDone")(
          s.applyRemoteIceCandidate(new (r("RTCIceCandidate"))(o)),
        );
      }
    }
    function S(e, t) {
      if (t.type === "mediaStateUpdateProcessing") {
        var n = t.payload,
          o = n.enabled,
          a = n.isRemote,
          i = n.trackID;
        a
          ? r("promiseDone")(
              o
                ? e.peerConnectionManager.unmuteRemoteTrack(i)
                : e.peerConnectionManager.muteRemoteTrack(i),
              t.onSuccess,
              t.onError,
            )
          : r("promiseDone")(
              o
                ? e.peerConnectionManager.unmuteLocalTrack(i)
                : e.peerConnectionManager.muteLocalTrack(i),
              t.onSuccess,
              t.onError,
            );
      }
    }
    function R(e, t) {
      t.type === "localMediaStateUpdateReady" &&
        r("promiseDone")(
          e.signalingClient.sendMediaUpdate(t.payload.mediaStates),
          t.onSuccess,
          t.onError,
        );
    }
    function L(e, t) {
      t.type === "mediaUpdateReceived" &&
        r("promiseDone")(
          e.peerConnectionManager.applyMediaUpdate(t.payload.mediaStates),
        );
    }
    function E(e, t) {
      if (t.type === "mediaUpdateResponseReceived") {
        var n = t.payload,
          a = n.cancelNegotiations,
          i = n.responseStatusCode,
          l = n.responseSubCode,
          s = n.retryAfter;
        if (
          l != null &&
          i !== o("ZenonMWMessageTypes").ZenonMWResponseStatusCode.OK
        ) {
          a &&
            r("promiseDone")(
              e.peerConnectionManager.cancelPendingNegotiation(),
            );
          var u = new Set([
            o("ZenonMWMessageTypes").ZenonMWResponseSubCode
              .REJECTING_CMU_WHEN_SMU_PENDING,
            o("ZenonMWMessageTypes").ZenonMWResponseSubCode
              .CONFLICTING_MEDIA_PATH,
            o("ZenonMWMessageTypes").ZenonMWResponseSubCode
              .CONFLICTING_MEDIA_STATUS,
            o("ZenonMWMessageTypes").ZenonMWResponseSubCode
              .CONFLICTING_SESSION_DESCRIPTION,
            o("ZenonMWMessageTypes").ZenonMWResponseSubCode.UNKNOWN,
          ]);
          u.has(l) &&
            r("promiseDone")(
              e.peerConnectionManager.localMediaStateUpdateRetry(
                s != null ? s : 0,
              ),
            );
        } else e.peerConnectionManager.clearRetryCount();
      }
    }
    function k(e, t) {
      if (t.type === "addLocalTracks") {
        var n = t.onError,
          o = t.onSuccess,
          a = t.payload,
          i = {
            onError: n,
            onSuccess: o,
            payload: a,
            type: "initiateAddLocalTracks",
          };
        r("promiseDone")(e.signalingClient.initiateClientRenegotiation(i));
      } else if (t.type === "removeLocalTrack") {
        var l = t.onError,
          s = t.onSuccess,
          u = t.payload,
          c = {
            onError: l,
            onSuccess: s,
            payload: u,
            type: "initiateRemoveLocalTrack",
          };
        r("promiseDone")(e.signalingClient.initiateClientRenegotiation(c));
      }
    }
    function I(e, t) {
      t.type === "offerReady" &&
        (t.payload.connectionDirection === "incoming" &&
          e.logEvent({ name: "answerSent" }),
        r("promiseDone")(
          e.signalingClient.sendSdp(t.payload.sdp, t.payload.mediaStates),
        ));
    }
    function T(e, t) {
      t.type === "offerReady" &&
        (r("promiseDone")(e.peerConnectionManager.cancelPendingNegotiation()),
        r("promiseDone")(
          e.peerConnectionManager.localMediaStateUpdateRetry(0),
        ));
    }
    function D(e, t) {
      if (t.type === "participantUpdateReceived") {
        var n = t.payload,
          r = n.participantStates,
          o = n.sctpUserIdNodeIdMap;
        (e.updateConnectionModel(function (t) {
          (t.updateFromUserIdToNodeIdMap(o),
            r.forEach(function (n, r) {
              r !== t.selfParticipantID &&
                (t.updateParticipantState(r, n),
                H(n) && e.logEvent({ name: "atLeastOneParticipantAlerted" }),
                G(n) &&
                  (e.logEvent({ name: "atLeastOneParticipantAnswered" }),
                  t.updatePreferredCaptureConfigs()));
            }));
        }),
          j(e.getConnectionModel()));
      }
    }
    function x(e, t) {
      if (t.type !== "removeDataMessageSubscription") return {};
      var n = t.payload.dataChannelLabel,
        r = t.payload.messageHandler,
        o = new Map(e.dataMessageSubscriptions),
        a = new Set(o.get(n));
      return (
        a.delete(r),
        o.set(n, a),
        t.onSuccess(),
        { dataMessageSubscriptions: o }
      );
    }
    function $(e, t) {
      if (t.type === "removeParticipants") {
        var n = t.payload.usersToRemove;
        r("promiseDone")(
          e.signalingClient.sendRemoveParticipantsRequest(n),
          t.onSuccess,
          t.onError,
        );
      }
    }
    function P(e, t) {
      if (t.type === "connectionRoomUpdateReceived") {
        var n = t.payload.context;
        e.updateConnectionModel(function (e) {
          e.collisionContext = n;
        });
      }
    }
    function N(e, t) {
      if (t.type === "sdpReceived") {
        var n = t.payload,
          o = n.e2eeServerState,
          a = n.mediaStates,
          i = n.messageID,
          l = n.onProcessed,
          s = n.renegotiationOffer,
          u = n.sdp,
          c = n.sdpOriginLocalId,
          d = n.source;
        (r("promiseDone")(
          e.peerConnectionManager.applyRemoteSdp(u, a, d, s, c, l, i, o),
        ),
          e.updateConnectionModel(function (e) {
            (e.updateTrackMapFromMediaStates(a.tracks, u.type === "pranswer"),
              e.updateExistingParticipantsFromMediaStateTracks(a.tracks));
            var t = [],
              n = e.getRemoteUserToTracksMap();
            (n.forEach(function (e, n) {
              var r = Array.from(e.entries());
              ((r = r.filter(function (e) {
                var t = e[0],
                  n = e[1];
                return n.type !== "audio";
              })),
                r.length > 0 && t.push(n));
            }),
              U(e, t));
          }),
          u.type === "answer"
            ? e.logEvent({ name: "answerSdpReceived" })
            : u.type === "offer"
              ? e.logEvent({ name: "offerSdpReceived" })
              : u.type === "pranswer" &&
                e.logEvent({ name: "prAnswerSdpReceived" }));
        var m = z(e.currentSubscriptionRequest, e);
        X(m, e, t);
      }
    }
    function M(e, t) {
      var n, a, i, l;
      if (t.type === "sendGenericDataMessage") {
        var s = t.onError,
          u = t.onSuccess,
          c = t.payload,
          d = c.data,
          m = c.recipients,
          p = c.topic,
          _ = c.transportType;
        switch (_) {
          case o("ZenonTransportType").ZenonTransportType.SIGNALING:
            r("promiseDone")(
              W(
                e,
                p,
                d,
                (n = m.recipientIDs) != null ? n : [],
                (a = m.serviceRecipients) != null ? a : [],
              ),
              u,
              s,
            );
            break;
          case o("ZenonTransportType").ZenonTransportType.SCTP:
            r("promiseDone")(q(e, p, d, m), u, s);
            break;
          case o("ZenonTransportType").ZenonTransportType.SIGNALING_AND_SCTP:
            (r("promiseDone")(
              W(
                e,
                p,
                d,
                (i = m.recipientIDs) != null ? i : [],
                (l = m.serviceRecipients) != null ? l : [],
              ),
              u,
              s,
            ),
              q(e, p, d, m));
            break;
        }
      }
    }
    function w(e, t) {
      if (t.type === "stateSyncUnsubscribe") {
        var n = t.payload.topic;
        r("promiseDone")(
          e.signalingClient.sendStateSyncUnsubscribe(n),
          t.onSuccess,
          t.onError,
        );
      }
    }
    function A(e, t) {
      if (t.type === "stateSyncUpdate") {
        var n = t.payload,
          o = n.inputData,
          a = n.topic;
        r("promiseDone")(
          e.signalingClient.sendStateSyncUpdate(a, o),
          t.onSuccess,
          t.onError,
        );
      }
    }
    function F(e, t) {
      if (t.type === "stopLocalTrack") {
        var n = t.payload.trackID;
        r("promiseDone")(
          e.peerConnectionManager.stopLocalTrack(n),
          t.onSuccess,
          t.onError,
        );
      }
    }
    function O(e, t) {
      if (t.type !== "subscriptionRequest") return {};
      var n = t.payload;
      if (JSON.stringify(n) !== JSON.stringify(e.currentSubscriptionRequest)) {
        var r = [];
        (n.subscriptions.forEach(function (e) {
          r.push(e.user);
        }),
          e.updateConnectionModel(function (e) {
            U(e, r);
          }));
      }
      var o = z(n, e);
      return (X(o, e, t), { currentSubscriptionRequest: n });
    }
    function B(e, t) {
      if (t.type === "userApprovalRequest") {
        var n = t.payload,
          o = n.approvalStatus,
          a = n.targetUsers;
        r("promiseDone")(
          e.signalingClient.sendUsersApprovalRequest(o, a),
          t.onSuccess,
          t.onError,
        );
      }
    }
    function W(e, t, n, r, o) {
      return e.signalingClient.sendGenericDataMessage(t, n, r, o);
    }
    function q(t, r, a, i) {
      return Y(r, t)
        ? t.peerConnectionManager.sendDataMessage(r, {
            message: a,
            recipients: i,
            sender: o("ZenonActorHooks").ZenonActor.getID(),
          })
        : (e || (e = n("Promise"))).resolve();
    }
    function U(e, t) {
      (e.clearAllUserVideoSubscriptions(),
        t.forEach(function (t) {
          e.updateUserVideoSubscription(t, !0);
        }));
    }
    function V(e, t) {
      var n = t.get(e);
      return n === o("ZenonParticipantState").ZenonParticipantState.CONNECTED;
    }
    function H(e) {
      switch (e) {
        case o("ZenonParticipantState").ZenonParticipantState.UNKNOWN:
        case o("ZenonParticipantState").ZenonParticipantState.CONTACTING:
        case o("ZenonParticipantState").ZenonParticipantState.UNREACHABLE:
        case o("ZenonParticipantState").ZenonParticipantState
          .PARTICIPANT_LIMIT_REACHED:
        case o("ZenonParticipantState").ZenonParticipantState
          .RING_TYPE_UNSUPPORTED:
          return !1;
        case o("ZenonParticipantState").ZenonParticipantState.RINGING:
        case o("ZenonParticipantState").ZenonParticipantState.CONNECTING:
        case o("ZenonParticipantState").ZenonParticipantState.CONNECTED:
        case o("ZenonParticipantState").ZenonParticipantState.DISCONNECTED:
        case o("ZenonParticipantState").ZenonParticipantState.IN_ANOTHER_CALL:
        case o("ZenonParticipantState").ZenonParticipantState.NO_ANSWER:
        case o("ZenonParticipantState").ZenonParticipantState.REJECTED:
        case o("ZenonParticipantState").ZenonParticipantState
          .CONNECTION_DROPPED:
        case o("ZenonParticipantState").ZenonParticipantState.PENDING_APPROVAL:
        case o("ZenonParticipantState").ZenonParticipantState.APPROVED:
        case o("ZenonParticipantState").ZenonParticipantState.FAILED_APPROVAL:
        case o("ZenonParticipantState").ZenonParticipantState
          .HANGUP_IN_WAITING_ROOM:
        case o("ZenonParticipantState").ZenonParticipantState.ACCEPTING:
        case o("ZenonParticipantState").ZenonParticipantState.ADDING:
        case o("ZenonParticipantState").ZenonParticipantState.APPROVING:
        case o("ZenonParticipantState").ZenonParticipantState.DENYING:
        case o("ZenonParticipantState").ZenonParticipantState.PRECONNECTING:
        case o("ZenonParticipantState").ZenonParticipantState.REMOVING:
        case o("ZenonParticipantState").ZenonParticipantState.RECONNECTING:
          return !0;
      }
    }
    function G(e) {
      switch (e) {
        case o("ZenonParticipantState").ZenonParticipantState.UNKNOWN:
        case o("ZenonParticipantState").ZenonParticipantState.CONTACTING:
        case o("ZenonParticipantState").ZenonParticipantState.UNREACHABLE:
        case o("ZenonParticipantState").ZenonParticipantState
          .PARTICIPANT_LIMIT_REACHED:
        case o("ZenonParticipantState").ZenonParticipantState
          .RING_TYPE_UNSUPPORTED:
        case o("ZenonParticipantState").ZenonParticipantState.RINGING:
        case o("ZenonParticipantState").ZenonParticipantState.DISCONNECTED:
        case o("ZenonParticipantState").ZenonParticipantState.IN_ANOTHER_CALL:
        case o("ZenonParticipantState").ZenonParticipantState.NO_ANSWER:
        case o("ZenonParticipantState").ZenonParticipantState.REJECTED:
        case o("ZenonParticipantState").ZenonParticipantState.PENDING_APPROVAL:
        case o("ZenonParticipantState").ZenonParticipantState.APPROVED:
        case o("ZenonParticipantState").ZenonParticipantState.FAILED_APPROVAL:
        case o("ZenonParticipantState").ZenonParticipantState
          .HANGUP_IN_WAITING_ROOM:
        case o("ZenonParticipantState").ZenonParticipantState.ACCEPTING:
        case o("ZenonParticipantState").ZenonParticipantState.ADDING:
        case o("ZenonParticipantState").ZenonParticipantState.APPROVING:
        case o("ZenonParticipantState").ZenonParticipantState.DENYING:
        case o("ZenonParticipantState").ZenonParticipantState.PRECONNECTING:
        case o("ZenonParticipantState").ZenonParticipantState.REMOVING:
          return !1;
        case o("ZenonParticipantState").ZenonParticipantState.CONNECTING:
        case o("ZenonParticipantState").ZenonParticipantState.RECONNECTING:
        case o("ZenonParticipantState").ZenonParticipantState.CONNECTED:
        case o("ZenonParticipantState").ZenonParticipantState
          .CONNECTION_DROPPED:
          return !0;
      }
    }
    function z(e, t) {
      var n,
        a = t.getConnectionModel(),
        i = e == null ? void 0 : e.subscriptions,
        l =
          (n = e == null ? void 0 : e.includeDominantSpeaker) != null ? n : !0,
        s;
      i == null ? (s = K(a)) : (s = Q(i, a));
      var u = s,
        c = u.trackSubscriptions,
        d = u.warnings;
      return (
        d.length > 0 &&
          r("ZenonInfraActionsLogger").logError({
            auditId: r("ZenonAuditedCheckpointLogId").RP_ROOMS_INFRA_WWW__ERROR,
            checkpoint:
              "[ZP] Subscription request warnings: " + JSON.stringify(d),
            errorDomain: "ZenonConnectionSharedActions_makeSubscriptionList",
          }),
        l &&
          c.push({
            type: o("ZenonMWMessageTypes").ZenonMWSubscriptionType
              .DOMINANT_SPEAKER,
          }),
        c
      );
    }
    function j(e) {
      var t = e.getConsolidatedParticipantStates();
      try {
        var n = Object.fromEntries(t),
          o = "[ZP] Consolidated participant states are: " + JSON.stringify(n);
        r("ZenonInfraActionsLogger").logCheckpointEmployeesTestUsersOnly({
          checkpoint: o,
        });
      } catch (e) {
        r("ZenonInfraActionsLogger").logCheckpointEmployeesTestUsersOnly({
          checkpoint: "[ZP] failed to stringify consolidated state",
        });
      }
    }
    function K(e) {
      var t = e.getRemoteUserToTracksMap();
      t.forEach(function (e, t) {
        var n = t + ": \n	";
        (e.forEach(function (e, t) {
          n += JSON.stringify(Object.entries(e)) + "\n";
        }),
          r("ZenonInfraActionsLogger").logCheckpointEmployeesTestUsersOnly({
            checkpoint: "[ZP] usersToTracksMap in subscribe to All Users " + n,
          }));
      });
      var n = [],
        a = [];
      return (
        t.forEach(function (t, r) {
          e.clearFailedSubscriptionTimer(r);
          var a = Array.from(t.entries());
          ((a = a.filter(function (e) {
            var t = e[0],
              n = e[1];
            return n.type !== "audio";
          })),
            a.forEach(function (e) {
              var t = e[0],
                r = e[1];
              n.push({
                options: {
                  videoQuality: o("ZenonMWMessageTypes").ZenonMWVideoQuality
                    .MEDIUM,
                },
                trackId: t,
                type: o("ZenonMWMessageTypes").ZenonMWSubscriptionType.TRACK,
              });
            }));
        }),
        { trackSubscriptions: n, warnings: a }
      );
    }
    function Q(e, t) {
      var n = t.getRemoteUserToTracksMap();
      n.forEach(function (e, t) {
        var n = t + ": \n	";
        (e.forEach(function (e, t) {
          n += JSON.stringify(Object.entries(e)) + "\n";
        }),
          r("ZenonInfraActionsLogger").logCheckpointEmployeesTestUsersOnly({
            checkpoint:
              "[ZP] usersToTracksMap in subscribe to Remote Users " + n,
          }));
      });
      var a = [],
        i = [];
      return (
        e.forEach(function (e) {
          var l = e.user,
            s = e.videoQuality;
          if (l === t.selfParticipantID) {
            r("ZenonInfraActionsLogger").logCheckpoint({
              auditId: r("ZenonAuditedCheckpointLogId")
                .RP_ROOMS_INFRA_WWW__STATE_MACHINE,
              checkpoint:
                "[ZP] Forfeiting subscription request for self user ID: " + l,
            });
            return;
          }
          var u = n.get(l);
          if (!u) {
            (a.push({ msg: "userToTrackMap not found", user: l }),
              t.startFailedSubscriptionTimer(l));
            return;
          }
          if (u.size === 0) {
            (a.push({ msg: "userToTrackMap is empty", user: l }),
              t.startFailedSubscriptionTimer(l));
            return;
          }
          t.clearFailedSubscriptionTimer(l);
          var c = Array.from(u.entries()),
            d = c.filter(function (e) {
              var t = e[0],
                n = e[1];
              return n.type !== "audio" && n.enabled === !1;
            });
          (d.length > 0 &&
            r("ZenonInfraActionsLogger").logCheckpoint({
              auditId: r("ZenonAuditedCheckpointLogId")
                .RP_ROOMS_INFRA_WWW__STATE_MACHINE,
              checkpoint:
                "[ZP] Subscribing to muted video track: " + JSON.stringify(d),
            }),
            (c = c.filter(function (e) {
              var t = e[0],
                n = e[1];
              return n.type !== "audio";
            })),
            c.forEach(function (e) {
              var t = e[0],
                n = e[1];
              i.push({
                options: { videoQuality: s },
                trackId: t,
                type: o("ZenonMWMessageTypes").ZenonMWSubscriptionType.TRACK,
              });
            }));
        }),
        { trackSubscriptions: i, warnings: a }
      );
    }
    function X(e, t, n) {
      if (o("ZenonAppProvider").isOculusCastingSite()) {
        r("ZenonInfraActionsLogger").logCheckpointEmployeesTestUsersOnly({
          auditId: r("ZenonAuditedCheckpointLogId").RP_ROOMS_INFRA_WWW__E2EE,
          checkpoint: "[ZP] dropping subscription request",
        });
        return;
      }
      var a =
          t.peerConnectionManager.getDataChannelState(
            o("ZenonSCTPConstants").SCTP_MEDIA_SUBSCRIPTIONS,
          ) === "open",
        i = a && Y(o("ZenonSCTPConstants").SCTP_MEDIA_SUBSCRIPTIONS, t);
      if (i) {
        var l = JSON.stringify({ subscriptionMessagePayload: e }),
          s = {
            message: l,
            recipients: {
              recipientIDs: [
                o("ZenonPeerConnectionConstants").SCTP_MEDIA_SERVER_ID,
              ],
            },
            sender: t.getConnectionModel().selfParticipantID,
          };
        (r("ZenonInfraActionsLogger").logCheckpointEmployeesTestUsersOnly({
          auditId: r("ZenonAuditedCheckpointLogId").RP_ROOMS_INFRA_WWW__E2EE,
          checkpoint: "[ZP][SCTP] sending subscription request: " + l,
        }),
          r("promiseDone")(
            t.peerConnectionManager.sendDataMessage(
              o("ZenonSCTPConstants").SCTP_MEDIA_SUBSCRIPTIONS,
              s,
            ),
            n.onSuccess,
            n.onError,
          ));
      }
      i ||
        r("promiseDone")(
          t.signalingClient.sendSubscriptionRequest(e),
          n.onSuccess,
          n.onError,
        );
    }
    function Y(e, t) {
      var n = t.signalingClient
          .getSignalingModel()
          .getMediaModeManager()
          .getMediaMode(),
        r = t.activePeerConnection === "primary",
        a = o("ZenonSCTPConstants").SFU_ONLY_DATA_CHANNELS.has(e),
        i = a && n === "p2p",
        l = a && !r && n === "sfu";
      return !(i || l);
    }
    ((l.onAddParticipants = c),
      (l.onAnswerReady = d),
      (l.onCapabilitiesReceived = m),
      (l.onClientInfoReceived = p),
      (l.onConnectionDestroyed = _),
      (l.onConnectionDropped = f),
      (l.onCreateDataMessageSubscription = g),
      (l.onDataMessageReceived = h),
      (l.onEndConnection = y),
      (l.onForceEncodingEnabled = C),
      (l.onIceCandidateReady = b),
      (l.onIceCandidateReceived = v),
      (l.onMediaStateUpdateProcessing = S),
      (l.onLocalMediaStateUpdateReady = R),
      (l.onMediaUpdateReceived = L),
      (l.onMediaUpdateResponseReceived = E),
      (l.initiateClientRenegotiation = k),
      (l.onOfferReady = I),
      (l.onOfferReadyCancel = T),
      (l.onParticipantUpdateReceivedEvent = D),
      (l.onRemoveDataMessageSubscription = x),
      (l.onRemoveParticipants = $),
      (l.onRoomContextUpdateReceived = P),
      (l.onSdpReceived = N),
      (l.onSendGenericDataMessage = M),
      (l.onStateSyncUnsubscribe = w),
      (l.onStateSyncUpdate = A),
      (l.onStopLocalTrack = F),
      (l.onSubscriptionRequest = O),
      (l.onUserApprovalRequest = B),
      (l.makeSubscriptionList = z),
      (l.sendSubscriptions = X));
  },
  98,
);
