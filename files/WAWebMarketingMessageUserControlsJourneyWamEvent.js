__d(
  "WAWebMarketingMessageUserControlsJourneyWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumMmUserControlsAction",
    "WAWebWamEnumMmUserControlsEntryPoint",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          MarketingMessageUserControlsJourney: [
            6070,
            {
              businessPhoneNumber: [9, e.TYPES.INTEGER],
              isSuccess: [1, e.TYPES.BOOLEAN],
              mmUserControlsAction: [
                2,
                o("WAWebWamEnumMmUserControlsAction").MM_USER_CONTROLS_ACTION,
              ],
              mmUserControlsEntryPoint: [
                3,
                o("WAWebWamEnumMmUserControlsEntryPoint")
                  .MM_USER_CONTROLS_ENTRY_POINT,
              ],
              mmUserControlsErrorType: [4, e.TYPES.STRING],
              mmUserControlsRolloutVariant: [5, e.TYPES.INTEGER],
              sequenceNumber: [6, e.TYPES.INTEGER],
              stopDuration: [10, e.TYPES.TIMER],
              templateId: [7, e.TYPES.STRING],
              unifiedSessionId: [8, e.TYPES.STRING],
            },
            [1, 1, 1],
            "private",
            113760892,
          ],
        },
        { MarketingMessageUserControlsJourney: [] },
      );
    l.MarketingMessageUserControlsJourneyWamEvent = s;
  },
  98,
);
