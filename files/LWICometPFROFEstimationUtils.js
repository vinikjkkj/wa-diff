__d(
  "LWICometPFROFEstimationUtils",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
        n_imp_p50: { impressions: 2097, lower_bound: -60, upper_bound: 0 },
        n_imp_p75: { impressions: 5721, lower_bound: -38, upper_bound: 22 },
        n_imp_p95: { impressions: 34445, lower_bound: -30, upper_bound: 30 },
        p25: { impressions: 831, lower_bound: -60, upper_bound: 0 },
      },
      l = 300;
    function s(t) {
      var n,
        r = e.n_imp_p50,
        o = e.n_imp_p75,
        a = e.n_imp_p95,
        i = e.p25,
        s =
          (n = [i, r, o, a].find(function (e) {
            return t <= e.impressions;
          })) != null
            ? n
            : a,
        u = s.lower_bound,
        c = s.upper_bound,
        d = Math.max(Math.min(t * (1 + u / 100), t - l), 0),
        m = Math.max(t * (1 + c / 100), t + l);
      return { max: m, min: d };
    }
    i.getImpressionRange = s;
  },
  66,
);
