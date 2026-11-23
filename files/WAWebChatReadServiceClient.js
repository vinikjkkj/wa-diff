__d(
  "WAWebChatReadServiceClient",
  ["WAWebChatReadService"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return {
        markConversationSeen: function (n, r) {
          return e(o("WAWebChatReadService").ChatReadService, function (e) {
            return e.markConversationSeen(n, r);
          });
        },
        markConversationUnseen: function (n) {
          return e(o("WAWebChatReadService").ChatReadService, function (e) {
            return e.markConversationUnseen(n);
          });
        },
        sendConversationUnseen: function (n, r) {
          return e(o("WAWebChatReadService").ChatReadService, function (e) {
            return e.sendConversationUnseen(n, r);
          });
        },
        sendConversationSeen: function (n) {
          return e(o("WAWebChatReadService").ChatReadService, function (e) {
            return e.sendConversationSeen(n);
          });
        },
        markEditedMsgsRead: function (n, r, a) {
          return e(o("WAWebChatReadService").ChatReadService, function (e) {
            return e.markEditedMsgsRead(n, r, a);
          });
        },
      };
    }
    l.chatReadServiceClient = e;
  },
  98,
);
