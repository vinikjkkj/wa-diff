__d(
  "WAWebMessageContextMenuActionsWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumMessageContextMenuActionType",
    "WAWebWamEnumMessageContextMenuOptionType",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          MessageContextMenuActions: [
            3694,
            {
              isAGroup: [1, e.TYPES.BOOLEAN],
              isMultiAction: [2, e.TYPES.BOOLEAN],
              isOriginalSender: [3, e.TYPES.BOOLEAN],
              messageContextMenuAction: [
                4,
                o("WAWebWamEnumMessageContextMenuActionType")
                  .MESSAGE_CONTEXT_MENU_ACTION_TYPE,
              ],
              messageContextMenuOption: [
                5,
                o("WAWebWamEnumMessageContextMenuOptionType")
                  .MESSAGE_CONTEXT_MENU_OPTION_TYPE,
              ],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { MessageContextMenuActions: [] },
      );
    l.MessageContextMenuActionsWamEvent = s;
  },
  98,
);
