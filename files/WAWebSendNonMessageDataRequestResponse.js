__d(
  "WAWebSendNonMessageDataRequestResponse",
  [
    "Promise",
    "WALogger",
    "WAWebApiPeerMessageStore",
    "WAWebMsgKey",
    "WAWebMsgType",
    "WAWebProtobufsE2E.pb",
    "WAWebSendAppStateSyncMsgJob",
    "WAWebUserPrefsMeUser",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(e, t, n) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, r, a) {
          var i = yield d(t, r, a);
          return i == null
            ? (o("WALogger").WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "peer message: the constructed peer data operation request response message is null",
                  ])),
              ),
              (s || (s = n("Promise"))).resolve())
            : (yield o("WAWebApiPeerMessageStore").storePeerMessages([i]),
              o("WAWebSendAppStateSyncMsgJob").encryptAndSendKeyMsg({
                msg: i,
              }));
        })),
        c.apply(this, arguments)
      );
    }
    function d(e, t, n) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var a =
            t ===
            o("WAWebProtobufsE2E.pb").Message$PeerDataOperationRequestType
              .UPLOAD_STICKER
              ? p(e, n)
              : t ===
                    o("WAWebProtobufsE2E.pb")
                      .Message$PeerDataOperationRequestType
                      .SEND_RECENT_STICKER_BOOTSTRAP ||
                  t ===
                    o("WAWebProtobufsE2E.pb")
                      .Message$PeerDataOperationRequestType
                      .GENERATE_LINK_PREVIEW ||
                  t ===
                    o("WAWebProtobufsE2E.pb")
                      .Message$PeerDataOperationRequestType
                      .HISTORY_SYNC_ON_DEMAND ||
                  t ===
                    o("WAWebProtobufsE2E.pb")
                      .Message$PeerDataOperationRequestType
                      .PLACEHOLDER_MESSAGE_RESEND ||
                  t ===
                    o("WAWebProtobufsE2E.pb")
                      .Message$PeerDataOperationRequestType
                      .WAFFLE_LINKING_NONCE_FETCH ||
                  t ===
                    o("WAWebProtobufsE2E.pb")
                      .Message$PeerDataOperationRequestType
                      .FULL_HISTORY_SYNC_ON_DEMAND ||
                  t ===
                    o("WAWebProtobufsE2E.pb")
                      .Message$PeerDataOperationRequestType
                      .COMPANION_META_NONCE_FETCH ||
                  t ===
                    o("WAWebProtobufsE2E.pb")
                      .Message$PeerDataOperationRequestType
                      .COMPANION_SYNCD_SNAPSHOT_FATAL_RECOVERY ||
                  t ===
                    o("WAWebProtobufsE2E.pb")
                      .Message$PeerDataOperationRequestType
                      .COMPANION_CANONICAL_USER_NONCE_FETCH ||
                  t ===
                    o("WAWebProtobufsE2E.pb")
                      .Message$PeerDataOperationRequestType
                      .HISTORY_SYNC_CHUNK_RETRY ||
                  t ===
                    o("WAWebProtobufsE2E.pb")
                      .Message$PeerDataOperationRequestType
                      .GALAXY_FLOW_ACTION ||
                  t ===
                    o("WAWebProtobufsE2E.pb")
                      .Message$PeerDataOperationRequestType
                      .BUSINESS_BROADCAST_INSIGHTS_DELIVERED_TO ||
                  t ===
                    o("WAWebProtobufsE2E.pb")
                      .Message$PeerDataOperationRequestType
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
            id: yield r("WAWebMsgKey").newId(),
          });
          return {
            id: i,
            to: o("WAWebWidFactory").createDeviceWidFromUserAndDevice(
              o("WAWebUserPrefsMeUser").getMeDevicePnOrThrow_DO_NOT_USE().user,
              o("WAWebUserPrefsMeUser").getMeDevicePnOrThrow_DO_NOT_USE()
                .server,
              0,
            ),
            type: "protocol",
            subtype: "peer_data_operation_request_response_message",
            kind: o("WAWebMsgType").MsgKind.PeerMessage,
            peerDataOperationRequestResponseMessage: a,
          };
        })),
        m.apply(this, arguments)
      );
    }
    function p(e, t) {
      return t == null
        ? null
        : {
            stanzaId: e,
            peerDataOperationRequestType: o("WAWebProtobufsE2E.pb")
              .Message$PeerDataOperationRequestType.UPLOAD_STICKER,
            peerDataOperationResult: t,
          };
    }
    l.sendPeerDataOperationRequestResponseMessage = u;
  },
  98,
);
