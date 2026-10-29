__d(
  "WAWebMusicParseMusicMessageProto",
  [
    "WAWebMsgType",
    "WAWebMusicLyricsUtils",
    "WAWebMusicParsingUtils",
    "WAWebProtobufsE2E.pb",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.baseMessage,
        n = e.messageProtobuf,
        r = e.msgContext,
        a = n.musicMessage;
      if (a != null) {
        var i = a.contextInfo,
          l = o("WAWebMusicParsingUtils").toMusicData(a);
        if (l == null || !o("WAWebMusicParsingUtils").canRenderMusicMessage(l))
          return {
            msgData: babelHelpers.extends({}, t, {
              type: o("WAWebMsgType").MSG_TYPE.UNKNOWN,
              kind: o("WAWebMsgType").MsgKind.Unknown,
              futureproofType: o("WAWebMsgType").MSG_TYPE.MUSIC,
            }),
            contextInfo: i,
          };
        var s =
          l.style ===
            o("WAWebProtobufsE2E.pb").Message$MusicMessage$MusicMessageStyle
              .LYRICS &&
          r !== "quoted" &&
          r !== "history_quoted"
            ? o("WAWebMusicLyricsUtils").toMusicLyrics(
                a.lyrics,
                l.songStartTimeMs,
                l.clipDurationMs,
              )
            : null;
        return {
          msgData: babelHelpers.extends({}, t, {
            musicData:
              s == null
                ? l
                : babelHelpers.extends({}, l, {
                    lyrics: s,
                    lyricsConfirmedAtS: t.t,
                  }),
            type: o("WAWebMsgType").MSG_TYPE.MUSIC,
            kind: o("WAWebMsgType").MsgKind.Music,
          }),
          contextInfo: i,
        };
      }
    }
    l.default = e;
  },
  98,
);
