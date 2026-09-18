__d(
  "WAWebGroupJourneyWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumChatFilterActionTypes",
    "WAWebWamEnumSurfaceType",
    "WAWebWamEnumThreadType",
    "WAWebWamEnumTsSurface",
    "WAWebWamEnumUserRoleType",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          GroupJourney: [
            4512,
            {
              actionType: [
                1,
                o("WAWebWamEnumChatFilterActionTypes").CHAT_FILTER_ACTION_TYPES,
              ],
              appSessionId: [2, e.TYPES.STRING],
              dedupKey: [8, e.TYPES.INTEGER],
              groupSize: [3, e.TYPES.INTEGER],
              surface: [4, o("WAWebWamEnumSurfaceType").SURFACE_TYPE],
              threadType: [5, o("WAWebWamEnumThreadType").THREAD_TYPE],
              uiSurface: [7, o("WAWebWamEnumTsSurface").TS_SURFACE],
              userRole: [6, o("WAWebWamEnumUserRoleType").USER_ROLE_TYPE],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { GroupJourney: [] },
      );
    l.GroupJourneyWamEvent = s;
  },
  98,
);
