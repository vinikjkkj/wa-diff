__d(
  "bs_caml_option",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      return e.BS_PRIVATE_NESTED_SOME_NONE !== void 0;
    }
    function l(e) {
      return e === void 0
        ? { BS_PRIVATE_NESTED_SOME_NONE: 0 }
        : e !== null && e.BS_PRIVATE_NESTED_SOME_NONE !== void 0
          ? {
              BS_PRIVATE_NESTED_SOME_NONE:
                (e.BS_PRIVATE_NESTED_SOME_NONE + 1) | 0,
            }
          : e;
    }
    function s(e) {
      if (e != null) return l(e);
    }
    function u(e) {
      if (e !== void 0) return l(e);
    }
    function c(e) {
      if (e !== null) return l(e);
    }
    function d(e) {
      if (!(e !== null && e.BS_PRIVATE_NESTED_SOME_NONE !== void 0)) return e;
      var t = e.BS_PRIVATE_NESTED_SOME_NONE;
      if (t !== 0) return { BS_PRIVATE_NESTED_SOME_NONE: (t - 1) | 0 };
    }
    function m(e) {
      if (e !== void 0) return d(e);
    }
    function p(e) {
      return e !== void 0 ? e.VAL : e;
    }
    ((i.nullable_to_opt = s),
      (i.undefined_to_opt = u),
      (i.null_to_opt = c),
      (i.valFromOption = d),
      (i.some = l),
      (i.isNested = e),
      (i.option_get = m),
      (i.option_unwrap = p));
  },
  null,
);
