__d(
  "WAWebHatchScheduledTaskCadence",
  [
    "WAWebFbtIntlList",
    "WAWebHatchScheduledTaskTime",
    "WAWebHatchTaskScheduleParser",
    "fbs",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t;
      return (t = s(e)) != null ? t : r("fbs")._(/*BTDS*/ "").toString();
    }
    function s(e) {
      var t =
        e.scheduleKey == null
          ? null
          : o("WAWebHatchTaskScheduleParser").parseHatchTaskSchedule(
              e.scheduleKey,
            );
      return t == null ? null : u(t, e.timeZone);
    }
    function u(e, t) {
      return (function (e) {
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.kind === "runonce" &&
          "at" in e
        ) {
          var n = e.at;
          return c(n, t);
        }
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.kind === "interval" &&
          "count" in e &&
          "unit" in e
        ) {
          var a = e.count,
            i = e.unit;
          return o("WAWebHatchScheduledTaskTime").formatInterval(a, i);
        }
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.kind === "hourly"
        )
          return o("WAWebHatchScheduledTaskTime").formatHourly();
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.kind === "daily" &&
          "time" in e
        ) {
          var l = e.time;
          return d(r("fbs")._(/*BTDS*/ "").toString(), l);
        }
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.kind === "weekly" &&
          "days" in e &&
          "time" in e
        ) {
          var s = e.days,
            u = e.time;
          return d(m(s), u);
        }
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.kind === "monthly" &&
          "time" in e
        ) {
          var p = e.time;
          return d(r("fbs")._(/*BTDS*/ "").toString(), p);
        }
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.kind === "yearly" &&
          "time" in e
        ) {
          var _ = e.time;
          return d(r("fbs")._(/*BTDS*/ "").toString(), _);
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            e,
        );
      })(e);
    }
    function c(e, t) {
      var n =
          e.kind === "instant"
            ? [
                new Date(e.ms),
                o("WAWebHatchScheduledTaskTime").getKnownTimeZone(t),
              ]
            : [
                o("WAWebHatchScheduledTaskTime").getWallClockDate(e.wallClock),
                o("WAWebHatchScheduledTaskTime").WALL_CLOCK_TIME_ZONE,
              ],
        r = n[0],
        a = n[1];
      return p(
        o("WAWebHatchScheduledTaskTime").formatDay(r, a),
        o("WAWebHatchScheduledTaskTime").formatTime(r, a),
      );
    }
    function d(e, t) {
      return p(e, o("WAWebHatchScheduledTaskTime").formatTimeOfDay(t));
    }
    function m(e) {
      var t = r("WAWebFbtIntlList")(
        e.map(o("WAWebHatchScheduledTaskTime").formatWeekdayNumber),
        r("WAWebFbtIntlList").CONJUNCTIONS.NONE,
        r("WAWebFbtIntlList").DELIMITERS.COMMA,
      ).toString();
      return r("fbs")
        ._(/*BTDS*/ "", [r("fbs")._param("days", t)])
        .toString();
    }
    function p(e, t) {
      return r("fbs")
        ._(/*BTDS*/ "", [
          r("fbs")._param("cadence", e),
          r("fbs")._param("time", t),
        ])
        .toString();
    }
    ((l.getHatchScheduledTaskCadence = e),
      (l.describeHatchScheduledTaskCadence = s));
  },
  226,
);
