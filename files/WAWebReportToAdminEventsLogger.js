__d(
  "WAWebReportToAdminEventsLogger",
  ["WAWebABProps", "WAWebReportToAdminEventsWamEvent"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      if (
        o("WAWebABProps").getABPropConfigValue("report_to_admin_kill_switch")
      ) {
        var t = e.groupId,
          n = e.reportToAdminInteraction;
        new (o("WAWebReportToAdminEventsWamEvent").ReportToAdminEventsWamEvent)(
          { reportToAdminInteraction: n, rtaGroupId: t },
        ).commit();
      }
    }
    l.logRTAReportingEvent = e;
  },
  98,
);
