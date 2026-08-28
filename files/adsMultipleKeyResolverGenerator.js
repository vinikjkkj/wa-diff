__d(
  "adsMultipleKeyResolverGenerator",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e, t, n) {
      return e.pivots[n] == null || t[n] === e.pivots[n];
    }
    function l(t, n, r) {
      return r.every(function (r) {
        return e(t, n, r);
      });
    }
    function s(e, t) {
      return t.reduce(function (n, r, o) {
        return e.pivots[r] != null ? n + Math.pow(2, t.length - o) : n;
      }, 0);
    }
    function u(e) {
      return function (t, n, r) {
        return l(r, t, e) ? (n && s(n, e) > s(r, e) ? n : r) : n;
      };
    }
    i.default = u;
  },
  66,
);
