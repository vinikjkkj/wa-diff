__d(
  "WAWebWebcOfflineNotificationProcessWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumOfflineProcessRunReasons",
    "WAWebWamEnumOfflineProcessStages",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          WebcOfflineNotificationProcess: [
            4222,
            {
              currentOfflineProcessStage: [
                4,
                o("WAWebWamEnumOfflineProcessStages").OFFLINE_PROCESS_STAGES,
              ],
              offlineProcessDecryptErrorCount: [5, e.TYPES.INTEGER],
              offlineProcessMailboxAge: [6, e.TYPES.INTEGER],
              offlineProcessMessageCount: [7, e.TYPES.INTEGER],
              offlineProcessNotificationCount: [8, e.TYPES.INTEGER],
              offlineProcessSessionId: [9, e.TYPES.STRING],
              offlineProcessStageTimestampMs: [10, e.TYPES.INTEGER],
              runReason: [
                12,
                o("WAWebWamEnumOfflineProcessRunReasons")
                  .OFFLINE_PROCESS_RUN_REASONS,
              ],
              swVersion: [11, e.TYPES.STRING],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { WebcOfflineNotificationProcess: [] },
      );
    l.WebcOfflineNotificationProcessWamEvent = s;
  },
  98,
);
