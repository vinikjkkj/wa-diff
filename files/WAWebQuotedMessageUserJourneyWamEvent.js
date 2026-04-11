__d(
  "WAWebQuotedMessageUserJourneyWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumChatbarInitialState",
    "WAWebWamEnumMediaType",
    "WAWebWamEnumMessageType",
    "WAWebWamEnumQuotedMessageUserJourneyAction",
    "WAWebWamEnumQuotedMessageUserJourneyEntryPoint",
    "WAWebWamEnumQuotedMessageUserJourneyNavigateResult",
    "WAWebWamEnumTsSurface",
    "WAWebWamEnumUserJourneyChatType",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          QuotedMessageUserJourney: [
            6444,
            {
              appSessionId: [1, e.TYPES.STRING],
              chatbarInitialState: [
                12,
                o("WAWebWamEnumChatbarInitialState").CHATBAR_INITIAL_STATE,
              ],
              messageMediaType: [2, o("WAWebWamEnumMediaType").MEDIA_TYPE],
              messageType: [3, o("WAWebWamEnumMessageType").MESSAGE_TYPE],
              quotedMediaType: [4, o("WAWebWamEnumMediaType").MEDIA_TYPE],
              quotedMessageTypeEnum: [
                5,
                o("WAWebWamEnumMessageType").MESSAGE_TYPE,
              ],
              quotedMessageUserJourneyAction: [
                6,
                o("WAWebWamEnumQuotedMessageUserJourneyAction")
                  .QUOTED_MESSAGE_USER_JOURNEY_ACTION,
              ],
              quotedMessageUserJourneyEntryPoint: [
                7,
                o("WAWebWamEnumQuotedMessageUserJourneyEntryPoint")
                  .QUOTED_MESSAGE_USER_JOURNEY_ENTRY_POINT,
              ],
              quotedMessageUserJourneyNavigateResult: [
                13,
                o("WAWebWamEnumQuotedMessageUserJourneyNavigateResult")
                  .QUOTED_MESSAGE_USER_JOURNEY_NAVIGATE_RESULT,
              ],
              uiSurface: [8, o("WAWebWamEnumTsSurface").TS_SURFACE],
              unifiedSessionId: [11, e.TYPES.STRING],
              userJourneyChatType: [
                9,
                o("WAWebWamEnumUserJourneyChatType").USER_JOURNEY_CHAT_TYPE,
              ],
              userJourneyFunnelId: [10, e.TYPES.STRING],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { QuotedMessageUserJourney: [] },
      );
    l.QuotedMessageUserJourneyWamEvent = s;
  },
  98,
);
