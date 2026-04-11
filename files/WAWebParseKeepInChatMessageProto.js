__d(
  "WAWebParseKeepInChatMessageProto",
  ["WALongInt", "WAWebE2EProtoUtils", "WAWebMsgType"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.baseMessage,
        n = e.messageProtobuf,
        r = n.keepInChatMessage;
      if (r != null) {
        var a = r.keepType,
          i = r.key,
          l = r.timestampMs,
          s = babelHelpers.extends({}, t, {
            keptMessageKey: o(
              "WAWebE2EProtoUtils",
            ).translateRegularMessageKeyToLocalReference(i, t),
            type: o("WAWebMsgType").MSG_TYPE.KEEP_IN_CHAT,
            kind: o("WAWebMsgType").MsgKind.KeepInChat,
            keepType: a,
            senderTimestampMs: o("WALongInt").maybeNumberOrThrowIfTooLarge(l),
          });
        return { msgData: s, contextInfo: null };
      }
    }
    l.default = e;
  },
  98,
);
