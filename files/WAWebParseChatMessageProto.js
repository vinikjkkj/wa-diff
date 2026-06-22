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
        a = e.msgMeta,
        i = n.conversation,
        l = n.extendedTextMessage;
      if (!(i == null && l == null)) {
        if (i != null)
          return {
            msgData: babelHelpers.extends({}, t, {
              type: o("WAWebMsgType").MSG_TYPE.CHAT,
              kind: o("WAWebMsgType").MsgKind.Chat,
              body: o("WAWebE2EProtoUtils").convertToTextWithoutSpecialEmojis(
                i,
              ),
            }),
            contextInfo: void 0,
          };
        if (
          !o(
            "WAWebParseExtendedTextMessageProtoUtils",
          ).isUrlExtendedTextMessage(l)
        )
          return o(
            "WAWebParseExtendedTextMessageProtoUtils",
          ).parseExtendedTextMessageProto({
            messageProtobuf: n,
            baseMessage: t,
            msgContext: r,
            msgMeta: a,
          });
      }
    }
    l.default = e;
  },
  98,
);
