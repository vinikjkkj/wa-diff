__d(
  "WAWebListUpdateUserJourneyWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumListAction",
    "WAWebWamEnumListType",
    "WAWebWamEnumListUpdateUserJourneyAction",
    "WAWebWamEnumUpdateEntryPoint",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          ListUpdateUserJourney: [
            5958,
            {
              customListCount: [7, e.TYPES.INTEGER],
              listAction: [1, o("WAWebWamEnumListAction").LIST_ACTION],
              listId: [2, e.TYPES.INTEGER],
              listType: [3, o("WAWebWamEnumListType").LIST_TYPE],
              listUpdateUserJourneyAction: [
                4,
                o("WAWebWamEnumListUpdateUserJourneyAction")
                  .LIST_UPDATE_USER_JOURNEY_ACTION,
              ],
              predefinedId: [5, e.TYPES.INTEGER],
              presetListCount: [8, e.TYPES.INTEGER],
              updateEntryPoint: [
                6,
                o("WAWebWamEnumUpdateEntryPoint").UPDATE_ENTRY_POINT,
              ],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { ListUpdateUserJourney: [] },
      );
    l.ListUpdateUserJourneyWamEvent = s;
  },
  98,
);
