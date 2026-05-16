__d(
  "WAWebCallInfoUserJourneyWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumCallSizeBucket",
    "WAWebWamEnumCallSizeType",
    "WAWebWamEnumCallType",
    "WAWebWamEnumParticipantActionSource",
    "WAWebWamEnumPreCallActionType",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          CallInfoUserJourney: [
            6034,
            {
              appSessionId: [1, e.TYPES.STRING],
              callGroupSizeBucket: [
                2,
                o("WAWebWamEnumCallSizeBucket").CALL_SIZE_BUCKET,
              ],
              callSizeType: [3, o("WAWebWamEnumCallSizeType").CALL_SIZE_TYPE],
              callType: [4, o("WAWebWamEnumCallType").CALL_TYPE],
              numParticipantsShown: [9, e.TYPES.INTEGER],
              participantActionSource: [
                10,
                o("WAWebWamEnumParticipantActionSource")
                  .PARTICIPANT_ACTION_SOURCE,
              ],
              preCallActionType: [
                5,
                o("WAWebWamEnumPreCallActionType").PRE_CALL_ACTION_TYPE,
              ],
              surfaceSessionId: [6, e.TYPES.STRING],
              userJourneyEventMs: [7, e.TYPES.INTEGER],
              userJourneyFunnelId: [8, e.TYPES.STRING],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { CallInfoUserJourney: [] },
      );
    l.CallInfoUserJourneyWamEvent = s;
  },
  98,
);
