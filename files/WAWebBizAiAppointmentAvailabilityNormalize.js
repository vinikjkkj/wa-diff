__d(
  "WAWebBizAiAppointmentAvailabilityNormalize",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = 1440,
      l = 1,
      s = 7;
    function u(t) {
      var n = [],
        r = 0;
      for (var o of t) {
        var a = o.dayOfWeek,
          i = o.endTimeMinutes,
          u = o.startTimeMinutes;
        if (
          a == null ||
          i == null ||
          u == null ||
          a < l ||
          a > s ||
          u < 0 ||
          u >= e ||
          i < 0 ||
          i > e ||
          i === u
        ) {
          r++;
          continue;
        }
        if (i < u) {
          (n.push({ dayOfWeek: a, endTimeMinutes: e, startTimeMinutes: u }),
            i > 0 &&
              n.push({
                dayOfWeek: a === s ? l : a + 1,
                endTimeMinutes: i,
                startTimeMinutes: 0,
              }));
          continue;
        }
        n.push({ dayOfWeek: a, endTimeMinutes: i, startTimeMinutes: u });
      }
      return { invalidCount: r, ranges: n };
    }
    ((i.MINUTES_IN_DAY = e), (i.normalizeAvailabilityRanges = u));
  },
  66,
);
