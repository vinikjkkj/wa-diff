__d(
  "WAWebSetChatOpenedAction",
  ["WAWebBackendRuntime", "WAWebChatStoreService", "WAWebDBUpdateChatTable"],
  function (t, n, r, o, a, i, l) {
    async function e(e) {
      var t = { hasOpened: !0 };
      (await (
        o("WAWebBackendRuntime").isWebDiBackendEnabled()
          ? o("WAWebBackendRuntime").runtime(
              o("WAWebChatStoreService").ChatStoreService,
            ).updateChatTable
          : o("WAWebDBUpdateChatTable").updateChatTable
      )(e.id, t),
        e.set(t));
    }
    l.setChatHasOpened = e;
  },
  98,
);
