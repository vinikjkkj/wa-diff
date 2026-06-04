__d(
  "WAWebStickerMsgDisplayClass",
  ["WAWebFrontendMsgGetters"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.msg;
      return o("WAWebFrontendMsgGetters").getIsTransparentMsg(t)
        ? "messageTransparent"
        : "messageSticker";
    }
    l.default = e;
  },
  98,
);
