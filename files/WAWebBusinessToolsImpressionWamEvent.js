__d(
  "WAWebBusinessToolsImpressionWamEvent",
  ["WAWebWamCodegenUtils", "WAWebWamEnumBusinessToolsEntryPointType"],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebWamCodegenUtils").defineEvents(
      {
        BusinessToolsImpression: [
          2220,
          {
            businessToolsEntryPoint: [
              4,
              o("WAWebWamEnumBusinessToolsEntryPointType")
                .BUSINESS_TOOLS_ENTRY_POINT_TYPE,
            ],
            businessToolsSequenceNumber: [
              2,
              o("WAWebWamCodegenUtils").TYPES.INTEGER,
            ],
            businessToolsSessionId: [1, o("WAWebWamCodegenUtils").TYPES.STRING],
          },
          [1, 1, 1],
          "regular",
        ],
      },
      { BusinessToolsImpression: [] },
    );
    l.BusinessToolsImpressionWamEvent = e;
  },
  98,
);
