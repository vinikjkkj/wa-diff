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
              groupsAdded: [9, e.TYPES.INTEGER],
              groupsAfterUpdate: [10, e.TYPES.INTEGER],
              listAction: [1, o("WAWebWamEnumListAction").LIST_ACTION],
              listId: [2, e.TYPES.INTEGER],
              listType: [3, o("WAWebWamEnumListType").LIST_TYPE],
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
