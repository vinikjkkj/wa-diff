__d(
  "WAWebDeferrableProtocolMsg",
  [
    "WAWebApiDeferredMessagesStorage",
    "WAWebParsedProtocolMsgType",
    "WAWebRuntimeEnvironmentUtils",
    "WAWebWorkerSafeBackendApi",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return (
        e.history != null ||
        e.appStateSyncKeyShare != null ||
        e.appStateSyncKeyRequest != null ||
        e.peerDataOperationRequestResponseMessage != null ||
        e.peerDataOperationRequestMessage != null
      );
    }
    function s(e) {
      var t = e.bizInfo,
        n = e.from,
        r = e.info,
        a = e.parsed,
        i = e.paymentInfo,
        l = e.plaintext,
        s = u(a);
      return o("WAWebRuntimeEnvironmentUtils").isWorker()
        ? o("WAWebApiDeferredMessagesStorage").updateDeferredMessages([
            {
              id: r.externalId,
              type: s,
              plaintext: l,
              info: r,
              paymentInfo: i,
              bizInfo: t,
            },
          ])
        : c(s, a, n, r);
    }
    function u(e) {
      return ((typeof e == "object" && e !== null) || typeof e == "function") &&
        "history" in e
        ? o("WAWebParsedProtocolMsgType").PARSED_PROTOCOL_MESSAGE_TYPE.HISTORY
        : ((typeof e == "object" && e !== null) || typeof e == "function") &&
            "appStateSyncKeyShare" in e
          ? o("WAWebParsedProtocolMsgType").PARSED_PROTOCOL_MESSAGE_TYPE
              .APP_STATE_SYNC_KEY_SHARE
          : ((typeof e == "object" && e !== null) || typeof e == "function") &&
              "appStateSyncKeyRequest" in e
            ? o("WAWebParsedProtocolMsgType").PARSED_PROTOCOL_MESSAGE_TYPE
                .APP_STATE_SYNC_KEY_REQUEST
            : ((typeof e == "object" && e !== null) ||
                  typeof e == "function") &&
                "peerDataOperationRequestResponseMessage" in e
              ? o("WAWebParsedProtocolMsgType").PARSED_PROTOCOL_MESSAGE_TYPE
                  .PEER_DATA_OPERATION_REQUEST_RESPONSE_MESSAGE
              : ((typeof e == "object" && e !== null) ||
                    typeof e == "function") &&
                  "peerDataOperationRequestMessage" in e
                ? o("WAWebParsedProtocolMsgType").PARSED_PROTOCOL_MESSAGE_TYPE
                    .PEER_DATA_OPERATION_REQUEST_MESSAGE
                : (function () {
                    throw Error(
                      "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                        e,
                    );
                  })();
    }
    function c(e, t, n, a) {
      e: {
        if (
          e ===
          o("WAWebParsedProtocolMsgType").PARSED_PROTOCOL_MESSAGE_TYPE.HISTORY
        ) {
          return (
            o("WAWebWorkerSafeBackendApi").workerSafeSendAndReceive(
              "handleHistorySyncNotification",
              {
                historySyncMetaData: r("nullthrows")(t.history),
                from: n,
                externalId: a.externalId,
              },
            ),
            null
          );
          break e;
        }
        if (
          e ===
          o("WAWebParsedProtocolMsgType").PARSED_PROTOCOL_MESSAGE_TYPE
            .APP_STATE_SYNC_KEY_SHARE
        )
          return o("WAWebWorkerSafeBackendApi").workerSafeSendAndReceive(
            "handleAppStateSyncKeyShare",
            { keyShare: r("nullthrows")(t.appStateSyncKeyShare), from: n },
          );
        if (
          e ===
          o("WAWebParsedProtocolMsgType").PARSED_PROTOCOL_MESSAGE_TYPE
            .APP_STATE_SYNC_KEY_REQUEST
        ) {
          return (
            o("WAWebWorkerSafeBackendApi").workerSafeSendAndReceive(
              "handleAppStateSyncKeyRequest",
              {
                keyRequest: r("nullthrows")(t.appStateSyncKeyRequest),
                from: n,
              },
            ),
            null
          );
          break e;
        }
        if (
          e ===
          o("WAWebParsedProtocolMsgType").PARSED_PROTOCOL_MESSAGE_TYPE
            .PEER_DATA_OPERATION_REQUEST_RESPONSE_MESSAGE
        ) {
          return (
            o("WAWebWorkerSafeBackendApi").workerSafeSendAndReceive(
              "handlePeerDataOperationRequestResponse",
              {
                stanzaId: a.externalId,
                response: r("nullthrows")(
                  t.peerDataOperationRequestResponseMessage,
                ),
              },
            ),
            null
          );
          break e;
        }
        if (
          e ===
          o("WAWebParsedProtocolMsgType").PARSED_PROTOCOL_MESSAGE_TYPE
            .PEER_DATA_OPERATION_REQUEST_MESSAGE
        ) {
          return (
            o("WAWebWorkerSafeBackendApi").workerSafeSendAndReceive(
              "handlePeerDataOperationRequest",
              {
                stanzaId: a.externalId,
                request: r("nullthrows")(t.peerDataOperationRequestMessage),
              },
            ),
            null
          );
          break e;
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            e,
        );
      }
    }
    ((l.isDeferrableProtocolMsg = e), (l.handleDeferrableProtocolMsg = s));
  },
  98,
);
