__d(
  "buildWAWebCometRouterStateProvider",
  [
    "CometRouteStore",
    "CometRouterFocusRegion.react",
    "WAWebWindowsQueryParams",
    "buildBaseCometRouterStateProvider",
    "buildCometRouter",
    "deferredLoadComponent",
    "justknobx",
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
      },
      d = -1,
      m = 36e5;
    function p() {
      var e = r("justknobx")._("5792");
      return !Number.isFinite(e) || e <= 0 ? d : Math.max(m, e);
    }
    function _(e) {
      var t,
        n,
        a = babelHelpers.extends({}, e, {
          cometRouterConstantsOverride: babelHelpers.extends(
            { NAVIGATION_COUNT_THRESHOLD: d, RELOAD_RESOURCE_THRESHOLD: p() },
            e.cometRouterConstantsOverride,
          ),
          persistentParameters: [].concat(
            o("WAWebWindowsQueryParams").WINDOWS_QUERY_PARAMS,
            (t = e.persistentParameters) != null ? t : [],
          ),
          uiComponents: (n = e.uiComponents) != null ? n : c,
        }),
        i = r("buildCometRouter")(a, r("CometRouteStore"));
      return r("buildBaseCometRouterStateProvider")(
        i,
        r("useCometOnBeforeUnloadDialog"),
        a,
      );
    }
    l.default = _;
  },
  98,
);
