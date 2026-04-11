__d(
  "WAWebSearchUserJourneyWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumSearchDsSendContentType",
    "WAWebWamEnumSearchSelectedMessageSource",
    "WAWebWamEnumSearchUjCriteriaType",
    "WAWebWamEnumSearchUjDismissType",
    "WAWebWamEnumSearchUjFilterType",
    "WAWebWamEnumSearchUjItemType",
    "WAWebWamEnumSearchUseCase",
    "WAWebWamEnumSearchUserJourneyAction",
    "WAWebWamEnumTsSurface",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          SearchUserJourney: [
            6358,
            {
              searchDsSendContentType: [
                32,
                o("WAWebWamEnumSearchDsSendContentType")
                  .SEARCH_DS_SEND_CONTENT_TYPE,
              ],
              searchDsTimeSpentMs: [33, e.TYPES.INTEGER],
              searchFtsAndSemanticMessagesCount: [21, e.TYPES.INTEGER],
              searchFtsMessagesCount: [22, e.TYPES.INTEGER],
              searchHasSemanticSearchResults: [23, e.TYPES.BOOLEAN],
              searchSelectedMessageSource: [
                24,
                o("WAWebWamEnumSearchSelectedMessageSource")
                  .SEARCH_SELECTED_MESSAGE_SOURCE,
              ],
              searchSemanticMessagesCount: [25, e.TYPES.INTEGER],
              searchSessionQueryId: [26, e.TYPES.STRING],
              searchUjAiSuggestionCount: [1, e.TYPES.INTEGER],
              searchUjBizCount: [2, e.TYPES.INTEGER],
              searchUjChatsCount: [3, e.TYPES.INTEGER],
              searchUjContactsCount: [4, e.TYPES.INTEGER],
              searchUjCriteriaType: [
                5,
                o("WAWebWamEnumSearchUjCriteriaType").SEARCH_UJ_CRITERIA_TYPE,
              ],
              searchUjDismissType: [
                6,
                o("WAWebWamEnumSearchUjDismissType").SEARCH_UJ_DISMISS_TYPE,
              ],
              searchUjFilterCount: [7, e.TYPES.INTEGER],
              searchUjFilterType: [
                8,
                o("WAWebWamEnumSearchUjFilterType").SEARCH_UJ_FILTER_TYPE,
              ],
              searchUjGroupsInCommonCount: [9, e.TYPES.INTEGER],
              searchUjHasFuzzyResults: [10, e.TYPES.BOOLEAN],
              searchUjInviteCount: [31, e.TYPES.INTEGER],
              searchUjItemType: [
                11,
                o("WAWebWamEnumSearchUjItemType").SEARCH_UJ_ITEM_TYPE,
              ],
              searchUjMessagesCount: [12, e.TYPES.INTEGER],
              searchUjRecentSearchesGroupCount: [29, e.TYPES.INTEGER],
              searchUjRecentSearchesIndividualCount: [30, e.TYPES.INTEGER],
              searchUjResultCount: [13, e.TYPES.INTEGER],
              searchUjSelectedItemRank: [14, e.TYPES.INTEGER],
              searchUniqueSessionId: [27, e.TYPES.STRING],
              searchUseCase: [
                15,
                o("WAWebWamEnumSearchUseCase").SEARCH_USE_CASE,
              ],
              searchUserJourneyAction: [
                16,
                o("WAWebWamEnumSearchUserJourneyAction")
                  .SEARCH_USER_JOURNEY_ACTION,
              ],
              selectedMessageDistance: [28, e.TYPES.NUMBER],
              uiSurface: [17, o("WAWebWamEnumTsSurface").TS_SURFACE],
              unifiedSessionId: [18, e.TYPES.STRING],
              userJourneyEventMs: [19, e.TYPES.INTEGER],
              userJourneyFunnelId: [20, e.TYPES.STRING],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { SearchUserJourney: [] },
      );
    l.SearchUserJourneyWamEvent = s;
  },
  98,
);
