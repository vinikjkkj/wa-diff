__d(
  "WAWebBotBizJourneyWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumBotBizActionType",
    "WAWebWamEnumBotBizEntryPoint",
    "WAWebWamEnumBotBizType",
    "WAWebWamEnumBotType",
  ],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebWamCodegenUtils").defineEvents(
      {
        BotBizJourney: [
          4868,
          {
            appSessionId: [1, o("WAWebWamCodegenUtils").TYPES.STRING],
            botBizActionType: [
              5,
              o("WAWebWamEnumBotBizActionType").BOT_BIZ_ACTION_TYPE,
            ],
            botBizEntryPoint: [
              6,
              o("WAWebWamEnumBotBizEntryPoint").BOT_BIZ_ENTRY_POINT,
            ],
            botBizType: [7, o("WAWebWamEnumBotBizType").BOT_BIZ_TYPE],
            botType: [4, o("WAWebWamEnumBotType").BOT_TYPE],
          },
          [1, 1, 1],
          "regular",
        ],
      },
      { BotBizJourney: [] },
    );
    l.BotBizJourneyWamEvent = e;
  },
  98,
);
