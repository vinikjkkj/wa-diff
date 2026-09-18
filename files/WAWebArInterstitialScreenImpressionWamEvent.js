__d(
  "WAWebArInterstitialScreenImpressionWamEvent",
  ["WAWebWamCodegenUtils", "WAWebWamEnumAfterReadScreenEntryPointType"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          ArInterstitialScreenImpression: [
            7890,
            {
              accountAfterReadDuration: [1, e.TYPES.INTEGER],
              afterReadScreenEntryPoint: [
                2,
                o("WAWebWamEnumAfterReadScreenEntryPointType")
                  .AFTER_READ_SCREEN_ENTRY_POINT_TYPE,
              ],
              dedupKey: [4, e.TYPES.INTEGER],
              nuxVersion: [3, e.TYPES.INTEGER],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { ArInterstitialScreenImpression: [] },
      );
    l.ArInterstitialScreenImpressionWamEvent = s;
  },
  98,
);
