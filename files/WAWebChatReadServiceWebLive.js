__d(
  "WAWebChatReadServiceWebLive",
  [
    "WAWebChatReadService",
    "WAWebChatSeenBridge",
    "WAWebChatSendConversationSeen",
    "WAWebSendReadReceiptJob",
    "WebDi.Async",
  ],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebChatReadService").ChatReadService.make(function* () {
      var e = {
        markConversationSeen: function (t, n) {
          return o("WebDi.Async").fromPromise(function () {
            return o("WAWebChatSeenBridge").markConversationSeen(t, n);
          });
        },
        markConversationUnseen: function (t) {
          return o("WebDi.Async").fromPromise(function () {
            return o("WAWebChatSeenBridge").markConversationUnseen(t);
          });
        },
        sendConversationUnseen: function (t, n) {
          return o("WebDi.Async").fromPromise(function () {
            return o("WAWebChatSeenBridge").sendConversationUnseen(t, n);
          });
        },
        sendConversationSeen: function (t) {
          return o("WebDi.Async").fromPromise(function () {
            return o("WAWebChatSendConversationSeen").sendConversationSeen(t);
          });
        },
        markEditedMsgsRead: function (t, n, r) {
          return o("WebDi.Async").fromPromise(function () {
            return o("WAWebSendReadReceiptJob").markEditedMsgsRead(t, n, r);
          });
        },
      };
      return e;
    });
    l.ChatReadServiceWebLive = e;
  },
  98,
);
