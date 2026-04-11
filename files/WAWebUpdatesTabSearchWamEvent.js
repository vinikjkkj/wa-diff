__d(
  "WAWebUpdatesTabSearchWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumUpdateTabSearchEventType",
    "WAWebWamEnumUpdatesTabSearchModeType",
    "WAWebWamEnumUpdatesTabSearchResultType",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          UpdatesTabSearch: [
            4838,
            {
              channelsAdminCount: [5, e.TYPES.INTEGER],
              channelsFollowedCount: [1, e.TYPES.INTEGER],
              premiumChannelsFollowedCount: [8, e.TYPES.INTEGER],
              recentStatusItemCount: [2, e.TYPES.INTEGER],
              recentStatusRowCount: [3, e.TYPES.INTEGER],
              unifiedSessionId: [12, e.TYPES.STRING],
              updateTabSearchEventType: [
                4,
                o("WAWebWamEnumUpdateTabSearchEventType")
                  .UPDATE_TAB_SEARCH_EVENT_TYPE,
              ],
              updatesTabSearchModeType: [
                11,
                o("WAWebWamEnumUpdatesTabSearchModeType")
                  .UPDATES_TAB_SEARCH_MODE_TYPE,
              ],
              updatesTabSearchResultType: [
                9,
                o("WAWebWamEnumUpdatesTabSearchResultType")
                  .UPDATES_TAB_SEARCH_RESULT_TYPE,
              ],
              updatesTabSearchSessionId: [10, e.TYPES.STRING],
              updatesTabSessionId: [13, e.TYPES.INTEGER],
              viewedStatusItemCount: [6, e.TYPES.INTEGER],
              viewedStatusRowCount: [7, e.TYPES.INTEGER],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { UpdatesTabSearch: [] },
      );
    l.UpdatesTabSearchWamEvent = s;
  },
  98,
);
