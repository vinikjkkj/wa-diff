__d(
  "WAWebGroupBulkRemovalWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumGroupBulkRemovalAction",
    "WAWebWamEnumGroupBulkRemovalEntryPoint",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          GroupBulkRemoval: [
            7222,
            {
              appSessionId: [1, e.TYPES.STRING],
              bulkRemovalGroupId: [2, e.TYPES.STRING],
              dedupKey: [6, e.TYPES.INTEGER],
              groupBulkRemovalAction: [
                3,
                o("WAWebWamEnumGroupBulkRemovalAction")
                  .GROUP_BULK_REMOVAL_ACTION,
              ],
              groupBulkRemovalEntryPoint: [
                4,
                o("WAWebWamEnumGroupBulkRemovalEntryPoint")
                  .GROUP_BULK_REMOVAL_ENTRY_POINT,
              ],
              removedMembersCount: [5, e.TYPES.INTEGER],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { GroupBulkRemoval: [] },
      );
    l.GroupBulkRemovalWamEvent = s;
  },
  98,
);
