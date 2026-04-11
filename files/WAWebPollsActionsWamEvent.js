__d(
  "WAWebPollsActionsWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumClientGroupSizeBucket",
    "WAWebWamEnumMessageChatType",
    "WAWebWamEnumPollActionType",
    "WAWebWamEnumTypeOfGroupEnum",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          PollsActions: [
            3676,
            {
              chatType: [8, o("WAWebWamEnumMessageChatType").MESSAGE_CHAT_TYPE],
              groupSizeBucket: [
                1,
                o("WAWebWamEnumClientGroupSizeBucket").CLIENT_GROUP_SIZE_BUCKET,
              ],
              hideVoterName: [9, e.TYPES.BOOLEAN],
              isAGroup: [6, e.TYPES.BOOLEAN],
              isAdmin: [2, e.TYPES.BOOLEAN],
              pollAction: [3, o("WAWebWamEnumPollActionType").POLL_ACTION_TYPE],
              pollCreationDs: [4, e.TYPES.INTEGER],
              pollDurationMs: [10, e.TYPES.INTEGER],
              pollOptionsCount: [5, e.TYPES.INTEGER],
              typeOfGroup: [
                7,
                o("WAWebWamEnumTypeOfGroupEnum").TYPE_OF_GROUP_ENUM,
              ],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { PollsActions: [] },
      );
    l.PollsActionsWamEvent = s;
  },
  98,
);
