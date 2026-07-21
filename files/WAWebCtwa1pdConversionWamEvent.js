__d(
  "WAWebCtwa1pdConversionWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumBizPlatform",
    "WAWebWamEnumCtwa1pdConversionType",
    "WAWebWamEnumCtwaDirectionFrom",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          Ctwa1pdConversion: [
            5140,
            {
              bizPlatform: [3, o("WAWebWamEnumBizPlatform").BIZ_PLATFORM],
              ctwa1pdConversionMetadata: [8, e.TYPES.STRING],
              ctwa1pdConversionSchemaVersion: [9, e.TYPES.INTEGER],
              ctwa1pdConversionType: [
                1,
                o("WAWebWamEnumCtwa1pdConversionType").CTWA_1PD_CONVERSION_TYPE,
              ],
              ctwaConversationDepth: [10, e.TYPES.INTEGER],
              ctwaConversationRepeat: [11, e.TYPES.INTEGER],
              ctwaDirectionFrom: [
                12,
                o("WAWebWamEnumCtwaDirectionFrom").CTWA_DIRECTION_FROM,
              ],
              ctwaSignals: [7, e.TYPES.STRING],
              ctwaTrackingPayload: [2, e.TYPES.STRING],
              isLatestConversionToken: [13, e.TYPES.BOOLEAN],
              twoMeasurementEnabled: [14, e.TYPES.BOOLEAN],
            },
            [1, 1, 1],
            "private",
            0,
          ],
        },
        { Ctwa1pdConversion: [] },
      );
    l.Ctwa1pdConversionWamEvent = s;
  },
  98,
);
