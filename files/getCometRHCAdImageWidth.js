__d(
  "getCometRHCAdImageWidth",
  ["ExecutionEnvironment"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = 280,
      u = 360,
      c = 744,
      d = 1100,
      m = 900,
      p = 1464,
      _ = 1920,
      f = 0.55,
      g = 205,
      h = p;
    function y(e) {
      return Math.min(u, Math.max(s, e));
    }
    function C(e) {
      if (e < d) {
        var t = Math.max(0, c + u - e);
        return y(u - t);
      }
      var n = e > _ ? Math.min(e, p) : e,
        r = Math.max(0, p - n);
      return y(u - r / 2);
    }
    function b(t) {
      var n =
          t != null
            ? t
            : (e || (e = r("ExecutionEnvironment"))).canUseDOM
              ? window.innerWidth
              : h,
        o = C(Math.max(n, m));
      return Math.round(Math.min(o * f, g));
    }
    l.default = b;
  },
  98,
);
