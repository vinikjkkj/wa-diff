__d(
  "WAWebChatStoreServiceClient",
  ["WAWebChatStoreService"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return {
        updateChatTable: function (n, r) {
          return e(o("WAWebChatStoreService").ChatStoreService, function (e) {
            return e.updateChatTable(n, r);
          });
        },
        deleteFromStorage: function (n) {
          return e(o("WAWebChatStoreService").ChatStoreService, function (e) {
            return e.deleteFromStorage(n);
          });
        },
        findExistingChat: function (n, r, a) {
          return e(o("WAWebChatStoreService").ChatStoreService, function (e) {
            return e.findExistingChat(n, r, a);
          });
        },
        findOrCreateLatestChat: function (n, r, a) {
          return e(o("WAWebChatStoreService").ChatStoreService, function (e) {
            return e.findOrCreateLatestChat(n, r, a);
          });
        },
        updateDraftMessageChat: function (n) {
          return e(o("WAWebChatStoreService").ChatStoreService, function (e) {
            return e.updateDraftMessageChat(n);
          });
        },
      };
    }
    l.chatStoreServiceClient = e;
  },
  98,
);
