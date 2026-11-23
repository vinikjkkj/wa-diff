__d(
  "WAWebChatSettingsServiceClient",
  ["WAWebChatSettingsService"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return {
        sendConversationArchive: function (n, r, a) {
          return e(
            o("WAWebChatSettingsService").ChatSettingsService,
            function (e) {
              return e.sendConversationArchive(n, r, a);
            },
          );
        },
        sendConversationMute: function (n) {
          return e(
            o("WAWebChatSettingsService").ChatSettingsService,
            function (e) {
              return e.sendConversationMute(n);
            },
          );
        },
        setChatAsLocked: function (n, r) {
          return e(
            o("WAWebChatSettingsService").ChatSettingsService,
            function (e) {
              return e.setChatAsLocked(n, r);
            },
          );
        },
        setChatAsUnlocked: function (n, r) {
          return e(
            o("WAWebChatSettingsService").ChatSettingsService,
            function (e) {
              return e.setChatAsUnlocked(n, r);
            },
          );
        },
      };
    }
    l.chatSettingsServiceClient = e;
  },
  98,
);
