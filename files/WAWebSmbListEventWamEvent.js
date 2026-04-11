__d(
  "WAWebSmbListEventWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumLabelOperations",
    "WAWebWamEnumLabelTargets",
    "WAWebWamEnumLastMessageDirection",
    "WAWebWamEnumListType",
    "WAWebWamEnumUpdateEntryPoint",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          SmbListEvent: [
            7102,
            {
              bulkLabeling: [12, e.TYPES.BOOLEAN],
              currentListState: [13, e.TYPES.STRING],
              customListTitle: [1, e.TYPES.STRING],
              entryPointConversionSource: [2, e.TYPES.STRING],
              labelOperation: [
                3,
                o("WAWebWamEnumLabelOperations").LABEL_OPERATIONS,
              ],
              labelTarget: [14, o("WAWebWamEnumLabelTargets").LABEL_TARGETS],
              lastMessageDirection: [
                4,
                o("WAWebWamEnumLastMessageDirection").LAST_MESSAGE_DIRECTION,
              ],
              listId: [5, e.TYPES.INTEGER],
              listIndex: [6, e.TYPES.INTEGER],
              listType: [7, o("WAWebWamEnumListType").LIST_TYPE],
              listsApplied: [15, e.TYPES.STRING],
              listsRemoved: [16, e.TYPES.STRING],
              messageDepth: [8, e.TYPES.INTEGER],
              predefinedId: [9, e.TYPES.INTEGER],
              threadIdHmac: [10, e.TYPES.STRING],
              updateEntryPoint: [
                11,
                o("WAWebWamEnumUpdateEntryPoint").UPDATE_ENTRY_POINT,
              ],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { SmbListEvent: [] },
      );
    l.SmbListEventWamEvent = s;
  },
  98,
);
