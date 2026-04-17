__d(
  "WAWebMemoryStatWamEvent",
  ["WAWebWamCodegenUtils"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          MemoryStat: [
            1336,
            {
              appContext: [14, e.TYPES.STRING],
              appContextBitfield: [15, e.TYPES.INTEGER],
              hasVerifiedNumber: [7, e.TYPES.BOOLEAN],
              numMessages: [8, e.TYPES.NUMBER],
              privateBytes: [3, e.TYPES.NUMBER],
              processType: [5, e.TYPES.STRING],
              sharedBytes: [4, e.TYPES.NUMBER],
              uptime: [6, e.TYPES.NUMBER],
              workingSetPeakSize: [2, e.TYPES.NUMBER],
              workingSetSize: [1, e.TYPES.NUMBER],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { MemoryStat: [] },
      );
    l.MemoryStatWamEvent = s;
  },
  98,
);
