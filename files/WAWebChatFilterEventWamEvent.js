__d(
  "WAWebChatFilterEventWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumChatFilterActionTypes",
    "WAWebWamEnumChatFilterTargetScreen",
    "WAWebWamEnumChatFilterTypes",
    "WAWebWamEnumChatSearchResultType",
    "WAWebWamEnumListType",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          ChatFilterEvent: [
            1616,
            {
              actionType: [
                1,
                o("WAWebWamEnumChatFilterActionTypes").CHAT_FILTER_ACTION_TYPES,
              ],
              activitySessionId: [6, e.TYPES.STRING],
              filterType: [
                2,
                o("WAWebWamEnumChatFilterTypes").CHAT_FILTER_TYPES,
              ],
              labelName: [11, e.TYPES.STRING],
              listId: [12, e.TYPES.INTEGER],
              listIndex: [13, e.TYPES.INTEGER],
              listType: [14, o("WAWebWamEnumListType").LIST_TYPE],
              metadata: [7, e.TYPES.STRING],
              predefinedId: [10, e.TYPES.INTEGER],
              searchQueryId: [8, e.TYPES.STRING],
              searchRequestId: [9, e.TYPES.STRING],
              searchResultType: [
                4,
                o("WAWebWamEnumChatSearchResultType").CHAT_SEARCH_RESULT_TYPE,
              ],
              sessionId: [3, e.TYPES.INTEGER],
              targetScreen: [
                5,
                o("WAWebWamEnumChatFilterTargetScreen")
                  .CHAT_FILTER_TARGET_SCREEN,
              ],
              threadId: [15, e.TYPES.STRING],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { ChatFilterEvent: [] },
      );
    l.ChatFilterEventWamEvent = s;
  },
  98,
);
