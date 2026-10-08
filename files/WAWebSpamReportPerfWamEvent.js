__d(
  "WAWebSpamReportPerfWamEvent",
  ["WAWebWamCodegenUtils", "WAWebWamEnumReportStatus"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          SpamReportPerf: [
            6310,
            {
              dedupKey: [6, e.TYPES.INTEGER],
              reportAttemptCount: [3, e.TYPES.INTEGER],
              reportDurationMs: [1, e.TYPES.TIMER],
              reportErrorCode: [4, e.TYPES.INTEGER],
              reportSpamFlow: [5, e.TYPES.STRING],
              reportStatus: [2, o("WAWebWamEnumReportStatus").REPORT_STATUS],
              wiTraceId: [7, e.TYPES.STRING],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { SpamReportPerf: [] },
      );
    l.SpamReportPerfWamEvent = s;
  },
  98,
);
