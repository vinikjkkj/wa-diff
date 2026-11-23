__d(
  "WAWebChatDeleteServiceClient",
  ["WAWebChatDeleteService"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return {
        sendClear: function (n, r, a) {
          return e(o("WAWebChatDeleteService").ChatDeleteService, function (e) {
            return e.sendClear(n, r, a);
          });
        },
        sendConversationDelete: function (n) {
          return e(o("WAWebChatDeleteService").ChatDeleteService, function (e) {
            return e.sendConversationDelete(n);
          });
        },
      };
    }
    l.chatDeleteServiceClient = e;
  },
  98,
);
