__d(
  "WAWebHatchScheduledTaskLines",
  [
    "WAWebHatchScheduledTaskCadence",
    "WAWebHatchScheduledTaskSections",
    "WAWebHatchScheduledTaskTime",
    "WAWebHatchTaskScheduleParser",
    "WAWebL10N",
    "fbs",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 1e3;
    function s(e, t) {
      var n;
      return (n = d(e, t)) != null ? n : r("fbs")._(/*BTDS*/ "").toString();
    }
    function u(e, t) {
      var n;
      return (n = e != null ? e : t) != null
        ? n
        : r("fbs")._(/*BTDS*/ "").toString();
    }
    function c(e) {
      return u(
        o("WAWebHatchScheduledTaskSections").getHatchScheduledTaskName(e),
        o("WAWebHatchScheduledTaskCadence").describeHatchScheduledTaskCadence(
          e,
        ),
      );
    }
    function d(t, n) {
      var r =
          t.scheduleKey == null
            ? null
            : o("WAWebHatchTaskScheduleParser").parseHatchTaskSchedule(
                t.scheduleKey,
              ),
        a = r == null || !m(t.timeZone, n) ? null : p(r);
      if (a != null) return a;
      var i = t.nextRunAtSec == null ? null : y(t.nextRunAtSec * e);
      return i != null ? h(i, n) : r == null ? null : f(r, n);
    }
    function m(e, t) {
      var n = o("WAWebHatchScheduledTaskTime").getKnownTimeZone(e),
        r = new Intl.DateTimeFormat(void 0, {
          timeZone: o("WAWebHatchScheduledTaskTime").getKnownTimeZone(t),
        }).resolvedOptions().timeZone;
      return n == null || n === r;
    }
    function p(e) {
      return (function (e) {
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.kind === "weekly" &&
          "days" in e &&
          "time" in e
        ) {
          var t = e.days,
            n = e.time;
          return _(
            t.map(o("WAWebHatchScheduledTaskTime").formatWeekdayNumber),
            n,
          );
        }
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.kind === "monthly" &&
          "days" in e &&
          "time" in e
        ) {
          var r = e.days,
            a = e.time;
          return _(r.map(o("WAWebHatchScheduledTaskTime").formatOrdinalDay), a);
        }
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.kind === "yearly" &&
          "days" in e &&
          "months" in e &&
          "time" in e
        ) {
          var i = e.days,
            l = e.months,
            s = e.time;
          return _(
            l.flatMap(function (e) {
              return i.flatMap(function (t) {
                var n;
                return (n = o("WAWebHatchScheduledTaskTime").formatMonthDay(
                  e,
                  t,
                )) != null
                  ? n
                  : [];
              });
            }),
            s,
          );
        }
        return null;
      })(e);
    }
    function _(e, t) {
      return e.length === 0
        ? null
        : r("fbs")
            ._(/*BTDS*/ "", [
              r("fbs")._param(
                "days",
                o("WAWebHatchScheduledTaskTime").formatConjunctionList(e),
              ),
              r("fbs")._param(
                "time",
                o("WAWebHatchScheduledTaskTime").formatTimeOfDay(t),
              ),
            ])
            .toString();
    }
    function f(e, t) {
      return (function (e) {
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.kind === "runonce" &&
          "at" in e
        ) {
          var n = e.at;
          return n.kind === "instant"
            ? g(n.ms, t)
            : h(
                o("WAWebHatchScheduledTaskTime").getWallClockDate(n.wallClock),
                o("WAWebHatchScheduledTaskTime").WALL_CLOCK_TIME_ZONE,
              );
        }
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.kind === "interval" &&
          "count" in e &&
          "unit" in e
        ) {
          var r = e.count,
            a = e.unit;
          return o("WAWebHatchScheduledTaskTime").formatInterval(r, a);
        }
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.kind === "hourly"
        )
          return o("WAWebHatchScheduledTaskTime").formatHourly();
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          (e.kind === "daily" ||
            e.kind === "weekly" ||
            e.kind === "monthly" ||
            e.kind === "yearly")
        )
          return null;
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            e,
        );
      })(e);
    }
    function g(e, t) {
      var n = y(e);
      return n == null ? null : h(n, t);
    }
    function h(e, t) {
      var n = new Intl.DateTimeFormat(r("WAWebL10N").getFullLocale(), {
        day: "numeric",
        month: "long",
        timeZone: t,
        year: "numeric",
      }).format(e);
      return r("fbs")
        ._(/*BTDS*/ "", [
          r("fbs")._param("date", n),
          r("fbs")._param(
            "time",
            o("WAWebHatchScheduledTaskTime").formatTime(e, t),
          ),
        ])
        .toString();
    }
    function y(e) {
      var t = new Date(e);
      return Number.isNaN(t.getTime()) ? null : t;
    }
    ((l.getHatchScheduledTaskLine = s),
      (l.getHatchScheduledTaskTitle = u),
      (l.getHatchScheduledTaskDetailTitle = c),
      (l.describeHatchScheduledTask = d));
  },
  226,
);
