__d(
  "WAWebChatDeleteServiceWebLive",
  [
    "WAWebChatClearBridge",
    "WAWebChatDeleteBridge",
    "WAWebChatDeleteService",
    "WebDi.Async",
  ],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebChatDeleteService").ChatDeleteService.make(function* () {
      var e = {
        sendClear: function (t, n, r) {
          return o("WebDi.Async").fromPromise(function () {
            return o("WAWebChatClearBridge").sendClear(t, n, r);
          });
        },
        sendConversationDelete: function (t) {
          return o("WebDi.Async").fromPromise(function () {
            return o("WAWebChatDeleteBridge").sendConversationDelete(t);
          });
        },
      };
      return e;
    });
    l.ChatDeleteServiceWebLive = e;
  },
  98,
);
