__d(
  "UFI2ScaleRect",
  ["invariant"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    function e(e) {
      return c(e, !0);
    }
    function u(e) {
      return c(e, !1);
    }
    function c(e, t) {
      var n = e.gracefullyFallbackToMaxDimensionWhenHeightOrWidthIsZero,
        r = e.maxHeight,
        o = e.maxWidth,
        a = e.srcHeight,
        i = e.srcWidth;
      (n === !1 && (a > 0 || s(0, 5272, a), i > 0 || s(0, 5273, i)),
        r > 0 || s(0, 5274, r),
        o > 0 || s(0, 5275, o));
      var l = n && a === 0 ? r : a,
        u = n && i === 0 ? o : i,
        c = o / u,
        d = r / l,
        m = t ? Math.min(c, d) : Math.min(c, d, 1);
      return { height: Math.round(l * m), width: Math.round(u * m) };
    }
    ((l.scaleToContain = e), (l.shrinkToContain = u));
  },
  98,
);
