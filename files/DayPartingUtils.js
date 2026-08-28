__d(
  "DayPartingUtils",
  [
    "AdsApiScheduleObjectFields",
    "AdsBulkValueUtils",
    "Assert",
    "removeFromArray",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 60,
      s = 7,
      u = 24,
      c = 168;
    function d(e) {
      return e === 0
        ? 0
        : e === 1
          ? 1
          : e === 2
            ? 2
            : e === 3
              ? 3
              : e === 4
                ? 4
                : e === 5
                  ? 5
                  : 6;
    }
    function m(e, t) {
      r("Assert").isTrue(e.length === s);
      for (
        var n = _(s, function () {
            return 0;
          }),
          a = [];
        ;
      ) {
        for (var i, l, u = null, c = 0; c < s; ) {
          if (n[c] < e[c].length) {
            ((u = e[c][n[c]]), n[c]++);
            break;
          }
          c++;
        }
        if (u === null) break;
        for (
          var m = [d(c)],
            p =
              ((i = {}),
              (i[o("AdsApiScheduleObjectFields").START_MINUTE] =
                u.start_minute),
              (i[o("AdsApiScheduleObjectFields").END_MINUTE] = u.end_minute),
              (i[o("AdsApiScheduleObjectFields").DAYS] = m),
              i);
          c < 7;
        ) {
          if (n[c] < e[c].length) {
            var f = e[c][n[c]],
              g =
                f.start_minute === u.start_minute &&
                f.end_minute === u.end_minute;
            g && (m.push(d(c)), n[c]++);
          }
          c++;
        }
        a.push(
          ((l = {}),
          (l[o("AdsApiScheduleObjectFields").START_MINUTE] =
            p[o("AdsApiScheduleObjectFields").START_MINUTE]),
          (l[o("AdsApiScheduleObjectFields").END_MINUTE] =
            p[o("AdsApiScheduleObjectFields").END_MINUTE]),
          (l[o("AdsApiScheduleObjectFields").DAYS] = m),
          (l[o("AdsApiScheduleObjectFields").TIMEZONE_TYPE] =
            t != null ? t : null),
          l),
        );
      }
      return a;
    }
    function p(e) {
      if (!e.length) return [];
      var t = _(s, function () {
        return [];
      });
      e.forEach(function (e) {
        if (e.days == null) return [];
        e.days.forEach(function (n) {
          t[n].push({ start_minute: e.start_minute, end_minute: e.end_minute });
        });
      });
      for (var n = 0; n < s; n++)
        t[n].sort(function (e, t) {
          return e.start_minute !== t.start_minute
            ? e.start_minute - t.start_minute
            : e.end_minute - t.end_minute;
        });
      var r = _(s, function () {
        return [];
      });
      for (n = 0; n < s; n++)
        if (t[n].length > 0) {
          for (var o = t[n][0], a = 1; a < t[n].length; a++)
            t[n][a].start_minute <= o.end_minute
              ? (o.end_minute = Math.max(o.end_minute, t[n][a].end_minute))
              : (r[n].push(o), (o = t[n][a]));
          r[n].push(o);
        }
      return m(r);
    }
    function _(e, t) {
      for (var n = new Array(e), r = 0; r < e; r++) n[r] = t();
      return n;
    }
    function f(e, t, n) {
      return (
        r("removeFromArray")(e, "no_pacing"),
        r("removeFromArray")(e, "standard"),
        r("removeFromArray")(e, "probabilistic_pacing_v2"),
        t
          ? e.push("no_pacing")
          : n
            ? e.push("probabilistic_pacing_v2")
            : e.length === 0 && e.push("standard"),
        e
      );
    }
    function g(e, t) {
      return (
        r("removeFromArray")(e, "day_parting"),
        r("removeFromArray")(e, "standard"),
        t ? e.push("day_parting") : e.length === 0 && e.push("standard"),
        e
      );
    }
    function h(e, t) {
      var n = [];
      return (
        e.getValues().forEach(function (e) {
          n.push(g(Array.from(e), t));
        }),
        o("AdsBulkValueUtils").aggregate(n)
      );
    }
    ((l.MINUTES_IN_HOUR = e),
      (l.DAYS_IN_WEEK = s),
      (l.HOURS_IN_DAY = u),
      (l.HOURS_IN_WEEK = c),
      (l.mergeDays = m),
      (l.normalizeDayparts = p),
      (l.createArray = _),
      (l.setPacingType = f),
      (l.setDayParting = g),
      (l.setBulkDayParting = h));
  },
  98,
);
