__d(
  "WAWebParseChatMessageProto",
  [
    "WAWebE2EProtoUtils",
    "WAWebMsgType",
    "WAWebParseExtendedTextMessageProtoUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.baseMessage,
        n = e.messageProtobuf,
        r = e.msgContext,
        a = n.conversation,
        i = n.extendedTextMessage;
      if (!(a == null && i == null)) {
        if (a != null)
          return {
            msgData: babelHelpers.extends({}, t, {
              type: o("WAWebMsgType").MSG_TYPE.CHAT,
              kind: o("WAWebMsgType").MsgKind.Chat,
              body: o("WAWebE2EProtoUtils").convertToTextWithoutSpecialEmojis(
                a,
              ),
            }),
            contextInfo: void 0,
          };
        if (
          !o(
            "WAWebParseExtendedTextMessageProtoUtils",
          ).isUrlExtendedTextMessage(i)
        )
          return o(
            "WAWebParseExtendedTextMessageProtoUtils",
          ).parseExtendedTextMessageProto({
            messageProtobuf: n,
            baseMessage: t,
            msgContext: r,
          });
      }
    }
    l.default = e;
  },
  98,
);
