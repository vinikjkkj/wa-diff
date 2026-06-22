__d(
  "WAWebParseExtendedTextUrlChatMessageProto",
  ["WAWebMsgType", "WAWebParseExtendedTextMessageProtoUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.baseMessage,
        n = e.messageProtobuf,
        r = e.msgContext,
        a = e.msgMeta,
        i = e.rcat,
        l = n.extendedTextMessage;
      if (
        l != null &&
        o("WAWebParseExtendedTextMessageProtoUtils").isUrlExtendedTextMessage(l)
      ) {
        var s = o(
            "WAWebParseExtendedTextMessageProtoUtils",
          ).parseExtendedTextMessageProto({
            messageProtobuf: n,
            baseMessage: t,
            msgContext: r,
            msgMeta: a,
          }),
          u = babelHelpers.extends({}, t, s == null ? void 0 : s.msgData, {
            type: o("WAWebMsgType").MSG_TYPE.CHAT,
            kind: o("WAWebMsgType").MsgKind.Chat,
            subtype: "url",
            rcat: i,
          });
        return { msgData: u, contextInfo: l == null ? void 0 : l.contextInfo };
      }
    }
    l.default = e;
  },
  98,
);
