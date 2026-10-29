__d(
  "WAWebMusicMsgDisplayClass",
  [
    "WAWebMsgGetters",
    "WAWebMusicGatingUtils",
    "WAWebProtobufsE2E.pb",
    "WAWebStickerMsgDisplayClass",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t;
      return o("WAWebMusicGatingUtils").isMusicOnChatsGeogatingEnabled()
        ? ((t = o("WAWebMsgGetters").getMusicData(e.msg)) == null
            ? void 0
            : t.style) !==
          o("WAWebProtobufsE2E.pb").Message$MusicMessage$MusicMessageStyle.VINYL
          ? "messageChat"
          : r("WAWebStickerMsgDisplayClass")(e)
        : "messageChat messagePlaceholder";
    }
    l.default = e;
  },
  98,
);
