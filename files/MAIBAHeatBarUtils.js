__d(
  "MAIBAHeatBarUtils",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e, t, n) {
      return n <= t ? 0 : Math.max(0, Math.min(100, ((e - t) / (n - t)) * 100));
    }
    function l(e) {
      return e < 33.34 ? "error" : e < 66.67 ? "warning" : "success";
    }
    ((i.getMAIBAHeatBarPercent = e), (i.getMAIBAHeatBarValueColor = l));
  },
  66,
);
