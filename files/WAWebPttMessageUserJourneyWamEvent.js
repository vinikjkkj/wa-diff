__d(
  "WAWebPttMessageUserJourneyWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumChatbarInitialState",
    "WAWebWamEnumPttMessageUserJourneyAction",
    "WAWebWamEnumPttMessageUserJourneyFailureReason",
    "WAWebWamEnumPttMessageUserJourneyStage",
    "WAWebWamEnumPttWaveformResult",
    "WAWebWamEnumTsSurface",
    "WAWebWamEnumUserJourneyChatType",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          PttMessageUserJourney: [
            5402,
            {
              appSessionId: [1, e.TYPES.STRING],
              chatbarInitialState: [
                7,
                o("WAWebWamEnumChatbarInitialState").CHATBAR_INITIAL_STATE,
              ],
              isMetaAiThread: [12, e.TYPES.BOOLEAN],
              pttIntensityAggregateValue: [14, e.TYPES.NUMBER],
              pttMessageUserJourneyAction: [
                2,
                o("WAWebWamEnumPttMessageUserJourneyAction")
                  .PTT_MESSAGE_USER_JOURNEY_ACTION,
              ],
              pttMessageUserJourneyContainsQuotedItem: [11, e.TYPES.BOOLEAN],
              pttMessageUserJourneyFailureReason: [
                9,
                o("WAWebWamEnumPttMessageUserJourneyFailureReason")
                  .PTT_MESSAGE_USER_JOURNEY_FAILURE_REASON,
              ],
              pttMessageUserJourneyStage: [
                3,
                o("WAWebWamEnumPttMessageUserJourneyStage")
                  .PTT_MESSAGE_USER_JOURNEY_STAGE,
              ],
              pttWaveformResult: [
                13,
                o("WAWebWamEnumPttWaveformResult").PTT_WAVEFORM_RESULT,
              ],
              uiSurface: [4, o("WAWebWamEnumTsSurface").TS_SURFACE],
              unifiedSessionId: [10, e.TYPES.STRING],
              userJourneyChatType: [
                5,
                o("WAWebWamEnumUserJourneyChatType").USER_JOURNEY_CHAT_TYPE,
              ],
              userJourneyEventMs: [8, e.TYPES.INTEGER],
              userJourneyFunnelId: [6, e.TYPES.STRING],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { PttMessageUserJourney: [] },
      );
    l.PttMessageUserJourneyWamEvent = s;
  },
  98,
);
