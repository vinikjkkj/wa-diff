__d(
  "WAWebChatMsgDisplayClass",
  [
    "WAWebDisplayType",
    "WAWebFrontendMsgGetters",
    "WAWebMsgGetters",
    "WAWebUtilsShouldShowVideoPreview",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.displayType,
        n = e.msg;
      return o("WAWebFrontendMsgGetters").getIsTransparentMsg(n)
        ? "messageTransparent"
        : r("WAWebUtilsShouldShowVideoPreview")(n)
          ? o("WAWebDisplayType").isWideDisplay(t)
            ? "messageVideoLinkPreviewWide"
            : "messageVideoLinkPreview"
          : o("WAWebMsgGetters").getBotPluginMaybeParent(n) === !0
            ? "messageChat messageChatBotPluginParent"
            : "messageChat";
    }
    l.default = e;
  },
  98,
);
