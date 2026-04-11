__d(
  "WAWebLid11MigrationLifecycleWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumMigrationStageEnum",
    "WAWebWamEnumStageFailureReasonEnum",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          Lid11MigrationLifecycle: [
            6154,
            {
              chatNotInMappingCount: [1, e.TYPES.INTEGER],
              companionHasADifferentMappingCount: [2, e.TYPES.INTEGER],
              currentLocalTimeSeconds: [10, e.TYPES.INTEGER],
              fakeLidCount: [3, e.TYPES.INTEGER],
              isLocally1x1MigratedFromDb: [14, e.TYPES.BOOLEAN],
              isStageInOfflineResume: [11, e.TYPES.BOOLEAN],
              isSyncdLidSession: [4, e.TYPES.BOOLEAN],
              latestMappingCount: [5, e.TYPES.INTEGER],
              mappingCount: [6, e.TYPES.INTEGER],
              migratedThreadCount: [7, e.TYPES.INTEGER],
              migrationStage: [
                8,
                o("WAWebWamEnumMigrationStageEnum").MIGRATION_STAGE_ENUM,
              ],
              peerMappingBytesLength: [12, e.TYPES.INTEGER],
              primaryMigrationTimeSeconds: [13, e.TYPES.INTEGER],
              stageFailureReason: [
                9,
                o("WAWebWamEnumStageFailureReasonEnum")
                  .STAGE_FAILURE_REASON_ENUM,
              ],
              webClientDidPairingStanzaIndicated1x1MigrationThisSession: [
                15,
                e.TYPES.BOOLEAN,
              ],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { Lid11MigrationLifecycle: [] },
      );
    l.Lid11MigrationLifecycleWamEvent = s;
  },
  98,
);
