__d(
  "WACryptoEd25519",
  ["WACryptoPrimitives", "err"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = null;
    function s(t) {
      var n = e;
      e = [];
      try {
        return t();
      } finally {
        ((e != null ? e : []).forEach(function (e) {
          return void e.fill(0);
        }),
          (e = n));
      }
    }
    function u(t, n) {
      if (e == null) throw r("err")("allocate called outside of active scope");
      return new t(n);
    }
    function c(e, t, n) {
      o("WACryptoPrimitives").lowlevel.crypto_hash(e, t, n);
    }
    function d(e, t) {
      for (var n = 0; n < 64; ++n) ((t[n] = e[n]), (e[n] = 0));
      (_(e, t), t.fill(0));
    }
    function m(e, t) {
      var n = [p(), p(), p(), p()];
      (o("WACryptoPrimitives").lowlevel.scalarbase(n, t), j(e, n));
    }
    function p(e) {
      var t = u(Float64Array, 16);
      if (e) {
        if (e.length > 16)
          throw r("err")(
            "Incorrect initialiser array provided to the fieldElement",
          );
        for (var n = 0; n < e.length; n++) t[n] = e[n];
      }
      return t;
    }
    function _(e, t) {
      o("WACryptoPrimitives").lowlevel.modL(e, t);
    }
    var f = function () {
        return p([0]);
      },
      g = function () {
        return p([1]);
      },
      h = function () {
        return p([2]);
      },
      y = function () {
        return p([
          41136, 18958, 6951, 50414, 58488, 44335, 6150, 12099, 55207, 15867,
          153, 11085, 57099, 20417, 9344, 11139,
        ]);
      };
    function C() {
      return [p(), p(), p(), p()];
    }
    function b() {
      return [p(), p(), p(), p()];
    }
    function v() {
      return [p(), p(), p()];
    }
    function S(e, t) {
      for (var n = 0, r = t; r > 0; ) {
        var o = r % 65536;
        ((e[n] = o), (r = (r - o) / 65536), n++);
      }
    }
    function R(e, t) {
      return Q(e, t) ? 0 : 1;
    }
    function L(e) {
      var t = o("WACryptoPrimitives").lowlevel.pack25519,
        n = u(Uint8Array, 32);
      return (t(n, e), n[0] & 1);
    }
    function E(e, t) {
      var n = o("WACryptoPrimitives").lowlevel.M,
        r = o("WACryptoPrimitives").lowlevel.S,
        a = h(),
        i = p();
      (r(i, t), n(e, a, i));
    }
    function k(e, t) {
      var n = o("WACryptoPrimitives").lowlevel.A,
        r = o("WACryptoPrimitives").lowlevel.M,
        a = o("WACryptoPrimitives").lowlevel.S,
        i = f(),
        l = g(),
        s = p(),
        u = p(),
        c = p(),
        d = p();
      (S(i, 486662), a(s, t), r(u, i, t), n(c, s, u), n(d, c, l), r(e, t, d));
    }
    function I(e, t, n) {
      n === 1 && e.set(t);
    }
    var T = new Uint8Array([
      176, 160, 14, 74, 39, 27, 238, 196, 120, 228, 47, 173, 6, 24, 67, 47, 167,
      215, 251, 61, 153, 0, 77, 43, 11, 223, 193, 79, 128, 36, 131, 43,
    ]);
    function D(e, t) {
      var n,
        r = (n = o("WACryptoPrimitives")).lowlevel.M,
        a = n.lowlevel.S,
        i = n.lowlevel.pow2523,
        l = n.lowlevel.unpack25519,
        s = p();
      l(s, T);
      var u = p();
      i(u, t);
      var c = p();
      r(c, t, u);
      var d = p();
      a(d, c);
      var m = p();
      (r(m, c, s), I(c, m, 1 ^ R(d, t)), e.set(c));
    }
    function x(e, t) {
      var n = o("WACryptoPrimitives").lowlevel.A,
        r = o("WACryptoPrimitives").lowlevel.M,
        a = o("WACryptoPrimitives").lowlevel.Z,
        i = g(),
        l = p(),
        s = p(),
        u = p();
      (a(l, t, i), n(s, t, i), K(u, s), r(e, l, u));
    }
    function $(e, t) {
      var n = o("WACryptoPrimitives").lowlevel.Z,
        r = f();
      n(e, r, t);
    }
    function P(e, t) {
      var n = o("WACryptoPrimitives").lowlevel.M;
      (n(e[0], t[0], t[3]), n(e[1], t[1], t[2]), n(e[2], t[2], t[3]));
    }
    function N(e, t) {
      var n = o("WACryptoPrimitives").lowlevel.M;
      (n(e[0], t[0], t[3]),
        n(e[1], t[1], t[2]),
        n(e[2], t[2], t[3]),
        n(e[3], t[0], t[1]));
    }
    function M(e, t) {
      var n = o("WACryptoPrimitives").lowlevel.A,
        r = o("WACryptoPrimitives").lowlevel.S,
        a = o("WACryptoPrimitives").lowlevel.Z;
      (r(e[0], t[0]), r(e[2], t[1]), E(e[3], t[2]), n(e[1], t[0], t[1]));
      var i = p();
      (r(i, e[1]),
        n(e[1], e[2], e[0]),
        a(e[2], e[2], e[0]),
        a(e[0], i, e[1]),
        a(e[3], e[3], e[2]));
    }
    var w = new Uint8Array([
      6, 126, 69, 255, 170, 4, 110, 204, 130, 26, 125, 75, 209, 211, 161, 197,
      126, 79, 252, 3, 220, 8, 123, 210, 187, 6, 160, 96, 244, 237, 38, 15,
    ]);
    function A(e, t, n) {
      var r = o("WACryptoPrimitives").lowlevel.M,
        a = o("WACryptoPrimitives").lowlevel.unpack25519,
        i = p();
      a(i, w);
      var l = p();
      x(l, t);
      var s = p();
      k(s, t);
      var u = p();
      D(u, s);
      var c = p();
      r(c, t, i);
      var d = p();
      K(d, u);
      var m = p();
      r(m, c, d);
      var _ = p();
      ($(_, m),
        I(m, _, L(m) ^ n),
        e[0].set(m),
        e[1].set(l),
        e[2].set(g()),
        r(e[3], e[0], e[1]));
    }
    function F(e, t) {
      (e[0].set(t[0]), e[1].set(t[1]), e[2].set(t[2]));
    }
    function O(e, t) {
      var n = v();
      (F(n, t), M(e, n));
    }
    function B(e, t) {
      var n = b(),
        r = v();
      (O(n, t), P(r, n), M(n, r), P(r, n), M(n, r), N(e, n));
    }
    function W(e) {
      var t,
        n = (t = o("WACryptoPrimitives")).lowlevel.M,
        r = t.lowlevel.S,
        a = t.lowlevel.pack25519,
        i = t.lowlevel.pow2523,
        l = p(),
        s = p(),
        u = p(),
        c = p(),
        d = p();
      (i(l, e), r(s, l), r(u, s), n(c, u, e), n(d, c, e));
      var m = new Uint8Array(32);
      return (a(m, d), 1 & m[31]);
    }
    function q(e, t) {
      ($(e[0], t[0]), e[1].set(t[1]), e[2].set(t[2]), $(e[3], t[3]));
    }
    function U(e, t) {
      var n = C(),
        r = X(n, t);
      return r !== 0 ? -1 : (q(e, n), 0);
    }
    function V(e, t) {
      var n = o("WACryptoPrimitives").lowlevel.A,
        r = o("WACryptoPrimitives").lowlevel.M,
        a = t,
        i = g(),
        l = f();
      S(l, 486662);
      var s = p();
      E(s, a);
      var u = p();
      n(u, s, i);
      var c = p();
      K(c, u);
      var d = p();
      r(d, c, l);
      var m = p();
      $(m, d);
      var _ = p();
      k(_, m);
      var h = W(_),
        y = p([0]);
      I(y, l, h);
      var C = p();
      n(C, m, y);
      var b = p();
      ($(b, C), I(C, b, h), e.set(C));
    }
    function H(e) {
      var t = o("WACryptoPrimitives").lowlevel.unpack25519,
        n = o("WACryptoPrimitives").hash(e),
        r = (n[31] & 128) >> 7;
      n[31] &= 127;
      var a = p();
      t(a, n);
      var i = p();
      G(i, a);
      var l = C();
      A(l, i, r);
      var s = C();
      return (B(s, l), s);
    }
    function G(e, t) {
      return s(function () {
        return V(e, t);
      });
    }
    function z(e) {
      return s(function () {
        return H(e);
      });
    }
    function j(e, t) {
      var n = p(),
        r = p(),
        a = p(),
        i = o("WACryptoPrimitives").lowlevel.M,
        l = o("WACryptoPrimitives").lowlevel.pack25519;
      (K(a, t[2]), i(n, t[0], a), i(r, t[1], a), l(e, r));
      var s = new Uint8Array(32);
      (l(s, n), (e[31] ^= (s[0] & 1) << 7));
    }
    function K(e, t) {
      var n = p();
      n.set(t);
      for (
        var r = o("WACryptoPrimitives").lowlevel.M,
          a = o("WACryptoPrimitives").lowlevel.S,
          i = 253;
        i >= 0;
        --i
      )
        (a(n, n), i !== 2 && i !== 4 && r(n, n, t));
      e.set(n);
    }
    function Q(e, t) {
      var n = o("WACryptoPrimitives").lowlevel.crypto_verify_32,
        r = o("WACryptoPrimitives").lowlevel.pack25519,
        a = new Uint8Array(32),
        i = new Uint8Array(32);
      return (r(a, e), r(i, t), n(a, 0, i, 0));
    }
    function X(e, t) {
      var n,
        r = (n = o("WACryptoPrimitives")).lowlevel.A,
        a = n.lowlevel.D,
        i = n.lowlevel.M,
        l = n.lowlevel.S,
        s = n.lowlevel.Z,
        u = n.lowlevel.pow2523,
        c = n.lowlevel.set25519,
        d = n.lowlevel.unpack25519,
        m = p(),
        _ = p(),
        h = p(),
        C = p(),
        b = p(),
        v = p(),
        S = p();
      return (
        c(e[2], g()),
        d(e[1], t),
        l(h, e[1]),
        i(C, h, a),
        s(h, h, e[2]),
        r(C, e[2], C),
        l(b, C),
        l(v, b),
        i(S, v, b),
        i(m, S, h),
        i(m, m, C),
        u(m, m),
        i(m, m, h),
        i(m, m, C),
        i(m, m, C),
        i(e[0], m, C),
        l(_, e[0]),
        i(_, _, C),
        Q(_, h) && i(e[0], e[0], y()),
        l(_, e[0]),
        i(_, _, C),
        Q(_, h)
          ? -1
          : (Y(e[0]) === t[31] >> 7 && s(e[0], f(), e[0]),
            i(e[3], e[0], e[1]),
            0)
      );
    }
    function Y(e) {
      var t = o("WACryptoPrimitives").lowlevel.pack25519,
        n = new Uint8Array(32);
      return (t(n, e), n[0] & 1);
    }
    ((l.runInAllocationScope = s),
      (l.allocate = u),
      (l.hashSha512 = c),
      (l.reduce = d),
      (l.scalarmultBase = m),
      (l.fieldElement = p),
      (l.modL = _),
      (l.p3Element = C),
      (l.unpack = U),
      (l.elligator = G),
      (l.hashToPoint = z),
      (l.pack = j),
      (l.inv25519 = K),
      (l.unpackneg = X));
  },
  98,
);
