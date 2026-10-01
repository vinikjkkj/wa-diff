__d(
  "WAWebBizAiResponseSettingsV2ScheduleUtils",
  [
    "WAWebBizAiResponseSettingsV2ScheduleModel",
    "WAWebBusinessHoursUtils",
    "WAWebSmbUtilsTimeUtils",
  ],
  function (t, n, r, o, a, i, l) {
    var e = 60,
      s = 1440 * e,
      u = 540,
      c = 1020;
    function d(e) {
      var t = e.from_sec_in_day,
        n = e.to_sec_in_day,
        r = t != null && n != null && (t === n || (t === 0 && n === s));
      return {
        endTime: f(r ? null : n, c),
        selection:
          !r &&
          e.enabled_time ===
            o("WAWebBizAiResponseSettingsV2ScheduleModel").SCHEDULE_SELECTIVE
            ? o("WAWebBizAiResponseSettingsV2ScheduleModel").SCHEDULE_SELECTIVE
            : o("WAWebBizAiResponseSettingsV2ScheduleModel").SCHEDULE_ANYTIME,
        startTime: f(r ? null : t, u),
      };
    }
    function m(e) {
      return e.selection ===
        o("WAWebBizAiResponseSettingsV2ScheduleModel").SCHEDULE_SELECTIVE
        ? {
            enabled_time: o("WAWebBizAiResponseSettingsV2ScheduleModel")
              .SCHEDULE_SELECTIVE,
            from_sec_in_day: g(e.startTime),
            to_sec_in_day: g(e.endTime),
          }
        : {
            enabled_time: o("WAWebBizAiResponseSettingsV2ScheduleModel")
              .SCHEDULE_ANYTIME,
            from_sec_in_day: null,
            to_sec_in_day: null,
          };
    }
    function p(e, t) {
      return (
        o("WAWebBusinessHoursUtils").isValidTime(e) &&
        o("WAWebBusinessHoursUtils").isValidTime(t) &&
        g(t) !== g(e)
      );
    }
    function _(e, t) {
      return o("WAWebBusinessHoursUtils").isValidTime(t)
        ? o("WAWebBusinessHoursUtils").isValidTime(e) && g(t) === g(e)
        : !0;
    }
    function f(t, n) {
      return o("WAWebSmbUtilsTimeUtils").minutesToTime(
        t == null ? n : Math.floor(t / e),
      );
    }
    function g(t) {
      var n;
      return (
        (((n = o("WAWebSmbUtilsTimeUtils").timeStringToMinutes(t)) != null
          ? n
          : 0) *
          e) %
        s
      );
    }
    ((l.toSchedule = d),
      (l.toBotEnabledTime = m),
      (l.hasValidRange = p),
      (l.hasEndTimeError = _));
  },
  98,
);
