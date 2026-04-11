__d(
  "WAWebCtwaBizUserJourneyWamEvent",
  ["WAWebWamCodegenUtils", "WAWebWamEnumCtwaBizUserJourneyOperation"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          CtwaBizUserJourney: [
            5992,
            {
              adId: [3, e.TYPES.STRING],
              bizFeatureEnabled: [4, e.TYPES.STRING],
              ctwaBizEventReason: [7, e.TYPES.STRING],
              ctwaBizUserJouneryEntryPoint: [6, e.TYPES.STRING],
              ctwaBizUserJourneyMetadata: [1, e.TYPES.STRING],
              ctwaBizUserJourneyOperation: [
                2,
                o("WAWebWamEnumCtwaBizUserJourneyOperation")
                  .CTWA_BIZ_USER_JOURNEY_OPERATION,
              ],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { CtwaBizUserJourney: [] },
      );
    l.CtwaBizUserJourneyWamEvent = s;
  },
  98,
);
