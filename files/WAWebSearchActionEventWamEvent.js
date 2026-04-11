__d(
  "WAWebSearchActionEventWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumSearchActionEntryPointType",
    "WAWebWamEnumSearchActionType",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          SearchActionEvent: [
            5308,
            {
              bizSearchCount: [1, e.TYPES.INTEGER],
              resultPageShown: [11, e.TYPES.BOOLEAN],
              searchAction: [
                2,
                o("WAWebWamEnumSearchActionType").SEARCH_ACTION_TYPE,
              ],
              searchActionEntryPoint: [
                3,
                o("WAWebWamEnumSearchActionEntryPointType")
                  .SEARCH_ACTION_ENTRY_POINT_TYPE,
              ],
              searchAiSuggestionCount: [4, e.TYPES.INTEGER],
              searchChatsCount: [5, e.TYPES.INTEGER],
              searchContactsCount: [6, e.TYPES.INTEGER],
              searchFilterCount: [7, e.TYPES.INTEGER],
              searchGroupsCount: [8, e.TYPES.INTEGER],
              searchMessagesCount: [9, e.TYPES.INTEGER],
              selectedItemRank: [10, e.TYPES.INTEGER],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        {
          SearchActionEvent: [
            [
              [
                function (e) {
                  return (
                    e.getValue("searchAction") ===
                    o("WAWebWamEnumSearchActionType").SEARCH_ACTION_TYPE
                      .NULL_STATE_SHOW
                  );
                },
              ],
              [],
              [
                [
                  function (e) {
                    return e.getValue("searchAiSuggestionCount") > 0;
                  },
                  "search_ai_suggestion_count > 0",
                ],
              ],
            ],
            [
              [
                function (e) {
                  return (
                    e.getValue("searchAction") ===
                    o("WAWebWamEnumSearchActionType").SEARCH_ACTION_TYPE
                      .NULL_STATE_ITEM_CLICK
                  );
                },
              ],
              [],
              [
                [
                  function (e) {
                    return e.getValue("searchAiSuggestionCount") === 1;
                  },
                  "search_ai_suggestion_count == 1",
                ],
              ],
            ],
          ],
        },
      );
    l.SearchActionEventWamEvent = s;
  },
  98,
);
