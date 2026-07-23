__d(
  "buildWAWebCometRouterStateProvider",
  [
    "CometRouteStore",
    "CometRouterFocusRegion.react",
    "buildBaseCometRouterStateProvider",
    "buildCometRouter",
    "deferredLoadComponent",
    "react",
    "requireDeferred",
    "useCometOnBeforeUnloadDialog",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = r("deferredLoadComponent")(
        r("requireDeferred")("CometRouteActorToaster.react").__setRef(
          "buildWAWebCometRouterStateProvider",
        ),
      ),
      c = {
        LoadingStates: {},
        RouteActorToaster: u,
        RouterFocusRegion: r("CometRouterFocusRegion.react"),
      };
    function d(e) {
      var t,
        n = babelHelpers.extends({}, e, {
          uiComponents: (t = e.uiComponents) != null ? t : c,
        }),
        o = r("buildCometRouter")(n, r("CometRouteStore"));
      return r("buildBaseCometRouterStateProvider")(
        o,
        r("useCometOnBeforeUnloadDialog"),
        n,
      );
    }
    l.default = d;
  },
  98,
);
