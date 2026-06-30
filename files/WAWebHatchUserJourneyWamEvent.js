__d(
  "WAWebHatchUserJourneyWamEvent",
  ["WAWebWamCodegenUtils", "WAWebWamEnumHatchActionType"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          HatchUserJourney: [
            7806,
            {
              aiSessionId: [1, e.TYPES.STRING],
              hatchActionType: [
                3,
                o("WAWebWamEnumHatchActionType").HATCH_ACTION_TYPE,
              ],
              rawBotEntryPoint: [5, e.TYPES.STRING],
              unifiedSessionId: [4, e.TYPES.STRING],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { HatchUserJourney: [] },
      );
    l.HatchUserJourneyWamEvent = s;
  },
  98,
);
