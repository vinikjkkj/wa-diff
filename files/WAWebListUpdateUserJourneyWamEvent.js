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
    var e = o("WAWebWamCodegenUtils").defineEvents(
      {
        ListUpdateUserJourney: [
          5958,
          {
            listAction: [1, o("WAWebWamEnumListAction").LIST_ACTION],
            listId: [2, o("WAWebWamCodegenUtils").TYPES.INTEGER],
            listType: [3, o("WAWebWamEnumListType").LIST_TYPE],
            listUpdateUserJourneyAction: [
              4,
              o("WAWebWamEnumListUpdateUserJourneyAction")
                .LIST_UPDATE_USER_JOURNEY_ACTION,
            ],
            predefinedId: [5, o("WAWebWamCodegenUtils").TYPES.INTEGER],
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
    l.ListUpdateUserJourneyWamEvent = e;
  },
  98,
);
