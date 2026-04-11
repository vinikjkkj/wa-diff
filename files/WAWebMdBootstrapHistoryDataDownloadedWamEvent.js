__d(
  "WAWebMdBootstrapHistoryDataDownloadedWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumApplicationState",
    "WAWebWamEnumMdBootstrapHistoryPayloadType",
    "WAWebWamEnumMdBootstrapPayloadType",
    "WAWebWamEnumMdBootstrapStepResult",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          MdBootstrapHistoryDataDownloaded: [
            2296,
            {
              appContext: [18, e.TYPES.STRING],
              appContextBitfield: [19, e.TYPES.INTEGER],
              applicationState: [
                17,
                o("WAWebWamEnumApplicationState").APPLICATION_STATE,
              ],
              historySyncChunkOrder: [15, e.TYPES.INTEGER],
              historySyncRetryRequestId: [20, e.TYPES.STRING],
              historySyncStageProgress: [14, e.TYPES.INTEGER],
              mdBootstrapChatsCount: [6, e.TYPES.INTEGER],
              mdBootstrapHistoryPayloadType: [
                13,
                o("WAWebWamEnumMdBootstrapHistoryPayloadType")
                  .MD_BOOTSTRAP_HISTORY_PAYLOAD_TYPE,
              ],
              mdBootstrapMessagesCount: [5, e.TYPES.INTEGER],
              mdBootstrapPayloadSize: [4, e.TYPES.INTEGER],
              mdBootstrapPayloadThumbnailsSize: [21, e.TYPES.INTEGER],
              mdBootstrapPayloadType: [
                2,
                o("WAWebWamEnumMdBootstrapPayloadType")
                  .MD_BOOTSTRAP_PAYLOAD_TYPE,
              ],
              mdBootstrapStepDuration: [7, e.TYPES.INTEGER],
              mdBootstrapStepResult: [
                8,
                o("WAWebWamEnumMdBootstrapStepResult").MD_BOOTSTRAP_STEP_RESULT,
              ],
              mdHsOldestMessageTimestamp: [11, e.TYPES.INTEGER],
              mdRegAttemptId: [12, e.TYPES.STRING],
              mdSessionId: [1, e.TYPES.STRING],
              mdStorageQuotaBytes: [9, e.TYPES.INTEGER],
              mdStorageQuotaUsedBytes: [10, e.TYPES.INTEGER],
              mdSyncFailureReason: [16, e.TYPES.STRING],
              mdTimestamp: [3, e.TYPES.INTEGER],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { MdBootstrapHistoryDataDownloaded: [] },
      );
    l.MdBootstrapHistoryDataDownloadedWamEvent = s;
  },
  98,
);
