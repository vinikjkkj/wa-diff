__d(
  "oz-player/parsers/OzSidxSegmentsContainer",
  ["oz-player/utils/OzErrorUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
      function e(e, t) {
        ((this.$1 = e), (this.$2 = t));
      }
      var t = e.prototype;
      return (
        (t.getSegmentByTime = function (t) {
          for (var e = this.$1(), n = 0; n < e.length; n++) {
            var r = e[n],
              o = r.getTimeRange();
            if (o.startTime <= t && o.endTime > t) return r;
          }
          return null;
        }),
        (t.getSegmentAfter = function (t) {
          var e = this.$1(),
            n = e.findIndex(function (e) {
              return (
                e.getTimeRange().startTime === t.getTimeRange().startTime &&
                e.getTimeRange().endTime === t.getTimeRange().endTime
              );
            });
          return n >= 0 && n + 1 < e.length ? e[n + 1] : null;
        }),
        (t.getPredictedSegmentAfter = function (t) {
          return null;
        }),
        (t.canPredict = function () {
          return !1;
        }),
        (t.canApproximateId = function () {
          return !1;
        }),
        (t.isEndingSegment = function (t) {
          var e = this.$1();
          if (!e || !e.length) return !1;
          var n = e[e.length - 1].getTimeRange(),
            r = t.getTimeRange();
          return n.startTime === r.startTime && n.endTime === r.endTime;
        }),
        (t.getSegment = function (t) {
          return this.$1()[t] || null;
        }),
        (t.updateWith = function (t) {
          throw o("oz-player/utils/OzErrorUtils").createOzError({
            type: "OZ_NOT_IMPLEMENTED_ERROR",
            description: "Not implemented: updatedWith",
          });
        }),
        (t.addUpdateListener = function (t) {
          return this.$2.addListener("segment_updated", t);
        }),
        (t.getTimeRanges = function () {
          var e = this.$1();
          if (e.length === 0) return [];
          var t = e[0],
            n = e[e.length - 1];
          return [
            {
              startTime: t.getTimeRange().startTime,
              endTime: n.getTimeRange().endTime,
            },
          ];
        }),
        (t.blockTimeRange = function () {}),
        (t.getEndingSegment = function () {
          var e = this.$1();
          return e.length > 0 ? e[e.length - 1] : null;
        }),
        (t.getMaxGopSec = function () {
          return null;
        }),
        e
      );
    })();
    l.default = e;
  },
  98,
);
