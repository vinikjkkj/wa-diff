__d(
  "WAWebHatchUserJourneyWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumBotEntryPointType",
    "WAWebWamEnumHatchActionType",
  ],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebWamCodegenUtils").defineEvents(
      {
        HatchUserJourney: [
          7806,
          {
            aiSessionId: [1, o("WAWebWamCodegenUtils").TYPES.STRING],
            botEntryPoint: [
              2,
              o("WAWebWamEnumBotEntryPointType").BOT_ENTRY_POINT_TYPE,
            ],
            hatchActionType: [
              3,
              o("WAWebWamEnumHatchActionType").HATCH_ACTION_TYPE,
            ],
            unifiedSessionId: [4, o("WAWebWamCodegenUtils").TYPES.STRING],
          },
          [1, 1, 1],
          "regular",
        ],
      },
      { HatchUserJourney: [] },
    );
    l.HatchUserJourneyWamEvent = e;
  },
  98,
);
