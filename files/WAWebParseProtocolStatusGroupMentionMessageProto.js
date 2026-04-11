__d(
  "WAWebParseProtocolStatusGroupMentionMessageProto",
  ["WAWebMsgType", "WAWebStatusGatingUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.baseMessage,
        n = e.messageProtobuf,
        r = e.msgContext;
      if (
        !(
          !o(
            "WAWebStatusGatingUtils",
          ).isStatusPrivateMentionsReceiveEnabled() &&
          !o(
            "WAWebStatusGatingUtils",
          ).isStatusPrivateGroupMentionsReceivingEnabled()
        )
      ) {
        var a = n.groupStatusMentionMessage;
        if (!(a == null || (a == null ? void 0 : a.message) == null))
          return {
            msgData: babelHelpers.extends({}, t, {
              type: o("WAWebMsgType").MSG_TYPE.UNKNOWN,
              kind: o("WAWebMsgType").MsgKind.Unknown,
              futureproofType: o("WAWebMsgType").MSG_TYPE.PROTOCOL,
              futureproofSubtype: "status_group_mention_message",
            }),
            contextInfo: null,
          };
      }
    }
    l.default = e;
  },
  98,
);
