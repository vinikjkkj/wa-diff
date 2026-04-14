__d(
  "useWAWebNavBarPrefetch",
  [
    "WAWebCometRouterGating",
    "WAWebNavBarCometRouting",
    "WAWebNoop",
    "react",
    "useCometRouterDispatcher",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e || (e = o("react"))).useCallback;
    function u(e) {
      var t = r("useCometRouterDispatcher")(),
        n = s(
          function () {
            if (
              o("WAWebCometRouterGating").isCometRouterIntegrationEnabled() &&
              t != null
            ) {
              var n = o("WAWebNavBarCometRouting").getCometRouteForNavBarItem(
                e,
              );
              if (n == null) return;
              t.preloadRouteCode(n);
            }
          },
          [t, e],
        );
      return !o("WAWebCometRouterGating").isCometRouterIntegrationEnabled() ||
        t == null
        ? { onMouseEnter: r("WAWebNoop") }
        : { onMouseEnter: n };
    }
    l.default = u;
  },
  98,
);
