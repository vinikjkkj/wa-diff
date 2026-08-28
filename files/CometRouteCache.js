__d(
  "CometRouteCache",
  ["normalizeCometRouterUrl"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {};
    function s(e) {
      return (e == null ? void 0 : e.prefetchable) === !1
        ? { type: "nonprefetchable_route", url: e.url }
        : e;
    }
    function u(t, n) {
      var o = r("normalizeCometRouterUrl")(t);
      e[o] = s(n);
    }
    function c(t) {
      var n = r("normalizeCometRouterUrl")(t);
      return e[n];
    }
    function d(t) {
      Object.keys(e).forEach(function (n) {
        n.startsWith(t) && delete e[n];
      });
    }
    var m = null,
      p = { dump: m, getRoute: c, install: u, invalidatePath: d };
    l.default = p;
  },
  98,
);
