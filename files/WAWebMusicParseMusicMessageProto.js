__d(
  "WAWebMusicParseMusicMessageProto",
  ["WAWebMsgType", "WAWebMusicParsingUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.baseMessage,
        n = e.messageProtobuf,
        r = n.musicMessage;
      if (r != null) {
        var a = r.contextInfo,
          i = o("WAWebMusicParsingUtils").toMusicData(r);
        return i == null ||
          !o("WAWebMusicParsingUtils").canRenderMusicMessage(i)
          ? {
              msgData: babelHelpers.extends({}, t, {
                type: o("WAWebMsgType").MSG_TYPE.UNKNOWN,
                kind: o("WAWebMsgType").MsgKind.Unknown,
                futureproofType: o("WAWebMsgType").MSG_TYPE.MUSIC,
              }),
              contextInfo: a,
            }
          : {
              msgData: babelHelpers.extends({}, t, {
                musicData: i,
                type: o("WAWebMsgType").MSG_TYPE.MUSIC,
                kind: o("WAWebMsgType").MsgKind.Music,
              }),
              contextInfo: a,
            };
      }
    }
    l.default = e;
  },
  98,
);
