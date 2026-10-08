__d(
  "CometFullPageSimpleRouteDispatcher",
  [
    "CometRouterDispatcherContext",
    "ExecutionEnvironment",
    "FBLogger",
    "buildCometRouterDispatcher",
    "goForceFullPageRedirectTo",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = s || (s = o("react")),
      c = s.useMemo;
    function d() {
      var t = {
        go: function (t, n) {
          r("goForceFullPageRedirectTo")(t);
        },
        goAsync: function () {
          throw r("FBLogger")("comet_infra").mustfixThrow(
            "CometRouter.goAsync is not implemented yet on web",
          );
        },
        goBack: function () {
          (e || (e = r("ExecutionEnvironment"))).canUseDOM &&
            window.history.back();
        },
        goTo: function (t, n) {
          r("goForceFullPageRedirectTo")(t.url);
        },
        goToAsync: function () {
          throw r("FBLogger")("comet_infra").mustfixThrow(
            "CometRouter.goToAsync is not implemented yet on web",
          );
        },
        popPushView: function () {
          (e || (e = r("ExecutionEnvironment"))).canUseDOM &&
            window.history.back();
        },
        prefetchRouteDefinition: function () {},
        prefetchRouteQueries: function (t, n) {
          return {
            cancel: function () {},
            usePrefetchedEntrypointForRouting: function () {},
          };
        },
        preloadRouteCode: function (t, n) {},
      };
      return new (o("buildCometRouterDispatcher").Dispatcher)(t);
    }
    function m(e) {
      var t = o("react-compiler-runtime").c(3),
        n = e.children,
        a;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = d()), (t[0] = a))
        : (a = t[0]);
      var i = a,
        l;
      return (
        t[1] !== n
          ? ((l = u.jsx(r("CometRouterDispatcherContext").Provider, {
              value: i,
              children: n,
            })),
            (t[1] = n),
            (t[2] = l))
          : (l = t[2]),
        l
      );
    }
    l.default = m;
  },
  98,
);
