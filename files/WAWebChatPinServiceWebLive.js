__d(
  "WAWebChatPinServiceWebLive",
  ["JSResourceForInteraction", "WAWebChatPinService", "WebDi.Async"],
  function (t, n, r, o, a, i, l) {
    var e = r("JSResourceForInteraction")("WAWebChatPinBridge").__setRef(
        "WAWebChatPinServiceWebLive",
      ),
      s = o("WAWebChatPinService").ChatPinService.make(function* () {
        var t = yield* o("WebDi.Async").fromPromise(function () {
            return e.load();
          }),
          n = t.getNumConversationsPinned,
          r = t.getNumNewslettersPinned,
          a = t.setPin,
          i = t.unpinAllConversations,
          l = {
            getNumConversationsPinned: function (t) {
              return o("WebDi.Async").fromPromise(function () {
                return n(t);
              });
            },
            getNumNewslettersPinned: function () {
              return o("WebDi.Async").fromPromise(function () {
                return r();
              });
            },
            setPin: function (t) {
              return o("WebDi.Async").fromPromise(function () {
                return a(t);
              });
            },
            unpinAllConversations: function (t) {
              return o("WebDi.Async").fromPromise(function () {
                return i(t);
              });
            },
          };
        return l;
      });
    l.ChatPinServiceWebLive = s;
  },
  98,
);
