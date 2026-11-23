__d(
  "WAWebChatPinServiceClient",
  ["WAWebChatPinService"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return {
        getNumConversationsPinned: function (n) {
          return e(o("WAWebChatPinService").ChatPinService, function (e) {
            return e.getNumConversationsPinned(n);
          });
        },
        getNumNewslettersPinned: function () {
          return e(o("WAWebChatPinService").ChatPinService, function (e) {
            return e.getNumNewslettersPinned();
          });
        },
        setPin: function (n) {
          return e(o("WAWebChatPinService").ChatPinService, function (e) {
            return e.setPin(n);
          });
        },
        unpinAllConversations: function (n) {
          return e(o("WAWebChatPinService").ChatPinService, function (e) {
            return e.unpinAllConversations(n);
          });
        },
      };
    }
    l.chatPinServiceClient = e;
  },
  98,
);
