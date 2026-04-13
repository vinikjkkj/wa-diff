__d(
  "WAWebParseProtocolStatusMentionMessageProto",
  ["WAWebMsgType", "WAWebStatusGatingUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.baseMessage,
        n = e.messageProtobuf,
        r = e.msgContext,
        a = n.statusMentionMessage;
      if (!(a == null || (a == null ? void 0 : a.message) == null)) {
        if (o("WAWebStatusGatingUtils").isStatusMentionMessageEnabled()) {
          var i,
            l = a.message,
            s = l == null || (i = l.protocolMessage) == null ? void 0 : i.key;
          return {
            msgData: babelHelpers.extends({}, t, {
              type: o("WAWebMsgType").MSG_TYPE.PROTOCOL,
              subtype: "status_mention_message",
              kind: o("WAWebMsgType").MsgKind.Protocol,
            }),
            contextInfo: {
              stanzaId: s == null ? void 0 : s.id,
              mentionedJid: [],
              groupMentions: [],
              statusAttributions: [],
            },
          };
        }
        return {
          msgData: babelHelpers.extends({}, t, {
            type: o("WAWebMsgType").MSG_TYPE.UNKNOWN,
            kind: o("WAWebMsgType").MsgKind.Unknown,
            futureproofType: o("WAWebMsgType").MSG_TYPE.PROTOCOL,
            futureproofSubtype: "status_mention_message",
          }),
          contextInfo: null,
        };
      }
    }
    l.default = e;
  },
  98,
);
