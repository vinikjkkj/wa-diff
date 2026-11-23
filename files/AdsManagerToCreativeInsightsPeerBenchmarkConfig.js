__d(
  "AdsManagerToCreativeInsightsPeerBenchmarkConfig",
  ["AdsInsightsField"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = e;
      if (typeof t == "string")
        try {
          t = JSON.parse(t);
        } catch (e) {
          return null;
        }
      return t == null || typeof t != "object" || Array.isArray(t) ? null : t;
    }
    function s(t) {
      var n = e(t);
      if (n == null) return null;
      var r = n.p50;
      if (r == null || (typeof r == "string" && r.trim() === "")) return null;
      var o = Number(r);
      return Number.isFinite(o) ? o : null;
    }
    function u(t, n) {
      var r = e(n);
      if (t == null || r == null) return null;
      var o = function (t) {
          return t == null || t === "" ? NaN : Number(t);
        },
        a = o(r.p25),
        i = o(r.p50),
        l = o(r.p75);
      return [a, i, l].every(function (e) {
        return Number.isFinite(e);
      })
        ? t >= l
          ? "top25"
          : t >= i
            ? "top50"
            : t >= a
              ? "bottom50"
              : "bottom25"
        : null;
    }
    function c(e, t) {
      return e == null || t == null || t === 0 ? null : (e / t - 1) * 100;
    }
    ((l.METRICS_BENCHMARK_HOOK_RATE =
      r("AdsInsightsField").BENCHMARK_VIDEO_HOOK_RATE),
      (l.METRICS_BENCHMARK_HOLD_RATE =
        r("AdsInsightsField").BENCHMARK_VIDEO_HOLD_RATE),
      (l.parsePeerBenchmarkPercentiles = e),
      (l.parsePeerBenchmarkMedian = s),
      (l.getPeerQuartileBucket = u),
      (l.getPeerDeltaPercent = c));
  },
  98,
);
