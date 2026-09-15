__d(
  "WAWebCallUserJourneyWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumCallActionType",
    "WAWebWamEnumSubSurface",
    "WAWebWamEnumTsSurface",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          CallUserJourney: [
            4568,
            {
              aiSessionId: [10, e.TYPES.STRING],
              appSessionId: [1, e.TYPES.STRING],
              callActionType: [
                2,
                o("WAWebWamEnumCallActionType").CALL_ACTION_TYPE,
              ],
              callRandomId: [3, e.TYPES.STRING],
              isCallConnected: [7, e.TYPES.BOOLEAN],
              isGenaiAdded: [11, e.TYPES.BOOLEAN],
              isGroupCall: [12, e.TYPES.BOOLEAN],
              isVideoCall: [13, e.TYPES.BOOLEAN],
              numConnectedParticipants: [14, e.TYPES.INTEGER],
              subSurface: [4, o("WAWebWamEnumSubSurface").SUB_SURFACE],
              traceIdInt: [9, e.TYPES.INTEGER],
              uiSurface: [6, o("WAWebWamEnumTsSurface").TS_SURFACE],
              userJourneyEventMs: [8, e.TYPES.INTEGER],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { CallUserJourney: [] },
      );
    l.CallUserJourneyWamEvent = s;
  },
  98,
);
