__d(
  "WACryptoCurveTransformations",
  ["WACryptoCurveConstants", "WACryptoCurveEncoding", "err"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return (
        ((e % o("WACryptoCurveConstants").P) + o("WACryptoCurveConstants").P) %
        o("WACryptoCurveConstants").P
      );
    }
    function s(e) {
      return u(e, o("WACryptoCurveConstants").P - BigInt(2));
    }
    function u(t, n) {
      for (var r = e(t), o = n, a = BigInt(1); o > BigInt(0); )
        (o & BigInt(1) && (a = e(a * r)), (r = e(r * r)), (o >>= BigInt(1)));
      return a;
    }
    function c(t, n) {
      var a = e(t * s(n)),
        i = u(a, (o("WACryptoCurveConstants").P + BigInt(3)) >> BigInt(3)),
        l = e(i * i);
      if (
        l !== a &&
        ((i = e(i * o("WACryptoCurveConstants").I)), (l = e(i * i)), l !== a)
      )
        throw r("err")("Montgomery u is on the twist (no sqrt for v)");
      return i;
    }
    function d(t) {
      var n = e(o("WACryptoCurveEncoding").bytesToBigIntLE(t));
      if (n === o("WACryptoCurveConstants").P - BigInt(1))
        throw r("err")("u == -1 (mod p): cannot convert");
      var a = e(e(n - BigInt(1)) * s(e(n + BigInt(1))));
      return o("WACryptoCurveEncoding").bigIntTo32LE(a);
    }
    function m(t, n) {
      return { X: t, Y: n, Z: BigInt(1), T: e(t * n) };
    }
    function p(t) {
      var n = e(t.x),
        o = e(t.y),
        a = e(BigInt(1) - o);
      if (a === BigInt(0)) throw r("err")("y == 1: map undefined");
      var i = e((BigInt(1) + o) * s(a)),
        l = n === BigInt(0) ? void 0 : e(i * s(n));
      return { u: i, v: l };
    }
    function _(e) {
      var t = e.x,
        n = e.y,
        r = o("WACryptoCurveEncoding").bigIntTo32LE(n),
        a = (t & BigInt(1)) === BigInt(1) ? 128 : 0;
      return ((r[31] |= a), r);
    }
    function f(t) {
      if (!(t instanceof Uint8Array) || t.length !== 32)
        throw r("err")("Compressed Ed25519 key is not 32 bytes");
      var n = t[31],
        a = (n & 128) !== 0,
        i = t.slice();
      i[31] &= 127;
      var l = e(o("WACryptoCurveEncoding").bytesToBigIntLE(i)),
        s = e(l * l),
        u = e(s - BigInt(1)),
        d = e(o("WACryptoCurveConstants").D * s + BigInt(1)),
        m = c(u, d);
      if (
        ((m & BigInt(1)) !== (a ? BigInt(1) : BigInt(0)) && (m = e(-m)),
        m === BigInt(0) && a)
      )
        throw r("err")(
          "Error during decompression of Ed25519: x coord is 0 but sign bit set",
        );
      return { x: m, y: l };
    }
    ((l.mod = e),
      (l.toEdwardsCompressed = d),
      (l.affineToExtended = m),
      (l.fromAffineToMontgomeryUV = p),
      (l.compressEd25519 = _),
      (l.decompressEd25519 = f));
  },
  98,
);
