__d(
  "oz-player/utils/OzSourceBufferUtil",
  ["oz-player/utils/OzNumericalRangeUtil"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return e.reduce(function (e, t) {
        return e + (t.endTime - t.startTime);
      }, 0);
    }
    function s(e) {
      var t = null;
      try {
        t = e.getBuffered();
      } catch (e) {
        return 0;
      }
      return t.length === 0 ? 0 : t.end(t.length - 1);
    }
    function u(e) {
      for (var t = [], n = 0; n < e.length; n++)
        t.push({ startTime: e.start(n), endTime: e.end(n) });
      return t;
    }
    function c(e, t, n) {
      var r = o("oz-player/utils/OzNumericalRangeUtil").findCurrentRangeIndex(
          n,
          t,
          e.map(function (e) {
            return { rangeStart: e.startTime, rangeEnd: e.endTime };
          }),
        ),
        a = r >= 0 ? parseFloat((e[r].endTime - t).toFixed(3)) : 0,
        i = r >= 0 ? e.length - 1 - r : -1;
      return { bufferAheadSec: a, bufferedOffset: i };
    }
    function d(e, t, n) {
      var r = e.map(function (e) {
          return { rangeStart: e.startTime, rangeEnd: e.endTime };
        }),
        a = o("oz-player/utils/OzNumericalRangeUtil").findCurrentRangeIndex(
          n,
          t,
          r,
        ),
        i = parseFloat(
          r
            .reduce(function (e, n) {
              var r = n.rangeEnd;
              return r == null
                ? e
                : e +
                    (o("oz-player/utils/OzNumericalRangeUtil").isWithin(t, n)
                      ? r - t
                      : o("oz-player/utils/OzNumericalRangeUtil").isLargerThan(
                            n.rangeStart,
                            t,
                          )
                        ? r - n.rangeStart
                        : 0);
            }, 0)
            .toFixed(3),
        ),
        l = a >= 0 ? e.length - 1 - a : -1;
      return { bufferAheadSec: i, bufferedOffset: l };
    }
    ((l.getTotalInBufferedRanges = e),
      (l.getEndBufferedTime = s),
      (l.convertToBufferedTimeRangeArray = u),
      (l.getBufferAheadInBufferedRanges = c),
      (l.getTotalBufferAheadOfPosition = d));
  },
  98,
);
