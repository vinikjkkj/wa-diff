__d(
  "WAWebDyiReportRequestWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumDyiReportTypeCode",
    "WAWebWamEnumDyiTriggerTypeCode",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          DyiReportRequest: [
            7166,
            {
              dedupKey: [5, e.TYPES.INTEGER],
              dyiReportType: [
                1,
                o("WAWebWamEnumDyiReportTypeCode").DYI_REPORT_TYPE_CODE,
              ],
              dyiRequestErrorMessage: [3, e.TYPES.STRING],
              dyiRequestSuccess: [4, e.TYPES.BOOLEAN],
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
    l.DyiReportRequestWamEvent = s;
  },
  98,
);
