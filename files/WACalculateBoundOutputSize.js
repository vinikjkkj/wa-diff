__d(
  "WACalculateBoundOutputSize",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e, t) {
      return t != null
        ? l(e.width, e.height, t.width, t.height)
        : { outputWidth: e.width, outputHeight: e.height };
    }
    function l(e, t, n, r) {
      var o = e,
        a = t;
      return (
        e > t
          ? e > n && ((a *= n / o), (o = n))
          : a > r && ((o *= r / a), (a = r)),
        {
          outputWidth: Math.round(Math.max(o, 1)),
          outputHeight: Math.round(Math.max(a, 1)),
        }
      );
    }
    i.calculateBoundOutputSize = e;
  },
  66,
);
