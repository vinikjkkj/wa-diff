__d(
  "WAWebChatPinServiceWebLive",
  ["WAWebChatPinBridge", "WAWebChatPinService", "WebDi.Async"],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebChatPinService").ChatPinService.make(function* () {
      var e = {
        getNumConversationsPinned: function (t) {
          return o("WebDi.Async").fromPromise(function () {
            return o("WAWebChatPinBridge").getNumConversationsPinned(t);
          });
        },
        getNumNewslettersPinned: function () {
          return o("WebDi.Async").fromPromise(function () {
            return o("WAWebChatPinBridge").getNumNewslettersPinned();
          });
        },
        setPin: function (t) {
          return o("WebDi.Async").fromPromise(function () {
            return o("WAWebChatPinBridge").setPin(t);
          });
        },
        unpinAllConversations: function (t) {
          return o("WebDi.Async").fromPromise(function () {
            return o("WAWebChatPinBridge").unpinAllConversations(t);
          });
        },
      };
      return e;
    });
    l.ChatPinServiceWebLive = e;
  },
  98,
);
