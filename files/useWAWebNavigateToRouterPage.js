__d(
  "useWAWebNavigateToRouterPage",
  [
    "WAWebCometRouterGating",
    "WAWebNavBarCometRouting",
    "useCometRouterDispatcher",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n = r("useCometRouterDispatcher")(),
        a = o("WAWebNavBarCometRouting").getCometRouteForNavBarItem(e);
      return a != null &&
        n != null &&
        o("WAWebCometRouterGating").isCometRouterIntegrationEnabled()
        ? function () {
            n.go(a, babelHelpers.extends({ navigationType: "navigation" }, t));
          }
        : null;
    }
    l.default = e;
  },
  98,
);
