__d(
  "WAWebBizAiAppointmentAvailabilityNormalize",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = 1440;
    function l(t) {
      var n = [],
        r = 0,
        o = 0;
      for (var a of t) {
        var i = a.dayOfWeek,
          l = a.endTimeMinutes,
          s = a.startTimeMinutes;
        if (
          i == null ||
          l == null ||
          s == null ||
          i < 1 ||
          i > 7 ||
          s < 0 ||
          s > e ||
          l < 0 ||
          l > e ||
          l === s
        ) {
          r++;
          continue;
        }
        if (l < s) {
          o++;
          continue;
        }
        n.push({ dayOfWeek: i, endTimeMinutes: l, startTimeMinutes: s });
      }
      return { invalidCount: r, overnightCount: o, ranges: n };
    }
    i.normalizeAvailabilityRanges = l;
  },
  66,
);
