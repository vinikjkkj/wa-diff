__d(
  "cometRouterPreloadRouteCode",
  [
    "Bootloader",
    "CometRouterLogEventUtils",
    "Run",
    "cometRouterLogger",
    "cometRouterSelectNavigation",
    "normalizeCometRouterUrl",
    "promiseDone",
    "requireDeferred",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("requireDeferred")("CometRelayEF").__setRef(
      "cometRouterPreloadRouteCode",
    );
    function s(t, n) {
      var r = n == null ? void 0 : n.entryPoint;
      if (n == null || t == null || r == null) return;
      var o = t,
        a = n;
      function i(t) {
        var n = e.getModuleIfRequireable();
        if (n) {
          var r = { routeParams: o.params, routeProps: a.props };
          n.fetchPredictedEntryPointResources(t, r);
        }
      }
      var l = r.getModuleIfRequireable();
      l ? i(l) : r.onReady(i);
    }
    function u(e, t, n, a, i, l) {
      var u = r("normalizeCometRouterUrl")(e);
      r("promiseDone")(i.fetchRoute(u, l), function (e) {
        if (e.type === "valid_route" && e.tracePolicy !== "comet.error") {
          var l,
            u = r("cometRouterSelectNavigation")(e, t, n.from, a, i),
            c = u.target,
            d = c.route,
            m = c.view,
            p = (l = u.modal) != null ? l : {},
            _ = p.route,
            f = p.view;
          if (
            (r("cometRouterLogger").log({
              eventName: o("CometRouterLogEventUtils").CometRouterLoggingEvent
                .PRELOAD_ROUTE_CODE,
              mainRoute: d,
              modalRoute: _,
            }),
            m != null && m.allResources)
          ) {
            var g = m.allResources;
            (f != null && f.allResources && (g = g.concat(f.allResources)),
              o("Run").onAfterLoad(function () {
                (g.forEach(function (e) {
                  e.preload();
                }),
                  r("Bootloader").forceFlush());
              }),
              s(d, m),
              s(_, f));
          }
        }
      });
    }
    l.default = u;
  },
  98,
);
