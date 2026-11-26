__d(
  "WAWebBizAiAppointmentAvailabilityNormalize",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = 1440,
      l = 1,
      s = 7,
      u = ["missing_value", "day_out_of_range", "time_out_of_range", "empty"];
    function c(e) {
      var t = [],
        n = [],
        r = 0;
      for (var o of e) {
        var a = m(o);
        typeof a == "string"
          ? t.push(a)
          : a.endTimeMinutes > a.startTimeMinutes
            ? n.push(a)
            : (r++, n.push.apply(n, _(a)));
      }
      return { dropped: t, overnightCount: r, ranges: n };
    }
    function d(e) {
      return u
        .flatMap(function (t) {
          var n = e.filter(function (e) {
            return e === t;
          }).length;
          return n > 0 ? [t + ":" + n] : [];
        })
        .join(",");
    }
    function m(t) {
      var n = t.dayOfWeek,
        r = t.endTimeMinutes,
        o = t.startTimeMinutes;
      if (n == null || r == null || o == null) return "missing_value";
      if (n < l || n > s) return "day_out_of_range";
      if (!p(o) || !p(r)) return "time_out_of_range";
      var a = o % e,
        i = r === 0 ? e : r;
      return a === i
        ? "empty"
        : { dayOfWeek: n, endTimeMinutes: i, startTimeMinutes: a };
    }
    function p(t) {
      return t >= 0 && t <= e;
    }
    function _(t) {
      var n = t.dayOfWeek,
        r = t.endTimeMinutes,
        o = t.startTimeMinutes;
      return [
        { dayOfWeek: n, endTimeMinutes: e, startTimeMinutes: o },
        {
          dayOfWeek: n === s ? l : n + 1,
          endTimeMinutes: r,
          startTimeMinutes: 0,
        },
      ];
    }
    ((i.MINUTES_IN_DAY = e),
      (i.normalizeAvailabilityRanges = c),
      (i.summarizeDroppedRanges = d));
  },
  66,
);
