__d(
  "WAWebMdBootstrapAppStateDataDownloadedWamEvent",
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
          MdBootstrapAppStateDataDownloaded: [
            2294,
            {
              appContext: [14, e.TYPES.STRING],
              appContextBitfield: [15, e.TYPES.INTEGER],
              applicationState: [
                13,
                o("WAWebWamEnumApplicationState").APPLICATION_STATE,
              ],
              historySyncRetryRequestId: [16, e.TYPES.STRING],
              mdBootstrapContactsCount: [5, e.TYPES.INTEGER],
              mdBootstrapHistoryPayloadType: [
                11,
                o("WAWebWamEnumMdBootstrapHistoryPayloadType")
                  .MD_BOOTSTRAP_HISTORY_PAYLOAD_TYPE,
              ],
              mdBootstrapPayloadSize: [4, e.TYPES.INTEGER],
              mdBootstrapPayloadType: [
                2,
                o("WAWebWamEnumMdBootstrapPayloadType")
                  .MD_BOOTSTRAP_PAYLOAD_TYPE,
              ],
              mdBootstrapStepDuration: [6, e.TYPES.INTEGER],
              mdBootstrapStepResult: [
                7,
                o("WAWebWamEnumMdBootstrapStepResult").MD_BOOTSTRAP_STEP_RESULT,
              ],
              mdRegAttemptId: [10, e.TYPES.STRING],
              mdSessionId: [1, e.TYPES.STRING],
              mdStorageQuotaBytes: [8, e.TYPES.INTEGER],
              mdStorageQuotaUsedBytes: [9, e.TYPES.INTEGER],
              mdSyncFailureReason: [17, e.TYPES.STRING],
              mdTimestamp: [3, e.TYPES.INTEGER],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { MdBootstrapAppStateDataDownloaded: [] },
      );
    l.MdBootstrapAppStateDataDownloadedWamEvent = s;
  },
  98,
);
