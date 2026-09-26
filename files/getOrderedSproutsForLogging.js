__d(
  "getOrderedSproutsForLogging",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      return Array.from(e.keys()).sort(function (t, n) {
        var r = e.get(t),
          o = e.get(n);
        return r && o ? r.index - o.index : 0;
      });
    }
    i.default = e;
  },
  66,
);
