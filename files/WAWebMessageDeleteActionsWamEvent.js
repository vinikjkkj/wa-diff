__d(
  "WAWebMessageDeleteActionsWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumDeleteActionType",
    "WAWebWamEnumMediaType",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          MessageDeleteActions: [
            3626,
            {
              deleteActionType: [
                1,
                o("WAWebWamEnumDeleteActionType").DELETE_ACTION_TYPE,
              ],
              isAGroup: [2, e.TYPES.BOOLEAN],
              mediaType: [6, o("WAWebWamEnumMediaType").MEDIA_TYPE],
              messagesDeleted: [3, e.TYPES.INTEGER],
              threadId: [4, e.TYPES.STRING],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { MessageDeleteActions: [] },
      );
    l.MessageDeleteActionsWamEvent = s;
  },
  98,
);
