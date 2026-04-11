__d(
  "WAWebBugReportSessionWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumBugReportEntryPointName",
    "WAWebWamEnumBugReportFlowAction",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          BugReportSession: [
            3850,
            {
              bugReportErrorMessage: [2, e.TYPES.STRING],
              bugReportFlowAction: [
                1,
                o("WAWebWamEnumBugReportFlowAction").BUG_REPORT_FLOW_ACTION,
              ],
              bugReportImageCount: [8, e.TYPES.INTEGER],
              bugReportMediaCount: [3, e.TYPES.INTEGER],
              bugReportNumberOfChars: [9, e.TYPES.INTEGER],
              bugReportNumberOfWords: [10, e.TYPES.INTEGER],
              bugReportTaskId: [7, e.TYPES.STRING],
              bugReportVideoCount: [11, e.TYPES.INTEGER],
              bugReportingEndpoint: [14, e.TYPES.STRING],
              bugReportingEntryPoint: [
                12,
                o("WAWebWamEnumBugReportEntryPointName")
                  .BUG_REPORT_ENTRY_POINT_NAME,
              ],
              clientServerJoinKey: [13, e.TYPES.STRING],
              submitBugCategory: [6, e.TYPES.STRING],
              submitBugContainsTitle: [5, e.TYPES.BOOLEAN],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { BugReportSession: [] },
      );
    l.BugReportSessionWamEvent = s;
  },
  98,
);
