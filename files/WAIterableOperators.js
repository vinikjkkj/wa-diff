__d(
  "WAIterableOperators",
  ["err"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function* e(e) {
      for (var t of e) yield t;
    }
    function* s(e, t) {
      var n = 0;
      for (var r of e) (yield t(r, n), n++);
    }
    function u(e, t, n) {
      return (
        n === void 0 && (n = 1),
        (function* () {
          if (n === 0) throw r("err")("Step can't be zero.");
          if (n > 0) {
            if (e > t) return;
            for (var o = e; o < t; o += n) yield o;
          } else {
            if (e < t) return;
            for (var a = e; a > t; a += n) yield a;
          }
        })()
      );
    }
    function* c(e, t) {
      var n = 0;
      for (var r of e) (t(r, n) && (yield r), n++);
    }
    function* d(e, t) {
      if (t < 0) throw r("err")("Count must be a positive integer");
      var n = 0;
      for (var o of e) {
        if (n >= t) return;
        (yield o, n++);
      }
    }
    function m(e) {
      for (var t of e) return t;
    }
    ((l.iteratorFromArray = e),
      (l.mapIterator = s),
      (l.rangeIterator = u),
      (l.filterIterator = c),
      (l.takeIterator = d),
      (l.first = m));
  },
  98,
);
