__d(
  "WAWebPreloadChatMessagesJob",
  ["WAWebChatLoadMessages", "WAWebConversationPreloadGatingUtils"],
  function (t, n, r, o, a, i, l) {
    async function e(e) {
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
    }
    l.preloadChatMessages = e;
  },
  98,
);
