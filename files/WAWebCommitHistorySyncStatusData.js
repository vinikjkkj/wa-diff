__d(
  "WAWebCommitHistorySyncStatusData",
  [
    "WATimeUtils",
    "WAWebApiHistorySyncNotification",
    "WAWebHistorySyncNotificationUtils",
    "WAWebMdBootstrapHistorySyncStatusAfterPairingWamEvent",
    "WAWebSyncBootstrap",
    "WAWebSyncdMdSyncFieldstatMeta",
    "WAWebUserPrefsHistorySync",
    "WAWebUserPrefsTypes",
    "WAWebWamEnumMdBootstrapHistoryPayloadType",
    "WAWebWamEnumMdHistorySyncStatusResult",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e) {
      await s(e);
    }
    async function s(e) {
      var t,
        n,
        a = await o(
          "WAWebSyncdMdSyncFieldstatMeta",
        ).MdSyncFieldStatsMeta.getMdSessionId(),
        i = new (o(
          "WAWebMdBootstrapHistorySyncStatusAfterPairingWamEvent",
        ).MdBootstrapHistorySyncStatusAfterPairingWamEvent)({
          mdBootstrapHistoryPayloadType: o(
            "WAWebWamEnumMdBootstrapHistoryPayloadType",
          ).MD_BOOTSTRAP_HISTORY_PAYLOAD_TYPE.RECENT_HISTORY,
          mdSessionId: a,
          mdTimestamp: o("WATimeUtils").unixTimeMs(),
          activeTimeAfterPairing: e,
          isLoopRunning: r("WAWebSyncBootstrap").getIsHistorySyncRunning(),
        }),
        l = await o(
          "WAWebUserPrefsHistorySync",
        ).getLastHistoryRecentSyncedChunk(),
        s = l != null ? l.chunkOrder : -1,
        c = l != null ? l.progress : -1;
      ((i.lastProcessedNotificationChunkOrder = s),
        (i.lastProcessedNotificationChunkProgress = c));
      var d =
        (t = await o(
          "WAWebUserPrefsHistorySync",
        ).getHistorySyncTotalProcessedMessageCount()) != null
          ? t
          : 0;
      i.totalProcessedMessageCount = d;
      var m = await o("WAWebUserPrefsHistorySync").getHistorySyncStatus();
      if ((m == null ? void 0 : m.recentCompleted) === !0) {
        ((i.mdHistorySyncStatusResult = o(
          "WAWebWamEnumMdHistorySyncStatusResult",
        ).MD_HISTORY_SYNC_STATUS_RESULT.SUCCESS),
          i.commit());
        return;
      }
      var p = await o(
          "WAWebHistorySyncNotificationUtils",
        ).getUnprocessedRecentSyncNotifications(),
        _ = p.length;
      i.unprocessedNotificationCount = _;
      var f = _ > 0 ? ((n = p[0].chunkOrder) != null ? n : 0) : -1;
      if (
        ((i.nextNotificationChunkOrder = f),
        o("WAWebApiHistorySyncNotification").inFlightChunk.size > 0)
      ) {
        ((i.mdHistorySyncStatusResult = o(
          "WAWebWamEnumMdHistorySyncStatusResult",
        ).MD_HISTORY_SYNC_STATUS_RESULT.IN_PROGRESS),
          i.commit());
        return;
      }
      var g = l ? s + 1 : 1,
        h = await o(
          "WAWebUserPrefsHistorySync",
        ).getRecentSyncSingleChunkStatus(),
        y = u(h, g);
      ((i.mdHistorySyncStatusResult = y), i.commit());
    }
    function u(e, t) {
      return e == null || e[t] == null
        ? o("WAWebWamEnumMdHistorySyncStatusResult")
            .MD_HISTORY_SYNC_STATUS_RESULT.FAIL_TO_RECEIVE
        : (function (e) {
            return e ===
              o("WAWebUserPrefsTypes").HistorySyncSingleChunkStatusType.RECEIVED
              ? o("WAWebWamEnumMdHistorySyncStatusResult")
                  .MD_HISTORY_SYNC_STATUS_RESULT.FAIL_TO_STORE_CHUNK
              : e ===
                  o("WAWebUserPrefsTypes").HistorySyncSingleChunkStatusType
                    .NOTIFICATION_STORED
                ? o("WAWebWamEnumMdHistorySyncStatusResult")
                    .MD_HISTORY_SYNC_STATUS_RESULT.FAIL_TO_FETCH
                : e ===
                    o("WAWebUserPrefsTypes").HistorySyncSingleChunkStatusType
                      .DOWNLOADING
                  ? o("WAWebWamEnumMdHistorySyncStatusResult")
                      .MD_HISTORY_SYNC_STATUS_RESULT.FAIL_TO_DOWNLOAD
                  : e ===
                      o("WAWebUserPrefsTypes").HistorySyncSingleChunkStatusType
                        .DOWNLOADED
                    ? o("WAWebWamEnumMdHistorySyncStatusResult")
                        .MD_HISTORY_SYNC_STATUS_RESULT.PROTOBUF_ERROR
                    : e ===
                        o("WAWebUserPrefsTypes")
                          .HistorySyncSingleChunkStatusType.DECODED
                      ? o("WAWebWamEnumMdHistorySyncStatusResult")
                          .MD_HISTORY_SYNC_STATUS_RESULT.FAIL_TO_PREPROCESS
                      : e ===
                          o("WAWebUserPrefsTypes")
                            .HistorySyncSingleChunkStatusType
                            .MESSAGE_PREPROCESSED
                        ? o("WAWebWamEnumMdHistorySyncStatusResult")
                            .MD_HISTORY_SYNC_STATUS_RESULT.FAIL_TO_ENCRYPT
                        : e ===
                            o("WAWebUserPrefsTypes")
                              .HistorySyncSingleChunkStatusType.ENCRYPTED
                          ? o("WAWebWamEnumMdHistorySyncStatusResult")
                              .MD_HISTORY_SYNC_STATUS_RESULT.FAIL_TO_STORE
                          : o("WAWebWamEnumMdHistorySyncStatusResult")
                              .MD_HISTORY_SYNC_STATUS_RESULT.OTHER_ERROR;
          })(e[t]);
    }
    l.commitHistorySyncStatusData = e;
  },
  98,
);
