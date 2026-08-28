__d(
  "bs_belt_Option",
  ["bs_caml_option", "bs_curry"],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e, t) {
      if (e !== void 0 && t(n("bs_caml_option").valFromOption(e))) return e;
    }
    function l(t, r) {
      return e(t, n("bs_curry").__1(r));
    }
    function s(e, t) {
      if (e !== void 0) return t(n("bs_caml_option").valFromOption(e));
    }
    function u(e, t) {
      return s(e, n("bs_curry").__1(t));
    }
    function c(e) {
      if (e !== void 0) return n("bs_caml_option").valFromOption(e);
      throw { RE_EXN_ID: "Not_found", Error: new Error() };
    }
    function d(e, t, r) {
      return e !== void 0 ? r(n("bs_caml_option").valFromOption(e)) : t;
    }
    function m(e, t, r) {
      return d(e, t, n("bs_curry").__1(r));
    }
    function p(e, t) {
      if (e !== void 0)
        return n("bs_caml_option").some(
          t(n("bs_caml_option").valFromOption(e)),
        );
    }
    function _(e, t) {
      return p(e, n("bs_curry").__1(t));
    }
    function f(e, t) {
      if (e !== void 0) return t(n("bs_caml_option").valFromOption(e));
    }
    function g(e, t) {
      return f(e, n("bs_curry").__1(t));
    }
    function h(e, t) {
      return e !== void 0 ? n("bs_caml_option").valFromOption(e) : t;
    }
    function y(e) {
      return e !== void 0;
    }
    function C(e) {
      return e === void 0;
    }
    function b(e, t, r) {
      return e !== void 0
        ? t !== void 0
          ? r(
              n("bs_caml_option").valFromOption(e),
              n("bs_caml_option").valFromOption(t),
            )
          : !1
        : t === void 0;
    }
    function v(e, t, r) {
      return b(e, t, n("bs_curry").__2(r));
    }
    function S(e, t, r) {
      return e !== void 0
        ? t !== void 0
          ? r(
              n("bs_caml_option").valFromOption(e),
              n("bs_caml_option").valFromOption(t),
            )
          : 1
        : t !== void 0
          ? -1
          : 0;
    }
    function R(e, t, r) {
      return S(e, t, n("bs_curry").__2(r));
    }
    ((i.keepU = e),
      (i.keep = l),
      (i.forEachU = s),
      (i.forEach = u),
      (i.getExn = c),
      (i.mapWithDefaultU = d),
      (i.mapWithDefault = m),
      (i.mapU = p),
      (i.map = _),
      (i.flatMapU = f),
      (i.flatMap = g),
      (i.getWithDefault = h),
      (i.isSome = y),
      (i.isNone = C),
      (i.eqU = b),
      (i.eq = v),
      (i.cmpU = S),
      (i.cmp = R));
  },
  null,
);
