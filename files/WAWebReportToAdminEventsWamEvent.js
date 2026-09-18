__d(
  "WAWebReportToAdminEventsWamEvent",
  ["WAWebWamCodegenUtils", "WAWebWamEnumReportToAdminInteraction"],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebWamCodegenUtils").defineEvents(
      {
        ReportToAdminEvents: [
          4420,
          {
            dedupKey: [3, o("WAWebWamCodegenUtils").TYPES.INTEGER],
            reportToAdminInteraction: [
              1,
              o("WAWebWamEnumReportToAdminInteraction")
                .REPORT_TO_ADMIN_INTERACTION,
            ],
            rtaGroupId: [2, o("WAWebWamCodegenUtils").TYPES.STRING],
          },
          [1, 1, 1],
          "regular",
        ],
      },
      { ReportToAdminEvents: [] },
    );
    l.ReportToAdminEventsWamEvent = e;
  },
  98,
);
