__d(
  "WAWebParseExtendedTextUrlChatMessageProto",
  ["WAWebMsgType", "WAWebParseExtendedTextMessageProtoUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.baseMessage,
        n = e.messageProtobuf,
        r = e.msgContext,
        a = e.rcat,
        i = n.extendedTextMessage;
      if (
        i != null &&
        o("WAWebParseExtendedTextMessageProtoUtils").isUrlExtendedTextMessage(i)
      ) {
        var l = o(
            "WAWebParseExtendedTextMessageProtoUtils",
          ).parseExtendedTextMessageProto({
            messageProtobuf: n,
            baseMessage: t,
            msgContext: r,
          }),
          s = babelHelpers.extends({}, t, l == null ? void 0 : l.msgData, {
            type: o("WAWebMsgType").MSG_TYPE.CHAT,
            kind: o("WAWebMsgType").MsgKind.Chat,
            subtype: "url",
            rcat: a,
          });
        return { msgData: s, contextInfo: i == null ? void 0 : i.contextInfo };
      }
    }
    l.default = e;
  },
  98,
);
