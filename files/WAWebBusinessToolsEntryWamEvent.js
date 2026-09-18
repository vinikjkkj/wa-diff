__d(
  "WAWebBusinessToolsEntryWamEvent",
  ["WAWebWamCodegenUtils", "WAWebWamEnumBusinessToolsEntryPointType"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          BusinessToolsEntry: [
            2216,
            {
              businessToolsEntryPoint: [
                3,
                o("WAWebWamEnumBusinessToolsEntryPointType")
                  .BUSINESS_TOOLS_ENTRY_POINT_TYPE,
              ],
              businessToolsSequenceNumber: [2, e.TYPES.INTEGER],
              businessToolsSessionId: [1, e.TYPES.STRING],
              dedupKey: [4, e.TYPES.INTEGER],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { BusinessToolsEntry: [] },
      );
    l.BusinessToolsEntryWamEvent = s;
  },
  98,
);
