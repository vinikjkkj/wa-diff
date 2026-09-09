__d(
  "WAWebMusicParseMusicMessageProto",
  ["WAWebMsgType"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.baseMessage,
        n = e.messageProtobuf,
        r = n.musicMessage;
      if (r != null)
        return {
          msgData: babelHelpers.extends({}, t, {
            type: o("WAWebMsgType").MSG_TYPE.UNKNOWN,
            kind: o("WAWebMsgType").MsgKind.Unknown,
            futureproofType: o("WAWebMsgType").MSG_TYPE.MUSIC,
          }),
          contextInfo: null,
        };
    }
    l.default = e;
  },
  98,
);
