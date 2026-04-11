__d(
  "WebBloksAnimationFunctions",
  [],
  function (t, n, r, o, a, i) {
    function e(e, t, n, r) {
      var o = 1e-6,
        a = 3 * e - 3 * n + 1,
        i = 3 * n - 6 * e,
        l = 3 * e,
        s = 3 * t - 3 * r + 1,
        u = 3 * r - 6 * t,
        c = 3 * t;
      function d(e) {
        return (3 * a * e + 2 * i) * e + l;
      }
      function m(e) {
        return ((a * e + i) * e + l) * e;
      }
      function p(e) {
        return ((s * e + u) * e + c) * e;
      }
      function _(e) {
        for (var t = e, n, r, a = 0; a < 8; a++) {
          if (((r = m(t) - e), Math.abs(r) < o)) return t;
          if (((n = d(t)), Math.abs(n) < o)) break;
          t -= r / n;
        }
        var i = 1,
          l = 0;
        for (t = e; i > l; ) {
          if (((r = m(t) - e), Math.abs(r) < o)) return t;
          (r > 0 ? (i = t) : (l = t), (t = (i + l) / 2));
        }
        return t;
      }
      function f(e) {
        return p(_(e));
      }
      return f;
    }
    function l() {
      return e(0, 0, 1, 1);
    }
    ((i.cubicBezier = e), (i.linearInterpolator = l));
  },
  66,
);
