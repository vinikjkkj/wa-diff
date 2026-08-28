__d(
  "bs_string",
  [
    "bs_bytes",
    "bs_caml",
    "bs_caml_bytes",
    "bs_caml_js_exceptions",
    "bs_caml_string",
    "bs_curry",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e;
    function l(e, t) {
      return n("bs_caml_bytes").bytes_to_string(n("bs_bytes").init(e, t));
    }
    function s(e, t, r) {
      return n("bs_caml_bytes").bytes_to_string(
        n("bs_bytes").sub(n("bs_caml_bytes").bytes_of_string(e), t, r),
      );
    }
    function u(e, t) {
      if (e >= t) return e;
      throw {
        RE_EXN_ID: "Invalid_argument",
        _1: "String.concat",
        Error: new Error(),
      };
    }
    function c(e, t, n) {
      for (;;) {
        var r = n,
          o = e;
        if (!r) return o;
        var a = r.tl,
          i = r.hd;
        if (!a) return (i.length + o) | 0;
        ((n = a), (e = u((((i.length + t) | 0) + o) | 0, o)));
      }
    }
    function d(e, t, r, o, a) {
      for (;;) {
        var i = a,
          l = t;
        if (!i) return e;
        var s = i.tl,
          u = i.hd;
        if (s) {
          (n("bs_caml_bytes").caml_blit_string(u, 0, e, l, u.length),
            n("bs_caml_bytes").caml_blit_string(r, 0, e, (l + u.length) | 0, o),
            (a = s),
            (t = (((l + u.length) | 0) + o) | 0));
          continue;
        }
        return (n("bs_caml_bytes").caml_blit_string(u, 0, e, l, u.length), e);
      }
    }
    function m(e, t) {
      if (!t) return "";
      var r = e.length;
      return n("bs_caml_bytes").bytes_to_string(
        d(n("bs_caml_bytes").caml_create_bytes(c(0, r, t)), 0, e, r, t),
      );
    }
    function p(e, t) {
      for (var r = 0, o = t.length; r < o; ++r)
        n("bs_curry")._1(e, t.charCodeAt(r));
    }
    function _(e, t) {
      for (var r = 0, o = t.length; r < o; ++r)
        n("bs_curry")._2(e, r, t.charCodeAt(r));
    }
    function f(e, t) {
      return n("bs_caml_bytes").bytes_to_string(
        n("bs_bytes").map(e, n("bs_caml_bytes").bytes_of_string(t)),
      );
    }
    function g(e, t) {
      return n("bs_caml_bytes").bytes_to_string(
        n("bs_bytes").mapi(e, n("bs_caml_bytes").bytes_of_string(t)),
      );
    }
    function h(e) {
      return e > 13 || e < 9 ? e === 32 : e !== 11;
    }
    function y(e) {
      return e === "" ||
        !(h(e.charCodeAt(0)) || h(e.charCodeAt((e.length - 1) | 0)))
        ? e
        : n("bs_caml_bytes").bytes_to_string(
            n("bs_bytes").trim(n("bs_caml_bytes").bytes_of_string(e)),
          );
    }
    function C(e) {
      var t = function (n) {
        for (;;) {
          var t = n;
          if (t >= e.length) return !1;
          var r = e.charCodeAt(t);
          if (r < 32) return !0;
          if (r > 92 || r < 34) {
            if (r >= 127) return !0;
            n = (t + 1) | 0;
            continue;
          }
          if (r > 91 || r < 35) return !0;
          n = (t + 1) | 0;
        }
      };
      return t(0)
        ? n("bs_caml_bytes").bytes_to_string(
            n("bs_bytes").escaped(n("bs_caml_bytes").bytes_of_string(e)),
          )
        : e;
    }
    function b(e, t, n, r) {
      for (;;) {
        var o = n;
        if (o >= t) throw { RE_EXN_ID: "Not_found", Error: new Error() };
        if (e.charCodeAt(o) === r) return o;
        n = (o + 1) | 0;
      }
    }
    function v(e, t) {
      return b(e, e.length, 0, t);
    }
    function S(e, t, n, r) {
      for (;;) {
        var o = n;
        if (o >= t) return;
        if (e.charCodeAt(o) === r) return o;
        n = (o + 1) | 0;
      }
    }
    function R(e, t) {
      return S(e, e.length, 0, t);
    }
    function L(e, t, n) {
      var r = e.length;
      if (t < 0 || t > r)
        throw {
          RE_EXN_ID: "Invalid_argument",
          _1: "String.index_from / Bytes.index_from",
          Error: new Error(),
        };
      return b(e, r, t, n);
    }
    function E(e, t, n) {
      var r = e.length;
      if (t < 0 || t > r)
        throw {
          RE_EXN_ID: "Invalid_argument",
          _1: "String.index_from_opt / Bytes.index_from_opt",
          Error: new Error(),
        };
      return S(e, r, t, n);
    }
    function k(e, t, n) {
      for (;;) {
        var r = t;
        if (r < 0) throw { RE_EXN_ID: "Not_found", Error: new Error() };
        if (e.charCodeAt(r) === n) return r;
        t = (r - 1) | 0;
      }
    }
    function I(e, t) {
      return k(e, (e.length - 1) | 0, t);
    }
    function T(e, t, n) {
      if (t < -1 || t >= e.length)
        throw {
          RE_EXN_ID: "Invalid_argument",
          _1: "String.rindex_from / Bytes.rindex_from",
          Error: new Error(),
        };
      return k(e, t, n);
    }
    function D(e, t, n) {
      for (;;) {
        var r = t;
        if (r < 0) return;
        if (e.charCodeAt(r) === n) return r;
        t = (r - 1) | 0;
      }
    }
    function x(e, t) {
      return D(e, (e.length - 1) | 0, t);
    }
    function $(e, t, n) {
      if (t < -1 || t >= e.length)
        throw {
          RE_EXN_ID: "Invalid_argument",
          _1: "String.rindex_from_opt / Bytes.rindex_from_opt",
          Error: new Error(),
        };
      return D(e, t, n);
    }
    function P(e, t, r) {
      var o = e.length;
      if (t < 0 || t > o)
        throw {
          RE_EXN_ID: "Invalid_argument",
          _1: "String.contains_from / Bytes.contains_from",
          Error: new Error(),
        };
      try {
        return (b(e, o, t, r), !0);
      } catch (e) {
        var a = n("bs_caml_js_exceptions").internalToOCamlException(e);
        if (a.RE_EXN_ID === "Not_found") return !1;
        throw a;
      }
    }
    function N(e, t) {
      return P(e, 0, t);
    }
    function M(e, t, r) {
      if (t < 0 || t >= e.length)
        throw {
          RE_EXN_ID: "Invalid_argument",
          _1: "String.rcontains_from / Bytes.rcontains_from",
          Error: new Error(),
        };
      try {
        return (k(e, t, r), !0);
      } catch (e) {
        var o = n("bs_caml_js_exceptions").internalToOCamlException(e);
        if (o.RE_EXN_ID === "Not_found") return !1;
        throw o;
      }
    }
    function w(e) {
      return n("bs_caml_bytes").bytes_to_string(
        n("bs_bytes").uppercase_ascii(n("bs_caml_bytes").bytes_of_string(e)),
      );
    }
    function A(e) {
      return n("bs_caml_bytes").bytes_to_string(
        n("bs_bytes").lowercase_ascii(n("bs_caml_bytes").bytes_of_string(e)),
      );
    }
    function F(e) {
      return n("bs_caml_bytes").bytes_to_string(
        n("bs_bytes").capitalize_ascii(n("bs_caml_bytes").bytes_of_string(e)),
      );
    }
    function O(e) {
      return n("bs_caml_bytes").bytes_to_string(
        n("bs_bytes").uncapitalize_ascii(n("bs_caml_bytes").bytes_of_string(e)),
      );
    }
    var B = (e || (e = n("bs_caml"))).caml_string_compare;
    function W(e, t) {
      for (var n = 0, r = t.length, o = (t.length - 1) | 0; o >= 0; --o)
        t.charCodeAt(o) === e &&
          ((n = { hd: s(t, (o + 1) | 0, (((r - o) | 0) - 1) | 0), tl: n }),
          (r = o));
      return { hd: s(t, 0, r), tl: n };
    }
    function q(e) {
      return n("bs_caml_bytes").bytes_to_string(
        n("bs_bytes").uppercase(n("bs_caml_bytes").bytes_of_string(e)),
      );
    }
    function U(e) {
      return n("bs_caml_bytes").bytes_to_string(
        n("bs_bytes").lowercase(n("bs_caml_bytes").bytes_of_string(e)),
      );
    }
    function V(e) {
      return n("bs_caml_bytes").bytes_to_string(
        n("bs_bytes").capitalize(n("bs_caml_bytes").bytes_of_string(e)),
      );
    }
    function H(e) {
      return n("bs_caml_bytes").bytes_to_string(
        n("bs_bytes").uncapitalize(n("bs_caml_bytes").bytes_of_string(e)),
      );
    }
    var G = n("bs_caml_string").make,
      z = n("bs_bytes").blit_string;
    function j(e, t) {
      return e === t;
    }
    ((i.make = G),
      (i.init = l),
      (i.sub = s),
      (i.blit = z),
      (i.concat = m),
      (i.iter = p),
      (i.iteri = _),
      (i.map = f),
      (i.mapi = g),
      (i.trim = y),
      (i.escaped = C),
      (i.index = v),
      (i.index_opt = R),
      (i.rindex = I),
      (i.rindex_opt = x),
      (i.index_from = L),
      (i.index_from_opt = E),
      (i.rindex_from = T),
      (i.rindex_from_opt = $),
      (i.contains = N),
      (i.contains_from = P),
      (i.rcontains_from = M),
      (i.uppercase = q),
      (i.lowercase = U),
      (i.capitalize = V),
      (i.uncapitalize = H),
      (i.uppercase_ascii = w),
      (i.lowercase_ascii = A),
      (i.capitalize_ascii = F),
      (i.uncapitalize_ascii = O),
      (i.compare = B),
      (i.equal = j),
      (i.split_on_char = W));
  },
  null,
);
