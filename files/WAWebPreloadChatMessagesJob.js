__d(
  "WAWebPreloadChatMessagesJob",
  ["WAWebChatLoadMessages"],
  function (t, n, r, o, a, i, l) {
    async function e(e) {
      e.hasPreloaded ||
        e.pendingInitialLoading ||
        (o("WAWebChatLoadMessages")
          .loadEarlierMsgs({ chat: e, msgCollection: e.msgs })
          .then(function () {
            e.trigger("msgs:preloaded");
          }),
        (e.hasPreloaded = !0));
    }
    l.preloadChatMessages = e;
  },
  98,
);
