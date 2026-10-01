__d(
  "WAWebBizAiResponseSettingsV2ScheduleModel",
  [],
  function (t, n, r, o, a, i) {
    var e = "ANYTIME",
      l = "SELECTIVE_HOURS";
    function s(e) {
      return (
        String(e.enabled_time) +
        " " +
        String(e.from_sec_in_day) +
        " " +
        String(e.to_sec_in_day)
      );
    }
    ((i.SCHEDULE_ANYTIME = e),
      (i.SCHEDULE_SELECTIVE = l),
      (i.botEnabledTimeKey = s));
  },
  66,
);
