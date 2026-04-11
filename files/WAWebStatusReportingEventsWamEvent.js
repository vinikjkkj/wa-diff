__d(
  "WAWebStatusReportingEventsWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumStatusPosterContactType",
    "WAWebWamEnumStatusReportInteraction",
  ],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebWamCodegenUtils").defineEvents(
      {
        StatusReportingEvents: [
          3920,
          {
            statusPosterContactType: [
              2,
              o("WAWebWamEnumStatusPosterContactType")
                .STATUS_POSTER_CONTACT_TYPE,
            ],
            statusReportInteraction: [
              1,
              o("WAWebWamEnumStatusReportInteraction")
                .STATUS_REPORT_INTERACTION,
            ],
          },
          [1, 1, 1],
          "regular",
        ],
      },
      { StatusReportingEvents: [] },
    );
    l.StatusReportingEventsWamEvent = e;
  },
  98,
);
