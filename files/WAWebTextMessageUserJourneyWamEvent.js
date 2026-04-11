__d(
  "WAWebTextMessageUserJourneyWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumBotType",
    "WAWebWamEnumChatbarInitialState",
    "WAWebWamEnumTextMessageUserJourneyAction",
    "WAWebWamEnumTsSurface",
    "WAWebWamEnumUserJourneyChatType",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          TextMessageUserJourney: [
            5404,
            {
              appSessionId: [1, e.TYPES.STRING],
              botType: [10, o("WAWebWamEnumBotType").BOT_TYPE],
              chatbarInitialState: [
                6,
                o("WAWebWamEnumChatbarInitialState").CHATBAR_INITIAL_STATE,
              ],
              textMessageUserJourneyAction: [
                2,
                o("WAWebWamEnumTextMessageUserJourneyAction")
                  .TEXT_MESSAGE_USER_JOURNEY_ACTION,
              ],
              textMessageUserJourneyContainsQuotedItem: [9, e.TYPES.BOOLEAN],
              uiSurface: [3, o("WAWebWamEnumTsSurface").TS_SURFACE],
              unifiedSessionId: [8, e.TYPES.STRING],
              userJourneyChatType: [
                4,
                o("WAWebWamEnumUserJourneyChatType").USER_JOURNEY_CHAT_TYPE,
              ],
              userJourneyEventMs: [7, e.TYPES.INTEGER],
              userJourneyFunnelId: [5, e.TYPES.STRING],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { TextMessageUserJourney: [] },
      );
    l.TextMessageUserJourneyWamEvent = s;
  },
  98,
);
