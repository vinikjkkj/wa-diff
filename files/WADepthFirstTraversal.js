__d(
  "WADepthFirstTraversal",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(t, n, r) {
      var o = n(t);
      (o.forEach(function (t) {
        return e(t, n, r);
      }),
        r(t));
    }
    i.default = e;
  },
  66,
);
