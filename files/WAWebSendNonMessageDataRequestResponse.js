__d(
  "WAWebSendNonMessageDataRequestResponse",
  [
    "WALogger",
    "WAWebApiPeerMessageStore",
    "WAWebMsgKey",
    "WAWebMsgType",
    "WAWebProtobufsE2E.pb",
    "WAWebSendAppStateSyncMsgJob",
    "WAWebUserPrefsMeUser",
    "WAWebWidFactory",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    async function s(t, n, r) {
      var a = await u(t, n, r);
      return a == null
        ? (o("WALogger").WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "peer message: the constructed peer data operation request response message is null",
              ])),
          ),
          Promise.resolve())
        : (await o("WAWebApiPeerMessageStore").storePeerMessages([a]),
          o("WAWebSendAppStateSyncMsgJob").encryptAndSendKeyMsg({ msg: a }));
    }
    async function u(e, t, n) {
      var a =
        t ===
        o("WAWebProtobufsE2E.pb").Message$PeerDataOperationRequestType
          .UPLOAD_STICKER
          ? c(e, n)
          : t ===
                o("WAWebProtobufsE2E.pb").Message$PeerDataOperationRequestType
                  .SEND_RECENT_STICKER_BOOTSTRAP ||
              t ===
                o("WAWebProtobufsE2E.pb").Message$PeerDataOperationRequestType
                  .GENERATE_LINK_PREVIEW ||
              t ===
                o("WAWebProtobufsE2E.pb").Message$PeerDataOperationRequestType
                  .HISTORY_SYNC_ON_DEMAND ||
              t ===
                o("WAWebProtobufsE2E.pb").Message$PeerDataOperationRequestType
                  .PLACEHOLDER_MESSAGE_RESEND ||
              t ===
                o("WAWebProtobufsE2E.pb").Message$PeerDataOperationRequestType
                  .WAFFLE_LINKING_NONCE_FETCH ||
              t ===
                o("WAWebProtobufsE2E.pb").Message$PeerDataOperationRequestType
                  .FULL_HISTORY_SYNC_ON_DEMAND ||
              t ===
                o("WAWebProtobufsE2E.pb").Message$PeerDataOperationRequestType
                  .COMPANION_META_NONCE_FETCH ||
              t ===
                o("WAWebProtobufsE2E.pb").Message$PeerDataOperationRequestType
                  .COMPANION_SYNCD_SNAPSHOT_FATAL_RECOVERY ||
              t ===
                o("WAWebProtobufsE2E.pb").Message$PeerDataOperationRequestType
                  .COMPANION_CANONICAL_USER_NONCE_FETCH ||
              t ===
                o("WAWebProtobufsE2E.pb").Message$PeerDataOperationRequestType
                  .HISTORY_SYNC_CHUNK_RETRY ||
              t ===
                o("WAWebProtobufsE2E.pb").Message$PeerDataOperationRequestType
                  .GALAXY_FLOW_ACTION ||
              t ===
                o("WAWebProtobufsE2E.pb").Message$PeerDataOperationRequestType
                  .BUSINESS_BROADCAST_INSIGHTS_DELIVERED_TO ||
              t ===
                o("WAWebProtobufsE2E.pb").Message$PeerDataOperationRequestType
                  .BUSINESS_BROADCAST_INSIGHTS_REFRESH
            ? null
            : (function () {
                throw Error(
                  "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                    t,
                );
              })();
      if (a == null) return null;
      var i = new (r("WAWebMsgKey"))({
        fromMe: !0,
        remote: o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE(),
        id: await r("WAWebMsgKey").newId(),
      });
      return {
        id: i,
        to: o("WAWebWidFactory").createDeviceWidFromUserAndDevice(
          o("WAWebUserPrefsMeUser").getMeDevicePnOrThrow_DO_NOT_USE().user,
          o("WAWebUserPrefsMeUser").getMeDevicePnOrThrow_DO_NOT_USE().server,
          0,
        ),
        type: "protocol",
        subtype: "peer_data_operation_request_response_message",
        kind: o("WAWebMsgType").MsgKind.PeerMessage,
        peerDataOperationRequestResponseMessage: a,
      };
    }
    function c(e, t) {
      return t == null
        ? null
        : {
            stanzaId: e,
            peerDataOperationRequestType: o("WAWebProtobufsE2E.pb")
              .Message$PeerDataOperationRequestType.UPLOAD_STICKER,
            peerDataOperationResult: t,
          };
    }
    l.sendPeerDataOperationRequestResponseMessage = s;
  },
  98,
);
