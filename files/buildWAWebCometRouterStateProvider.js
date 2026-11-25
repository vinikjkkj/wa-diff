__d(
  "buildWAWebCometRouterStateProvider",
  [
    "CometRouteStore",
    "CometRouterErrorRoot_MISSING_FIXME",
    "CometRouterFocusRegion.react",
    "WAWebWindowsQueryParams",
    "buildBaseCometRouterStateProvider",
    "buildCometRouter",
    "justknobx",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = {
        ErrorRoot: r("CometRouterErrorRoot_MISSING_FIXME"),
        LoadingStates: {},
        RouteActorToaster: null,
        RouterFocusRegion: r("CometRouterFocusRegion.react"),
      },
      c = -1,
      d = 36e5;
    function m() {
      var e = r("justknobx")._("5792");
      return !Number.isFinite(e) || e <= 0 ? c : Math.max(d, e);
    }
    function p(e) {
      var t,
        n,
        a = babelHelpers.extends({}, e, {
          cometRouterConstantsOverride: babelHelpers.extends(
            {
              NAVIGATION_COUNT_THRESHOLD: c,
              REFRESH_ON_CLIENT_CONSISTENCY: !1,
              RELOAD_RESOURCE_THRESHOLD: m(),
            },
            e.cometRouterConstantsOverride,
          ),
          persistentParameters: [].concat(
            o("WAWebWindowsQueryParams").WINDOWS_QUERY_PARAMS,
            (t = e.persistentParameters) != null ? t : [],
          ),
          uiComponents: (n = e.uiComponents) != null ? n : u,
        }),
        i = r("buildCometRouter")(a, r("CometRouteStore"));
      return r("buildBaseCometRouterStateProvider")(i, f, a);
    }
    var _ = [function () {}, { current: null }];
    function f() {
      return _;
    }
    l.default = p;
  },
  98,
);
