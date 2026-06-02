__d(
  "WAWebGetHistorySyncProgress",
  ["WAWebProtobufsHistorySync.pb", "WAWebUserPrefsHistorySync"],
  function (t, n, r, o, a, i, l) {
    async function e(e) {
      var t = e.progress,
        n = await o(
          "WAWebUserPrefsHistorySync",
        ).getChunkCountForEndOfRecentHistorySync();
      return (
        (e.syncType ===
          o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType.FULL ||
          (e.syncType ===
            o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType
              .RECENT &&
            e.chunkOrder === n)) &&
          (t = 100),
        t != null ? t : 0
      );
    }
    l.getHistorySyncProgress = e;
  },
  98,
);
