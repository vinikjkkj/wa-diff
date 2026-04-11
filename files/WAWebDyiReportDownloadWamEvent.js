__d(
  "WAWebDyiReportDownloadWamEvent",
  ["WAWebWamCodegenUtils", "WAWebWamEnumDyiReportTypeCode"],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebWamCodegenUtils").defineEvents(
      {
        DyiReportDownload: [
          7162,
          {
            dyiDownloadErrorMessage: [
              3,
              o("WAWebWamCodegenUtils").TYPES.STRING,
            ],
            dyiDownloadSucceeded: [1, o("WAWebWamCodegenUtils").TYPES.BOOLEAN],
            dyiReportType: [
              2,
              o("WAWebWamEnumDyiReportTypeCode").DYI_REPORT_TYPE_CODE,
            ],
          },
          [1, 1, 1],
          "regular",
        ],
      },
      { DyiReportDownload: [] },
    );
    l.DyiReportDownloadWamEvent = e;
  },
  98,
);
