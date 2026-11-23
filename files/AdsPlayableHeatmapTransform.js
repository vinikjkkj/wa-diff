__d(
  "AdsPlayableHeatmapTransform",
  ["AdsPlayableHeatmapTypes"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = Object.freeze([]);
    function s(t, n) {
      var r = t.timeBuckets.find(function (e) {
        return e.bucketIndex === n;
      });
      return r == null ? e : p(r);
    }
    function u(t) {
      return t.timeBuckets.length === 0 ? e : t.timeBuckets.flatMap(p);
    }
    function c(e) {
      return e.timeBuckets.length === 0
        ? 0
        : e.timeBuckets.reduce(function (e, t) {
            return Math.max(e, t.bucketIndex);
          }, 0);
    }
    function d(e) {
      return e.timeBuckets.length === 0 ? 0 : e.maxCellCount;
    }
    function m(e) {
      return e.totalTouchPoints > 0;
    }
    function p(t) {
      return t.cells.length === 0
        ? e
        : t.cells.map(function (e) {
            return {
              weight: e.cellCount,
              x:
                (e.gridX + 0.5) /
                o("AdsPlayableHeatmapTypes").HEATMAP_GRID_SIZE,
              y:
                (e.gridY + 0.5) /
                o("AdsPlayableHeatmapTypes").HEATMAP_GRID_SIZE,
            };
          });
    }
    ((l.getPointsForBucket = s),
      (l.getAllPoints = u),
      (l.getMaxAvailableBucket = c),
      (l.getMaxBucketWeight = d),
      (l.hasAnyTouches = m));
  },
  98,
);
