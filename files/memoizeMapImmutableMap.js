__d(
  "memoizeMapImmutableMap",
  ["immutable"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t;
      return function (o, a) {
        var n = a || t || r("immutable").Map();
        return (
          (t = n.withMutations(function (t) {
            (n.forEach(function (e, n) {
              o.has(n) || t.delete(n);
            }),
              o.forEach(function (n, r) {
                t.set(r, e(r, n));
              }));
          })),
          t
        );
      };
    }
    l.default = e;
  },
  98,
);
