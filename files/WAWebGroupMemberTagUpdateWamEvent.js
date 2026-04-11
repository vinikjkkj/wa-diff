__d(
  "WAWebGroupMemberTagUpdateWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumGroupMemberTagEntryPointType",
    "WAWebWamEnumGroupMemberTagUpdateActionType",
    "WAWebWamEnumTsSurface",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          GroupMemberTagUpdate: [
            7010,
            {
              groupId: [1, e.TYPES.STRING],
              groupMemberTagUpdateAction: [
                2,
                o("WAWebWamEnumGroupMemberTagUpdateActionType")
                  .GROUP_MEMBER_TAG_UPDATE_ACTION_TYPE,
              ],
              hasMemberTagAtStart: [3, e.TYPES.BOOLEAN],
              memberTagEntryPoint: [
                4,
                o("WAWebWamEnumGroupMemberTagEntryPointType")
                  .GROUP_MEMBER_TAG_ENTRY_POINT_TYPE,
              ],
              uiSurface: [5, o("WAWebWamEnumTsSurface").TS_SURFACE],
              unifiedSessionId: [6, e.TYPES.STRING],
              userJourneyEventMs: [7, e.TYPES.INTEGER],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { GroupMemberTagUpdate: [] },
      );
    l.GroupMemberTagUpdateWamEvent = s;
  },
  98,
);
