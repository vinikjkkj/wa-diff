__d(
  "WAWebPreCallUserJourneyCallsTabWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumCallSizeType",
    "WAWebWamEnumCallsTabSource",
    "WAWebWamEnumPreCallActionType",
    "WAWebWamEnumSubSurface",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          PreCallUserJourneyCallsTab: [
            5680,
            {
              appSessionId: [1, e.TYPES.STRING],
              callSizeType: [7, o("WAWebWamEnumCallSizeType").CALL_SIZE_TYPE],
              callsTabSource: [
                2,
                o("WAWebWamEnumCallsTabSource").CALLS_TAB_SOURCE,
              ],
              itemPosition: [10, e.TYPES.INTEGER],
              preCallActionType: [
                3,
                o("WAWebWamEnumPreCallActionType").PRE_CALL_ACTION_TYPE,
              ],
              subSurface: [4, o("WAWebWamEnumSubSurface").SUB_SURFACE],
              surfaceSessionId: [5, e.TYPES.STRING],
              userJourneyEventMs: [9, e.TYPES.INTEGER],
              userJourneyFunnelId: [6, e.TYPES.STRING],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { PreCallUserJourneyCallsTab: [] },
      );
    l.PreCallUserJourneyCallsTabWamEvent = s;
  },
  98,
);
