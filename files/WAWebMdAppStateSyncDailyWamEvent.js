__d(
  "WAWebMdAppStateSyncDailyWamEvent",
  ["WAWebWamCodegenUtils"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          MdAppStateSyncDaily: [
            2300,
            {
              crossIndexConflictCount: [11, e.TYPES.INTEGER],
              invalidActionCount: [4, e.TYPES.INTEGER],
              keyRotationRemoveCount: [12, e.TYPES.INTEGER],
              missingKeyCount: [9, e.TYPES.INTEGER],
              mutationCount: [1, e.TYPES.INTEGER],
              storedMutationCount: [7, e.TYPES.INTEGER],
              unsetActionCount: [8, e.TYPES.INTEGER],
              unsupportedActionCount: [5, e.TYPES.INTEGER],
              uploadConflictCount: [10, e.TYPES.INTEGER],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { MdAppStateSyncDaily: [] },
      );
    l.MdAppStateSyncDailyWamEvent = s;
  },
  98,
);
