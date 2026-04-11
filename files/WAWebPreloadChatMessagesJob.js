__d(
  "WAWebPreloadChatMessagesJob",
  [
    "WAWebChatLoadMessages",
    "WAWebConversationPreloadGatingUtils",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          e.hasPreloaded ||
            e.pendingInitialLoading ||
            (o("WAWebChatLoadMessages")
              .loadEarlierMsgs({ chat: e, msgCollection: e.msgs })
              .then(function () {
                (o(
                  "WAWebConversationPreloadGatingUtils",
                ).isConversationPreloadEnabled() && (e.hasPreloaded = !0),
                  e.trigger("msgs:preloaded"));
              }),
            o(
              "WAWebConversationPreloadGatingUtils",
            ).isConversationPreloadEnabled() || (e.hasPreloaded = !0));
        })),
        s.apply(this, arguments)
      );
    }
    l.preloadChatMessages = e;
  },
  98,
);
