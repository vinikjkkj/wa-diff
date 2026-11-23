__d(
  "CometFullPageSimpleRouteDispatcher",
  [
    "CometRouterDispatcherContext",
    "ExecutionEnvironment",
    "FBLogger",
    "buildCometRouterDispatcher",
    "goForceFullPageRedirectTo",
    "react",
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
      var t = e.children,
        n = c(function () {
          return d();
        }, []);
      return u.jsx(r("CometRouterDispatcherContext").Provider, {
        value: n,
        children: t,
      });
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.default = m));
  },
  98,
);
