__d(
  "WAWebMdFatalErrorWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumCollection",
    "WAWebWamEnumIsPureSyncdSessionEnum",
    "WAWebWamEnumLidMigrationStageEnum",
    "WAWebWamEnumMdCompanionDeviceAccountType",
    "WAWebWamEnumMdSyncdFatalErrorCode",
    "WAWebWamEnumMdSyncdFatalErrorSource",
    "WAWebWamEnumRecoveryStatusEnum",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          MdFatalError: [
            2304,
            {
              appContext: [46, e.TYPES.STRING],
              appContextBitfield: [47, e.TYPES.INTEGER],
              appSessionId: [41, e.TYPES.STRING],
              collection: [2, o("WAWebWamEnumCollection").COLLECTION],
              companionSessionIds: [42, e.TYPES.STRING],
              currentPrimaryAppVersion: [14, e.TYPES.STRING],
              daysSinceLastPeriodicSync: [11, e.TYPES.INTEGER],
              didBootstrapFromSnapshot: [38, e.TYPES.BOOLEAN],
              hoursSinceFirstFiniteFailure: [12, e.TYPES.INTEGER],
              isBootstrap: [3, e.TYPES.BOOLEAN],
              isFatal: [16, e.TYPES.BOOLEAN],
              isPatchSenderPrimary: [23, e.TYPES.BOOLEAN],
              isPreviousPatchAnIncomingPatch: [24, e.TYPES.BOOLEAN],
              isPreviousPatchSenderPrimary: [25, e.TYPES.BOOLEAN],
              isPureSyncdSession: [
                48,
                o("WAWebWamEnumIsPureSyncdSessionEnum")
                  .IS_PURE_SYNCD_SESSION_ENUM,
              ],
              isSenderIndexSameAsPreviousSenderIndex: [39, e.TYPES.BOOLEAN],
              isThereAnotherSyncdCompanion: [40, e.TYPES.BOOLEAN],
              isWebLthashConsistent: [17, e.TYPES.BOOLEAN],
              lidMigrationStage: [
                49,
                o("WAWebWamEnumLidMigrationStageEnum").LID_MIGRATION_STAGE_ENUM,
              ],
              macFatalCollectionNameMismatch: [18, e.TYPES.BOOLEAN],
              macFatalCurrentLthashMismatch: [19, e.TYPES.BOOLEAN],
              macFatalDidPreviousPatchFailPostSaveValidation: [
                26,
                e.TYPES.BOOLEAN,
              ],
              macFatalDidUseMacFetchFallback: [36, e.TYPES.BOOLEAN],
              macFatalFirstTwoBytesFromAHashOfSnapshotMacKeyMismatch: [
                20,
                e.TYPES.BOOLEAN,
              ],
              macFatalHasMissingRemove: [37, e.TYPES.BOOLEAN],
              macFatalNewLthashMismatch: [21, e.TYPES.BOOLEAN],
              macFatalNewLthashSubtractMismatch: [27, e.TYPES.BOOLEAN],
              macFatalNumberAddMismatch: [28, e.TYPES.BOOLEAN],
              macFatalNumberHasOverrideMutation: [29, e.TYPES.BOOLEAN],
              macFatalNumberNumAddMutation: [30, e.TYPES.INTEGER],
              macFatalNumberNumRemoveMutation: [31, e.TYPES.INTEGER],
              macFatalNumberOverrideMismatch: [32, e.TYPES.BOOLEAN],
              macFatalNumberRemoveMismatch: [33, e.TYPES.BOOLEAN],
              macFatalPatchVersionMismatch: [22, e.TYPES.BOOLEAN],
              macFatalPreviousPatchNewLthashToCurrentPatchCurrentLthash: [
                34,
                e.TYPES.BOOLEAN,
              ],
              macFatalSenderCurrentLthashToLocalCalculatedCurrentLthashMismatch:
                [35, e.TYPES.BOOLEAN],
              mailboxAgeDays: [13, e.TYPES.INTEGER],
              mdCompanionDeviceAccountType: [
                43,
                o("WAWebWamEnumMdCompanionDeviceAccountType")
                  .MD_COMPANION_DEVICE_ACCOUNT_TYPE,
              ],
              mdFatalErrorCode: [
                1,
                o("WAWebWamEnumMdSyncdFatalErrorCode")
                  .MD_SYNCD_FATAL_ERROR_CODE,
              ],
              mdRegAttemptId: [44, e.TYPES.STRING],
              patchSnapshotMutationCount: [9, e.TYPES.INTEGER],
              patchVersion: [5, e.TYPES.INTEGER],
              recoveryRequestDurationMs: [50, e.TYPES.INTEGER],
              recoveryStatus: [
                51,
                o("WAWebWamEnumRecoveryStatusEnum").RECOVERY_STATUS_ENUM,
              ],
              seqNumber: [45, e.TYPES.INTEGER],
              sessionStartPrimaryAppVersion: [15, e.TYPES.STRING],
              sourceType: [
                10,
                o("WAWebWamEnumMdSyncdFatalErrorSource")
                  .MD_SYNCD_FATAL_ERROR_SOURCE,
              ],
              timeSincePairingMs: [6, e.TYPES.INTEGER],
              timeSinceRefreshMs: [7, e.TYPES.INTEGER],
              timeSinceTabTakeoverMs: [8, e.TYPES.INTEGER],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { MdFatalError: [] },
      );
    l.MdFatalErrorWamEvent = s;
  },
  98,
);
