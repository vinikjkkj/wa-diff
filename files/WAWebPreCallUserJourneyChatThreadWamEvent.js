__d(
  "WAWebPreCallUserJourneyChatThreadWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumCallSizeType",
    "WAWebWamEnumPreCallActionType",
    "WAWebWamEnumSubSurface",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          PreCallUserJourneyChatThread: [
            5634,
            {
              appSessionId: [1, e.TYPES.STRING],
              callRandomId: [13, e.TYPES.STRING],
              callSize: [9, e.TYPES.INTEGER],
              callSizeType: [7, o("WAWebWamEnumCallSizeType").CALL_SIZE_TYPE],
              groupSize: [2, e.TYPES.INTEGER],
              isCommunityGroup: [11, e.TYPES.BOOLEAN],
              isVideoCall: [12, e.TYPES.BOOLEAN],
              preCallActionType: [
                3,
                o("WAWebWamEnumPreCallActionType").PRE_CALL_ACTION_TYPE,
              ],
              subSurface: [4, o("WAWebWamEnumSubSurface").SUB_SURFACE],
              surfaceSessionId: [5, e.TYPES.STRING],
              userJourneyEventMs: [10, e.TYPES.INTEGER],
              userJourneyFunnelId: [6, e.TYPES.STRING],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { PreCallUserJourneyChatThread: [] },
      );
    l.PreCallUserJourneyChatThreadWamEvent = s;
  },
  98,
);
