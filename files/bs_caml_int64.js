__d(
  "bs_caml_int64",
  ["bs_caml"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e;
    function l(e, t) {
      return [t, e >>> 0];
    }
    var s = [-2147483648, 0],
      u = [2147483647, 4294967295],
      c = [0, 1],
      d = [0, 0],
      m = [-1, 4294967295];
    function p(e) {
      return (e & -2147483648) !== 0;
    }
    function _(e) {
      return (e & -2147483648) === 0;
    }
    function f(e) {
      var t = e[1],
        n = e[0],
        r = (t + 1) | 0;
      return [(n + (r === 0 ? 1 : 0)) | 0, r >>> 0];
    }
    function g(e) {
      var t = ((e[1] ^ -1) + 1) | 0;
      return [((e[0] ^ -1) + (t === 0 ? 1 : 0)) | 0, t >>> 0];
    }
    function h(e, t, n) {
      var r = e[1],
        o = (r + t) | 0,
        a = (p(r) && (p(t) || _(o))) || (p(t) && _(o)) ? 1 : 0;
      return [(e[0] + n + a) | 0, o >>> 0];
    }
    function y(e, t) {
      return h(e, t[1], t[0]);
    }
    function C(t, r) {
      return r !== null ? (e || (e = n("bs_caml"))).i64_eq(t, r) : !1;
    }
    function b(t, r) {
      return r !== void 0 ? (e || (e = n("bs_caml"))).i64_eq(t, r) : !1;
    }
    function v(t, r) {
      return r == null ? !1 : (e || (e = n("bs_caml"))).i64_eq(t, r);
    }
    function S(e, t, n) {
      var r = ((t ^ -1) + 1) >>> 0,
        o = ((n ^ -1) + (r === 0 ? 1 : 0)) | 0;
      return h(e, r, o);
    }
    function R(e, t) {
      return S(e, t[1], t[0]);
    }
    function L(e, t) {
      if (t === 0) return e;
      var n = e[1];
      return t >= 32
        ? [n << ((t - 32) | 0), 0]
        : [(n >>> ((32 - t) | 0)) | (e[0] << t), (n << t) >>> 0];
    }
    function E(e, t) {
      if (t === 0) return e;
      var n = e[0],
        r = (t - 32) | 0;
      return r === 0
        ? [0, n >>> 0]
        : r > 0
          ? [0, n >>> r]
          : [n >>> t, ((n << (-r | 0)) | (e[1] >>> t)) >>> 0];
    }
    function k(e, t) {
      if (t === 0) return e;
      var n = e[0];
      return t < 32
        ? [n >> t, ((n << ((32 - t) | 0)) | (e[1] >>> t)) >>> 0]
        : [n >= 0 ? 0 : -1, (n >> ((t - 32) | 0)) >>> 0];
    }
    function I(e) {
      return e[0] !== 0 ? !1 : e[1] === 0;
    }
    function T(e, t) {
      for (;;) {
        var n = t,
          r = e,
          o,
          a = r[0],
          i = 0,
          l = 0,
          u = 0;
        if (a !== 0) u = 4;
        else {
          if (r[1] === 0) return d;
          u = 4;
        }
        if (u === 4)
          if (n[0] !== 0) l = 3;
          else {
            if (n[1] === 0) return d;
            l = 3;
          }
        if (
          (l === 3 && (a !== -2147483648 || r[1] !== 0 ? (i = 2) : (o = n[1])),
          i === 2)
        ) {
          var c = n[0],
            m = r[1],
            p = 0;
          if ((c !== -2147483648 || n[1] !== 0 ? (p = 3) : (o = m), p === 3)) {
            var _ = n[1];
            if (a < 0) {
              if (c >= 0) return g(T(g(r), n));
              ((t = g(n)), (e = g(r)));
              continue;
            }
            if (c < 0) return g(T(r, g(n)));
            var f = a >>> 16,
              h = a & 65535,
              y = m >>> 16,
              C = m & 65535,
              b = c >>> 16,
              v = c & 65535,
              S = _ >>> 16,
              R = _ & 65535,
              L = 0,
              E = 0,
              k = 0,
              I = C * R;
            return (
              (k = (I >>> 16) + y * R),
              (E = k >>> 16),
              (k = (k & 65535) + C * S),
              (E = E + (k >>> 16) + h * R),
              (L = E >>> 16),
              (E = (E & 65535) + y * S),
              (L = L + (E >>> 16)),
              (E = (E & 65535) + C * v),
              (L = L + (E >>> 16)),
              (E = E & 65535),
              (L = (L + (f * R + h * S + y * v + C * b)) & 65535),
              [E | (L << 16), ((I & 65535) | ((k & 65535) << 16)) >>> 0]
            );
          }
        }
        return (o & 1) === 0 ? d : s;
      }
    }
    function D(e, t) {
      return [e[0] ^ t[0], (e[1] ^ t[1]) >>> 0];
    }
    function x(e, t) {
      return [e[0] | t[0], (e[1] | t[1]) >>> 0];
    }
    function $(e, t) {
      return [e[0] & t[0], (e[1] & t[1]) >>> 0];
    }
    function P(e) {
      return e[0] * 4294967296 + e[1];
    }
    function N(e) {
      if (isNaN(e) || !isFinite(e)) return d;
      if (e <= -9223372036854776e3) return s;
      if (e + 1 >= 9223372036854776e3) return u;
      if (e < 0) return g(N(-e));
      var t = (e / 4294967296) | 0,
        n = (e % 4294967296) | 0;
      return [t, n >>> 0];
    }
    function M(e) {
      var t = e[0],
        n = t >> 21;
      return n === 0 ? !0 : n === -1 ? !(e[1] === 0 && t === -2097152) : !1;
    }
    function w(t) {
      if (M(t)) return String(P(t));
      if (t[0] < 0)
        return (e || (e = n("bs_caml"))).i64_eq(t, s)
          ? "-9223372036854775808"
          : "-" + w(g(t));
      var r = N(Math.floor(P(t) / 10)),
        o = r[1],
        a = r[0],
        i = S(
          S(t, o << 3, (o >>> 29) | (a << 3)),
          o << 1,
          (o >>> 31) | (a << 1),
        ),
        l = i[1],
        u = i[0];
      if (l === 0 && u === 0) return w(r) + "0";
      if (u < 0) {
        var c = ((l ^ -1) + 1) >>> 0,
          d = Math.ceil(c / 10),
          m = 10 * d - c;
        return w(S(r, d | 0, 0)) + String(m | 0);
      }
      var p = Math.floor(l / 10),
        _ = l - 10 * p;
      return w(h(r, p | 0, 0)) + String(_ | 0);
    }
    function A(t, r) {
      for (;;) {
        var o = r,
          a = t,
          i = a[0],
          l = 0,
          u = 0;
        if (o[0] !== 0 || o[1] !== 0) u = 2;
        else throw { RE_EXN_ID: "Division_by_zero", Error: new Error() };
        if (u === 2)
          if (i !== -2147483648)
            if (i !== 0) l = 1;
            else {
              if (a[1] === 0) return d;
              l = 1;
            }
          else if (a[1] !== 0) l = 1;
          else {
            if (
              (e || (e = n("bs_caml"))).i64_eq(o, c) ||
              (e || (e = n("bs_caml"))).i64_eq(o, m)
            )
              return a;
            if ((e || (e = n("bs_caml"))).i64_eq(o, s)) return c;
            var p = k(a, 1),
              _ = L(A(p, o), 1),
              f = 0;
            if (_[0] !== 0) f = 3;
            else {
              if (_[1] === 0) return o[0] < 0 ? c : g(c);
              f = 3;
            }
            if (f === 3) {
              var h = R(a, T(o, _));
              return y(_, A(h, o));
            }
          }
        if (l === 1) {
          var C = o[0],
            b = 0;
          if (C !== -2147483648) b = 2;
          else {
            if (o[1] === 0) return d;
            b = 2;
          }
          if (b === 2) {
            if (i < 0) {
              if (C >= 0) return g(A(g(a), o));
              ((r = g(o)), (t = g(a)));
              continue;
            }
            if (C < 0) return g(A(a, g(o)));
            for (var v = d, S = a; (e || (e = n("bs_caml"))).i64_ge(S, o); ) {
              for (
                var E = Math.floor(P(S) / P(o)),
                  D = 1 > E ? 1 : E,
                  x = Math.ceil(Math.log(D) / Math.LN2),
                  $ = x <= 48 ? 1 : Math.pow(2, x - 48),
                  M = N(D),
                  w = T(M, o);
                w[0] < 0 || (e || (e = n("bs_caml"))).i64_gt(w, S);
              )
                ((D = D - $), (M = N(D)), (w = T(M, o)));
              (I(M) && (M = c), (v = y(v, M)), (S = R(S, w)));
            }
            return v;
          }
        }
      }
    }
    function F(e, t) {
      return R(e, T(A(e, t), t));
    }
    function O(e, t) {
      var n = A(e, t);
      return [n, R(e, T(n, t))];
    }
    function B(e, t) {
      var n = t[0],
        r = e[0],
        o = r < n ? -1 : r === n ? 0 : 1;
      if (o !== 0) return o;
      var a = t[1],
        i = e[1];
      return i < a ? -1 : i === a ? 0 : 1;
    }
    function W(e) {
      return [e < 0 ? -1 : 0, e >>> 0];
    }
    function q(e) {
      return e[1] | 0;
    }
    function U(e) {
      var t = e[1],
        n = e[0],
        r = function (t) {
          return (t >>> 0).toString(16);
        };
      if (n === 0 && t === 0) return "0";
      if (t === 0) return r(n) + "00000000";
      if (n === 0) return r(t);
      var o = r(t),
        a = (8 - o.length) | 0;
      return a <= 0 ? r(n) + o : r(n) + ("0".repeat(a) + o);
    }
    function V(e) {
      return [2147483647 & e[0], e[1]];
    }
    function H(e) {
      return (function (e, t) {
        return new Float64Array(new Int32Array([e, t]).buffer)[0];
      })(e[1], e[0]);
    }
    function G(e) {
      var t = (function (e) {
        return new Int32Array(new Float64Array([e]).buffer);
      })(e);
      return [t[1], t[0] >>> 0];
    }
    ((i.mk = l),
      (i.succ = f),
      (i.min_int = s),
      (i.max_int = u),
      (i.one = c),
      (i.zero = d),
      (i.neg_one = m),
      (i.of_int32 = W),
      (i.to_int32 = q),
      (i.add = y),
      (i.neg = g),
      (i.sub = R),
      (i.lsl_ = L),
      (i.lsr_ = E),
      (i.asr_ = k),
      (i.is_zero = I),
      (i.mul = T),
      (i.xor = D),
      (i.or_ = x),
      (i.and_ = $),
      (i.equal_null = C),
      (i.equal_undefined = b),
      (i.equal_nullable = v),
      (i.to_float = P),
      (i.of_float = N),
      (i.div = A),
      (i.mod_ = F),
      (i.compare = B),
      (i.float_of_bits = H),
      (i.bits_of_float = G),
      (i.div_mod = O),
      (i.to_hex = U),
      (i.discard_sign = V),
      (i.to_string = w));
  },
  null,
);
