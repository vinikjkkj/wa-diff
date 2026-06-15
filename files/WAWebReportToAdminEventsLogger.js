__d(
  "WAWebReportToAdminEventsLogger",
  ["WAWebReportToAdminEventsWamEvent"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.groupId,
        n = e.reportToAdminInteraction;
      new (o("WAWebReportToAdminEventsWamEvent").ReportToAdminEventsWamEvent)({
        reportToAdminInteraction: n,
        rtaGroupId: t,
      }).commit();
    }
    l.logRTAReportingEvent = e;
  },
  98,
);
