__d(
  "JSONStringifyBigIntSafe",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = function (t) {
        return JSON.stringify(t, function (e, t) {
          return typeof t == "bigint" ? t.toString() : t;
        });
      },
      l = e;
    i.default = l;
  },
  66,
);
