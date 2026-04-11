__d(
  "WAWebNonMessageDataRequestHandler",
  [
    "WABinary",
    "WAGzip",
    "WALogger",
    "WANullthrows",
    "WASyncdConst",
    "WAWebBackendApi",
    "WAWebBizBroadcastInsightsContactListHandler",
    "WAWebNonMessageDataRequestHandlerCanonicalEntNonce",
    "WAWebNonMessageDataRequestHandlerGalaxyFlow",
    "WAWebNonMessageDataRequestHandlerGenLinkPreview",
    "WAWebNonMessageDataRequestHandlerPlaceholderResend",
    "WAWebNonMessageDataRequestHandlerUploadSticker",
    "WAWebNonMessageDataRequestHandlerWaffleLinkingNonceFetch",
    "WAWebNonMessageDataRequestLoggingUtils",
    "WAWebProtobufsE2E.pb",
    "WAWebProtobufsSyncdSnapshotRecovery.pb",
    "WAWebRequestSyncdSnapshotRecovery",
    "WAWebSyncdSnapshotRecoveryGatingUtils",
    "asyncToGeneratorRuntime",
    "decodeProtobuf",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(e, t) {
      if (t.peerDataOperationRequestType != null)
        e: {
          if (
            t.peerDataOperationRequestType ===
            o("WAWebProtobufsE2E.pb").Message$PeerDataOperationRequestType
              .UPLOAD_STICKER
          ) {
            o(
              "WAWebNonMessageDataRequestHandlerUploadSticker",
            ).handleUploadStickerPeerDataOperationRequest(
              e,
              t.requestStickerReupload,
            );
            break e;
          }
          if (
            t.peerDataOperationRequestType ===
            o("WAWebProtobufsE2E.pb").Message$PeerDataOperationRequestType
              .GALAXY_FLOW_ACTION
          ) {
            o(
              "WAWebNonMessageDataRequestHandlerGalaxyFlow",
            ).handleGalaxyFlowLaunchRequest(t);
            break e;
          }
          break e;
        }
    }
    function c(t, n) {
      if (n.peerDataOperationRequestType != null)
        switch (n.peerDataOperationRequestType) {
          case o("WAWebProtobufsE2E.pb").Message$PeerDataOperationRequestType
            .UPLOAD_STICKER:
            o(
              "WAWebNonMessageDataRequestHandlerUploadSticker",
            ).handleUploadStickerPeerDataOperationRequestResponse(
              t,
              n.peerDataOperationResult,
            );
            return;
          case o("WAWebProtobufsE2E.pb").Message$PeerDataOperationRequestType
            .GENERATE_LINK_PREVIEW:
            o(
              "WAWebNonMessageDataRequestHandlerGenLinkPreview",
            ).handleGenerateLinkPreviewOperationRequestResponse(n);
            return;
          case o("WAWebProtobufsE2E.pb").Message$PeerDataOperationRequestType
            .PLACEHOLDER_MESSAGE_RESEND:
            o(
              "WAWebNonMessageDataRequestHandlerPlaceholderResend",
            ).handlePlaceholderResendOperationRequestResponse(
              t,
              n.peerDataOperationResult,
            );
            return;
          case o("WAWebProtobufsE2E.pb").Message$PeerDataOperationRequestType
            .WAFFLE_LINKING_NONCE_FETCH:
            o(
              "WAWebNonMessageDataRequestHandlerWaffleLinkingNonceFetch",
            ).handleWaffleLinkingNonceFetchOperationRequestResponse(
              n.peerDataOperationResult,
            );
            return;
          case o("WAWebProtobufsE2E.pb").Message$PeerDataOperationRequestType
            .COMPANION_CANONICAL_USER_NONCE_FETCH:
            o(
              "WAWebNonMessageDataRequestHandlerCanonicalEntNonce",
            ).handleCanonicalEntNonceFetchResponse(n.peerDataOperationResult);
            return;
          case o("WAWebProtobufsE2E.pb").Message$PeerDataOperationRequestType
            .COMPANION_SYNCD_SNAPSHOT_FATAL_RECOVERY:
            if (
              o(
                "WAWebSyncdSnapshotRecoveryGatingUtils",
              ).syncdSnapshotRecoveryEnabled() === !1
            ) {
              o("WALogger").LOG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "syncd Snapshot recovery is not enabled",
                  ])),
              );
              return;
            }
            try {
              d(n.peerDataOperationResult[0], t);
            } catch (e) {
              (o("WALogger").ERROR(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "syncd Snapshot recovery initianl handling failed: ",
                    "",
                  ])),
                e,
              ),
                o(
                  "WAWebNonMessageDataRequestLoggingUtils",
                ).logNonMessagePeerDataResponse(
                  o("WAWebProtobufsE2E.pb").Message$PeerDataOperationRequestType
                    .COMPANION_SYNCD_SNAPSHOT_FATAL_RECOVERY,
                  t,
                  0,
                  0,
                  0,
                  1,
                  0,
                ));
            }
            return;
          case o("WAWebProtobufsE2E.pb").Message$PeerDataOperationRequestType
            .GALAXY_FLOW_ACTION:
            o(
              "WAWebNonMessageDataRequestHandlerGalaxyFlow",
            ).handleGalaxyFlowDownloadResponse(n.peerDataOperationResult);
            return;
          case o("WAWebProtobufsE2E.pb").Message$PeerDataOperationRequestType
            .BUSINESS_BROADCAST_INSIGHTS_DELIVERED_TO: {
            var r = o(
              "WAWebBizBroadcastInsightsContactListHandler",
            ).handleInsightsContactListResponse(n.peerDataOperationResult);
            r != null &&
              o("WAWebBackendApi").frontendFireAndForget(
                "triggerBizBroadcastInsightsContactListFromBridge",
                r,
              );
            return;
          }
          default:
            return;
        }
    }
    function d(e, t) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n,
            a,
            i =
              e == null || (n = e.syncdSnapshotFatalRecoveryResponse) == null
                ? void 0
                : n.isCompressed,
            l = new (o("WABinary").Binary)(
              r("WANullthrows")(
                e == null || (a = e.syncdSnapshotFatalRecoveryResponse) == null
                  ? void 0
                  : a.collectionSnapshot,
              ),
            ),
            s = l.readByteArrayView();
          i === !0 && (s = yield o("WAGzip").inflate(l.readByteArrayView()));
          var u = o("decodeProtobuf").decodeProtobuf(
              o("WAWebProtobufsSyncdSnapshotRecovery.pb")
                .SyncdSnapshotRecoverySpec,
              s,
            ),
            c = o("WASyncdConst").CollectionName.cast(u.collectionName);
          (c != null &&
            o(
              "WAWebRequestSyncdSnapshotRecovery",
            ).SyncdSnapshotRecoveryModule.resolveRecoveryPromise(c, u),
            o(
              "WAWebNonMessageDataRequestLoggingUtils",
            ).logNonMessagePeerDataResponse(
              o("WAWebProtobufsE2E.pb").Message$PeerDataOperationRequestType
                .COMPANION_SYNCD_SNAPSHOT_FATAL_RECOVERY,
              t,
              1,
              1,
              1,
              0,
              0,
            ));
        })),
        m.apply(this, arguments)
      );
    }
    ((l.handlePeerDataOperationRequest = u),
      (l.handlePeerDataOperationRequestResponse = c));
  },
  98,
);
