__d(
  "WAWebArInterstitialScreenImpressionWamEvent",
  ["WAWebWamCodegenUtils", "WAWebWamEnumAfterReadScreenEntryPointType"],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebWamCodegenUtils").defineEvents(
      {
        ArInterstitialScreenImpression: [
          7890,
          {
            accountAfterReadDuration: [
              1,
              o("WAWebWamCodegenUtils").TYPES.INTEGER,
            ],
            afterReadScreenEntryPoint: [
              2,
              o("WAWebWamEnumAfterReadScreenEntryPointType")
                .AFTER_READ_SCREEN_ENTRY_POINT_TYPE,
            ],
            nuxVersion: [3, o("WAWebWamCodegenUtils").TYPES.INTEGER],
          },
          [1, 1, 1],
          "regular",
        ],
      },
      { ArInterstitialScreenImpression: [] },
    );
    l.ArInterstitialScreenImpressionWamEvent = e;
  },
  98,
);
