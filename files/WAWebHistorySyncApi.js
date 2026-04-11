__d(
  "WAWebHistorySyncApi",
  ["WAWebCmd", "WAWebHistorySyncProgressModel"],
  function (t, n, r, o, a, i, l) {
    var e = {
      setHistorySyncPaused: function (t) {
        var e = t.paused;
        o("WAWebHistorySyncProgressModel")
          .getHistorySyncProgressModel()
          .setPaused(e);
      },
      setHistorySyncProgress: function (t) {
        var e = t.incomplete,
          n = t.progress;
        (n != null &&
          o("WAWebHistorySyncProgressModel")
            .getHistorySyncProgressModel()
            .setProgress(n),
          e != null &&
            o("WAWebHistorySyncProgressModel")
              .getHistorySyncProgressModel()
              .setIncomplete(e));
      },
      triggerInitialChatHistorySyncedFromBridge: function () {
        o("WAWebCmd").Cmd.onInitialChatHistorySyncedFromBridge();
      },
      triggerCriticalSyncDoneFromBridge: function () {
        o("WAWebCmd").Cmd.criticalSyncDoneFromBridge();
      },
      triggerHistorySyncChunkProcessedFromBridge: function (t) {
        var e = t.chatsUpdated;
        o("WAWebCmd").Cmd.onHistorySyncChunkProcessedFromBridge(new Set(e));
      },
    };
    l.HistorySyncBridgeApi = e;
  },
  98,
);
