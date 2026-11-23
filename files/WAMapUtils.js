__d(
  "WAMapUtils",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e, t) {
      return new Map(
        Array.from(e.entries()).map(function (e) {
          return [e[0], t(e[1], e[0])];
        }),
      );
    }
    i.mapValues = e;
  },
  66,
);
