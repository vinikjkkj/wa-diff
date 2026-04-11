__d(
  "oz-player/streams/OzSegmentLocator",
  ["oz-player/utils/OzNumericalRangeUtil", "oz-player/utils/OzRangeUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = e.getEndingSegment();
      return t != null && t.getSequenceNumber() != null
        ? t.getSequenceNumber()
        : 0;
    }
    var s = function (t, n) {
        var e = t.getCurrentTime();
        return n
          ? o("oz-player/utils/OzRangeUtils").getRangeForTime(
              e,
              n.getBufferedRanges(),
            )
          : null;
      },
      u = function (t, n, r) {
        var e = s(t, n),
          o = r ? r.getTimeRange().endTime : 0,
          a = t.getCurrentTime() || 0;
        return (o ? (a = o) : e && (a = e.endTime), a);
      },
      c = function (t, n, r, a, i, l, s, c) {
        var e = t.getPredictedSegmentAfter(l);
        if (e && n.isPlaying()) return e;
        var d = u(n, a, l),
          m = i.getTimeRanges(),
          p = o("oz-player/utils/OzNumericalRangeUtil").findDiffCoveredByRanges(
            n.getCurrentTime(),
            d,
            m.map(function (e) {
              return { rangeStart: e.startTime, rangeEnd: e.endTime };
            }),
          );
        if (p > r) return null;
        var _ = t.getSegment(0);
        return (
          _ &&
            _.getTimeRange().startTime > d &&
            (d = _.getTimeRange().startTime),
          t.getSegmentByTime(d)
        );
      };
    ((l.getEndingSequenceNumber = e),
      (l.getTimeToQuery = u),
      (l.getSegment = c));
  },
  98,
);
