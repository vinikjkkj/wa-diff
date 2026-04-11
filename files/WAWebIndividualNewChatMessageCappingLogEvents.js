__d(
  "WAWebIndividualNewChatMessageCappingLogEvents",
  ["WAWebMessageCappingWamEvent", "WAWebWamEnumMessageCappingActionType"],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n) {
      new (o("WAWebMessageCappingWamEvent").MessageCappingWamEvent)({
        messageCappingActionType: o("WAWebWamEnumMessageCappingActionType")
          .MESSAGE_CAPPING_ACTION_TYPE.VIEW,
        surface: e,
        extraAttributes: t,
        messageCappingEntryPoint: n,
      }).commit();
    }
    function s(e, t, n) {
      new (o("WAWebMessageCappingWamEvent").MessageCappingWamEvent)({
        messageCappingActionType: o("WAWebWamEnumMessageCappingActionType")
          .MESSAGE_CAPPING_ACTION_TYPE.CLICK,
        surface: e,
        userActionTarget: t,
        extraAttributes: n,
      }).commit();
    }
    ((l.logView = e), (l.logClick = s));
  },
  98,
);
