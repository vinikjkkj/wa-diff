__d(
  "WAWebChatStickerForwardToMyStatusGating",
  ["WAWebABProps"],
  function (t, n, r, o, a, i, l) {
    function e() {
      return o("WAWebABProps").getABPropConfigValue(
        "chat_sticker_forward_to_my_status_web_enabled",
      );
    }
    function s() {
      return o("WAWebABProps").getABPropConfigValue(
        "status_chat_sticker_forward_page_color_enabled",
      );
    }
    ((l.isChatStickerForwardToMyStatusEnabled = e),
      (l.isChatStickerStatusPageColorEnabled = s));
  },
  98,
);
