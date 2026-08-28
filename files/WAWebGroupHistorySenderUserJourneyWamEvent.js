__d(
  "WAWebGroupHistorySenderUserJourneyWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumAddMembersEntrypointType",
    "WAWebWamEnumBundleSendSource",
    "WAWebWamEnumGroupCreateEntryPoint",
    "WAWebWamEnumGroupHistoryIneligibilityReason",
    "WAWebWamEnumGroupHistorySenderActionType",
    "WAWebWamEnumGroupHistorySystemMessageType",
    "WAWebWamEnumTsSurface",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          GroupHistorySenderUserJourney: [
            8378,
            {
              appSessionId: [21, e.TYPES.STRING],
              bundleSendSource: [
                1,
                o("WAWebWamEnumBundleSendSource").BUNDLE_SEND_SOURCE,
              ],
              groupAddMemberEntryPoint: [
                17,
                o("WAWebWamEnumAddMembersEntrypointType")
                  .ADD_MEMBERS_ENTRYPOINT_TYPE,
              ],
              groupCreateEntryPoint: [
                20,
                o("WAWebWamEnumGroupCreateEntryPoint").GROUP_CREATE_ENTRY_POINT,
              ],
              groupHistoryMessagesCount: [2, e.TYPES.INTEGER],
              groupHistoryOutWindowPinsCount: [3, e.TYPES.INTEGER],
              groupHistoryPinsCount: [4, e.TYPES.INTEGER],
              groupHistorySenderActionType: [
                5,
                o("WAWebWamEnumGroupHistorySenderActionType")
                  .GROUP_HISTORY_SENDER_ACTION_TYPE,
              ],
              groupHistorySystemMessageType: [
                6,
                o("WAWebWamEnumGroupHistorySystemMessageType")
                  .GROUP_HISTORY_SYSTEM_MESSAGE_TYPE,
              ],
              groupHistoryUncountedMessagesCount: [7, e.TYPES.INTEGER],
              groupSize: [8, e.TYPES.INTEGER],
              ineligibleReason: [
                9,
                o("WAWebWamEnumGroupHistoryIneligibilityReason")
                  .GROUP_HISTORY_INELIGIBILITY_REASON,
              ],
              isAdmin: [18, e.TYPES.BOOLEAN],
              isGroupHistoryToggledOn: [15, e.TYPES.BOOLEAN],
              isTeeBotNoticeOnly: [14, e.TYPES.BOOLEAN],
              recipientCount: [10, e.TYPES.INTEGER],
              uiSurface: [11, o("WAWebWamEnumTsSurface").TS_SURFACE],
              unifiedSessionId: [12, e.TYPES.STRING],
              userJourneyFunnelId: [19, e.TYPES.STRING],
              userJourneyTs: [13, e.TYPES.INTEGER],
              xIneligibleReasons: [16, e.TYPES.STRING],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { GroupHistorySenderUserJourney: [] },
      );
    l.GroupHistorySenderUserJourneyWamEvent = s;
  },
  98,
);
