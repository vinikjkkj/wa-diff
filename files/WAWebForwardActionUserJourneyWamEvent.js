__d(
  "WAWebForwardActionUserJourneyWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumForwardActionUserJourneyAction",
    "WAWebWamEnumMediaType",
    "WAWebWamEnumMessageType",
    "WAWebWamEnumTsSurface",
    "WAWebWamEnumUserJourneyChatType",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          ForwardActionUserJourney: [
            6506,
            {
              appSessionId: [1, e.TYPES.STRING],
              forwardActionUserJourneyAction: [
                2,
                o("WAWebWamEnumForwardActionUserJourneyAction")
                  .FORWARD_ACTION_USER_JOURNEY_ACTION,
              ],
              forwardUserJourneyFunnelId: [11, e.TYPES.STRING],
              messageIsFromMe: [3, e.TYPES.BOOLEAN],
              messageMediaType: [4, o("WAWebWamEnumMediaType").MEDIA_TYPE],
              messageType: [5, o("WAWebWamEnumMessageType").MESSAGE_TYPE],
              uiSurface: [6, o("WAWebWamEnumTsSurface").TS_SURFACE],
              unifiedSessionId: [9, e.TYPES.STRING],
              userJourneyChatType: [
                7,
                o("WAWebWamEnumUserJourneyChatType").USER_JOURNEY_CHAT_TYPE,
              ],
              userJourneyEventMs: [12, e.TYPES.INTEGER],
              userJourneyFunnelId: [8, e.TYPES.STRING],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { ForwardActionUserJourney: [] },
      );
    l.ForwardActionUserJourneyWamEvent = s;
  },
  98,
);
