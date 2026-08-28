__d(
  "AdsUEditorAdgroupCallBusinessHoursUtils",
  ["DateConsts", "DateStrings", "TimeOfDay"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = 540,
      u = 1020,
      c = [
        (e = o("DateConsts")).DAYS.MONDAY,
        e.DAYS.TUESDAY,
        e.DAYS.WEDNESDAY,
        e.DAYS.THURSDAY,
        e.DAYS.FRIDAY,
      ],
      d = [
        e.DAYS.SUNDAY,
        e.DAYS.MONDAY,
        e.DAYS.TUESDAY,
        e.DAYS.WEDNESDAY,
        e.DAYS.THURSDAY,
        e.DAYS.FRIDAY,
        e.DAYS.SATURDAY,
      ].map(function (e) {
        return { day: e, label: o("DateStrings").getWeekdayName(e) };
      });
    function m() {
      return [
        {
          days: c,
          end_minute: u,
          start_minute: s,
          timezone_type: "ADVERTISER",
        },
      ];
    }
    function p(e) {
      var t = e[0];
      return t != null ? t.days : [];
    }
    function _(e, t) {
      var n, r, o;
      if (t.length === 0) return [];
      var a = e[0];
      return [
        {
          days: t,
          end_minute: (n = a == null ? void 0 : a.end_minute) != null ? n : u,
          start_minute:
            (r = a == null ? void 0 : a.start_minute) != null ? r : s,
          timezone_type:
            (o = a == null ? void 0 : a.timezone_type) != null
              ? o
              : "ADVERTISER",
        },
      ];
    }
    function f(e) {
      var t = Math.floor(e / 60) % 24;
      return r("TimeOfDay").create(t, e % 60);
    }
    function g(e) {
      return e.hour * 60 + e.minute;
    }
    function h(e) {
      var t, n;
      return f(
        (t = (n = e[0]) == null ? void 0 : n.start_minute) != null ? t : s,
      );
    }
    function y(e) {
      var t, n;
      return f(
        (t = (n = e[0]) == null ? void 0 : n.end_minute) != null ? t : u,
      );
    }
    function C(e, t) {
      var n = e[0];
      return n == null
        ? e
        : [babelHelpers.extends({}, n, { start_minute: g(t) })];
    }
    function b(e, t) {
      var n = e[0];
      return n == null
        ? e
        : [babelHelpers.extends({}, n, { end_minute: g(t) })];
    }
    function v(e) {
      var t = e[0];
      return t == null ? !0 : t.end_minute > t.start_minute;
    }
    ((l.DEFAULT_START_MINUTE = s),
      (l.DEFAULT_END_MINUTE = u),
      (l.BUSINESS_HOURS_DAY_OPTIONS = d),
      (l.getDefaultBusinessHours = m),
      (l.getSelectedDays = p),
      (l.setSelectedDays = _),
      (l.getStartTime = h),
      (l.getEndTime = y),
      (l.setStartTime = C),
      (l.setEndTime = b),
      (l.isBusinessHoursTimeRangeValid = v));
  },
  98,
);
