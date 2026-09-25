__d(
  "WAWebNonMessageDataRequestHandler",
  [
    "WABinary",
    "WAGzip",
    "WALogger",
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
    "WAWebSyncdConst",
    "WAWebSyncdSnapshotRecoveryGatingUtils",
    "asyncToGeneratorRuntime",
    "decodeProtobuf",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u;
    function c(t, n) {
      if (n.peerDataOperationRequestType != null)
        e: {
          if (
            n.peerDataOperationRequestType ===
            o("WAWebProtobufsE2E.pb").Message$PeerDataOperationRequestType
              .UPLOAD_STICKER
          ) {
            o("WAWebNonMessageDataRequestHandlerUploadSticker")
              .handleUploadStickerPeerDataOperationRequest(
                t,
                n.requestStickerReupload,
              )
              .catch(function (t) {
                o("WALogger").ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "sticker reupload request handling failed: ",
                      "",
                    ])),
                  t,
                );
              });
            break e;
          }
          if (
            n.peerDataOperationRequestType ===
            o("WAWebProtobufsE2E.pb").Message$PeerDataOperationRequestType
              .GALAXY_FLOW_ACTION
          ) {
            o(
              "WAWebNonMessageDataRequestHandlerGalaxyFlow",
            ).handleGalaxyFlowLaunchRequest(n);
            break e;
          }
          break e;
        }
    }
    function d(e, t) {
      if (t.peerDataOperationRequestType != null)
        switch (t.peerDataOperationRequestType) {
          case o("WAWebProtobufsE2E.pb").Message$PeerDataOperationRequestType
            .UPLOAD_STICKER:
            o(
              "WAWebNonMessageDataRequestHandlerUploadSticker",
            ).handleUploadStickerPeerDataOperationRequestResponse(
              e,
              t.peerDataOperationResult,
            );
            return;
          case o("WAWebProtobufsE2E.pb").Message$PeerDataOperationRequestType
            .GENERATE_LINK_PREVIEW:
            o(
              "WAWebNonMessageDataRequestHandlerGenLinkPreview",
            ).handleGenerateLinkPreviewOperationRequestResponse(t);
            return;
          case o("WAWebProtobufsE2E.pb").Message$PeerDataOperationRequestType
            .PLACEHOLDER_MESSAGE_RESEND:
            o(
              "WAWebNonMessageDataRequestHandlerPlaceholderResend",
            ).handlePlaceholderResendOperationRequestResponse(
              e,
              t.peerDataOperationResult,
            );
            return;
          case o("WAWebProtobufsE2E.pb").Message$PeerDataOperationRequestType
            .WAFFLE_LINKING_NONCE_FETCH:
            o(
              "WAWebNonMessageDataRequestHandlerWaffleLinkingNonceFetch",
            ).handleWaffleLinkingNonceFetchOperationRequestResponse(
              t.peerDataOperationResult,
            );
            return;
          case o("WAWebProtobufsE2E.pb").Message$PeerDataOperationRequestType
            .COMPANION_CANONICAL_USER_NONCE_FETCH:
            o(
              "WAWebNonMessageDataRequestHandlerCanonicalEntNonce",
            ).handleCanonicalEntNonceFetchResponse(t.peerDataOperationResult);
            return;
          case o("WAWebProtobufsE2E.pb").Message$PeerDataOperationRequestType
            .COMPANION_SYNCD_SNAPSHOT_FATAL_RECOVERY:
            if (
              o(
                "WAWebSyncdSnapshotRecoveryGatingUtils",
              ).syncdSnapshotRecoveryEnabled() === !1
            ) {
              o("WALogger").LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "syncd Snapshot recovery is not enabled",
                  ])),
              );
              return;
            }
            try {
              m(t.peerDataOperationResult[0], e);
            } catch (t) {
              (o("WALogger").ERROR(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "syncd Snapshot recovery initianl handling failed: ",
                    "",
                  ])),
                t,
              ),
                o(
                  "WAWebNonMessageDataRequestLoggingUtils",
                ).logNonMessagePeerDataResponse(
                  o("WAWebProtobufsE2E.pb").Message$PeerDataOperationRequestType
                    .COMPANION_SYNCD_SNAPSHOT_FATAL_RECOVERY,
                  e,
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
            ).handleGalaxyFlowDownloadResponse(t.peerDataOperationResult);
            return;
          case o("WAWebProtobufsE2E.pb").Message$PeerDataOperationRequestType
            .BUSINESS_BROADCAST_INSIGHTS_DELIVERED_TO: {
            var n = o(
              "WAWebBizBroadcastInsightsContactListHandler",
            ).handleInsightsContactListResponse(t.peerDataOperationResult);
            n != null &&
              o("WAWebBackendApi").frontendFireAndForget(
                "triggerBizBroadcastInsightsContactListFromBridge",
                n,
              );
            return;
          }
          default:
            return;
        }
    }
    function m(e, t) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n,
            a,
            i =
              e == null || (n = e.syncdSnapshotFatalRecoveryResponse) == null
                ? void 0
                : n.isCompressed,
            l = new (o("WABinary").Binary)(
              r("nullthrows")(
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
            c = o("WAWebSyncdConst").CollectionName.cast(u.collectionName);
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
        p.apply(this, arguments)
      );
    }
    ((l.handlePeerDataOperationRequest = c),
      (l.handlePeerDataOperationRequestResponse = d));
  },
  98,
);
