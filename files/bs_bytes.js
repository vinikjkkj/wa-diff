__d(
  "bs_bytes",
  ["bs_caml", "bs_caml_bytes", "bs_caml_js_exceptions", "bs_char", "bs_curry"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e, l;
    function s(e, t) {
      var r = n("bs_caml_bytes").caml_create_bytes(e);
      return (n("bs_caml_bytes").caml_fill_bytes(r, 0, e, t), r);
    }
    function u(e, t) {
      for (var r = n("bs_caml_bytes").caml_create_bytes(e), o = 0; o < e; ++o)
        r[o] = n("bs_curry")._1(t, o);
      return r;
    }
    var c = [];
    function d(e) {
      var t = e.length,
        r = n("bs_caml_bytes").caml_create_bytes(t);
      return (n("bs_caml_bytes").caml_blit_bytes(e, 0, r, 0, t), r);
    }
    function m(e) {
      return n("bs_caml_bytes").bytes_to_string(d(e));
    }
    function p(e) {
      return d(n("bs_caml_bytes").bytes_of_string(e));
    }
    function _(e, t, r) {
      if (t < 0 || r < 0 || t > ((e.length - r) | 0))
        throw {
          RE_EXN_ID: "Invalid_argument",
          _1: "String.sub / Bytes.sub",
          Error: new Error(),
        };
      var o = n("bs_caml_bytes").caml_create_bytes(r);
      return (n("bs_caml_bytes").caml_blit_bytes(e, t, o, 0, r), o);
    }
    function f(e, t, r) {
      return n("bs_caml_bytes").bytes_to_string(_(e, t, r));
    }
    function g(e, t) {
      var n = (e + t) | 0,
        r = e < 0,
        o = t < 0,
        a = n < 0;
      if (r) {
        if (!o || a) return n;
        throw {
          RE_EXN_ID: "Invalid_argument",
          _1: "Bytes.extend",
          Error: new Error(),
        };
      }
      if (o) return n;
      if (a)
        throw {
          RE_EXN_ID: "Invalid_argument",
          _1: "Bytes.extend",
          Error: new Error(),
        };
      return n;
    }
    function h(e, t, r) {
      var o = g(g(e.length, t), r),
        a = n("bs_caml_bytes").caml_create_bytes(o),
        i = t < 0 ? [-t | 0, 0] : [0, t],
        s = i[1],
        u = i[0],
        c = (l || (l = n("bs_caml"))).caml_int_min(
          (e.length - u) | 0,
          (o - s) | 0,
        );
      return (c > 0 && n("bs_caml_bytes").caml_blit_bytes(e, u, a, s, c), a);
    }
    function y(e, t, r, o) {
      if (t < 0 || r < 0 || t > ((e.length - r) | 0))
        throw {
          RE_EXN_ID: "Invalid_argument",
          _1: "String.fill / Bytes.fill",
          Error: new Error(),
        };
      return n("bs_caml_bytes").caml_fill_bytes(e, t, r, o);
    }
    function C(e, t, r, o, a) {
      if (
        a < 0 ||
        t < 0 ||
        t > ((e.length - a) | 0) ||
        o < 0 ||
        o > ((r.length - a) | 0)
      )
        throw {
          RE_EXN_ID: "Invalid_argument",
          _1: "Bytes.blit",
          Error: new Error(),
        };
      return n("bs_caml_bytes").caml_blit_bytes(e, t, r, o, a);
    }
    function b(e, t, r, o, a) {
      if (
        a < 0 ||
        t < 0 ||
        t > ((e.length - a) | 0) ||
        o < 0 ||
        o > ((r.length - a) | 0)
      )
        throw {
          RE_EXN_ID: "Invalid_argument",
          _1: "String.blit / Bytes.blit_string",
          Error: new Error(),
        };
      return n("bs_caml_bytes").caml_blit_string(e, t, r, o, a);
    }
    function v(e, t) {
      for (var r = 0, o = t.length; r < o; ++r) n("bs_curry")._1(e, t[r]);
    }
    function S(e, t) {
      for (var r = 0, o = t.length; r < o; ++r) n("bs_curry")._2(e, r, t[r]);
    }
    function R(e, t) {
      if (e >= t) return e;
      throw {
        RE_EXN_ID: "Invalid_argument",
        _1: "Bytes.concat",
        Error: new Error(),
      };
    }
    function L(e, t, n) {
      for (;;) {
        var r = n,
          o = e;
        if (!r) return o;
        var a = r.tl,
          i = r.hd;
        if (!a) return (i.length + o) | 0;
        ((n = a), (e = R((((i.length + t) | 0) + o) | 0, o)));
      }
    }
    function E(e, t) {
      if (!t) return c;
      for (
        var r = e.length,
          o = n("bs_caml_bytes").caml_create_bytes(L(0, r, t)),
          a = 0,
          i = t;
        ;
      ) {
        var l = i,
          s = a;
        if (!l) return o;
        var u = l.tl,
          d = l.hd;
        if (u) {
          (n("bs_caml_bytes").caml_blit_bytes(d, 0, o, s, d.length),
            n("bs_caml_bytes").caml_blit_bytes(e, 0, o, (s + d.length) | 0, r),
            (i = u),
            (a = (((s + d.length) | 0) + r) | 0));
          continue;
        }
        return (n("bs_caml_bytes").caml_blit_bytes(d, 0, o, s, d.length), o);
      }
    }
    function k(e, t) {
      var r = e.length,
        o = t.length,
        a = n("bs_caml_bytes").caml_create_bytes((r + o) | 0);
      return (
        n("bs_caml_bytes").caml_blit_bytes(e, 0, a, 0, r),
        n("bs_caml_bytes").caml_blit_bytes(t, 0, a, r, o),
        a
      );
    }
    function I(e) {
      return e > 13 || e < 9 ? e === 32 : e !== 11;
    }
    function T(e) {
      for (var t = e.length, n = 0; n < t && I(e[n]); ) n = (n + 1) | 0;
      for (var r = (t - 1) | 0; r >= n && I(e[r]); ) r = (r - 1) | 0;
      return r >= n ? _(e, n, (((r - n) | 0) + 1) | 0) : c;
    }
    function D(e) {
      for (var t = 0, r = 0, o = e.length; r < o; ++r) {
        var a = e[r];
        t =
          (t +
            (a >= 32
              ? a > 92 || a < 34
                ? a >= 127
                  ? 4
                  : 1
                : a > 91 || a < 35
                  ? 2
                  : 1
              : a >= 11
                ? a !== 13
                  ? 4
                  : 2
                : a >= 8
                  ? 2
                  : 4)) |
          0;
      }
      if (t === e.length) return d(e);
      var i = n("bs_caml_bytes").caml_create_bytes(t);
      t = 0;
      for (var l = 0, s = e.length; l < s; ++l) {
        var u = e[l],
          c = 0;
        if (u >= 35) u !== 92 ? (u >= 127 ? (c = 1) : (i[t] = u)) : (c = 2);
        else if (u >= 32) u >= 34 ? (c = 2) : (i[t] = u);
        else if (u >= 14) c = 1;
        else
          switch (u) {
            case 8:
              ((i[t] = 92), (t = (t + 1) | 0), (i[t] = 98));
              break;
            case 9:
              ((i[t] = 92), (t = (t + 1) | 0), (i[t] = 116));
              break;
            case 10:
              ((i[t] = 92), (t = (t + 1) | 0), (i[t] = 110));
              break;
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
            case 11:
            case 12:
              c = 1;
              break;
            case 13:
              ((i[t] = 92), (t = (t + 1) | 0), (i[t] = 114));
              break;
          }
        switch (c) {
          case 1:
            ((i[t] = 92),
              (t = (t + 1) | 0),
              (i[t] = (48 + ((u / 100) | 0)) | 0),
              (t = (t + 1) | 0),
              (i[t] = (48 + (((u / 10) | 0) % 10)) | 0),
              (t = (t + 1) | 0),
              (i[t] = (48 + (u % 10)) | 0));
            break;
          case 2:
            ((i[t] = 92), (t = (t + 1) | 0), (i[t] = u));
            break;
        }
        t = (t + 1) | 0;
      }
      return i;
    }
    function x(e, t) {
      var r = t.length;
      if (r === 0) return t;
      for (var o = n("bs_caml_bytes").caml_create_bytes(r), a = 0; a < r; ++a)
        o[a] = n("bs_curry")._1(e, t[a]);
      return o;
    }
    function $(e, t) {
      var r = t.length;
      if (r === 0) return t;
      for (var o = n("bs_caml_bytes").caml_create_bytes(r), a = 0; a < r; ++a)
        o[a] = n("bs_curry")._2(e, a, t[a]);
      return o;
    }
    function P(e) {
      return x(n("bs_char").uppercase_ascii, e);
    }
    function N(e) {
      return x(n("bs_char").lowercase_ascii, e);
    }
    function M(e, t) {
      if (t.length === 0) return t;
      var r = d(t);
      return ((r[0] = n("bs_curry")._1(e, t[0])), r);
    }
    function w(e) {
      return M(n("bs_char").uppercase_ascii, e);
    }
    function A(e) {
      return M(n("bs_char").lowercase_ascii, e);
    }
    function F(e, t, n, r) {
      for (;;) {
        var o = n;
        if (o >= t) throw { RE_EXN_ID: "Not_found", Error: new Error() };
        if (e[o] === r) return o;
        n = (o + 1) | 0;
      }
    }
    function O(e, t) {
      return F(e, e.length, 0, t);
    }
    function B(e, t, n, r) {
      for (;;) {
        var o = n;
        if (o >= t) return;
        if (e[o] === r) return o;
        n = (o + 1) | 0;
      }
    }
    function W(e, t) {
      return B(e, e.length, 0, t);
    }
    function q(e, t, n) {
      var r = e.length;
      if (t < 0 || t > r)
        throw {
          RE_EXN_ID: "Invalid_argument",
          _1: "String.index_from / Bytes.index_from",
          Error: new Error(),
        };
      return F(e, r, t, n);
    }
    function U(e, t, n) {
      var r = e.length;
      if (t < 0 || t > r)
        throw {
          RE_EXN_ID: "Invalid_argument",
          _1: "String.index_from_opt / Bytes.index_from_opt",
          Error: new Error(),
        };
      return B(e, r, t, n);
    }
    function V(e, t, n) {
      for (;;) {
        var r = t;
        if (r < 0) throw { RE_EXN_ID: "Not_found", Error: new Error() };
        if (e[r] === n) return r;
        t = (r - 1) | 0;
      }
    }
    function H(e, t) {
      return V(e, (e.length - 1) | 0, t);
    }
    function G(e, t, n) {
      if (t < -1 || t >= e.length)
        throw {
          RE_EXN_ID: "Invalid_argument",
          _1: "String.rindex_from / Bytes.rindex_from",
          Error: new Error(),
        };
      return V(e, t, n);
    }
    function z(e, t, n) {
      for (;;) {
        var r = t;
        if (r < 0) return;
        if (e[r] === n) return r;
        t = (r - 1) | 0;
      }
    }
    function j(e, t) {
      return z(e, (e.length - 1) | 0, t);
    }
    function K(e, t, n) {
      if (t < -1 || t >= e.length)
        throw {
          RE_EXN_ID: "Invalid_argument",
          _1: "String.rindex_from_opt / Bytes.rindex_from_opt",
          Error: new Error(),
        };
      return z(e, t, n);
    }
    function Q(e, t, r) {
      var o = e.length;
      if (t < 0 || t > o)
        throw {
          RE_EXN_ID: "Invalid_argument",
          _1: "String.contains_from / Bytes.contains_from",
          Error: new Error(),
        };
      try {
        return (F(e, o, t, r), !0);
      } catch (e) {
        var a = n("bs_caml_js_exceptions").internalToOCamlException(e);
        if (a.RE_EXN_ID === "Not_found") return !1;
        throw a;
      }
    }
    function X(e, t) {
      return Q(e, 0, t);
    }
    function Y(e, t, r) {
      if (t < 0 || t >= e.length)
        throw {
          RE_EXN_ID: "Invalid_argument",
          _1: "String.rcontains_from / Bytes.rcontains_from",
          Error: new Error(),
        };
      try {
        return (V(e, t, r), !0);
      } catch (e) {
        var o = n("bs_caml_js_exceptions").internalToOCamlException(e);
        if (o.RE_EXN_ID === "Not_found") return !1;
        throw o;
      }
    }
    var J = (e = n("bs_caml_bytes")).caml_bytes_compare;
    function Z(e) {
      return x(n("bs_char").uppercase, e);
    }
    function ee(e) {
      return x(n("bs_char").lowercase, e);
    }
    function te(e) {
      return M(n("bs_char").uppercase, e);
    }
    function ne(e) {
      return M(n("bs_char").lowercase, e);
    }
    var re = e.caml_bytes_equal,
      oe = e.bytes_to_string,
      ae = e.bytes_of_string;
    ((i.make = s),
      (i.init = u),
      (i.empty = c),
      (i.copy = d),
      (i.of_string = p),
      (i.to_string = m),
      (i.sub = _),
      (i.sub_string = f),
      (i.extend = h),
      (i.fill = y),
      (i.blit = C),
      (i.blit_string = b),
      (i.concat = E),
      (i.cat = k),
      (i.iter = v),
      (i.iteri = S),
      (i.map = x),
      (i.mapi = $),
      (i.trim = T),
      (i.escaped = D),
      (i.index = O),
      (i.index_opt = W),
      (i.rindex = H),
      (i.rindex_opt = j),
      (i.index_from = q),
      (i.index_from_opt = U),
      (i.rindex_from = G),
      (i.rindex_from_opt = K),
      (i.contains = X),
      (i.contains_from = Q),
      (i.rcontains_from = Y),
      (i.uppercase = Z),
      (i.lowercase = ee),
      (i.capitalize = te),
      (i.uncapitalize = ne),
      (i.uppercase_ascii = P),
      (i.lowercase_ascii = N),
      (i.capitalize_ascii = w),
      (i.uncapitalize_ascii = A),
      (i.compare = J),
      (i.equal = re),
      (i.unsafe_to_string = oe),
      (i.unsafe_of_string = ae));
  },
  null,
);
