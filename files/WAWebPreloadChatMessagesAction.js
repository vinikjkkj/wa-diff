__d(
  "WAWebPreloadChatMessagesAction",
  ["WAWebABProps", "WAWebCmd", "WAWebPreloadChatMessagesJob"],
  function (t, n, r, o, a, i, l) {
    async function e(e) {
      !o("WAWebABProps").getABPropConfigValue("web_preload_chat_messages") ||
        !o("WAWebCmd").Cmd.isOfflineDeliveryEnd ||
        (await o("WAWebPreloadChatMessagesJob").preloadChatMessages(e));
    }
    l.preloadChatMessagesAction = e;
  },
  98,
);
