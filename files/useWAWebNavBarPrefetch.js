__d(
  "useWAWebNavBarPrefetch",
  [
    "WAWebCometRouterGating",
    "WAWebNavBarCometRouting",
    "WAWebNoop",
    "react",
    "react-compiler-runtime",
    "useCometRouterDispatcher",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e || (e = o("react"))).useCallback;
    function u(e) {
      var t = o("react-compiler-runtime").c(6),
        n = r("useCometRouterDispatcher")(),
        a;
      t[0] !== n || t[1] !== e
        ? ((a = function () {
            if (
              o("WAWebCometRouterGating").isCometRouterIntegrationEnabled() &&
              n != null
            ) {
              var t = o("WAWebNavBarCometRouting").getCometRouteForNavBarItem(
                e,
              );
              if (t == null) return;
              n.preloadRouteCode(t);
            }
          }),
          (t[0] = n),
          (t[1] = e),
          (t[2] = a))
        : (a = t[2]);
      var i = a;
      if (
        !o("WAWebCometRouterGating").isCometRouterIntegrationEnabled() ||
        n == null
      ) {
        var l;
        return (
          t[3] === Symbol.for("react.memo_cache_sentinel")
            ? ((l = { onMouseEnter: r("WAWebNoop") }), (t[3] = l))
            : (l = t[3]),
          l
        );
      }
      var s;
      return (
        t[4] !== i
          ? ((s = { onMouseEnter: i }), (t[4] = i), (t[5] = s))
          : (s = t[5]),
        s
      );
    }
    l.default = u;
  },
  98,
);
