__d(
  "getSecondTopViewInfo",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      var t = e.hosted,
        n = e.main,
        r = e.pushViewStack;
      return r == null || r.length === 0
        ? null
        : {
            routeInfo: r.length === 1 ? (t != null ? t : n) : r[r.length - 2],
            viewType: r.length > 1 ? "push" : t != null ? "hosted" : "main",
          };
    }
    i.default = e;
  },
  66,
);
