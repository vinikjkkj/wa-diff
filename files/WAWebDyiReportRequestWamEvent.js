__d(
  "WAWebDyiReportRequestWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumDyiReportTypeCode",
    "WAWebWamEnumDyiTriggerTypeCode",
  ],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebWamCodegenUtils").defineEvents(
      {
        DyiReportRequest: [
          7166,
          {
            dyiReportType: [
              1,
              o("WAWebWamEnumDyiReportTypeCode").DYI_REPORT_TYPE_CODE,
            ],
            dyiTriggerType: [
              2,
              o("WAWebWamEnumDyiTriggerTypeCode").DYI_TRIGGER_TYPE_CODE,
            ],
          },
          [1, 1, 1],
          "regular",
        ],
      },
      { DyiReportRequest: [] },
    );
    l.DyiReportRequestWamEvent = e;
  },
  98,
);
