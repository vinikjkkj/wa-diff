__d(
  "WAWebOfflineResumeStageWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumOfflineResumeModes",
    "WAWebWamEnumOfflineResumeStages",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          OfflineResumeStage: [
            3536,
            {
              attemptId: [13, e.TYPES.INTEGER],
              chatThreadCount: [4, e.TYPES.INTEGER],
              currentOfflineStage: [
                1,
                o("WAWebWamEnumOfflineResumeStages").OFFLINE_RESUME_STAGES,
              ],
              isResumeInForeground: [5, e.TYPES.BOOLEAN],
              isResumeStartedInForeground: [14, e.TYPES.BOOLEAN],
              lastPushTimestampMs: [12, e.TYPES.INTEGER],
              mailboxAge: [6, e.TYPES.INTEGER],
              offlineCallCount: [15, e.TYPES.INTEGER],
              offlineDecryptErrorCount: [7, e.TYPES.INTEGER],
              offlineMessageCount: [8, e.TYPES.INTEGER],
              offlineNotificationCount: [9, e.TYPES.INTEGER],
              offlineReceiptCount: [10, e.TYPES.INTEGER],
              offlineResumeMode: [
                11,
                o("WAWebWamEnumOfflineResumeModes").OFFLINE_RESUME_MODES,
              ],
              offlineSessionId: [2, e.TYPES.STRING],
              offlineSizeBytes: [16, e.TYPES.INTEGER],
              offlineStageTimestampMs: [3, e.TYPES.INTEGER],
              passiveModeT: [17, e.TYPES.TIMER],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { OfflineResumeStage: [] },
      );
    l.OfflineResumeStageWamEvent = s;
  },
  98,
);
