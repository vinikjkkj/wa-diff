__d(
  "useCometRouterLinkEventHandlers",
  [
    "ExecutionEnvironment",
    "ODS",
    "emptyFunction",
    "gkx",
    "react",
    "react-compiler-runtime",
    "useCometRouterLinkEventHandlersBase",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c = s || (s = o("react")),
      d = c.useCallback,
      m = c.useMemo,
      p = /async(?:-post)?|dialog(?:-post)?|theater|toggle/;
    function _(e) {
      "use no forget";
      var t = e.dispatcherExtras,
        n = e.href,
        a = e.isRouterLink,
        i = e.onBlur,
        l = e.onFocus,
        s = e.onHoverEnd,
        c = e.onHoverMove,
        _ = e.onHoverStart,
        f = e.onPress,
        g = e.onPressStart,
        h = e.onTransitionOptimistic,
        y = e.prefetchQueriesOnHover,
        C = e.prefetchQueriesOnMount_I_KNOW_WHAT_IM_DOING,
        b = e.preloadCodeOnMount,
        v = e.preventLocalNavigation,
        S = e.rel,
        R = e.target,
        L = y === !0 ? "button_aggressive" : "button",
        E = m(
          function () {
            var e = !r("gkx")("20935") && S != null && S.match(p) != null;
            return a && !e;
          },
          [a, S],
        ),
        k = d(
          function () {
            (u || (u = o("ODS"))).bumpEntityKey(
              2994,
              "comet_preloading",
              "prefetch_route_queries." + L + ".preloaded",
            );
          },
          [L],
        ),
        I = d(
          function () {
            (u || (u = o("ODS"))).bumpEntityKey(
              2994,
              "comet_preloading",
              "prefetch_route_queries." + L + ".used",
            );
          },
          [L],
        ),
        T = d(function (e) {
          return !(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
        }, []),
        D = r("useCometRouterLinkEventHandlersBase")({
          delayQueryCleanup: !0,
          dispatcherExtras: t,
          href: n,
          isRouterLink: E,
          onBlur: i,
          onFocus: l,
          onHoverEnd: s,
          onHoverMove: c,
          onHoverStart: _,
          onPress: f,
          onPressStart: g,
          onQueryPreload: k,
          onQueryUsed: I,
          onTransitionOptimistic: h,
          prefetchQueriesOnHover: y,
          prefetchQueriesOnMount_I_KNOW_WHAT_IM_DOING: C,
          preloadCodeOnMount: b,
          preventLocalNavigation: v,
          shouldTriggerNavOnPress: T,
          target: R,
        }),
        x = D.onBlur,
        $ = D.onFocus,
        P = D.onHoverEnd,
        N = D.onHoverMove,
        M = D.onHoverStart,
        w = D.onPress,
        A = D.onPressStart;
      return {
        onBlur: x,
        onFocus: $,
        onHoverEnd: P,
        onHoverMove: N,
        onHoverStart: M,
        onPress: w,
        onPressStart: A,
      };
    }
    function f(e) {
      var t = o("react-compiler-runtime").c(1),
        n;
      if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
        var a;
        ((n = {
          onBlur: (a = r("emptyFunction")),
          onFocus: a,
          onHoverEnd: a,
          onHoverMove: a,
          onHoverStart: a,
          onPress: a,
          onPressStart: a,
        }),
          (t[0] = n));
      } else n = t[0];
      return n;
    }
    var g = (e || (e = r("ExecutionEnvironment"))).canUseDOM ? _ : f,
      h = g;
    l.default = h;
  },
  98,
);
