__d(
  "getRootRouteInfo",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      return e.pushViewStack != null && e.pushViewStack.length > 0
        ? e.pushViewStack[e.pushViewStack.length - 1]
        : e.main;
    }
    i.default = e;
  },
  66,
);
