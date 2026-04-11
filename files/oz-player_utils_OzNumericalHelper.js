__d(
  "oz-player/utils/OzNumericalHelper",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = 1e-5;
    function l(t, n, r) {
      return (r === void 0 && (r = e), Math.abs(n - t) <= r);
    }
    function s(t, n, r) {
      return (r === void 0 && (r = e), t > n && !l(t, n, r));
    }
    function u(t, n, r) {
      return (r === void 0 && (r = e), t < n && !l(t, n, r));
    }
    function c(t, n, r) {
      return (r === void 0 && (r = e), u(t, n, r) || l(t, n, r));
    }
    function d(t, n, r) {
      return (r === void 0 && (r = e), s(t, n, r) || l(t, n, r));
    }
    ((i.equalTo = l),
      (i.greaterThan = s),
      (i.lessThan = u),
      (i.lessThanOrEqual = c),
      (i.greaterThanOrEqual = d));
  },
  66,
);
