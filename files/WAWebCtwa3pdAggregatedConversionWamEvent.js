__d(
  "WAWebCtwa3pdAggregatedConversionWamEvent",
  ["WAWebWamCodegenUtils", "WAWebWamEnumCtwaDirectionFrom"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          Ctwa3pdAggregatedConversion: [
            8218,
            {
              adId: [1, e.TYPES.STRING],
              ctwa3pdAggregatedSchemaVersion: [2, e.TYPES.INTEGER],
              ctwa3pdConversionMetadata: [3, e.TYPES.STRING],
              ctwa3pdConversionSubtype: [4, e.TYPES.STRING],
              ctwa3pdConversionType: [5, e.TYPES.STRING],
              ctwa3pdSurfaceType: [6, e.TYPES.STRING],
              ctwaConversationDepth: [7, e.TYPES.INTEGER],
              ctwaConversationRepeat: [8, e.TYPES.INTEGER],
              ctwaDirectionFrom: [
                9,
                o("WAWebWamEnumCtwaDirectionFrom").CTWA_DIRECTION_FROM,
              ],
              ctwaSignals: [10, e.TYPES.STRING],
              threadIdHmac: [11, e.TYPES.STRING],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { Ctwa3pdAggregatedConversion: [] },
      );
    l.Ctwa3pdAggregatedConversionWamEvent = s;
  },
  98,
);
