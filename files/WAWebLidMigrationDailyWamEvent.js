__d(
  "WAWebLidMigrationDailyWamEvent",
  ["WAWebWamCodegenUtils", "WAWebWamEnumLidMigrationSourceType"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          LidMigrationDaily: [
            5842,
            {
              completedMigrations: [1, e.TYPES.STRING],
              lidMigrationSource: [
                7,
                o("WAWebWamEnumLidMigrationSourceType")
                  .LID_MIGRATION_SOURCE_TYPE,
              ],
              numberOfChatsWithClientAssignedLid: [8, e.TYPES.INTEGER],
              numberOfDeprecatedChats: [9, e.TYPES.INTEGER],
              numberOfLidBroadcastLists: [10, e.TYPES.INTEGER],
              numberOfLidGroups: [11, e.TYPES.INTEGER],
              numberOfPnBroadcastLists: [12, e.TYPES.INTEGER],
              numberOfPnChatsWithoutMapping: [5, e.TYPES.INTEGER],
              numberOfPnGroups: [13, e.TYPES.INTEGER],
              numberOfPnhCtwaThreadsKnownMapping: [2, e.TYPES.INTEGER],
              numberOfPnhCtwaThreadsMissingMapping: [3, e.TYPES.INTEGER],
              numberOfRegularPnChats: [14, e.TYPES.INTEGER],
              numberOfSplitThreads: [4, e.TYPES.INTEGER],
              numberOfUserChatsWithoutAccountLid: [6, e.TYPES.INTEGER],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { LidMigrationDaily: [] },
      );
    l.LidMigrationDailyWamEvent = s;
  },
  98,
);
