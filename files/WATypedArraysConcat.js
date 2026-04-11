__d(
  "WATypedArraysConcat",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e, t, n) {
      n === void 0 && (n = 0);
      var r = t.reduce(function (e, t) {
          return e + t.length;
        }, n),
        o = new e(r),
        a = 0;
      return (
        t.forEach(function (e) {
          (o.set(e, a), (a += e.length));
        }),
        o
      );
    }
    i.concatTypedArrays = e;
  },
  66,
);
