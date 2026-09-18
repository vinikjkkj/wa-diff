__d(
  "WAWebBusinessToolsImpressionWamEvent",
  ["WAWebWamCodegenUtils", "WAWebWamEnumBusinessToolsEntryPointType"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          BusinessToolsImpression: [
            2220,
            {
              businessToolsEntryPoint: [
                4,
                o("WAWebWamEnumBusinessToolsEntryPointType")
                  .BUSINESS_TOOLS_ENTRY_POINT_TYPE,
              ],
              businessToolsSequenceNumber: [2, e.TYPES.INTEGER],
              businessToolsSessionId: [1, e.TYPES.STRING],
              dedupKey: [5, e.TYPES.INTEGER],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { BusinessToolsImpression: [] },
      );
    l.BusinessToolsImpressionWamEvent = s;
  },
  98,
);
