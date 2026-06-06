__d(
  "WAWebGetHistorySyncProgress",
  [
    "WAWebProtobufsHistorySync.pb",
    "WAWebUserPrefsHistorySync",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.progress,
            n = yield o(
              "WAWebUserPrefsHistorySync",
            ).getChunkCountForEndOfRecentHistorySync();
          return (
            (e.syncType ===
              o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType
                .FULL ||
              (e.syncType ===
                o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType
                  .RECENT &&
                e.chunkOrder === n)) &&
              (t = 100),
            t != null ? t : 0
          );
        })),
        s.apply(this, arguments)
      );
    }
    l.getHistorySyncProgress = e;
  },
  98,
);
