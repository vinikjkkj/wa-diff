__d(
  "WAWebWamStatusReportingEventsLogger",
  ["WAWebStatusReportingEventsWamEvent"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.statusReportingInteraction;
      new (o(
        "WAWebStatusReportingEventsWamEvent",
      ).StatusReportingEventsWamEvent)({ statusReportInteraction: t }).commit();
    }
    l.logStatusReportingEvent = e;
  },
  98,
);
