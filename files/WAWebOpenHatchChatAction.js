__d(
  "WAWebOpenHatchChatAction",
  ["WAWebBotUtils", "WAWebChatEntryPoint", "WAWebOpenChatWithContactAction"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return o("WAWebOpenChatWithContactAction").openChatWithContact({
        chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint
          .MetaAINavigationBar,
        findChatOrigin: "hatchNavBar",
        opts:
          e != null
            ? {
                onOpened: function () {
                  return e();
                },
              }
            : void 0,
        targetId: o("WAWebBotUtils").HATCH_BOT_FBID_WID,
      });
    }
    l.openHatchChat = e;
  },
  98,
);
