__d(
  "WAWebParseBotRequestWelcomeMessageProto",
  ["WAWebMsgType", "WAWebProtobufsE2E.pb"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t,
        n = e.baseMessage,
        r = e.messageProtobuf;
      if (
        ((t = r.protocolMessage) == null ? void 0 : t.type) ===
        o("WAWebProtobufsE2E.pb").Message$ProtocolMessage$Type
          .REQUEST_WELCOME_MESSAGE
      )
        return {
          msgData: babelHelpers.extends({}, n, {
            type: o("WAWebMsgType").MSG_TYPE.PROTOCOL,
            kind: o("WAWebMsgType").MsgKind.Protocol,
            subtype: "bot_request_welcome",
          }),
          contextInfo: null,
        };
    }
    l.default = e;
  },
  98,
);
