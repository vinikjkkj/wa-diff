__d(
  "WAWebMultiSelectUtils",
  [
    "WAWebChatGetters",
    "WAWebFrontendMsgGetters",
    "WAWebMessageContextMenuActionsWamEvent",
    "WAWebWamEnumMessageContextMenuActionType",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      e.length !== 0 &&
        new (o(
          "WAWebMessageContextMenuActionsWamEvent",
        ).MessageContextMenuActionsWamEvent)({
          isAGroup: o("WAWebChatGetters").getIsGroup(
            o("WAWebFrontendMsgGetters").getChat(e[0]),
          ),
          isMultiAction: e.length > 1,
          messageContextMenuAction: o(
            "WAWebWamEnumMessageContextMenuActionType",
          ).MESSAGE_CONTEXT_MENU_ACTION_TYPE.CLICK,
          messageContextMenuOption: t,
        }).commit();
    }
    l.logMessageActionClickMetric = e;
  },
  98,
);
