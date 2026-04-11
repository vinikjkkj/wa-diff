__d(
  "WACryptoCurveKeyCanonicalCheck",
  [
    "WACryptoCurveConstants",
    "WACryptoCurveEd25519PointOps",
    "WACryptoCurveEncoding",
    "WACryptoCurveTransformations",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return o("WACryptoCurveEd25519PointOps").equalPoints(e, {
        X: BigInt(0),
        Y: BigInt(1),
        Z: BigInt(1),
        T: BigInt(0),
      });
    }
    function s(e) {
      var t = o("WACryptoCurveEncoding").bytesToBigIntLE(e);
      return t < o("WACryptoCurveConstants").P;
    }
    function u(t) {
      try {
        var n = o("WACryptoCurveTransformations").toEdwardsCompressed(t),
          r = o("WACryptoCurveTransformations").decompressEd25519(n),
          a = r.x,
          i = r.y,
          l = o("WACryptoCurveTransformations").affineToExtended(a, i),
          s = o("WACryptoCurveEd25519PointOps").scalarMult(
            l,
            o("WACryptoCurveConstants").L,
          );
        return e(s);
      } catch (e) {
        return !1;
      }
    }
    function c(e) {
      return u(e) && s(e);
    }
    ((l.isIdentity = e),
      (l.isInRange = s),
      (l.isTorsionFree = u),
      (l.isCanonical = c));
  },
  98,
);
