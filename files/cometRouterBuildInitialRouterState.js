__d(
  "cometRouterBuildInitialRouterState",
  [
    "CometHeroLogging",
    "CometProductAttribution",
    "MaintainedRouteConfig",
    "cometRouterConstants",
    "getTimeSpentDataFromConfig",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, a, i, l, s, u, c, d) {
      var m;
      d === void 0 && (d = !1);
      var p = u != null ? u : "initial",
        _ = null,
        f = null,
        g = n != null ? n : r("getTimeSpentDataFromConfig")(e, null, null, p),
        h =
          a != null
            ? i != null
              ? i
              : r("getTimeSpentDataFromConfig")(a, null, null, p)
            : null;
      if (l != null) {
        var y, C;
        ((_ = l.makeCometRouteContainer(
          l.getEnvironmentProviderForRoute(e),
          e.rootView,
          {
            routeParams: e.params,
            routeProps: e.rootView.props,
            timeSpentMetaData: g,
          },
        )),
          a != null &&
            (f = l.makeCometRouteContainer(
              l.getEnvironmentProviderForRoute(a),
              a.rootView,
              {
                routeParams: a.params,
                routeProps: a.rootView.props,
                timeSpentMetaData: h,
              },
            )),
          (y = _) == null || y.loadIfNeeded(),
          (C = f) == null || C.loadIfNeeded());
      }
      var b = d
          ? void 0
          : r("CometHeroLogging").genHeroInteractionUUIDAndMarkStart(t),
        v =
          ((m = o("MaintainedRouteConfig").getMaintainedRouteConfig(
            e.tabKey,
          )) == null
            ? void 0
            : m.maintained) === !0,
        S = {
          main: {
            entryPointContainer: _,
            mainScrollKey: v ? Date.now() : null,
            mutableState: {},
            navigationInteractionID: b,
            productAttribution: o(
              "CometProductAttribution",
            ).getProductAttributionFromRoute(e, "via_cold_start"),
            referrer: {
              isBackgroundRoute: a != null,
              navigationType: p,
              url: s,
            },
            route: e,
            timeSpentMetaData: g,
          },
          routeKey: c != null ? c : r("cometRouterConstants").INIT_ROUTE_KEY,
        };
      return (
        a != null &&
          (S = babelHelpers.extends({}, S, {
            pushViewStack: [
              {
                depth: 1,
                entryPointContainer: f,
                key: "pushView-key-" + Date.now(),
                mutableState: {},
                navigationInteractionID: b,
                productAttribution: o(
                  "CometProductAttribution",
                ).getProductAttributionFromRoute(a, "via_cold_start"),
                referrer: { navigationType: p },
                route: a,
                timeSpentMetaData: h,
              },
            ],
          })),
        S
      );
    }
    l.default = e;
  },
  98,
);
