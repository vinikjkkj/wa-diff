__d(
  "BinarySearch",
  ["FBLogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        GREATEST_LOWER_BOUND: "GREATEST_LOWER_BOUND",
        GREATEST_STRICT_LOWER_BOUND: "GREATEST_STRICT_LOWER_BOUND",
        LEAST_STRICT_UPPER_BOUND: "LEAST_STRICT_UPPER_BOUND",
        LEAST_UPPER_BOUND: "LEAST_UPPER_BOUND",
        NEAREST: "NEAREST",
      },
      s = function (t, n) {
        if (typeof t != "number" || typeof n != "number")
          throw r("FBLogger")("comet_infra").mustfixThrow(
            "The default comparator can only be used with sequences of numbers.",
          );
        return t - n;
      },
      u = e.GREATEST_LOWER_BOUND,
      c = e.GREATEST_STRICT_LOWER_BOUND,
      d = e.LEAST_STRICT_UPPER_BOUND,
      m = e.LEAST_UPPER_BOUND,
      p = e.NEAREST;
    function _(e, t, n, r, o) {
      o === void 0 && (o = s);
      var a = m,
        i = g(e, t, n, r, o, a);
      if (n <= i && i < r) {
        var l = e(i);
        return o(l, t) === 0 ? l : void 0;
      } else return;
    }
    function f(e, t, n, r, o) {
      o === void 0 && (o = s);
      var a = m,
        i = g(e, t, n, r, o, a);
      return n <= i && i < r && o(e(i), t) === 0 ? i : -1;
    }
    function g(e, t, n, o, a, i) {
      switch (i) {
        case m:
          return h(e, t, n, o, a);
        case u:
          return y(e, t, n, o, a);
        case d:
          return C(e, t, n, o, a);
        case c:
          return b(e, t, n, o, a);
        case p:
          return v(e, t, n, o, a);
        default:
          throw r("FBLogger")("comet_infra").mustfixThrow("Invalid mode %s", i);
      }
    }
    function h(e, t, n, r, o) {
      for (var a = n, i = r; a + 1 < i; ) {
        var l = a + Math.floor((i - a) / 2);
        o(e(l), t) >= 0 ? (i = l) : (a = l);
      }
      return a < i && o(e(a), t) >= 0 ? a : i;
    }
    function y(e, t, n, r, o) {
      return C(e, t, n, r, o) - 1;
    }
    function C(e, t, n, r, o) {
      for (var a = n, i = r; a + 1 < i; ) {
        var l = a + Math.floor((i - a) / 2);
        o(e(l), t) > 0 ? (i = l) : (a = l);
      }
      return a < i && o(e(a), t) > 0 ? a : i;
    }
    function b(e, t, n, r, o) {
      return h(e, t, n, r, o) - 1;
    }
    function v(e, t, n, r, o) {
      var a = y(e, t, n, r, o),
        i = Math.abs(o(e(a), t)),
        l = Math.abs(o(e(a + 1), t));
      return i < l ? Math.max(a, n) : Math.min(a + 1, r - 1);
    }
    function S(e, t, n) {
      return _(
        function (t) {
          return e[t];
        },
        t,
        0,
        e.length,
        n,
      );
    }
    function R(e, t, n) {
      return f(
        function (t) {
          return e[t];
        },
        t,
        0,
        e.length,
        n,
      );
    }
    function L(e, t, n, r) {
      return g(
        function (t) {
          return e[t];
        },
        t,
        0,
        e.length,
        n,
        r,
      );
    }
    ((l.GREATEST_LOWER_BOUND = u),
      (l.GREATEST_STRICT_LOWER_BOUND = c),
      (l.LEAST_STRICT_UPPER_BOUND = d),
      (l.LEAST_UPPER_BOUND = m),
      (l.NEAREST = p),
      (l.find = _),
      (l.findIndex = f),
      (l.findBound = g),
      (l.leastUpperBound = h),
      (l.greatestLowerBound = y),
      (l.leastStrictUpperBound = C),
      (l.greatestStrictLowerBound = b),
      (l.nearest = v),
      (l.findInArray = S),
      (l.findIndexInArray = R),
      (l.findBoundInArray = L));
  },
  98,
);
