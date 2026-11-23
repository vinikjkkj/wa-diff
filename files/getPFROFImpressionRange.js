__d(
  "getPFROFImpressionRange",
  ["PFROFImpressionSitevar"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n;
      t === void 0 && (t = 1);
      var o = r("PFROFImpressionSitevar").n_imp_p50,
        a = r("PFROFImpressionSitevar").n_imp_p75,
        i = r("PFROFImpressionSitevar").n_imp_p95,
        l = r("PFROFImpressionSitevar").p25,
        s =
          (n = [l, o, a, i].find(function (t) {
            return e <= t.impressions;
          })) != null
            ? n
            : i,
        u = Math.max(Math.min(e * (1 + s.lower_bound / 100), e - t), 0),
        c = Math.max(e * (1 + s.upper_bound / 100), e + t);
      return [u, c];
    }
    l.default = e;
  },
  98,
);
