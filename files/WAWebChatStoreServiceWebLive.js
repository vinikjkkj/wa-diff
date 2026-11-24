__d(
  "WAWebChatStoreServiceWebLive",
  [
    "WAWebChatDeleteBridge",
    "WAWebChatStoreService",
    "WAWebDBUpdateChatTable",
    "WAWebFindChat",
    "WAWebUpdateDraftMessageChatJob",
    "WebDi.Async",
  ],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebChatStoreService").ChatStoreService.make(function* () {
      var e = {
        updateChatTable: function (t, n) {
          return o("WebDi.Async").fromPromise(function () {
            return o("WAWebDBUpdateChatTable").updateChatTable(t, n);
          });
        },
        deleteFromStorage: function (t) {
          return o("WebDi.Async").fromPromise(function () {
            return o("WAWebChatDeleteBridge").deleteFromStorage(t);
          });
        },
        findExistingChat: function (t, n, r) {
          return o("WebDi.Async").fromPromise(function () {
            return o("WAWebFindChat").findExistingChat(t, n, r);
          });
        },
        findOrCreateLatestChat: function (t, n, r) {
          return o("WebDi.Async").fromPromise(function () {
            return o("WAWebFindChat").findOrCreateLatestChat(t, n, r);
          });
        },
        updateDraftMessageChat: function (t) {
          return o("WebDi.Async").fromPromise(function () {
            return o("WAWebUpdateDraftMessageChatJob").updateDraftMessageChat(
              t,
            );
          });
        },
      };
      return e;
    });
    l.ChatStoreServiceWebLive = e;
  },
  98,
);
