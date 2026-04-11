__d(
  "WAWebReactionUserJourneyWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumMediaType",
    "WAWebWamEnumMessageType",
    "WAWebWamEnumReactionUserJourneyAction",
    "WAWebWamEnumReactionUserJourneyEntryPoint",
    "WAWebWamEnumTsSurface",
    "WAWebWamEnumUserJourneyChatType",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          ReactionUserJourney: [
            5752,
            {
              appSessionId: [1, e.TYPES.STRING],
              messageHasOwnReaction: [2, e.TYPES.BOOLEAN],
              messageHasReaction: [3, e.TYPES.BOOLEAN],
              messageMediaType: [10, o("WAWebWamEnumMediaType").MEDIA_TYPE],
              messageType: [4, o("WAWebWamEnumMessageType").MESSAGE_TYPE],
              reactionUserJourneyAction: [
                5,
                o("WAWebWamEnumReactionUserJourneyAction")
                  .REACTION_USER_JOURNEY_ACTION,
              ],
              reactionUserJourneyEntryPoint: [
                6,
                o("WAWebWamEnumReactionUserJourneyEntryPoint")
                  .REACTION_USER_JOURNEY_ENTRY_POINT,
              ],
              uiSurface: [7, o("WAWebWamEnumTsSurface").TS_SURFACE],
              unifiedSessionId: [12, e.TYPES.STRING],
              userJourneyChatType: [
                8,
                o("WAWebWamEnumUserJourneyChatType").USER_JOURNEY_CHAT_TYPE,
              ],
              userJourneyEventMs: [11, e.TYPES.INTEGER],
              userJourneyFunnelId: [9, e.TYPES.STRING],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { ReactionUserJourney: [] },
      );
    l.ReactionUserJourneyWamEvent = s;
  },
  98,
);
