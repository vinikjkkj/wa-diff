__d(
  "useWAWebNavigateToRouterPage",
  [
    "WAWebCometRouterGating",
    "WAWebNavBarCometRouting",
    "react-compiler-runtime",
    "useCometRouterDispatcher",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n = o("react-compiler-runtime").c(6),
        a = r("useCometRouterDispatcher")(),
        i;
      n[0] !== e
        ? ((i = o("WAWebNavBarCometRouting").getCometRouteForNavBarItem(e)),
          (n[0] = e),
          (n[1] = i))
        : (i = n[1]);
      var l = i,
        s;
      return (
        n[2] !== l || n[3] !== a || n[4] !== t
          ? ((s =
              l != null &&
              a != null &&
              o("WAWebCometRouterGating").isCometRouterIntegrationEnabled()
                ? function () {
                    a.go(
                      l,
                      babelHelpers.extends({ navigationType: "navigation" }, t),
                    );
                  }
                : null),
            (n[2] = l),
            (n[3] = a),
            (n[4] = t),
            (n[5] = s))
          : (s = n[5]),
        s
      );
    }
    l.default = e;
  },
  98,
);
