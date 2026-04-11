__d(
  "WAWebMdBootstrapHistorySyncStatusAfterPairingWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumActiveTimeAfterPairing",
    "WAWebWamEnumMdBootstrapHistoryPayloadType",
    "WAWebWamEnumMdHistorySyncStatusResult",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          MdBootstrapHistorySyncStatusAfterPairing: [
            4652,
            {
              activeTimeAfterPairing: [
                1,
                o("WAWebWamEnumActiveTimeAfterPairing")
                  .ACTIVE_TIME_AFTER_PAIRING,
              ],
              isLoopRunning: [12, e.TYPES.BOOLEAN],
              lastProcessedNotificationChunkOrder: [2, e.TYPES.INTEGER],
              lastProcessedNotificationChunkProgress: [3, e.TYPES.INTEGER],
              mdBootstrapHistoryPayloadType: [
                4,
                o("WAWebWamEnumMdBootstrapHistoryPayloadType")
                  .MD_BOOTSTRAP_HISTORY_PAYLOAD_TYPE,
              ],
              mdHistorySyncStatusResult: [
                5,
                o("WAWebWamEnumMdHistorySyncStatusResult")
                  .MD_HISTORY_SYNC_STATUS_RESULT,
              ],
              mdSessionId: [6, e.TYPES.STRING],
              mdTimestamp: [7, e.TYPES.INTEGER],
              missingNotificationCount: [8, e.TYPES.INTEGER],
              nextNotificationChunkOrder: [9, e.TYPES.INTEGER],
              totalProcessedMessageCount: [10, e.TYPES.INTEGER],
              unprocessedNotificationCount: [11, e.TYPES.INTEGER],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { MdBootstrapHistorySyncStatusAfterPairing: [] },
      );
    l.MdBootstrapHistorySyncStatusAfterPairingWamEvent = s;
  },
  98,
);
