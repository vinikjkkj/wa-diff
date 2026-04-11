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
    "asyncToGeneratorRuntime",
    "decodeProtobuf",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s() {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var t = yield r(
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
                      s = t.plaintext,
                      u = t.type,
                      c = o("WAWebApiHydrateWidsUtil").hydrateWids(i),
                      d = o("decodeProtobuf").decodeProtobuf(
                        o("WAWebProtobufsE2E.pb").MessageSpec,
                        s,
                      ),
                      m = o("WAWebMsgProcessingApiUtils").getFrom(c),
                      p = yield o(
                        "WAWebMsgProcessingApiUtils",
                      ).parseProtocolMessage({
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
                        o("WAWebParsedProtocolMsgType")
                          .PARSED_PROTOCOL_MESSAGE_TYPE.HISTORY
                      ) {
                        yield o(
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
                        o("WAWebParsedProtocolMsgType")
                          .PARSED_PROTOCOL_MESSAGE_TYPE.APP_STATE_SYNC_KEY_SHARE
                      ) {
                        yield o(
                          "WAWebKeyManagementHandleKeyShareApi",
                        ).handleAppStateSyncKeyShare(
                          r("WANullthrows")(
                            p == null ? void 0 : p.appStateSyncKeyShare,
                          ),
                          m,
                        );
                        break e;
                      }
                      if (
                        u ===
                        o("WAWebParsedProtocolMsgType")
                          .PARSED_PROTOCOL_MESSAGE_TYPE
                          .APP_STATE_SYNC_KEY_REQUEST
                      ) {
                        yield o(
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
                        o("WAWebParsedProtocolMsgType")
                          .PARSED_PROTOCOL_MESSAGE_TYPE
                          .PEER_DATA_OPERATION_REQUEST_RESPONSE_MESSAGE
                      ) {
                        yield o(
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
                        o("WAWebParsedProtocolMsgType")
                          .PARSED_PROTOCOL_MESSAGE_TYPE
                          .PEER_DATA_OPERATION_REQUEST_MESSAGE
                      ) {
                        yield o(
                          "WAWebNonMessageDataRequestHandler",
                        ).handlePeerDataOperationRequest(
                          c.externalId,
                          r("WANullthrows")(
                            p == null
                              ? void 0
                              : p.peerDataOperationRequestMessage,
                          ),
                        );
                        break e;
                      }
                      throw Error(
                        "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                          u,
                      );
                    }
                    yield r(
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
        u.apply(this, arguments)
      );
    }
    l.default = s;
  },
  98,
);
