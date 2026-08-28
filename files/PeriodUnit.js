__d(
  "PeriodUnit",
  ["invariant", "DateConsts", "keyMirror"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = r("keyMirror")({
        year: null,
        half: null,
        quarter: null,
        month: null,
        week: null,
        day: null,
        hour: null,
        minute: null,
        second: null,
      }),
      u = babelHelpers.extends({}, e, {
        canonicalDateUnits: [e.year, e.month, e.day],
        canonicalUnits: [e.year, e.month, e.day, e.hour, e.minute, e.second],
        getApproximateDuration: function (n) {
          if (u.isForTime(n)) return u.getDuration(n);
          switch (n) {
            case e.year:
              return (
                o("DateConsts").SEC_PER_DAY * o("DateConsts").AVG_DAYS_PER_YEAR
              );
            case e.half:
              return (
                (o("DateConsts").SEC_PER_DAY *
                  o("DateConsts").AVG_DAYS_PER_YEAR) /
                2
              );
            case e.quarter:
              return (
                (o("DateConsts").SEC_PER_DAY *
                  o("DateConsts").AVG_DAYS_PER_YEAR) /
                4
              );
            case e.month:
              return (
                o("DateConsts").SEC_PER_DAY * o("DateConsts").AVG_DAYS_PER_MONTH
              );
            case e.week:
              return (
                o("DateConsts").SEC_PER_DAY * o("DateConsts").DAYS_PER_WEEK
              );
            case e.day:
              return o("DateConsts").SEC_PER_DAY;
            default:
              s(0, 5509, n);
          }
        },
        getDuration: function (n) {
          switch (n) {
            case e.hour:
              return o("DateConsts").SEC_PER_HOUR;
            case e.minute:
              return o("DateConsts").SEC_PER_MIN;
            case e.second:
              return 1;
            default:
              s(0, 1154, n);
          }
        },
        isForDate: function (n) {
          switch (n) {
            case e.year:
            case e.half:
            case e.quarter:
            case e.month:
            case e.week:
            case e.day:
              return !0;
            case e.hour:
            case e.minute:
            case e.second:
              return !1;
            default:
              s(0, 5510, n);
          }
        },
        isForTime: function (t) {
          return !u.isForDate(t);
        },
      }),
      c = u;
    l.default = c;
  },
  98,
);
