__d(
  "WAWebBusinessToolsEntryWamEvent",
  ["WAWebWamCodegenUtils", "WAWebWamEnumBusinessToolsEntryPointType"],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebWamCodegenUtils").defineEvents(
      {
        BusinessToolsEntry: [
          2216,
          {
            businessToolsEntryPoint: [
              3,
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
      { BusinessToolsEntry: [] },
    );
    l.BusinessToolsEntryWamEvent = e;
  },
  98,
);
