__d(
  "CometRouteCache",
  ["normalizeCometRouterUrl"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {};
    function s(t, n) {
      var o = r("normalizeCometRouterUrl")(t);
      e[o] =
        (n == null ? void 0 : n.prefetchable) === !1
          ? { type: "nonprefetchable_route", url: n.url }
          : n;
    }
    function u(t) {
      var n = r("normalizeCometRouterUrl")(t);
      return e[n];
    }
    function c(t) {
      Object.keys(e).forEach(function (n) {
        n.startsWith(t) && delete e[n];
      });
    }
    var d = null,
      m = { dump: d, getRoute: u, install: s, invalidatePath: c };
    l.default = m;
  },
  98,
);
