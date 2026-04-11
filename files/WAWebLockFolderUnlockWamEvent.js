__d(
  "WAWebLockFolderUnlockWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumLandingSurface",
    "WAWebWamEnumUnlockEntryPoint",
  ],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebWamCodegenUtils").defineEvents(
      {
        LockFolderUnlock: [
          4218,
          {
            landingSurface: [
              1,
              o("WAWebWamEnumLandingSurface").LANDING_SURFACE,
            ],
            totalChatCount: [2, o("WAWebWamCodegenUtils").TYPES.INTEGER],
            unlockEntryPoint: [
              3,
              o("WAWebWamEnumUnlockEntryPoint").UNLOCK_ENTRY_POINT,
            ],
          },
          [1, 1, 1],
          "regular",
        ],
      },
      { LockFolderUnlock: [] },
    );
    l.LockFolderUnlockWamEvent = e;
  },
  98,
);
