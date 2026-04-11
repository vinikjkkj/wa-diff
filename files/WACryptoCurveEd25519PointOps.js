__d(
  "WACryptoCurveEd25519PointOps",
  ["WACryptoCurveConstants", "WACryptoCurveTransformations", "err"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n,
        r = e.T,
        a = e.X,
        i = e.Y,
        l = e.Z,
        s = t.T,
        u = t.X,
        c = t.Y,
        d = t.Z,
        m = (n = o("WACryptoCurveTransformations")).mod(a * u),
        p = n.mod(i * c),
        _ = n.mod(r * o("WACryptoCurveConstants").D * s),
        f = n.mod(l * d),
        g = n.mod((a + i) * (u + c) - m - p),
        h = n.mod(f - _),
        y = n.mod(f + _),
        C = n.mod(p - o("WACryptoCurveConstants").A * m),
        b = n.mod(g * h),
        v = n.mod(y * C),
        S = n.mod(h * y),
        R = n.mod(g * C);
      return { X: b, Y: v, Z: S, T: R };
    }
    function s(e) {
      var t,
        n = e.X,
        r = e.Y,
        a = e.Z,
        i = (t = o("WACryptoCurveTransformations")).mod(n * n),
        l = t.mod(r * r),
        s = t.mod(BigInt(2) * t.mod(a * a)),
        u = t.mod(o("WACryptoCurveConstants").A * i),
        c = n + r,
        d = t.mod(t.mod(c * c) - i - l),
        m = t.mod(u + l),
        p = t.mod(m - s),
        _ = t.mod(u - l);
      return {
        X: t.mod(d * p),
        Y: t.mod(m * _),
        Z: t.mod(p * m),
        T: t.mod(d * _),
      };
    }
    function u(e, t) {
      var n,
        r = e.X,
        a = e.Y,
        i = e.Z,
        l = t.X,
        s = t.Y,
        u = t.Z,
        c = (n = o("WACryptoCurveTransformations")).mod(r * u),
        d = n.mod(l * i),
        m = n.mod(a * u),
        p = n.mod(s * i);
      return c === d && m === p;
    }
    function c(t, n) {
      for (
        var r = { X: BigInt(0), Y: BigInt(1), Z: BigInt(1), T: BigInt(0) },
          o = t,
          a = n;
        a > BigInt(0);
      )
        (a & BigInt(1) && (r = e(r, o)), (o = s(o)), (a >>= BigInt(1)));
      return r;
    }
    function d(e) {
      var t,
        n = e.T,
        a = e.X,
        i = e.Y,
        l = e.Z,
        s = (t = o("WACryptoCurveTransformations")).mod(a * a),
        u = t.mod(i * i),
        c = t.mod(l * l),
        d = t.mod(c * c),
        m = t.mod(s * o("WACryptoCurveConstants").A),
        p = t.mod(c * t.mod(m + u)),
        _ = t.mod(d + t.mod(o("WACryptoCurveConstants").D * t.mod(s * u)));
      if (p !== _) throw r("err")("bad point: equation left != right (1)");
      var f = o("WACryptoCurveTransformations").mod(a * i),
        g = o("WACryptoCurveTransformations").mod(l * n);
      if (f !== g) throw r("err")("bad point: equation left != right (2)");
      return !0;
    }
    ((l.addPoints = e),
      (l.doublePoint = s),
      (l.equalPoints = u),
      (l.scalarMult = c),
      (l.isPointValid = d));
  },
  98,
);
