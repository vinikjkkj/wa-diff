__d(
  "WAWebGroupMemberUpdatesWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumGroupMemberUpdatesActionName",
    "WAWebWamEnumGroupMemberUpdatesCurrentScreen",
  ],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebWamCodegenUtils").defineEvents(
      {
        GroupMemberUpdates: [
          7768,
          {
            fetchedMessageCount: [1, o("WAWebWamCodegenUtils").TYPES.INTEGER],
            groupMemberUpdatesActionName: [
              2,
              o("WAWebWamEnumGroupMemberUpdatesActionName")
                .GROUP_MEMBER_UPDATES_ACTION_NAME,
            ],
            groupMemberUpdatesCurrentScreen: [
              3,
              o("WAWebWamEnumGroupMemberUpdatesCurrentScreen")
                .GROUP_MEMBER_UPDATES_CURRENT_SCREEN,
            ],
            groupMemberUpdatesSessionId: [
              4,
              o("WAWebWamCodegenUtils").TYPES.STRING,
            ],
          },
          [1, 1, 1],
          "regular",
        ],
      },
      { GroupMemberUpdates: [] },
    );
    l.GroupMemberUpdatesWamEvent = e;
  },
  98,
);
