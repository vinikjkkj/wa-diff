__d(
  "WAWebHandleDeferredMessages",
  [
    "WALogger",
    "WANullthrows",
    "WAPromiseEach",
    "WAWebApiDeferredMessagesStorage",
    "WAWebApiHydrateWidsUtil",
    "WAWebHandleHistorySyncNotification",
    "WAWebKeyManagementHandleKeyRequestApi",
    "WAWebKeyManagementHandleKeyShareApi",
    "WAWebMsgProcessingApiUtils",
    "WAWebNonMessageDataRequestHandler",
    "WAWebParsedProtocolMsgType",
    "WAWebProtobufsE2E.pb",
    "decodeProtobuf",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    async function s() {
      var t = await r("WAWebApiDeferredMessagesStorage").getDeferredMessages();
      await o("WAPromiseEach").promiseEach(t, async function (t, n) {
        if (t) {
          var a = t.bizInfo,
            i = t.info,
            l = t.paymentInfo,
            s = t.plaintext,
            u = t.type,
            c = o("WAWebApiHydrateWidsUtil").hydrateWids(i),
            d = o("decodeProtobuf").decodeProtobuf(
              o("WAWebProtobufsE2E.pb").MessageSpec,
              s,
            ),
            m = o("WAWebMsgProcessingApiUtils").getFrom(c),
            p = await o("WAWebMsgProcessingApiUtils").parseProtocolMessage({
              info: c,
              msgProtobuf: d,
              paymentInfo: l,
              bizInfo: a,
              hsmInfo: null,
            });
          if (p == null) {
            o("WALogger").ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[push-notification] deferred: parseProtocolMessage failed",
                ])),
            );
            return;
          }
          e: {
            if (
              u ===
              o("WAWebParsedProtocolMsgType").PARSED_PROTOCOL_MESSAGE_TYPE
                .HISTORY
            ) {
              await o(
                "WAWebHandleHistorySyncNotification",
              ).handleHistorySyncNotification(
                r("WANullthrows")(p == null ? void 0 : p.history),
                m,
                c.externalId,
              );
              break e;
            }
            if (
              u ===
              o("WAWebParsedProtocolMsgType").PARSED_PROTOCOL_MESSAGE_TYPE
                .APP_STATE_SYNC_KEY_SHARE
            ) {
              await o(
                "WAWebKeyManagementHandleKeyShareApi",
              ).handleAppStateSyncKeyShare(
                r("WANullthrows")(p == null ? void 0 : p.appStateSyncKeyShare),
                m,
              );
              break e;
            }
            if (
              u ===
              o("WAWebParsedProtocolMsgType").PARSED_PROTOCOL_MESSAGE_TYPE
                .APP_STATE_SYNC_KEY_REQUEST
            ) {
              await o(
                "WAWebKeyManagementHandleKeyRequestApi",
              ).handleAppStateSyncKeyRequest(
                r("WANullthrows")(
                  p == null ? void 0 : p.appStateSyncKeyRequest,
                ),
                m,
              );
              break e;
            }
            if (
              u ===
              o("WAWebParsedProtocolMsgType").PARSED_PROTOCOL_MESSAGE_TYPE
                .PEER_DATA_OPERATION_REQUEST_RESPONSE_MESSAGE
            ) {
              await o(
                "WAWebNonMessageDataRequestHandler",
              ).handlePeerDataOperationRequestResponse(
                c.externalId,
                r("WANullthrows")(
                  p == null
                    ? void 0
                    : p.peerDataOperationRequestResponseMessage,
                ),
              );
              break e;
            }
            if (
              u ===
              o("WAWebParsedProtocolMsgType").PARSED_PROTOCOL_MESSAGE_TYPE
                .PEER_DATA_OPERATION_REQUEST_MESSAGE
            ) {
              await o(
                "WAWebNonMessageDataRequestHandler",
              ).handlePeerDataOperationRequest(
                c.externalId,
                r("WANullthrows")(
                  p == null ? void 0 : p.peerDataOperationRequestMessage,
                ),
              );
              break e;
            }
            throw Error(
              "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                u,
            );
          }
          await r("WAWebApiDeferredMessagesStorage").deleteDeferredMessage(
            t.id,
          );
        }
      });
    }
    l.default = s;
  },
  98,
);
