__d(
  "oz-player/utils/OzTimelineGapUtil",
  ["oz-player/utils/OzNumericalHelper", "oz-player/utils/OzNumericalRangeUtil"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 1.5;
    function s(e, t, n, r) {
      var a = t.map(function (e) {
        return { rangeStart: e.startTime, rangeEnd: e.endTime };
      });
      return (
        o("oz-player/utils/OzNumericalRangeUtil").findCurrentRangeIndex(
          n,
          e,
          a,
          r,
        ) === -1
      );
    }
    function u(t, n, r, a, i) {
      i === void 0 && (i = e);
      var l = n.map(function (e) {
          return { rangeStart: e.startTime, rangeEnd: e.endTime };
        }),
        s = o("oz-player/utils/OzNumericalRangeUtil").findCurrentRangeIndex(
          r,
          t,
          l,
          a,
        );
      if (s !== -1) {
        var u = n[s];
        return (
          o("oz-player/utils/OzNumericalHelper").lessThanOrEqual(
            t,
            u.endTime,
          ) && u.endTime - t < i
        );
      }
      return !1;
    }
    ((l.isInGap = s), (l.isNearGap = u));
  },
  98,
);
