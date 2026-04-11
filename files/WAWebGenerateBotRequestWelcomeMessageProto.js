__d(
  "WAWebGenerateBotRequestWelcomeMessageProto",
  ["WAWebProtobufsE2E.pb"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.json,
        n = t.botDeepLinkToken;
      return {
        protocolMessage: {
          type: o("WAWebProtobufsE2E.pb").Message$ProtocolMessage$Type
            .REQUEST_WELCOME_MESSAGE,
          requestWelcomeMessageMetadata:
            n != null
              ? { botAgentMetadata: { deepLinkMetadata: { token: n } } }
              : void 0,
        },
      };
    }
    l.default = e;
  },
  98,
);
