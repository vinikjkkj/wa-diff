__d(
  "ZenonMWThriftJoinTranslator",
  [
    "FBLogger",
    "MultiwayCommonTypes",
    "MultiwaySharedTypes",
    "RequestStreamBodyUtils",
    "RoboticsPermission",
    "ZenonAuditedCheckpointLogId",
    "ZenonBrowsers",
    "ZenonDismissReason",
    "ZenonInfraActionsLogger",
    "ZenonJoiningContext",
    "ZenonMWCommonUtils",
    "ZenonMWJoinUtils",
    "ZenonMWThriftTranslatorUtils",
    "ZenonScreenShare",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t,
        n,
        a = [],
        i = e.messageHeader,
        l = i.responseStatusCode,
        s = i.responseSubCode;
      if (l && l !== o("MultiwayCommonTypes").RtcResponseStatusCode.OK) {
        var c,
          d =
            "JOIN response status code: " +
            String(l) +
            " subcode " +
            String(s != null ? s : "[undefined]");
        r("ZenonInfraActionsLogger").logError({
          auditId: r("ZenonAuditedCheckpointLogId").RP_ROOMS_INFRA_WWW__ERROR,
          callType: "mw",
          checkpoint: "[ZP] Got non-OK " + d,
          errorDomain: "ZenonMWThriftMessageTranslator.fromThriftJoinResponse",
        });
        var m = {
          detailedReasonFromMW: (c = i.responseStatusMessage) != null ? c : "",
          eventName: "terminateRequest",
          fromJoinResponse: !0,
          reason: u(l, i.responseSubCode),
          shouldInformPeer: !1,
          subreason: d,
        };
        return (a.push(m), a);
      }
      var p = e.messageBody.joinResponse;
      if (!p) return a;
      var _ =
          (t = (n = p.answer) == null ? void 0 : n.sdpString) != null ? t : "",
        f = _ !== "";
      (o("ZenonMWThriftTranslatorUtils").addThriftStateStoreSignalingEvents(
        p.stateStore,
        a,
        !1,
        f,
      ),
        o(
          "ZenonMWThriftTranslatorUtils",
        ).maybeAddOverlayConfigServerUpdateRequestFromThrift(a, i));
      var g = o("ZenonMWThriftTranslatorUtils").fetchE2eeServerState(
          p.stateStore,
        ),
        h = {
          ackMessageId: i.transactionId,
          eventName: "localSdpResponse",
          hasAnswerInJoinResponse: f,
          source: "joinResponse",
        };
      if ((a.push(h), f)) {
        var y = {
            sdp: _,
            type: "answer",
            version: o("ZenonMWCommonUtils").getSdpVersion(_),
          },
          C = o("ZenonMWThriftTranslatorUtils").toZenonMediaStatesFromThrift(
            p.mediaStatusEx,
          ),
          b = p.renegotiationOffer,
          v = null;
        b != null &&
          b.sdpString != null &&
          (v = {
            sdp: b.sdpString,
            type: "offer",
            version: o("ZenonMWCommonUtils").getSdpVersion(b.sdpString),
          });
        var S = {
          e2eeServerState: g,
          eventName: "remoteSdpRequest",
          mediaPath: o("ZenonMWThriftTranslatorUtils").fromThriftMediaPath(
            p.mediaPath,
          ),
          mediaStates: C,
          negotiateType: !1,
          renegotiationOffer: v,
          sdp: y,
          sdpOriginLocalId: p.sdpOriginLocalId,
          source: "joinResponse",
        };
        a.push(S);
      }
      var R = {
        capabilities: {
          addParticipantEnabled: !0,
          cowatchEnabled: !0,
          cowatchGroupEnabled: !0,
          multipleVideoStreamsAllowed: p.multipleVideoStreamsAllowed,
        },
        eventName: "capabilitiesRequest",
      };
      if ((a.push(R), p.isPendingApproval)) {
        var L = { eventName: "pendingApprovalRequest" };
        a.push(L);
      }
      var E = p.groupsOfUsers,
        k = new Map();
      E.forEach(function (e) {
        var t = e.aliasId,
          n = e.users;
        t != null &&
          n.forEach(function (e) {
            k.set(e, t);
          });
      });
      var I = {
        actorRepresentatives: k,
        eventName: "clientInfoRequest",
        mediaPath: o("ZenonMWThriftTranslatorUtils").fromThriftMediaPath(
          p.mediaPath,
        ),
        userCapabilities: new Map(),
      };
      return (a.push(I), a);
    }
    function s(e, t, n, a) {
      var i,
        l,
        s = t.initialSyncStates,
        u = t.isSecondaryJoinRole,
        d = t.userCapabilities,
        m = {
          clientMediaMode:
            n.mediaMode === "p2p"
              ? o("MultiwaySharedTypes").MediaPath.P2P
              : o("MultiwaySharedTypes").MediaPath.SFU,
          deviceCapabilities: new Set(
            [
              o("MultiwayCommonTypes").Capability
                .SUPPORT_NEW_PARTICIPANT_STATES,
              o("MultiwayCommonTypes").Capability.REQUIRE_FULL_SDP_IN_SMU,
              o("MultiwayCommonTypes").Capability.SUPPORT_SDP_RENEGOTIATION,
              o("MultiwayCommonTypes").Capability
                .REQUIRE_FULL_SDP_IN_SMU_OPTIMIZED,
              o("MultiwayCommonTypes").Capability.SUPPORT_DELTA_SMU,
            ].concat(
              o("ZenonBrowsers").supportsPranswer()
                ? [o("MultiwayCommonTypes").Capability.SUPPORT_PRECONNECT]
                : [],
            ),
          ),
          mediaStatus: o("ZenonMWThriftTranslatorUtils").toMWThriftMediaStatus(
            n.mediaStates,
          ),
          mediaStatusEx: o(
            "ZenonMWThriftTranslatorUtils",
          ).toThriftMWMediaStatusEx(n.mediaStates),
          offer: {},
          syncPayload: s
            ? {
                stateStore: o(
                  "ZenonMWThriftTranslatorUtils",
                ).toThriftMWSyncStateStore(s),
                stateStoreV2: {},
              }
            : void 0,
          userCapabilities: o("RequestStreamBodyUtils").stringToUint8Array(
            (i = d.get(e.userInfo.userID)) != null ? i : "",
          ),
        };
      u != null &&
        (m.endpointSettings = {
          joinMode: u
            ? o("MultiwayCommonTypes").JoinMode.SECONDARY
            : o("MultiwayCommonTypes").JoinMode.PRIMARY,
        });
      var p = t.isE2eeMandated === !0;
      ((m.e2eeEnforcement = {
        infraMandatedExpStatus: t.e2eeInfraMandatedExpStatus,
        mode: p
          ? o("MultiwaySharedTypes").E2eeMode.E2EE_MANDATED
          : o("MultiwaySharedTypes").E2eeMode.E2EE_NOT_MANDATED,
        preventSfuMode: !1,
      }),
        n.sdp.type === "offer" && (m.offer = { sdpString: n.sdp.sdp }),
        o("ZenonMWJoinUtils").canUseMwpp(n.sdp.type) &&
          (m.deviceCapabilities.add(
            o("MultiwayCommonTypes").Capability.SUPPORT_MWPP,
          ),
          n.sdp.type === "answer" && (m.answer = { sdpString: n.sdp.sdp }),
          o("ZenonMWJoinUtils").canDeescalate() &&
            m.deviceCapabilities.add(
              o("MultiwayCommonTypes").Capability.SUPPORT_MWPP_DEESCALATION,
            )),
        (!o("ZenonScreenShare").screenShareWithReplaceTrack() ||
          r("RoboticsPermission").is_authorized_robot) &&
          m.deviceCapabilities.add(
            o("MultiwayCommonTypes").Capability.SUPPORT_MULTIPLE_VIDEO_STREAMS,
          ));
      var _ = a == null ? void 0 : a.otherParticipants;
      _ && (m.usersToCall = new Set(_));
      var f = [],
        g =
          (l = a == null ? void 0 : a.roomInfo.context) != null
            ? l
            : e.roomInfo.context;
      if (g != null) {
        var h = o("ZenonJoiningContext").convertCollisionToJoiningContext(g);
        (p && (h.calling_tags = 2),
          (f = [].concat(f, [
            {
              body: {
                genericMessage: {
                  data: o("RequestStreamBodyUtils").stringToUint8Array(
                    JSON.stringify(h),
                  ),
                  topic: o("ZenonJoiningContext").JOINING_CONTEXT_TOPIC,
                },
              },
              header: {
                topic_DEPRECATED: o("ZenonJoiningContext")
                  .JOINING_CONTEXT_TOPIC,
              },
            },
          ])));
      }
      ((a == null ? void 0 : a.appMessages) != null &&
        (f = [].concat(
          f,
          o(
            "ZenonMWThriftTranslatorUtils",
          ).signalingMessageAppMessagesToThriftMWAppMessages(a.appMessages, _),
        )),
        (m.appMessages = f));
      var y = o("ZenonMWThriftTranslatorUtils").createMWThriftRequest({
        header: e,
        rtcMessageBody: { joinRequest: m },
        type: o("MultiwayCommonTypes").MessageType.JOIN,
      });
      return (
        g &&
          g.serverInfoData != null &&
          (y.messageHeader.serverInfoData = g.serverInfoData),
        c(g, y.messageHeader) &&
          (y.messageHeader.conferenceType = o(
            "MultiwaySharedTypes",
          ).ConferenceType.ROOM),
        y
      );
    }
    function u(e, t) {
      if (
        t ===
        o("MultiwayCommonTypes").RtcResponseSubCode
          .EXCEEDED_MAX_ALLOWED_PARTICIPANTS
      )
        return o("ZenonDismissReason").ZenonDismissReason
          .MaxAllowedParticipantsReached;
      if (
        t ===
        o("MultiwayCommonTypes").RtcResponseSubCode
          .PRODUCT_SERVER_DEFINED_END_REASON
      )
        return o("ZenonDismissReason").ZenonDismissReason
          .ProductServerDefinedEndReason;
      if (
        t ===
        o("MultiwayCommonTypes").RtcResponseSubCode
          .CALLER_HAS_APPEALABLE_CALLING_RESTRICTION
      )
        return o("ZenonDismissReason").ZenonDismissReason
          .CallerHasAppealableCallingRestriction;
      switch (e) {
        case o("MultiwayCommonTypes").RtcResponseStatusCode.METHOD_NOT_ALLOWED:
        case o("MultiwayCommonTypes").RtcResponseStatusCode.UNAUTHORIZED:
          return o("ZenonDismissReason").ZenonDismissReason.NoPermission;
        case o("MultiwayCommonTypes").RtcResponseStatusCode.SERVICE_UNAVAILABLE:
          return o("ZenonDismissReason").ZenonDismissReason
            .SignalingMessageFailed;
        case o("MultiwayCommonTypes").RtcResponseStatusCode.OK:
          throw r("FBLogger")("rtc_www").mustfixThrow(
            "Response status code is OK; should not return a dismiss reason",
          );
        default:
          return (
            r("ZenonInfraActionsLogger").logError({
              auditId: r("ZenonAuditedCheckpointLogId")
                .RP_ROOMS_INFRA_WWW__ERROR,
              callType: "mw",
              error:
                "[ZP] Got unexpected JOIN response status: " +
                String(e) +
                " subcode " +
                String(t != null ? t : "[undefined]"),
              errorDomain: "fromMWThriftJoinResponseStatusToDismissReason",
            }),
            o("ZenonDismissReason").ZenonDismissReason.UnexpectedEndOfCall
          );
      }
    }
    function c(e, t) {
      return (
        ((e == null ? void 0 : e.peerID) != null ||
          (e == null ? void 0 : e.groupThreadID) != null) &&
        t.conferenceName === ""
      );
    }
    ((l.fromThriftJoinResponse = e), (l.toThriftJoinRequest = s));
  },
  98,
);
