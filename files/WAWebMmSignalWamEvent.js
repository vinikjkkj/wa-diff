__d(
  "WAWebMmSignalWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumMmDirectionFrom",
    "WAWebWamEnumMmSignalType",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          MmSignal: [
            5572,
            {
              disclosed: [4, e.TYPES.BOOLEAN],
              isLatestConversionToken: [5, e.TYPES.BOOLEAN],
              mmConversationDepth: [6, e.TYPES.INTEGER],
              mmConversationRepeat: [7, e.TYPES.INTEGER],
              mmConversionSchemaVersion: [8, e.TYPES.INTEGER],
              mmDirectionFrom: [
                9,
                o("WAWebWamEnumMmDirectionFrom").MM_DIRECTION_FROM,
              ],
              mmSignalData: [1, e.TYPES.STRING],
              mmSignalType: [2, o("WAWebWamEnumMmSignalType").MM_SIGNAL_TYPE],
            },
            [1, 1, 1],
            "private",
            0,
          ],
        },
        { MmSignal: [] },
      );
    l.MmSignalWamEvent = s;
  },
  98,
);
