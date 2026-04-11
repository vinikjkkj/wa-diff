__d(
  "oz-player/strategies/getSegmentsCount",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e, t, n, r) {
      for (
        var o = 0,
          a = e.getTimeRange().startTime,
          i = e,
          l = i.getTimeRange().startTime;
        i !== null && l < n + a;
      ) {
        var s = l;
        if ((o++, (i = t.getSegmentAfter(i)), i))
          l = i.getTimeRange().startTime;
        else break;
        if (l <= s) return r;
      }
      return Math.max(o, 1);
    }
    i.default = e;
  },
  66,
);
