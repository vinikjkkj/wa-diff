__d(
  "WAArrayUtils",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      return e;
    }
    function l(e, t) {
      var n = e.pop();
      t < e.length && (e[t] = n);
    }
    function* s(e, t) {
      for (var n = 0; n < e.length; n += t) yield e.slice(n, n + t);
    }
    function u(t, n) {
      return c(t, n, e);
    }
    function c(e, t, n) {
      var r = new Map();
      for (var o of e) {
        var a,
          i = t(o),
          l = (a = r.get(i)) != null ? a : [];
        (l.push(n(o)), r.set(i, l));
      }
      return r;
    }
    ((i.removeIndexWithoutPreservingOrder = l),
      (i.peekEvery = s),
      (i.groupBy = u),
      (i.groupByAndMap = c));
  },
  66,
);
