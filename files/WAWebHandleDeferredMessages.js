__d(
  "WAWebHandleDeferredMessages",
  [
    "WALogger",
    "WAPromiseEach",
    "WAProtoEntryLimitError",
    "WAWebApiDeferredMessagesStorage",
    "WAWebApiHydrateWidsUtil",
    "WAWebHandleHistorySyncNotification",
    "WAWebKeyManagementHandleKeyRequestApi",
    "WAWebKeyManagementHandleKeyShareApi",
    "WAWebMsgProcessingApiUtils",
    "WAWebNonMessageDataRequestHandler",
    "WAWebParsedProtocolMsgType",
    "WAWebProtobufsE2E.pb",
    "asyncToGeneratorRuntime",
    "decodeProtobuf",
    "justknobx",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u() {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var t = yield o(
            "WAWebApiDeferredMessagesStorage",
          ).getDeferredMessages();
          yield o("WAPromiseEach").promiseEach(
            t,
            (function () {
              var t = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* (t, n) {
                  if (t) {
                    var a = t.bizInfo,
                      i = t.info,
                      l = t.paymentInfo,
                      u = t.plaintext,
                      c = t.type,
                      d = o("WAWebApiHydrateWidsUtil").hydrateWids(i),
                      m;
                    try {
                      m = o("decodeProtobuf").decodeProtobuf(
                        o("WAWebProtobufsE2E.pb").MessageSpec,
                        u,
                      );
                    } catch (t) {
                      if (
                        t instanceof
                          o("WAProtoEntryLimitError").ProtobufEntryLimitError &&
                        r("justknobx")._("7544")
                      ) {
                        o("WALogger").ERROR(
                          e ||
                            (e = babelHelpers.taggedTemplateLiteralLoose([
                              "[deferred-message] message over protobuf entry limit: ",
                              "",
                            ])),
                          t.code,
                        );
                        return;
                      }
                      throw t;
                    }
                    var p = o("WAWebMsgProcessingApiUtils").getFrom(d),
                      _ = yield o(
                        "WAWebMsgProcessingApiUtils",
                      ).parseProtocolMessage({
                        info: d,
                        msgProtobuf: m,
                        paymentInfo: l,
                        bizInfo: a,
                        hsmInfo: null,
                      });
                    if (_ == null) {
                      o("WALogger").ERROR(
                        s ||
                          (s = babelHelpers.taggedTemplateLiteralLoose([
                            "[push-notification] deferred: parseProtocolMessage failed",
                          ])),
                      );
                      return;
                    }
                    e: {
                      if (
                        c ===
                        o("WAWebParsedProtocolMsgType")
                          .PARSED_PROTOCOL_MESSAGE_TYPE.HISTORY
                      ) {
                        yield o(
                          "WAWebHandleHistorySyncNotification",
                        ).handleHistorySyncNotification(
                          r("nullthrows")(_ == null ? void 0 : _.history),
                          p,
                          d.externalId,
                        );
                        break e;
                      }
                      if (
                        c ===
                        o("WAWebParsedProtocolMsgType")
                          .PARSED_PROTOCOL_MESSAGE_TYPE.APP_STATE_SYNC_KEY_SHARE
                      ) {
                        yield o(
                          "WAWebKeyManagementHandleKeyShareApi",
                        ).handleAppStateSyncKeyShare(
                          r("nullthrows")(
                            _ == null ? void 0 : _.appStateSyncKeyShare,
                          ),
                          p,
                        );
                        break e;
                      }
                      if (
                        c ===
                        o("WAWebParsedProtocolMsgType")
                          .PARSED_PROTOCOL_MESSAGE_TYPE
                          .APP_STATE_SYNC_KEY_REQUEST
                      ) {
                        yield o(
                          "WAWebKeyManagementHandleKeyRequestApi",
                        ).handleAppStateSyncKeyRequest(
                          r("nullthrows")(
                            _ == null ? void 0 : _.appStateSyncKeyRequest,
                          ),
                          p,
                        );
                        break e;
                      }
                      if (
                        c ===
                        o("WAWebParsedProtocolMsgType")
                          .PARSED_PROTOCOL_MESSAGE_TYPE
                          .PEER_DATA_OPERATION_REQUEST_RESPONSE_MESSAGE
                      ) {
                        yield o(
                          "WAWebNonMessageDataRequestHandler",
                        ).handlePeerDataOperationRequestResponse(
                          d.externalId,
                          r("nullthrows")(
                            _ == null
                              ? void 0
                              : _.peerDataOperationRequestResponseMessage,
                          ),
                        );
                        break e;
                      }
                      if (
                        c ===
                        o("WAWebParsedProtocolMsgType")
                          .PARSED_PROTOCOL_MESSAGE_TYPE
                          .PEER_DATA_OPERATION_REQUEST_MESSAGE
                      ) {
                        yield o(
                          "WAWebNonMessageDataRequestHandler",
                        ).handlePeerDataOperationRequest(
                          d.externalId,
                          r("nullthrows")(
                            _ == null
                              ? void 0
                              : _.peerDataOperationRequestMessage,
                          ),
                        );
                        break e;
                      }
                      throw Error(
                        "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                          c,
                      );
                    }
                    yield o(
                      "WAWebApiDeferredMessagesStorage",
                    ).deleteDeferredMessage(t.id);
                  }
                },
              );
              return function (e, n) {
                return t.apply(this, arguments);
              };
            })(),
          );
        })),
        c.apply(this, arguments)
      );
    }
    l.default = u;
  },
  98,
);
