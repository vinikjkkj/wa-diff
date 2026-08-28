__d(
  "GeoChartApproximation",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      var t = Math.ceil(e).toString().length;
      return Math.ceil(e / Math.pow(10, t - 1)) * Math.pow(10, t - 1);
    }
    function l(t) {
      return t < 1 ? e(t * 100) / 100 : e(t);
    }
    function s(e) {
      var t = e[0],
        n = e[1];
      return [t, l(n)];
    }
    function u(e) {
      var t = 0,
        n = 0;
      for (var r of e) {
        var o = r.value;
        for (var a of o) {
          var i = a[0],
            l = a[1];
          l != null && !isNaN(l) && (l < t ? (t = l) : l > n && (n = l));
        }
      }
      return [t, n];
    }
    ((i.roundUpAtFirstDigit = e),
      (i.roundUpAtFirstSignificantDigit = l),
      (i.roundUpRangeAtFirstDigit = s),
      (i.getUnifiedDataRange = u));
  },
  66,
);
