__d(
  "WAWebOpenHatchChatAction",
  ["WAWebBotUtils", "WAWebChatEntryPoint", "WAWebOpenChatWithContactAction"],
  function (t, n, r, o, a, i, l) {
    function e() {
      return o("WAWebOpenChatWithContactAction").openChatWithContact({
        chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint
          .MetaAINavigationBar,
        findChatOrigin: "hatchNavBar",
        targetId: o("WAWebBotUtils").HATCH_BOT_FBID_WID,
      });
    }
    l.openHatchChat = e;
  },
  98,
);
