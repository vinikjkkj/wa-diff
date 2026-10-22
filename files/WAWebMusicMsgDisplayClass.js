__d(
  "WAWebMusicMsgDisplayClass",
  ["WAWebMusicGatingUtils", "WAWebStickerMsgDisplayClass"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return o("WAWebMusicGatingUtils").isMusicOnChatsGeogatingEnabled()
        ? r("WAWebStickerMsgDisplayClass")(e)
        : "messageChat messagePlaceholder";
    }
    l.default = e;
  },
  98,
);
