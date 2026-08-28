__d(
  "FormHooksValidators",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      return e == null ? ["This field is required."] : [];
    }
    function l(e) {
      return e == null || e === "" ? ["This field is required."] : [];
    }
    function s(e, t) {
      return e == null
        ? ["This field is required"]
        : e.length < t
          ? ["Must be at least " + t + " characters long."]
          : [];
    }
    function u(e) {
      return e == null || e.length === 0
        ? ["At least one selection is required."]
        : [];
    }
    function c(e, t) {
      var n,
        r = (n = e == null ? void 0 : e.length) != null ? n : 0;
      return r > t
        ? t === 1
          ? ["Only one selection is allowed."]
          : ["Only " + t + " selections are allowed."]
        : [];
    }
    function d(e) {
      return c(e, 1);
    }
    function m(e) {
      return function (t) {
        return e
          .map(function (e) {
            return e(t);
          })
          .flat();
      };
    }
    ((i.isRequired = e),
      (i.isNonEmptyString = l),
      (i.isStringWithMinLength = s),
      (i.isArrayWithAtLeastOneItem = u),
      (i.isArrayWithAtMostOneItem = d),
      (i.combineMultiValidators = m));
  },
  66,
);
