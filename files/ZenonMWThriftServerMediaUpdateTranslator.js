__d(
  "ZenonMWThriftServerMediaUpdateTranslator",
  [
    "FBLogger",
    "MultiwayCommonTypes",
    "ZenonAuditedCheckpointLogId",
    "ZenonBrowsers",
    "ZenonInfraActionsLogger",
    "ZenonMWCommonUtils",
    "ZenonMWThriftMessageReliabilityLogger",
    "ZenonMWThriftMessageTagUtils",
    "ZenonMWThriftTranslatorUtils",
    "ZenonODSLogger",
    "ZenonScreenShare",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t,
        n,
        a,
        i = [],
        l = e.messageBody.serverMediaUpdateRequest,
        u = e.messageHeader,
        c = u.messageTags,
        d = u.transactionId;
      if (!l) return i;
      var m = l.answer,
        p = l.fromVersion,
        _ = l.mediaPath,
        f = l.mediaStatus,
        g = l.multipleVideoStreamsAllowed,
        h = l.offer,
        y = l.prAnswer,
        C = l.renegotiationRequested,
        b = l.sdpOriginLocalId,
        v = l.stateStore,
        S = l.toVersion,
        R = l.update,
        L = [h, m, y].some(function (e) {
          return (e == null ? void 0 : e.sdpCompressionVersion) != null;
        });
      if (L) {
        r("ZenonODSLogger").logCounter("compressed_sdp_received");
        var E = "Compressed SDP is not supported;";
        (r("FBLogger")("rpweb").warn(E + " TXID = %s", d),
          r("ZenonInfraActionsLogger").logError({
            auditId: r("ZenonAuditedCheckpointLogId").RP_ROOMS_INFRA_WWW__ERROR,
            error: E + " TXID = " + d,
            errorDomain: "ZenonMWThriftServerMediaUpdateTranslator",
          }));
      }
      var k = (t = h == null ? void 0 : h.sdpString) != null ? t : "",
        I = (n = m == null ? void 0 : m.sdpString) != null ? n : "",
        T = (a = y == null ? void 0 : y.sdpString) != null ? a : "",
        D = +p,
        x = +S,
        $ = o("ZenonMWThriftTranslatorUtils").fromThriftMediaPath(_),
        P = o("ZenonMWThriftMessageTagUtils").fromThriftMessageTags(c),
        N = function () {
          o("ZenonMWThriftMessageReliabilityLogger").logProcessedMessage(e);
        },
        M = k !== "",
        w = I !== "",
        A = o("ZenonBrowsers").supportsPranswer() && T !== "",
        F = R !== null,
        O = M || w || A || F;
      o("ZenonMWThriftTranslatorUtils").addThriftStateStoreSignalingEvents(
        v,
        i,
        !1,
        O,
      );
      var B = o("ZenonMWThriftTranslatorUtils").fetchE2eeServerState(v);
      if (C) {
        r("ZenonInfraActionsLogger").logCheckpoint({
          auditId: r("ZenonAuditedCheckpointLogId")
            .RP_ROOMS_INFRA_WWW__PLATFORM,
          checkpoint: "SMU type 1: renegotationRequested",
        });
        var W = {
          ackMessageId: d,
          eventName: "initiateRenegotiationRequest",
          fromVersion: D,
          hasRemoteOffer: k !== "",
          mediaPath: $,
          messageTags: P != null ? P : [],
          onProcessed: N,
          version: x,
        };
        if ((i.push(W), M)) {
          var q = s(
            d,
            D,
            $,
            f,
            {
              sdp: k,
              type: "offer",
              version: o("ZenonMWCommonUtils").getSdpVersion(k),
            },
            b,
            N,
            P,
            B,
          );
          i.push(q);
        }
      } else if (w) {
        r("ZenonInfraActionsLogger").logCheckpoint({
          auditId: r("ZenonAuditedCheckpointLogId")
            .RP_ROOMS_INFRA_WWW__PLATFORM,
          checkpoint: "SMU type 2: answer SDP",
        });
        var U = s(
          d,
          D,
          $,
          f,
          {
            sdp: I,
            type: "answer",
            version: o("ZenonMWCommonUtils").getSdpVersion(I),
          },
          b,
          N,
          P,
          B,
        );
        if (
          U.sdp.sdp != null &&
          o("ZenonMWCommonUtils").isUnifiedPlan(U.sdp.sdp)
        ) {
          var V = {
            sdp: I,
            type: "offer",
            version: o("ZenonMWCommonUtils").getSdpVersion(I),
          };
          U.renegotiationOffer = V;
        }
        i.push(U);
      } else if (M) {
        r("ZenonInfraActionsLogger").logCheckpoint({
          auditId: r("ZenonAuditedCheckpointLogId")
            .RP_ROOMS_INFRA_WWW__PLATFORM,
          checkpoint: "SMU type 3: offer SDP",
        });
        var H = s(
          d,
          D,
          $,
          f,
          {
            sdp: k,
            type: "offer",
            version: o("ZenonMWCommonUtils").getSdpVersion(k),
          },
          b,
          N,
          P,
          B,
        );
        i.push(H);
      } else if (R) {
        r("ZenonInfraActionsLogger").logCheckpoint({
          auditId: r("ZenonAuditedCheckpointLogId")
            .RP_ROOMS_INFRA_WWW__PLATFORM,
          checkpoint: "SMU type 4: delta SDP",
        });
        var G = s(
          d,
          D,
          $,
          f,
          { type: "offer", update: R, version: x },
          b,
          N,
          P,
          B,
        );
        i.push(G);
      } else if (A) {
        r("ZenonInfraActionsLogger").logCheckpoint({
          auditId: r("ZenonAuditedCheckpointLogId")
            .RP_ROOMS_INFRA_WWW__PLATFORM,
          checkpoint: "SMU type 5: prAnswer SDP",
        });
        var z = s(
          d,
          D,
          $,
          f,
          {
            sdp: T,
            type: "pranswer",
            version: o("ZenonMWCommonUtils").getSdpVersion(T),
          },
          b,
          N,
          P,
          B,
        );
        i.push(z);
      } else if (f) {
        r("ZenonInfraActionsLogger").logCheckpoint({
          auditId: r("ZenonAuditedCheckpointLogId")
            .RP_ROOMS_INFRA_WWW__PLATFORM,
          checkpoint: "SMU type 6: media update",
        });
        var j = {
          ackMessageId: d,
          eventName: "mediaUpdateRequest",
          mediaStates: o(
            "ZenonMWThriftTranslatorUtils",
          ).toZenonMediaStatesFromThrift(f, D, x),
          messageTags: P != null ? P : [],
          onProcessed: N,
        };
        i.push(j);
      } else {
        var K = "Warning: unsupported SMU type. TXID: " + d;
        (r("FBLogger")("rpweb").warn(K),
          r("ZenonInfraActionsLogger").logError({
            auditId: r("ZenonAuditedCheckpointLogId").RP_ROOMS_INFRA_WWW__ERROR,
            error: K,
            errorDomain: "ZenonMWThriftServerMediaUpdateTranslator",
          }));
      }
      o(
        "ZenonMWThriftTranslatorUtils",
      ).maybeAddOverlayConfigServerUpdateRequestFromThrift(i, u);
      var Q = {
        capabilities: { multipleVideoStreamsAllowed: g },
        eventName: "capabilitiesRequest",
        messageTags: P != null ? P : [],
      };
      return (i.push(Q), i);
    }
    function s(e, t, n, r, a, i, l, s, u) {
      return {
        ackMessageId: e,
        e2eeServerState: u,
        eventName: "remoteSdpRequest",
        fromVersion: t,
        mediaPath: n,
        mediaStates: o(
          "ZenonMWThriftTranslatorUtils",
        ).toZenonMediaStatesFromThrift(r),
        messageTags: s != null ? s : [],
        negotiateType: !1,
        onProcessed: l,
        sdp: a,
        sdpOriginLocalId: i,
        source: "serverMediaUpdateRequest",
      };
    }
    function u(e, t, n, r) {
      var a;
      return m({
        acknowledgedVersion: t.acknowledgedVersion,
        answer: r,
        header: e,
        mediaStates: n,
        statusCode: o(
          "ZenonMWThriftTranslatorUtils",
        ).toMWThriftResponseStatusCode(t.statusCode),
        subCode:
          (a = o(
            "ZenonMWThriftTranslatorUtils",
          ).toMWThriftResponseStatusSubCode(t.subCode)) != null
            ? a
            : void 0,
      });
    }
    function c(e, t) {
      var n;
      return m({
        acknowledgedVersion: t.acknowledgedVersion,
        header: e,
        statusCode: o(
          "ZenonMWThriftTranslatorUtils",
        ).toMWThriftResponseStatusCode(t.statusCode),
        subCode:
          (n = o(
            "ZenonMWThriftTranslatorUtils",
          ).toMWThriftResponseStatusSubCode(t.subCode)) != null
            ? n
            : void 0,
      });
    }
    function d(e, t) {
      var n;
      return m({
        acknowledgedVersion: t.acknowledgedVersion,
        header: e,
        statusCode:
          (n = o("MultiwayCommonTypes").RtcResponseStatusCode.cast(
            t.responseStatusCode,
          )) != null
            ? n
            : o("MultiwayCommonTypes").RtcResponseStatusCode
                .CONDITIONAL_REQUEST_FAILED,
        subCode: o("MultiwayCommonTypes").RtcResponseSubCode.cast(
          t.responseSubCode,
        ),
      });
    }
    function m(e) {
      var t = e.acknowledgedVersion,
        n = e.answer,
        r = e.header,
        a = e.mediaStates,
        i = e.statusCode,
        l = e.subCode,
        s = { currentVersion: String(t) };
      return (
        a && (s.mediaStatus = p(a)),
        n && (s.answer = { sdpString: n.sdp }),
        o("ZenonMWThriftTranslatorUtils").createMWThriftResponse({
          header: r,
          rtcMessageBody: { serverMediaUpdateResponse: s },
          statusCode: i,
          subCode: l,
          type: o("MultiwayCommonTypes").MessageType.SERVER_MEDIA_UPDATE,
        })
      );
    }
    function p(e) {
      var t = { tracks: {} },
        n = !o("ZenonScreenShare").screenShareWithReplaceTrack();
      return (
        e.tracks.forEach(function (e) {
          var r = {
              customAudioContentType: void 0,
              customVideoContentType: void 0,
              enabled: e.enabled,
              name: e.name,
              owner: e.participantID,
            },
            a = n
              ? o("ZenonMWThriftTranslatorUtils").toMWThriftTrackLabel(e.type)
              : null;
          (a != null && (r.label = a), (t.tracks[e.trackID] = r));
        }),
        t
      );
    }
    ((l.fromThriftServerMediaUpdateRequest = e),
      (l.toThriftServerMediaUpdateResponse = u),
      (l.toThriftServerMediaUpdateRenegotiationResponse = c),
      (l.toThriftServerMediaUpdateNoSdpResponse = d));
  },
  98,
);
