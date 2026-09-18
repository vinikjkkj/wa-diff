__d(
  "WAWebDyiReportDownloadWamEvent",
  ["WAWebWamCodegenUtils", "WAWebWamEnumDyiReportTypeCode"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          DyiReportDownload: [
            7162,
            {
              dedupKey: [4, e.TYPES.INTEGER],
              dyiDownloadErrorMessage: [3, e.TYPES.STRING],
              dyiDownloadSucceeded: [1, e.TYPES.BOOLEAN],
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
    l.DyiReportDownloadWamEvent = s;
  },
  98,
);
