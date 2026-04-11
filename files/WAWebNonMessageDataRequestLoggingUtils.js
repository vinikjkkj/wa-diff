__d(
  "WAWebNonMessageDataRequestLoggingUtils",
  [
    "WALogger",
    "WATimeUtils",
    "WAWebNonMessagePeerDataMediaUploadWamEvent",
    "WAWebNonMessagePeerDataOperationResponseWamEvent",
    "WAWebNonMessagePeerDataRequestWamEvent",
    "WAWebProtobufsE2E.pb",
    "WAWebWamEnumPeerDataRequestType",
    "WAWebWebcLinkPreviewResponseHandleWamEvent",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = new Map();
    function u(t, n, r) {
      var a = void 0,
        i = o("WATimeUtils").unixTimeMs();
      if (t != null) {
        var l = s.get(t);
        l != null && (a = i - l);
      }
      (o("WALogger").LOG(
        e ||
          (e = babelHelpers.taggedTemplateLiteralLoose([
            "link preview: session id: ",
            ", is success: ",
            ", durationMs: ",
            "",
          ])),
        t,
        n,
        a,
      ),
        new (o(
          "WAWebWebcLinkPreviewResponseHandleWamEvent",
        ).WebcLinkPreviewResponseHandleWamEvent)({
          previewSessionId: t,
          isPreviewSuccess: n,
          previewDurationMs: a != null ? a : void 0,
          didRespondHqPreview: r,
        }).commit(),
        t != null && s.delete(t));
    }
    function c(e, t) {
      var n = m(e);
      new (o(
        "WAWebNonMessagePeerDataRequestWamEvent",
      ).NonMessagePeerDataRequestWamEvent)({
        peerDataRequestCount: d(e, t),
        peerDataRequestType: n,
        peerDataRequestSessionId: t.id.id,
      }).commit();
    }
    function d(e, t) {
      var n, r, a, i, l, s;
      return e ===
        o("WAWebProtobufsE2E.pb").Message$PeerDataOperationRequestType
          .SEND_RECENT_STICKER_BOOTSTRAP ||
        e ===
          o("WAWebProtobufsE2E.pb").Message$PeerDataOperationRequestType
            .WAFFLE_LINKING_NONCE_FETCH ||
        e ===
          o("WAWebProtobufsE2E.pb").Message$PeerDataOperationRequestType
            .FULL_HISTORY_SYNC_ON_DEMAND
        ? 1
        : e ===
            o("WAWebProtobufsE2E.pb").Message$PeerDataOperationRequestType
              .UPLOAD_STICKER
          ? (n =
              (r = t.peerDataOperationRequestMessage) == null ||
              (r = r.requestStickerReupload) == null
                ? void 0
                : r.length) != null
            ? n
            : 0
          : e ===
              o("WAWebProtobufsE2E.pb").Message$PeerDataOperationRequestType
                .GENERATE_LINK_PREVIEW
            ? (a =
                (i = t.peerDataOperationRequestMessage) == null ||
                (i = i.requestStickerReupload) == null
                  ? void 0
                  : i.length) != null
              ? a
              : 0
            : e ===
                o("WAWebProtobufsE2E.pb").Message$PeerDataOperationRequestType
                  .HISTORY_SYNC_ON_DEMAND
              ? 1
              : e ===
                  o("WAWebProtobufsE2E.pb").Message$PeerDataOperationRequestType
                    .PLACEHOLDER_MESSAGE_RESEND
                ? (l =
                    (s = t.peerDataOperationRequestMessage) == null ||
                    (s = s.placeholderMessageResendRequest) == null
                      ? void 0
                      : s.length) != null
                  ? l
                  : 0
                : e ===
                      o("WAWebProtobufsE2E.pb")
                        .Message$PeerDataOperationRequestType
                        .COMPANION_META_NONCE_FETCH ||
                    e ===
                      o("WAWebProtobufsE2E.pb")
                        .Message$PeerDataOperationRequestType
                        .COMPANION_CANONICAL_USER_NONCE_FETCH ||
                    e ===
                      o("WAWebProtobufsE2E.pb")
                        .Message$PeerDataOperationRequestType
                        .COMPANION_SYNCD_SNAPSHOT_FATAL_RECOVERY ||
                    e ===
                      o("WAWebProtobufsE2E.pb")
                        .Message$PeerDataOperationRequestType
                        .HISTORY_SYNC_CHUNK_RETRY ||
                    e ===
                      o("WAWebProtobufsE2E.pb")
                        .Message$PeerDataOperationRequestType.GALAXY_FLOW_ACTION
                  ? 1
                  : e ===
                        o("WAWebProtobufsE2E.pb")
                          .Message$PeerDataOperationRequestType
                          .BUSINESS_BROADCAST_INSIGHTS_DELIVERED_TO ||
                      e ===
                        o("WAWebProtobufsE2E.pb")
                          .Message$PeerDataOperationRequestType
                          .BUSINESS_BROADCAST_INSIGHTS_REFRESH
                    ? -1
                    : (function () {
                        throw Error(
                          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                            e,
                        );
                      })();
    }
    function m(e) {
      switch (e) {
        case o("WAWebProtobufsE2E.pb").Message$PeerDataOperationRequestType
          .UPLOAD_STICKER:
          return o("WAWebWamEnumPeerDataRequestType").PEER_DATA_REQUEST_TYPE
            .UPLOAD_STICKER;
        case o("WAWebProtobufsE2E.pb").Message$PeerDataOperationRequestType
          .SEND_RECENT_STICKER_BOOTSTRAP:
          return o("WAWebWamEnumPeerDataRequestType").PEER_DATA_REQUEST_TYPE
            .SEND_RECENT_STICKER_BOOTSTRAP;
        case o("WAWebProtobufsE2E.pb").Message$PeerDataOperationRequestType
          .GENERATE_LINK_PREVIEW:
          return o("WAWebWamEnumPeerDataRequestType").PEER_DATA_REQUEST_TYPE
            .GENERAL_LINK_PREVIEW;
        case o("WAWebProtobufsE2E.pb").Message$PeerDataOperationRequestType
          .HISTORY_SYNC_ON_DEMAND:
          return o("WAWebWamEnumPeerDataRequestType").PEER_DATA_REQUEST_TYPE
            .HISTORY_SYNC_ON_DEMAND;
        case o("WAWebProtobufsE2E.pb").Message$PeerDataOperationRequestType
          .PLACEHOLDER_MESSAGE_RESEND:
          return o("WAWebWamEnumPeerDataRequestType").PEER_DATA_REQUEST_TYPE
            .PLACEHOLDER_MESSAGE_RESEND;
        case o("WAWebProtobufsE2E.pb").Message$PeerDataOperationRequestType
          .WAFFLE_LINKING_NONCE_FETCH:
          return o("WAWebWamEnumPeerDataRequestType").PEER_DATA_REQUEST_TYPE
            .WAFFLE_LINKING_NONCE_FETCH;
        case o("WAWebProtobufsE2E.pb").Message$PeerDataOperationRequestType
          .FULL_HISTORY_SYNC_ON_DEMAND:
          throw r("err")("full history sync on demand is not supported in web");
        case o("WAWebProtobufsE2E.pb").Message$PeerDataOperationRequestType
          .COMPANION_META_NONCE_FETCH:
          throw r("err")("companion meta nonce fetch is not supported in web");
        case o("WAWebProtobufsE2E.pb").Message$PeerDataOperationRequestType
          .COMPANION_CANONICAL_USER_NONCE_FETCH:
          return o("WAWebWamEnumPeerDataRequestType").PEER_DATA_REQUEST_TYPE
            .UPLOAD_STICKER;
        case o("WAWebProtobufsE2E.pb").Message$PeerDataOperationRequestType
          .COMPANION_SYNCD_SNAPSHOT_FATAL_RECOVERY:
          return o("WAWebWamEnumPeerDataRequestType").PEER_DATA_REQUEST_TYPE
            .SYNCD_SNAPSHOT_RECOVERY;
        case o("WAWebProtobufsE2E.pb").Message$PeerDataOperationRequestType
          .HISTORY_SYNC_CHUNK_RETRY:
          throw r("err")("history sync chunk retry is not supported in web");
        case o("WAWebProtobufsE2E.pb").Message$PeerDataOperationRequestType
          .GALAXY_FLOW_ACTION:
          return o("WAWebWamEnumPeerDataRequestType").PEER_DATA_REQUEST_TYPE
            .UPLOAD_STICKER;
        case o("WAWebProtobufsE2E.pb").Message$PeerDataOperationRequestType
          .BUSINESS_BROADCAST_INSIGHTS_DELIVERED_TO:
          return o("WAWebWamEnumPeerDataRequestType").PEER_DATA_REQUEST_TYPE
            .UPLOAD_STICKER;
        case o("WAWebProtobufsE2E.pb").Message$PeerDataOperationRequestType
          .BUSINESS_BROADCAST_INSIGHTS_REFRESH:
          return o("WAWebWamEnumPeerDataRequestType").PEER_DATA_REQUEST_TYPE
            .UPLOAD_STICKER;
      }
    }
    function p(e, t, n, r, a, i, l) {
      var s = m(e);
      new (o(
        "WAWebNonMessagePeerDataOperationResponseWamEvent",
      ).NonMessagePeerDataOperationResponseWamEvent)({
        peerDataResponseCount: n,
        peerDataSuccessResponseCount: r,
        peerDataSuccessProcessCount: a,
        peerDataErrorCount: i,
        peerDataNotFoundCount: l,
        peerDataRequestType: s,
        peerDataRequestSessionId: t,
      }).commit();
    }
    function _(e, t, n, r, a, i, l) {
      if (
        e ===
        o("WAWebProtobufsE2E.pb").Message$PeerDataOperationRequestType
          .UPLOAD_STICKER
      ) {
        var s = m(e);
        new (o(
          "WAWebNonMessagePeerDataMediaUploadWamEvent",
        ).NonMessagePeerDataMediaUploadWamEvent)({
          peerDataRequestCount: n,
          peerDataSuccessUploadCount: r,
          peerDataExistingDataNoUploadCount: a,
          peerDataErrorCount: i,
          peerDataNotFoundCount: l,
          peerDataRequestType: s,
          peerDataRequestSessionId: t,
        }).commit();
      }
    }
    function f(e, t) {
      new (o(
        "WAWebNonMessagePeerDataOperationResponseWamEvent",
      ).NonMessagePeerDataOperationResponseWamEvent)({
        peerDataRequestType: o("WAWebWamEnumPeerDataRequestType")
          .PEER_DATA_REQUEST_TYPE.HISTORY_SYNC_ON_DEMAND,
        peerDataResponseApplyResult: e,
        peerDataRequestSessionId: t,
      }).commit();
    }
    function g(e, t, n, r, a, i) {
      var l = m(e);
      new (o(
        "WAWebNonMessagePeerDataOperationResponseWamEvent",
      ).NonMessagePeerDataOperationResponseWamEvent)({
        peerDataResponseCount: r,
        peerDataSuccessResponseCount: a,
        peerDataErrorCount: i,
        peerDataResponseApplyResult: n,
        peerDataRequestType: l,
        peerDataRequestSessionId: t,
      }).commit();
    }
    ((l.sendTimes = s),
      (l.logLinkPreviewResponse = u),
      (l.logNonMessagePeerDataRequest = c),
      (l.logNonMessagePeerDataResponse = p),
      (l.logMediaUpload = _),
      (l.logHistorySyncOnDemandResponse = f),
      (l.logPlaceholderMessageResendResponse = g));
  },
  98,
);
