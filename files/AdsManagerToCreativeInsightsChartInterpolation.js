__d(
  "AdsManagerToCreativeInsightsChartInterpolation",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e, t, n) {
      for (var r, o, a = 0, i = 0, l = 0; l < t.length; l++)
        if (e < t[l]) {
          ((a = t[l - 1]), (i = t[l]));
          break;
        }
      if (i === a) return null;
      var s = (r = n[a]) == null ? void 0 : r.videoviewpercentage,
        u = (o = n[i]) == null ? void 0 : o.videoviewpercentage;
      return s != null && u != null ? ((i - e) / (i - a)) * (s - u) + u : null;
    }
    function l(t, n) {
      return (
        t.forEach(function (r, o) {
          r.isGapSegment && (t[o].videoviewpercentage = e(o, n, t));
        }),
        t
      );
    }
    i.fillMissingChartData = l;
  },
  66,
);
