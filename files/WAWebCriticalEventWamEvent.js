__d(
  "WAWebCriticalEventWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumCrashApplicationState",
    "WAWebWamEnumCrashlogType",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          CriticalEvent: [
            1684,
            {
              context: [2, e.TYPES.STRING],
              crashApplicationState: [
                8,
                o("WAWebWamEnumCrashApplicationState").CRASH_APPLICATION_STATE,
              ],
              crashlogType: [6, o("WAWebWamEnumCrashlogType").CRASHLOG_TYPE],
              debug: [3, e.TYPES.STRING],
              extraDebug: [7, e.TYPES.STRING],
              mobileBuildId: [5, e.TYPES.STRING],
              name: [1, e.TYPES.STRING],
              storageAvailSizeWithCache: [9, e.TYPES.INTEGER],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { CriticalEvent: [] },
      );
    l.CriticalEventWamEvent = s;
  },
  98,
);
