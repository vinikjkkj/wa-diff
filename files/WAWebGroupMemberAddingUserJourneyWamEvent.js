__d(
  "WAWebGroupMemberAddingUserJourneyWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumBundleSendSource",
    "WAWebWamEnumGroupCreateEntryPoint",
    "WAWebWamEnumGroupMemberAddingActionType",
    "WAWebWamEnumGroupMemberAddingMemberType",
    "WAWebWamEnumTsSurface",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          GroupMemberAddingUserJourney: [
            5336,
            {
              addSelectedContactsCount: [1, e.TYPES.INTEGER],
              appSessionId: [2, e.TYPES.STRING],
              bundleSendSource: [
                20,
                o("WAWebWamEnumBundleSendSource").BUNDLE_SEND_SOURCE,
              ],
              frequentlyContactedIndex: [3, e.TYPES.INTEGER],
              groupCreateEntryPoint: [
                16,
                o("WAWebWamEnumGroupCreateEntryPoint").GROUP_CREATE_ENTRY_POINT,
              ],
              groupCreationGroupId: [11, e.TYPES.STRING],
              groupHistoryMessagesCount: [21, e.TYPES.INTEGER],
              groupHistoryOutWindowPinsCount: [25, e.TYPES.INTEGER],
              groupHistoryPinsCount: [26, e.TYPES.INTEGER],
              groupHistoryUncountedMessagesCount: [27, e.TYPES.INTEGER],
              groupMemberAddingActionType: [
                4,
                o("WAWebWamEnumGroupMemberAddingActionType")
                  .GROUP_MEMBER_ADDING_ACTION_TYPE,
              ],
              groupMemberAddingMemberType: [
                24,
                o("WAWebWamEnumGroupMemberAddingMemberType")
                  .GROUP_MEMBER_ADDING_MEMBER_TYPE,
              ],
              groupServerErrorCode: [18, e.TYPES.INTEGER],
              groupServerErrorCodeMsg: [19, e.TYPES.STRING],
              hasGroupName: [12, e.TYPES.BOOLEAN],
              hasProfilePicture: [13, e.TYPES.BOOLEAN],
              isGroupHistoryToggledOn: [22, e.TYPES.BOOLEAN],
              potentialTotalSuggestionCount: [10, e.TYPES.INTEGER],
              recentlyContactedIndex: [5, e.TYPES.INTEGER],
              selectedMemberCnt: [14, e.TYPES.INTEGER],
              suggestedContactsCount: [6, e.TYPES.INTEGER],
              suggestedContactsIndex: [7, e.TYPES.INTEGER],
              uiSurface: [8, o("WAWebWamEnumTsSurface").TS_SURFACE],
              unifiedSessionId: [23, e.TYPES.STRING],
              userJourneyEventMs: [15, e.TYPES.INTEGER],
              userJourneyFunnelId: [9, e.TYPES.STRING],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { GroupMemberAddingUserJourney: [] },
      );
    l.GroupMemberAddingUserJourneyWamEvent = s;
  },
  98,
);
