__d(
  "WAWebListUpdateWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumListAction",
    "WAWebWamEnumListType",
    "WAWebWamEnumUpdateEntryPoint",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          ListUpdate: [
            5830,
            {
              dedupKey: [16, e.TYPES.INTEGER],
              groupsAdded: [9, e.TYPES.INTEGER],
              groupsAfterUpdate: [10, e.TYPES.INTEGER],
              listAction: [1, o("WAWebWamEnumListAction").LIST_ACTION],
              listId: [2, e.TYPES.INTEGER],
              listType: [3, o("WAWebWamEnumListType").LIST_TYPE],
              mentionsAndRepliesCacheBuildChatCount: [14, e.TYPES.INTEGER],
              mentionsAndRepliesCacheBuildDurationMs: [15, e.TYPES.INTEGER],
              predefinedId: [13, e.TYPES.INTEGER],
              updateEntryPoint: [
                8,
                o("WAWebWamEnumUpdateEntryPoint").UPDATE_ENTRY_POINT,
              ],
              usersAdded: [11, e.TYPES.INTEGER],
              usersAfterUpdate: [12, e.TYPES.INTEGER],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { ListUpdate: [] },
      );
    l.ListUpdateWamEvent = s;
  },
  98,
);
