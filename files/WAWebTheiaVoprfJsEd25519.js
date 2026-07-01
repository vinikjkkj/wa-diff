__d(
  "WAWebTheiaVoprfJsEd25519",
  ["WACryptoPrimitives", "err"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 32,
      s = 32,
      u = new Float64Array([
        235, 211, 245, 92, 26, 99, 18, 88, 214, 156, 247, 162, 222, 249, 222,
        20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16,
      ]);
    function c(e) {
      var t = new Float64Array(16);
      if (e != null) for (var n = 0; n < e.length; n++) t[n] = e[n];
      return t;
    }
    function d() {
      return [c(), c(), c(), c()];
    }
    var m = function () {
        return c([0]);
      },
      p = function () {
        return c([1]);
      },
      _ = function () {
        return c([
          41136, 18958, 6951, 50414, 58488, 44335, 6150, 12099, 55207, 15867,
          153, 11085, 57099, 20417, 9344, 11139,
        ]);
      },
      f = new Uint8Array([
        176, 160, 14, 74, 39, 27, 238, 196, 120, 228, 47, 173, 6, 24, 67, 47,
        167, 215, 251, 61, 153, 0, 77, 43, 11, 223, 193, 79, 128, 36, 131, 43,
      ]),
      g = new Uint8Array([
        6, 126, 69, 255, 170, 4, 110, 204, 130, 26, 125, 75, 209, 211, 161, 197,
        126, 79, 252, 3, 220, 8, 123, 210, 187, 6, 160, 96, 244, 237, 38, 15,
      ]);
    function h(e, t) {
      for (var n = 0, r = t; r > 0; ) {
        var o = r % 65536;
        ((e[n] = o), (r = (r - o) / 65536), n++);
      }
    }
    function y(e, t) {
      var n = c();
      n.set(t);
      for (var r = 253; r >= 0; r--)
        (o("WACryptoPrimitives").lowlevel.S(n, n),
          r !== 2 && r !== 4 && o("WACryptoPrimitives").lowlevel.M(n, n, t));
      e.set(n);
    }
    function C(e) {
      var t = new Uint8Array(32);
      return (o("WACryptoPrimitives").lowlevel.pack25519(t, e), t[0] % 2);
    }
    function b(e, t) {
      var n = new Uint8Array(32),
        r = new Uint8Array(32);
      return (
        o("WACryptoPrimitives").lowlevel.pack25519(n, e),
        o("WACryptoPrimitives").lowlevel.pack25519(r, t),
        o("WACryptoPrimitives").lowlevel.crypto_verify_32(n, 0, r, 0)
      );
    }
    function v(e, t) {
      return b(e, t) ? 0 : 1;
    }
    function S(e) {
      var t = new Uint8Array(32);
      return (o("WACryptoPrimitives").lowlevel.pack25519(t, e), t[0] % 2);
    }
    function R(e, t) {
      var n = c([2]),
        r = c();
      (o("WACryptoPrimitives").lowlevel.S(r, t),
        o("WACryptoPrimitives").lowlevel.M(e, n, r));
    }
    function L(e, t) {
      var n,
        r = c();
      h(r, 486662);
      var a = p(),
        i = c(),
        l = c(),
        s = c(),
        u = c();
      ((n = o("WACryptoPrimitives")).lowlevel.S(i, t),
        n.lowlevel.M(l, r, t),
        n.lowlevel.A(s, i, l),
        n.lowlevel.A(u, s, a),
        n.lowlevel.M(e, t, u));
    }
    function E(e, t, n) {
      n === 1 && e.set(t);
    }
    function k(e, t) {
      o("WACryptoPrimitives").lowlevel.Z(e, m(), t);
    }
    function I(e, t) {
      var n,
        r = c();
      (n = o("WACryptoPrimitives")).lowlevel.unpack25519(r, f);
      var a = c();
      n.lowlevel.pow2523(a, t);
      var i = c();
      n.lowlevel.M(i, t, a);
      var l = c();
      n.lowlevel.S(l, i);
      var s = c();
      (n.lowlevel.M(s, i, r), E(i, s, 1 - v(l, t)), e.set(i));
    }
    function T(e, t) {
      var n = p(),
        r = c(),
        a = c(),
        i = c();
      (o("WACryptoPrimitives").lowlevel.Z(r, t, n),
        o("WACryptoPrimitives").lowlevel.A(a, t, n),
        y(i, a),
        o("WACryptoPrimitives").lowlevel.M(e, r, i));
    }
    function D(e) {
      var t,
        n = c(),
        r = c(),
        a = c(),
        i = c(),
        l = c();
      ((t = o("WACryptoPrimitives")).lowlevel.pow2523(n, e),
        t.lowlevel.S(r, n),
        t.lowlevel.S(a, r),
        t.lowlevel.M(i, a, e),
        t.lowlevel.M(l, i, e));
      var s = new Uint8Array(32);
      return (t.lowlevel.pack25519(s, l), s[31] % 2);
    }
    function x(e, t) {
      (o("WACryptoPrimitives").lowlevel.M(e[0], t[0], t[3]),
        o("WACryptoPrimitives").lowlevel.M(e[1], t[1], t[2]),
        o("WACryptoPrimitives").lowlevel.M(e[2], t[2], t[3]));
    }
    function $(e, t) {
      var n;
      ((n = o("WACryptoPrimitives")).lowlevel.M(e[0], t[0], t[3]),
        n.lowlevel.M(e[1], t[1], t[2]),
        n.lowlevel.M(e[2], t[2], t[3]),
        n.lowlevel.M(e[3], t[0], t[1]));
    }
    function P(e, t) {
      var n;
      ((n = o("WACryptoPrimitives")).lowlevel.S(e[0], t[0]),
        n.lowlevel.S(e[2], t[1]),
        R(e[3], t[2]),
        n.lowlevel.A(e[1], t[0], t[1]));
      var r = c();
      (n.lowlevel.S(r, e[1]),
        n.lowlevel.A(e[1], e[2], e[0]),
        n.lowlevel.Z(e[2], e[2], e[0]),
        n.lowlevel.Z(e[0], r, e[1]),
        n.lowlevel.Z(e[3], e[3], e[2]));
    }
    function N(e, t) {
      (e[0].set(t[0]), e[1].set(t[1]), e[2].set(t[2]));
    }
    function M(e, t) {
      var n = [c(), c(), c()];
      (N(n, t), P(e, n));
    }
    function w(e, t) {
      var n = d(),
        r = [c(), c(), c()];
      (M(n, t), x(r, n), P(n, r), x(r, n), P(n, r), $(e, n));
    }
    function A(e, t) {
      (k(e[0], t[0]), e[1].set(t[1]), e[2].set(t[2]), k(e[3], t[3]));
    }
    function F(e, t, n) {
      var r,
        a = c();
      (r = o("WACryptoPrimitives")).lowlevel.unpack25519(a, g);
      var i = c();
      T(i, t);
      var l = c();
      L(l, t);
      var s = c();
      I(s, l);
      var u = c();
      r.lowlevel.M(u, t, a);
      var d = c();
      y(d, s);
      var m = c();
      r.lowlevel.M(m, u, d);
      var _ = c();
      (k(_, m),
        E(m, _, (S(m) + n) % 2),
        e[0].set(m),
        e[1].set(i),
        e[2].set(p()),
        r.lowlevel.M(e[3], e[0], e[1]));
    }
    function O(e, t) {
      var n = t,
        r = p(),
        a = c();
      h(a, 486662);
      var i = c();
      R(i, n);
      var l = c();
      o("WACryptoPrimitives").lowlevel.A(l, i, r);
      var s = c();
      y(s, l);
      var u = c();
      o("WACryptoPrimitives").lowlevel.M(u, s, a);
      var d = c();
      k(d, u);
      var m = c();
      L(m, d);
      var _ = D(m),
        f = c([0]);
      E(f, a, _);
      var g = c();
      o("WACryptoPrimitives").lowlevel.A(g, d, f);
      var C = c();
      (k(C, g), E(g, C, _), e.set(g));
    }
    function B(e) {
      var t = o("WACryptoPrimitives").hash(e),
        n = Math.floor(t[31] / 128);
      t[31] %= 128;
      var r = c();
      o("WACryptoPrimitives").lowlevel.unpack25519(r, t);
      var a = c();
      O(a, r);
      var i = d();
      F(i, a, n);
      var l = d();
      return (w(l, i), l);
    }
    function W(e, t) {
      var n,
        r = c(),
        a = c(),
        i = c();
      (y(i, t[2]),
        (n = o("WACryptoPrimitives")).lowlevel.M(r, t[0], i),
        n.lowlevel.M(a, t[1], i),
        n.lowlevel.pack25519(e, a));
      var l = new Uint8Array(32);
      (n.lowlevel.pack25519(l, r), (e[31] += (l[0] % 2) * 128));
    }
    function q(e, t) {
      var n,
        r = c(),
        a = c(),
        i = c(),
        l = c(),
        s = c(),
        u = c(),
        d = c();
      return (
        (n = o("WACryptoPrimitives")).lowlevel.set25519(e[2], p()),
        n.lowlevel.unpack25519(e[1], t),
        n.lowlevel.S(i, e[1]),
        n.lowlevel.M(l, i, n.lowlevel.D),
        n.lowlevel.Z(i, i, e[2]),
        n.lowlevel.A(l, e[2], l),
        n.lowlevel.S(s, l),
        n.lowlevel.S(u, s),
        n.lowlevel.M(d, u, s),
        n.lowlevel.M(r, d, i),
        n.lowlevel.M(r, r, l),
        n.lowlevel.pow2523(r, r),
        n.lowlevel.M(r, r, i),
        n.lowlevel.M(r, r, l),
        n.lowlevel.M(r, r, l),
        n.lowlevel.M(e[0], r, l),
        n.lowlevel.S(a, e[0]),
        n.lowlevel.M(a, a, l),
        b(a, i) && o("WACryptoPrimitives").lowlevel.M(e[0], e[0], _()),
        o("WACryptoPrimitives").lowlevel.S(a, e[0]),
        o("WACryptoPrimitives").lowlevel.M(a, a, l),
        b(a, i)
          ? -1
          : (C(e[0]) === Math.floor(t[31] / 128) &&
              o("WACryptoPrimitives").lowlevel.Z(e[0], m(), e[0]),
            o("WACryptoPrimitives").lowlevel.M(e[3], e[0], e[1]),
            0)
      );
    }
    function U(e, t) {
      var n = d();
      return q(n, t) !== 0 ? -1 : (A(e, n), 0);
    }
    function V(t) {
      var n = new Uint8Array(e);
      return (W(n, B(t)), n);
    }
    function H(t, n) {
      var a = d();
      if (U(a, n) !== 0) throw r("err")("VoprfJsEd25519: invalid point");
      var i = d();
      o("WACryptoPrimitives").lowlevel.scalarmult(i, a, t);
      var l = new Uint8Array(e);
      return (W(l, i), l);
    }
    function G(t) {
      var n = d();
      o("WACryptoPrimitives").lowlevel.scalarbase(n, t);
      var r = new Uint8Array(e);
      return (W(r, n), r);
    }
    function z(t, n) {
      var a = d(),
        i = d();
      if (U(a, t) !== 0 || U(i, n) !== 0)
        throw r("err")("VoprfJsEd25519: invalid point");
      o("WACryptoPrimitives").lowlevel.add(a, i);
      var l = new Uint8Array(e);
      return (W(l, a), l);
    }
    var j = Uint8Array.of.apply(Uint8Array, [1].concat(new Array(31).fill(0))),
      K = G(j);
    function Q() {
      for (var e = 0, t = arguments.length, n = new Array(t), r = 0; r < t; r++)
        n[r] = arguments[r];
      for (var o of n) e += o.length;
      var a = new Uint8Array(e),
        i = 0;
      for (var l of n) (a.set(l, i), (i += l.length));
      return a;
    }
    function X() {
      return o("WACryptoPrimitives").hash(Q.apply(void 0, arguments));
    }
    function Y() {
      for (
        var e = X.apply(void 0, arguments), t = new Float64Array(64), n = 0;
        n < 64;
        n++
      )
        t[n] = e[n];
      var r = new Uint8Array(s);
      return (o("WACryptoPrimitives").lowlevel.modL(r, t), r);
    }
    function J(e, t) {
      for (var n = new Float64Array(64), r = 0; r < s; r++)
        for (var a = 0; a < s; a++) n[r + a] += e[r] * t[a];
      var i = new Uint8Array(s);
      return (o("WACryptoPrimitives").lowlevel.modL(i, n), i);
    }
    function Z(e) {
      return J(e, e);
    }
    function ee(e) {
      for (var t = new Uint8Array(e), n = 251; n >= 0; n--)
        ((t = Z(t)), ((u[n >> 3] >> (n & 7)) & 1) !== 0 && (t = J(t, e)));
      return t;
    }
    function te(e) {
      for (var t = 0, n = 0; n < e.length; n++) t += e[n];
      return t === 0;
    }
    function ne() {
      var e = new Uint8Array(s);
      do {
        for (
          var t = self.crypto.getRandomValues(new Uint8Array(64)),
            n = new Float64Array(64),
            r = 0;
          r < 64;
          r++
        )
          n[r] = t[r];
        o("WACryptoPrimitives").lowlevel.modL(e, n);
      } while (te(e));
      return e;
    }
    function re(e, t, n, r, o, a) {
      return Y(e, n, t, r, o, a);
    }
    function oe(e, t, n, r, a, i) {
      var l = z(H(t, n), H(e, a)),
        s = z(H(t, r), H(e, i)),
        u = re(n, r, a, i, l, s);
      return o("WACryptoPrimitives").verify(e, u);
    }
    var ae = V,
      ie = H;
    function le() {
      return {
        blind: function (t) {
          var e = ne(),
            n = H(e, V(t));
          return { blindedElement: n, blindingFactor: e };
        },
        verifiableUnblind: function (n, o, a, i, l, u, c) {
          if (
            a.length !== s ||
            i.length !== e ||
            l.length !== e ||
            u.length !== e
          )
            throw r("err")(
              "WAWebTheiaVoprfJsEd25519: invalid unblind input length",
            );
          if (c && (n == null || o == null || !oe(n, o, K, l, u, i)))
            throw r("err")(
              "WAWebTheiaVoprfJsEd25519: DLEQ proof verification failed",
            );
          var t = ee(a),
            d = H(t, i);
          return { unblindedElement: d };
        },
        clientFinalize: function (n, o) {
          if (o.length !== e)
            throw r("err")(
              "WAWebTheiaVoprfJsEd25519: invalid unblindedElement length",
            );
          return { finalEvaluation: X(n, o) };
        },
      };
    }
    ((l.hashToCurve_TEST_ONLY = ae),
      (l.pointScalarMult_TEST_ONLY = ie),
      (l.createWAWebTheiaVoprfJsEd25519Module = le));
  },
  98,
);
