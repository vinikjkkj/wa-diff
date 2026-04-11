__d(
  "WAWebGroupHistoryReceiverUserJourneyWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumGroupHistoryReceiverUserJourneyActionType",
    "WAWebWamEnumTsSurface",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          GroupHistoryReceiverUserJourney: [
            7064,
            {
              groupHistoryDbIgnoredOlderMessages: [9, e.TYPES.BOOLEAN],
              groupHistoryMessagesCount: [1, e.TYPES.INTEGER],
              groupHistoryOutWindowPinsCount: [12, e.TYPES.INTEGER],
              groupHistoryPinsCount: [13, e.TYPES.INTEGER],
              groupHistoryReceiverActionType: [
                2,
                o("WAWebWamEnumGroupHistoryReceiverUserJourneyActionType")
                  .GROUP_HISTORY_RECEIVER_USER_JOURNEY_ACTION_TYPE,
              ],
              groupHistoryReceiverGroupId: [3, e.TYPES.STRING],
              groupHistoryUncountedMessagesCount: [14, e.TYPES.INTEGER],
              isAutoProcess: [4, e.TYPES.BOOLEAN],
              messageKeyHash: [10, e.TYPES.STRING],
              messageReceivedTs: [5, e.TYPES.INTEGER],
              receiverFailureReason: [11, e.TYPES.STRING],
              uiSurface: [6, o("WAWebWamEnumTsSurface").TS_SURFACE],
              unifiedSessionId: [7, e.TYPES.STRING],
              userJourneyMs: [8, e.TYPES.INTEGER],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { GroupHistoryReceiverUserJourney: [] },
      );
    l.GroupHistoryReceiverUserJourneyWamEvent = s;
  },
  98,
);
