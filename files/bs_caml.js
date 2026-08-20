__d(
  "bs_caml",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e, t) {
      return e < t ? -1 : e === t ? 0 : 1;
    }
    function l(e, t) {
      return e ? (t ? 0 : 1) : t ? -1 : 0;
    }
    function s(e, t) {
      return e === t ? 0 : e < t ? -1 : e > t || e === e ? 1 : t === t ? -1 : 0;
    }
    function u(e, t) {
      return e === t ? 0 : e < t ? -1 : 1;
    }
    function c(e, t) {
      return e && t;
    }
    function d(e, t) {
      return e < t ? e : t;
    }
    function m(e, t) {
      return e < t ? e : t;
    }
    function p(e, t) {
      return e < t ? e : t;
    }
    function _(e, t) {
      return e < t ? e : t;
    }
    function f(e, t) {
      return e || t;
    }
    function g(e, t) {
      return e > t ? e : t;
    }
    function h(e, t) {
      return e > t ? e : t;
    }
    function y(e, t) {
      return e > t ? e : t;
    }
    function C(e, t) {
      return e > t ? e : t;
    }
    function b(e, t) {
      return e[1] === t[1] ? e[0] === t[0] : !1;
    }
    function v(e, t) {
      var n = t[0],
        r = e[0];
      return r > n ? !0 : r < n ? !1 : e[1] >= t[1];
    }
    function S(e, t) {
      return !b(e, t);
    }
    function R(e, t) {
      return !v(e, t);
    }
    function L(e, t) {
      return e[0] > t[0] ? !0 : e[0] < t[0] ? !1 : e[1] > t[1];
    }
    function E(e, t) {
      return !L(e, t);
    }
    function k(e, t) {
      return v(e, t) ? t : e;
    }
    function I(e, t) {
      return L(e, t) ? e : t;
    }
    ((i.caml_int_compare = e),
      (i.caml_bool_compare = l),
      (i.caml_float_compare = s),
      (i.caml_string_compare = u),
      (i.caml_bool_min = c),
      (i.caml_int_min = d),
      (i.caml_float_min = m),
      (i.caml_string_min = p),
      (i.caml_int32_min = _),
      (i.caml_bool_max = f),
      (i.caml_int_max = g),
      (i.caml_float_max = h),
      (i.caml_string_max = y),
      (i.caml_int32_max = C),
      (i.i64_eq = b),
      (i.i64_neq = S),
      (i.i64_lt = R),
      (i.i64_gt = L),
      (i.i64_le = E),
      (i.i64_ge = v),
      (i.i64_min = k),
      (i.i64_max = I));
  },
  null,
);
