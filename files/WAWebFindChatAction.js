__d(
  "WAWebFindChatAction",
  [
    "WAWebBackendRuntime",
    "WAWebChatGetExistingBridge",
    "WAWebChatStoreService",
    "WAWebFindChat",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n) {
      return (
        o("WAWebBackendRuntime").isWebDiBackendEnabled()
          ? o("WAWebBackendRuntime").runtime(
              o("WAWebChatStoreService").ChatStoreService,
            ).findExistingChat
          : o("WAWebFindChat").findExistingChat
      )(
        e,
        t,
        babelHelpers.extends({}, n, {
          getExistingChat: o("WAWebChatGetExistingBridge").getExisting,
        }),
      );
    }
    function s(e, t, n) {
      return (
        o("WAWebBackendRuntime").isWebDiBackendEnabled()
          ? o("WAWebBackendRuntime").runtime(
              o("WAWebChatStoreService").ChatStoreService,
            ).findOrCreateLatestChat
          : o("WAWebFindChat").findOrCreateLatestChat
      )(
        e,
        t,
        babelHelpers.extends({}, n, {
          getExistingChat: o("WAWebChatGetExistingBridge").getExisting,
        }),
      );
    }
    ((l.findExistingChat = e), (l.findOrCreateLatestChat = s));
  },
  98,
);
