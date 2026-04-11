__d(
  "WAWebConversationPreloadGatingUtils",
  ["WAWebABProps", "justknobx"],
  function (t, n, r, o, a, i, l) {
    function e() {
      return (
        r("justknobx")._("3601") &&
        o("WAWebABProps").getABPropConfigValue(
          "wa_web_preload_conversation_chat_open",
        )
      );
    }
    l.isConversationPreloadEnabled = e;
  },
  98,
);
