__d(
  "parseCometRouteFetchResult",
  [
    "CometRouteResolverRunner",
    "ConstUriUtils",
    "FBLogger",
    "asyncToGeneratorRuntime",
    "buildCometRouteFromDefinition",
    "buildRouteParams",
    "normalizeCometRouterConstUri",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          var a;
          if (n != null && n.type === "routeRedirect") {
            var i = yield e(n.redirectUrl, n.redirectResult);
            return babelHelpers.extends({}, i, {
              prefetchable:
                i.prefetchable === !0 && n.routeRedirect.prefetchable !== !1,
            });
          }
          if (n != null && n.type === "routeResolver") {
            var l = n.routeResolver,
              s = n.timeSpentMetaData;
            try {
              var u = r("normalizeCometRouterConstUri")(t),
                c = yield o("CometRouteResolverRunner").routeResolverRunner(
                  l,
                  u,
                );
              if (c != null && c.type === "route_definition")
                return {
                  initialTimeSpentMetaData: s,
                  prefetchable: !0,
                  route: c.getRoute(),
                };
            } catch (e) {
              r("FBLogger")("comet_router").mustfix(
                "Failed to resolve route for url: %s",
                t,
              );
            }
          }
          if (n == null || n.type !== "routeDefinition")
            return {
              prefetchable: !0,
              route: { type: "unmatched_route", url: t },
            };
          var d = {},
            m = o("ConstUriUtils").getUri(r("normalizeCometRouterConstUri")(t));
          d = m != null ? Object.fromEntries(m.getQueryParams()) : {};
          var p = n.routeDefinition,
            _ = n.routeMatchInfos,
            f = n.timeSpentMetaData,
            g = _[_.length - 1],
            h = g.instanceParams,
            y = g.routeParams,
            C = g.routePath,
            b = babelHelpers.extends({}, h, d);
          return (
            !p.hostableView &&
              !((a = p.cannotBeHosted) != null && a) &&
              (p = babelHelpers.extends({}, p, { hostableView: p.rootView })),
            {
              initialTimeSpentMetaData: f,
              prefetchable: p.prefetchable !== !1,
              route: r("buildCometRouteFromDefinition")(
                p,
                t,
                r("buildRouteParams")(y, b, null),
                C,
              ),
            }
          );
        })),
        s.apply(this, arguments)
      );
    }
    l.default = e;
  },
  98,
);
