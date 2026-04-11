__d(
  "WAWebCtwa3pdConversionWamEvent",
  ["WAWebWamCodegenUtils", "WAWebWamEnumCtwaDirectionFrom"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          Ctwa3pdConversion: [
            5138,
            {
              ctwa3pdConversionMetadata: [1, e.TYPES.STRING],
              ctwa3pdConversionSubtype: [2, e.TYPES.STRING],
              ctwa3pdConversionType: [3, e.TYPES.STRING],
              ctwa3pdSchemaVersion: [4, e.TYPES.INTEGER],
              ctwa3pdSurfaceType: [5, e.TYPES.STRING],
              ctwaConversationDepth: [8, e.TYPES.INTEGER],
              ctwaConversationRepeat: [9, e.TYPES.INTEGER],
              ctwaDirectionFrom: [
                10,
                o("WAWebWamEnumCtwaDirectionFrom").CTWA_DIRECTION_FROM,
              ],
              ctwaSignals: [7, e.TYPES.STRING],
              ctwaTrackingPayload: [6, e.TYPES.STRING],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { Ctwa3pdConversion: [] },
      );
    l.Ctwa3pdConversionWamEvent = s;
  },
  98,
);
